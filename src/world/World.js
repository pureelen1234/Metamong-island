/**
 * World.js — 씬 조립 + 시간대(20분 하루) 조명/하늘/물/날씨 전환
 * 렌더링에는 손대지 않고, "세계의 상태"만 관리한다.
 */
import * as THREE from 'three';
import { HEIGHTS, WATER_LEVEL } from '../terrain/Heightmap.js';
import { Terrain } from '../terrain/Terrain.js';
import { Water } from '../terrain/Water.js';
import { Skybox } from '../skybox/Skybox.js';
import { Scenery } from './Scenery.js';
import { Path } from './Path.js';
import { SKY_KEYS, DAY_SECONDS, WEATHERS, HALF } from '../config.js';
import { RNG } from '../terrain/Noise.js';

const GRAY = new THREE.Color('#dfe8ef');
const SHALLOW = new THREE.Color('#8feadf');
const DEEP = new THREE.Color('#31c6cd');
const NIGHT_DIR = new THREE.Vector3(-0.22, 0.86, 0.34).normalize();

// 툰 셰이딩은 빛을 "더한 양"으로 그대로 쓰기 때문에, 부드러운 셰이딩 때의 밝기를 그대로 두면
// 계단이 하얗게 날아간다. 조명 세기만 낮추고 색은 팔레트 그대로 살린다(런타임 튜닝용)
export const LIGHT_GAIN = { hemi: 0.52, ambient: 0.26, sun: 1.25, fill: 0.22 };

// 키프레임 컬러 이름 → 팔레트 필드 이름
const COLOR_MAP = {
  top: 'skyTop',
  bottom: 'skyBottom',
  fog: 'fog',
  sun: 'sun',
  hemiSky: 'hemiSky',
  hemiGround: 'hemiGround',
};

export class World {
  constructor(atlases) {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2('#f2fcf5', 0.0062);

    this.terrain = new Terrain(HEIGHTS);
    this.scene.add(this.terrain.group);

    this.water = new Water();
    this.scene.add(this.water.mesh);

    this.sky = new Skybox();
    this.scene.add(this.sky.mesh);

    // ── 조명: 하늘빛 + 크림 반사광 + 부드러운 채움광 (그림자가 검게 죽지 않게)
    this.hemi = new THREE.HemisphereLight('#fff4e2', '#dcf5c6', 1.5);
    this.scene.add(this.hemi);

    this.ambient = new THREE.AmbientLight('#fff8ec', 0.5);
    this.scene.add(this.ambient);

    this.sunLight = new THREE.DirectionalLight('#ffe9c6', 1.1);
    this.sunLight.position.set(12, 30, -18);
    this.sunLight.target.position.set(0, 0, 0);

    // ① 그림자 — 플레이어 주변 ±30m 바운드만 1024 섀도맵에 담는다(모바일 예산)
    this.sunLight.castShadow = true;
    const shadow = this.sunLight.shadow;
    shadow.mapSize.set(1024, 1024);
    shadow.camera.left = -30;
    shadow.camera.right = 30;
    shadow.camera.top = 30;
    shadow.camera.bottom = -30;
    shadow.camera.near = 1;
    shadow.camera.far = 170;
    shadow.bias = -0.0005;
    shadow.normalBias = 0.02;
    shadow.radius = 1.5; // PCF 탭을 살짝 넓혀 가장자리를 부드럽게
    shadow.camera.updateProjectionMatrix();
    shadow.needsUpdate = true;

    this.scene.add(this.sunLight);
    this.scene.add(this.sunLight.target);
    this.shadowFocus = new THREE.Vector3(0, 0, 0);

    // 반대편에서 살짝 채우는 하늘색 빛 — 그늘진 면도 보랏빛으로 보송하게
    this.fillLight = new THREE.DirectionalLight('#dcefff', 0.4);
    this.fillLight.position.set(-22, 16, 26);
    this.fillLight.target.position.set(0, 0, 0);
    this.scene.add(this.fillLight);
    this.scene.add(this.fillLight.target);

    // ── HD-2D 배경 소품 — 도트 건물·나무·바위·울타리·가로등 (모두 빌보드)
    this.scenery = new Scenery(this.terrain, atlases);
    this.scene.add(this.scenery.group);

    // 잔디 위 오솔길 (부두 → 광장 → 공방·자판기·등대)
    this.path = new Path(this.terrain);
    this.scene.add(this.path.group);

    // ── 팔레트(재사용 객체)
    this.keyColors = SKY_KEYS.map((k) => {
      const o = { t: k.t, sunIntensity: k.sunIntensity, hemiIntensity: k.hemiIntensity, night: k.night };
      for (const key of Object.keys(COLOR_MAP)) o[key] = new THREE.Color(k[key]);
      return o;
    });
    this.palette = {
      skyTop: new THREE.Color(),
      skyBottom: new THREE.Color(),
      fog: new THREE.Color(),
      sun: new THREE.Color(),
      hemiSky: new THREE.Color(),
      hemiGround: new THREE.Color(),
      waterShallow: new THREE.Color(),
      waterDeep: new THREE.Color(),
      sunIntensity: 1,
      hemiIntensity: 1,
      night: 0,
    };

    this.weather = WEATHERS.clear;
    this.weatherBlend = 0;
    this.lightGain = { ...LIGHT_GAIN };
    // 스프라이트는 조명을 받지 않는 MeshBasicMaterial → 시간대 색을 직접 곱해 준다
    this.spriteLight = new THREE.Color('#ffffff');

    this.rain = this.#buildRain();
    this.scene.add(this.rain.points);

    this.tmpDir = new THREE.Vector3();
    this.discDir = new THREE.Vector3();
    this.time = 0;
  }

  #buildRain() {
    const count = 420;
    const rng = new RNG(771);
    const pos = new Float32Array(count * 3);
    const speed = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = rng.range(-14, 14);
      pos[i * 3 + 1] = rng.range(0, 16);
      pos[i * 3 + 2] = rng.range(-14, 14);
      speed[i] = rng.range(7, 12);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      color: '#d7ecf7',
      size: 0.09,
      transparent: true,
      opacity: 0.0,
      depthWrite: false,
      sizeAttenuation: true,
      toneMapped: false,
    });
    const points = new THREE.Points(geo, mat);
    points.name = 'Rain';
    points.visible = false;
    points.frustumCulled = false;
    return { points, speed, count };
  }

  setWeather(weather) {
    this.weather = weather;
  }

  /** 시간대 팔레트 보간 (색은 재사용 객체에 기록) */
  #sampleSky(elapsed) {
    const t = ((elapsed % DAY_SECONDS) + DAY_SECONDS) % DAY_SECONDS;
    const keys = this.keyColors;
    let i = 0;
    while (i < keys.length - 2 && t >= keys[i + 1].t) i++;
    const a = keys[i];
    const b = keys[i + 1];
    const raw = (t - a.t) / Math.max(1e-6, b.t - a.t);
    const f = raw * raw * (3 - 2 * raw);

    const p = this.palette;
    for (const [key, field] of Object.entries(COLOR_MAP)) p[field].copy(a[key]).lerp(b[key], f);
    p.sunIntensity = a.sunIntensity + (b.sunIntensity - a.sunIntensity) * f;
    p.hemiIntensity = a.hemiIntensity + (b.hemiIntensity - a.hemiIntensity) * f;
    p.night = a.night + (b.night - a.night) * f;

    // 물 색
    p.waterShallow.copy(SHALLOW).lerp(p.skyBottom, 0.22);
    p.waterDeep.copy(DEEP).lerp(p.skyTop, 0.18);
    const darkK = 1 - p.night * 0.28;
    p.waterShallow.multiplyScalar(darkK);
    p.waterDeep.multiplyScalar(darkK);
    return p;
  }

  /** 태양/달 방향 */
  #discDirection(elapsed, out) {
    const t = ((elapsed % DAY_SECONDS) + DAY_SECONDS) % DAY_SECONDS;
    if (t >= 960) return out.copy(NIGHT_DIR);
    const arc = Math.min(1, Math.max(0, t / 960));
    const theta = Math.PI * arc;
    return out.set(Math.cos(theta) * 0.92, Math.sin(theta) * 0.9, -0.3).normalize();
  }

  /**
   * @param {number} dt
   * @param {number} elapsed 하루 경과 초
   * @param {THREE.Camera} camera
   * @param {THREE.Vector3} playerPos
   */
  update(dt, elapsed, camera, playerPos) {
    this.time += dt;
    const p = this.#sampleSky(elapsed);

    // 날씨 보정 (흐림/이슬비 → 채도를 낮추고 빛을 줄인다)
    const targetBlend = this.weather.id === 'drizzle' ? 0.55 : this.weather.id === 'cloudy' ? 0.32 : 0;
    this.weatherBlend += (targetBlend - this.weatherBlend) * Math.min(1, dt * 0.8);
    if (this.weatherBlend > 0.001) {
      const k = this.weatherBlend;
      p.skyTop.lerp(GRAY, k * 0.55);
      p.skyBottom.lerp(GRAY, k * 0.45);
      p.fog.lerp(GRAY, k * 0.4);
      p.sun.lerp(GRAY, k * 0.3);
      p.sunIntensity *= 1 - k * 0.35;
      p.hemiIntensity *= 1 - k * 0.15;
    }

    // 조명
    this.hemi.color.copy(p.hemiSky);
    this.hemi.groundColor.copy(p.hemiGround);
    const gain = this.lightGain;
    this.hemi.intensity = p.hemiIntensity * gain.hemi;
    this.sunLight.color.copy(p.sun);
    this.sunLight.intensity = p.sunIntensity * gain.sun;
    this.ambient.color.copy(p.hemiSky);
    this.ambient.intensity = (0.46 - p.night * 0.1) * gain.ambient;
    this.fillLight.intensity = (0.42 - p.night * 0.16) * gain.fill;
    // 그늘진 면이 회색으로 죽지 않게, 채움광은 태양 색 쪽으로 따뜻하게
    this.fillLight.color.copy(p.sun).lerp(p.skyBottom, 0.3);

    // 스프라이트 틴트: 낮에는 원색, 노을은 따뜻하게, 밤에는 보랏빛으로 가라앉힌다
    const dayK = 1 - p.night * 0.46;
    this.spriteLight.copy(p.sun).lerp(p.hemiSky, 0.42).lerp(GRAY, this.weatherBlend * 0.32).multiplyScalar(dayK);

    const dir = this.#discDirection(elapsed, this.tmpDir);
    this.discDir.copy(dir);

    // 그림자 바운드를 플레이어 주변으로 따라가게 한다(섬 전체를 1024맵에 눌러 담지 않는다)
    if (playerPos) this.shadowFocus.set(playerPos.x, 0, playerPos.z);
    this.sunLight.position.copy(dir).multiplyScalar(70).add(this.shadowFocus);
    this.sunLight.target.position.copy(this.shadowFocus);
    this.sunLight.target.updateMatrixWorld();

    // 하늘 · 안개
    this.sky.setPalette({
      skyTop: p.skyTop,
      skyBottom: p.skyBottom,
      sun: p.sun,
      night: p.night,
      discDir: this.discDir,
      elapsed: this.time,
    });
    if (camera) this.sky.update(camera.position);
    this.scene.fog.color.copy(p.fog);
    this.scene.fog.density = 0.0055 + this.weatherBlend * 0.004;

    // 물
    this.water.update(this.time, p);

    // 도트 소품 빌보드 · 비
    this.scenery.update(dt, camera);
    this.#updateRain(dt, playerPos);
  }

  #updateRain(dt, playerPos) {
    const visible = this.weather.id === 'drizzle' && this.weatherBlend > 0.25;
    const pts = this.rain.points;
    pts.visible = visible;
    if (!visible) return;
    pts.material.opacity = 0.55 * this.weatherBlend;
    const arr = pts.geometry.attributes.position.array;
    const cx = playerPos ? playerPos.x : 0;
    const cz = playerPos ? playerPos.z : 0;
    for (let i = 0; i < this.rain.count; i++) {
      const iy = i * 3 + 1;
      arr[iy] -= this.rain.speed[i] * dt;
      if (arr[iy] < 0) {
        arr[iy] = 14 + Math.random() * 4;
        arr[i * 3] = cx + (Math.random() - 0.5) * 26;
        arr[i * 3 + 2] = cz + (Math.random() - 0.5) * 26;
      }
    }
    pts.geometry.attributes.position.needsUpdate = true;
    pts.position.set(0, 0, 0);
  }

  /** 섬 지형 유효 범위 */
  get halfExtent() {
    return HALF;
  }

  get waterLevel() {
    return WATER_LEVEL;
  }

  dispose() {
    this.scene.traverse((o) => {
      if (o.isMesh || o.isPoints || o.isSprite) {
        if (o.geometry) o.geometry.dispose();
        if (o.material) {
          if (o.material.map) o.material.map.dispose();
          o.material.dispose();
        }
      }
    });
  }
}

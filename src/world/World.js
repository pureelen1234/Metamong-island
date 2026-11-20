/**
 * World.js — 씬 조립 + 시간대(20분 하루) 조명/하늘/물/날씨 전환
 * 렌더링에는 손대지 않고, "세계의 상태"만 관리한다.
 */
import * as THREE from 'three';
import { HEIGHTS, WATER_LEVEL } from '../terrain/Heightmap.js';
import { Terrain } from '../terrain/Terrain.js';
import { Water } from '../terrain/Water.js';
import { Skybox } from '../skybox/Skybox.js';
import { Foliage } from '../foliage/Foliage.js';
import { Structures } from '../structures/Structures.js';
import { Props } from '../props/Props.js';
import { SKY_KEYS, DAY_SECONDS, WEATHERS, LANDMARKS, DITTOS, CATS, PROPS, SPAWN, HALF } from '../config.js';
import { RNG } from '../terrain/Noise.js';

const GRAY = new THREE.Color('#dfe8ef');
const SHALLOW = new THREE.Color('#8feadf');
const DEEP = new THREE.Color('#31c6cd');
const NIGHT_DIR = new THREE.Vector3(-0.22, 0.86, 0.34).normalize();

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
  constructor() {
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
    this.scene.add(this.sunLight);
    this.scene.add(this.sunLight.target);

    // 반대편에서 살짝 채우는 하늘색 빛 — 그늘진 면도 보랏빛으로 보송하게
    this.fillLight = new THREE.DirectionalLight('#dcefff', 0.4);
    this.fillLight.position.set(-22, 16, 26);
    this.fillLight.target.position.set(0, 0, 0);
    this.scene.add(this.fillLight);
    this.scene.add(this.fillLight.target);

    // ── 정적 자연물/구조물 (배치 자리 비켜 주기)
    const blockers = [
      ...LANDMARKS.map((l) => ({ x: l.x, z: l.z, r: l.id === 'dock' ? 3.4 : 3.0 })),
      ...DITTOS.map((d) => ({ x: d.x, z: d.z, r: 1.6 })),
      ...CATS.map((c) => ({ x: c.x, z: c.z, r: 1.5 })),
      ...PROPS.map((p) => ({ x: p.x, z: p.z, r: 1.4 })),
      { x: SPAWN.x, z: SPAWN.z, r: 2.2 },
    ];
    this.foliage = new Foliage(this.terrain, blockers);
    this.scene.add(this.foliage.group);

    this.structures = new Structures(this.terrain);
    this.scene.add(this.structures.group);

    this.props = new Props(this.terrain);
    this.scene.add(this.props.group);

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
    this.hemi.intensity = p.hemiIntensity;
    this.sunLight.color.copy(p.sun);
    this.sunLight.intensity = p.sunIntensity;
    this.ambient.color.copy(p.hemiSky);
    this.ambient.intensity = 0.46 - p.night * 0.1;
    this.fillLight.intensity = 0.42 - p.night * 0.16;
    this.fillLight.color.copy(p.skyBottom).lerp(p.sun, 0.25);

    const dir = this.#discDirection(elapsed, this.tmpDir);
    this.discDir.copy(dir);
    this.sunLight.position.copy(dir).multiplyScalar(60);
    this.sunLight.target.position.set(0, 0, 0);

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

    // 구조물 마커 · 비
    this.structures.update(dt);
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

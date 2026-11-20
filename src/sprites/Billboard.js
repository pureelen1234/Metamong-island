/**
 * Billboard.js — 바닥에 발을 붙인 세로 도트 스프라이트 빌보드
 *
 * · PlaneGeometry 원점을 '발밑 중앙'으로 옮겨 지형 높이에 그대로 세운다.
 * · 카메라를 향해 Y축으로만 회전한다(눕지 않는 HD-2D 빌보드).
 * · NearestFilter 텍스처 + alphaTest 컷아웃 → 흰 사각형 배경 없이 도트가 칼같이 선명.
 */
import * as THREE from 'three';

let shadowTex = null;
function shadowTexture() {
  if (shadowTex) return shadowTex;
  const c = document.createElement('canvas');
  c.width = c.height = 96;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(48, 48, 2, 48, 48, 46);
  g.addColorStop(0, 'rgba(255,255,255,0.92)');
  g.addColorStop(0.45, 'rgba(255,255,255,0.62)');
  g.addColorStop(0.78, 'rgba(255,255,255,0.24)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.ellipse(48, 48, 46, 46, 0, 0, Math.PI * 2);
  ctx.fill();
  shadowTex = new THREE.CanvasTexture(c);
  shadowTex.colorSpace = THREE.SRGBColorSpace;
  return shadowTex;
}

/** 발밑에 까는 부드러운 반투명 타원 그림자 */
export function blobShadow(radius = 0.34, opacity = 0.3) {
  const geo = new THREE.CircleGeometry(radius, 28);
  geo.rotateX(-Math.PI / 2);
  geo.scale(1, 1, 0.62);
  const mat = new THREE.MeshBasicMaterial({
    color: '#6d5a8a',
    map: shadowTexture(),
    alphaMap: shadowTexture(),
    transparent: true,
    opacity,
    depthWrite: false,
    toneMapped: false,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.renderOrder = 2;
  return mesh;
}

/** 바닥에 은은히 번지는 반짝 링 — 하드한 토러스 대신 부드러운 방사형 텍스처 */
let ringTex = null;
function ringTexture() {
  if (ringTex) return ringTex;
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 20, 64, 64, 62);
  g.addColorStop(0, 'rgba(255,214,232,0)');
  g.addColorStop(0.52, 'rgba(255,206,228,0.06)');
  g.addColorStop(0.76, 'rgba(255,190,220,0.85)');
  g.addColorStop(1, 'rgba(255,190,220,0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(64, 64, 62, 0, Math.PI * 2);
  ctx.fill();
  ringTex = new THREE.CanvasTexture(c);
  ringTex.colorSpace = THREE.SRGBColorSpace;
  return ringTex;
}

export function glowDisc(radius = 0.45) {
  const geo = new THREE.CircleGeometry(radius, 32);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.MeshBasicMaterial({
    map: ringTexture(),
    transparent: true,
    opacity: 0,
    depthWrite: false,
    toneMapped: false,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.renderOrder = 2;
  return mesh;
}

/** ♥ 반응 아이콘 (스프라이트 빌보드용) */
let heartTex = null;
export function heartTexture() {
  if (heartTex) return heartTex;
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d');
  ctx.font = '96px "Noto Sans CJK KR", system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.lineWidth = 11;
  ctx.strokeStyle = 'rgba(255,255,255,0.92)';
  ctx.strokeText('♥', 64, 68);
  ctx.fillStyle = '#ff86a8';
  ctx.fillText('♥', 64, 68);
  heartTex = new THREE.CanvasTexture(c);
  heartTex.colorSpace = THREE.SRGBColorSpace;
  return heartTex;
}

export function heartSprite(size = 0.42) {
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: heartTexture(), transparent: true, depthWrite: false, depthTest: false, toneMapped: false })
  );
  sprite.scale.set(size, size, 1);
  sprite.visible = false;
  return sprite;
}

export class Billboard {
  /**
   * @param {object} atlas atlas.js 가 만든 세트
   * @param {string} frameName 매니페스트의 프레임 이름
   * @param {{height?:number, exact?:boolean, flip?:boolean}} opts
   */
  constructor(atlas, frameName, opts = {}) {
    const { height = 1, exact = false } = opts;

    this.atlas = atlas;
    const frame = atlas.frames.get(frameName) || atlas.frames.values().next().value;
    this.height = height;
    this.exact = exact;
    this.aspect = exact ? frame.w / frame.h : atlas.cell[0] / atlas.cell[1];

    const geo = new THREE.PlaneGeometry(height * this.aspect, height);
    geo.translate(0, height / 2, 0);

    const map = atlas.texture.clone();
    map.needsUpdate = true;
    this.map = map;

    this.material = new THREE.MeshBasicMaterial({
      map,
      transparent: false,
      alphaTest: 0.45,
      depthWrite: true,
      depthTest: true,
      side: THREE.FrontSide,
      toneMapped: false,
      fog: true,
      color: 0xffffff,
    });

    this.mesh = new THREE.Mesh(geo, this.material);
    this.mesh.name = `Billboard_${atlas.set}_${frameName}`;
    this._wp = new THREE.Vector3();
    this.frame = null;
    this.flip = false;
    this.setFrame(frameName, !!opts.flip);
    this.mesh.userData.billboard = this;
  }

  /** 프레임(이름)과 좌우 반전을 텍스처 오프셋으로 지정 */
  setFrame(name, flip = this.flip) {
    const f = this.atlas.frames.get(name);
    if (!f) return this.frame;
    this.frame = f;
    this.flip = !!flip;

    const rw = 1 / this.atlas.cols;
    const rh = 1 / this.atlas.rows;
    // three.js UV 원점은 좌하단 → 행은 위에서부터 세므로 뒤집는다
    this.map.offset.set(flip ? f.col / this.atlas.cols : (f.col - 1) / this.atlas.cols, 1 - f.row / this.atlas.rows);
    this.map.repeat.set(flip ? -rw : rw, rh);
    this.map.needsUpdate = true;

    if (this.exact) {
      const aspect = f.w / f.h;
      if (Math.abs(aspect - this.aspect) > 1e-4) {
        this.aspect = aspect;
        this.mesh.geometry.dispose();
        const geo = new THREE.PlaneGeometry(this.height * aspect, this.height);
        geo.translate(0, this.height / 2, 0);
        this.mesh.geometry = geo;
      }
    }
    return f;
  }

  /** 카메라를 향해 Y축으로만 회전 (스프라이트가 눕지 않게) */
  faceCamera(camera) {
    this.mesh.getWorldPosition(this._wp);
    this.mesh.rotation.y = Math.atan2(camera.position.x - this._wp.x, camera.position.z - this._wp.z);
  }

  /** 시간대 조명 틴트 */
  setTint(color) {
    this.material.color.copy(color);
  }

  dispose() {
    this.map.dispose();
    this.material.dispose();
    this.mesh.geometry.dispose();
  }
}

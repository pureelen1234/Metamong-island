/**
 * parts.js — 색이 구워진 정적 메시를 1 Draw Call로 합치는 헬퍼 (Mesh/Material)
 * 몽글몽글 점토 질감: MeshStandardMaterial(roughness 0.9) + 부드러운 셰이딩.
 */
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { toonMaterial } from '../render/toon.js';

/** 점토/매트 질감 공통값 (참고용 — 실제 재질은 4단 툰 램프) */
export const CLAY = { roughness: 0.92, metalness: 0.0 };

/**
 * @param {THREE.BufferGeometry} geometry 새로 만든 지오메트리 (함수 안에서 소유권 이전)
 * @param {string|number} color
 * @param {{position?:number[], rotation?:number[], scale?:number[]}} opts
 */
export function part(geometry, color, opts = {}) {
  const src = geometry.index ? geometry.toNonIndexed() : geometry;
  if (src !== geometry) geometry.dispose();

  const { position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1] } = opts;
  const matrix = new THREE.Matrix4().compose(
    new THREE.Vector3(position[0], position[1], position[2]),
    new THREE.Quaternion().setFromEuler(new THREE.Euler(rotation[0], rotation[1], rotation[2])),
    new THREE.Vector3(scale[0], scale[1], scale[2])
  );
  src.applyMatrix4(matrix);
  src.deleteAttribute('uv');
  src.deleteAttribute('uv1');
  src.deleteAttribute('tangent');

  const c = new THREE.Color(color);
  const count = src.attributes.position.count;
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    arr[i * 3] = c.r;
    arr[i * 3 + 1] = c.g;
    arr[i * 3 + 2] = c.b;
  }
  src.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return src;
}

/* ── 둥글둥글 지오메트리 숏컷 ───────────────────────────────── */

/** 동글동글 구체 */
export function sphere(r, w = 16, h = 12) {
  return new THREE.SphereGeometry(r, w, h);
}

/** 모서리가 둥근 상자 (오두막 벽·가구용) */
export function rbox(w, h, d, radius = 0.06, seg = 2) {
  return new RoundedBoxGeometry(w, h, d, seg, radius);
}

/** 캡슐 (팔다리·나무기둥용) */
export function capsule(r, len, seg = 8) {
  return new THREE.CapsuleGeometry(r, len, 5, seg);
}

/** 매끈한 원통 (나무기둥·등대 몸통) */
export function cyl(rTop, rBottom, h, seg = 16) {
  return new THREE.CylinderGeometry(rTop, rBottom, h, seg, 1);
}

export function mergeParts(parts) {
  const merged = mergeGeometries(parts, false);
  parts.forEach((p) => p.dispose());
  if (!merged) throw new Error('mergeParts: 지오메트리 병합 실패');
  merged.computeBoundingSphere();
  return merged;
}

/** 버텍스 컬러 + 4단 툰 셰이딩 머티리얼 */
export function pastelMaterial(extra = {}) {
  return toonMaterial({ vertexColors: true, ...extra });
}

/** 여러 파트를 하나의 메시로 */
export function buildMesh(parts, extra = {}) {
  const geo = mergeParts(parts);
  const mesh = new THREE.Mesh(geo, pastelMaterial(extra));
  return mesh;
}

/** 부드러운 가장자리의 블롭 그림자 텍스처 (한 번만 생성) */
let shadowTex = null;
function shadowTexture() {
  if (shadowTex) return shadowTex;
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 31);
  g.addColorStop(0, 'rgba(255,255,255,0.95)');
  g.addColorStop(0.55, 'rgba(255,255,255,0.55)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(32, 32, 31, 0, Math.PI * 2);
  ctx.fill();
  shadowTex = new THREE.CanvasTexture(c);
  shadowTex.colorSpace = THREE.SRGBColorSpace;
  return shadowTex;
}

/** 가짜 그림자(블롭) — 진짜 섀도맵 위에 옅게 깔아 접지감만 보강한다 */
export function blobShadow(radius = 0.36, opacity = 0.06) {
  const geo = new THREE.CircleGeometry(radius, 24);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.MeshBasicMaterial({
    color: '#7c6a92',
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

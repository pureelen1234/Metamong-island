/**
 * parts.js — 색이 구워진 정적 메시를 1 Draw Call로 합치는 헬퍼 (Mesh/Material)
 * 파스텔 로우폴리 프롭/구조물/액터를 버텍스 컬러 하나로 합쳐 Draw Call 예산을 지킨다.
 */
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

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

export function mergeParts(parts) {
  const merged = mergeGeometries(parts, false);
  parts.forEach((p) => p.dispose());
  if (!merged) throw new Error('mergeParts: 지오메트리 병합 실패');
  merged.computeBoundingSphere();
  return merged;
}

/** 버텍스 컬러 + 플랫 셰이딩 파스텔 머티리얼 */
export function pastelMaterial(extra = {}) {
  return new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true, ...extra });
}

/** 여러 파트를 하나의 메시로 */
export function buildMesh(parts, extra = {}) {
  const geo = mergeParts(parts);
  const mesh = new THREE.Mesh(geo, pastelMaterial(extra));
  return mesh;
}

/** 가짜 그림자(블롭) — 모바일에서 섀도맵 없이 접지감을 준다 */
export function blobShadow(radius = 0.36, opacity = 0.16) {
  const geo = new THREE.CircleGeometry(radius, 18);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.MeshBasicMaterial({
    color: '#4a4258',
    transparent: true,
    opacity,
    depthWrite: false,
    toneMapped: false,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.renderOrder = 2;
  return mesh;
}

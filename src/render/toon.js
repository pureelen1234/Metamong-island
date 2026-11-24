/**
 * toon.js — 셀 셰이딩 키트
 * ① 4단 툰 램프(NearestFilter DataTexture) ② 잉크 헐 외곽선(BackSide · 뷰공간 노멀 오프셋)
 * 이 파일 하나로 프로젝트 전체 재질/외곽선 규칙이 통일된다.
 */
import * as THREE from 'three';

/** 초콜릿빛 잉크 — 시안의 따뜻한 딥브라운/다크네이비 계열 */
export const INK_COLOR = '#3b2d38';

/**
 * 4단 램프 (140 / 172 / 222 / 255) — 그늘 단을 너무 어둡게 두면 파스텔 톤이 회색으로 죽는다
 * NearestFilter라 계단이 그대로 살아남고, mipmap이 없어 밴드가 뭉개지지 않는다.
 */
const RAMP_DATA = [140, 140, 140, 255, 172, 172, 172, 255, 222, 222, 222, 255, 255, 255, 255, 255];

/** 4단 램프 텍스처를 새로 만든다(WebGL 컨텍스트 복구 시 재업로드용) */
export function makeRamp() {
  const tex = new THREE.DataTexture(new Uint8Array(RAMP_DATA), 4, 1, THREE.RGBAFormat);
  tex.minFilter = THREE.NearestFilter;
  tex.magFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}

export const RAMP = makeRamp();

/** 프로젝트 공통 툰 재질 */
export function toonMaterial(params = {}) {
  return new THREE.MeshToonMaterial({ gradientMap: RAMP, ...params });
}

/* ── 잉크 헐 ────────────────────────────────────────────────── */

const inkCache = new Map();

/** 외곽선만 그리는 단순 헐 재질 (균등 스케일 헐용) */
export const INK_HULL = new THREE.MeshBasicMaterial({
  color: INK_COLOR,
  side: THREE.BackSide,
  fog: true,
  polygonOffset: true, // 표면과 거의 같은 깊이에서 생기는 얼룩을 막는다
  polygonOffsetFactor: 1,
  polygonOffsetUnits: 1,
});

/**
 * BackSide 헐 재질. 뷰공간 노멀 방향으로 밀어내므로 메시 스케일과 무관하게 선 두께가 일정하고,
 * 인스턴싱(instanceMatrix)도 그대로 따라간다.
 * @param {number} thick 뷰/월드 단위 두께
 */
export function inkMaterial(thick) {
  const key = thick.toFixed(4);
  const hit = inkCache.get(key);
  if (hit) return hit;

  const mat = new THREE.MeshBasicMaterial({
    color: INK_COLOR,
    side: THREE.BackSide,
    fog: true,
    polygonOffset: true,
    polygonOffsetFactor: 1,
    polygonOffsetUnits: 1,
  });
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.thick = { value: thick };
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float thick;')
      .replace(
        '#include <project_vertex>',
        /* glsl */ `
        vec4 mvPosition = vec4( transformed, 1.0 );
        vec3 inkN = normal;
        #ifdef USE_INSTANCING
          mvPosition = instanceMatrix * mvPosition;
          inkN = mat3( instanceMatrix ) * inkN;
        #endif
        mvPosition = modelViewMatrix * mvPosition;
        mvPosition.xyz += normalize( normalMatrix * inkN ) * thick;
        gl_Position = projectionMatrix * mvPosition;`
      );
  };
  mat.customProgramCacheKey = () => `metamong-ink-${key}`;
  inkCache.set(key, mat);
  return mat;
}

/**
 * 메시에 잉크 외곽선을 붙인다. 지오메트리를 공유하므로 메모리 추가 없음(draw call만 +1).
 * @param {THREE.Mesh} mesh
 * @param {number} thick
 */
export function addInk(mesh, thick = 0.014) {
  if (!mesh || !mesh.geometry) return null;
  const ink = new THREE.Mesh(mesh.geometry, inkMaterial(thick));
  ink.name = `${mesh.name || 'mesh'}_Ink`;
  ink.castShadow = false;
  ink.receiveShadow = false;
  ink.frustumCulled = mesh.frustumCulled !== false;
  ink.userData.ink = true;
  ink.raycast = () => {}; // 외곽선은 터치 판정에서 제외
  mesh.add(ink);
  return ink;
}

/**
 * 균등 스케일 헐 — 구를 여러 개 겹뻔 붙인 수관/솔잎처럼 자기교차하는 지오메트리에 쓴다.
 * 스케일은 닮은변환이라 교차 관계가 그대로 유지되어, 실루엣 안쪽으로 삐져나오는 잉크 조각이 생기지 않는다.
 * @param {THREE.Mesh|THREE.InstancedMesh} mesh
 * @param {number} k 1.0보다 큰 스케일 비율 (지오메트리 중심 기준)
 */
export function addScaledInk(mesh, k = 1.02) {
  if (!mesh || !mesh.geometry) return null;
  const geo = mesh.geometry;
  if (!geo.boundingSphere) geo.computeBoundingSphere();
  const c = geo.boundingSphere.center;

  // 스케일은 반드시 지오메트리에 구워야 한다. 오브젝트 스케일로 주면
  // 인스턴스의 이동값까지 같이 늘어나 섬 반대편에 검은 덩어리가 생긴다.
  const hull = geo.clone();
  const bake = new THREE.Matrix4()
    .makeTranslation(c.x, c.y, c.z)
    .multiply(new THREE.Matrix4().makeScale(k, k, k))
    .multiply(new THREE.Matrix4().makeTranslation(-c.x, -c.y, -c.z));
  hull.applyMatrix4(bake);

  const ink = mesh.isInstancedMesh
    ? new THREE.InstancedMesh(hull, INK_HULL, mesh.count)
    : new THREE.Mesh(hull, INK_HULL);
  if (mesh.isInstancedMesh) ink.instanceMatrix = mesh.instanceMatrix;
  ink.name = `${mesh.name || 'mesh'}_Ink`;
  ink.castShadow = false;
  ink.receiveShadow = false;
  ink.frustumCulled = mesh.frustumCulled !== false;
  ink.userData.ink = true;
  ink.raycast = () => {};
  mesh.add(ink);
  return ink;
}

/**
 * InstancedMesh용 잉크 헐 — 인스턴스 행렬 버퍼를 공유한다.
 * @param {THREE.InstancedMesh} inst
 * @param {number} thick
 */
export function addInstancedInk(inst, thick = 0.018) {
  if (!inst || !inst.geometry) return null;
  const ink = new THREE.InstancedMesh(inst.geometry, inkMaterial(thick), inst.count);
  ink.name = `${inst.name || 'inst'}_Ink`;
  ink.instanceMatrix = inst.instanceMatrix; // 같은 BufferAttribute 공유
  ink.instanceColor = null;
  ink.castShadow = false;
  ink.receiveShadow = false;
  ink.frustumCulled = inst.frustumCulled;
  ink.userData.ink = true;
  ink.raycast = () => {};
  inst.parent ? inst.parent.add(ink) : null;
  return ink;
}

/**
 * 단단한 솔리드 오브젝트 표식 — 그림자 양방향 + 외곽선을 한 번에.
 * @param {THREE.Object3D} mesh
 * @param {number} thick 0이면 외곽선 없음
 */
export function solid(mesh, thick = 0.014) {
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  if (thick > 0) addInk(mesh, thick);
  return mesh;
}

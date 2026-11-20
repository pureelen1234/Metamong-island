/**
 * Structures.js — 4단계 복구 예정 부지(부두·공방·고양이 쉼터·등대)
 * Phase 1에서는 '복구 전' 모습의 랜드마크로 배치하고, 부지 위에 표지 마커를 띄운다.
 */
import * as THREE from 'three';
import { LANDMARKS } from '../config.js';
import { part, buildMesh } from '../props/parts.js';

const WOOD = '#d9b992';
const WOOD_DARK = '#bf9b74';
const WOOD_LIGHT = '#ecd6b4';
const CREAM = '#f7eddd';
const CORAL = '#f2a9a2';
const PINK = '#f7d9e6';
const STONE = '#d8d2dd';

/* ── 부두: 물가에 박힌 낡은 말뚝과 빠진 판자 ───────────────────── */
function dockParts() {
  const parts = [];
  for (const x of [-0.95, 0.95]) {
    for (const z of [-1.6, 0.2, 1.9]) {
      parts.push(
        part(new THREE.BoxGeometry(0.16, 1.4, 0.16), WOOD_DARK, {
          position: [x, 0.55, z],
          rotation: [0, 0, x > 0 ? 0.05 : -0.04],
        })
      );
    }
  }
  const plankZ = [-1.7, -1.1, -0.5, 0.1, 0.7, 1.3, 1.9];
  plankZ.forEach((z, i) => {
    if (i === 2 || i === 5) return; // 빠진 판자
    parts.push(
      part(new THREE.BoxGeometry(2.2, 0.09, 0.46), i % 2 ? WOOD : WOOD_LIGHT, {
        position: [0, 1.02 + (i === 4 ? 0.03 : 0), z],
        rotation: [0, i === 3 ? 0.03 : 0, i === 1 ? 0.03 : i === 6 ? -0.05 : 0],
      })
    );
  });
  // 부서진 난간
  parts.push(
    part(new THREE.BoxGeometry(0.1, 0.8, 0.1), WOOD_DARK, {
      position: [1.0, 1.4, -1.5],
      rotation: [0.28, 0, 0.04],
    })
  );
  parts.push(
    part(new THREE.BoxGeometry(1.3, 0.1, 0.1), WOOD, {
      position: [0.5, 1.62, -1.62],
      rotation: [0, 0, -0.18],
    })
  );
  return parts;
}

/* ── 공방: 지붕이 반쯤 무너진 목조 작업장 ─────────────────────── */
function workshopParts() {
  const parts = [];
  parts.push(part(new THREE.BoxGeometry(3.2, 1.7, 2.6), CREAM, { position: [0, 0.85, 0] }));
  parts.push(part(new THREE.BoxGeometry(3.3, 0.12, 2.7), '#e6d6c0', { position: [0, 1.72, 0] }));
  // 기둥
  for (const [x, z] of [
    [-1.5, -1.2],
    [1.5, -1.2],
    [-1.5, 1.2],
    [1.5, 1.2],
  ]) {
    parts.push(part(new THREE.BoxGeometry(0.18, 2.2, 0.18), WOOD_DARK, { position: [x, 1.1, z] }));
  }
  // 무너진 지붕 한 쪽
  parts.push(
    part(new THREE.BoxGeometry(2.0, 0.14, 3.0), '#e8b39a', {
      position: [-0.85, 2.15, 0.1],
      rotation: [0.02, 0.04, -0.62],
    })
  );
  parts.push(
    part(new THREE.BoxGeometry(1.4, 0.12, 2.4), '#d9a48c', {
      position: [1.05, 1.95, 0.2],
      rotation: [0.14, -0.1, 0.3],
    })
  );
  // 문 · 창
  parts.push(part(new THREE.BoxGeometry(0.9, 1.3, 0.08), WOOD, { position: [0, 0.65, 1.32] }));
  parts.push(part(new THREE.BoxGeometry(0.55, 0.45, 0.06), '#cfe6ef', { position: [1.0, 1.05, 1.33] }));
  // 굴뚝 (기울어짐)
  parts.push(
    part(new THREE.BoxGeometry(0.42, 1.15, 0.42), '#e0cbb2', {
      position: [-1.1, 2.05, -0.8],
      rotation: [0, 0, 0.12],
    })
  );
  // 작업대
  parts.push(part(new THREE.BoxGeometry(1.2, 0.1, 0.55), WOOD_LIGHT, { position: [2.35, 0.68, 0.4] }));
  parts.push(part(new THREE.BoxGeometry(0.1, 0.68, 0.1), WOOD_DARK, { position: [1.85, 0.34, 0.16] }));
  parts.push(part(new THREE.BoxGeometry(0.1, 0.68, 0.1), WOOD_DARK, { position: [1.85, 0.34, 0.64] }));
  parts.push(part(new THREE.BoxGeometry(0.1, 0.68, 0.1), WOOD_DARK, { position: [2.85, 0.34, 0.16] }));
  parts.push(part(new THREE.BoxGeometry(0.1, 0.68, 0.1), WOOD_DARK, { position: [2.85, 0.34, 0.64] }));
  // 아직 쓰이지 않는 통나무
  parts.push(
    part(new THREE.CylinderGeometry(0.22, 0.22, 0.9, 6), WOOD, {
      position: [-2.2, 0.22, 1.1],
      rotation: [Math.PI / 2, 0, 0.3],
    })
  );
  return parts;
}

/* ── 고양이 쉼터: 지붕 한쪽이 주저앉은 작은 오두막 ───────────── */
function shelterParts() {
  const parts = [];
  parts.push(part(new THREE.BoxGeometry(2.0, 1.1, 1.8), PINK, { position: [0, 0.55, 0] }));
  parts.push(part(new THREE.BoxGeometry(2.02, 0.1, 1.82), '#e9c3d4', { position: [0, 1.12, 0] }));
  // 박공지붕
  parts.push(
    part(new THREE.BoxGeometry(2.3, 0.12, 1.05), '#f0b7b0', {
      position: [0, 1.5, -0.5],
      rotation: [-0.5, 0, 0],
    })
  );
  parts.push(
    part(new THREE.BoxGeometry(2.3, 0.12, 1.05), '#f3c3bb', {
      position: [0, 1.2, 0.72],
      rotation: [0.62, 0, 0],
    })
  );
  // 고양이 귀
  parts.push(part(new THREE.ConeGeometry(0.3, 0.5, 4), '#f4b0ad', { position: [-0.85, 1.72, 0.1], rotation: [0, 0.6, 0] }));
  parts.push(part(new THREE.ConeGeometry(0.3, 0.5, 4), '#f4b0ad', { position: [0.85, 1.7, 0.1], rotation: [0, -0.6, 0] }));
  // 출입구
  parts.push(part(new THREE.BoxGeometry(0.62, 0.72, 0.06), '#a4889b', { position: [0, 0.36, 0.92] }));
  // 무너진 벽 조각
  parts.push(
    part(new THREE.BoxGeometry(0.8, 0.5, 0.1), '#f2cbd9', {
      position: [-1.1, 0.22, 0.85],
      rotation: [0, 0.2, 0.25],
    })
  );
  // 방석
  parts.push(part(new THREE.BoxGeometry(0.7, 0.1, 0.5), '#ffd9e6', { position: [0.8, 0.06, 1.15] }));
  return parts;
}

/* ── 등대: 불 꺼진 유리등이 깨진 등대 ─────────────────────────── */
function lighthouseParts() {
  const parts = [];
  parts.push(part(new THREE.CylinderGeometry(0.64, 0.95, 4.0, 12, 1), CREAM, { position: [0, 2.0, 0] }));
  parts.push(part(new THREE.CylinderGeometry(0.9, 0.93, 0.34, 12, 1), CORAL, { position: [0, 0.95, 0] }));
  parts.push(part(new THREE.CylinderGeometry(0.72, 0.76, 0.3, 12, 1), CORAL, { position: [0, 2.5, 0] }));
  parts.push(part(new THREE.CylinderGeometry(0.82, 0.82, 0.14, 12, 1), '#cfc3c9', { position: [0, 4.05, 0] }));
  // 부서진 등롱: 기둥만 남음
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    parts.push(
      part(new THREE.BoxGeometry(0.07, 0.7, 0.07), '#a89aa4', {
        position: [Math.cos(a) * 0.45, 4.42, Math.sin(a) * 0.45],
        rotation: [0, a, i % 2 ? 0.08 : -0.06],
      })
    );
  }
  parts.push(part(new THREE.ConeGeometry(0.6, 0.4, 8), '#c9b8bf', { position: [0, 4.92, 0] }));
  // 문 · 창
  parts.push(part(new THREE.BoxGeometry(0.44, 0.9, 0.08), WOOD_DARK, { position: [0, 0.45, 0.9] }));
  parts.push(part(new THREE.BoxGeometry(0.26, 0.34, 0.06), '#b9d8e4', { position: [0, 2.05, 0.78] }));
  // 바닥 돌
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    parts.push(
      part(new THREE.DodecahedronGeometry(0.22, 0), STONE, {
        position: [Math.cos(a) * 1.15, 0.1, Math.sin(a) * 1.15],
        scale: [1.2, 0.7, 1.1],
      })
    );
  }
  return parts;
}

const BUILDERS = { dock: dockParts, workshop: workshopParts, shelter: shelterParts, lighthouse: lighthouseParts };
const MARKER_COLORS = { dock: '#9fdcea', workshop: '#f3c98e', shelter: '#f6bcd4', lighthouse: '#c6b6ea' };

export class Structures {
  constructor(terrain) {
    this.group = new THREE.Group();
    this.group.name = 'Structures';
    this.sites = [];
    this.time = 0;

    for (const lm of LANDMARKS) {
      const builder = BUILDERS[lm.id];
      if (!builder) continue;
      const y = lm.id === 'dock' ? -0.02 : Math.max(terrain.sampleHeight(lm.x, lm.z), 0.02) - 0.04;
      const mesh = buildMesh(builder());
      mesh.name = `Structure_${lm.id}`;
      mesh.position.set(lm.x, y, lm.z);
      mesh.rotation.y = lm.rot;
      // 고양이 쉼터는 고양이·주인공 체급에 맞게 축소 (다른 구조물은 실물 스케일)
      if (lm.id === 'shelter') mesh.scale.setScalar(0.72);
      this.group.add(mesh);

      this.sites.push({ ...lm, y, mesh });
    }

    // 부지 위에 떠 있는 작은 표식 원뿔 (InstancedMesh 1 Draw Call)
    const coneGeo = new THREE.ConeGeometry(0.17, 0.34, 5);
    coneGeo.rotateX(Math.PI);
    const coneMat = new THREE.MeshLambertMaterial({ flatShading: true });
    this.markers = new THREE.InstancedMesh(coneGeo, coneMat, this.sites.length);
    this.markers.name = 'StructureMarkers';
    this.markers.frustumCulled = false;
    this.sites.forEach((site, i) => {
      this.markers.setColorAt(i, new THREE.Color(MARKER_COLORS[site.id] || '#ffffff'));
    });
    if (this.markers.instanceColor) this.markers.instanceColor.needsUpdate = true;
    this.group.add(this.markers);

    this.#writeMarkerMatrices(0);
  }

  #writeMarkerMatrices(t) {
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const v = new THREE.Vector3();
    const s = new THREE.Vector3(1, 1, 1);
    this.sites.forEach((site, i) => {
      const bob = Math.sin(t * 1.6 + i * 1.7) * 0.12;
      v.set(site.x, site.y + site.markerY + bob, site.z);
      q.setFromEuler(new THREE.Euler(0, t * 0.9 + i, 0));
      m.compose(v, q, s);
      this.markers.setMatrixAt(i, m);
    });
    this.markers.instanceMatrix.needsUpdate = true;
  }

  update(dt) {
    this.time += dt;
    this.#writeMarkerMatrices(this.time);
  }
}

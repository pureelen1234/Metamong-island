/**
 * Foliage.js — InstancedMesh 자연물 (나무·소나무·덤불·꽃·조약돌)
 * 종류당 1 Draw Call. 시드 고정 배치로 새로고침해도 같은 섬이 나온다.
 */
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { HALF } from '../config.js';
import { RNG } from '../terrain/Noise.js';

const COLORS = {
  trunk: '#c9a98c',
  canopy: ['#a9d69b', '#b9e3ab', '#9ace97', '#c3e9b4', '#a2d9a0'],
  pine: ['#8ec6a0', '#9bd3ab', '#84bd98'],
  bush: ['#b6e0a6', '#a5d69b', '#c4e8b6'],
  flower: ['#ffd4e3', '#ffe9b0', '#ffffff', '#e2d4ff', '#ffc9d8', '#d8f0c8'],
  pebble: ['#d9d3e0', '#e6dfd2', '#cfd7dc', '#ded6cb'],
};

function merged(geos) {
  const g = mergeGeometries(geos, false);
  geos.forEach((x) => x.dispose());
  return g;
}

export class Foliage {
  /**
   * @param {import('../terrain/Terrain.js').Terrain} terrain
   * @param {{x:number,z:number,r:number}[]} blockers 구조물·액터 자리
   */
  constructor(terrain, blockers = []) {
    this.group = new THREE.Group();
    this.group.name = 'Foliage';
    this.terrain = terrain;
    this.blockers = blockers;
    this.placed = [];

    const rng = new RNG(20261120);
    this.#buildTrees(rng);
    this.#buildFlowers(rng);
    this.#buildPebbles(rng);
  }

  #blocked(x, z, dist) {
    for (const b of this.blockers) {
      const dx = x - b.x;
      const dz = z - b.z;
      if (dx * dx + dz * dz < (b.r + dist) * (b.r + dist)) return true;
    }
    return false;
  }

  #farEnough(x, z, dist) {
    const d2 = dist * dist;
    for (const p of this.placed) {
      const dx = x - p.x;
      const dz = z - p.z;
      if (dx * dx + dz * dz < d2) return false;
    }
    return true;
  }

  #randomSpot(rng, tries = 60) {
    for (let k = 0; k < tries; k++) {
      const x = rng.range(-HALF + 1.5, HALF - 1.5);
      const z = rng.range(-HALF + 1.5, HALF - 1.5);
      if (this.#blocked(x, z, 0.9)) continue;
      return { x, z };
    }
    return null;
  }

  #buildTrees(rng) {
    const roundTrees = [];
    const pines = [];

    // 둥근 파스텔 나무 118그루
    for (let i = 0; i < 220 && roundTrees.length < 118; i++) {
      const spot = this.#randomSpot(rng);
      if (!spot) continue;
      const h = this.terrain.sampleHeight(spot.x, spot.z);
      const slope = this.terrain.slopeAt(spot.x, spot.z);
      if (h < 0.72 || h > 2.45 || slope > 0.95) continue;
      if (!this.#farEnough(spot.x, spot.z, 2.05)) continue;
      this.placed.push(spot);
      roundTrees.push({ ...spot, h, s: rng.range(0.85, 1.3), rot: rng.range(0, Math.PI * 2), color: rng.pick(COLORS.canopy) });
    }

    // 소나무 34그루 (조금 높은 지대)
    for (let i = 0; i < 180 && pines.length < 34; i++) {
      const spot = this.#randomSpot(rng);
      if (!spot) continue;
      const h = this.terrain.sampleHeight(spot.x, spot.z);
      const slope = this.terrain.slopeAt(spot.x, spot.z);
      if (h < 1.5 || h > 2.6 || slope > 1.0) continue;
      if (!this.#farEnough(spot.x, spot.z, 2.0)) continue;
      this.placed.push(spot);
      pines.push({ ...spot, h, s: rng.range(0.8, 1.2), rot: rng.range(0, Math.PI * 2), color: rng.pick(COLORS.pine) });
    }

    // 덤불 64개
    const bushes = [];
    for (let i = 0; i < 160 && bushes.length < 64; i++) {
      const spot = this.#randomSpot(rng);
      if (!spot) continue;
      const h = this.terrain.sampleHeight(spot.x, spot.z);
      if (h < 0.6 || h > 2.2) continue;
      if (!this.#farEnough(spot.x, spot.z, 1.15)) continue;
      this.placed.push(spot);
      bushes.push({ ...spot, h, s: rng.range(0.7, 1.15), color: rng.pick(COLORS.bush) });
    }

    // ── 트렁크 (둥근 나무 + 소나무 공용)
    const trunkGeo = new THREE.CylinderGeometry(0.07, 0.11, 0.62, 5, 1);
    trunkGeo.translate(0, 0.31, 0);
    const trunkMat = new THREE.MeshLambertMaterial({ color: COLORS.trunk, flatShading: true });
    const trunkCount = roundTrees.length + pines.length;
    const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, trunkCount);
    trunks.name = 'FoliageTrunks';

    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const v = new THREE.Vector3();
    const sc = new THREE.Vector3();

    let idx = 0;
    for (const t of [...roundTrees, ...pines]) {
      q.setFromEuler(new THREE.Euler(0, t.rot, 0));
      v.set(t.x, t.h - 0.06, t.z);
      sc.set(t.s, t.s, t.s);
      m.compose(v, q, sc);
      trunks.setMatrixAt(idx++, m);
    }
    trunks.instanceMatrix.needsUpdate = true;
    trunks.frustumCulled = false;
    this.group.add(trunks);

    // ── 둥근 캐노피 (아이코사헤드론 2개 병합)
    const lobe1 = new THREE.IcosahedronGeometry(0.46, 0);
    lobe1.translate(0, 0.92, 0);
    const lobe2 = new THREE.IcosahedronGeometry(0.3, 0);
    lobe2.translate(0.1, 1.24, -0.05);
    const canopyGeo = merged([lobe1, lobe2]);
    const leafMat = new THREE.MeshLambertMaterial({ flatShading: true });
    const canopy = new THREE.InstancedMesh(canopyGeo, leafMat, roundTrees.length);
    canopy.name = 'FoliageCanopies';
    roundTrees.forEach((t, i) => {
      q.setFromEuler(new THREE.Euler(0, t.rot, 0));
      v.set(t.x, t.h - 0.06, t.z);
      sc.set(t.s, t.s * 1.02, t.s);
      m.compose(v, q, sc);
      canopy.setMatrixAt(i, m);
      canopy.setColorAt(i, new THREE.Color(t.color));
    });
    canopy.instanceMatrix.needsUpdate = true;
    if (canopy.instanceColor) canopy.instanceColor.needsUpdate = true;
    canopy.frustumCulled = false;
    this.group.add(canopy);

    // ── 소나무 잎 (원뿔 2단 병합)
    const cone1 = new THREE.ConeGeometry(0.44, 0.9, 6, 1);
    cone1.translate(0, 1.22, 0);
    const cone2 = new THREE.ConeGeometry(0.3, 0.66, 6, 1);
    cone2.translate(0, 1.72, 0);
    const pineGeo = merged([cone1, cone2]);
    const pine = new THREE.InstancedMesh(pineGeo, leafMat.clone(), pines.length);
    pine.name = 'FoliagePines';
    pines.forEach((t, i) => {
      q.setFromEuler(new THREE.Euler(0, t.rot, 0));
      v.set(t.x, t.h - 0.06, t.z);
      sc.set(t.s, t.s, t.s);
      m.compose(v, q, sc);
      pine.setMatrixAt(i, m);
      pine.setColorAt(i, new THREE.Color(t.color));
    });
    pine.instanceMatrix.needsUpdate = true;
    if (pine.instanceColor) pine.instanceColor.needsUpdate = true;
    pine.frustumCulled = false;
    this.group.add(pine);

    // ── 덤불
    const bushGeo = new THREE.IcosahedronGeometry(0.34, 0);
    bushGeo.scale(1.15, 0.78, 1.15);
    bushGeo.translate(0, 0.22, 0);
    const bush = new THREE.InstancedMesh(bushGeo, leafMat.clone(), bushes.length);
    bush.name = 'FoliageBushes';
    bushes.forEach((b, i) => {
      q.setFromEuler(new THREE.Euler(0, rng.range(0, 6.28), 0));
      v.set(b.x, b.h - 0.04, b.z);
      sc.set(b.s, b.s, b.s);
      m.compose(v, q, sc);
      bush.setMatrixAt(i, m);
      bush.setColorAt(i, new THREE.Color(b.color));
    });
    bush.instanceMatrix.needsUpdate = true;
    if (bush.instanceColor) bush.instanceColor.needsUpdate = true;
    bush.frustumCulled = false;
    this.group.add(bush);
  }

  #buildFlowers(rng) {
    const list = [];
    for (let i = 0; i < 900 && list.length < 300; i++) {
      const x = rng.range(-HALF + 2, HALF - 2);
      const z = rng.range(-HALF + 2, HALF - 2);
      const h = this.terrain.sampleHeight(x, z);
      if (h < 0.55 || h > 2.0) continue;
      if (this.#blocked(x, z, 0.3)) continue;
      list.push({ x, z, h, s: rng.range(0.75, 1.35), color: rng.pick(COLORS.flower) });
    }

    const geo = new THREE.ConeGeometry(0.055, 0.14, 5, 1);
    geo.translate(0, 0.1, 0);
    const mat = new THREE.MeshLambertMaterial({ flatShading: true });
    const mesh = new THREE.InstancedMesh(geo, mat, list.length);
    mesh.name = 'FoliageFlowers';
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const v = new THREE.Vector3();
    const sc = new THREE.Vector3();
    list.forEach((f, i) => {
      q.setFromEuler(new THREE.Euler(0, rng.range(0, 6.28), 0));
      v.set(f.x, f.h - 0.02, f.z);
      sc.set(f.s, f.s, f.s);
      m.compose(v, q, sc);
      mesh.setMatrixAt(i, m);
      mesh.setColorAt(i, new THREE.Color(f.color));
    });
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    mesh.frustumCulled = false;
    this.group.add(mesh);
  }

  #buildPebbles(rng) {
    const list = [];
    for (let i = 0; i < 500 && list.length < 170; i++) {
      const x = rng.range(-HALF + 1, HALF - 1);
      const z = rng.range(-HALF + 1, HALF - 1);
      const h = this.terrain.sampleHeight(x, z);
      if (h < -0.15 || h > 2.4) continue;
      if (this.#blocked(x, z, 0.2)) continue;
      list.push({ x, z, h, s: rng.range(0.5, 1.5), color: rng.pick(COLORS.pebble) });
    }

    const geo = new THREE.DodecahedronGeometry(0.13, 0);
    geo.scale(1.15, 0.7, 1.0);
    const mat = new THREE.MeshLambertMaterial({ flatShading: true });
    const mesh = new THREE.InstancedMesh(geo, mat, list.length);
    mesh.name = 'FoliagePebbles';
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const v = new THREE.Vector3();
    const sc = new THREE.Vector3();
    list.forEach((s, i) => {
      q.setFromEuler(new THREE.Euler(rng.range(-0.3, 0.3), rng.range(0, 6.28), rng.range(-0.3, 0.3)));
      v.set(s.x, s.h + 0.02, s.z);
      sc.set(s.s, s.s, s.s);
      m.compose(v, q, sc);
      mesh.setMatrixAt(i, m);
      mesh.setColorAt(i, new THREE.Color(s.color));
    });
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    mesh.frustumCulled = false;
    this.group.add(mesh);
  }
}

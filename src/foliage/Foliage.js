/**
 * Foliage.js — InstancedMesh 자연물 (구름 나무·벚꽃나무·솔잎 둥글 나무·덤불·꽃·풀·조약돌)
 * 종류당 1 Draw Call. 시드 고정 배치로 새로고침해도 같은 섬이 나온다.
 * 각진 다면체 대신 구체를 겹쳐 만든 몽글몽글 솜사탕 수관.
 */
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { HALF } from '../config.js';
import { RNG } from '../terrain/Noise.js';
import { CLAY } from '../props/parts.js';

const COLORS = {
  trunk: '#c99b6e',
  trunkPink: '#d3a894',
  canopy: ['#a6e08c', '#bceaa2', '#8fd67c', '#c8efac', '#9fdfa2', '#b2e68f'],
  blossom: ['#ffc6da', '#ffd5e3', '#ffb9d0', '#ffe0ea'],
  pine: ['#86cfa8', '#95d9b2', '#7ccb9f'],
  bush: ['#b3e59c', '#a3d98b', '#c6efb2'],
  flower: ['#fff0a8', '#ffc7d8', '#ffffff', '#e1d2ff', '#ffd9b0', '#cdeeb4', '#ffb9c9'],
  pebble: ['#d3cbe4', '#e0d5c0', '#cbd9dc', '#dbcfbe'],
  grass: ['#9fdd84', '#b1e79a', '#8ed276'],
};

function merged(geos) {
  const g = mergeGeometries(geos, false);
  geos.forEach((x) => x.dispose());
  return g;
}

function mat() {
  return new THREE.MeshStandardMaterial({ ...CLAY, color: '#ffffff' });
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
    this.#buildGrass(rng);
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
    const rounds = []; // 구름 나무 + 벚꽃나무 (수관 지오메트리 공유)
    const pines = [];
    const bushes = [];

    // 몽글 구름 나무 112그루
    for (let i = 0; i < 260 && rounds.length < 96; i++) {
      const spot = this.#randomSpot(rng);
      if (!spot) continue;
      const h = this.terrain.sampleHeight(spot.x, spot.z);
      const slope = this.terrain.slopeAt(spot.x, spot.z);
      if (h < 0.7 || h > 2.45 || slope > 0.95) continue;
      if (!this.#farEnough(spot.x, spot.z, 2.15)) continue;
      this.placed.push(spot);
      rounds.push({
        ...spot,
        h,
        s: rng.range(0.88, 1.28),
        rot: rng.range(0, Math.PI * 2),
        color: rng.pick(COLORS.canopy),
        pink: false,
      });
    }

    // 벚꽃 나무 22그루 (동화책 포인트)
    for (let i = 0; i < 160 && rounds.filter((r) => r.pink).length < 20; i++) {
      const spot = this.#randomSpot(rng);
      if (!spot) continue;
      const h = this.terrain.sampleHeight(spot.x, spot.z);
      const slope = this.terrain.slopeAt(spot.x, spot.z);
      if (h < 0.85 || h > 2.2 || slope > 0.9) continue;
      if (!this.#farEnough(spot.x, spot.z, 2.3)) continue;
      this.placed.push(spot);
      rounds.push({
        ...spot,
        h,
        s: rng.range(1.0, 1.32),
        rot: rng.range(0, Math.PI * 2),
        color: rng.pick(COLORS.blossom),
        pink: true,
      });
    }

    // 솔잎을 둥글게 다듬은 나무 30그루 (조금 높은 지대)
    for (let i = 0; i < 200 && pines.length < 26; i++) {
      const spot = this.#randomSpot(rng);
      if (!spot) continue;
      const h = this.terrain.sampleHeight(spot.x, spot.z);
      const slope = this.terrain.slopeAt(spot.x, spot.z);
      if (h < 1.45 || h > 2.6 || slope > 1.0) continue;
      if (!this.#farEnough(spot.x, spot.z, 2.1)) continue;
      this.placed.push(spot);
      pines.push({ ...spot, h, s: rng.range(0.82, 1.16), rot: rng.range(0, Math.PI * 2), color: rng.pick(COLORS.pine) });
    }

    // 덤불 60개
    for (let i = 0; i < 180 && bushes.length < 40; i++) {
      const spot = this.#randomSpot(rng);
      if (!spot) continue;
      const h = this.terrain.sampleHeight(spot.x, spot.z);
      if (h < 0.6 || h > 2.2) continue;
      if (!this.#farEnough(spot.x, spot.z, 1.1)) continue;
      this.placed.push(spot);
      bushes.push({ ...spot, h, s: rng.range(0.72, 1.12), color: rng.pick(COLORS.bush) });
    }

    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const v = new THREE.Vector3();
    const sc = new THREE.Vector3();

    // ── 둥근 나무기둥 (모든 나무 공용 · 1 Draw Call)
    const trunkGeo = new THREE.CylinderGeometry(0.13, 0.19, 1.18, 9, 1);
    trunkGeo.translate(0, 0.59, 0);
    // 기둥 위를 둥글게 마감
    const trunkCap = new THREE.SphereGeometry(0.132, 9, 6);
    trunkCap.translate(0, 1.17, 0);
    const fullTrunk = merged([trunkGeo, trunkCap]);
    const trunkMat = mat();
    const trunkCount = rounds.length + pines.length;
    const trunks = new THREE.InstancedMesh(fullTrunk, trunkMat, trunkCount);
    trunks.name = 'FoliageTrunks';
    let ti = 0;
    for (const t of [...rounds, ...pines]) {
      q.setFromEuler(new THREE.Euler(0, t.rot, 0));
      v.set(t.x, t.h - 0.05, t.z);
      sc.set(t.s, t.s, t.s);
      m.compose(v, q, sc);
      trunks.setMatrixAt(ti, m);
      trunks.setColorAt(ti, new THREE.Color(t.pink ? COLORS.trunkPink : COLORS.trunk));
      ti++;
    }
    trunks.instanceMatrix.needsUpdate = true;
    if (trunks.instanceColor) trunks.instanceColor.needsUpdate = true;
    trunks.frustumCulled = false;
    this.group.add(trunks);

    // ── 솜사탕 구름 수관 (구체 4개 병합 · 1 Draw Call)
    const lobeA = new THREE.SphereGeometry(0.62, 9, 7);
    lobeA.translate(0, 1.62, 0);
    const lobeB = new THREE.SphereGeometry(0.42, 8, 6);
    lobeB.translate(0.36, 1.7, 0.12);
    const lobeC = new THREE.SphereGeometry(0.4, 8, 6);
    lobeC.translate(-0.34, 1.62, -0.12);
    const lobeD = new THREE.SphereGeometry(0.38, 7, 5);
    lobeD.translate(0.03, 2.0, -0.02);
    const canopyGeo = merged([lobeA, lobeB, lobeC, lobeD]);
    const canopy = new THREE.InstancedMesh(canopyGeo, mat(), rounds.length);
    canopy.name = 'FoliageCanopies';
    rounds.forEach((t, i) => {
      q.setFromEuler(new THREE.Euler(0, t.rot, 0));
      v.set(t.x, t.h - 0.05, t.z);
      sc.set(t.s * 1.02, t.s * 1.0, t.s * 1.02);
      m.compose(v, q, sc);
      canopy.setMatrixAt(i, m);
      canopy.setColorAt(i, new THREE.Color(t.color));
    });
    canopy.instanceMatrix.needsUpdate = true;
    if (canopy.instanceColor) canopy.instanceColor.needsUpdate = true;
    canopy.frustumCulled = false;
    this.group.add(canopy);

    // ── 둥글둥글 솔잎 나무 (3단 구체)
    const pineA = new THREE.SphereGeometry(0.56, 9, 6);
    pineA.translate(0, 1.16, 0);
    pineA.scale(1, 0.82, 1);
    const pineB = new THREE.SphereGeometry(0.44, 8, 6);
    pineB.translate(0, 1.58, 0);
    pineB.scale(1, 0.86, 1);
    const pineC = new THREE.SphereGeometry(0.31, 7, 5);
    pineC.translate(0, 1.94, 0);
    pineC.scale(1, 0.9, 1);
    const pineGeo = merged([pineA, pineB, pineC]);
    const pine = new THREE.InstancedMesh(pineGeo, mat(), pines.length);
    pine.name = 'FoliagePines';
    pines.forEach((t, i) => {
      q.setFromEuler(new THREE.Euler(0, t.rot, 0));
      v.set(t.x, t.h - 0.05, t.z);
      sc.set(t.s, t.s, t.s);
      m.compose(v, q, sc);
      pine.setMatrixAt(i, m);
      pine.setColorAt(i, new THREE.Color(t.color));
    });
    pine.instanceMatrix.needsUpdate = true;
    if (pine.instanceColor) pine.instanceColor.needsUpdate = true;
    pine.frustumCulled = false;
    this.group.add(pine);

    // ── 덤불 (구체 3개)
    const bushA = new THREE.SphereGeometry(0.36, 8, 5);
    bushA.translate(0, 0.3, 0);
    const bushB = new THREE.SphereGeometry(0.26, 7, 5);
    bushB.translate(0.29, 0.22, 0.04);
    const bushC = new THREE.SphereGeometry(0.24, 7, 5);
    bushC.translate(-0.26, 0.2, -0.06);
    const bushGeo = merged([bushA, bushB, bushC]);
    const bush = new THREE.InstancedMesh(bushGeo, mat(), bushes.length);
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
    for (let i = 0; i < 1400 && list.length < 170; i++) {
      const x = rng.range(-HALF + 2, HALF - 2);
      const z = rng.range(-HALF + 2, HALF - 2);
      const h = this.terrain.sampleHeight(x, z);
      if (h < 0.55 || h > 2.05) continue;
      if (this.#blocked(x, z, 0.25)) continue;
      list.push({ x, z, h, s: rng.range(0.8, 1.5), color: rng.pick(COLORS.flower) });
    }

    // 꽃잎 링 + 노란 중심
    const ring = new THREE.TorusGeometry(0.052, 0.024, 4, 6);
    ring.rotateX(-Math.PI / 2);
    ring.translate(0, 0.085, 0);
    const core = new THREE.SphereGeometry(0.026, 5, 3);
    core.translate(0, 0.088, 0);
    const stem = new THREE.CylinderGeometry(0.008, 0.008, 0.09, 4, 1);
    stem.translate(0, 0.045, 0);
    const geo = merged([ring, core, stem]);
    const mesh = new THREE.InstancedMesh(geo, mat(), list.length);
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

  #buildGrass(rng) {
    const list = [];
    for (let i = 0; i < 1400 && list.length < 330; i++) {
      const x = rng.range(-HALF + 2, HALF - 2);
      const z = rng.range(-HALF + 2, HALF - 2);
      const h = this.terrain.sampleHeight(x, z);
      if (h < 0.58 || h > 2.3) continue;
      if (this.#blocked(x, z, 0.2)) continue;
      list.push({ x, z, h, s: rng.range(0.8, 1.4), rot: rng.range(0, 6.28), color: rng.pick(COLORS.grass) });
    }

    // 풀잎 3가닥
    const blades = [];
    for (const [dx, dz, tilt] of [
      [0, 0, 0.06],
      [0.04, 0.02, 0.26],
      [-0.035, -0.015, -0.22],
    ]) {
      const b = new THREE.ConeGeometry(0.035, 0.26, 5);
      b.translate(dx, 0.13, dz);
      b.rotateZ(tilt);
      blades.push(b);
    }
    const geo = merged(blades);
    const mesh = new THREE.InstancedMesh(geo, mat(), list.length);
    mesh.name = 'FoliageGrass';
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const v = new THREE.Vector3();
    const sc = new THREE.Vector3();
    list.forEach((g, i) => {
      q.setFromEuler(new THREE.Euler(0, g.rot, 0));
      v.set(g.x, g.h - 0.03, g.z);
      sc.set(g.s, g.s, g.s);
      m.compose(v, q, sc);
      mesh.setMatrixAt(i, m);
      mesh.setColorAt(i, new THREE.Color(g.color));
    });
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    mesh.frustumCulled = false;
    this.group.add(mesh);
  }

  #buildPebbles(rng) {
    const list = [];
    for (let i = 0; i < 520 && list.length < 150; i++) {
      const x = rng.range(-HALF + 1, HALF - 1);
      const z = rng.range(-HALF + 1, HALF - 1);
      const h = this.terrain.sampleHeight(x, z);
      if (h < -0.15 || h > 2.4) continue;
      if (this.#blocked(x, z, 0.2)) continue;
      list.push({ x, z, h, s: rng.range(0.6, 1.5), color: rng.pick(COLORS.pebble) });
    }

    const geo = new THREE.SphereGeometry(0.1, 8, 6);
    geo.scale(1.15, 0.6, 0.95);
    const mesh = new THREE.InstancedMesh(geo, mat(), list.length);
    mesh.name = 'FoliagePebbles';
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const v = new THREE.Vector3();
    const sc = new THREE.Vector3();
    list.forEach((s, i) => {
      q.setFromEuler(new THREE.Euler(rng.range(-0.2, 0.2), rng.range(0, 6.28), rng.range(-0.2, 0.2)));
      v.set(s.x, s.h + 0.03, s.z);
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

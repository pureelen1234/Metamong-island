/**
 * Terrain.js — 파스텔 동화풍 섬 지형 메시 (Terrain/Grid)
 * 48×48 그리드 높이 데이터를 부드러운 셰이딩 메시로 굽는다.
 * 각진 면 대신 둥글둥글한 언덕 + 크림 모래 + 싱그러운 연두 잔디.
 */
import * as THREE from 'three';
import { GRID, TILE, HALF, WATER_LEVEL } from '../config.js';
import { sampleHeight, slopeAt, isWalkableAt } from './Heightmap.js';
import { valueNoise } from './Noise.js';

const C = {
  deepSand: new THREE.Color('#dcc79c'),
  wetSand: new THREE.Color('#f2dfb4'),
  sand: new THREE.Color('#ffe6b8'),
  sandLight: new THREE.Color('#fff1d2'),
  grassA: new THREE.Color('#98dd78'),
  grassB: new THREE.Color('#b6ec96'),
  grassC: new THREE.Color('#82d46c'),
  grassMint: new THREE.Color('#abe4bd'),
  stone: new THREE.Color('#e7ddc9'),
  stoneHigh: new THREE.Color('#f2ead8'),
};

const tmpColor = new THREE.Color();

/** 정점 높이 → 파스텔 지형색 */
function colorForHeight(h, slope, x, z, out) {
  const n = valueNoise(x * 0.33 + 7.1, z * 0.33 - 3.3, 41); // 0..1
  const n2 = valueNoise(x * 0.12 - 2.4, z * 0.12 + 5.6, 17);
  if (h < -0.05) out.copy(C.deepSand).lerp(C.wetSand, 0.3 + n * 0.3);
  else if (h < 0.2) out.copy(C.wetSand).lerp(C.sand, 0.35 + n * 0.5);
  else if (h < 0.4) out.copy(C.sand).lerp(C.sandLight, n * 0.5);
  else if (h < 0.58) out.copy(C.sand).lerp(C.grassA, 0.35 + n * 0.55);
  else if (slope > 1.55) out.copy(C.stone).lerp(C.stoneHigh, n * 0.6);
  else {
    out.copy(C.grassA);
    if (n > 0.54) out.lerp(C.grassB, (n - 0.54) * 2.2);
    else if (n < 0.44) out.lerp(C.grassC, (0.44 - n) * 2.2);
    // 넓은 얼룩으로 민트 잔디 패치를 살짝 얹는다
    if (n2 > 0.7) out.lerp(C.grassMint, (n2 - 0.7) * 0.8);
  }
  return out;
}

export class Terrain {
  constructor(heights) {
    this.heights = heights;
    this.group = new THREE.Group();
    this.group.name = 'Terrain';

    this.mesh = this.#buildSurface(heights);
    this.group.add(this.mesh);

    this.seabed = this.#buildSeabed();
    this.group.add(this.seabed);
  }

  sampleHeight(x, z) {
    return sampleHeight(this.heights, x, z);
  }

  slopeAt(x, z) {
    return slopeAt(this.heights, x, z);
  }

  /** 걸을 수 있는 땅인가 (물·급경사·섬 밖 차단) */
  isWalkable(x, z) {
    return isWalkableAt(this.heights, x, z);
  }

  /** 지면 위 y (물 위로는 올라가지 않게) */
  groundY(x, z) {
    return Math.max(this.sampleHeight(x, z), WATER_LEVEL + 0.02);
  }

  #buildSurface(heights) {
    const N = GRID + 1;
    const cellCount = GRID * GRID;
    const positions = new Float32Array(cellCount * 6 * 3);
    const colors = new Float32Array(cellCount * 6 * 3);

    // 정점별 색을 미리 계산
    const vColor = new Float32Array(N * N * 3);
    const c = new THREE.Color();
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        const x = -HALF + i * TILE;
        const z = -HALF + j * TILE;
        const h = heights[j * N + i];
        colorForHeight(h, slopeAt(heights, x, z), x, z, c);
        const k = (j * N + i) * 3;
        vColor[k] = c.r;
        vColor[k + 1] = c.g;
        vColor[k + 2] = c.b;
      }
    }

    let p = 0;
    let col = 0;
    const pushVert = (x, z, h, ci) => {
      positions[p++] = x;
      positions[p++] = h;
      positions[p++] = z;
      colors[col++] = vColor[ci];
      colors[col++] = vColor[ci + 1];
      colors[col++] = vColor[ci + 2];
    };

    for (let j = 0; j < GRID; j++) {
      for (let i = 0; i < GRID; i++) {
        const x0 = -HALF + i * TILE;
        const x1 = x0 + TILE;
        const z0 = -HALF + j * TILE;
        const z1 = z0 + TILE;
        const i00 = j * N + i;
        const i10 = j * N + i + 1;
        const i01 = (j + 1) * N + i;
        const i11 = (j + 1) * N + i + 1;
        const h00 = heights[i00];
        const h10 = heights[i10];
        const h01 = heights[i01];
        const h11 = heights[i11];

        // 삼각형 1: (x0,z0) (x0,z1) (x1,z1)
        pushVert(x0, z0, h00, i00 * 3);
        pushVert(x0, z1, h01, i01 * 3);
        pushVert(x1, z1, h11, i11 * 3);
        // 삼각형 2: (x0,z0) (x1,z1) (x1,z0)
        pushVert(x0, z0, h00, i00 * 3);
        pushVert(x1, z1, h11, i11 * 3);
        pushVert(x1, z0, h10, i10 * 3);
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    geo.computeBoundingSphere();

    // 법선이 아래를 향하는 면(와인딩 반대)은 뒤집어 준다
    const nrm = geo.attributes.normal;
    const pos = geo.attributes.position;
    let flipped = 0;
    for (let t = 0; t < pos.count; t += 3) {
      if (nrm.getY(t) < 0) {
        for (let a = 0; a < 3; a++) {
          const v1 = pos.getComponent(t + 1, a);
          const v2 = pos.getComponent(t + 2, a);
          pos.setComponent(t + 1, a, v2);
          pos.setComponent(t + 2, a, v1);
        }
        for (let a = 0; a < 3; a++) {
          const c1 = geo.attributes.color.getComponent(t + 1, a);
          const c2 = geo.attributes.color.getComponent(t + 2, a);
          geo.attributes.color.setComponent(t + 1, a, c2);
          geo.attributes.color.setComponent(t + 2, a, c1);
        }
        flipped++;
      }
    }
    if (flipped > 0) {
      geo.computeVertexNormals();
      pos.needsUpdate = true;
    }

    // 부드러운 셰이딩 + 매트 점토 질감 → 각진 면이 사라지고 언덕이 몽글해진다
    const mat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.96,
      metalness: 0,
      flatShading: false,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.name = 'TerrainSurface';
    mesh.receiveShadow = false;
    mesh.frustumCulled = true;

    // 정점 밝기는 일정하게 두어 큰 얼룩 없이 부드럽게 이어진다
    const colorAttr = geo.attributes.color;
    colorAttr.needsUpdate = true;

    return mesh;
  }

  #buildSeabed() {
    const geo = new THREE.PlaneGeometry(HALF * 10, HALF * 10, 1, 1);
    geo.rotateX(-Math.PI / 2);
    const mat = new THREE.MeshStandardMaterial({ color: '#dff3ec', roughness: 1, metalness: 0 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.y = -1.35;
    mesh.name = 'Seabed';
    return mesh;
  }

  dispose() {
    this.group.traverse((o) => {
      if (o.isMesh) {
        o.geometry.dispose();
        o.material.dispose();
      }
    });
  }
}

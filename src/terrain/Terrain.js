/**
 * Terrain.js — 파스텔 동화풍 섬 지형 메시 (Terrain/Grid)
 * 48×48 그리드 높이 데이터를 부드러운 셰이딩 메시로 굽는다.
 * 각진 면 대신 둥글둥글한 언덕 + 크림 모래 + 싱그러운 연두 잔디.
 */
import * as THREE from 'three';
import { GRID, TILE, HALF, WATER_LEVEL } from '../config.js';
import { sampleHeight, slopeAt, isWalkableAt, bridgeDeckY } from './Heightmap.js';
import { valueNoise } from './Noise.js';
import { toonMaterial } from '../render/toon.js';

const C = {
  deepSand: new THREE.Color('#e2cb9d'),
  wetSand: new THREE.Color('#f3d8a0'),
  sand: new THREE.Color('#F8E0A6'),
  sandLight: new THREE.Color('#FFF0C8'),
  grassA: new THREE.Color('#8FD86B'),
  grassB: new THREE.Color('#A8E47E'),
  grassC: new THREE.Color('#7BC95E'),
  grassMint: new THREE.Color('#9CE2A6'),
  stone: new THREE.Color('#ebe2cf'),
  stoneHigh: new THREE.Color('#f5efe0'),
};

const tmpColor = new THREE.Color();

/**
 * 잔디 디테일 텍스처 — 밝기만 살짝 흔드는 회색조 픽셀 패턴.
 * 정점 색(파스텔 팔레트)에 곲해지므로 색은 그대로고, 먼 들판이 밋밋하지 않게 된다.
 */
let grassTex = null;
function grassTexture() {
  if (grassTex) return grassTex;
  const size = 128;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, size, size);

  // 부드러운 동물의 숲 스타일 둥근 삼각형 잔디 패치 + 세잎 클로버
  const drawRoundedTri = (cx, cy, r, flip, fill) => {
    ctx.fillStyle = fill;
    const pts = [];
    for (let k = 0; k < 3; k++) {
      const a = -Math.PI / 2 + (flip ? Math.PI : 0) + (k * Math.PI * 2) / 3;
      pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
    }
    ctx.beginPath();
    for (let k = 0; k < 3; k++) {
      const p0 = pts[k];
      const p1 = pts[(k + 1) % 3];
      const p2 = pts[(k + 2) % 3];
      const m1x = p0[0] + (p1[0] - p0[0]) * 0.26;
      const m1y = p0[1] + (p1[1] - p0[1]) * 0.26;
      const m2x = p0[0] + (p2[0] - p0[0]) * 0.26;
      const m2y = p0[1] + (p2[1] - p0[1]) * 0.26;
      if (k === 0) ctx.moveTo(m2x, m2y);
      ctx.quadraticCurveTo(p0[0], p0[1], m1x, m1y);
      const nextM2x = p1[0] + (p0[0] - p1[0]) * 0.26;
      const nextM2y = p1[1] + (p0[1] - p1[1]) * 0.26;
      ctx.lineTo(nextM2x, nextM2y);
    }
    ctx.closePath();
    ctx.fill();
  };

  const drawClover = (cx, cy, r, fill) => {
    ctx.fillStyle = fill;
    for (let k = 0; k < 3; k++) {
      const a = -Math.PI / 2 + (k * Math.PI * 2) / 3;
      ctx.beginPath();
      ctx.arc(cx + Math.cos(a) * r * 0.55, cy + Math.sin(a) * r * 0.55, r * 0.52, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  // 타일 경계에서도 자연스럽게 이어지도록 주기적으로 배치
  const step = 32;
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      const x = col * step + (row % 2 ? step * 0.5 : 0) + 12;
      const y = row * step + 14;
      const fill = (row + col) % 2 === 0 ? '#eef7e6' : '#f4fae9';
      const r = (row + col) % 3 === 0 ? 7.5 : 6.2;
      drawRoundedTri(x % size, y % size, r, (row + col) % 2 === 1, fill);
    }
  }
  const clovers = [
    [22, 26, 4.4], [86, 18, 4.8], [54, 72, 4.2], [110, 96, 4.6], [18, 104, 4.0], [74, 114, 4.4],
  ];
  for (const [cx, cy, r] of clovers) {
    drawClover(cx, cy, r, '#e6f4dc');
  }

  grassTex = new THREE.CanvasTexture(c);
  grassTex.colorSpace = THREE.SRGBColorSpace;
  grassTex.wrapS = grassTex.wrapT = THREE.RepeatWrapping;
  grassTex.magFilter = THREE.LinearFilter;
  grassTex.minFilter = THREE.LinearMipmapLinearFilter;
  grassTex.generateMipmaps = true;
  grassTex.anisotropy = 4;
  return grassTex;
}

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

  /** 지면 위 y (물 위로는 올라가지 않게, 완성된 다리 위는 데크 높이) */
  groundY(x, z) {
    const deck = bridgeDeckY(x, z);
    if (deck !== null) return deck;
    return Math.max(this.sampleHeight(x, z), WATER_LEVEL + 0.02);
  }

  #buildSurface(heights) {
    const N = GRID + 1;
    const cellCount = GRID * GRID;
    const positions = new Float32Array(cellCount * 6 * 3);
    const colors = new Float32Array(cellCount * 6 * 3);
    const uvs = new Float32Array(cellCount * 6 * 2);
    const UV_SCALE = 1 / 2.6;

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
    let uvI = 0;
    const pushVert = (x, z, h, ci) => {
      positions[p++] = x;
      positions[p++] = h;
      positions[p++] = z;
      colors[col++] = vColor[ci];
      colors[col++] = vColor[ci + 1];
      colors[col++] = vColor[ci + 2];
      uvs[uvI++] = x * UV_SCALE;
      uvs[uvI++] = z * UV_SCALE;
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
    geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
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

    // ② 4단 툰 램프 + ① 그림자 받기 (+ 잔디 디테일 텍스처)
    const mat = toonMaterial({
      vertexColors: true,
      map: grassTexture(),
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.name = 'TerrainSurface';
    mesh.receiveShadow = true;
    mesh.frustumCulled = true;

    // 정점 밝기는 일정하게 두어 큰 얼룩 없이 부드럽게 이어진다
    const colorAttr = geo.attributes.color;
    colorAttr.needsUpdate = true;

    return mesh;
  }

  #buildSeabed() {
    const geo = new THREE.PlaneGeometry(HALF * 10, HALF * 10, 1, 1);
    geo.rotateX(-Math.PI / 2);
    const mat = toonMaterial({ color: '#dff3ec' });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.y = -1.35;
    mesh.name = 'Seabed';
    mesh.receiveShadow = true;
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

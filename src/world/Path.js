/**
 * Path.js — 섬의 오솔길 (잔디 위 흙길 리본)
 *
 * 부두 → 광장 → 공방 / 자판기 / 등대 로 이어지는 길을 지형 높이를 따라
 * 가운데는 밝은 모래색, 가장자리는 살짝 어두운 흙색으로 깔아 2.5D 입체감을 준다.
 */
import * as THREE from 'three';
import { toonMaterial } from '../render/toon.js';

const ROUTES = [
  // ── 남쪽 생활권 ───────────────────────────────────────
  // 부두(남쪽 해변) → 광장
  [[0, 29.2], [0, 26.6], [0, 23.0], [0.2, 20.2], [0, 17.8], [0, 16.2]],
  // 광장 → 공방
  [[0, 16.0], [-2.6, 14.0], [-5.4, 12.2], [-7.4, 11.0], [-8.2, 10.2]],
  // 광장 → 메타몽 자판기
  [[0.4, 16.0], [3.2, 14.4], [6.0, 12.0], [8.0, 10.4], [8.6, 9.7]],
  // 광장 → 등대 (강 남쪽 언덕)
  [[1.4, 15.8], [4.6, 13.6], [8.4, 12.6], [11.4, 9.6], [13.2, 5.4], [14.2, 1.4], [14.6, -0.8]],
  // 등대 길 → 강가 낚시터 샛길 (6단계: 민물 낚시)
  [[13.4, 3.6], [13.0, 1.0], [12.2, -1.2], [11.2, -2.2], [10.3, -2.4]],
  // 광장 → 다리 남쪽 끝 (강 건너 개척권으로)
  [[0, 16.0], [0.4, 12.0], [0.2, 6.0], [0, -0.4], [0, -4.9]],
  // 광장 → 텃밭 입구
  [[-1.6, 15.6], [-4.6, 14.6], [-8.0, 13.6], [-11.4, 13.2], [-14.0, 12.8], [-15.6, 12.2]],
  // 광장 → 남서 꽃밭 산책로
  [[-2.4, 17.6], [-6.4, 19.0], [-9.6, 20.2], [-12.4, 20.2], [-13.6, 19.8]],
  // 광장 → 남동 과수원
  [[1.6, 16.6], [5.2, 17.6], [8.8, 18.0], [11.6, 17.0], [13.0, 15.6]],

  // ── 북쪽 개척권 (다리 건너) ────────────────────────────
  // 다리 북쪽 끝 → 논 입구
  [[0, -13.1], [-1.2, -14.4], [-2.6, -15.4], [-3.4, -16.1]],
  // 다리 북쪽 끝 → 빼곡한 숲
  [[0, -13.1], [-2.2, -13.6], [-5.0, -14.4], [-7.6, -15.6], [-9.4, -16.6]],
  // 다리 북쪽 끝 → 채석장
  [[0, -13.1], [2.6, -13.8], [5.6, -14.6], [7.8, -15.0], [9.4, -15.4]],
];

export { ROUTES };

const WIDTH = 1.15;
const STEP = 0.6;
const CENTER = new THREE.Color('#f6e5c2');
const EDGE = new THREE.Color('#e2c89c');
const CROSS = [-WIDTH / 2, -WIDTH * 0.22, WIDTH * 0.22, WIDTH / 2];

/** 길 단면 텍스처 — 가장자리가 부드럽게 녹아들도록 알파를 준다 */
let pathTex = null;
function pathTexture() {
  if (pathTex) return pathTex;
  const c = document.createElement('canvas');
  c.width = 64;
  c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 64, 0);
  g.addColorStop(0, 'rgba(255,255,255,0)');
  g.addColorStop(0.16, 'rgba(255,255,255,0.85)');
  g.addColorStop(0.5, 'rgba(255,255,255,1)');
  g.addColorStop(0.84, 'rgba(255,255,255,0.85)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  // 도트 느낌의 자갈 얼룩
  ctx.fillStyle = 'rgba(196,168,126,0.16)';
  for (let i = 0; i < 40; i++) {
    const x = Math.floor(Math.random() * 64);
    const y = Math.floor(Math.random() * 64);
    ctx.fillRect(x, y, 2, 2);
  }
  pathTex = new THREE.CanvasTexture(c);
  pathTex.colorSpace = THREE.SRGBColorSpace;
  pathTex.magFilter = THREE.NearestFilter;
  pathTex.minFilter = THREE.LinearFilter;
  pathTex.generateMipmaps = false;
  pathTex.wrapS = THREE.ClampToEdgeWrapping;
  pathTex.wrapT = THREE.RepeatWrapping;
  return pathTex;
}

/** Catmull-Rom 으로 길을 부드럽게 잇는다 */
function sampleRoute(points) {
  const curve = new THREE.CatmullRomCurve3(
    points.map(([x, z]) => new THREE.Vector3(x, 0, z)),
    false,
    'catmullrom',
    0.5
  );
  const n = Math.max(4, Math.round(curve.getLength() / STEP));
  return curve.getSpacedPoints(n).map((v) => [v.x, v.z]);
}

export class Path {
  constructor(terrain) {
    this.group = new THREE.Group();
    this.group.name = 'Path';

    const positions = [];
    const colors = [];
    const uvs = [];
    const indices = [];
    const c = new THREE.Color();

    for (const route of ROUTES) {
      const pts = sampleRoute(route);
      const start = positions.length / 3;
      let run = 0;

      for (let i = 0; i < pts.length; i++) {
        const [x, z] = pts[i];
        const [px, pz] = pts[Math.max(0, i - 1)];
        const [nx2, nz2] = pts[Math.min(pts.length - 1, i + 1)];
        const dx = nx2 - px;
        const dz = nz2 - pz;
        const len = Math.hypot(dx, dz) || 1;
        const ox = -dz / len;
        const oz = dx / len;
        if (i > 0) run += Math.hypot(x - pts[i - 1][0], z - pts[i - 1][1]);

        for (let k = 0; k < CROSS.length; k++) {
          const off = CROSS[k];
          const vx = x + ox * off;
          const vz = z + oz * off;
          positions.push(vx, terrain.groundY(vx, vz) + 0.04, vz);
          uvs.push(k / (CROSS.length - 1), run / 2.2);
          const edgeK = Math.abs(k - 1.5) / 1.5; // 0 = 가운데, 1 = 가장자리
          c.copy(CENTER).lerp(EDGE, edgeK * 0.75);
          colors.push(c.r, c.g, c.b);
        }
      }

      const rows = pts.length;
      const cols = CROSS.length;
      for (let i = 0; i < rows - 1; i++) {
        for (let k = 0; k < cols - 1; k++) {
          const a = start + i * cols + k;
          const b = a + 1;
          const d = start + (i + 1) * cols + k;
          const e = d + 1;
          indices.push(a, d, e, a, e, b);
        }
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geo.setIndex(indices);
    geo.computeVertexNormals();

    const mat = toonMaterial({
      vertexColors: true,
      map: pathTexture(),
      transparent: true,
      alphaTest: 0.06,
      depthWrite: false,
      side: THREE.DoubleSide,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -2,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.name = 'PathSurface';
    mesh.receiveShadow = true;
    this.group.add(mesh);
  }
}

/**
 * Heightmap.js — 48×48 섬 지형 높이 데이터 (순수 데이터 · three 의존 없음)
 *
 * 플랫 랜드: 육지 전체를 하나의 평평한 높이(LAND_HEIGHT)로 고정하고,
 * 해안선에서만 부드럽게 바다로 내려간다. 가운데 솟은 둔덕·언덕은 없다.
 * (광각 왜곡·경사로 인한 빌보드 눕기를 없애려고 평지로 바꿨다)
 */
import { GRID, TILE, HALF, WATER_LEVEL, WALK_MIN_HEIGHT } from '../config.js';
import { fbm, smoothstep, clamp } from './Noise.js';

const N = GRID + 1; // 49×49 정점

/** 육지 평지 높이 — 모든 배치물·플레이어가 이 높이에 선다 */
export const LAND_HEIGHT = 0.7;
/** 해안선에서 바다로 내려가는 깊이 */
export const SEA_DEPTH = 1.0;
/** 평지가 끝나고 해안 경사가 시작되는 정규화 반경 */
const EDGE_START = 0.565;
/** 완전히 바다가 되는 정규화 반경 */
const EDGE_END = 0.80;

/** 월드 좌표 (x,z)의 지형 높이 — 순수 함수 */
export function islandHeight(x, z) {
  const d = Math.hypot(x, z * 0.97) / HALF; // 0(중심) ~ 1.0(외곽)
  // 해안선을 살짝 흔들어 원형보다 유기적인 섬 모양을 만든다
  const warp = fbm(x * 0.06 + 13.7, z * 0.06 - 8.2, 3, 7) * 0.045;
  const edge = smoothstep(EDGE_START, EDGE_END, d + warp); // 0 = 평지, 1 = 바다
  const h = LAND_HEIGHT - (LAND_HEIGHT + SEA_DEPTH) * edge;
  return clamp(h, -SEA_DEPTH, LAND_HEIGHT);
}

/** 49×49 높이 배열 생성 (모듈 로드 시 1회) */
export function buildHeightmap() {
  const heights = new Float32Array(N * N);
  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N; i++) {
      const x = -HALF + i * TILE;
      const z = -HALF + j * TILE;
      heights[j * N + i] = islandHeight(x, z);
    }
  }
  return heights;
}

export const HEIGHTS = buildHeightmap();

/** 셀 단위 양선형 보간 높이 */
export function sampleHeight(heights, x, z) {
  const fx = (x + HALF) / TILE;
  const fz = (z + HALF) / TILE;
  if (fx < 0 || fz < 0 || fx >= GRID || fz >= GRID) return -1.5;
  const i = Math.floor(fx);
  const j = Math.floor(fz);
  const tx = fx - i;
  const tz = fz - j;
  const h00 = heights[j * N + i];
  const h10 = heights[j * N + i + 1];
  const h01 = heights[(j + 1) * N + i];
  const h11 = heights[(j + 1) * N + i + 1];
  return (h00 * (1 - tx) + h10 * tx) * (1 - tz) + (h01 * (1 - tx) + h11 * tx) * tz;
}

/** 경사(0=평지). 이동 가능 판정에 사용 */
export function slopeAt(heights, x, z) {
  const e = 0.45;
  const hx = sampleHeight(heights, x + e, z) - sampleHeight(heights, x - e, z);
  const hz = sampleHeight(heights, x, z + e) - sampleHeight(heights, x, z - e);
  return Math.hypot(hx, hz) / (2 * e);
}

/** 걸을 수 있는 땅인가 (물·급경사·섬 밖 차단) */
export function isWalkableAt(heights, x, z) {
  if (Math.abs(x) > HALF - 1.0 || Math.abs(z) > HALF - 1.0) return false;
  const h = sampleHeight(heights, x, z);
  if (h < WALK_MIN_HEIGHT) return false;
  if (slopeAt(heights, x, z) > 1.35) return false;
  return true;
}

/** 앵커가 물에 걸렸을 때 가까운 육지로 밀어 준다 (배치 안정화) */
export function settleOnLand(heights, x, z, maxRadius = 6) {
  if (isWalkableAt(heights, x, z)) return { x, z };
  for (let r = 0.5; r <= maxRadius; r += 0.5) {
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
      const nx = x + Math.cos(a) * r;
      const nz = z + Math.sin(a) * r;
      if (isWalkableAt(heights, nx, nz)) return { x: nx, z: nz };
    }
  }
  return { x, z };
}

export { WATER_LEVEL, GRID, TILE, HALF, N as HEIGHT_GRID };

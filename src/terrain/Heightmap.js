/**
 * Heightmap.js — 48×48 사각 섬 지형 높이 데이터 (순수 데이터 · three 의존 없음)
 *
 * 플랫 랜드: 육지 전체를 하나의 평평한 높이(LAND_HEIGHT)로 고정하고,
 * 해안선에서만 부드럽게 바다로 내려간다. 가운데 솟은 둔덕·언덕은 없다.
 *
 * 3단계: 원형 거리(Math.hypot) 대신 **둥근 모서리의 사각 거리 함수**(rounded box SD)를 쓴다.
 *   · 48×48 그리드의 네 귀퉁이까지 육지가 넓게 펴져 북서 텃밭 · 북동 과수원 ·
 *     남서 꽃밭 · 남쪽 해변이라는 네 구역을 놓을 자리가 생긴다.
 *   · 남쪽(+z)은 해안 경사를 1.6배 넓혀 모래 해변이 다른 쪽보다 넓게 드러난다.
 */
import { GRID, TILE, HALF, WATER_LEVEL, WALK_MIN_HEIGHT } from '../config.js';
import { fbm, smoothstep, clamp } from './Noise.js';

const N = GRID + 1; // 49×49 정점

/** 육지 평지 높이 — 모든 배치물·플레이어가 이 높이에 선다 */
export const LAND_HEIGHT = 0.7;
/** 해안선에서 바다로 내려가는 깊이 */
export const SEA_DEPTH = 1.0;

/** 육지 평지 반폭 (모서리 둥글림 전 사각형의 절반) */
export const LAND_BOARD = 17.6;
/** 네 모서리 둥글림 반경 — 클수록 동글동글, 작을수록 각진 네모 섬 */
export const LAND_CORNER = 4.6;
/** 해안 경사 폭(월드 유닛) — 사각형 바깥으로 이만큼 미끄러져 바다가 된다 */
export const COAST_WIDTH = 4.2;
/** 남쪽(+z) 해변은 경사를 이 배율만큼 넓게 펴 모래사장을 넓힌다 */
const SOUTH_BEACH_SCALE = 0.62;

/**
 * 둥근 사각형까지의 부호 있는 거리 (안쪽 음수 / 테두리 0 / 바깥 양수)
 * iq 의 rounded-box SDF. 모서리는 반경 LAND_CORNER 로 둥글다.
 */
export function boxDistance(x, z) {
  const bx = LAND_BOARD - LAND_CORNER;
  const qx = Math.abs(x) - bx;
  const qz = Math.abs(z) - bx;
  const outside = Math.hypot(Math.max(qx, 0), Math.max(qz, 0));
  const inside = Math.min(Math.max(qx, qz), 0);
  return outside + inside - LAND_CORNER;
}

/** 이 자리의 해안 경사 폭 — 남쪽 해변은 더 넓다 */
export function coastWidthAt(x, z) {
  const south = smoothstep(4, 16, z); // z 가 +16 쪽으로 갈수록 1
  return COAST_WIDTH * (1 + SOUTH_BEACH_SCALE * south);
}

/** 월드 좌표 (x,z)의 지형 높이 — 순수 함수 */
export function islandHeight(x, z) {
  const sd = boxDistance(x, z);
  // 해안선을 살짝 흔들어 사각형보다 유기적인 섬 모양을 만든다 (약하게)
  const warp = fbm(x * 0.075 + 13.7, z * 0.075 - 8.2, 3, 7) * 0.85;
  const edge = smoothstep(0, coastWidthAt(x, z), sd + warp); // 0 = 평지, 1 = 바다
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

/**
 * Heightmap.js — 72×72 사각 섬 지형 높이 데이터 (순수 데이터 · three 의존 없음)
 *
 * 플랫 랜드: 육지 전체를 하나의 평평한 높이(LAND_HEIGHT)로 고정하고,
 * 해안선에서만 부드럽게 바다로 내려간다. 가운데 솟은 둔덕·언덕은 없다.
 *
 * 4단계(2026-11-21)
 *   · 그리드를 48 → 72 로 키우고 섬 평지를 그만큼 넓혔다(non·강/개울 · 북쪽 개척권).
 *   · 섬 가운데를 가로지르는 **완만한 곡선의 강/개울**을 판다. 물길 바닥은 물 높이보다
 *     아래라 걷기 불가 → 남쪽 생활권과 북쪽 개척권이 갈린다.
 *   · 다리를 완성하면 데크 사각형(isOnBridgeDeck)만 걷기 예외로 열린다.
 *     다리 유무는 `setBridgeBuilt()` 로만 바뀌고, 지형 데이터 자체는 변하지 않는다.
 */
import { GRID, TILE, HALF, WATER_LEVEL, WALK_MIN_HEIGHT, RIVER, riverCenterZ, isOnBridgeDeck, BRIDGE } from '../config.js';
import { fbm, smoothstep, clamp } from './Noise.js';

const N = GRID + 1; // 73×73 정점

/** 육지 평지 높이 — 모든 배치물·플레이어가 이 높이에 선다 */
export const LAND_HEIGHT = 0.7;
/** 해안선에서 바다로 내려가는 깊이 */
export const SEA_DEPTH = 1.0;

/** 육지 평지 반폭 (모서리 둥글림 전 사각형의 절반) */
export const LAND_BOARD = 28.8;
/** 네 모서리 둥글림 반경 — 클수록 동글동글, 작을수록 각진 네모 섬 */
export const LAND_CORNER = 6.8;
/** 해안 경사 폭(월드 유닛) — 사각형 바깥으로 이만큼 미끄러져 바다가 된다 */
export const COAST_WIDTH = 3.6;
/** 남쪽(+z) 해변은 경사를 이 배율만큼 넓게 펴 모래사장을 넓힌다 */
const SOUTH_BEACH_SCALE = 0.75;

/** 다리 완성 여부 — 이 모듈이 들고, Heightmap/Terrain 이 함께 본다 */
let bridgeBuilt = false;

export function setBridgeBuilt(v) {
  bridgeBuilt = !!v;
}

export function isBridgeBuilt() {
  return bridgeBuilt;
}

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
  const south = smoothstep(6, 24, z); // z 가 +24 쪽으로 갈수록 1
  return COAST_WIDTH * (1 + SOUTH_BEACH_SCALE * south);
}

/** 강이 지면을 얼마나 파고드는가 (0 = 강 밖, 1 = 물길 한가운데) */
function riverCarve(x, z) {
  const d = Math.abs(z - riverCenterZ(x));
  const half = RIVER.halfWidth;
  const bank = RIVER.bank;
  if (d >= half + bank) return 0;
  const t = smoothstep(half, half + bank, d); // 0 = 물길, 1 = 둑 위
  return 1 - t;
}

/** 월드 좌표 (x,z)의 지형 높이 — 순수 함수 */
export function islandHeight(x, z) {
  const sd = boxDistance(x, z);
  // 해안선을 살짝 흔들어 사각형보다 유기적인 섬 모양을 만든다 (약하게)
  const warp = fbm(x * 0.055 + 13.7, z * 0.055 - 8.2, 3, 7) * 0.85;
  const edge = smoothstep(0, coastWidthAt(x, z), sd + warp); // 0 = 평지, 1 = 바다
  let h = LAND_HEIGHT - (LAND_HEIGHT + SEA_DEPTH) * edge;

  // ── 중앙 강/개울: 물길 바닥을 물 높이 아래로 파 내린다
  const carve = riverCarve(x, z);
  if (carve > 0) {
    const bed = -RIVER.depth;
    h = Math.min(h, bed + (LAND_HEIGHT - bed) * (1 - carve));
  }
  return clamp(h, -SEA_DEPTH, LAND_HEIGHT);
}

/** 73×73 높이 배열 생성 (모듈 로드 시 1회) */
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

/** 걸을 수 있는 땅인가 (물·급경사·섬 밖 차단, 완성된 다리 데크는 예외) */
export function isWalkableAt(heights, x, z) {
  if (Math.abs(x) > HALF - 1.0 || Math.abs(z) > HALF - 1.0) return false;
  // 완성된 다리 위는 강물이라도 걸을 수 있다
  if (bridgeBuilt && isOnBridgeDeck(x, z)) return true;
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

/** 다리 데크 위에서의 지면 높이 (아니면 null) */
export function bridgeDeckY(x, z) {
  if (!bridgeBuilt || !isOnBridgeDeck(x, z)) return null;
  return BRIDGE.deckY;
}

export { WATER_LEVEL, GRID, TILE, HALF, N as HEIGHT_GRID };

/**
 * Heightmap.js — 48×48 섬 지형 높이 데이터 (순수 데이터 · three 의존 없음)
 * 파스텔 로우폴리 섬: 중앙 잔디 고원 + 완만한 모래사장 링 + 두 개의 언덕 + 바다로 떨어지는 경사
 */
import { GRID, TILE, HALF, WATER_LEVEL, WALK_MIN_HEIGHT } from '../config.js';
import { fbm, smoothstep, clamp } from './Noise.js';

const N = GRID + 1; // 49×49 정점

/** 가우시안 언덕 */
function hill(x, z, cx, cz, amp, sigma) {
  const dx = x - cx;
  const dz = z - cz;
  return amp * Math.exp(-(dx * dx + dz * dz) / (2 * sigma * sigma));
}

/** 월드 좌표 (x,z)의 지형 높이 — 순수 함수 */
export function islandHeight(x, z) {
  const d = Math.hypot(x, z * 0.97) / HALF; // 0(중심) ~ 1.0(외곽)
  const warp = fbm(x * 0.06 + 13.7, z * 0.06 - 8.2, 3, 7) * 0.1;
  const edge = smoothstep(0.5, 0.94, d + warp); // 0 = 육지, 1 = 바다
  const land = 1 - edge;

  const base =
    0.55 +
    1.05 * (fbm(x * 0.09, z * 0.09, 4, 3) * 0.5 + 0.5) +
    0.15 * fbm(x * 0.25, z * 0.25, 2, 11);

  let h = land * base - edge * 0.62;

  // 등대 언덕 · 북서쪽 완만한 둔덕
  h += land * hill(x, z, 6.0, -7.0, 1.55, 4.6);
  h += land * hill(x, z, -10.0, 7.0, 0.95, 4.0);

  // 아주 완만한 요철로 파스텔 로우폴리 면 분할을 살린다
  h += land * fbm(x * 0.42, z * 0.42, 2, 23) * 0.09;

  return clamp(h, -1.2, 4.6);
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

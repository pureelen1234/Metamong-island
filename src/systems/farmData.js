/**
 * farmData.js — 3단계 텃밭 농사의 단일 데이터 원천
 *
 * 씨앗 3종 · 성장 시간 · 수확량 · 자판기 판매가가 모두 여기에 있다.
 * 화면(FarmPanels)·규칙(Farming/Progress/Shop)·3D 연출이 이 파일만 본다.
 *
 * 성장 루프 (사용자 확정 사항)
 *   자판기에서 씨앗 구매 → 텃밭에 심기 → (물주기 1회당 남은 시간 50%) → 수확
 *   → 수확물은 가방 8칸이 아니라 **별도 바구니(progress.crops)** 에 담긴다
 *   → 자판기 팔기 탭에서 개당 정가로 판다
 */

export const CROPS = {
  strawberry: {
    id: 'strawberry',
    name: '딸기',
    icon: '🍓',
    tint: '#ff6f8f',
    /** 씨앗 15코인 → 27초 → 2~3개 → 개당 18코인 */
    seedId: 'seed_strawberry',
    seedPrice: 15,
    grow: 27,
    yield: [2, 3],
    price: 18,
    desc: '텃밭에서 제일 먼저 익는 빨간 열매. 금방 자라서 손이 자주 간다.',
  },
  radish: {
    id: 'radish',
    name: '달달무',
    icon: '🥬',
    tint: '#f2f7e8',
    seedId: 'seed_radish',
    seedPrice: 25,
    grow: 42,
    yield: [1, 2],
    price: 38,
    desc: '땅속에서 달게 여무는 무. 잎까지 싱싱하다.',
  },
  pumpkin: {
    id: 'pumpkin',
    name: '황금호박',
    icon: '🎃',
    tint: '#ffc95e',
    seedId: 'seed_pumpkin',
    seedPrice: 50,
    grow: 60,
    yield: [1, 2],
    price: 75,
    desc: '해를 오래 먹어 노랗게 익은 호박. 제일 늦게, 제일 값지게.',
  },
  // ── 4단계: 북쪽 논에서 기르는 벼 (물 잠긴 논 타일 전용)
  rice: {
    id: 'rice',
    name: '쌀',
    icon: '🍚',
    tint: '#f4e7b8',
    seedId: 'seed_rice',
    seedPrice: 20,
    grow: 45,
    yield: [2, 3],
    price: 28,
    /** 논 타일에서만 자란다 (텃밭 3×3 에는 심을 수 없다) */
    paddyOnly: true,
    desc: '물 잠긴 논에서 자라는 벼. 거둬서 쌀로 팔거나 주먹밥을 지어요.',
  },
};

export const CROP_ORDER = ['strawberry', 'radish', 'pumpkin'];
/** 수확물 바구니·판매가 함께 보는 전체 작물 목록 (텃밭 3종 + 논의 쌀) */
export const ALL_CROP_ORDER = [...CROP_ORDER, 'rice'];
/** 텃밭(3×3)에 심을 수 있는 씨앗 */
export const SEED_ORDER = ['seed_strawberry', 'seed_radish', 'seed_pumpkin'];
/** 논(3×2)에 심을 수 있는 씨앗 */
export const PADDY_SEED_ORDER = ['seed_rice'];

/** 씨앗(자판기 사기 품목) — id 로 바로 찾을 수 있게 */
export const SEEDS = {
  seed_strawberry: {
    id: 'seed_strawberry',
    crop: 'strawberry',
    name: '딸기 씨앗',
    icon: '🌱',
    price: CROPS.strawberry.seedPrice,
    desc: '심으면 27초 뒤 딸기 2~3개. 물을 주면 더 빨라요.',
  },
  seed_radish: {
    id: 'seed_radish',
    crop: 'radish',
    name: '달달무 씨앗',
    icon: '🌱',
    price: CROPS.radish.seedPrice,
    desc: '심으면 42초 뒤 달달무 1~2개.',
  },
  seed_pumpkin: {
    id: 'seed_pumpkin',
    crop: 'pumpkin',
    name: '황금호박 씨앗',
    icon: '🌱',
    price: CROPS.pumpkin.seedPrice,
    desc: '심으면 60초 뒤 황금호박 1~2개. 오래 걸리는 만큼 비싸게 팔려요.',
  },
  // ── 4단계: 볍씨 — 논 타일에만 심을 수 있다
  seed_rice: {
    id: 'seed_rice',
    crop: 'rice',
    name: '볍씨',
    icon: '🌾',
    price: CROPS.rice.seedPrice,
    desc: '논에 심으면 45초 뒤 쌀 2~3개. 물을 주면 더 빨리 여물어요.',
  },
};

/** 성장 단계 이름 — 3D 흙 타일과 UI 가 같이 쓴다 */
export const FARM_STAGES = ['빈 밭', '씨앗', '새싹', '자라는 중', '수확 가능'];

export const FARMING = {
  /** 물주기 1회 기력 소모(한 칸당) */
  waterStamina: 2,
  /** 물주기 1회가 남은 성장 시간을 줄이는 비율 */
  waterHalve: 0.5,
  /** 한 작물에 물을 줄 수 있는 횟수 */
  maxWater: 2,
  /** 물을 준 흙이 촉촉해 보이는 시간(초) */
  wetSeconds: 20,
  /** 수확 시 농사 스킬 EXP */
  expHarvest: 16,
  /** 심기 / 물주기 EXP */
  expPlant: 6,
  expWater: 3,
  /** 물뿌리개 레벨별 한 번에 주는 범위 이름 */
  canArea: ['1칸', '십자 5칸', '3×3 9칸'],
};

/** cropId → 씨앗 정의 */
export function seedFor(cropId) {
  const c = CROPS[cropId];
  return c ? SEEDS[c.seedId] : null;
}

export function cropMeta(id) {
  if (CROPS[id]) return { name: CROPS[id].name, icon: CROPS[id].icon, tint: CROPS[id].tint };
  if (SEEDS[id]) return { name: SEEDS[id].name, icon: SEEDS[id].icon, tint: '#cbe8b0' };
  return null;
}

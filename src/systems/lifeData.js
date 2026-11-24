/**
 * lifeData.js — 2단계 생활 콘텐츠(낚시·요리·상점·의뢰·랭크·고양이)의 단일 데이터 원천
 *
 * 화면(LifePanels)·규칙(Fishing/Cooking/Shop/Progress)·3D 연출이 모두 이 파일만 본다.
 * 밸런스 숫자를 바꾸고 싶으면 여기 한 곳만 고치면 된다.
 */
import { ITEMS } from './items.js';
import { CROPS, CROP_ORDER, FARMING, PADDY_SEED_ORDER, SEEDS, SEED_ORDER } from './farmData.js';
import { EXPEDITION_RESOURCES } from './expeditionData.js';

/* ─────────────────────────────────────────────────────────────────
   🎣 낚시 — 6단계: 바다 10 + 민물 5 + 별조각 = 16가지, 시간대별 출현
   ───────────────────────────────────────────────────────────────── */

/** 시간대 — config.PHASES 의 id 와 같다 */
export const FISH_TIME = [
  { id: 'morning', label: '아침', icon: '🌅' },
  { id: 'day', label: '낮', icon: '☀️' },
  { id: 'sunset', label: '노을', icon: '🌇' },
  { id: 'night', label: '밤', icon: '🌙' },
];
export const FISH_TIME_LABEL = Object.fromEntries(FISH_TIME.map((t) => [t.id, t.label]));

const ALL_DAY = ['morning', 'day', 'sunset', 'night'];

export const FISH = {
  // ══ 바다 (부두) ══════════════════════════════════════════
  anchovy: {
    id: 'anchovy',
    name: '은멸치',
    icon: '🐟',
    tint: '#cfe3f2',
    price: 9,
    weight: 30,
    rare: false,
    size: [6, 15],
    habitat: 'sea',
    time: ALL_DAY,
    desc: '부두 끝에서 가장 먼저 인사하는 작은 은빛 물고기.',
  },
  bream: {
    id: 'bream',
    name: '통통도미',
    icon: '🐠',
    tint: '#f7b48f',
    price: 15,
    weight: 22,
    rare: false,
    size: [18, 33],
    habitat: 'sea',
    time: ['day', 'sunset'],
    desc: '손에 쥐면 묵직한, 통통해서 더 귀여운 도미. 낮과 노을에 잘 물어요.',
  },
  minnow: {
    id: 'minnow',
    name: '벚꽃송사리',
    icon: '🌸',
    tint: '#ffb8d6',
    price: 24,
    weight: 18,
    rare: false,
    size: [4, 10],
    habitat: 'sea',
    time: ['morning', 'day'],
    desc: '벚꽃이 필 때 아침 물 위로 떠오르는 분홍빛 송사리.',
  },
  jelly: {
    id: 'jelly',
    name: '별빛해파리',
    icon: '🪼',
    tint: '#c8b8ff',
    price: 45,
    weight: 11,
    rare: true,
    size: [10, 21],
    habitat: 'sea',
    time: ['night'],
    desc: '밤에만 잡히는 투명 해파리. 손끝이 반짝여요.',
  },
  goldcarp: {
    id: 'goldcarp',
    name: '황금잉어',
    icon: '✨',
    tint: '#ffd76a',
    price: 110,
    weight: 4,
    rare: true,
    size: [30, 56],
    habitat: 'sea',
    time: ['sunset', 'night'],
    desc: '섬 사람들이 한 번도 못 봤다는 전설의 잉어. 노을과 밤에만 얼굴을 보여요.',
  },
  tuna: {
    id: 'tuna',
    name: '참치',
    icon: '🍣',
    tint: '#e8837a',
    price: 160,
    weight: 3,
    rare: true,
    size: [60, 140],
    habitat: 'sea',
    time: ['day', 'sunset'],
    desc: '부두 난간이 휠 만큼 묵직한 큰 손님. 낮과 노을에 회유해요.',
  },
  octopus: {
    id: 'octopus',
    name: '문어',
    icon: '🐙',
    tint: '#c98bb0',
    price: 70,
    weight: 8,
    rare: false,
    size: [25, 60],
    habitat: 'sea',
    time: ['sunset', 'night'],
    desc: '찌를 감아 버리려는 장난꾸러기. 노을부터 밤까지 부두 밑에 붙어 있어요.',
  },
  clownfish: {
    id: 'clownfish',
    name: '흰동가리',
    icon: '🐡',
    tint: '#ffb066',
    price: 38,
    weight: 13,
    rare: false,
    size: [6, 13],
    habitat: 'sea',
    time: ['morning', 'day'],
    desc: '주황 줄무늬가 선명한 작은 친구. 아침 햇살에 잘 물어요.',
  },
  lobster: {
    id: 'lobster',
    name: '랍스터',
    icon: '🦞',
    tint: '#ff7a6b',
    price: 130,
    weight: 4,
    rare: true,
    size: [20, 42],
    habitat: 'sea',
    time: ['sunset', 'night'],
    desc: '집게발을 빳빳이 세운 바다의 귀족. 노을과 밤에만 다가와요.',
  },
  ditto_puffer: {
    id: 'ditto_puffer',
    name: '메타몽 복어',
    icon: '🟣',
    tint: '#d8b8ff',
    price: 55,
    weight: 9,
    rare: false,
    size: [10, 26],
    habitat: 'sea',
    time: ALL_DAY,
    desc: '놀라면 변신 대신 빵빵해지는 복어. 점 눈 두 개가 꼭 메타몽 같아요.',
  },

  // ══ 민물 (중앙 강) ══════════════════════════════════════
  trout: {
    id: 'trout',
    name: '무지개송어',
    icon: '🌈',
    tint: '#a9d8ef',
    price: 30,
    weight: 22,
    rare: false,
    size: [20, 45],
    habitat: 'river',
    time: ['morning', 'day'],
    desc: '옆구리에 무지개가 번지는 민물고기. 맑은 아침 강물에서 잘 물어요.',
  },
  catfish: {
    id: 'catfish',
    name: '메기',
    icon: '🐟',
    tint: '#8f9ab0',
    price: 45,
    weight: 15,
    rare: false,
    size: [30, 70],
    habitat: 'river',
    time: ['sunset', 'night'],
    desc: '수염을 느릿느릿 흔드는 밤손님. 해질 무렵부터 강바닥을 돌아다녀요.',
  },
  crayfish: {
    id: 'crayfish',
    name: '민물가재',
    icon: '🦐',
    tint: '#de8a6a',
    price: 26,
    weight: 18,
    rare: false,
    size: [5, 13],
    habitat: 'river',
    time: ['day', 'sunset'],
    desc: '강돌 밑에 숨어 있다가 찌를 톡톡 건드리는 작은 집게발.',
  },
  golden_eel: {
    id: 'golden_eel',
    name: '황금장어',
    icon: '⚡',
    tint: '#ffdf7a',
    price: 170,
    weight: 3,
    rare: true,
    size: [40, 80],
    habitat: 'river',
    time: ['night'],
    desc: '강물 아래를 금빛으로 흐르는 장어. 한밤중에만 낚싯줄을 물어요.',
  },
  mandarin: {
    id: 'mandarin',
    name: '쏘가리',
    icon: '🎏',
    tint: '#f2c46a',
    price: 95,
    weight: 6,
    rare: true,
    size: [15, 35],
    habitat: 'river',
    time: ['morning', 'sunset'],
    desc: '등지느러미가 깃발 같은 강의 사냥꾼. 아침과 노을에 물위로 올라와요.',
  },

  // ══ 어디든 ═══════════════════════════════════════════════
  star: {
    id: 'star',
    name: '별조각',
    icon: '⭐',
    tint: '#ffd77a',
    price: 0,
    weight: 2,
    rare: true,
    size: [1, 1],
    habitat: 'both',
    time: ALL_DAY,
    desc: '물 위로 떠오른 별의 부스러기. 어느 물에서나 낚싯줄에 걸리기도 해요.',
  },
};

export const FISH_ORDER = [
  'anchovy',
  'bream',
  'minnow',
  'jelly',
  'goldcarp',
  'tuna',
  'octopus',
  'clownfish',
  'lobster',
  'ditto_puffer',
  'trout',
  'catfish',
  'crayfish',
  'golden_eel',
  'mandarin',
  'star',
];

export const FISH_HABITAT = {
  sea: { id: 'sea', name: '바다', icon: '🌊' },
  river: { id: 'river', name: '민물', icon: '🏞️' },
};

/** 어종의 시간대를 "아침·낮" 처럼 */
export function fishTimeLabel(fish) {
  const list = fish.time || ALL_DAY;
  if (list.length >= 4) return '하루 종일';
  return list.map((id) => FISH_TIME_LABEL[id] || id).join('·');
}

/**
 * 지금 시간대·물(바다/민물)에 물리는 후보와 가중치.
 * 별빛 미끼를 쓰면 희귀 어종은 ×4.0, 흔한 어종은 ×0.5 로 확률이 크게 기운다.
 */
export function fishPool(habitat, phaseId, bait = false) {
  const pool = {};
  for (const id of FISH_ORDER) {
    const f = FISH[id];
    if (f.habitat !== 'both' && f.habitat !== habitat) continue;
    if (!f.time.includes(phaseId)) continue;
    let w = f.weight;
    if (bait) w *= f.rare ? 4.0 : 0.5;
    pool[id] = Math.max(0.5, Math.round(w * 10) / 10);
  }
  return pool;
}

/** 그 물에서 그 시간대에 만날 수 있는 어종 id 목록(도감·안내용) */
export function fishIn(habitat, phaseId) {
  return FISH_ORDER.filter((id) => {
    const f = FISH[id];
    return (f.habitat === 'both' || f.habitat === habitat) && f.time.includes(phaseId);
  });
}

/**
 * 낚시 자리 3곳 — 부두(바다) · 강가(민물) · 다리 위(민물).
 * need 가 있으면 그 건물/다리가 완성되어야 [낚시하기] 가 뜬다.
 */
export const FISHING_ZONES = {
  sea: {
    id: 'sea',
    name: '부두 낚시',
    icon: '⚓',
    habitat: 'sea',
    spot: { x: 0, z: 28.9, range: 3.0 },
    castTo: { x: 0, z: 33.2 },
    need: 'dock',
    needLabel: '부두 복구 필요',
    hint: '부두 끝에서 찌를 던져요. 물결이 퍼지다 입질이 오면 1.4초 안에 화면을 탭!',
  },
  river_bank: {
    id: 'river_bank',
    name: '강가 낚시',
    icon: '🏞️',
    habitat: 'river',
    spot: { x: 10.2, z: -2.3, range: 2.9 },
    castTo: { x: 9.6, z: -5.8 },
    need: null,
    needLabel: '',
    hint: '강물이 잔잔한 자리예요. 다리를 놓지 않아도 남쪽 강가에서 민물고기를 만날 수 있어요.',
  },
  river_bridge: {
    id: 'river_bridge',
    name: '다리 위 낚시',
    icon: '🌉',
    habitat: 'river',
    spot: { x: 0, z: -9.0, range: 2.3 },
    castTo: { x: 2.9, z: -8.4 },
    need: 'bridge',
    needLabel: '다리 필요',
    hint: '다리 난간 아래로 찌를 내려요. 강 한가운데라 큰 놈이 지나다녀요.',
  },
};

export const FISHING_ZONE_ORDER = ['sea', 'river_bank', 'river_bridge'];

export const FISHING = {
  stamina: 5,
  waitMin: 1.5,
  waitMax: 3.5,
  /** 입질 후 이 시간 안에 탭해야 잡힌다 */
  biteWindow: 1.4,
  exp: 14,
  expMiss: 4,
  /** 플레이어가 이 거리보다 멀어지면 낚싯줄을 회수한다 */
  leash: 6.5,
};

/* ─────────────────────────────────────────────────────────────────
   🍳 요리 — 기력 회복 + 상위 요리는 버프 제공
   ───────────────────────────────────────────────────────────────── */

export const COOK = {
  tea: {
    id: 'tea',
    name: '꽃잎 허브차',
    icon: '🍵',
    need: { petal: 2, berry: 1 },
    fish: {},
    stamina: 45,
    exp: 30,
    buff: 0,
    desc: '꽃잎을 살짝 우려낸 향긋한 차. 마시면 몸이 포근해져요.',
  },
  grill: {
    id: 'grill',
    name: '은멸치 구이',
    icon: '🍢',
    need: { log: 1 },
    fish: { anchovy: 2 },
    stamina: 60,
    exp: 30,
    buff: 0,
    desc: '통나무 불에 노릇하게 구운 은멸치. 소금기만으로 충분해요.',
  },
  bream: {
    id: 'bream',
    name: '도미 버터구이',
    icon: '🐠',
    need: { berry: 1 },
    fish: { bream: 1 },
    stamina: 90,
    exp: 40,
    buff: 0,
    desc: '열매 즙을 버터처럼 발라 구운 도미. 겉은 바삭, 속은 촉촉.',
  },
  golden: {
    id: 'golden',
    name: '황금 정식',
    icon: '🍱',
    need: { petal: 2, berry: 2 },
    fish: { goldcarp: 1 },
    crop: {},
    stamina: 100,
    exp: 60,
    buff: 60,
    desc: '황금잉어 한 마리를 온전히 담은 섬의 정찬. 60초 동안 채집이 가벼워져요.',
  },
  // ── 3단계 농작물 요리 (텃밭 수확물 바구니에서 꺼내 쓴다)
  smoothie: {
    id: 'smoothie',
    name: '딸기 스무디',
    icon: '🥤',
    need: { berry: 1 },
    fish: {},
    crop: { strawberry: 2 },
    stamina: 75,
    exp: 35,
    buff: 0,
    desc: '딸기를 그대로 갈아 넣은 분홍빛 스무디. 마시면 기운이 톡 돌아와요.',
  },
  pumpkinsoup: {
    id: 'pumpkinsoup',
    name: '황금 호박 수프',
    icon: '🍲',
    need: {},
    fish: {},
    crop: { pumpkin: 1 },
    stamina: 95,
    exp: 55,
    buff: 45,
    desc: '노란 호박을 뭉근하게 끓인 수프. 45초 동안 채집이 가벼워져요.',
  },
  // ── 4단계: 논에서 거둔 쌀로 짓는 주먹밥
  riceball: {
    id: 'riceball',
    name: '고소한 주먹밥',
    icon: '🍙',
    need: { berry: 1 },
    fish: {},
    crop: { rice: 2 },
    stamina: 80,
    exp: 45,
    buff: 0,
    desc: '갓 지은 쌀에 열매 즙을 살짝 섞어 쥔 주먹밥. 한 손에 쏙 들어요.',
  },

  // ══ 6단계: 새 작물·특산물·민물고기 요리 ══════════
  tomatosalad: {
    id: 'tomatosalad',
    name: '방울토마토 샐러드',
    icon: '🥗',
    need: { berry: 1 },
    fish: {},
    crop: { tomato: 2 },
    stamina: 70,
    exp: 32,
    buff: 0,
    desc: '방울토마토를 반으로 갈라 열매 즙을 두른 산뜻한 샐러드.',
  },
  buttercorn: {
    id: 'buttercorn',
    name: '버터 옥수수',
    icon: '🌽',
    need: { berry: 1 },
    fish: {},
    crop: { corn: 1 },
    stamina: 82,
    exp: 38,
    buff: 0,
    desc: '알알이 터지는 옥수수에 열매 버터를 올려 노릇하게.',
  },
  roastedpotato: {
    id: 'roastedpotato',
    name: '군고구마',
    icon: '🍠',
    need: {},
    fish: {},
    crop: { sweetpotato: 2 },
    stamina: 88,
    exp: 42,
    buff: 0,
    desc: '숯불에 천천히 구운 고구마. 껍질째 쪼개면 꿀이 흘러요.',
  },
  melonjuice: {
    id: 'melonjuice',
    name: '멜론 주스',
    icon: '🍈',
    need: { berry: 1 },
    fish: {},
    crop: { melon: 1 },
    stamina: 92,
    exp: 46,
    buff: 60,
    desc: '향긋한 멜론을 그대로 갈아 넣은 한 잔. 60초 동안 채집이 가벼워져요.',
  },
  seedcookie: {
    id: 'seedcookie',
    name: '해바라기씨 과자',
    icon: '🍪',
    need: {},
    fish: {},
    crop: { sunflower: 1 },
    forage: { honey: 1 },
    stamina: 76,
    exp: 40,
    buff: 45,
    desc: '해바라기씨에 달콤한 꿀을 입힌 과자. 45초 동안 채집이 가벼워져요.',
  },
  troutgrill: {
    id: 'troutgrill',
    name: '무지개송어 구이',
    icon: '🍤',
    need: { log: 1 },
    fish: { trout: 1 },
    crop: {},
    stamina: 90,
    exp: 44,
    buff: 0,
    desc: '통나무 불에 노릇하게 구운 민물송어. 기름기가 적어 담백해요.',
  },
  catfishstew: {
    id: 'catfishstew',
    name: '메기 매운탕',
    icon: '🍲',
    need: {},
    fish: { catfish: 1 },
    forage: { pine_mushroom: 1 },
    stamina: 100,
    exp: 60,
    buff: 75,
    desc: '송이버섯을 듬뿍 넣고 끓인 메기탕. 75초 동안 채집이 가벼워져요.',
  },
  lobstergrill: {
    id: 'lobstergrill',
    name: '랍스터 구이',
    icon: '🦞',
    need: { petal: 1 },
    fish: { lobster: 1 },
    crop: {},
    stamina: 100,
    exp: 62,
    buff: 90,
    desc: '꽃잎 버터를 발라 구운 랍스터. 90초 동안 채집이 가벼워져요.',
  },
  matsutake: {
    id: 'matsutake',
    name: '송이버섯 구이',
    icon: '🍄',
    need: { berry: 1 },
    fish: {},
    forage: { pine_mushroom: 2 },
    stamina: 80,
    exp: 40,
    buff: 0,
    desc: '숲에서 갓 딴 송이를 소금만 뿌려 구웠어요. 향이 오래 남는다.',
  },
  honeytea: {
    id: 'honeytea',
    name: '달콤 꿀차',
    icon: '🫖',
    need: { petal: 1 },
    fish: {},
    forage: { honey: 1 },
    stamina: 65,
    exp: 30,
    buff: 0,
    desc: '꽃잎 향에 숲의 꿀을 한 숟갈. 마시면 몸이 스르르 풀려요.',
  },
  // ══ 원정 자원 요리 2종 ══════════════════════════════════
  mist_soup: {
    id: 'mist_soup',
    name: '안개 버섯 수프',
    icon: '🥣',
    need: { berry: 1 },
    fish: {},
    crop: {},
    expedition: { mist_mushroom: 1 },
    stamina: 95,
    exp: 65,
    buff: 75,
    desc: '안개 군도의 버섯을 은근히 끓인 수프. 75초 동안 채집이 가벼워져요.',
  },
  pearl_tea: {
    id: 'pearl_tea',
    name: '심해 진주 차',
    icon: '🫧',
    need: { petal: 1 },
    fish: {},
    crop: {},
    expedition: { deep_pearl: 1 },
    stamina: 100,
    exp: 70,
    buff: 90,
    desc: '심해 진주의 맑은 기운을 우려낸 차. 90초 동안 채집이 가벼워져요.',
  },
};

export const COOK_ORDER = [
  'tea',
  'grill',
  'bream',
  'golden',
  'smoothie',
  'pumpkinsoup',
  'riceball',
  'tomatosalad',
  'buttercorn',
  'roastedpotato',
  'melonjuice',
  'seedcookie',
  'troutgrill',
  'catfishstew',
  'lobstergrill',
  'matsutake',
  'honeytea',
  'mist_soup',
  'pearl_tea',
];

/** 황금 정식 버프 — 지속 초 동안 채집 기력 소모·이동 속도 보정 */
export const GOLDEN_BUFF = { seconds: 60, stamina: 0.6, speed: 1.18, label: '황금 버프' };

/* ─────────────────────────────────────────────────────────────────
   🪓 도구 강화 — 도끼 · 곡괭이 · 물뿌리개 Lv.1~3
   ───────────────────────────────────────────────────────────────── */

export const TOOLS = {
  axe: {
    id: 'axe',
    name: '도끼',
    icon: '🪓',
    kind: 'tree',
    max: 3,
    cost: [{}, { log: 4, stone: 3, coin: 40 }, { log: 8, stone: 6, star: 2, coin: 320 }],
    /** 레벨별 기력 소모 배율(인덱스 = 레벨-1) */
    stamina: [1, 0.85, 0.7],
    /** 레벨별 추가 타격(인덱스 = 레벨-1) */
    hits: [0, 0, 1],
    desc: '나무를 베는 도구. 강화하면 적은 기력으로 더 빨리 벨 수 있어요.',
  },
  pick: {
    id: 'pick',
    name: '곡괭이',
    icon: '⛏️',
    kind: 'rock',
    max: 3,
    cost: [{}, { log: 4, stone: 4, coin: 40 }, { log: 6, stone: 8, star: 2, coin: 320 }],
    stamina: [1, 0.85, 0.7],
    hits: [0, 0, 1],
    desc: '바위를 캐는 도구. 강화하면 돌이 더 빨리 나와요.',
  },
  // ── 3단계: 물뿌리개 (레벨이 오르면 한 번에 더 넓게 물을 준다)
  water: {
    id: 'water',
    name: '물뿌리개',
    icon: '🚿',
    kind: 'farm',
    max: 3,
    cost: [{}, { log: 3, stone: 2, coin: 30 }, { log: 6, stone: 4, star: 1, coin: 240 }],
    stamina: [1, 1, 1],
    hits: [0, 0, 0],
    /** 레벨별 물주기 범위 — 1칸 → 십자 5칸 → 4×4 16칸 (논은 1칸 → 한 줄 → 8칸) */
    area: [1, 5, 16],
    desc: '한 번에 1칸 → 십자 → 텃밭 전체까지 물을 줘요. 물은 남은 성장 시간을 30%씩 줄여요.',
  },
};

export const TOOL_ORDER = ['axe', 'pick', 'water'];

/* ─────────────────────────────────────────────────────────────────
   🥤 자판기 상점 — 사기 품목 · 팔기 가격
   ───────────────────────────────────────────────────────────────── */

export const SHOP = {
  churu: {
    id: 'churu',
    name: '고양이 츄르',
    icon: '🐾',
    price: 12,
    desc: '솜이·옹이가 제일 좋아하는 간식. 호감도 +22',
  },
  ade: {
    id: 'ade',
    name: '반짝 에이드',
    icon: '🥤',
    price: 30,
    desc: '마시면 기력 +40. 탄산이 톡 쏴요.',
  },
  bait: {
    id: 'bait',
    name: '별빛 미끼',
    icon: '🪱',
    price: 15,
    desc: '한 번 낚시할 때 희귀 어종 확률이 크게 올라가요.',
  },
  // ── 3단계: 씨앗 (사기 탭 → progress.supplies 에 담긴다)
  seed_strawberry: { kind: 'seed', crop: 'strawberry', ...SEEDS.seed_strawberry },
  seed_radish: { kind: 'seed', crop: 'radish', ...SEEDS.seed_radish },
  seed_pumpkin: { kind: 'seed', crop: 'pumpkin', ...SEEDS.seed_pumpkin },
  // ── 4단계: 볍씨 (북쪽 논 전용)
  seed_rice: { kind: 'seed', crop: 'rice', ...SEEDS.seed_rice },
  // ── 6단계: 새 작물 5종의 씨앗
  seed_tomato: { kind: 'seed', crop: 'tomato', ...SEEDS.seed_tomato },
  seed_corn: { kind: 'seed', crop: 'corn', ...SEEDS.seed_corn },
  seed_sweetpotato: { kind: 'seed', crop: 'sweetpotato', ...SEEDS.seed_sweetpotato },
  seed_melon: { kind: 'seed', crop: 'melon', ...SEEDS.seed_melon },
  seed_sunflower: { kind: 'seed', crop: 'sunflower', ...SEEDS.seed_sunflower },
  // ── 6단계: 성장 비료 (밭·논 한 칸의 성장 단계를 하나 올리고 수확 +1)
  fertilizer: {
    id: 'fertilizer',
    name: '성장 비료',
    icon: '🧪',
    price: FARMING.fertilizer.price,
    desc: FARMING.fertilizer.desc,
  },
};

export const SHOP_ORDER = ['churu', 'ade', 'bait', 'fertilizer', ...SEED_ORDER, ...PADDY_SEED_ORDER];

/** 팔기 단가 — 재료 + 물고기 + 수확물 + 특산물 + 원정 자원. 여기에 없는 물건은 팔 수 없다 */
export const SELL = {
  log: 6,
  stone: 7,
  petal: 5,
  star: 35,
  berry: 4,
  // ── 6단계: 바다·민물 어종
  anchovy: 9,
  bream: 15,
  minnow: 24,
  jelly: 45,
  goldcarp: 110,
  tuna: 160,
  octopus: 70,
  clownfish: 38,
  lobster: 130,
  ditto_puffer: 55,
  trout: 30,
  catfish: 45,
  crayfish: 26,
  golden_eel: 170,
  mandarin: 95,
  // ── 3단계: 수확물(별도 바구니 progress.crops)
  strawberry: CROPS.strawberry.price,
  radish: CROPS.radish.price,
  pumpkin: CROPS.pumpkin.price,
  // ── 4단계: 논에서 거둔 쌀
  rice: CROPS.rice.price,
  // ── 6단계: 새 작물
  tomato: CROPS.tomato.price,
  corn: CROPS.corn.price,
  sweetpotato: CROPS.sweetpotato.price,
  melon: CROPS.melon.price,
  sunflower: CROPS.sunflower.price,
  // ── 6단계: 특산 바구니(해변·숲·광물)
  shell: 12,
  conch: 26,
  driftwood: 14,
  pine_mushroom: 32,
  acorn: 10,
  honey: 40,
  copper: 34,
  crystal: 85,
  // ── 7단계: 원정 전용 자원
  mist_mushroom: 65,
  deep_pearl: 85,
  volcano_heart: 75,
  meteor_shard: 80,
  ice_crystal: 75,
  ancient_gear: 70,
};

/** 에이드 한 개의 기력 회복량 */
export const ADE_STAMINA = 40;

/* ─────────────────────────────────────────────────────────────────
   🌱 5대 생활 스킬 · 랭크 · 종합 칭호
   ───────────────────────────────────────────────────────────────── */

export const SKILLS = [
  { id: 'gather', name: '채집', icon: '🪓', desc: '나무·바위·꽃덤불을 두드릴 때마다' },
  { id: 'fish', name: '낚시', icon: '🎣', desc: '물고기를 잡을 때마다' },
  { id: 'cook', name: '요리', icon: '🍳', desc: '공방에서 요리할 때마다' },
  { id: 'care', name: '돌보기', icon: '🐾', desc: '고양이를 쓰다듬고 간식 줄 때마다' },
  { id: 'farm', name: '농사', icon: '🌱', desc: '씨앗을 심고 물을 주고 거둘 때마다' },
];

/** 랭크 사다리 — exp 이상이면 해당 랭크 (5개 스킬 기준 SSS 합계 20,000) */
export const RANKS = [
  { name: '연습', exp: 0 },
  { name: 'F', exp: 40 },
  { name: 'E', exp: 120 },
  { name: 'D', exp: 280 },
  { name: 'C', exp: 520 },
  { name: 'B', exp: 880 },
  { name: 'A', exp: 1360 },
  { name: 'S', exp: 2000 },
  { name: 'SS', exp: 2900 },
  { name: 'SSS', exp: 4000 },
];

/** 다섯 스킬 EXP 합계 → 종합 섬 생활 칭호 */
export const LIFE_TITLES = [
  { exp: 0, name: '섬의 새내기', icon: '🌱' },
  { exp: 120, name: '섬의 살림꾼', icon: '🧺' },
  { exp: 380, name: '섬의 일꾼', icon: '🪣' },
  { exp: 850, name: '섬의 솜씨꾼', icon: '🧵' },
  { exp: 1600, name: '섬의 장인', icon: '🔨' },
  { exp: 2800, name: '섬의 명인', icon: '🏮' },
  { exp: 4600, name: '섬의 수호자', icon: '🛡️' },
  { exp: 7200, name: '섬의 개척자', icon: '🧭' },
  { exp: 11000, name: '섬의 전설', icon: '👑' },
  { exp: 15000, name: '섬의 별', icon: '🌟' },
];

/** 경험치 획득표 */
export const EXP_GAIN = {
  harvest: 6,
  fish: 14,
  fishMiss: 4,
  cook: 30,
  pet: 10,
  treat: 12,
  quest: 20,
  // ── 3단계 농사
  plant: FARMING.expPlant,
  water: FARMING.expWater,
  crop: FARMING.expHarvest,
};

/* ─────────────────────────────────────────────────────────────────
   🐱 솜이 · 옹이 호감도 · 간식 · 따라오기
   ───────────────────────────────────────────────────────────────── */

/** 호감도 레벨 문턱 (인덱스 0 = Lv.1) */
export const CAT_LEVELS = [0, 18, 40, 68, 100];

export const CAT_CARE = {
  /** 쓰다듬기 (기력 회복은 고양이별 하루 3회까지) */
  pet: { aff: 4, stamina: 3, cooldown: 6, dailyStaminaCap: 3 },
  /** 간식 — 열매/은멸치/츄르 */
  snacks: {
    berry: { id: 'berry', name: '열매', icon: '🍓', aff: 6, cooldown: 3 },
    anchovy: { id: 'anchovy', name: '은멸치', icon: '🐟', aff: 8, cooldown: 3 },
    churu: { id: 'churu', name: '츄르', icon: '🐾', aff: 22, cooldown: 4 },
  },
  snackOrder: ['berry', 'anchovy', 'churu'],
  /** 이 레벨을 처음 넘을 때 보답 선물 (Lv = 키) */
  gifts: {
    2: { star: 1 },
    3: { petal: 3 },
    4: { star: 2 },
    5: { petal: 5, star: 1 },
  },
  /** 이 레벨부터 [따라오기] 토글 */
  followLevel: 3,
  /** 호감도 레벨별 대사 (인덱스 0 = Lv.1) */
  dialogue: {
    somi: [
      '솜이: …(턱을 살짝 내밀며 거리를 둔다)',
      '솜이: "야옹." 조금은 익숙해진 얼굴이에요.',
      '솜이: 다가와서 옆에 딱 붙어 앉아요. 꼬리가 살랑살랑.',
      '솜이: 배를 보여 줘요. 이 섬에서 제일 무방비한 순간.',
      '솜이: 품에 폭 안겨요. 이제 떨어지기 싫은 모양이에요.',
    ],
    ongi: [
      '옹이: …(꼬리만 살짝 흔들고 도망갈 준비)',
      '옹이: "냐." 밥그릇을 한 번 쳐다봐요.',
      '옹이: 발등에 몸을 비비고 앞장서서 걸어요.',
      '옹이: 손끝을 콕콕 물었다가 핥아요. 장난인 게 분명해요.',
      '옹이: 어깨에 올라와 앉아요. 섬에서 제일 높은 자리랍니다.',
    ],
  },
};

/* ─────────────────────────────────────────────────────────────────
   📋 일일 의뢰 — Day 가 바뀌면 2건 자동 생성
   ───────────────────────────────────────────────────────────────── */

export const QUESTS = {
  chop: { id: 'chop', icon: '🪓', skill: 'gather', need: [2, 4], coin: [25, 35], star: 1, label: (n) => `나무 ${n}번 베기`, event: 'chop' },
  mine: { id: 'mine', icon: '⛏️', skill: 'gather', need: [2, 3], coin: [30, 40], star: 1, label: (n) => `바위 ${n}번 캐기`, event: 'mine' },
  fish: { id: 'fish', icon: '🎣', skill: 'fish', need: [2, 3], coin: [35, 45], star: 1, label: (n) => `물고기 ${n}마리 낚기`, event: 'fish' },
  treat: { id: 'treat', icon: '🐾', skill: 'care', need: [2, 2], coin: [20, 25], star: 0, label: (n) => `고양이 간식 ${n}번 주기`, event: 'treat' },
  pet: { id: 'pet', icon: '🤲', skill: 'care', need: [3, 4], coin: [15, 20], star: 0, label: (n) => `고양이 ${n}번 쓰다듬기`, event: 'pet' },
  cook: { id: 'cook', icon: '🍳', skill: 'cook', need: [1, 2], coin: [40, 55], star: 1, label: (n) => `요리 ${n}번 하기`, event: 'cook' },
  sell: { id: 'sell', icon: '🪙', skill: 'gather', need: [4, 6], coin: [25, 35], star: 0, label: (n) => `자판기에 ${n}개 팔기`, event: 'sell' },
  petal: { id: 'petal', icon: '🌸', skill: 'gather', need: [3, 5], coin: [20, 28], star: 0, label: (n) => `꽃잎 ${n}개 모으기`, event: 'petal' },
  // ── 3단계 농사 의뢰
  plant: { id: 'plant', icon: '🌱', skill: 'farm', need: [2, 3], coin: [25, 35], star: 0, label: (n) => `씨앗 ${n}번 심기`, event: 'plant' },
  crop: { id: 'crop', icon: '🧺', skill: 'farm', need: [2, 4], coin: [35, 50], star: 1, label: (n) => `작물 ${n}번 수확하기`, event: 'crop' },
  // ── 6단계 특산 채집·민물 낚시 의뢰
  beach: { id: 'beach', icon: '🐚', skill: 'gather', need: [3, 5], coin: [25, 35], star: 0, label: (n) => `해변 특산품 ${n}개 줍기`, event: 'beach' },
  forest: { id: 'forest', icon: '🍄', skill: 'gather', need: [3, 4], coin: [30, 40], star: 0, label: (n) => `숲 특산품 ${n}개 채집하기`, event: 'forest' },
  ore: { id: 'ore', icon: '💎', skill: 'gather', need: [2, 4], coin: [35, 45], star: 1, label: (n) => `광물 ${n}개 캐기`, event: 'ore' },
  riverfish: { id: 'riverfish', icon: '🏞️', skill: 'fish', need: [2, 3], coin: [40, 50], star: 1, label: (n) => `민물고기 ${n}마리 낚기`, event: 'riverfish' },
};

export const QUEST_ORDER = ['chop', 'mine', 'fish', 'treat', 'pet', 'cook', 'sell', 'petal', 'plant', 'crop', 'beach', 'forest', 'ore', 'riverfish'];

/* ─────────────────────────────────────────────────────────────────
   도우미
   ───────────────────────────────────────────────────────────────── */

/** id → {name, icon} (재료 + 물고기 + 상점 품목 + 씨앗/수확물 + 원정 자원을 한 번에) */
export function itemMeta(id) {
  if (ITEMS[id]) return { name: ITEMS[id].name, icon: ITEMS[id].icon, tint: ITEMS[id].tint || '#dcdcea' };
  if (FISH[id]) return { name: FISH[id].name, icon: FISH[id].icon, tint: FISH[id].tint };
  if (SHOP[id]) return { name: SHOP[id].name, icon: SHOP[id].icon, tint: '#ffe1b0' };
  if (CROPS[id]) return { name: CROPS[id].name, icon: CROPS[id].icon, tint: CROPS[id].tint };
  if (SEEDS[id]) return { name: SEEDS[id].name, icon: SEEDS[id].icon, tint: '#cbe8b0' };
  if (EXPEDITION_RESOURCES[id]) {
    return { name: EXPEDITION_RESOURCES[id].name, icon: EXPEDITION_RESOURCES[id].icon, tint: EXPEDITION_RESOURCES[id].tint };
  }
  return { name: id, icon: '❔', tint: '#dcdcea' };
}

export function itemName(id) {
  return itemMeta(id).name;
}

export function itemIcon(id) {
  return itemMeta(id).icon;
}

/** 멸치 같은 소형어는 g, 대형어는 cm 대신 g 로 표기 */
export function sizeLabel(fishId, size) {
  if (fishId === 'star') return '조각';
  return `${Math.round(size)}cm`;
}

/** 결정론적 난수 (Day 시드 기반 의뢰 생성) */
export function seededRandom(seed) {
  let s = (Math.floor(Number(seed) || 1) * 2654435761) % 4294967296;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

/** 그날의 의뢰 2건 — 해금된 구역·건물에 맞춰 필터링한다 */
export function rollDailyQuests(day, opts = null) {
  const rand = seededRandom(day * 97 + 13);
  const hasBridge = !opts || !!opts.bridgeBuilt;
  const hasWorkshop =
    !opts ||
    (typeof opts.building === 'function' ? !!(opts.building('workshop') && opts.building('workshop').done) : opts.workshopDone !== false);
  const hasVending =
    !opts ||
    (typeof opts.building === 'function' ? !!(opts.building('vending') && opts.building('vending').done) : opts.vendingDone !== false);

  const pool = QUEST_ORDER.filter((kind) => {
    if (!hasBridge && (kind === 'forest' || kind === 'ore')) return false;
    if (!hasWorkshop && kind === 'cook') return false;
    if (!hasVending && kind === 'sell') return false;
    return true;
  });

  const picks = [];
  while (picks.length < 2 && pool.length) {
    const idx = Math.floor(rand() * pool.length);
    picks.push(pool.splice(idx, 1)[0]);
  }
  return picks.map((kind, i) => {
    const def = QUESTS[kind];
    const need = def.need[0] + Math.floor(rand() * (def.need[1] - def.need[0] + 1));
    const coin = def.coin[0] + Math.floor(rand() * (def.coin[1] - def.coin[0] + 1));
    return {
      id: `${day}-${i}-${kind}`,
      kind,
      event: def.event,
      skill: def.skill || 'gather',
      icon: def.icon,
      label: def.label(need),
      need,
      progress: 0,
      claimed: false,
      reward: { coin, star: def.star },
    };
  });
}

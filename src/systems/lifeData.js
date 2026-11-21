/**
 * lifeData.js — 2단계 생활 콘텐츠(낚시·요리·상점·의뢰·랭크·고양이)의 단일 데이터 원천
 *
 * 화면(LifePanels)·규칙(Fishing/Cooking/Shop/Progress)·3D 연출이 모두 이 파일만 본다.
 * 밸런스 숫자를 바꾸고 싶으면 여기 한 곳만 고치면 된다.
 */
import { ITEMS } from './items.js';

/* ─────────────────────────────────────────────────────────────────
   🎣 낚시 — 어종 5종 + 별조각 보너스
   ───────────────────────────────────────────────────────────────── */

export const FISH = {
  anchovy: {
    id: 'anchovy',
    name: '은멸치',
    icon: '🐟',
    tint: '#cfe3f2',
    price: 9,
    weight: 34,
    rare: false,
    size: [6, 15],
    desc: '부두 끝에서 가장 먼저 인사하는 작은 은빛 물고기.',
  },
  bream: {
    id: 'bream',
    name: '통통도미',
    icon: '🐠',
    tint: '#f7b48f',
    price: 15,
    weight: 26,
    rare: false,
    size: [18, 33],
    desc: '손에 쥐면 묵직한, 통통해서 더 귀여운 도미.',
  },
  minnow: {
    id: 'minnow',
    name: '벚꽃송사리',
    icon: '🌸',
    tint: '#ffb8d6',
    price: 24,
    weight: 22,
    rare: false,
    size: [4, 10],
    desc: '벚꽃이 필 때만 물 위로 떠오르는 분홍빛 송사리.',
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
    desc: '밤에 잡으면 손끝이 반짝이는 투명 해파리.',
  },
  goldcarp: {
    id: 'goldcarp',
    name: '황금잉어',
    icon: '✨',
    tint: '#ffd76a',
    price: 110,
    weight: 5,
    rare: true,
    size: [30, 56],
    desc: '섬 사람들이 한 번도 못 봤다는 전설의 잉어.',
  },
  star: {
    id: 'star',
    name: '별조각',
    icon: '⭐',
    tint: '#ffd77a',
    price: 0,
    weight: 2,
    rare: true,
    size: [1, 1],
    desc: '물 위로 떠오른 별의 부스러기. 낚싯줄에 걸리기도 해요.',
  },
};

export const FISH_ORDER = ['anchovy', 'bream', 'minnow', 'jelly', 'goldcarp', 'star'];

/** 별빛 미끼를 쓸 때의 어종 확률 (희귀 어종 ↑) */
export const FISH_WEIGHTS_BAIT = {
  anchovy: 18,
  bream: 20,
  minnow: 22,
  jelly: 20,
  goldcarp: 13,
  star: 7,
};

export const FISHING = {
  /** 플레이어가 서서 낚시하는 자리 (부두 끝 물가) */
  spot: { x: 0, z: 16.2, range: 3.0 },
  /** 찌가 떨어지는 물 위 좌표 */
  castTo: { x: 0, z: 18.1 },
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
   🍳 요리 — 4종 (기력 회복 + 황금 정식은 버프)
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
    stamina: 100,
    exp: 60,
    buff: 60,
    desc: '황금잉어 한 마리를 온전히 담은 섬의 정찬. 60초 동안 채집이 가벼워져요.',
  },
};

export const COOK_ORDER = ['tea', 'grill', 'bream', 'golden'];

/** 황금 정식 버프 — 지속 초 동안 채집 기력 소모·이동 속도 보정 */
export const GOLDEN_BUFF = { seconds: 60, stamina: 0.6, speed: 1.18, label: '황금 버프' };

/* ─────────────────────────────────────────────────────────────────
   🪓 도구 강화 — 도끼 · 곡괭이 Lv.1~3
   ───────────────────────────────────────────────────────────────── */

export const TOOLS = {
  axe: {
    id: 'axe',
    name: '도끼',
    icon: '🪓',
    kind: 'tree',
    max: 3,
    cost: [{}, { log: 4, stone: 3, coin: 40 }, { log: 8, stone: 6, star: 2, coin: 120 }],
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
    cost: [{}, { log: 4, stone: 4, coin: 40 }, { log: 6, stone: 8, star: 2, coin: 120 }],
    stamina: [1, 0.85, 0.7],
    hits: [0, 0, 1],
    desc: '바위를 캐는 도구. 강화하면 돌이 더 빨리 나와요.',
  },
};

export const TOOL_ORDER = ['axe', 'pick'];

/* ─────────────────────────────────────────────────────────────────
   🥤 자판기 상점 — 사기 품목 · 팔기 가격
   ───────────────────────────────────────────────────────────────── */

export const SHOP = {
  churu: {
    id: 'churu',
    name: '고양이 츄르',
    icon: '🐾',
    price: 25,
    desc: '솜이·옹이가 제일 좋아하는 간식. 호감도 +14',
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
    price: 45,
    desc: '한 번 낚시할 때 희귀 어종 확률이 올라가요.',
  },
};

export const SHOP_ORDER = ['churu', 'ade', 'bait'];

/** 팔기 단가 — 재료 + 물고기. 여기에 없는 물건은 팔 수 없다 */
export const SELL = {
  log: 6,
  stone: 7,
  petal: 5,
  star: 35,
  berry: 4,
  anchovy: 9,
  bream: 15,
  minnow: 24,
  jelly: 45,
  goldcarp: 110,
};

/** 에이드 한 개의 기력 회복량 */
export const ADE_STAMINA = 40;

/* ─────────────────────────────────────────────────────────────────
   🌱 4대 생활 스킬 · 랭크 · 종합 칭호
   ───────────────────────────────────────────────────────────────── */

export const SKILLS = [
  { id: 'gather', name: '채집', icon: '🪓', desc: '나무·바위·꽃덤불을 두드릴 때마다' },
  { id: 'fish', name: '낚시', icon: '🎣', desc: '물고기를 잡을 때마다' },
  { id: 'cook', name: '요리', icon: '🍳', desc: '공방에서 요리할 때마다' },
  { id: 'care', name: '돌보기', icon: '🐾', desc: '고양이를 쓰다듬고 간식 줄 때마다' },
];

/** 랭크 사다리 — exp 이상이면 해당 랭크 */
export const RANKS = [
  { name: '연습', exp: 0 },
  { name: 'F', exp: 50 },
  { name: 'E', exp: 200 },
  { name: 'D', exp: 600 },
  { name: 'C', exp: 1200 },
  { name: 'B', exp: 2000 },
  { name: 'A', exp: 3200 },
  { name: 'S', exp: 4800 },
  { name: 'SS', exp: 7000 },
  { name: 'SSS', exp: 10000 },
];

/** 네 스킬 EXP 합계 → 종합 섬 생활 칭호 */
export const LIFE_TITLES = [
  { exp: 0, name: '섬의 새내기', icon: '🌱' },
  { exp: 120, name: '섬의 살림꾼', icon: '🧺' },
  { exp: 400, name: '섬의 일꾼', icon: '🪣' },
  { exp: 900, name: '섬의 솜씨꾼', icon: '🧵' },
  { exp: 1700, name: '섬의 장인', icon: '🔨' },
  { exp: 2800, name: '섬의 명인', icon: '🏮' },
  { exp: 4400, name: '섬의 수호자', icon: '🛡️' },
  { exp: 6800, name: '섬의 별', icon: '🌟' },
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
};

/* ─────────────────────────────────────────────────────────────────
   🐱 솜이 · 옹이 호감도 · 간식 · 따라오기
   ───────────────────────────────────────────────────────────────── */

/** 호감도 레벨 문턱 (인덱스 0 = Lv.1) */
export const CAT_LEVELS = [0, 18, 40, 68, 100];

export const CAT_CARE = {
  /** 쓰다듬기 */
  pet: { aff: 4, stamina: 3, cooldown: 6 },
  /** 간식 — 열매/은멸치/츄르 */
  snacks: {
    berry: { id: 'berry', name: '열매', icon: '🍓', aff: 6, cooldown: 3 },
    anchovy: { id: 'anchovy', name: '은멸치', icon: '🐟', aff: 8, cooldown: 3 },
    churu: { id: 'churu', name: '츄르', icon: '🐾', aff: 14, cooldown: 4 },
  },
  snackOrder: ['berry', 'anchovy', 'churu'],
  /** 이 레벨을 처음 넘을 때 보답 선물 (Lv = 키) */
  gifts: {
    2: { star: 1 },
    3: { petal: 3 },
    4: { star: 2 },
    5: { petal: 5, star: 3 },
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
  chop: { id: 'chop', icon: '🪓', need: [2, 4], coin: [25, 35], star: 1, label: (n) => `나무 ${n}번 베기`, event: 'chop' },
  mine: { id: 'mine', icon: '⛏️', need: [2, 3], coin: [30, 40], star: 1, label: (n) => `바위 ${n}번 캐기`, event: 'mine' },
  fish: { id: 'fish', icon: '🎣', need: [2, 3], coin: [35, 45], star: 1, label: (n) => `물고기 ${n}마리 낚기`, event: 'fish' },
  treat: { id: 'treat', icon: '🐾', need: [2, 2], coin: [20, 25], star: 0, label: (n) => `고양이 간식 ${n}번 주기`, event: 'treat' },
  pet: { id: 'pet', icon: '🤲', need: [3, 4], coin: [15, 20], star: 0, label: (n) => `고양이 ${n}번 쓰다듬기`, event: 'pet' },
  cook: { id: 'cook', icon: '🍳', need: [1, 2], coin: [40, 55], star: 1, label: (n) => `요리 ${n}번 하기`, event: 'cook' },
  sell: { id: 'sell', icon: '🪙', need: [4, 6], coin: [25, 35], star: 0, label: (n) => `자판기에 ${n}개 팔기`, event: 'sell' },
  petal: { id: 'petal', icon: '🌸', need: [3, 5], coin: [20, 28], star: 0, label: (n) => `꽃잎 ${n}개 모으기`, event: 'petal' },
};

export const QUEST_ORDER = ['chop', 'mine', 'fish', 'treat', 'pet', 'cook', 'sell', 'petal'];

/* ─────────────────────────────────────────────────────────────────
   도우미
   ───────────────────────────────────────────────────────────────── */

/** id → {name, icon} (재료 + 물고기 + 상점 품목을 한 번에) */
export function itemMeta(id) {
  if (ITEMS[id]) return { name: ITEMS[id].name, icon: ITEMS[id].icon, tint: ITEMS[id].tint || '#dcdcea' };
  if (FISH[id]) return { name: FISH[id].name, icon: FISH[id].icon, tint: FISH[id].tint };
  if (SHOP[id]) return { name: SHOP[id].name, icon: SHOP[id].icon, tint: '#ffe1b0' };
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

/** 그날의 의뢰 2건 — Day 숫자만 같으면 언제 열어도 같은 의뢰 */
export function rollDailyQuests(day) {
  const rand = seededRandom(day * 97 + 13);
  const pool = [...QUEST_ORDER];
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
      icon: def.icon,
      label: def.label(need),
      need,
      progress: 0,
      claimed: false,
      reward: { coin, star: def.star },
    };
  });
}

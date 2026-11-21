/**
 * defenseData.js — 5단계 방어전의 수치 한 곳
 *
 * · 방어 설비 4종(나무 울타리 · 메타몽 허수아비 · 물풍선 포탑 · 별빛 경보등)의 재료·능력
 * · 주인공 무기 2종(새총 · 꽃잎 물풍선)
 * · 불청객 3종(졸개 · 발빠른 자 · 덩치)과 3일 주기 웨이브 편성
 * · 솜이·옹이 헬퍼와 모인 메타몽 변신 보조의 계수
 *
 * 화면(Phase5Panels)과 3D(Defense.js)가 모두 이 파일만 읽는다.
 * 재료 이름은 기존 items.js 의 ITEMS 를 그대로 쓴다 — 5단계를 위해 새 재료를 만들지 않는다.
 */
import { DITTOS } from '../config.js';

/* ── 방어 설비 ────────────────────────────────────────────── */

export const STRUCTURES = {
  fence: {
    id: 'fence',
    name: '나무 울타리',
    icon: '🪵',
    cost: { log: 3, stone: 2 },
    hp: 88,
    height: 1.05,
    blocks: true,
    desc: '길목을 가로질러 세워 불청객의 발을 묶어요. 부서질 때까지 시간을 벌어 줍니다.',
    effect: '진격 차단 · 체력 88',
  },
  scarecrow: {
    id: 'scarecrow',
    name: '메타몽 허수아비',
    icon: '🟣',
    cost: { log: 3, petal: 3, berry: 1 },
    hp: 46,
    height: 1.18,
    blocks: true,
    taunt: 3.4,
    desc: '진짜 메타몽인 줄 알고 달려드는 어그로 미끼. 시선이 끌린 불청객이 잠시 멈춰요.',
    effect: '반경 3.4 · 시선 끌기',
  },
  turret: {
    id: 'turret',
    name: '물풍선 포탑',
    icon: '🎈',
    cost: { log: 4, stone: 3, petal: 2 },
    hp: 58,
    height: 1.2,
    range: 7.2,
    cooldown: 1.5,
    damage: 9,
    slow: 0.55,
    desc: '사거리 안 불청객에게 물풍선을 자동으로 퐁퐁. 맞은 불청객은 잠깐 느려져요.',
    effect: '사거리 7.2 · 1.5초마다',
  },
  lamp: {
    id: 'lamp',
    name: '별빛 경보등',
    icon: '⭐',
    cost: { stone: 4, star: 1 },
    hp: 40,
    height: 1.55,
    range: 5.6,
    boost: 1.35,
    slow: 0.62,
    desc: '주변 물풍선 포탑의 공격 속도를 올리고, 가까이 온 불청객의 발을 늦춰요.',
    effect: '포탑 가속 ×1.35 · 둔화',
  },
};

export const STRUCTURE_ORDER = ['fence', 'scarecrow', 'turret', 'lamp'];

/** 제작에 함께 쓰는 안내 — 공방 [방어 제작] 탭에서 보여 준다 */
export const STRUCTURE_NOTES = {
  fence: '가장 싸고 튼튼한 기본기예요. 길목 앞쪽에 먼저 세워 두면 포탑이 쏠 시간이 생겨요.',
  scarecrow: '울타리보다 약하지만 불청객을 엉뚱한 곳으로 끌어당겨요.',
  turret: '직접 쏘지 않아도 알아서 쏴요. 경보등 옆에 붙여 두면 훨씬 빨라져요.',
  lamp: '별조각이 들어가요. 포탑 하나만 있어도 옆에 세우면 체감이 확 달라집니다.',
};

/* ── 주인공 무기 ──────────────────────────────────────────── */

export const WEAPONS = {
  sling: {
    id: 'sling',
    name: '새총',
    icon: '🪃',
    damage: 8,
    cooldown: 0.55,
    range: 10.5,
    free: true,
    desc: '무제한. 가장 가까운 불청객을 향해 조약돌을 쏴요.',
  },
  balloon: {
    id: 'balloon',
    name: '꽃잎 물풍선',
    icon: '🎈',
    damage: 15,
    cooldown: 0.95,
    range: 9.0,
    splash: 2.4,
    knockback: 1.4,
    petals: 1,
    shots: 5,
    desc: '꽃잎 1개로 5발. 맞은 자리 주변까지 터지며 밀어내요.',
  },
};

/* ── 불청객 ───────────────────────────────────────────────── */

export const RAIDER_KINDS = {
  grunt: { id: 'grunt', name: '회색 망토', icon: '🥷', hp: 54, speed: 1.55, height: 1.2, steal: 10 },
  runner: { id: 'runner', name: '발빠른 자', icon: '💨', hp: 38, speed: 2.35, height: 1.1, steal: 8 },
  big: { id: 'big', name: '덩치 망토', icon: '🧟', hp: 96, speed: 1.12, height: 1.5, steal: 16 },
};

/** 웨이브 — 약 44초. 그 사이에 모두 막아내면 승리 */
export const WAVE = {
  duration: 44,
  firstDelay: 1.4,
  spawnGap: 2.1,
  boatIn: 2.6,
  attackDps: 8,
};

/** 그날의 웨이브 편성 — 날이 갈수록 조금씩 많아진다(최대 14) */
export function wavePlan(day) {
  const d = Math.max(1, Math.floor(Number(day) || 1));
  const count = Math.min(14, 5 + Math.floor(d / 3));
  const list = [];
  for (let i = 0; i < count; i++) {
    if (d >= 6 && i % 5 === 4) list.push('big');
    else if (i % 3 === 2) list.push('runner');
    else list.push('grunt');
  }
  return list;
}

/** 승리 보상 — 섬 코인 · 별조각 · 희귀 씨앗(황금호박) */
export function victoryReward(day) {
  const d = Math.max(1, Math.floor(Number(day) || 1));
  return { coin: 60 + d * 5, star: 1 + (d >= 6 ? 1 : 0), seed: 'seed_pumpkin', seedCount: 2 };
}

/** 불청객 한 명이 광장을 뚫었을 때 챙겨 가는 코인 (하루치 Day 에 비례) */
export function stealAmount(day) {
  return 10 + Math.max(1, Math.floor(Number(day) || 1)) * 2;
}

/* ── 냥이 헬퍼 (호감도 Lv.1~5 연동) ───────────────────────── */

export const CAT_HELP = {
  somi: {
    id: 'somi',
    name: '솜이',
    icon: '🐱',
    punchRange: 3.0,
    punchDamage: 7,
    punchStun: 1.15,
    cooldown: 6.4,
    speedBuff: 0.14,
    desc: '가까이 온 불청객에게 냥냥 펀치(짧은 경직) · 주인공 이속 +14%',
  },
  ongi: {
    id: 'ongi',
    name: '옹이',
    icon: '😼',
    clawRange: 2.1,
    clawDamage: 9,
    clawSlow: 0.8,
    cooldown: 3.6,
    desc: '불청객 뒤를 쫓아 할퀴기 · 배가 다가오면 가장 먼저 "야옹!" 경보',
  },
};

/** 호감도 레벨(1~5) → 위력·쿨타임 계수 */
export function catPower(level) {
  const lv = Math.max(1, Math.min(5, Math.floor(Number(level) || 1)));
  return { power: 1 + (lv - 1) * 0.18, cd: 1 - (lv - 1) * 0.08 };
}

/* ── 모인 메타몽 변신 보조 (도감 발견 수 연동) ───────────── */

/**
 * 도감의 위장 메타몽을 변신 소재별로 나눈다.
 *  rock   바위·통나무형 → 광장 울타리 내구도 보강
 *  decoy  버섯·꽃형     → 길목에 어설픈 가짜 분신
 *  supply 열매형        → 물풍선 탄약 보급
 */
export const DITTO_SUPPORT = {
  ditto_pebble_02: 'rock',
  ditto_signpost_07: 'rock',
  ditto_mailbox_03: 'rock',
  ditto_mushroom_06: 'decoy',
  ditto_flowerpot_04: 'decoy',
  ditto_bench_05: 'supply',
  ditto_basic_01: 'supply',
};

/** 발견한 메타몽 목록 → 응원 버프 계수 */
export function supportOf(discovered = []) {
  const ids = new Set(Array.isArray(discovered) ? discovered : []);
  let rock = 0;
  let decoy = 0;
  let supply = 0;
  for (const d of DITTOS) {
    if (!ids.has(d.id)) continue;
    const kind = DITTO_SUPPORT[d.id];
    if (kind === 'rock') rock += 1;
    else if (kind === 'decoy') decoy += 1;
    else if (kind === 'supply') supply += 1;
  }
  const count = rock + decoy + supply;
  return {
    count,
    rock,
    decoy,
    supply,
    /** 포탑·새총 위력 — 발견 1마리당 +5% */
    power: 1 + count * 0.05,
    /** 울타리 내구도 — 바위·통나무형 1마리당 +12% */
    fenceHp: 1 + rock * 0.12,
    /** 어설픈 가짜 분신 수 (최대 2) */
    decoys: Math.min(2, decoy),
    /** 웨이브 시작 시 물풍선 탄약 보너스 — 열매형 1마리당 +2발 */
    ammo: supply * 2,
  };
}

/** 방어전 결과 문구 */
export const RESULT_TEXT = {
  victory: { icon: '🎉', title: '승리!', sub: '수집단이 빈손으로 돌아갔어요' },
  partial: { icon: '😿', title: '코인을 조금 빼앗겼어요', sub: '건물과 작물은 무사해요 — 다음엔 더 단단히 막아 봐요' },
  none: { icon: '🛡️', title: '방어 종료', sub: '불청객이 물러갔어요' },
};

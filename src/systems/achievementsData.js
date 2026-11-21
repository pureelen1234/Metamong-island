/**
 * achievementsData.js — 섬 업적 12종의 정의
 *
 * 각 업적은 "지금 값(value)"을 Progress 에서 읽어 목표(need)와 비교한다.
 * 누적 카운터는 progress.counters 에 쌓이고(채집·낚시·요리·농사·판매·돌보기),
 * 고양이 호감도·도감·건물 복구처럼 상태에서 바로 계산되는 것은 value 함수가 읽는다.
 *
 * 보상은 코인·별조각 — 받는 것은 유저가 [보상 받기] 를 누를 때다(자동 지급 아님).
 */
import { CATS, DITTOS, LANDMARKS } from '../config.js';

/** 업적 카테고리 — 모달에서 묶어 보여 준다 */
export const ACH_GROUPS = [
  { id: 'gather', name: '채집', icon: '🪓' },
  { id: 'fish', name: '낚시', icon: '🎣' },
  { id: 'cook', name: '요리', icon: '🍳' },
  { id: 'farm', name: '농사', icon: '🌱' },
  { id: 'life', name: '섬 생활', icon: '🏝️' },
];

const maxCatLevel = (p) => Math.max(...CATS.map((c) => p.catLevel(p.cat(c.id).aff)));

export const ACHIEVEMENTS = [
  {
    id: 'ach_first_chop',
    group: 'gather',
    icon: '🌳',
    name: '첫 나무',
    desc: '나무를 처음으로 끝까지 베어 내기',
    event: 'tree',
    need: 1,
    reward: { coin: 30, star: 0 },
  },
  {
    id: 'ach_woodcutter',
    group: 'gather',
    icon: '🪓',
    name: '섬의 나무꾼',
    desc: '나무 20그루 베어 내기',
    event: 'tree',
    need: 20,
    reward: { coin: 60, star: 1 },
  },
  {
    id: 'ach_first_fish',
    group: 'fish',
    icon: '🐟',
    name: '첫 낚시',
    desc: '부두에서 물고기 한 마리 낚기',
    event: 'fish',
    need: 1,
    reward: { coin: 30, star: 0 },
  },
  {
    id: 'ach_angler',
    group: 'fish',
    icon: '🎣',
    name: '부두의 낚시꾼',
    desc: '물고기 15마리 낚기',
    event: 'fish',
    need: 15,
    reward: { coin: 80, star: 2 },
  },
  {
    id: 'ach_first_cook',
    group: 'cook',
    icon: '🍳',
    name: '첫 요리',
    desc: '공방에서 요리 한 번 하기',
    event: 'cook',
    need: 1,
    reward: { coin: 30, star: 0 },
  },
  {
    id: 'ach_cook5',
    group: 'cook',
    icon: '🍲',
    name: '공방의 솜씨',
    desc: '요리 5번 하기',
    event: 'cook',
    need: 5,
    reward: { coin: 70, star: 1 },
  },
  {
    id: 'ach_first_seed',
    group: 'farm',
    icon: '🌱',
    name: '첫 씨앗',
    desc: '텃밭에 씨앗 한 번 심기',
    event: 'plant',
    need: 1,
    reward: { coin: 25, star: 0 },
  },
  {
    id: 'ach_farmer',
    group: 'farm',
    icon: '🧺',
    name: '텃밭지기',
    desc: '작물 10번 수확하기',
    event: 'crop',
    need: 10,
    reward: { coin: 80, star: 2 },
  },
  {
    id: 'ach_merchant',
    group: 'life',
    icon: '🪙',
    name: '섬의 상인',
    desc: '자판기에 물건 30개 팔기',
    event: 'sell',
    need: 30,
    reward: { coin: 70, star: 1 },
  },
  {
    id: 'ach_cat_friend',
    group: 'life',
    icon: '🐱',
    name: '고양이의 친구',
    desc: '솜이·옹이 중 한 마리와 호감도 Lv.3',
    need: 3,
    value: maxCatLevel,
    reward: { coin: 60, star: 1 },
  },
  {
    id: 'ach_cart',
    group: 'life',
    icon: '🛒',
    name: '손수레의 날',
    desc: '공방에서 리어카 만들기 (가방 8칸 → 16칸)',
    need: 1,
    value: (p) => Math.max(0, Math.floor(Number(p.cartLevel) || 0)),
    reward: { coin: 55, star: 1 },
  },
  {
    id: 'ach_bridge',
    group: 'life',
    icon: '🌉',
    name: '강을 건너서',
    desc: '통나무·돌로 다리를 놓아 북쪽 개척권 열기',
    need: 1,
    value: (p) => (p.bridgeBuilt ? 1 : 0),
    reward: { coin: 70, star: 1 },
  },
  {
    id: 'ach_ditto_all',
    group: 'life',
    icon: '📔',
    name: '메타몽 수집가',
    desc: `어설픈 메타몽 ${DITTOS.length}마리 모두 도감에 등록`,
    need: DITTOS.length,
    value: (p) => Math.max(0, Math.floor(Number(p.discoveredCount) || 0)),
    /** 발견 목록은 Game 상태에 있으므로 Game 이 progress.discoveredCount 로 동기화한다 */
    external: true,
    reward: { coin: 100, star: 3 },
  },
  {
    id: 'ach_rebuilder',
    group: 'life',
    icon: '🏗️',
    name: '섬의 재건자',
    desc: '부두·공방·자판기·등대 네 곳 모두 복구',
    need: LANDMARKS.length,
    value: (p) => LANDMARKS.filter((lm) => p.building(lm.id).done).length,
    reward: { coin: 120, star: 2 },
  },
];

export const ACH_ORDER = ACHIEVEMENTS.map((a) => a.id);

export function achById(id) {
  return ACHIEVEMENTS.find((a) => a.id === id) || null;
}

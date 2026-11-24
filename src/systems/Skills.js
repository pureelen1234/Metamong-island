/**
 * Skills.js — 5대 생활 스킬(채집·낚시·요리·돌보기·농사)의 EXP·랭크·보너스 계산
 *
 * 값은 전부 lifeData.js(RANKS · LIFE_TITLES)에서 온다. 여기서는 "exp → 랭크/게이지/보너스"만 계산하고,
 * 저장·복구는 Progress 가 맡는다. 어떤 모양의 세이브가 들어와도 throw 하지 않는다.
 */
import { EXP_GAIN, LIFE_TITLES, RANKS, SKILLS } from './lifeData.js';

const SKILL_IDS = SKILLS.map((s) => s.id);
const MAX_RANK = RANKS[RANKS.length - 1].exp;
const MAX_TITLE = LIFE_TITLES[LIFE_TITLES.length - 1].exp;

export class Skills {
  constructor(json) {
    this.exp = {};
    for (const id of SKILL_IDS) this.exp[id] = 0;
    if (json) this.load(json);
  }

  reset() {
    for (const id of SKILL_IDS) this.exp[id] = 0;
  }

  get(id) {
    return Math.max(0, Math.floor(Number(this.exp[id]) || 0));
  }

  /** EXP 를 더한다. @returns {{id:string, gain:number, before:number, after:number, rankedUp:boolean, rank:string}} */
  add(id, amount) {
    if (!SKILL_IDS.includes(id)) return { id, gain: 0, before: 0, after: 0, rankedUp: false, rank: '' };
    const n = Math.max(0, Math.floor(Number(amount) || 0));
    const before = this.get(id);
    const after = Math.min(MAX_RANK, before + n);
    this.exp[id] = after;
    return {
      id,
      gain: after - before,
      before,
      after,
      rankedUp: this.rankIndex(after) > this.rankIndex(before),
      rank: this.rank(after).name,
    };
  }

  /** exp 값 → 랭크 인덱스 (0=연습) */
  rankIndex(exp) {
    let idx = 0;
    for (let i = 0; i < RANKS.length; i++) if (exp >= RANKS[i].exp) idx = i;
    return idx;
  }

  rank(exp) {
    return RANKS[this.rankIndex(exp)];
  }

  /** 레벨(1~10) */
  level(id) {
    return this.rankIndex(this.get(id)) + 1;
  }

  /**
   * 랭크 기반 실전 게임플레이 보너스 (랭크 0..8 구간 기준)
   *  gather: 추가 드롭 확률 (+3%/랭크)
   *  fish:   입질 창 연장 (+0.06초/랭크)
   *  farm:   추가 수확 확률 (+3%/랭크)
   *  cook:   요리 버프 지속시간 증가율 (+6%/랭크)
   *  care:   고양이 호감도 보너스 (+5%/랭크)
   *  defend: 포탑·무기 피해 보너스 (+4%/랭크, 전 스킬 평균 랭크 기반)
   */
  bonus(key) {
    let r = 0;
    if (key === 'defend') {
      const avg = SKILL_IDS.reduce((acc, id) => acc + this.rankIndex(this.get(id)), 0) / Math.max(1, SKILL_IDS.length);
      r = Math.min(8, Math.floor(avg));
    } else if (SKILL_IDS.includes(key)) {
      r = Math.min(8, this.rankIndex(this.get(key)));
    } else {
      return 0;
    }
    switch (key) {
      case 'gather':
        return Math.round(r * 0.03 * 1000) / 1000;
      case 'fish':
        return Math.round(r * 0.06 * 1000) / 1000;
      case 'farm':
        return Math.round(r * 0.03 * 1000) / 1000;
      case 'cook':
        return Math.round(r * 0.06 * 1000) / 1000;
      case 'care':
        return Math.round(r * 0.05 * 1000) / 1000;
      case 'defend':
        return Math.round(r * 0.04 * 1000) / 1000;
      default:
        return 0;
    }
  }

  /** 스킬 한 줄 상태 — 라벨/랭크/다음 랭크까지 진행률 */
  row(id) {
    const def = SKILLS.find((s) => s.id === id) || { id, name: id, icon: '🌱', desc: '' };
    const exp = this.get(id);
    const idx = this.rankIndex(exp);
    const cur = RANKS[idx];
    const next = RANKS[idx + 1] || null;
    const span = next ? next.exp - cur.exp : 1;
    const pct = next ? Math.min(100, Math.round(((exp - cur.exp) / span) * 100)) : 100;
    return {
      id,
      name: def.name,
      icon: def.icon,
      desc: def.desc,
      exp,
      level: idx + 1,
      rank: cur.name,
      next,
      pct,
      toNext: next ? Math.max(0, next.exp - exp) : 0,
      bonus: this.bonus(id),
    };
  }

  rows() {
    return SKILL_IDS.map((id) => this.row(id));
  }

  get total() {
    return SKILL_IDS.reduce((a, id) => a + this.get(id), 0);
  }

  /** 종합 섬 생활 칭호 */
  title() {
    const total = this.total;
    let best = LIFE_TITLES[0];
    for (const t of LIFE_TITLES) if (total >= t.exp) best = t;
    const next = LIFE_TITLES.find((t) => t.exp > total) || null;
    return {
      name: best.name,
      icon: best.icon,
      total,
      next,
      pct: next ? Math.min(100, Math.round(((total - best.exp) / Math.max(1, next.exp - best.exp)) * 100)) : 100,
      toNext: next ? next.exp - total : 0,
      maxed: total >= MAX_TITLE,
    };
  }

  /* ── 저장 ─────────────────────────────────────────────── */

  toJSON() {
    const out = {};
    for (const id of SKILL_IDS) out[id] = this.get(id);
    return out;
  }

  load(json) {
    this.reset();
    if (!json || typeof json !== 'object') return this;
    for (const id of SKILL_IDS) {
      const n = Math.floor(Number(json[id]));
      this.exp[id] = Number.isFinite(n) && n > 0 ? Math.min(MAX_RANK, n) : 0;
    }
    return this;
  }
}

export { EXP_GAIN };

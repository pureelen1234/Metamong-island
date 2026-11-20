/**
 * Progress.js — 채집·가방·창고·복구·우체통·기력 상태 묶음
 *
 * Game 은 이 객체 하나만 저장하고 불러온다. 구버전 세이브(1단계 이전)에는
 * stamina/bag/storage/buildings/mailbox 가 아예 없으므로, load() 가 모든 필드를
 * 하나씩 검사해 기본값을 병합한다 — 어떤 모양이 들어와도 throw 하지 않는다.
 */
import { Inventory } from './Inventory.js';
import { LANDMARKS } from '../config.js';
import { ITEMS, STAMINA } from './items.js';

const clamp = (v, lo, hi, fallback) => {
  const n = Number(v);
  if (!Number.isFinite(n)) return fallback;
  return Math.max(lo, Math.min(hi, n));
};

export class Progress {
  constructor(json) {
    this.reset();
    if (json) this.load(json);
  }

  reset() {
    this.stamina = STAMINA.max;
    this.inventory = new Inventory();
    this.buildings = {};
    for (const lm of LANDMARKS) this.buildings[lm.id] = { invested: {}, done: false };
    /** 읽은 편지 id / 선물을 받은 편지 id */
    this.mailbox = { read: [], claimed: [] };
    /** 채집 오브젝트 상태: key → { left: 남은 타격, respawn: 남은 초 } */
    this.nodes = {};
  }

  /* ── 기력 ─────────────────────────────────────────────── */

  useStamina(cost) {
    const c = Math.max(0, Number(cost) || 0);
    if (this.stamina < c) return false;
    this.stamina = Math.max(0, this.stamina - c);
    return true;
  }

  restStamina(amount) {
    this.stamina = Math.min(STAMINA.max, this.stamina + Math.max(0, Number(amount) || 0));
  }

  /* ── 건물 ─────────────────────────────────────────────── */

  building(id) {
    if (!this.buildings[id]) this.buildings[id] = { invested: {}, done: false };
    return this.buildings[id];
  }

  /** 해당 건물에 지금까지 투입한 총량 */
  investedTotal(id) {
    const inv = this.building(id).invested;
    return Object.values(inv).reduce((a, b) => a + (Number(b) || 0), 0);
  }

  /* ── 편지 ─────────────────────────────────────────────── */

  isRead(id) {
    return this.mailbox.read.includes(id);
  }

  markRead(id) {
    if (!this.isRead(id)) this.mailbox.read.push(id);
  }

  isClaimed(id) {
    return this.mailbox.claimed.includes(id);
  }

  markClaimed(id) {
    if (!this.isClaimed(id)) this.mailbox.claimed.push(id);
  }

  /* ── 저장 ─────────────────────────────────────────────── */

  toJSON() {
    const inv = this.inventory.toJSON();
    return {
      stamina: Math.round(this.stamina * 10) / 10,
      bag: inv.bag,
      storage: inv.storage,
      buildings: this.buildings,
      mailbox: this.mailbox,
      nodes: this.nodes,
    };
  }

  load(json) {
    this.reset();
    if (!json || typeof json !== 'object') return this;

    this.stamina = clamp(json.stamina, 0, STAMINA.max, STAMINA.max);
    this.inventory.load({ bag: json.bag, storage: json.storage });

    const b = json.buildings && typeof json.buildings === 'object' ? json.buildings : {};
    for (const lm of LANDMARKS) {
      const src = b[lm.id] && typeof b[lm.id] === 'object' ? b[lm.id] : null;
      const target = this.buildings[lm.id];
      if (!src) continue;
      target.done = !!src.done;
      if (src.invested && typeof src.invested === 'object') {
        for (const [id, raw] of Object.entries(src.invested)) {
          if (!ITEMS[id]) continue;
          const n = Math.floor(Number(raw));
          if (Number.isFinite(n) && n > 0) target.invested[id] = n;
        }
      }
    }

    const mb = json.mailbox && typeof json.mailbox === 'object' ? json.mailbox : {};
    const read = Array.isArray(mb.read) ? mb.read : [];
    const claimed = Array.isArray(mb.claimed) ? mb.claimed : [];
    this.mailbox.read = read.filter((x) => typeof x === 'string');
    this.mailbox.claimed = claimed.filter((x) => typeof x === 'string');

    if (json.nodes && typeof json.nodes === 'object') {
      for (const [key, raw] of Object.entries(json.nodes)) {
        if (typeof key !== 'string' || !raw || typeof raw !== 'object') continue;
        const left = Math.floor(Number(raw.left));
        const respawn = Number(raw.respawn);
        this.nodes[key] = {
          left: Number.isFinite(left) && left >= 0 ? Math.min(9, left) : 0,
          respawn: Number.isFinite(respawn) && respawn > 0 ? Math.min(600, respawn) : 0,
        };
      }
    }
    return this;
  }
}

/**
 * Inventory.js — 가방(기본 8칸 · 칸당 20개)과 공방 창고(재료별 누적)
 *
 * 가방은 "칸" 배열이다. 같은 재료는 한 칸에 20개까지 쌓이고, 20개를 넘으면
 * 새 칸을 쓰려 한다. 새 칸도 없으면 남는 수량(leftover)을 돌려주고, 부르는 쪽이
 * 바닥에 내려놓거나 안내 문구를 띄운다 — 조용히 사라지는 재료는 만들지 않는다.
 *
 * 4단계: 칸 수가 고정이 아니라 `capacity` 다. 공방에서 🛒 리어카를 만들면
 * 8칸 → 16칸으로 늘어나고(setCapacity), 세이브에는 쓰고 있는 칸만 저장된다.
 */
import { BAG, ITEMS, ITEM_ORDER, STORAGE_CAP } from './items.js';

const validId = (id) => typeof id === 'string' && !!ITEMS[id];

/** 허용 범위(8~24칸)로 자른 칸 수 */
function clampCapacity(n) {
  const v = Math.floor(Number(n));
  if (!Number.isFinite(v)) return BAG.slots;
  return Math.max(BAG.slots, Math.min(24, v));
}

export class Inventory {
  constructor(json, slots = BAG.slots) {
    this.capacity = clampCapacity(slots);
    this.bag = new Array(this.capacity).fill(null);
    this.storage = {};
    if (json) this.load(json, this.capacity);
  }

  /** 지금 가방 칸 수 */
  get slots() {
    return this.capacity;
  }

  /**
   * 칸 수를 바꾼다(리어카). 늘릴 때 기존 칸은 그대로 두고 뒤에 빈 칸을 붙인다.
   * 줄일 때는 뒤쪽 칸에 남은 재료를 버리지 않고 돌려준다.
   * @returns {Array<{id:string,n:number}>} 자리가 없어 넘친 재료
   */
  setCapacity(n) {
    const next = clampCapacity(n);
    const spill = [];
    if (next === this.capacity) return spill;
    const old = this.bag;
    const out = new Array(next).fill(null);
    for (let i = 0; i < Math.min(old.length, next); i++) out[i] = old[i];
    if (old.length > next) {
      for (let i = next; i < old.length; i++) {
        const slot = old[i];
        if (slot && slot.n > 0) spill.push({ id: slot.id, n: slot.n });
      }
    }
    this.capacity = next;
    this.bag = out;
    for (const s of spill) this.add(s.id, s.n);
    return spill;
  }

  /* ── 읽기 ─────────────────────────────────────────────── */

  /** 가방 안의 해당 재료 총량 */
  count(id) {
    let n = 0;
    for (const s of this.bag) if (s && s.id === id) n += s.n;
    return n;
  }

  /** 창고 안의 해당 재료 총량 */
  stored(id) {
    return Math.max(0, Math.floor(Number(this.storage[id]) || 0));
  }

  /** 이 재료를 더 담을 수 있는 공간(칸 여유 포함) */
  roomFor(id) {
    if (!validId(id)) return 0;
    let room = 0;
    for (const s of this.bag) {
      if (!s) room += BAG.stack;
      else if (s.id === id) room += Math.max(0, BAG.stack - s.n);
    }
    return room;
  }

  usedSlots() {
    return this.bag.filter(Boolean).length;
  }

  totalItems() {
    let n = 0;
    for (const s of this.bag) if (s) n += s.n;
    return n;
  }

  /** 가방 목록 — 같은 재료는 칸이 나뉘어 있어도 한 줄로 합쳐 보여 준다(이동은 재료 단위) */
  bagEntries() {
    const totals = new Map();
    for (const s of this.bag) {
      if (!s || s.n <= 0) continue;
      totals.set(s.id, (totals.get(s.id) || 0) + s.n);
    }
    return ITEM_ORDER.filter((id) => totals.has(id)).map((id) => ({ id, n: totals.get(id) }));
  }

  /** 창고에 있는 재료만 정해진 순서로 */
  storageEntries() {
    return ITEM_ORDER.filter((id) => this.stored(id) > 0).map((id) => ({ id, n: this.stored(id) }));
  }

  /* ── 쓰기 ─────────────────────────────────────────────── */

  /**
   * 가방에 넣는다.
   * @returns {number} 넣지 못하고 남은 수량 (0이면 전부 들어감)
   */
  add(id, amount) {
    if (!validId(id)) return 0;
    let left = Math.max(0, Math.floor(Number(amount) || 0));
    if (left <= 0) return 0;

    // ① 이미 있는 칸부터 채운다
    for (const slot of this.bag) {
      if (left <= 0) break;
      if (!slot || slot.id !== id) continue;
      const room = BAG.stack - slot.n;
      if (room <= 0) continue;
      const put = Math.min(room, left);
      slot.n += put;
      left -= put;
    }

    // ② 빈 칸에 새로 담는다
    while (left > 0) {
      const idx = this.bag.indexOf(null);
      if (idx < 0) break;
      const put = Math.min(BAG.stack, left);
      this.bag[idx] = { id, n: put };
      left -= put;
    }
    return left;
  }

  /** 가방에서 꺼낸다. @returns {number} 실제로 꺼낸 수량 */
  take(id, amount) {
    let want = Math.max(0, Math.floor(Number(amount) || 0));
    if (want <= 0) return 0;
    let taken = 0;
    for (let i = 0; i < this.bag.length && want > 0; i++) {
      const slot = this.bag[i];
      if (!slot || slot.id !== id) continue;
      const use = Math.min(slot.n, want);
      slot.n -= use;
      want -= use;
      taken += use;
      if (slot.n <= 0) this.bag[i] = null;
    }
    return taken;
  }

  /** 가방 → 창고. amount 대신 'all' 을 주면 전부 옮긴다. @returns {number} 옮긴 수량 */
  toStorage(id, amount = 'all') {
    const have = this.count(id);
    if (!have) return 0;
    const room = Math.max(0, STORAGE_CAP - this.stored(id));
    const want = amount === 'all' ? have : Math.min(have, Math.max(0, Math.floor(Number(amount) || 0)));
    const moved = Math.min(want, room);
    if (moved <= 0) return 0;
    this.take(id, moved);
    this.storage[id] = this.stored(id) + moved;
    return moved;
  }

  /** 창고 → 가방. 가방이 가득 차면 남은 수량이 그대로 창고에 남는다. @returns {number} 옮긴 수량 */
  fromStorage(id, amount = 'all') {
    const have = this.stored(id);
    if (!have) return 0;
    const want = amount === 'all' ? have : Math.min(have, Math.max(0, Math.floor(Number(amount) || 0)));
    if (want <= 0) return 0;
    const leftover = this.add(id, want);
    const moved = want - leftover;
    if (moved > 0) {
      const next = this.stored(id) - moved;
      if (next > 0) this.storage[id] = next;
      else delete this.storage[id];
    }
    return moved;
  }

  /* ── 저장 ─────────────────────────────────────────────── */

  toJSON() {
    return {
      capacity: this.capacity,
      bag: this.bag.map((s) => (s && s.n > 0 ? { id: s.id, n: Math.min(BAG.stack, Math.floor(s.n)) } : null)),
      storage: { ...this.storage },
    };
  }

  /** 구버전/깨진 세이브도 조용히 받아들인다 */
  load(json, slots = this.capacity) {
    this.capacity = clampCapacity(slots);
    this.bag = new Array(this.capacity).fill(null);
    this.storage = {};
    if (!json || typeof json !== 'object') return this;

    const bag = Array.isArray(json.bag) ? json.bag : [];
    bag.slice(0, this.capacity).forEach((entry, i) => {
      if (!entry || typeof entry !== 'object') return;
      if (!validId(entry.id)) return;
      const n = Math.floor(Number(entry.n));
      if (!Number.isFinite(n) || n <= 0) return;
      this.bag[i] = { id: entry.id, n: Math.min(BAG.stack, n) };
    });

    if (json.storage && typeof json.storage === 'object') {
      for (const [id, raw] of Object.entries(json.storage)) {
        if (!validId(id)) continue;
        const n = Math.floor(Number(raw));
        if (!Number.isFinite(n) || n <= 0) continue;
        this.storage[id] = Math.min(STORAGE_CAP, n);
      }
    }
    return this;
  }
}

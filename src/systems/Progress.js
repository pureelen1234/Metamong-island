/**
 * Progress.js — 1·2단계 생활 상태 묶음 (기력·가방·창고·복구·우체통 + 낚시·요리·상점·랭크·고양이)
 *
 * Game 은 이 객체 하나만 저장하고 불러온다. 구버전 세이브(1단계 이전/1단계)에는
 * 2단계 필드가 아예 없으므로, load() 가 모든 필드를 하나씩 검사해 기본값을 병합한다
 * — 어떤 모양이 들어와도 throw 하지 않는다.
 */
import { Inventory } from './Inventory.js';
import { Skills } from './Skills.js';
import { CATS, LANDMARKS } from '../config.js';
import { ITEMS, STAMINA } from './items.js';
import {
  CAT_LEVELS,
  COOK,
  FISH,
  FISH_ORDER,
  GOLDEN_BUFF,
  QUESTS,
  SHOP_ORDER,
  TOOLS,
  TOOL_ORDER,
  rollDailyQuests,
} from './lifeData.js';

const clamp = (v, lo, hi, fallback) => {
  const n = Number(v);
  if (!Number.isFinite(n)) return fallback;
  return Math.max(lo, Math.min(hi, n));
};

const int = (v, lo, hi, fallback = 0) => {
  const n = Math.floor(Number(v));
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

    // ── 2단계 생활 콘텐츠
    /** 섬 코인 */
    this.coins = 0;
    /** 4대 생활 스킬 */
    this.skills = new Skills();
    /** 낚시 바구니 — 물고기는 가방 칸을 차지하지 않는다 */
    this.fish = {};
    /** 자판기에서 산 물건 개수 */
    this.supplies = {};
    for (const id of SHOP_ORDER) this.supplies[id] = 0;
    /** 도구 레벨 (도끼·곡괭이 1~3) */
    this.tools = {};
    for (const id of TOOL_ORDER) this.tools[id] = 1;
    /** 고양이 호감도 */
    this.cats = {};
    for (const c of CATS) this.cats[c.id] = { aff: 0, gifts: [], follow: false };
    /** 요리 횟수(도감) */
    this.cooked = {};
    /** 오늘의 의뢰 */
    this.quests = { day: 0, list: [] };
    /** 일시 버프 — { kind:'golden', left: 초 } */
    this.buff = { kind: '', left: 0 };
    /** 낚시 통계 */
    this.fishing = { casts: 0, catches: 0, misses: 0, best: 0 };
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

  /* ── 코인 ─────────────────────────────────────────────── */

  addCoins(n) {
    const add = Math.max(0, Math.floor(Number(n) || 0));
    this.coins = Math.min(999999, this.coins + add);
    return this.coins;
  }

  spendCoins(n) {
    const cost = Math.max(0, Math.floor(Number(n) || 0));
    if (this.coins < cost) return false;
    this.coins -= cost;
    return true;
  }

  /* ── 스킬 ─────────────────────────────────────────────── */

  /** 경험치 획득 — Skills.add 결과를 그대로 돌려준다 */
  gainExp(id, amount) {
    return this.skills.add(id, amount);
  }

  /* ── 낚시 바구니 ──────────────────────────────────────── */

  fishCount(id) {
    return Math.max(0, Math.floor(Number(this.fish[id]) || 0));
  }

  addFish(id, n = 1) {
    if (!FISH[id]) return 0;
    const add = Math.max(0, Math.floor(Number(n) || 0));
    this.fish[id] = Math.min(999, this.fishCount(id) + add);
    return this.fish[id];
  }

  takeFish(id, n = 1) {
    const want = Math.max(0, Math.floor(Number(n) || 0));
    const have = this.fishCount(id);
    const take = Math.min(have, want);
    if (take <= 0) return 0;
    const next = have - take;
    if (next > 0) this.fish[id] = next;
    else delete this.fish[id];
    return take;
  }

  /** 바구니에 담긴 물고기 종류 수(도감용) */
  fishKinds() {
    return FISH_ORDER.filter((id) => this.fishCount(id) > 0).length;
  }

  /* ── 상점 물건 ────────────────────────────────────────── */

  supply(id) {
    return Math.max(0, Math.floor(Number(this.supplies[id]) || 0));
  }

  addSupply(id, n = 1) {
    if (!SHOP_ORDER.includes(id)) return 0;
    this.supplies[id] = Math.min(99, this.supply(id) + Math.max(0, Math.floor(Number(n) || 0)));
    return this.supplies[id];
  }

  takeSupply(id, n = 1) {
    const take = Math.min(this.supply(id), Math.max(0, Math.floor(Number(n) || 0)));
    if (take <= 0) return 0;
    this.supplies[id] = this.supply(id) - take;
    return take;
  }

  /* ── 도구 ─────────────────────────────────────────────── */

  toolLevel(id) {
    const def = TOOLS[id];
    if (!def) return 1;
    return Math.max(1, Math.min(def.max, int(this.tools[id], 1, def.max, 1)));
  }

  toolInfo(id) {
    const def = TOOLS[id];
    const lv = this.toolLevel(id);
    return {
      id,
      def,
      level: lv,
      max: def.max,
      cost: def.cost[lv] || {},
      staminaMul: def.stamina[lv - 1] ?? 1,
      hitsBonus: def.hits[lv - 1] ?? 0,
      maxed: lv >= def.max,
    };
  }

  /** 채집 종류(tree/rock)에 맞는 도구의 기력 배율 */
  staminaMultiplier(kind) {
    let mul = 1;
    for (const id of TOOL_ORDER) {
      const def = TOOLS[id];
      if (def.kind !== kind) continue;
      mul *= def.stamina[this.toolLevel(id) - 1] ?? 1;
    }
    // 황금 버프
    if (this.buff.kind === 'golden' && this.buff.left > 0) mul *= GOLDEN_BUFF.stamina;
    return mul;
  }

  /** 채집 종류별 추가 타격 */
  hitsBonus(kind) {
    let bonus = 0;
    for (const id of TOOL_ORDER) {
      const def = TOOLS[id];
      if (def.kind !== kind) continue;
      bonus += def.hits[this.toolLevel(id) - 1] || 0;
    }
    return bonus;
  }

  /** 도구 강화에 필요한 재료·코인이 지금 있는가 */
  canUpgrade(id) {
    const info = this.toolInfo(id);
    if (info.maxed) return { ok: false, reason: 'max', info };
    const lack = [];
    for (const [item, need] of Object.entries(info.cost)) {
      const have = item === 'coin' ? this.coins : this.inventory.count(item);
      if (have < need) lack.push({ item, need, have });
    }
    return { ok: lack.length === 0, reason: lack.length ? 'lack' : '', lack, info };
  }

  upgradeTool(id) {
    const check = this.canUpgrade(id);
    if (!check.ok) return check;
    const info = check.info;
    for (const [item, need] of Object.entries(info.cost)) {
      if (item === 'coin') this.spendCoins(need);
      else this.inventory.take(item, need);
    }
    this.tools[id] = info.level + 1;
    return { ok: true, info: this.toolInfo(id) };
  }

  /* ── 고양이 호감도 ────────────────────────────────────── */

  cat(id) {
    if (!this.cats[id]) this.cats[id] = { aff: 0, gifts: [], follow: false };
    return this.cats[id];
  }

  catLevel(aff) {
    const a = Math.max(0, Number(aff) || 0);
    let lv = 1;
    for (let i = 0; i < CAT_LEVELS.length; i++) if (a >= CAT_LEVELS[i]) lv = i + 1;
    return lv;
  }

  catRow(id) {
    const st = this.cat(id);
    const level = this.catLevel(st.aff);
    const nextAt = CAT_LEVELS[level] ?? null;
    const prevAt = CAT_LEVELS[level - 1] ?? 0;
    return {
      id,
      aff: Math.round(st.aff),
      level,
      follow: !!st.follow,
      gifts: [...st.gifts],
      nextAt,
      pct: nextAt ? Math.min(100, Math.round(((st.aff - prevAt) / Math.max(1, nextAt - prevAt)) * 100)) : 100,
      toNext: nextAt ? Math.max(0, nextAt - Math.round(st.aff)) : 0,
      canFollow: level >= 3,
    };
  }

  /** 호감도 더하기 — 레벨이 오르면 보답 선물 목록을 알려 준다 */
  addAffection(id, amount) {
    const st = this.cat(id);
    const before = this.catLevel(st.aff);
    st.aff = Math.max(0, Math.min(999, st.aff + Math.max(0, Number(amount) || 0)));
    const after = this.catLevel(st.aff);
    return { before, after, levelUp: after > before, row: this.catRow(id) };
  }

  /* ── 요리 기록 ────────────────────────────────────────── */

  cookedCount(id) {
    return Math.max(0, Math.floor(Number(this.cooked[id]) || 0));
  }

  markCooked(id) {
    this.cooked[id] = Math.min(999, this.cookedCount(id) + 1);
  }

  /** 레시피 재료가 모두 있는가 (가방 + 물고기 바구니) */
  canCook(id) {
    const recipe = COOK[id];
    if (!recipe) return { ok: false, reason: 'recipe' };
    const lack = [];
    for (const [item, need] of Object.entries(recipe.need)) {
      const have = this.inventory.count(item);
      if (have < need) lack.push({ item, need, have });
    }
    for (const [fish, need] of Object.entries(recipe.fish)) {
      const have = this.fishCount(fish);
      if (have < need) lack.push({ item: fish, need, have });
    }
    const full = this.stamina >= STAMINA.max - 0.5;
    return { ok: lack.length === 0 && !full, reason: lack.length ? 'lack' : full ? 'full' : '', lack };
  }

  /* ── 버프 ─────────────────────────────────────────────── */

  setBuff(kind, seconds) {
    this.buff = { kind: kind || '', left: Math.max(0, Number(seconds) || 0) };
  }

  tickBuff(dt) {
    if (this.buff.left <= 0) return false;
    this.buff.left = Math.max(0, this.buff.left - Math.max(0, dt || 0));
    if (this.buff.left <= 0) {
      this.buff = { kind: '', left: 0 };
      return true;
    }
    return false;
  }

  get buffActive() {
    return this.buff.left > 0 && !!this.buff.kind;
  }

  /* ── 일일 의뢰 ────────────────────────────────────────── */

  /** Day 가 바뀌었으면 오늘의 의뢰를 새로 만든다. @returns {boolean} 새로 만들었는지 */
  rollQuests(day) {
    const d = Math.max(1, Math.floor(Number(day) || 1));
    if (this.quests.day === d && this.quests.list.length) return false;
    this.quests = { day: d, list: rollDailyQuests(d) };
    return true;
  }

  questRows() {
    return this.quests.list.map((q) => {
      const def = QUESTS[q.kind] || { icon: '📋' };
      const progress = Math.min(q.need, Math.max(0, q.progress));
      return {
        ...q,
        icon: q.icon || def.icon,
        progress,
        pct: Math.min(100, Math.round((progress / Math.max(1, q.need)) * 100)),
        done: progress >= q.need,
      };
    });
  }

  get claimableQuests() {
    return this.questRows().filter((q) => q.done && !q.claimed).length;
  }

  /** 생활 이벤트를 오늘의 의뢰에 반영 @returns {object[]} 방금 목표를 채운 의뢰들 */
  questEvent(event, amount = 1) {
    const n = Math.max(0, Number(amount) || 0);
    if (!event || n <= 0) return [];
    const completed = [];
    for (const q of this.quests.list) {
      if (q.claimed) continue;
      if (q.event !== event) continue;
      if (q.progress >= q.need) continue;
      q.progress = Math.min(q.need, q.progress + n);
      if (q.progress >= q.need) completed.push(q);
    }
    return completed;
  }

  claimQuest(id) {
    const q = this.quests.list.find((x) => x.id === id);
    if (!q) return { ok: false, reason: 'missing' };
    if (q.claimed) return { ok: false, reason: 'claimed' };
    if (q.progress < q.need) return { ok: false, reason: 'unfinished' };
    q.claimed = true;
    this.addCoins(q.reward.coin);
    return { ok: true, quest: q };
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
      // ── 2단계
      coins: Math.round(this.coins),
      skills: this.skills.toJSON(),
      fish: { ...this.fish },
      supplies: { ...this.supplies },
      tools: { ...this.tools },
      cats: JSON.parse(JSON.stringify(this.cats)),
      cooked: { ...this.cooked },
      quests: JSON.parse(JSON.stringify(this.quests)),
      buff: { ...this.buff },
      fishing: { ...this.fishing },
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

    /* ── 2단계 (없는 세이브는 기본값 그대로) ─────────────── */
    this.coins = int(json.coins, 0, 999999, 0);
    this.skills.load(json.skills);

    this.fish = {};
    if (json.fish && typeof json.fish === 'object') {
      for (const [id, raw] of Object.entries(json.fish)) {
        if (!FISH[id]) continue;
        const n = Math.floor(Number(raw));
        if (Number.isFinite(n) && n > 0) this.fish[id] = Math.min(999, n);
      }
    }

    for (const id of SHOP_ORDER) this.supplies[id] = 0;
    if (json.supplies && typeof json.supplies === 'object') {
      for (const id of SHOP_ORDER) this.supplies[id] = int(json.supplies[id], 0, 99, 0);
    }

    for (const id of TOOL_ORDER) this.tools[id] = 1;
    if (json.tools && typeof json.tools === 'object') {
      for (const id of TOOL_ORDER) this.tools[id] = int(json.tools[id], 1, TOOLS[id].max, 1);
    }

    for (const c of CATS) this.cats[c.id] = { aff: 0, gifts: [], follow: false };
    if (json.cats && typeof json.cats === 'object') {
      for (const c of CATS) {
        const src = json.cats[c.id];
        if (!src || typeof src !== 'object') continue;
        const gifts = Array.isArray(src.gifts)
          ? src.gifts.map((n) => Math.floor(Number(n))).filter((n) => Number.isFinite(n) && n >= 2 && n <= 5)
          : [];
        this.cats[c.id] = { aff: Math.round(clamp(src.aff, 0, 999, 0)), gifts: [...new Set(gifts)], follow: !!src.follow };
      }
    }

    this.cooked = {};
    if (json.cooked && typeof json.cooked === 'object') {
      for (const [id, raw] of Object.entries(json.cooked)) {
        if (!COOK[id]) continue;
        const n = Math.floor(Number(raw));
        if (Number.isFinite(n) && n > 0) this.cooked[id] = Math.min(999, n);
      }
    }

    this.quests = { day: 0, list: [] };
    if (json.quests && typeof json.quests === 'object' && Array.isArray(json.quests.list)) {
      const day = int(json.quests.day, 0, 3650, 0);
      const list = [];
      for (const q of json.quests.list) {
        if (!q || typeof q !== 'object') continue;
        if (!QUESTS[q.kind]) continue;
        const need = int(q.need, 1, 99, 1);
        list.push({
          id: typeof q.id === 'string' ? q.id : `${day}-${list.length}-${q.kind}`,
          kind: q.kind,
          event: QUESTS[q.kind].event,
          icon: typeof q.icon === 'string' ? q.icon : QUESTS[q.kind].icon,
          label: typeof q.label === 'string' ? q.label : QUESTS[q.kind].label(need),
          need,
          progress: int(q.progress, 0, need, 0),
          claimed: !!q.claimed,
          reward: {
            coin: int(q.reward && q.reward.coin, 0, 9999, QUESTS[q.kind].coin[0]),
            star: int(q.reward && q.reward.star, 0, 9, QUESTS[q.kind].star),
          },
        });
      }
      if (list.length) this.quests = { day, list };
    }

    const buff = json.buff && typeof json.buff === 'object' ? json.buff : {};
    this.buff = {
      kind: typeof buff.kind === 'string' && buff.kind ? buff.kind : '',
      left: clamp(buff.left, 0, 600, 0),
    };

    const fs = json.fishing && typeof json.fishing === 'object' ? json.fishing : {};
    this.fishing = {
      casts: int(fs.casts, 0, 99999, 0),
      catches: int(fs.catches, 0, 99999, 0),
      misses: int(fs.misses, 0, 99999, 0),
      best: int(fs.best, 0, 999, 0),
    };

    return this;
  }
}

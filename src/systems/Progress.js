/**
 * Progress.js — 1·2단계 생활 상태 묶음 (기력·가방·창고·복구·우체통 + 낚시·요리·상점·랭크·고양이)
 *
 * Game 은 이 객체 하나만 저장하고 불러온다. 구버전 세이브(1단계 이전/1단계)에는
 * 2단계 필드가 아예 없으므로, load() 가 모든 필드를 하나씩 검사해 기본값을 병합한다
 * — 어떤 모양이 들어와도 throw 하지 않는다.
 */
import { Inventory } from './Inventory.js';
import { Skills } from './Skills.js';
import { CATS, DEFENSE, FARM, LANDMARKS, PADDY } from '../config.js';
import { BAG, CART, FORAGE, HARVEST, ITEMS, STAMINA, isForageItem } from './items.js';
import { ALL_CROP_ORDER, CROPS, FARMING, NEW_CROP_ORDER, remainForNextStage, stageOfRemain } from './farmData.js';
import { STRUCTURES, STRUCTURE_ORDER } from './defenseData.js';
import { ACHIEVEMENTS, achById } from './achievementsData.js';
import { FURNITURE, ROOM } from './homeData.js';
import { isExpeditionResource } from './expeditionData.js';
import {
  CAT_CARE,
  CAT_LEVELS,
  COOK,
  EXP_GAIN,
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

    // ── 4단계: 다리 · 리어카 · 논 · 웰컴 미션
    /** 강을 건너는 다리 — { built, invested } */
    this.bridge = { built: false, invested: {} };
    /** 🛒 리어카 레벨 (0 = 없음, 1 = 가방 16칸) */
    this.cartLevel = 0;
    /** 논 4×2 타일 — null(빈 논) 또는 { crop, remain, total, watered, wet, fert } */
    this.paddyPlots = new Array(PADDY.cols * PADDY.rows).fill(null);
    /** 첫 1분 웰컴 3단 미션 진행 단계 (0~3) */
    this.welcome = { step: 0 };

    // ── 5단계: 불청객 방어전
    /** 방어 설비 창고 — 공방에서 만든 것을 슬롯에 세운다 */
    this.defense = {
      // 7단계: 설비가 6종으로 늘어도 STRUCTURE_ORDER 하나만 보면 된다
      stock: Object.fromEntries(STRUCTURE_ORDER.map((kind) => [kind, 0])),
      /** 슬롯 5곳 — null 이거나 { kind, hp } */
      slots: new Array(DEFENSE.slots.length).fill(null),
      /** 전적 */
      wins: 0,
      losses: 0,
      runs: 0,
      lastRunDay: 0,
      defenseRewardDay: 0,
      lastResult: '',
      lastStolen: 0,
      totalDown: 0,
      turretHits: 0,
      perfectEvacs: 0,
      lastWave: null,
    };

    // ── 2단계 생활 콘텐츠
    /** 섬 코인 */
    this.coins = 0;
    /** 5대 생활 스킬 */
    this.skills = new Skills();
    /** 낚시 바구니 — 물고기는 가방 칸을 차지하지 않는다 */
    this.fish = {};
    /** 6단계: 특산 바구니 — 해변·숲·광맥에서 주운 재료(가방 칸을 차지하지 않는다) */
    this.forage = {};
    /** 자판기에서 산 물건 개수 */
    this.supplies = {};
    for (const id of SHOP_ORDER) this.supplies[id] = 0;
    /** 도구 레벨 (도끼·곡괭이·물뿌리개 1~3) */
    this.tools = {};
    for (const id of TOOL_ORDER) this.tools[id] = 1;
    /** 고양이 호감도 */
    this.cats = {};
    for (const c of CATS) this.cats[c.id] = { aff: 0, gifts: [], follow: false };
    /** 고양이 쓰다듬기 일일 기력 회복 횟수 */
    this.petStaminaToday = { day: 0, counts: {} };
    /** 요리 횟수(도감) */
    this.cooked = {};
    /** 오늘의 의뢰 */
    this.quests = { day: 0, list: [] };
    /** 일시 버프 — { kind:'golden', left: 초 } */
    this.buff = { kind: '', left: 0 };
    /** 낚시 통계 */
    this.fishing = { casts: 0, catches: 0, misses: 0, best: 0 };

    // ── 3단계: 텃밭 · 수확물 바구니 · 업적
    /** 수확물 바구니 — 가방 8칸을 차지하지 않는다(낚시 바구니와 같은 방식) */
    this.crops = {};
    /** 4×4 경작지 — null(빈 밭) 또는 { crop, remain, total, watered, wet, fert } */
    this.farmPlots = new Array(FARM.cols * FARM.rows).fill(null);
    /** 영구 도감 발견 기록 (판매해도 도감에서 사라지지 않는다) */
    this.discoveredForage = new Set();
    this.discoveredExpedition = new Set();
    this.discoveredCrops = new Set();
    /** 평생 누적 카운터 — 업적·도감이 같이 읽는다 */
    this.counters = {
      chop: 0,
      tree: 0,
      rock: 0,
      flower: 0,
      mine: 0,
      fish: 0,
      cook: 0,
      sell: 0,
      pet: 0,
      treat: 0,
      petal: 0,
      plant: 0,
      water: 0,
      crop: 0,
      /** 4단계: 럭키 드롭(숨은 섬 코인·황금 열매) 횟수 */
      lucky: 0,
      /** 6단계: 특산 채집(해변·숲·광맥) · 민물 낚시 · 새 작물 수확 */
      beach: 0,
      forest: 0,
      ore: 0,
      riverfish: 0,
      newcrop: 0,
      fertilize: 0,
    };
    /** 업적 — 달성한 id 목록 · 보상을 받은 id 목록 */
    this.achievements = { unlocked: [], claimed: [] };
    /** Game 이 매번 동기화하는 도감 발견 수(메타몽 7마리 업적용) */
    this.discoveredCount = 0;

    // ── 7단계: 하우징 · 원정 · 튜토리얼
    /** 내 집 — 보유 가구(owned)와 방에 놓은 가구(placed). 새 섬은 의자·러그 한 개씩 */
    this.home = { owned: { chair: 1, rug: 1 }, placed: [], visits: 0 };
    /** 원정 — 전용 바구니(가방 칸을 차지하지 않는다) · 마지막 원정 Day · 횟수 */
    this.expedition = { basket: {}, lastDay: 0, runs: 0, totalGathered: 0, lastSite: '', lastTotal: 0 };
    /** 단계별 튜토리얼 진행 — step · 끝냄 · 건너뜀 */
    this.tutorial = { step: 0, done: false, skipped: false };
  }

  /* ── 기력 & 하우징 안락도 ──────────────────────────────── */

  /** 방에 놓인 고유 가구 기준 안락도 합계 */
  homeComfortScore() {
    const placed = this.home && Array.isArray(this.home.placed) ? this.home.placed : [];
    const seen = new Set();
    let score = 0;
    for (const item of placed) {
      if (!item || !item.id || seen.has(item.id)) continue;
      seen.add(item.id);
      const def = FURNITURE[item.id];
      if (!def) continue;
      score += Number(def.effect && def.effect.comfort) || 1;
    }
    return score;
  }

  /** 안락도 기반 최대 기력 보너스 (최대 +20) */
  homeComfortBonus() {
    return Math.min(20, this.homeComfortScore());
  }

  /** 특정 기능 가구(rest/storage 등)가 방에 배치되어 있는가 */
  hasHomeEffect(kind) {
    const placed = this.home && Array.isArray(this.home.placed) ? this.home.placed : [];
    for (const item of placed) {
      const def = item && FURNITURE[item.id];
      if (def && def.effect && def.effect.kind === kind) return true;
    }
    return false;
  }

  /** 현재 최대 기력 (기본 100 + 하우징 안락도 보너스 최대 +20) */
  get maxStamina() {
    return STAMINA.max + this.homeComfortBonus();
  }

  /** 침대에서 쉬기 — 기력을 최대치(안락도 보너스 포함)까지 회복 */
  restAtBed() {
    if (!this.hasHomeEffect('rest')) return { ok: false, reason: 'no-bed' };
    const cap = this.maxStamina;
    this.stamina = cap;
    return { ok: true, stamina: this.stamina, maxStamina: cap, comfortBonus: this.homeComfortBonus() };
  }

  useStamina(cost) {
    const c = Math.max(0, Number(cost) || 0);
    if (this.stamina < c) return false;
    this.stamina = Math.max(0, this.stamina - c);
    return true;
  }

  restStamina(amount) {
    this.stamina = Math.min(this.maxStamina, this.stamina + Math.max(0, Number(amount) || 0));
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

  /* ── 다리 (강 건너 개척권) ────────────────────────────── */

  /** 다리 건축 상태 — 재료 투입량과 완공 여부 */
  bridgeState() {
    if (!this.bridge || typeof this.bridge !== 'object') this.bridge = { built: false, invested: {} };
    if (!this.bridge.invested || typeof this.bridge.invested !== 'object') this.bridge.invested = {};
    return this.bridge;
  }

  get bridgeBuilt() {
    return !!this.bridgeState().built;
  }

  /** 다리에 지금까지 투입한 총량 */
  bridgeInvestedTotal() {
    const inv = this.bridgeState().invested;
    return Object.values(inv).reduce((a, b) => a + (Number(b) || 0), 0);
  }

  /* ── 🛒 리어카 (가방 칸 확장) ────────────────────────── */

  /** 지금 가방 칸 수 — 기본 8 + 리어카 8×레벨 */
  get bagCapacity() {
    const lv = Math.max(0, Math.min(CART.maxLevel, Math.floor(Number(this.cartLevel) || 0)));
    return Math.min(24, BAG.slots + CART.slotsPerLevel * lv);
  }

  /** 리어카 상태를 인벤토리 칸 수에 반영 */
  syncCapacity() {
    const cap = this.bagCapacity;
    if (this.inventory.slots !== cap) this.inventory.setCapacity(cap);
    return cap;
  }

  /** 리어카 제작 가능 여부 (가방 + 창고 통합 재료 판정) */
  canBuildCart() {
    if (this.cartLevel >= CART.maxLevel) return { ok: false, reason: 'max', lack: [] };
    const lack = [];
    for (const [item, need] of Object.entries(CART.cost || {})) {
      const have = item === 'coin' ? this.coins : this.materialCount(item);
      if (have < need) lack.push({ item, need, have });
    }
    return { ok: lack.length === 0, reason: lack.length ? 'lack' : '', lack };
  }

  /** 리어카 제작 실행 (가방 우선 차감 후 창고에서 부족분 차감) */
  buildCart() {
    const check = this.canBuildCart();
    if (!check.ok) return check;
    for (const [item, need] of Object.entries(CART.cost || {})) {
      if (item === 'coin') this.spendCoins(need);
      else this.takeMaterial(item, need);
    }
    this.cartLevel = Math.min(CART.maxLevel, this.cartLevel + 1);
    this.syncCapacity();
    return { ok: true, cartLevel: this.cartLevel, bagCapacity: this.bagCapacity };
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

  /** 스킬 랭크별 게임플레이 보너스 (gather/fish/farm/cook/care/defend) */
  skillBonus(key) {
    return this.skills.bonus(key);
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

  /** 채집 종류(tree/rock/mine …)에 맞는 도구의 기력 배율 */
  staminaMultiplier(kind) {
    let mul = 1;
    const toolKind = (HARVEST[kind] && HARVEST[kind].toolKind) || kind;
    for (const id of TOOL_ORDER) {
      const def = TOOLS[id];
      if (def.kind !== toolKind) continue;
      mul *= def.stamina[this.toolLevel(id) - 1] ?? 1;
    }
    // 황금 버프
    if (this.buff.kind === 'golden' && this.buff.left > 0) mul *= GOLDEN_BUFF.stamina;
    return mul;
  }

  /** 채집 종류별 추가 타격 */
  hitsBonus(kind) {
    let bonus = 0;
    const toolKind = (HARVEST[kind] && HARVEST[kind].toolKind) || kind;
    for (const id of TOOL_ORDER) {
      const def = TOOLS[id];
      if (def.kind !== toolKind) continue;
      bonus += def.hits[this.toolLevel(id) - 1] || 0;
    }
    return bonus;
  }

  /** 도구 강화에 필요한 재료·코인이 지금 있는가 (가방 + 창고 통합 판정) */
  canUpgrade(id) {
    const info = this.toolInfo(id);
    if (info.maxed) return { ok: false, reason: 'max', info };
    const lack = [];
    for (const [item, need] of Object.entries(info.cost)) {
      const have = item === 'coin' ? this.coins : this.materialCount(item);
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
      else this.takeMaterial(item, need);
    }
    this.tools[id] = info.level + 1;
    return { ok: true, info: this.toolInfo(id) };
  }

  /* ── 수확물 바구니 ──────────────────────────────────────── */

  cropCount(id) {
    return Math.max(0, Math.floor(Number(this.crops[id]) || 0));
  }

  addCrop(id, n = 1) {
    if (!CROPS[id]) return 0;
    const add = Math.max(0, Math.floor(Number(n) || 0));
    if (add > 0) this.discoveredCrops.add(id);
    this.crops[id] = Math.min(999, this.cropCount(id) + add);
    return this.crops[id];
  }

  takeCrop(id, n = 1) {
    const want = Math.max(0, Math.floor(Number(n) || 0));
    const have = this.cropCount(id);
    const take = Math.min(have, want);
    if (take <= 0) return 0;
    const next = have - take;
    if (next > 0) this.crops[id] = next;
    else delete this.crops[id];
    return take;
  }

  hasDiscoveredCrop(id) {
    return this.discoveredCrops.has(id) || this.cropCount(id) > 0;
  }

  /** 도감 등록된 작물 종류 수 (판매 후에도 유지) */
  cropKinds() {
    return ALL_CROP_ORDER.filter((id) => this.hasDiscoveredCrop(id)).length;
  }

  /* ── 6단계: 특산 바구니 (해변·숲·광맥) ──────────────────── */

  forageCount(id) {
    return Math.max(0, Math.floor(Number(this.forage[id]) || 0));
  }

  addForage(id, n = 1) {
    if (!isForageItem(id)) return 0;
    const add = Math.max(0, Math.floor(Number(n) || 0));
    if (add > 0) this.discoveredForage.add(id);
    this.forage[id] = Math.min(FORAGE.cap, this.forageCount(id) + add);
    return this.forage[id];
  }

  takeForage(id, n = 1) {
    const want = Math.max(0, Math.floor(Number(n) || 0));
    const have = this.forageCount(id);
    const take = Math.min(have, want);
    if (take <= 0) return 0;
    const next = have - take;
    if (next > 0) this.forage[id] = next;
    else delete this.forage[id];
    return take;
  }

  hasDiscoveredForage(id) {
    return this.discoveredForage.has(id) || this.forageCount(id) > 0;
  }

  /** 특산물 종류 수(도감용, 판매 후에도 유지) */
  forageKinds() {
    const ids = new Set([...this.discoveredForage, ...Object.keys(this.forage).filter((id) => this.forageCount(id) > 0)]);
    return [...ids].filter((id) => isForageItem(id)).length;
  }

  get forageTotal() {
    return Object.keys(this.forage).reduce((a, id) => a + (isForageItem(id) ? this.forageCount(id) : 0), 0);
  }

  /* ── 씨앗 ──────────────────────────────────────────────── */

  seedCount(cropId) {
    const crop = CROPS[cropId];
    return crop ? this.supply(crop.seedId) : 0;
  }

  /* ── 평생 카운터 ──────────────────────────────────────── */

  count(name) {
    return Math.max(0, Math.floor(Number(this.counters[name]) || 0));
  }

  bump(name, n = 1) {
    if (!(name in this.counters)) return 0;
    const add = Math.max(0, Math.floor(Number(n) || 0));
    if (add <= 0) return this.counters[name];
    this.counters[name] = Math.min(999999, this.count(name) + add);
    return this.counters[name];
  }

  /* ── 업적 ──────────────────────────────────────────────── */

  /** 업적 한 줄 — 지금 값 / 목표 / 달성 / 보상 수령 */
  achRow(id) {
    const def = achById(id);
    if (!def) return null;
    const value = def.event
      ? this.count(def.event)
      : Math.max(0, Math.floor(Number(def.value ? def.value(this) : 0) || 0));
    const unlocked = this.achievements.unlocked.includes(id);
    const claimed = this.achievements.claimed.includes(id);
    return {
      ...def,
      value: Math.min(def.need, value),
      raw: value,
      unlocked,
      claimed,
      done: value >= def.need,
      pct: Math.min(100, Math.round((value / Math.max(1, def.need)) * 100)),
    };
  }

  achRows() {
    return ACHIEVEMENTS.map((a) => this.achRow(a.id));
  }

  get claimableAchievements() {
    return this.achRows().filter((r) => r.done && !r.claimed).length;
  }

  /** 조건을 새로 넘긴 업적을 잠금 해제하고 그 정의들을 돌려준다 */
  checkAchievements() {
    const fresh = [];
    for (const def of ACHIEVEMENTS) {
      if (this.achievements.unlocked.includes(def.id)) continue;
      const row = this.achRow(def.id);
      if (!row.done) continue;
      this.achievements.unlocked.push(def.id);
      fresh.push(row);
    }
    return fresh;
  }

  /** 보상 수령 — 코인과 별조각(가방이 차면 창고로) */
  claimAchievement(id) {
    const row = this.achRow(id);
    if (!row) return { ok: false, reason: 'missing' };
    if (!row.done) return { ok: false, reason: 'unfinished' };
    if (row.claimed) return { ok: false, reason: 'claimed' };
    this.achievements.claimed.push(id);
    this.addCoins(row.reward.coin);
    let stored = 0;
    if (row.reward.star > 0) {
      const leftover = this.inventory.add('star', row.reward.star);
      if (leftover > 0) {
        this.inventory.storage.star = this.inventory.stored('star') + leftover;
        stored = leftover;
      }
    }
    return { ok: true, row, stored };
  }

  /* ── 텃밭(남쪽 4×4) · 논(북쪽 4×2) 공통 타일 규칙 ──────── */

  /** 타일 하나의 상태 (빈 타일이면 null) */
  tileAt(list, index) {
    const p = list[index];
    return p && p.crop ? p : null;
  }

  /** 씨앗 심기 — paddy=true 면 논(볍씨 전용) 규칙 */
  plantIn(list, index, cropId, paddy = false) {
    const crop = CROPS[cropId];
    if (!crop) return { ok: false, reason: 'crop' };
    if (paddy && !crop.paddyOnly) return { ok: false, reason: 'paddy' };
    if (!paddy && crop.paddyOnly) return { ok: false, reason: 'farm' };
    if (index < 0 || index >= list.length) return { ok: false, reason: 'index' };
    if (this.tileAt(list, index)) return { ok: false, reason: 'occupied' };
    if (this.supply(crop.seedId) <= 0) return { ok: false, reason: 'seed' };
    this.takeSupply(crop.seedId, 1);
    list[index] = { crop: cropId, remain: crop.grow, total: crop.grow, watered: 0, wet: 0, fert: 0 };
    this.bump('plant', 1);
    return { ok: true, crop };
  }

  /** 물주기 — 이미 촉촉한 칸(wet > 0)은 중복 불가, 남은 시간 30% 단축 */
  waterIn(list, index) {
    const plot = this.tileAt(list, index);
    if (!plot) return { ok: false, reason: 'empty' };
    if (plot.remain <= 0) return { ok: false, reason: 'ripe' };
    if (plot.wet > 0) return { ok: false, reason: 'wet' };
    if (plot.watered >= FARMING.maxWater) return { ok: false, reason: 'max' };
    plot.remain = Math.max(0, plot.remain * FARMING.waterHalve);
    plot.watered += 1;
    plot.wet = FARMING.wetSeconds;
    this.bump('water', 1);
    return { ok: true, remain: plot.remain, watered: plot.watered };
  }

  /** 성장 틱 — 다 자란 타일 인덱스 목록 */
  tickIn(list, dt) {
    const ripe = [];
    const step = Math.max(0, Number(dt) || 0);
    for (let i = 0; i < list.length; i++) {
      const plot = list[i];
      if (!plot || !plot.crop) continue;
      if (plot.wet > 0) plot.wet = Math.max(0, plot.wet - step);
      if (plot.remain <= 0) continue;
      plot.remain = Math.max(0, plot.remain - step);
      if (plot.remain <= 0) ripe.push(i);
    }
    return ripe;
  }

  /** 수확 — 비료 보너스(+1) 및 농사 스킬 추가 수확 확률 반영 */
  harvestIn(list, index) {
    const plot = this.tileAt(list, index);
    if (!plot) return { ok: false, reason: 'empty' };
    if (plot.remain > 0) return { ok: false, reason: 'growing' };
    const crop = CROPS[plot.crop];
    const [lo, hi] = crop.yield;
    let n = lo + Math.floor(Math.random() * (hi - lo + 1));
    const fertBonus = (Number(plot.fert) || 0) > 0 ? FARMING.fertilizerBonus || 1 : 0;
    n += fertBonus;
    const farmBonus = this.skillBonus('farm');
    const skillExtra = farmBonus > 0 && Math.random() < farmBonus ? 1 : 0;
    n += skillExtra;
    this.addCrop(crop.id, n);
    list[index] = null;
    this.bump('crop', 1);
    if (NEW_CROP_ORDER.includes(crop.id)) this.bump('newcrop', 1);
    return { ok: true, crop, n, fertBonus, skillExtra, total: this.cropCount(crop.id) };
  }

  /**
   * 6단계: 성장 비료 — 한 번에 성장 단계 하나를 건너뛰고 수확 시 +1 보너스를 남긴다.
   * 씨앗(0) → 새싹(1) → 자라는 중(2) → 수확 가능(3), 한 칸에 최대 FARMING.fertilizer.maxPerPlot 번.
   */
  fertilizeIn(list, index) {
    const plot = this.tileAt(list, index);
    if (!plot) return { ok: false, reason: 'empty' };
    if (plot.remain <= 0) return { ok: false, reason: 'ripe' };
    if (this.supply('fertilizer') <= 0) return { ok: false, reason: 'no-fertilizer' };
    const used = Math.max(0, Math.floor(Number(plot.fert) || 0));
    if (used >= FARMING.fertilizer.maxPerPlot) return { ok: false, reason: 'max' };
    const next = remainForNextStage(plot.remain, plot.total);
    plot.remain = Math.max(0, next);
    plot.fert = used + 1;
    this.takeSupply('fertilizer', 1);
    this.bump('fertilize', 1);
    return { ok: true, remain: plot.remain, stage: stageOfRemain(plot.remain, plot.total), used: plot.fert };
  }

  /* ── 7단계: 원정 전용 바구니 ──────────────────────── */

  /** 원정 바구니 상태를 보장한다 */
  #expeditionState() {
    if (!this.expedition || typeof this.expedition !== 'object') {
      this.expedition = { basket: {}, lastDay: 0, runs: 0, totalGathered: 0, lastSite: '', lastTotal: 0 };
    }
    if (!this.expedition.basket || typeof this.expedition.basket !== 'object') this.expedition.basket = {};
    return this.expedition;
  }

  expeditionCount(id) {
    const e = this.#expeditionState();
    return Math.max(0, Math.floor(Number(e.basket[id]) || 0));
  }

  addExpedition(id, n = 1) {
    if (!isExpeditionResource(id)) return 0;
    const e = this.#expeditionState();
    const add = Math.max(0, Math.floor(Number(n) || 0));
    if (add > 0) this.discoveredExpedition.add(id);
    e.basket[id] = Math.min(999, this.expeditionCount(id) + add);
    e.totalGathered = Math.min(999999, (Number(e.totalGathered) || 0) + add);
    return e.basket[id];
  }

  takeExpedition(id, n = 1) {
    const e = this.#expeditionState();
    const have = this.expeditionCount(id);
    const take = Math.min(have, Math.max(0, Math.floor(Number(n) || 0)));
    if (take <= 0) return 0;
    const next = have - take;
    if (next > 0) e.basket[id] = next;
    else delete e.basket[id];
    return take;
  }

  hasDiscoveredExpedition(id) {
    return this.discoveredExpedition.has(id) || this.expeditionCount(id) > 0;
  }

  /** 원정 자원 발견 종류 수(도감용, 판매 후에도 유지) */
  expeditionKinds() {
    const e = this.#expeditionState();
    const ids = new Set([
      ...this.discoveredExpedition,
      ...Object.keys(e.basket).filter((id) => this.expeditionCount(id) > 0),
    ]);
    return [...ids].filter((id) => isExpeditionResource(id)).length;
  }

  get expeditionTotal() {
    const e = this.#expeditionState();
    return Object.keys(e.basket).reduce((a, id) => a + (isExpeditionResource(id) ? this.expeditionCount(id) : 0), 0);
  }

  /* ── 7단계: 어디에 있든 재료 세기 (가방 + 공방 창고 + 특산 + 원정 통합) ── */

  /** 원정 바구니 / 특산 바구니 / 가방+공방 창고 통합 보유량을 센다 */
  materialCount(id) {
    if (!id) return 0;
    if (isExpeditionResource(id)) return this.expeditionCount(id);
    if (isForageItem(id)) return this.forageCount(id);
    return this.inventory.count(id) + this.inventory.stored(id);
  }

  /** 재료를 실제로 덜어 낸다 — 가방에서 먼저 빼고 부족하면 공방 창고에서 차감 */
  takeMaterial(id, n = 1) {
    const want = Math.max(0, Math.floor(Number(n) || 0));
    if (want <= 0) return 0;
    if (isExpeditionResource(id)) return this.takeExpedition(id, want);
    if (isForageItem(id)) return this.takeForage(id, want);
    const fromBag = this.inventory.take(id, want);
    const rem = want - fromBag;
    if (rem <= 0) return fromBag;
    const stored = this.inventory.stored(id);
    const fromStorage = Math.min(stored, rem);
    if (fromStorage > 0) {
      const next = stored - fromStorage;
      if (next > 0) this.inventory.storage[id] = next;
      else delete this.inventory.storage[id];
    }
    return fromBag + fromStorage;
  }

  /* ── 텃밭 (남쪽 4×4) ────────────────────────────────── */

  plot(index) {
    return this.tileAt(this.farmPlots, index);
  }

  /** 씨앗 심기 — @returns {{ok:boolean, reason?:string}} */
  plantSeed(index, cropId) {
    return this.plantIn(this.farmPlots, index, cropId, false);
  }

  /** 물주기 — 남은 시간 30% 단축. @returns {{ok:boolean, remain?:number, reason?:string}} */
  waterPlot(index) {
    return this.waterIn(this.farmPlots, index);
  }

  /** 성장 틱 — @returns {number[]} 이번에 다 자란 칸 인덱스 */
  tickFarm(dt) {
    return this.tickIn(this.farmPlots, dt);
  }

  /** 수확 — 바구니에 담고 밭을 비운다 */
  harvestPlot(index) {
    return this.harvestIn(this.farmPlots, index);
  }

  /* ── 논 (북쪽 4×2 · 볍씨) ───────────────────────────── */

  paddyPlot(index) {
    return this.tileAt(this.paddyPlots, index);
  }

  plantPaddy(index, cropId = 'rice') {
    return this.plantIn(this.paddyPlots, index, cropId, true);
  }

  waterPaddy(index) {
    return this.waterIn(this.paddyPlots, index);
  }

  tickPaddy(dt) {
    return this.tickIn(this.paddyPlots, dt);
  }

  harvestPaddy(index) {
    return this.harvestIn(this.paddyPlots, index);
  }

  /** 6단계: 비료 — 텃밭/논 공통 */
  fertilizePlot(index) {
    return this.fertilizeIn(this.farmPlots, index);
  }

  fertilizePaddy(index) {
    return this.fertilizeIn(this.paddyPlots, index);
  }

  /* ── 고양이 호감도 & 일일 쓰다듬기 기력 상한 ─────────── */

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

  /** 오늘 해당 고양이 쓰다듬기로 기력을 얻은 횟수 (새 날이면 초기화) */
  #syncPetStaminaDay(day) {
    const d = Math.max(0, Math.floor(Number(day) || 0));
    if (!this.petStaminaToday || typeof this.petStaminaToday !== 'object') {
      this.petStaminaToday = { day: d, counts: {} };
    }
    if (!this.petStaminaToday.counts || typeof this.petStaminaToday.counts !== 'object') {
      this.petStaminaToday.counts = {};
    }
    if (d > 0 && this.petStaminaToday.day !== d) {
      this.petStaminaToday = { day: d, counts: {} };
    }
    return this.petStaminaToday;
  }

  petStaminaRemaining(catId, day = 0) {
    const st = this.#syncPetStaminaDay(day);
    const cap = (CAT_CARE.pet && CAT_CARE.pet.dailyStaminaCap) || 3;
    const used = Math.max(0, Math.floor(Number(st.counts[catId]) || 0));
    return Math.max(0, cap - used);
  }

  /**
   * 고양이 쓰다듬기 — 호감도·재미는 언제나 가능하되, 기력 회복은 고양이별 하루 3회 상한
   */
  petCat(catId, day = 0) {
    const st = this.#syncPetStaminaDay(day);
    const cap = (CAT_CARE.pet && CAT_CARE.pet.dailyStaminaCap) || 3;
    const used = Math.max(0, Math.floor(Number(st.counts[catId]) || 0));
    const affBase = (CAT_CARE.pet && CAT_CARE.pet.aff) || 4;
    const affGain = Math.max(1, Math.round(affBase * (1 + this.skillBonus('care'))));
    const affRes = this.addAffection(catId, affGain);
    let staminaGained = 0;
    const staminaCapped = used >= cap;
    if (!staminaCapped) {
      staminaGained = (CAT_CARE.pet && CAT_CARE.pet.stamina) || 3;
      this.restStamina(staminaGained);
      st.counts[catId] = used + 1;
    }
    this.bump('pet', 1);
    const expRes = this.gainExp('care', EXP_GAIN.pet);
    return {
      ok: true,
      catId,
      affGain,
      staminaGained,
      staminaCapped,
      remainingStaminaPets: Math.max(0, cap - (st.counts[catId] || 0)),
      ...affRes,
      expRes,
    };
  }

  /* ── 방어전 일일 보상 상한 ───────────────────────────── */

  /** 오늘 방어전 보상을 받을 수 있는가 (같은 날 추가 수동 실행은 연습전) */
  canClaimDefenseReward(day) {
    const d = Math.max(1, Math.floor(Number(day) || 1));
    const last = Math.max(0, Math.floor(Number(this.defense && this.defense.defenseRewardDay) || 0));
    return d > last;
  }

  /** 오늘 방어전 보상 수령 기록 */
  markDefenseRewardClaimed(day) {
    const d = Math.max(1, Math.floor(Number(day) || 1));
    if (!this.defense) return;
    this.defense.defenseRewardDay = Math.max(Math.floor(Number(this.defense.defenseRewardDay) || 0), d);
  }

  /* ── 요리 기록 ────────────────────────────────────────── */

  cookedCount(id) {
    return Math.max(0, Math.floor(Number(this.cooked[id]) || 0));
  }

  markCooked(id) {
    this.cooked[id] = Math.min(999, this.cookedCount(id) + 1);
  }

  /** 레시피 재료가 모두 있는가 (가방+창고 · 물고기 · 수확물 · 특산 · 원정 바구니, 기력 가득 차도 요리 가능) */
  canCook(id) {
    const recipe = COOK[id];
    if (!recipe) return { ok: false, reason: 'recipe' };
    const lack = [];
    for (const [item, need] of Object.entries(recipe.need || {})) {
      const have = this.materialCount(item);
      if (have < need) lack.push({ item, need, have });
    }
    for (const [fish, need] of Object.entries(recipe.fish || {})) {
      const have = this.fishCount(fish);
      if (have < need) lack.push({ item: fish, need, have });
    }
    for (const [crop, need] of Object.entries(recipe.crop || {})) {
      const have = this.cropCount(crop);
      if (have < need) lack.push({ item: crop, need, have });
    }
    for (const [forage, need] of Object.entries(recipe.forage || {})) {
      const have = this.forageCount(forage);
      if (have < need) lack.push({ item: forage, need, have });
    }
    for (const [exp, need] of Object.entries(recipe.expedition || {})) {
      const have = this.expeditionCount(exp);
      if (have < need) lack.push({ item: exp, need, have });
    }
    return { ok: lack.length === 0, reason: lack.length ? 'lack' : '', lack };
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

  /** Day 가 바뀌었으면 해금된 진행도에 맞춰 오늘의 의뢰를 새로 만든다. @returns {boolean} */
  rollQuests(day) {
    const d = Math.max(1, Math.floor(Number(day) || 1));
    if (this.quests.day === d && this.quests.list.length) return false;
    this.quests = { day: d, list: rollDailyQuests(d, this) };
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
    const skillId = q.skill || (QUESTS[q.kind] && QUESTS[q.kind].skill) || 'gather';
    const expResult = this.gainExp(skillId, EXP_GAIN.quest);
    return { ok: true, quest: q, expResult };
  }

  /* ── 저장 ─────────────────────────────────────────────── */

  /**
   * 경작지 배열(텃밭·논)을 읽는다.
   * v6 이전 세이브의 텃밭은 3×3 · 논은 3×2 였으므로, 행·열을 그대로 새 배치 칸으로
   * 옮긴다. 심어 둔 작물이 다른 칸으로 튀거나 사라지지 않게 하기 위한 v7 마이그레이션이다.
   */
  #loadPlots(saved, cols, rows, oldCols, oldRows, paddyOnly) {
    const out = new Array(cols * rows).fill(null);
    const src = Array.isArray(saved) ? saved : [];
    const legacy = src.length === oldCols * oldRows && (oldCols !== cols || oldRows !== rows);
    for (let i = 0; i < src.length; i++) {
      const raw = src[i];
      if (!raw || typeof raw !== 'object') continue;
      let at = i;
      if (legacy) {
        const r = Math.floor(i / oldCols);
        const c = i % oldCols;
        if (r >= rows || c >= cols) continue;
        at = r * cols + c;
      }
      if (at >= out.length) continue;
      const crop = CROPS[raw.crop];
      if (!crop) continue;
      if (paddyOnly !== !!crop.paddyOnly) continue;
      const total = clamp(raw.total, 1, 600, crop.grow);
      out[at] = {
        crop: crop.id,
        total,
        remain: clamp(raw.remain, 0, total, total),
        watered: int(raw.watered, 0, FARMING.maxWater, 0),
        wet: clamp(raw.wet, 0, FARMING.wetSeconds, 0),
        fert: int(raw.fert, 0, FARMING.fertilizer.maxPerPlot, 0),
      };
    }
    return out;
  }

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
      forage: { ...this.forage },
      supplies: { ...this.supplies },
      tools: { ...this.tools },
      cats: JSON.parse(JSON.stringify(this.cats)),
      petStaminaToday: {
        day: Math.max(0, Math.floor(Number(this.petStaminaToday && this.petStaminaToday.day) || 0)),
        counts: { ...(this.petStaminaToday && this.petStaminaToday.counts ? this.petStaminaToday.counts : {}) },
      },
      cooked: { ...this.cooked },
      quests: JSON.parse(JSON.stringify(this.quests)),
      buff: { ...this.buff },
      fishing: { ...this.fishing },
      // ── 3단계
      crops: { ...this.crops },
      discoveredForage: [...this.discoveredForage],
      discoveredExpedition: [...this.discoveredExpedition],
      discoveredCrops: [...this.discoveredCrops],
      farmPlots: this.farmPlots.map((p) =>
        p && p.crop
          ? {
              crop: p.crop,
              remain: Math.round(Math.max(0, p.remain) * 100) / 100,
              total: Math.round(p.total * 100) / 100,
              watered: Math.max(0, Math.floor(p.watered || 0)),
              wet: Math.round(Math.max(0, p.wet || 0) * 10) / 10,
              fert: Math.max(0, Math.floor(p.fert || 0)),
            }
          : null
      ),
      counters: { ...this.counters },
      achievements: { unlocked: [...this.achievements.unlocked], claimed: [...this.achievements.claimed] },
      // ── 4단계
      bridge: { built: !!this.bridgeState().built, invested: { ...this.bridgeState().invested } },
      bridgeBuilt: !!this.bridgeState().built,
      cartLevel: this.cartLevel,
      bagCapacity: this.bagCapacity,
      paddyPlots: this.paddyPlots.map((p) =>
        p && p.crop
          ? {
              crop: p.crop,
              remain: Math.round(Math.max(0, p.remain) * 100) / 100,
              total: Math.round(p.total * 100) / 100,
              watered: Math.max(0, Math.floor(p.watered || 0)),
              wet: Math.round(Math.max(0, p.wet || 0) * 10) / 10,
              fert: Math.max(0, Math.floor(p.fert || 0)),
            }
          : null
      ),
      welcome: { step: Math.max(0, Math.min(3, Math.floor(Number(this.welcome && this.welcome.step) || 0))) },
      // ── 5단계: 방어전
      defense: this.#defenseJson(),
      // ── 7단계: 하우징 · 원정 · 튜토리얼
      home: this.#homeJson(),
      expedition: this.#expeditionJson(),
      tutorial: {
        step: Math.max(0, Math.min(30, Math.floor(Number(this.tutorial && this.tutorial.step) || 0))),
        done: !!this.tutorial.done,
        skipped: !!this.tutorial.skipped,
      },
    };
  }

  /** 하우징 상태를 저장 모양으로 — 가구 정의에 없는 id 는 버리고, 좌표는 실내 범위로 자른다 */
  #homeJson() {
    const src = this.home && typeof this.home === 'object' ? this.home : {};
    const owned = {};
    const srcOwned = src.owned && typeof src.owned === 'object' ? src.owned : {};
    for (const [id, raw] of Object.entries(srcOwned)) {
      if (!FURNITURE[id]) continue;
      const n = Math.max(0, Math.min(9, Math.floor(Number(raw) || 0)));
      if (n > 0) owned[id] = n;
    }
    const placed = [];
    const srcPlaced = Array.isArray(src.placed) ? src.placed : [];
    for (const d of srcPlaced) {
      if (!d || !FURNITURE[d.id]) continue;
      const def = FURNITURE[d.id];
      const item = { id: d.id };
      if (def.kind === 'wall') {
        item.wall = ['back', 'left', 'right'].includes(d.wall) ? d.wall : 'back';
        item.u = clamp(d.u, 0.06, 0.94, 0.5);
      }
      item.x = clamp(d.x, -ROOM.width / 2, ROOM.width / 2, 0);
      item.z = clamp(d.z, -ROOM.depth / 2, ROOM.depth / 2, 0);
      item.rot = clamp(d.rot, -Math.PI * 2, Math.PI * 2, 0);
      placed.push(item);
      if (placed.length >= ROOM.maxPlaced) break;
    }
    return { owned, placed, visits: Math.max(0, Math.min(9999, Math.floor(Number(src.visits) || 0))) };
  }

  /** 원정 상태를 저장 모양으로 */
  #expeditionJson() {
    const e = this.#expeditionState();
    const basket = {};
    for (const [id, raw] of Object.entries(e.basket)) {
      if (!isExpeditionResource(id)) continue;
      const n = Math.max(0, Math.min(999, Math.floor(Number(raw) || 0)));
      if (n > 0) basket[id] = n;
    }
    return {
      basket,
      lastDay: Math.max(0, Math.min(3650, Math.floor(Number(e.lastDay) || 0))),
      runs: Math.max(0, Math.min(99999, Math.floor(Number(e.runs) || 0))),
      totalGathered: Math.max(0, Math.min(999999, Math.floor(Number(e.totalGathered) || 0))),
      lastSite: typeof e.lastSite === 'string' ? e.lastSite : '',
      lastTotal: Math.max(0, Math.min(9999, Math.floor(Number(e.lastTotal) || 0))),
    };
  }

  /** 방어전 상태를 저장 모양으로 (슬롯은 설치물만 남긴다) */
  #defenseJson() {
    const d = this.defense || {};
    const stock = {};
    for (const kind of STRUCTURE_ORDER) stock[kind] = Math.max(0, Math.floor(Number(d.stock && d.stock[kind]) || 0));
    const slots = new Array(DEFENSE.slots.length).fill(null);
    const src = Array.isArray(d.slots) ? d.slots : [];
    for (let i = 0; i < slots.length; i++) {
      const slot = src[i];
      if (!slot || !STRUCTURES[slot.kind]) continue;
      slots[i] = { kind: slot.kind, hp: Math.max(1, Math.round(Number(slot.hp) || STRUCTURES[slot.kind].hp)) };
    }
    return {
      stock,
      slots,
      wins: Math.max(0, Math.floor(Number(d.wins) || 0)),
      losses: Math.max(0, Math.floor(Number(d.losses) || 0)),
      runs: Math.max(0, Math.floor(Number(d.runs) || 0)),
      lastRunDay: Math.max(0, Math.floor(Number(d.lastRunDay) || 0)),
      defenseRewardDay: Math.max(0, Math.floor(Number(d.defenseRewardDay) || 0)),
      lastResult: typeof d.lastResult === 'string' ? d.lastResult : '',
      lastStolen: Math.max(0, Math.floor(Number(d.lastStolen) || 0)),
      totalDown: Math.max(0, Math.floor(Number(d.totalDown) || 0)),
      turretHits: Math.max(0, Math.floor(Number(d.turretHits) || 0)),
      perfectEvacs: Math.max(0, Math.floor(Number(d.perfectEvacs) || 0)),
      lastWave: d.lastWave && typeof d.lastWave === 'object' ? { ...d.lastWave } : null,
    };
  }

  load(json) {
    this.reset();
    if (!json || typeof json !== 'object') return this;
    // 리어카 레벨을 먼저 읽어야 가방 칸 수가 맞춰진다
    this.cartLevel = int(json.cartLevel, 0, CART.maxLevel, 0);
    this.inventory.load({ bag: json.bag, storage: json.storage }, this.bagCapacity);

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

    // 6단계: 특산 바구니 (v6 이전 세이브에는 없다)
    this.forage = {};
    if (json.forage && typeof json.forage === 'object') {
      for (const [id, raw] of Object.entries(json.forage)) {
        if (!isForageItem(id)) continue;
        const n = Math.floor(Number(raw));
        if (Number.isFinite(n) && n > 0) this.forage[id] = Math.min(FORAGE.cap, n);
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

    const pst = json.petStaminaToday && typeof json.petStaminaToday === 'object' ? json.petStaminaToday : {};
    const pstCounts = {};
    if (pst.counts && typeof pst.counts === 'object') {
      for (const [k, raw] of Object.entries(pst.counts)) {
        if (typeof k !== 'string') continue;
        const n = int(raw, 0, 99, 0);
        if (n > 0) pstCounts[k] = n;
      }
    }
    this.petStaminaToday = { day: int(pst.day, 0, 3650, 0), counts: pstCounts };

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
          skill: typeof q.skill === 'string' ? q.skill : QUESTS[q.kind].skill || 'gather',
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

    /* ── 3단계 (v3 세이브에는 없으므로 기본값 그대로) ─────── */
    this.crops = {};
    if (json.crops && typeof json.crops === 'object') {
      for (const [id, raw] of Object.entries(json.crops)) {
        if (!CROPS[id]) continue;
        const n = Math.floor(Number(raw));
        if (Number.isFinite(n) && n > 0) this.crops[id] = Math.min(999, n);
      }
    }

    this.farmPlots = this.#loadPlots(json.farmPlots, FARM.cols, FARM.rows, 3, 3, false);

    for (const key of Object.keys(this.counters)) this.counters[key] = int(json.counters && json.counters[key], 0, 999999, 0);

    /* ── 4단계 (v4 세이브에는 없으므로 기본값 그대로) ─────── */
    this.bridge = { built: false, invested: {} };
    const br = json.bridge && typeof json.bridge === 'object' ? json.bridge : {};
    this.bridge.built = !!json.bridgeBuilt || !!br.built;
    const brInv = br.invested && typeof br.invested === 'object' ? br.invested : {};
    for (const [id, raw] of Object.entries(brInv)) {
      if (!ITEMS[id]) continue;
      const n = Math.floor(Number(raw));
      if (Number.isFinite(n) && n > 0) this.bridge.invested[id] = n;
    }

    this.paddyPlots = this.#loadPlots(json.paddyPlots, PADDY.cols, PADDY.rows, 3, 2, true);

    const welcome = json.welcome && typeof json.welcome === 'object' ? json.welcome : {};
    this.welcome = { step: int(welcome.step, 0, 3, 0) };

    /* ── 5단계: 방어전 (v5 이전 세이브는 빈 슬롯·0전적으로 시작) ── */
    const dsrc = json.defense && typeof json.defense === 'object' ? json.defense : {};
    const dstock = dsrc.stock && typeof dsrc.stock === 'object' ? dsrc.stock : {};
    this.defense = {
      stock: {},
      slots: new Array(DEFENSE.slots.length).fill(null),
      wins: int(dsrc.wins, 0, 9999, 0),
      losses: int(dsrc.losses, 0, 9999, 0),
      runs: int(dsrc.runs, 0, 9999, 0),
      lastRunDay: int(dsrc.lastRunDay, 0, 3650, 0),
      defenseRewardDay: int(dsrc.defenseRewardDay, 0, 3650, 0),
      lastResult: typeof dsrc.lastResult === 'string' ? dsrc.lastResult : '',
      lastStolen: int(dsrc.lastStolen, 0, 999999, 0),
      totalDown: int(dsrc.totalDown, 0, 99999, 0),
      turretHits: int(dsrc.turretHits, 0, 99999, 0),
      perfectEvacs: int(dsrc.perfectEvacs, 0, 9999, 0),
      lastWave: dsrc.lastWave && typeof dsrc.lastWave === 'object' ? { ...dsrc.lastWave } : null,
    };
    for (const kind of STRUCTURE_ORDER) this.defense.stock[kind] = int(dstock[kind], 0, 9, 0);
    const savedSlots = Array.isArray(dsrc.slots) ? dsrc.slots : [];
    for (let i = 0; i < this.defense.slots.length; i++) {
      const src = savedSlots[i];
      if (!src || typeof src !== 'object' || !STRUCTURES[src.kind]) continue;
      this.defense.slots[i] = {
        kind: src.kind,
        hp: int(src.hp, 1, 9999, STRUCTURES[src.kind].hp),
      };
    }

    /* ── 7단계: 하우징 · 원정 · 튜토리얼 (v7 이전 세이브는 기본값) ── */
    const hsrc = json.home && typeof json.home === 'object' ? json.home : {};
    this.home = { owned: {}, placed: [], visits: int(hsrc.visits, 0, 9999, 0) };
    const howned = hsrc.owned && typeof hsrc.owned === 'object' ? hsrc.owned : {};
    for (const [id, raw] of Object.entries(howned)) {
      if (!FURNITURE[id]) continue;
      const n = int(raw, 0, 9, 0);
      if (n > 0) this.home.owned[id] = n;
    }
    const hplaced = Array.isArray(hsrc.placed) ? hsrc.placed : [];
    for (const d of hplaced) {
      if (!d || typeof d !== 'object' || !FURNITURE[d.id]) continue;
      const def = FURNITURE[d.id];
      const item = { id: d.id };
      if (def.kind === 'wall') {
        item.wall = ['back', 'left', 'right'].includes(d.wall) ? d.wall : 'back';
        item.u = clamp(d.u, 0.06, 0.94, 0.5);
      }
      item.x = clamp(d.x, -ROOM.width / 2, ROOM.width / 2, 0);
      item.z = clamp(d.z, -ROOM.depth / 2, ROOM.depth / 2, 0);
      item.rot = clamp(d.rot, -Math.PI * 2, Math.PI * 2, 0);
      this.home.placed.push(item);
      if (this.home.placed.length >= ROOM.maxPlaced) break;
    }

    // 하우징 안락도 보너스를 반영한 최대 기력으로 stamina 클램프
    this.stamina = clamp(json.stamina, 0, this.maxStamina, STAMINA.max);

    this.expedition = { basket: {}, lastDay: 0, runs: 0, totalGathered: 0, lastSite: '', lastTotal: 0 };
    const esrc = json.expedition && typeof json.expedition === 'object' ? json.expedition : {};
    const ebasket = esrc.basket && typeof esrc.basket === 'object' ? esrc.basket : {};
    for (const [id, raw] of Object.entries(ebasket)) {
      if (!isExpeditionResource(id)) continue;
      const n = int(raw, 0, 999, 0);
      if (n > 0) this.expedition.basket[id] = n;
    }
    this.expedition.lastDay = int(esrc.lastDay, 0, 3650, 0);
    this.expedition.runs = int(esrc.runs, 0, 99999, 0);
    this.expedition.totalGathered = int(esrc.totalGathered, 0, 999999, 0);
    this.expedition.lastSite = typeof esrc.lastSite === 'string' ? esrc.lastSite : '';
    this.expedition.lastTotal = int(esrc.lastTotal, 0, 9999, 0);

    // 영구 도감 발견 기록 로드 + 기존 보유 수량으로 백필
    this.discoveredForage = new Set();
    if (Array.isArray(json.discoveredForage)) {
      for (const id of json.discoveredForage) if (typeof id === 'string' && isForageItem(id)) this.discoveredForage.add(id);
    }
    for (const id of Object.keys(this.forage)) if (this.forageCount(id) > 0) this.discoveredForage.add(id);

    this.discoveredExpedition = new Set();
    if (Array.isArray(json.discoveredExpedition)) {
      for (const id of json.discoveredExpedition) {
        if (typeof id === 'string' && isExpeditionResource(id)) this.discoveredExpedition.add(id);
      }
    }
    for (const id of Object.keys(this.expedition.basket)) {
      if (this.expeditionCount(id) > 0) this.discoveredExpedition.add(id);
    }

    this.discoveredCrops = new Set();
    if (Array.isArray(json.discoveredCrops)) {
      for (const id of json.discoveredCrops) if (typeof id === 'string' && CROPS[id]) this.discoveredCrops.add(id);
    }
    for (const id of Object.keys(this.crops)) if (this.cropCount(id) > 0) this.discoveredCrops.add(id);

    const tsrc = json.tutorial && typeof json.tutorial === 'object' ? json.tutorial : {};
    this.tutorial = {
      step: int(tsrc.step, 0, 30, 0),
      done: !!tsrc.done,
      skipped: !!tsrc.skipped,
    };

    this.achievements = { unlocked: [], claimed: [] };
    const ach = json.achievements && typeof json.achievements === 'object' ? json.achievements : {};
    const known = new Set(ACHIEVEMENTS.map((a) => a.id));
    for (const list of ['unlocked', 'claimed']) {
      const src = Array.isArray(ach[list]) ? ach[list] : [];
      this.achievements[list] = [...new Set(src.filter((id) => typeof id === 'string' && known.has(id)))];
    }

    return this;
  }
}

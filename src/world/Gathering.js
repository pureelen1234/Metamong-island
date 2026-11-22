/**
 * Gathering.js — 채집 규칙(기력·타격·드롭·리젠·열매 스폰)
 *
 * 연출은 Scenery(흔들림·그루터기)와 Fx(파티클·문구), 소리는 AmbientSound,
 * 드롭 오브젝트는 DropField 가 맡는다. 여기는 "무엇이 얼마나 나오고 언제 다시
 * 자라는가"만 계산해 가방(Inventory)에 넣고, 남는 수량은 바닥에 내려놓는다.
 */
import { HARVEST, ITEMS, STAMINA, gainsLabel, rollDrops } from '../systems/items.js';

const HIT_COOLDOWN = 0.12;

/** 두드릴 때마다 바로 손에 들어오는 기본 재료 — 타격감의 핵심 */
const BASE_ITEM = { tree: 'log', rock: 'stone', flower: 'petal' };

/** 확률적 럭키 드롭 — 숨은 섬 코인 +5 또는 황금 열매 */
const LUCKY = { chance: 0.09, coinChance: 0.6, coin: 5 };

/** 새 채집지 종류 → 파티클 색 */
const KIND_TINT = { beach: '#ffe0ea', forest: '#e6c8a0', mine: '#d7d0e4' };

export class Gathering {
  constructor({ scenery, progress, drops, fx, audio }) {
    this.scenery = scenery;
    this.progress = progress;
    this.drops = drops;
    this.fx = fx;
    this.audio = audio;
    this.hooks = {};
    this.cooldown = 0;
    this.fullWarnAt = 0;
    this.time = 0;
  }

  get inventory() {
    return this.progress.inventory;
  }

  /* ── 초기화·저장 ──────────────────────────────────────── */

  reset() {
    for (const node of this.scenery.nodes) {
      this.#restoreNode(node, false);
      if (node.kind === 'tree') node.berryT = 22 + Math.random() * 26;
    }
    if (this.drops) this.drops.clear();
  }

  /** 세이브의 nodes 맵을 그대로 반영 */
  applySaved(map) {
    this.reset();
    if (!map || typeof map !== 'object') return;
    for (const node of this.scenery.nodes) {
      const state = map[node.key];
      if (!state) continue;
      this.scenery.applyNodeState(node, state);
      if (state.left > 0 && !(state.respawn > 0)) node.hitsLeft = Math.min(node.hitsNeeded, state.left);
      node.respawn = Math.max(0, Number(state.respawn) || 0);
      if (state.respawn > 0) {
        node.hitsLeft = node.hitsNeeded;
        node.harvested = true;
      }
    }
  }

  toJSON() {
    const out = {};
    for (const node of this.scenery.nodes) {
      const left = node.harvested ? 0 : node.hitsLeft;
      const respawn = node.harvested ? Math.max(0.1, Math.round(node.respawn * 10) / 10) : 0;
      if (left >= node.hitsNeeded && respawn <= 0) continue; // 온전한 나무는 저장하지 않는다
      out[node.key] = { left, respawn };
    }
    return out;
  }

  /* ── 타격 ─────────────────────────────────────────────── */

  /** 플레이어 근처에서 지금 두드릴 수 있는 노드 */
  nearest(pos, range = 2.5) {
    let best = null;
    let bestDist = range;
    for (const node of this.scenery.nodes) {
      if (node.harvested) continue;
      const d = Math.hypot(node.x - pos.x, node.z - pos.z);
      if (d < bestDist) {
        best = node;
        bestDist = d;
      }
    }
    return best;
  }

  nodeAt(x, z, range = 3.0) {
    let best = null;
    let bestDist = range;
    for (const node of this.scenery.nodes) {
      if (node.harvested) continue;
      const d = Math.hypot(node.x - x, node.z - z);
      if (d < bestDist) {
        best = node;
        bestDist = d;
      }
    }
    return best;
  }

  /**
   * 한 번 두드린다.
   * @returns {{ok:boolean, harvest?:boolean, gains?:object, reason?:string}}
   */
  hit(node) {
    if (!node || node.harvested) return { ok: false, reason: 'gone' };
    if (this.cooldown > 0) return { ok: false, reason: 'cooldown' };
    this.cooldown = HIT_COOLDOWN;

    const def = HARVEST[node.kind];
    if (!def) return { ok: false, reason: 'kind' };

    // 도구 강화·황금 버프로 기력 소모가 줄어든다
    const cost = Math.max(1, Math.round(def.cost * this.progress.staminaMultiplier(node.kind)));
    if (!this.progress.useStamina(cost)) {
      this.audio.sfxDeny();
      this.hooks.toast?.('기운이 부족해요 — 열매를 먹거나 잠깐 쉬어요 🍓', 2000);
      this.fx.float('기운 부족', node.x, node.y + node.height * 0.8, node.z, '#b26a86');
      return { ok: false, reason: 'stamina' };
    }

    // 강화한 도구는 한 번에 두 번 분량을 깎는다
    node.hitsLeft = Math.max(0, node.hitsLeft - 1 - this.progress.hitsBonus(node.kind));
    this.scenery.pop(node);
    this.fx.burst(node.x, node.y + node.height * 0.42, node.z, this.#tint(node), 11, { spread: 1.1, up: 2.0 });
    this.audio.sfxHit(node.kind);
    this.hooks.onHit?.(node.kind, cost);

    // ── 타격 한 번에 기본 재료 1개가 바로 나온다 (`+통나무 1` 둥둥)
    const base = BASE_ITEM[node.kind];
    if (base) this.#grant(base, 1, node, node.y + node.height * 0.95);
    this.#lucky(node);

    if (node.hitsLeft > 0) {
      return { ok: true, harvest: false };
    }

    // ── 채집 완료
    const gains = this.#rollGains(node);
    const got = {};
    const basket = def.basket === 'forage';
    for (const [id, n] of Object.entries(gains)) {
      if (!ITEMS[id]) continue;
      if (basket) {
        // 6단계: 해변·숲·광맥 특산물은 가방이 아니라 특산 바구니로
        const before = this.progress.forageCount(id);
        const after = this.progress.addForage(id, n);
        const add = after - before;
        if (add > 0) got[id] = add;
        if (n - add > 0) {
          const spot = this.#freeSpotNear(node.x, node.z);
          this.drops.spawn(id, n - add, spot.x, spot.z);
          this.hooks.toast?.(`특산 바구니가 가득 — ${ITEMS[id].name} ${n - add}개를 바닥에 내려놓았어요`, 2400);
        }
        continue;
      }
      const leftover = this.inventory.add(id, n);
      const add = n - leftover;
      if (add > 0) got[id] = add;
      if (leftover > 0) {
        const spot = this.#freeSpotNear(node.x, node.z);
        this.drops.spawn(id, leftover, spot.x, spot.z);
        this.hooks.toast?.(`가방이 가득 — ${ITEMS[id].name} ${leftover}개를 바닥에 내려놨어요`, 2400);
      }
    }

    let i = 0;
    for (const [id, n] of Object.entries(got)) {
      this.fx.float(`+${n} ${ITEMS[id].name}`, node.x, node.y + node.height * 0.9 + i * 0.24, node.z, '#5f5470');
      i++;
    }
    if (!Object.keys(got).length && !Object.keys(gains).length) this.fx.float('…', node.x, node.y + 0.9, node.z, '#5f5470');

    this.scenery.setHarvested(node, true);
    const [rMin, rMax] = node.respawnRange || [60, 90];
    node.respawn = rMin + Math.random() * (rMax - rMin);
    node.hitsLeft = node.hitsNeeded;

    if (got.star) {
      this.audio.sfxRare();
      this.hooks.toast?.(`별조각을 얻었어요! ⭐ ${gainsLabel(got)}`, 2600);
    } else {
      this.audio.sfxPickup();
    }
    this.hooks.onHarvest?.(node.kind, got, node);
    this.hooks.save?.();
    return { ok: true, harvest: true, gains: got };
  }

  /**
   * 채집 완료 드롭 — 기존 나무·바위·꽃덤불은 rollDrops, 새 채집지는 node.loot 표를 쓴다.
   * @returns {object} { itemId: 수량 }
   */
  #rollGains(node) {
    const def = HARVEST[node.kind];
    if (!def) return {};
    if (def.frames.length) return rollDrops(node.kind, node.frame);
    const gains = {};
    const loot = node.loot;
    if (loot && ITEMS[loot.item]) {
      const [lo, hi] = Array.isArray(loot.n) ? loot.n : [1, 1];
      gains[loot.item] = lo + Math.floor(Math.random() * (hi - lo + 1));
      const b = loot.bonus;
      if (b && ITEMS[b.item] && Math.random() < (Number(b.chance) || 0)) {
        gains[b.item] = (gains[b.item] || 0) + (b.n || 1);
      }
    }
    return gains;
  }

  #tint(node) {
    if (node.kind === 'tree') return node.frame.startsWith('cherry') ? '#ffc2d8' : '#9ed08a';
    if (node.kind === 'rock') return '#c8c8dc';
    if (node.kind === 'flower') return '#ffb9d5';
    return KIND_TINT[node.kind] || '#ffb9d5';
  }

  /**
   * 가방에 넣고 `+1 통나무` 를 머리 위에 띄운다. 가방이 가득 차면 발밑에 내려놓는다.
   * @returns {number} 실제로 담은 수량
   */
  #grant(itemId, n, node, y) {
    const item = ITEMS[itemId];
    if (!item) return 0;
    const leftover = this.inventory.add(itemId, n);
    const got = n - leftover;
    if (got > 0) this.fx.float(`+${got} ${item.name}`, node.x, y, node.z, '#5f5470');
    if (leftover > 0) {
      const spot = this.#freeSpotNear(node.x, node.z);
      this.drops.spawn(itemId, leftover, spot.x, spot.z);
      if (this.time - this.fullWarnAt > 6) {
        this.fullWarnAt = this.time;
        this.hooks.toast?.(`가방이 가득 — ${item.name} ${leftover}개를 바닥에 내려놨어요`, 2400);
      }
    }
    return got;
  }

  /** 럭키 드롭 — 가끔 숨은 섬 코인(+5)이나 황금 열매가 톡 튀어나온다 */
  #lucky(node) {
    if (Math.random() >= LUCKY.chance) return;
    this.progress.bump('lucky', 1);
    const y = node.y + node.height * 0.75;
    if (Math.random() < LUCKY.coinChance) {
      this.progress.addCoins(LUCKY.coin);
      this.audio.sfxCoin?.();
      this.fx.burst(node.x, y, node.z, '#ffd464', 12, { spread: 1.2, up: 2.2 });
      this.fx.float(`🪙 +${LUCKY.coin} 숨은 동전`, node.x, y + 0.3, node.z, '#b38b3d');
      this.hooks.toast?.('럭키! 나무 밑에서 숨은 섬 코인을 주웠어요 🪙 +5', 2000);
      this.hooks.onPickup?.('coin', LUCKY.coin);
      return;
    }
    this.#grant('berry', 1, node, y + 1.5);
    this.audio.sfxRare?.();
    this.fx.burst(node.x, y, node.z, '#ffe08a', 14, { spread: 1.3, up: 2.4 });
    this.fx.float('🌟 황금 열매', node.x, y + 0.55, node.z, '#b2698f');
    this.hooks.toast?.('럭키! 황금 열매가 톡 떨어졌어요 🌟', 2000);
  }

  #freeSpotNear(x, z) {
    for (let i = 0; i < 8; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 0.55 + Math.random() * 0.5;
      const px = x + Math.cos(a) * r;
      const pz = z + Math.sin(a) * r;
      if (this.scenery.terrain ? this.scenery.terrain.isWalkable(px, pz) : true) return { x: px, z: pz };
    }
    return { x: x + 0.4, z: z + 0.4 };
  }

  /* ── 드롭 줍기 ────────────────────────────────────────── */

  /** @returns {boolean} false 면 바닥에 그대로 둔다(가방·바구니 가득) */
  pickup(drop) {
    const item = ITEMS[drop.itemId];
    if (!item) return true;
    // 특산물은 특산 바구니에, 나머지는 가방에 — 둘 다 넘치면 바닥에 그대로 둔다
    if (item.forage) {
      const before = this.progress.forageCount(drop.itemId);
      const after = this.progress.addForage(drop.itemId, drop.count);
      const got = after - before;
      if (got > 0) {
        this.fx.float(`+${got} ${item.name}`, drop.x, drop.y + 0.85, drop.z, '#5f5470');
        this.audio.sfxPickup();
        this.hooks.onPickup?.(drop.itemId, got);
      }
      return got >= drop.count;
    }
    if (this.inventory.roomFor(drop.itemId) <= 0) {
      if (this.time - this.fullWarnAt > 4) {
        this.fullWarnAt = this.time;
        this.hooks.toast?.('가방이 가득 찼어요 — 공방 창고에 맡겨 주세요 🎒', 2400);
      }
      return false;
    }
    const leftover = this.inventory.add(drop.itemId, drop.count);
    const got = drop.count - leftover;
    if (got > 0) {
      this.fx.float(`+${got} ${item.name}`, drop.x, drop.y + 0.85, drop.z, '#5f5470');
      this.audio.sfxPickup();
      this.hooks.onPickup?.(drop.itemId, got);
    }
    return true;
  }

  /* ── 매 프레임 ────────────────────────────────────────── */

  /**
   * @param {number} dt 실제 프레임 시간 (연출용)
   * @param {number} scaledDt 게임 시간(배속 반영) — 0 이면 시간이 멈춘 상태
   */
  update(dt, scaledDt, playerPos, playing) {
    this.time += dt;
    this.cooldown = Math.max(0, this.cooldown - dt);

    if (scaledDt > 0) {
      this.progress.restStamina(STAMINA.regenPerSecond * scaledDt);
      for (const node of this.scenery.nodes) {
        if (node.harvested) {
          node.respawn -= scaledDt;
          if (node.respawn <= 0) this.#restoreNode(node, true);
          continue;
        }
        // 열매는 나무에서만 떨어진다
        if (node.kind !== 'tree') continue;
        node.berryT -= scaledDt;
        if (node.berryT > 0) continue;
        if (this.drops.hasSource(node.key)) {
          node.berryT = 15 + Math.random() * 10;
          continue;
        }
        const spot = this.#freeSpotNear(node.x, node.z);
        const drop = this.drops.spawn('berry', 1, spot.x, spot.z, node.key);
        if (drop) {
          this.fx.burst(spot.x, drop.y + 0.5, spot.z, '#ffb3c8', 6, { spread: 0.8, up: 1.2 });
          this.fx.float('열매가 톡', node.x, node.y + node.height * 0.9, node.z, '#c25f80');
        }
        node.berryT = 45 + Math.random() * 30;
      }
    }

    this.drops.update(dt, playing ? playerPos : null, (drop) => this.pickup(drop));
  }

  #restoreNode(node, animate) {
    node.harvested = false;
    node.hitsLeft = node.hitsNeeded;
    node.respawn = 0;
    node.scale = 1;
    node.targetScale = 1;
    node.opacity = 1;
    node.targetOpacity = 1;
    node.mesh.scale.setScalar(1);
    node.mesh.material.opacity = 1;
    node.mesh.material.transparent = false;
    node.mesh.material.depthWrite = true;
    node.mesh.rotation.z = 0;
    node.sprout.visible = false;
    node.stubTarget = 0;
    node.stub.material.opacity = 0;
    node.stub.visible = false;
    if (node.collider) node.collider.r = node.baseR;
    if (animate) this.fx.burst(node.x, node.y + node.height * 0.35, node.z, '#cfeeb4', 7, { spread: 0.9, up: 1.4 });
  }
}

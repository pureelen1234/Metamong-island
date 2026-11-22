/**
 * Defense.js — 5단계 불청객(회색 망토 수집단) 방어전
 *
 * 3일마다 밤, 남쪽 부두 앞 바다로 수집단이 상륙한다.
 *   ① 준비 — 공방에서 방어 설비를 만들고 부두~광장 오솔길의 방어 슬롯 5곳에 세운다.
 *   ② 대피 — [메타몽 모으기] 를 누르면 섬 곳곳의 메타몽이 광장 안전 울타리로 달려온다.
 *   ③ 웨이브 — 회색 망토들이 배에서 내려 길을 따라 진격한다. 울타리가 막고, 포탑이 쏘고,
 *      주인공이 새총·물풍선을 쏘고, 솜이·옹이가 옆에서 돕는다.
 *   ④ 결과 — 모두 막으면 승리(코인·별조각·희귀 씨앗). 광장을 뚫려도 건물·작물은 무사하고
 *      코인 일부만 빼앗긴 채 물러간다(순한 맛).
 *
 * 이 파일은 3D 연출과 웨이브 규칙만 갖고, 화면(Phase5Panels)과 재료·수치는 defenseData.js 가 맡는다.
 * 세이브에는 progress.defense(슬롯·창고·전적)만 남는다 — 진행 중인 웨이브는 저장하지 않는다.
 */
import * as THREE from 'three';
import { DEFENSE } from '../config.js';
import {
  CAT_HELP,
  RAIDER_KINDS,
  STRUCTURES,
  WAVE,
  WEAPONS,
  catPower,
  stealAmount,
  supportOf,
  victoryReward,
  wavePlan,
} from '../systems/defenseData.js';
import {
  balloonTexture,
  boatTexture,
  decoyTexture,
  flameTexture,
  frostTexture,
  pelletTexture,
  raiderTexture,
  safeRingTexture,
  slotMarkerTexture,
  structureTexture,
} from '../sprites/defenseArt.js';
import { Billboard } from '../sprites/Billboard.js';

/** 불청객 종류 → public/sprites 의 HD-2D 도트 아틀라스 세트 */
const RAIDER_SET = { grunt: 'raider', runner: 'raider_runner', big: 'raider_big' };

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const dist2 = (ax, az, bx, bz) => Math.hypot(ax - bx, az - bz);

export class Defense {
  /**
   * @param {{scene:THREE.Scene, terrain:object, progress:object, player:object, cats:Array,
   *          dittos:Array, fx:object, spriteMaterials:Array, atlases:Map, camera:object, hooks:object}} opts
   */
  constructor(opts) {
    this.scene = opts.scene;
    this.terrain = opts.terrain;
    this.progress = opts.progress;
    this.player = opts.player;
    this.cats = opts.cats || [];
    this.dittos = opts.dittos || [];
    this.fx = opts.fx;
    this.hooks = opts.hooks || {};
    this.spriteMaterials = opts.spriteMaterials || [];
    /** 도트 아틀라스 — 불청객을 32px 캔버스 대신 HD-2D 캐릭터로 그린다 */
    this.atlases = opts.atlases || null;
    this.camera = opts.camera || null;

    this.root = new THREE.Group();
    this.root.name = 'Defense';
    this.scene.add(this.root);

    /** 슬롯별 설치물 — { kind, hp, hpMax, sprite, shadow, collider, x, z } */
    this.structures = DEFENSE.slots.map(() => null);
    this.slotMarkers = [];
    this.raiders = [];
    this.projectiles = [];
    this.decoys = [];

    /** 진행 중인 웨이브 (없으면 null) */
    this.wave = null;
    /** [메타몽 모으기] 진행 상태 */
    this.evac = { active: false, day: 0, count: 0 };
    /** 주인공 무기 상태 */
    this.ammo = 0;
    this.slingCd = 0;
    this.balloonCd = 0;
    this.helperCd = { somi: 0, ongi: 0 };
    this.speedMultiplier = 1;
    this.support = supportOf([]);
    this.catBefore = null;
    this.lastResult = null;

    this.#buildDecor();
    this.sync();
  }

  /* ── 무대 ──────────────────────────────────────────────── */

  #sprite(tex, height, opts = {}) {
    const mat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      depthWrite: false,
      toneMapped: false,
      opacity: opts.opacity ?? 1,
    });
    const sp = new THREE.Sprite(mat);
    sp.scale.set(height, height, 1);
    sp.renderOrder = opts.renderOrder ?? 4;
    this.spriteMaterials.push(mat);
    return sp;
  }

  #buildDecor() {
    // 방어 슬롯 — 바닥의 점선 원
    const tex = slotMarkerTexture();
    for (const slot of DEFENSE.slots) {
      const geo = new THREE.CircleGeometry(0.62, 26);
      geo.rotateX(-Math.PI / 2);
      const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.5, depthWrite: false, toneMapped: false });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(slot.x, this.terrain.groundY(slot.x, slot.z) + 0.03, slot.z);
      mesh.renderOrder = 2;
      this.root.add(mesh);
      this.slotMarkers.push(mesh);
    }

    // 광장 안전 울타리 링
    const ringGeo = new THREE.CircleGeometry(DEFENSE.plaza.r, 48);
    ringGeo.rotateX(-Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({
      map: safeRingTexture(),
      transparent: true,
      opacity: 0,
      depthWrite: false,
      toneMapped: false,
    });
    this.safeRing = new THREE.Mesh(ringGeo, ringMat);
    this.safeRing.position.set(DEFENSE.plaza.x, this.terrain.groundY(DEFENSE.plaza.x, DEFENSE.plaza.z) + 0.05, DEFENSE.plaza.z);
    this.safeRing.renderOrder = 2;
    this.root.add(this.safeRing);

    // 수집단의 배 — 상륙할 때만 부두 앞 바다에 나타난다
    this.boat = this.#sprite(boatTexture(), 1.6);
    this.boat.position.set(DEFENSE.boat.x, 0.35, DEFENSE.boat.z);
    this.boat.visible = false;
    this.root.add(this.boat);
  }

  /* ── 슬롯 · 설치물 ─────────────────────────────────────── */

  get slotCount() {
    return DEFENSE.slots.length;
  }

  slotDef(index) {
    return DEFENSE.slots[index] || null;
  }

  structureAt(index) {
    return this.structures[index] || null;
  }

  /** 슬롯 목록 — 화면·미니맵·QA 가 같은 모양으로 읽는다 */
  slotsInfo() {
    return DEFENSE.slots.map((slot, i) => {
      const st = this.structures[i];
      const def = st ? STRUCTURES[st.kind] : null;
      return {
        index: i,
        id: slot.id,
        x: slot.x,
        z: slot.z,
        side: slot.side,
        kind: st ? st.kind : null,
        name: def ? def.name : '빈 슬롯',
        icon: def ? def.icon : '➕',
        hp: st ? Math.round(st.hp) : 0,
        hpMax: st ? Math.round(st.hpMax) : 0,
        pct: st ? Math.round((st.hp / Math.max(1, st.hpMax)) * 100) : 0,
      };
    });
  }

  /** 세이브(progress.defense.slots) → 3D 설치물 다시 세우기 */
  sync() {
    for (let i = 0; i < this.structures.length; i++) {
      if (this.structures[i]) this.#destroyStructure(i);
    }
    // 도감 발견 수를 먼저 반영해야 울타리 최대 체력(변신 보강)이 맞게 잡힌다
    this.support = supportOf(this.hooks.getDiscovered ? this.hooks.getDiscovered() : []);
    const saved = this.progress.defense && Array.isArray(this.progress.defense.slots) ? this.progress.defense.slots : [];
    for (let i = 0; i < this.structures.length; i++) {
      const src = saved[i];
      if (!src || !STRUCTURES[src.kind]) continue;
      this.#place(i, src.kind, { hp: Number(src.hp) || null, persist: false });
    }
    this.#refreshSlotMarkers();
  }

  #refreshSlotMarkers() {
    for (let i = 0; i < this.slotMarkers.length; i++) {
      const mesh = this.slotMarkers[i];
      mesh.visible = !this.structures[i];
      mesh.material.opacity = this.wave ? 0.25 : 0.5;
    }
  }

  hpMaxOf(kind) {
    const def = STRUCTURES[kind];
    if (!def) return 1;
    const mul = kind === 'fence' ? this.support.fenceHp : 1;
    return Math.round(def.hp * mul);
  }

  /** 슬롯에 설치물을 세운다 (재료·창고 확인은 Game 이 먼저 한다) */
  #place(index, kind, { hp = null, persist = true } = {}) {
    const def = STRUCTURES[kind];
    const slot = DEFENSE.slots[index];
    if (!def || !slot) return null;
    const hpMax = this.hpMaxOf(kind);
    const sprite = this.#sprite(structureTexture(kind), def.height);
    const y = this.terrain.groundY(slot.x, slot.z);
    sprite.position.set(slot.x, y + def.height / 2, slot.z);
    this.root.add(sprite);

    const geo = new THREE.CircleGeometry(def.height * 0.36, 20);
    geo.rotateX(-Math.PI / 2);
    const shadow = new THREE.Mesh(
      geo,
      new THREE.MeshBasicMaterial({ color: '#6d5a8a', transparent: true, opacity: 0.24, depthWrite: false, toneMapped: false })
    );
    shadow.position.set(slot.x, y + 0.02, slot.z);
    shadow.renderOrder = 2;
    this.root.add(shadow);

    // 방어 설비는 아군을 막지 않는다 — 주인공·고양이·메타몽은 자기 마을 울타리를 그냥 지나다닌다.
    // 적(불청객)은 Defense#blockingStructure 가 설비 자체를 보고 길을 막는다.
    // 그래서 이 콜라이더는 foeOnly(allyPass) — Player.canStand 가 건너뛰고, 세이브 복원 때도 끼이지 않는다.
    const collider = { x: slot.x, z: slot.z, r: 0.42, allyPass: true, foeOnly: true };
    if (this.player && Array.isArray(this.player.colliders)) this.player.colliders.push(collider);

    const st = {
      index,
      kind,
      def,
      hp: hp && hp > 0 ? Math.min(hpMax, hp) : hpMax,
      hpMax,
      sprite,
      shadow,
      collider,
      x: slot.x,
      z: slot.z,
      y,
    };
    this.structures[index] = st;
    if (persist && this.progress.defense) {
      this.progress.defense.slots[index] = { kind, hp: Math.round(st.hp) };
    }
    this.#refreshSlotMarkers();
    this.#syncStructureScale(st);
    return st;
  }

  placeStructure(index, kind) {
    const st = this.#place(index, kind, { persist: true });
    if (st) this.#save();
    return st;
  }

  #destroyStructure(index) {
    const st = this.structures[index];
    if (!st) return null;
    this.root.remove(st.sprite);
    st.sprite.material.dispose();
    this.root.remove(st.shadow);
    st.shadow.geometry.dispose();
    st.shadow.material.dispose();
    if (this.player && Array.isArray(this.player.colliders)) {
      const i = this.player.colliders.indexOf(st.collider);
      if (i >= 0) this.player.colliders.splice(i, 1);
    }
    this.structures[index] = null;
    this.#refreshSlotMarkers();
    return st;
  }

  removeStructure(index) {
    const st = this.#destroyStructure(index);
    if (st && this.progress.defense) {
      this.progress.defense.slots[index] = null;
      this.#save();
    }
    return st;
  }

  #syncStructureScale(st) {
    const k = clamp(st.hp / Math.max(1, st.hpMax), 0.35, 1);
    st.sprite.scale.y = st.def.height * (0.72 + k * 0.28);
    st.sprite.position.y = st.y + st.sprite.scale.y / 2;
    st.shadow.material.opacity = 0.1 + k * 0.16;
  }

  #damageStructure(st, amount) {
    if (!st || st.hp <= 0) return;
    st.hp = Math.max(0, st.hp - amount);
    this.#syncStructureScale(st);
    if (this.progress.defense) this.progress.defense.slots[st.index] = { kind: st.kind, hp: Math.round(st.hp) };
    if (st.hp <= 0) {
      const name = st.def.name;
      this.fx?.burst(st.x, st.y + 0.5, st.z, '#c9a06a', 16, { spread: 1.4, up: 2.2 });
      this.#destroyStructure(st.index);
      if (this.progress.defense) this.progress.defense.slots[st.index] = null;
      this.hooks.toast?.(`💥 ${name}이(가) 부서졌어요!`, 2200);
      this.#save();
    }
  }

  /* ── 웨이브 ────────────────────────────────────────────── */

  get waveActive() {
    return !!this.wave;
  }

  /** 지금 설치된 설비 요약 — 화면·QA 공용 */
  installed() {
    return this.structures.filter(Boolean).map((st) => ({ index: st.index, kind: st.kind, hp: Math.round(st.hp) }));
  }

  /** 웨이브 시작 — 날짜와 무관하게 [지금 방어 시작] 으로도 부를 수 있다 */
  startWave(day, reason = 'manual') {
    if (this.wave) return { ok: false, reason: 'active' };
    const d = Math.max(1, Math.floor(Number(day) || 1));
    const plan = wavePlan(d);
    this.support = supportOf(this.hooks.getDiscovered ? this.hooks.getDiscovered() : []);
    // 그날 새로 단장한 셈 — 남아 있던 설비 체력을 가득 채운다
    for (const st of this.structures) {
      if (!st) continue;
      st.hpMax = this.hpMaxOf(st.kind);
      st.hp = st.hpMax;
      this.#syncStructureScale(st);
      if (this.progress.defense) this.progress.defense.slots[st.index] = { kind: st.kind, hp: Math.round(st.hp) };
    }

    this.wave = {
      day: d,
      reason,
      t: 0,
      timer: WAVE.duration,
      plan,
      spawned: 0,
      total: plan.length,
      down: 0,
      fled: 0,
      stolen: 0,
      turretHits: 0,
      somiHits: 0,
      ongiHits: 0,
      slingHits: 0,
      balloonHits: 0,
      ammoUsed: 0,
      /** 대피를 마친 채로 시작했는가 — '완벽한 대피' 업적의 조건 */
      evacPerfect: this.evac.active && this.evacCount > 0 && this.evacCount >= this.dittos.length,
    };
    this.ammo = WEAPONS.balloon.shots + this.support.ammo;
    this.slingCd = 0;
    this.balloonCd = 0;
    this.helperCd = { somi: 0, ongi: 0 };
    this.boat.visible = true;
    this.boatT = 0;
    this.lastResult = null;

    // 냥이 헬퍼 — 웨이브 동안은 둘 다 주인공 곁을 지킨다(끝나면 원래대로)
    this.catBefore = this.cats.map((c) => ({ id: c.id, follow: !!c.follow }));
    for (const cat of this.cats) cat.setFollow(true);

    // 메타몽 분신 — 도감에서 버섯·꽃형을 찾았으면 길목에 어설픈 분신을 띄운다
    this.#spawnDecoys();

    this.hooks.toast?.('🌊 부두 앞 바다에 회색 돛이 나타났어요!', 2600);
    if (this.cats.some((c) => c.id === 'ongi')) {
      setTimeout(() => this.hooks.toast?.('😼 옹이: 야옹!! 수집단이 왔어요 — 지도에 빨간 점!', 3000), 900);
    }
    this.hooks.onWaveStart?.(this.waveState());
    this.#pulseBoat();
    this.#refreshSlotMarkers();
    return { ok: true, wave: this.waveState() };
  }

  #pulseBoat() {
    if (!this.boat) return;
    this.boat.position.set(DEFENSE.boat.x, 0.35, DEFENSE.boat.z + 2.4);
    this.boat.material.opacity = 0;
    this.boat.visible = true;
  }

  #spawnDecoys() {
    this.#clearDecoys();
    const n = this.support.decoys;
    if (!n) return;
    const spots = [
      { x: -1.2, z: 24.2 },
      { x: 1.3, z: 20.8 },
    ];
    for (let i = 0; i < n; i++) {
      const s = spots[i] || spots[spots.length - 1];
      const sp = this.#sprite(decoyTexture(), 0.9, { opacity: 0.72 });
      const y = this.terrain.groundY(s.x, s.z);
      sp.position.set(s.x, y + 0.45, s.z);
      this.root.add(sp);
      this.decoys.push({ sprite: sp, x: s.x, z: s.z, used: false, bob: Math.random() * 6.28 });
    }
  }

  #clearDecoys() {
    for (const d of this.decoys) {
      this.root.remove(d.sprite);
      d.sprite.material.dispose();
    }
    this.decoys = [];
  }

  /** 웨이브를 즉시 끝낸다 — 결과 판정은 지금까지의 기록으로 */
  stopWave() {
    if (!this.wave) return null;
    return this.#finishWave();
  }

  #finishWave() {
    const w = this.wave;
    if (!w) return null;
    this.wave = null;
    for (const r of [...this.raiders]) this.#removeRaider(r, false);
    for (const p of this.projectiles) {
      this.root.remove(p.sprite);
      p.sprite.material.dispose();
    }
    this.projectiles = [];
    this.#clearDecoys();
    this.boat.visible = false;
    this.speedMultiplier = 1;

    // 냥이 상태 복구
    if (this.catBefore) {
      for (const prev of this.catBefore) {
        const cat = this.cats.find((c) => c.id === prev.id);
        if (cat) cat.setFollow(prev.follow);
      }
      this.catBefore = null;
    }

    const victory = w.stolen === 0;
    const pf = this.progress.defense;
    pf.runs = (pf.runs || 0) + 1;
    pf.lastRunDay = w.day;
    pf.lastResult = victory ? 'victory' : 'partial';
    pf.totalDown = (pf.totalDown || 0) + w.down;
    pf.turretHits = (pf.turretHits || 0) + w.turretHits;
    pf.lastStolen = w.stolen;
    pf.lastWave = { day: w.day, total: w.total, down: w.down, fled: w.fled, stolen: w.stolen, reason: w.reason };

    let reward = null;
    if (victory) {
      pf.wins = (pf.wins || 0) + 1;
      if (w.evacPerfect) pf.perfectEvacs = (pf.perfectEvacs || 0) + 1;
      reward = victoryReward(w.day);
      this.progress.addCoins(reward.coin);
      if (reward.seed) this.progress.addSupply(reward.seed, reward.seedCount);
      const leftover = this.progress.inventory.add('star', reward.star);
      if (leftover > 0) this.progress.inventory.storage.star = (this.progress.inventory.stored('star') || 0) + leftover;
    } else {
      pf.losses = (pf.losses || 0) + 1;
    }

    this.lastResult = { victory, ...w, reward };
    this.hooks.onWaveEnd?.(this.lastResult);
    this.#save();
    this.#refreshSlotMarkers();
    return this.lastResult;
  }

  /* ── 대피 ──────────────────────────────────────────────── */

  /** [📣 메타몽 모으기] — 섬 곳곳의 메타몽이 광장 안전 울타리로 달려온다 */
  gatherDittos() {
    if (this.wave) return { ok: false, reason: 'active' };
    if (!this.dittos.length) return { ok: false, reason: 'none' };
    const { x: cx, z: cz, r } = DEFENSE.plaza;
    this.dittos.forEach((d, i) => {
      const ang = (i / Math.max(1, this.dittos.length)) * Math.PI * 2 + 0.4;
      const rad = Math.min(r - 1.2, 1.5 + (i % 3) * 0.6);
      const tx = cx + Math.cos(ang) * rad;
      const tz = cz + Math.sin(ang) * rad * 0.8;
      d.setEvacTarget(tx, tz);
    });
    this.evac = { active: true, day: this.hooks.day ? this.hooks.day() : 0, count: 0 };
    this.safeRing.material.opacity = 0.85;
    return { ok: true, total: this.dittos.length };
  }

  /** 광장 밖으로 — 각자 원래 자리로 돌아간다 */
  releaseDittos() {
    for (const d of this.dittos) d.clearEvac();
    this.evac = { active: false, day: this.evac.day, count: 0 };
    this.safeRing.material.opacity = 0;
  }

  get evacCount() {
    return this.dittos.filter((d) => d.evacuated).length;
  }

  /* ── 주인공 무기 ───────────────────────────────────────── */

  /** 가장 가까운 불청객 (플레이어 기준) */
  nearestRaider(pos, range = 999) {
    let best = null;
    let bestD = range;
    for (const r of this.raiders) {
      if (r.state === 'down') continue;
      const d = dist2(pos.x, pos.z, r.x, r.z);
      if (d < bestD) {
        bestD = d;
        best = r;
      }
    }
    return best;
  }

  /**
   * 무기 발사 — 새총(무제한) / 꽃잎 물풍선(꽃잎 1 → 5발)
   * @returns {{ok:boolean, reason?:string, target?:object}}
   */
  fire(kind = 'sling') {
    if (!this.wave) return { ok: false, reason: 'idle' };
    const def = WEAPONS[kind];
    if (!def) return { ok: false, reason: 'kind' };

    if (kind === 'sling') {
      if (this.slingCd > 0) return { ok: false, reason: 'cooldown' };
    } else {
      if (this.balloonCd > 0) return { ok: false, reason: 'cooldown' };
      if (this.ammo <= 0) {
        const petals = this.progress.inventory.count('petal');
        if (petals <= 0) return { ok: false, reason: 'petal' };
        this.progress.inventory.take('petal', WEAPONS.balloon.petals);
        this.ammo += WEAPONS.balloon.shots;
        this.hooks.toast?.(`🌸 꽃잎 ${WEAPONS.balloon.petals}개로 물풍선 ${WEAPONS.balloon.shots}발을 만들었어요`, 2000);
      }
    }

    const target = this.nearestRaider(this.player.position, def.range);
    if (!target) return { ok: false, reason: 'none' };

    if (kind === 'sling') this.slingCd = def.cooldown;
    else {
      this.balloonCd = def.cooldown;
      this.ammo -= 1;
      this.wave.ammoUsed += 1;
    }

    const p = this.player.position;
    const power = this.support.power;
    this.#launch({
      source: kind,
      kind,
      from: { x: p.x, y: p.y + 0.95, z: p.z },
      target,
      dmg: def.damage * power,
      splash: def.splash || 0,
      slow: kind === 'sling' ? 0 : 0.6,
      knockback: def.knockback || 0,
    });
    return { ok: true, target };
  }

  /**
   * 설치된 포탑 자동 사격 — 경보등이 옆에 있으면 공격 속도가 오른다.
   * 7단계부터 포탑은 세 종류(물풍선·화염·얼음) — def.tower 가 있는 설비는 모두 자동 사격한다.
   */
  #updateTurrets(dt) {
    for (const st of this.structures) {
      if (!st || st.hp <= 0) continue;
      const def = st.def;
      if (!def || !def.tower) continue;
      st.cd = Math.max(0, (st.cd || 0) - dt);
      if (st.cd > 0) continue;
      const target = this.#nearestRaiderFrom(st.x, st.z, def.range);
      if (!target) continue;
      const boost = this.#lampBoostAt(st.x, st.z);
      st.cd = def.cooldown / boost;
      this.#launch({
        source: 'turret',
        kind: def.tower.projectile || 'balloon',
        from: { x: st.x, y: st.y + 0.95, z: st.z },
        target,
        dmg: def.damage * this.support.power,
        slow: def.slow,
        splash: def.tower.splash || 0,
      });
    }
  }

  /** 이 자리 주변 경보등의 포탑 가속 배율 */
  #lampBoostAt(x, z) {
    let boost = 1;
    for (const st of this.structures) {
      if (!st || st.kind !== 'lamp' || st.hp <= 0) continue;
      if (dist2(x, z, st.x, st.z) <= STRUCTURES.lamp.range) boost = Math.max(boost, STRUCTURES.lamp.boost);
    }
    return boost;
  }

  #nearestRaiderFrom(x, z, range) {
    let best = null;
    let bestD = range;
    for (const r of this.raiders) {
      if (r.state === 'down') continue;
      const d = dist2(x, z, r.x, r.z);
      if (d < bestD) {
        bestD = d;
        best = r;
      }
    }
    return best;
  }

  #launch({ source = 'sling', kind, from, target, dmg, splash = 0, slow = 0, knockback = 0 }) {
    const TEX = { balloon: balloonTexture, flame: flameTexture, frost: frostTexture };
    const SIZE = { balloon: 0.42, flame: 0.44, frost: 0.4 };
    const tex = TEX[kind] ? TEX[kind]() : pelletTexture();
    const size = SIZE[kind] || 0.22;
    const sprite = this.#sprite(tex, size, { renderOrder: 6 });
    sprite.position.set(from.x, from.y, from.z);
    this.root.add(sprite);
    const to = { x: target.x, y: target.y + 0.7, z: target.z };
    const dist = dist2(from.x, from.z, to.x, to.z);
    this.projectiles.push({
      source,
      kind,
      sprite,
      from,
      to,
      t: 0,
      dur: clamp(dist / (kind === 'balloon' || kind === 'flame' || kind === 'frost' ? 9 : 14), 0.12, 0.7),
      dmg,
      splash,
      slow,
      knockback,
      target,
    });
  }

  #updateProjectiles(dt) {
    if (!this.projectiles.length) return;
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const p = this.projectiles[i];
      p.t += dt;
      const k = Math.min(1, p.t / p.dur);
      const x = p.from.x + (p.to.x - p.from.x) * k;
      const z = p.from.z + (p.to.z - p.from.z) * k;
      const y = p.from.y + (p.to.y - p.from.y) * k + Math.sin(k * Math.PI) * 0.9;
      p.sprite.position.set(x, y, z);
      if (k < 1) continue;

      // 착탄
      const hits = [];
      if (p.splash > 0) {
        for (const r of this.raiders) {
          if (r.state === 'down') continue;
          if (dist2(r.x, r.z, p.to.x, p.to.z) <= p.splash) hits.push(r);
        }
        this.fx?.burst(p.to.x, p.to.y, p.to.z, p.kind === 'flame' ? '#ffb277' : p.kind === 'frost' ? '#bfeaff' : '#a9e2f7', 18, { spread: 2.2, up: 2.4, size: 1.2 });
      } else if (p.target && p.target.state !== 'down') {
        hits.push(p.target);
      }
      for (const r of hits) {
        const isSplashNear = p.splash > 0 && r !== p.target;
        this.#damageRaider(r, p.dmg * (isSplashNear ? 0.72 : 1), p.source, p.slow, p.knockback);
      }
      if (!hits.length && p.kind === 'balloon') this.fx?.burst(p.to.x, p.to.y, p.to.z, '#cbeaf7', 8, { spread: 1.2, up: 1.6 });

      this.root.remove(p.sprite);
      p.sprite.material.dispose();
      this.projectiles.splice(i, 1);
    }
  }

  /* ── 불청객 ────────────────────────────────────────────── */

  #spawnRaider(kind) {
    const def = RAIDER_KINDS[kind] || RAIDER_KINDS.grunt;
    // 같은 자리에 겹쳐 한 덩어리로 보이지 않도록, 내려오는 순서대로 좌우로 벌린다
    const laneSlot = (this.wave ? this.wave.spawned : 0) % 3;
    const lane = (laneSlot - 1) * 0.62 + (Math.random() - 0.5) * 0.3;
    const x = DEFENSE.landing.x + lane;
    const z = DEFENSE.landing.z + (Math.random() - 0.5) * 1.2;
    const y = this.terrain.groundY(x, z);

    // 불청객도 주인공·냥이와 같은 HD-2D 도트 — 컨셉 시안의 후드·고글·망토 차림
    const atlas = this.atlases ? this.atlases.get(RAIDER_SET[kind] || 'raider') : null;
    let bb = null;
    let sprite;
    if (atlas) {
      bb = new Billboard(atlas, 'back1', { height: def.height });
      bb.mesh.renderOrder = 5;
      this.spriteMaterials.push(bb.material);
      sprite = bb.mesh;
    } else {
      // 아틀라스를 못 읽었을 때만 쓰는 예비 그림 (32px 캔버스)
      sprite = this.#sprite(raiderTexture(kind), def.height);
    }
    sprite.position.set(x, bb ? y : y + def.height / 2, z);
    this.root.add(sprite);

    const geo = new THREE.CircleGeometry(def.height * 0.28, 16);
    geo.rotateX(-Math.PI / 2);
    const shadow = new THREE.Mesh(
      geo,
      new THREE.MeshBasicMaterial({ color: '#4f4560', transparent: true, opacity: 0.28, depthWrite: false, toneMapped: false })
    );
    shadow.position.set(x, y + 0.02, z);
    shadow.renderOrder = 2;
    this.root.add(shadow);

    const r = {
      kind,
      def,
      hp: def.hp,
      hpMax: def.hp,
      x,
      z,
      y,
      wp: 1,
      state: 'walk',
      speed: def.speed,
      sprite,
      bb,
      animT: Math.random() * 4,
      frameName: bb ? 'front1' : null,
      shadow,
      stun: 0,
      slow: 0,
      slowT: 0,
      bob: Math.random() * 6.28,
      attackT: 0,
      target: null,
      tauntRolled: false,
      ignoreStructT: 0,
      downT: 0,
      stolen: false,
    };
    this.raiders.push(r);
    sprite.userData.raider = r;
    this.wave.spawned += 1;
    return r;
  }

  #damageRaider(r, dmg, source, slow = 0, knockback = 0) {
    if (!r || r.state === 'down') return;
    r.hp = Math.max(0, r.hp - dmg);
    const total = this.support.power > 1 ? dmg : dmg;
    this.fx?.float(`${Math.round(total)}`, r.x, r.y + r.def.height + 0.2, r.z, source === 'turret' ? '#7fb6d6' : '#b2698f');
    this.fx?.burst(r.x, r.y + r.def.height * 0.6, r.z, source === 'balloon' ? '#a9e2f7' : '#e7dfc4', 6, { spread: 0.8, up: 1.2 });
    if (slow > 0) {
      r.slow = Math.max(r.slow, slow);
      r.slowT = Math.max(r.slowT, 1.6);
    }
    if (knockback > 0) {
      // 밀려나기 — 진행 방향의 반대로 살짝
      const dx = r.x - DEFENSE.plaza.x;
      const dz = r.z - DEFENSE.plaza.z;
      const len = Math.max(0.001, Math.hypot(dx, dz));
      r.x += (dx / len) * knockback * 0.35;
      r.z += (dz / len) * knockback * 0.35;
    }
    if (this.wave) {
      if (source === 'turret') this.wave.turretHits += 1;
      else if (source === 'sling') this.wave.slingHits += 1;
      else if (source === 'balloon') this.wave.balloonHits += 1;
    }
    if (r.hp <= 0) {
      r.state = 'down';
      r.downT = 0;
      if (this.wave) this.wave.down += 1;
      this.fx?.burst(r.x, r.y + r.def.height * 0.5, r.z, '#9b93b3', 14, { spread: 1.4, up: 2.0 });
    }
  }

  #removeRaider(r, count = true) {
    this.root.remove(r.sprite);
    if (r.bb) r.bb.dispose();
    else r.sprite.material.dispose();
    this.root.remove(r.shadow);
    r.shadow.geometry.dispose();
    r.shadow.material.dispose();
    const i = this.raiders.indexOf(r);
    if (i >= 0) this.raiders.splice(i, 1);
    return count;
  }

  /** 불청객 자리 잡기 — HD-2D 빌보드는 원점이 발밑, 예비 스프라이트는 중심 */
  #placeRaider(r, lift = 0) {
    if (r.bb) r.bb.mesh.position.set(r.x, r.y + lift, r.z);
    else r.sprite.position.set(r.x, r.y + r.def.height / 2 + lift, r.z);
  }

  /** 걸음 프레임 — 언제나 카메라 쪽(정면)을 보여 줘야 후드·고글·물약이 읽힌다 */
  #animateRaider(r, dt) {
    if (!r.bb) return;
    const rate = r.state === 'attack' ? 3.4 : r.state === 'walk' ? 7 : 6;
    r.animT = (r.animT || 0) + dt * rate;
    const name = `front${(Math.floor(r.animT) % 4) + 1}`;
    if (name !== r.frameName) {
      r.frameName = name;
      r.bb.setFrame(name);
    }
  }

  #blockingStructure(r) {
    let best = null;
    let bestD = 1.05;
    for (const st of this.structures) {
      if (!st || st.hp <= 0) continue;
      const d = dist2(r.x, r.z, st.x, st.z);
      const reach = st.kind === 'fence' ? 1.35 : 0.95;
      if (d < reach && d < bestD) {
        bestD = d;
        best = st;
      }
    }
    return best;
  }

  #updateRaider(r, dt) {
    if (r.state === 'down') {
      r.downT += dt;
      if (r.bb && !r.dying) {
        // 빌보드도 쓰러지며 흐려지게 — 이 순간에만 투명 합성을 켠다
        r.dying = true;
        r.bb.material.transparent = true;
        r.bb.material.depthWrite = true;
        r.bb.material.needsUpdate = true;
        r.bb.material.opacity = 1;
      }
      this.#placeRaider(r, -Math.min(0.3, r.downT * 0.6));
      if (r.bb) r.bb.material.opacity = Math.max(0, 1 - r.downT * 1.8);
      else r.sprite.material.opacity = Math.max(0, 1 - r.downT * 1.6);
      r.shadow.material.opacity = Math.max(0, 0.28 - r.downT * 0.4);
      if (r.downT > 0.55) this.#removeRaider(r);
      return;
    }

    if (r.stun > 0) {
      r.stun = Math.max(0, r.stun - dt);
      this.#placeRaider(r, Math.sin(r.stun * 30) * 0.05);
      this.#animateRaider(r, dt * 0.4);
      return;
    }

    if (r.slowT > 0) {
      r.slowT = Math.max(0, r.slowT - dt);
      if (r.slowT <= 0) r.slow = 0;
    }

    // 분신 미끼 — 가까이 오면 잠깐 진짜인 줄 안다
    for (const d of this.decoys) {
      if (d.used) continue;
      if (dist2(r.x, r.z, d.x, d.z) < 1.7) {
        d.used = true;
        r.stun = Math.max(r.stun, 1.8);
        this.root.remove(d.sprite);
        d.sprite.material.dispose();
        this.fx?.float('어설픈 분신!', d.x, this.terrain.groundY(d.x, d.z) + 1.2, d.z, '#8f7bc0');
        this.hooks.toast?.('🟣 메타몽 분신이 불청객을 헷갈리게 했어요!', 2000);
        return;
      }
    }

    if (r.ignoreStructT > 0) r.ignoreStructT = Math.max(0, r.ignoreStructT - dt);

    if (r.state === 'attack') {
      const target = r.target;
      if (!target || target.hp <= 0) {
        r.state = 'walk';
        r.target = null;
        r.ignoreStructT = 0.8;
      } else if (dist2(r.x, r.z, target.x, target.z) > 1.7) {
        // 밀려나거나 설비가 사라져 너무 멀어졌다 — 다시 길을 간다
        r.state = 'walk';
        r.target = null;
        r.ignoreStructT = 0.8;
      } else {
        r.attackT += dt;
        const dps = WAVE.attackDps * (r.kind === 'big' ? 1.4 : 1);
        if (r.attackT >= 0.5) {
          r.attackT = 0;
          this.fx?.burst(target.x, target.y + 0.4, target.z, '#d8c7a6', 5, { spread: 0.6, up: 1.0 });
        }
        this.#damageStructure(target, dps * dt);
        this.#placeRaider(r, Math.sin(performance.now() * 0.02) * 0.03);
        this.#animateRaider(r, dt);
        return;
      }
    }

    // 진행 방향 — 길을 따라 광장으로
    let goal;
    if (r.state === 'flee') {
      goal = DEFENSE.boat;
    } else {
      goal = DEFENSE.route[Math.min(r.wp, DEFENSE.route.length - 1)];
    }

    const dx = goal.x - r.x;
    const dz = goal.z - r.z;
    const d = Math.hypot(dx, dz);
    if (d < 0.35) {
      if (r.state === 'flee') {
        // 배에 닿으면 사라진다
        this.#removeRaider(r);
        return;
      }
      if (r.wp < DEFENSE.route.length - 1) {
        r.wp += 1;
        return;
      }
    }

    // 가로막는 설비가 있으면 공격으로 전환
    if (r.state === 'walk' && r.ignoreStructT <= 0) {
      const block = this.#blockingStructure(r);
      if (block) {
        // 허수아비의 미끼 — 처음 닿을 때 한 번만 크게 끌린다
        if (block.kind === 'scarecrow' && !r.tauntRolled) {
          r.tauntRolled = true;
          r.stun = 0.5;
          this.fx?.float('어? 메타몽이다!', block.x, block.y + 1.4, block.z, '#8f7bc0');
        }
        r.state = 'attack';
        r.target = block;
        r.attackT = 0;
        return;
      }
    }

    // 허수아비 어그로 — 반경 안에 들어오면 시선이 끌린다
    if (r.state === 'walk' && !r.tauntRolled) {
      for (const st of this.structures) {
        if (!st || st.kind !== 'scarecrow' || st.hp <= 0) continue;
        if (dist2(r.x, r.z, st.x, st.z) <= STRUCTURES.scarecrow.taunt) {
          r.tauntRolled = true;
          r.state = 'attack';
          r.target = st;
          r.attackT = 0;
          this.fx?.float('저기 메타몽!', st.x, st.y + 1.5, st.z, '#8f7bc0');
          return;
        }
      }
    }

    const speed = r.speed * (r.slow > 0 ? r.slow : 1) * (r.state === 'flee' ? 1.5 : 1);
    const step = Math.min(d, speed * dt);
    if (d > 0.001) {
      r.x += (dx / d) * step;
      r.z += (dz / d) * step;
    }

    // 겹침 방지 — 동료와 0.55m 안으로 붙으면 살짝 비켜 선다(한 덩어리로 보이지 않게)
    for (const o of this.raiders) {
      if (o === r || o.state === 'down') continue;
      const ox = r.x - o.x;
      const oz = r.z - o.z;
      const od2 = ox * ox + oz * oz;
      if (od2 > 0.3025 || od2 < 1e-6) continue;
      const od = Math.sqrt(od2);
      const push = (0.55 - od) * 0.5;
      r.x += (ox / od) * push;
      r.z += (oz / od) * push;
    }
    r.y = this.terrain.groundY(r.x, r.z);
    r.bob += dt * 8;
    this.#placeRaider(r, Math.abs(Math.sin(r.bob)) * 0.05);
    this.#animateRaider(r, dt);
    r.shadow.position.set(r.x, r.y + 0.02, r.z);

    // 광장 안전 울타리 침입 — 코인을 챙겨 도망
    if (r.state !== 'flee' && dist2(r.x, r.z, DEFENSE.plaza.x, DEFENSE.plaza.z) <= DEFENSE.plaza.r - 0.4) {
      const steal = Math.min(this.progress.coins, stealAmount(this.wave ? this.wave.day : 1));
      if (steal > 0) this.progress.spendCoins(steal);
      r.stolen = true;
      r.state = 'flee';
      r.wp = DEFENSE.route.length - 1;
      this.wave && (this.wave.stolen += steal);
      this.fx?.float(`-${steal} 🪙`, r.x, r.y + r.def.height + 0.3, r.z, '#c0567a');
      this.hooks.toast?.(`😿 수집단이 코인 ${steal}개를 챙겨 달아나요`, 2200);
      this.safeRing.material.opacity = 0.95;
    }
  }

  /* ── 냥이 헬퍼 ─────────────────────────────────────────── */

  /** 옹이는 불청객을 쫓고, 솜이는 주인공 곁에서 지킨다 */
  catTarget(id) {
    if (!this.wave) return null;
    if (id !== 'ongi') return null;
    const ongi = this.cats.find((c) => c.id === 'ongi');
    const from = ongi ? ongi.position : this.player.position;
    const r = this.nearestRaider(from, 999);
    return r ? { x: r.x, z: r.z } : null;
  }

  #updateHelpers(dt) {
    if (!this.wave) {
      this.helperCd.somi = 0;
      this.helperCd.ongi = 0;
      return;
    }
    for (const key of ['somi', 'ongi']) {
      const cat = this.cats.find((c) => c.id === key);
      if (!cat) continue;
      const help = CAT_HELP[key];
      const level = this.hooks.catLevel ? this.hooks.catLevel(key) : 1;
      const mod = catPower(level);
      this.helperCd[key] = Math.max(0, this.helperCd[key] - dt);
      if (this.helperCd[key] > 0) continue;

      if (key === 'somi') {
        const r = this.nearestRaider(cat.position, help.punchRange);
        if (!r) continue;
        this.helperCd.somi = help.cooldown * mod.cd;
        r.stun = Math.max(r.stun, help.punchStun * mod.power);
        this.#damageRaider(r, help.punchDamage * mod.power, 'somi');
        this.fx?.float('냥냥 펀치!', r.x, r.y + r.def.height + 0.35, r.z, '#e78aa8');
        cat.pet();
        if (this.wave) this.wave.somiHits += 1;
      } else {
        const r = this.nearestRaider(cat.position, help.clawRange);
        if (!r) continue;
        this.helperCd.ongi = help.cooldown * mod.cd;
        this.#damageRaider(r, help.clawDamage * mod.power, 'ongi', help.clawSlow);
        this.fx?.float('할퀴기!', r.x, r.y + r.def.height + 0.3, r.z, '#9b7ec0');
        if (this.wave) this.wave.ongiHits += 1;
      }
    }
  }

  /* ── 업데이트 ──────────────────────────────────────────── */

  update(dt, canAct = true) {
    // 슬롯 표시 · 안전 링 숨쉬기
    const t = performance.now() * 0.001;
    if (this.slotMarkers.length) {
      for (let i = 0; i < this.slotMarkers.length; i++) {
        const m = this.slotMarkers[i];
        if (!m.visible) continue;
        m.material.opacity = 0.34 + Math.sin(t * 2 + i) * 0.12;
      }
    }
    if (this.safeRing) {
      const want = this.wave ? 0.55 : this.evac.active ? 0.8 : 0;
      this.safeRing.material.opacity += (want - this.safeRing.material.opacity) * Math.min(1, dt * 3);
      this.safeRing.visible = this.safeRing.material.opacity > 0.02;
    }
    for (const d of this.decoys) {
      if (d.used) continue;
      d.bob += dt * 3;
      d.sprite.position.y = this.terrain.groundY(d.x, d.z) + 0.5 + Math.sin(d.bob) * 0.06;
    }

    // 대피 중인 메타몽 수 세기
    if (this.evac.active) {
      const n = this.evacCount;
      if (n !== this.evac.count) {
        this.evac.count = n;
        if (n > 0 && n === this.dittos.length) {
          this.evac.done = true;
          this.hooks.toast?.('🟣 메타몽 모두 광장으로! 안전 울타리 안에 모였어요', 2800);
          this.hooks.onEvacDone?.({ count: n, total: this.dittos.length });
        }
      }
    }

    if (!this.wave) {
      this.slingCd = Math.max(0, this.slingCd - dt);
      this.balloonCd = Math.max(0, this.balloonCd - dt);
      return;
    }

    // 시간 배속(10×·60×)에서도 불청객이 설비를 건너뛰지 않도록 잘게 나눠 진행한다
    const steps = Math.min(10, Math.max(1, Math.ceil(dt / 0.12)));
    const sub = dt / steps;
    for (let i = 0; i < steps; i++) {
      if (this.#stepWave(sub, canAct)) break;
    }
    this.#updateProjectiles(canAct ? dt : 0);

    // 불청객 도트도 카메라를 향해 Y축으로만 돈다(다른 캐릭터와 같은 HD-2D 빌보드)
    if (this.camera) {
      for (const r of this.raiders) if (r.bb) r.bb.faceCamera(this.camera);
    }
  }

  /** 웨이브 한 걸음 — 웨이브가 끝났으면 true */
  #stepWave(dt, canAct = true) {
    const w = this.wave;
    if (!w) return true;
    if (canAct) w.t += dt;
    this.slingCd = Math.max(0, this.slingCd - dt);
    this.balloonCd = Math.max(0, this.balloonCd - dt);
    if (canAct) w.timer = Math.max(0, w.timer - dt);

    // 배가 다가왔다가 물러난다
    if (this.boatT !== null) {
      this.boatT = (this.boatT || 0) + dt;
      const k = Math.min(1, this.boatT / WAVE.boatIn);
      this.boat.position.set(DEFENSE.boat.x, 0.35 + Math.sin(this.boatT * 1.6) * 0.06, DEFENSE.boat.z + 2.4 * (1 - k));
      this.boat.material.opacity = Math.min(1, this.boatT * 2);
      if (k >= 1) this.boatT = null;
    } else if (this.boat.visible) {
      this.boat.position.y = 0.35 + Math.sin(performance.now() * 0.0016) * 0.06;
    }

    // 편성된 불청객을 시간에 맞춰 내려보낸다
    const nextAt = WAVE.firstDelay + w.spawned * WAVE.spawnGap;
    if (w.spawned < w.plan.length && w.t >= nextAt) {
      this.#spawnRaider(w.plan[w.spawned]);
    }

    if (canAct) {
      // 경보등 빛 아래의 불청객은 발이 느려진다
      for (const st of this.structures) {
        if (!st || st.kind !== 'lamp' || st.hp <= 0) continue;
        for (const r of this.raiders) {
          if (r.state === 'down') continue;
          if (dist2(r.x, r.z, st.x, st.z) <= STRUCTURES.lamp.range) {
            r.slow = Math.max(r.slow, STRUCTURES.lamp.slow);
            r.slowT = Math.max(r.slowT, 0.4);
          }
        }
      }
      this.#updateTurrets(dt);
      for (const r of [...this.raiders]) this.#updateRaider(r, dt);
      this.#updateHelpers(dt);
    }

    // 끝났나? — 모두 쓰러지거나 달아났고 더 나올 편성이 없을 때
    if (w.spawned >= w.plan.length && this.raiders.length === 0) {
      this.#finishWave();
      return true;
    }
    // 시간이 다 되면 남은 불청객은 물러난다
    if (w.timer <= 0) {
      for (const r of [...this.raiders]) {
        if (r.state !== 'flee') {
          r.state = 'flee';
          w.fled += 1;
        }
      }
      if (!this.raiders.length) {
        this.#finishWave();
        return true;
      }
    }
    return false;
  }

  onNewDay(day) {
    if (this.wave) this.stopWave();
    if (this.evac.active) this.releaseDittos();
    this.#clearDecoys();
    if (day % DEFENSE.periodDays === 0) {
      this.hooks.toast?.('🛡️ 오늘 밤 수집단이 온대요 — 방어를 준비해요', 3000);
    }
  }

  /* ── 화면·QA 공용 ──────────────────────────────────────── */

  /** 캔버스 탭 판정용 — 불청객 스프라이트 */
  rayTargets() {
    return this.raiders.map((r) => r.sprite);
  }

  waveState() {
    if (!this.wave) return null;
    const w = this.wave;
    return {
      day: w.day,
      t: Math.round(w.t * 10) / 10,
      timer: Math.round(w.timer * 10) / 10,
      total: w.total,
      spawned: w.spawned,
      left: this.raiders.length,
      down: w.down,
      fled: w.fled,
      stolen: w.stolen,
      turretHits: w.turretHits,
      slingHits: w.slingHits,
      balloonHits: w.balloonHits,
      somiHits: w.somiHits,
      ongiHits: w.ongiHits,
      ammoUsed: w.ammoUsed,
      ammo: this.ammo,
      reason: w.reason,
    };
  }

  stats() {
    return {
      wave: this.waveState(),
      raiders: this.raiders.map((r) => ({
        kind: r.kind,
        x: +r.x.toFixed(2),
        z: +r.z.toFixed(2),
        hp: Math.round(r.hp),
        state: r.state,
      })),
      slots: this.slotsInfo(),
      evac: { active: this.evac.active, count: this.evacCount, total: this.dittos.length },
      ammo: this.ammo,
      support: { ...this.support },
      boatVisible: !!(this.boat && this.boat.visible),
      decoys: this.decoys.filter((d) => !d.used).length,
      lastResult: this.lastResult
        ? { victory: this.lastResult.victory, down: this.lastResult.down, total: this.lastResult.total, stolen: this.lastResult.stolen, reward: this.lastResult.reward }
        : null,
    };
  }

  #save() {
    this.hooks.save?.();
  }
}

/**
 * Fishing.js — 부두 낚시 (찌 · 동심원 물결 · 입질 1.4초 승부)
 *
 * 흐름
 *   ① start()  : 기력 5를 쓰고 찌를 부두 앞 물 위로 던진다 (0.55초 포물선)
 *   ② wait     : 1.5~3.5초 동안 찌가 둥실둥실, 물결 링이 퍼진다
 *   ③ bite     : `!` 팝업 + 찌 흔들림 + 물 튀김 소리 → 1.4초 안에 탭하면 성공
 *   ④ result   : 어종 추첨(별빛 미끼면 희귀 확률 ↑) → 바구니에 담고 낚시 EXP
 *
 * 규칙 숫자는 lifeData.js, 연출 재료(찌·물결 텍스처)는 icons3d.js 에서 온다.
 * 시간은 Game 이 넘기는 dt(scaledDt 아님)를 쓴다 — 모달이 열려도 입질 타이머가
 * 멈추지 않게 하려는 게 아니라, 모달이 열리면 Game 이 cancel() 을 부르기 때문이다.
 */
import * as THREE from 'three';
import { FISH, FISHING, FISHING_ZONES, fishPool, sizeLabel } from '../systems/lifeData.js';
import { glowTexture, rippleTexture } from '../sprites/icons3d.js';

function pickFish(weights) {
  const total = Object.values(weights).reduce((a, b) => a + b, 0);
  let roll = Math.random() * total;
  for (const [id, w] of Object.entries(weights)) {
    roll -= w;
    if (roll <= 0) return FISH[id];
  }
  return FISH.anchovy;
}

export class Fishing {
  constructor({ progress, audio, fx, scene, hud, hooks = {} }) {
    this.progress = progress;
    this.audio = audio;
    this.fx = fx;
    this.hud = hud;
    this.hooks = hooks;

    this.state = 'idle'; // idle | cast | wait | bite | reel | lost
    this.t = 0;
    this.waitFor = 2;
    this.window = FISHING.biteWindow;
    this.baitUsed = false;
    this.lastResult = null;
    this.castFrom = new THREE.Vector3();
    this.rings = [];
    /** 6단계: 지금 낚시하는 자리 (부두 · 강가 · 다리 위) */
    this.zone = FISHING_ZONES.sea;

    this.#build(scene);
  }

  /* ── 3D 연출 재료 ─────────────────────────────────────── */

  #build(scene) {
    this.group = new THREE.Group();
    this.group.name = 'Fishing';
    this.group.visible = false;
    scene.add(this.group);

    // 찌 — 흰 몸통 + 분홍 머리 + 작은 반짝임
    this.bobber = new THREE.Group();
    const body = new THREE.Mesh(
      new THREE.SphereGeometry(0.14, 14, 12),
      new THREE.MeshBasicMaterial({ color: '#fffaf6', toneMapped: false })
    );
    const cap = new THREE.Mesh(
      new THREE.ConeGeometry(0.1, 0.18, 12),
      new THREE.MeshBasicMaterial({ color: '#ff6f8f', toneMapped: false })
    );
    cap.position.y = 0.15;
    this.bobber.add(body, cap);
    this.glow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTexture(),
        color: '#dff6ff',
        transparent: true,
        opacity: 0.5,
        depthWrite: false,
        toneMapped: false,
      })
    );
    this.glow.scale.set(0.95, 0.95, 1);
    this.bobber.add(this.glow);
    this.group.add(this.bobber);

    // 물결 링 3겹
    const ringGeo = new THREE.PlaneGeometry(1, 1);
    ringGeo.rotateX(-Math.PI / 2);
    for (let i = 0; i < 3; i++) {
      const mat = new THREE.MeshBasicMaterial({
        map: rippleTexture(),
        transparent: true,
        opacity: 0,
        depthWrite: false,
        depthTest: false,
        toneMapped: false,
      });
      const mesh = new THREE.Mesh(ringGeo, mat);
      mesh.renderOrder = 4;
      this.group.add(mesh);
      this.rings.push({ mesh, t: i * 0.45, life: 1.5 });
    }

    // 낚싯줄
    const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0)]);
    this.line = new THREE.Line(
      lineGeo,
      new THREE.LineBasicMaterial({ color: '#f6fdff', transparent: true, opacity: 0.5, depthWrite: false, toneMapped: false })
    );
    this.line.frustumCulled = false;
    this.group.add(this.line);
  }

  /* ── 상태 ─────────────────────────────────────────────── */

  get active() {
    return this.state !== 'idle';
  }

  get waitingBite() {
    return this.state === 'bite';
  }

  /** 지금 입질 중인가 (탭하면 잡힌다) */
  get canReel() {
    return this.state === 'bite' || this.state === 'wait' || this.state === 'cast';
  }

  /* ── 시작 ─────────────────────────────────────────────── */

  /** @returns {{ok:boolean, reason?:string}} */
  start({ bait = false, zone = 'sea' } = {}) {
    if (this.state !== 'idle') return { ok: false, reason: 'busy' };
    const z = FISHING_ZONES[zone] || FISHING_ZONES.sea;
    if (z.need === 'dock' && !this.progress.building('dock').done) return { ok: false, reason: 'dock' };
    if (z.need === 'bridge' && !this.progress.bridgeBuilt) return { ok: false, reason: 'bridge' };
    if (this.progress.stamina < FISHING.stamina) return { ok: false, reason: 'stamina' };

    let usedBait = false;
    if (bait) {
      if (this.progress.supply('bait') <= 0) return { ok: false, reason: 'no-bait' };
      this.progress.takeSupply('bait', 1);
      usedBait = true;
    }
    this.progress.useStamina(FISHING.stamina);
    this.progress.fishing.casts += 1;

    this.zone = z;
    this.baitUsed = usedBait;
    this.state = 'cast';
    this.t = 0;
    this.lastResult = null;
    this.waitFor = FISHING.waitMin + Math.random() * (FISHING.waitMax - FISHING.waitMin);
    this.window = FISHING.biteWindow;

    const spot = z.spot;
    this.castFrom.set(spot.x + 0.1, 0.9, spot.z - 0.6);
    this.group.visible = true;
    this.bobber.position.copy(this.castFrom);
    this.bobber.scale.setScalar(1);
    for (const r of this.rings) {
      r.t = 0;
      r.mesh.material.opacity = 0;
    }
    this.audio?.sfxCast?.();
    this.hud?.setFishing?.({ state: 'cast', label: '찌를 던지는 중…' });
    this.#syncAction();
    this.hooks.onStart?.();
    return { ok: true, bait: usedBait, zone: z.id };
  }

  /* ── 회수/성공 ────────────────────────────────────────── */

  /** 화면·액션 버튼 탭이 부르는 단 하나의 입력 */
  reel() {
    if (!this.active) return { ok: false, reason: 'idle' };

    if (this.state === 'bite') return this.#catch();

    if (this.state === 'wait' || this.state === 'cast') {
      this.state = 'lost';
      this.t = 0;
      this.progress.fishing.misses += 1;
      this.audio?.sfxDeny?.();
      this.hud?.setFishing?.({ state: 'lost', label: '찌를 너무 일찍 당겼어요' });
      this.hooks.toast?.('찌를 너무 일찍 당겼어요 — 입질을 기다려 보세요 🎣', 1900);
      this.#syncAction();
      return { ok: false, reason: 'early' };
    }
    return { ok: false, reason: 'state' };
  }

  #catch() {
    // 지금 시간대·물(바다/민물)에 맞는 어종만 물린다 — 아침/낮/노을/밤마다 풀이 다르다
    const phase = (this.hooks.getPhase && this.hooks.getPhase()) || 'day';
    const table = fishPool(this.zone.habitat, phase, this.baitUsed);
    const fish = pickFish(table);
    const size = Math.round(fish.size[0] + Math.random() * (fish.size[1] - fish.size[0]));
    const at = this.bobber.position;

    if (fish.id === 'star') {
      // 별조각은 가방 재료 — 가방이 가득이면 창고로
      const leftover = this.progress.inventory.add('star', 1);
      if (leftover > 0) this.progress.inventory.storage.star = (this.progress.inventory.stored('star') || 0) + leftover;
    } else {
      this.progress.addFish(fish.id, 1);
    }
    this.progress.fishing.catches += 1;
    if (fish.id !== 'star') this.progress.fishing.best = Math.max(this.progress.fishing.best, size);

    this.state = 'reel';
    this.t = 0;
    this.lastResult = { fish, size };

    this.fx?.burst(at.x, 0.35, at.z, fish.tint || '#dff6ff', 16, { spread: 1.5, up: 2.6 });
    this.fx?.float(`${fish.icon} ${fish.name}`, at.x, 1.15, at.z, '#5f5470');
    this.audio?.sfxReel?.();
    if (fish.rare) this.audio?.sfxRare?.();

    this.hooks.onCatch?.(fish, size, { bait: this.baitUsed, zone: this.zone.id });
    this.hud?.setFishing?.({ state: 'reel', label: `${fish.name} ${sizeLabel(fish.id, size)} 획득!` });
    this.#syncAction();
    return { ok: true, fish, size };
  }

  /** 밖에서(모달 열기·멀어짐 등) 조용히 접는다 */
  cancel(reason = '') {
    if (!this.active) return;
    this.state = 'idle';
    this.t = 0;
    this.group.visible = false;
    this.hud?.setFishing?.(null);
    if (reason) this.hooks.toast?.(reason, 1800);
    this.#syncAction();
  }

  /* ── 매 프레임 ────────────────────────────────────────── */

  update(dt, playerPos) {
    if (!this.active) return;
    const spot = this.zone.spot;
    const dist = playerPos ? Math.hypot(playerPos.x - spot.x, playerPos.z - spot.z) : 99;
    if (dist > FISHING.leash && this.state !== 'reel' && this.state !== 'lost') {
      this.cancel('찌에서 너무 멀어졌어요 — 낚싯줄을 회수했어요');
      return;
    }

    this.t += dt;
    const target = new THREE.Vector3(this.zone.castTo.x, 0.12, this.zone.castTo.z);

    if (this.state === 'cast') {
      const k = Math.min(1, this.t / 0.55);
      this.bobber.position.lerpVectors(this.castFrom, target, k);
      this.bobber.position.y = this.castFrom.y + (target.y - this.castFrom.y) * k + Math.sin(k * Math.PI) * 0.85;
      if (k >= 1) {
        this.state = 'wait';
        this.t = 0;
        this.audio?.sfxSplash?.(0.55);
        this.fx?.burst(target.x, 0.12, target.z, '#e6fbff', 10, { spread: 1.1, up: 1.4 });
        this.hud?.setFishing?.({ state: 'wait', label: '찌가 둥실둥실… 입질을 기다려요' });
        this.#syncAction();
      }
    } else if (this.state === 'wait') {
      // 둥실둥실 + 물결
      this.bobber.position.x = target.x + Math.sin(this.t * 1.7) * 0.06;
      this.bobber.position.z = target.z + Math.cos(this.t * 1.3) * 0.06;
      this.bobber.position.y = target.y + 0.02 + Math.sin(this.t * 3.1) * 0.026;
      this.bobber.rotation.z = Math.sin(this.t * 2.1) * 0.12;
      if (this.t >= this.waitFor) {
        this.state = 'bite';
        this.t = 0;
        this.audio?.sfxSplash?.(1);
        this.audio?.sfxBite?.();
        this.fx?.burst(target.x, 0.16, target.z, '#ffffff', 14, { spread: 1.3, up: 2.2 });
        this.fx?.float('!', target.x, 0.95, target.z, '#ff6f8f');
        this.hud?.setFishing?.({ state: 'bite', label: '입질! 지금 탭!', urgent: true, ratio: 1 });
        this.hud?.bite?.();
        this.#syncAction();
      }
    } else if (this.state === 'bite') {
      const left = Math.max(0, this.window - this.t);
      this.bobber.position.set(
        target.x + (Math.random() - 0.5) * 0.1,
        target.y - 0.05 + Math.sin(this.t * 34) * 0.035,
        target.z + (Math.random() - 0.5) * 0.1
      );
      this.bobber.rotation.z = Math.sin(this.t * 26) * 0.35;
      this.hud?.setFishing?.({ state: 'bite', label: '입질! 지금 탭!', urgent: true, ratio: left / this.window });
      if (this.t >= this.window) {
        this.state = 'lost';
        this.t = 0;
        this.progress.fishing.misses += 1;
        this.progress.gainExp('fish', FISHING.expMiss);
        this.audio?.sfxDeny?.();
        this.hud?.setFishing?.({ state: 'lost', label: '놓쳤어요…' });
        this.hooks.toast?.('놓쳤어요… 찌가 가라앉는 순간을 노려 보세요', 1800);
        this.#syncAction();
      }
    } else if (this.state === 'reel' || this.state === 'lost') {
      // 찌가 줄어들며 사라진다
      const k = Math.min(1, this.t / 0.55);
      this.bobber.position.y = 0.06 + (this.state === 'reel' ? k * 0.9 : -k * 0.25);
      this.bobber.scale.setScalar(Math.max(0.001, 1 - k));
      if (k >= 1) {
        this.state = 'idle';
        this.group.visible = false;
        this.bobber.scale.setScalar(1);
        this.hud?.setFishing?.(null);
        this.#syncAction();
      }
    }

    // 물결 링 — 찌 주변으로 계속 퍼진다
    const at = this.bobber.position;
    for (const r of this.rings) {
      r.t += dt;
      if (r.t > r.life) r.t = 0;
      const k = r.t / r.life;
      r.mesh.position.set(at.x, 0.1, at.z);
      const size = 0.55 + k * (this.state === 'bite' ? 2.6 : 1.75);
      r.mesh.scale.set(size, 1, size);
      r.mesh.material.opacity = (1 - k) * (this.state === 'bite' ? 0.95 : 0.72);
    }

    // 낚싯줄은 플레이어 손끝에서 찌까지
    if (playerPos) {
      const pos = this.line.geometry.attributes.position;
      pos.setXYZ(0, playerPos.x, (playerPos.y || 0.7) + 1.0, playerPos.z);
      pos.setXYZ(1, at.x, at.y + 0.05, at.z);
      pos.needsUpdate = true;
    }
  }

  /** 액션 버튼 라벨을 낚시 상태에 맞춘다 */
  #syncAction() {
    const hud = this.hud;
    if (!hud?.setAction) return;
    if (this.state === 'idle') return; // Game 이 다음 프레임에 대상 기준으로 다시 그린다
    if (this.state === 'bite') hud.setAction({ active: true, icon: '🎣', label: '입질! 탭!' });
    else if (this.state === 'cast' || this.state === 'wait') hud.setAction({ active: true, icon: '🎣', label: '회수하기' });
    else hud.setAction({ active: false, icon: '🎣', label: '낚시 중' });
  }
}

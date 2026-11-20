/**
 * Game.js — 세션 오케스트레이션
 * 타이틀 → 플레이 → 일시정지, 20분 하루 루프, 입력, 상호작용, 자동 저장, 컨텍스트 복구.
 */
import * as THREE from 'three';
import { World } from './World.js';
import { AmbientSound } from './AmbientSound.js';
import { Player } from '../actors/Player.js';
import { Cat } from '../actors/Cat.js';
import { Ditto } from '../actors/Ditto.js';
import { Hud } from '../ui/Hud.js';
import { TitleScreen } from '../ui/TitleScreen.js';
import { Modal } from '../ui/Modal.js';
import { LandmarkLabels } from '../ui/Landmarks.js';
import { h } from '../ui/dom.js';
import { SaveStore } from '../storage/SaveStore.js';
import {
  CAMERA,
  CATS,
  DAY_SECONDS,
  DITTOS,
  INTERACT,
  LANDMARKS,
  PROPS,
  SAVE,
  SPAWN,
  clockLabel,
  phaseAt,
  weatherForDay,
} from '../config.js';

const DEFAULT_SETTINGS = { muted: false, timeScale: 1, fps30: false };
const SPEEDS = [1, 10, 60];

export class Game {
  constructor(canvas, uiRoot) {
    this.canvas = canvas;
    this.uiRoot = uiRoot;

    this.mode = 'boot';
    this.state = {
      day: 1,
      elapsed: 120,
      discovered: [],
      settings: { ...DEFAULT_SETTINGS },
    };

    this.saveStore = new SaveStore();
    this.audio = new AmbientSound();
    this.saveData = null;
    this.hasSave = false;
    this.lastSavedAt = 0;

    this.keys = new Set();
    this.paused = false;
    this.contextLost = false;
    this.target = null;

    this.last = 0;
    this.acc30 = 0;
    this.autosaveAcc = 0;
    this.hudAcc = 0;
    this.frames = 0;
    this.fpsAcc = 0;
    this.fps = 0;
    this.stats = { fps: 0, calls: 0, triangles: 0 };

    this.titleAngle = 0;
    this.lookAt = new THREE.Vector3();
    this.tmpA = new THREE.Vector3();
    this.tmpB = new THREE.Vector3();
    this.raycaster = new THREE.Raycaster();
    this.tap = { x: 0, y: 0, t: 0 };

    this.title = null;
    this.hud = null;
    this.modal = null;
  }

  async start() {
    this.#setupRenderer();
    this.#setupWorld();
    this.#setupUi();
    this.#setupInput();
    this.#bindLifecycle();
    await this.#setupTitle();
    this.#loop();
  }

  /* ── 초기화 ─────────────────────────────────────────────── */

  #setupRenderer() {
    const renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
      stencil: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NeutralToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.shadowMap.enabled = false;
    this.renderer = renderer;

    this.camera = new THREE.PerspectiveCamera(CAMERA.fov, window.innerWidth / window.innerHeight, 0.1, 900);
    this.camera.position.set(0, 28, 48);

    this.onResize = () => {
      const w = window.innerWidth;
      const hgt = window.innerHeight;
      this.camera.aspect = w / Math.max(1, hgt);
      this.camera.updateProjectionMatrix();
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      this.renderer.setSize(w, hgt, false);
    };
    window.addEventListener('resize', this.onResize);
    if (window.visualViewport) window.visualViewport.addEventListener('resize', this.onResize);
  }

  #setupWorld() {
    this.world = new World();
    this.scene = this.world.scene;

    this.player = new Player(SPAWN, this.world.terrain);
    this.player.colliders = [
      ...LANDMARKS.map((l) => ({
        x: l.x,
        z: l.z,
        r: l.id === 'dock' ? 1.4 : l.id === 'workshop' ? 2.2 : l.id === 'shelter' ? 1.0 : 1.2,
      })),
      ...PROPS.map((prop) => ({ x: prop.x, z: prop.z, r: prop.kind === 'campfire' ? 0.6 : 0.3 })),
      ...DITTOS.map((d) => ({ x: d.x, z: d.z, r: 0.42 })),
      ...CATS.map((c) => ({ x: c.x, z: c.z, r: 0.36 })),
    ];
    this.scene.add(this.player.group);
    this.scene.add(this.player.shadow);
    this.scene.add(this.player.dust);

    this.cats = CATS.map((def) => new Cat(def, this.world.terrain));
    for (const cat of this.cats) {
      this.scene.add(cat.group);
      this.scene.add(cat.shadow);
    }

    this.dittos = DITTOS.map((def) => new Ditto(def, this.world.terrain));
    for (const ditto of this.dittos) {
      this.scene.add(ditto.group);
      this.scene.add(ditto.shadow);
    }

    this.world.setWeather(weatherForDay(this.state.day));
    this.lookAt.set(SPAWN.x, this.player.position.y + CAMERA.lookHeight, SPAWN.z);
  }

  #setupUi() {
    this.hud = new Hud(this.uiRoot, {
      onAction: () => this.interact(),
      onMute: () => this.toggleMute(),
      onPause: () => this.openPause(),
      onQuick: (id) => this.openQuick(id),
    });
    this.hud.hide();
    this.modal = new Modal(this.uiRoot);
    this.landmarkLabels = new LandmarkLabels(this.uiRoot, this.world.structures.sites);
  }

  #setupInput() {
    const canvas = this.canvas;
    canvas.addEventListener('pointerdown', (e) => {
      this.tap.x = e.clientX;
      this.tap.y = e.clientY;
      this.tap.t = performance.now();
      this.audio.resume();
    });
    canvas.addEventListener('pointerup', (e) => this.#onCanvasTap(e));
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());

    window.addEventListener('keydown', (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
      this.keys.add(e.code);
      if (this.mode === 'play' && !this.modal.isOpen) {
        if (e.code === 'KeyE' || e.code === 'Space') this.interact();
        if (e.code === 'Escape') this.openPause();
      }
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.keys.clear());
    document.addEventListener('gesturestart', (e) => e.preventDefault());
  }

  #bindLifecycle() {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.save();
        this.audio.suspend();
      } else {
        this.last = performance.now();
        this.audio.resume();
      }
    });
    window.addEventListener('pagehide', () => this.save());

    this.canvas.addEventListener(
      'webglcontextlost',
      (e) => {
        e.preventDefault();
        this.contextLost = true;
        this.hud.setContextLost(true);
        this.last = performance.now();
      },
      false
    );
    this.canvas.addEventListener(
      'webglcontextrestored',
      () => {
        this.contextLost = false;
        this.hud.setContextLost(false);
        this.last = performance.now();
      },
      false
    );
  }

  async #setupTitle() {
    const data = await this.saveStore.load();
    if (data && typeof data === 'object') {
      this.saveData = data;
      this.hasSave = true;
    }
    this.#createTitle();
    this.mode = 'title';
    this.#titleCamera(0.016);

    const t0 = performance.now();
    const tick = () => {
      const p = Math.min(1, (performance.now() - t0) / 720);
      if (this.title) this.title.setProgress(p);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  #createTitle() {
    if (this.title) this.title.destroy();
    this.title = new TitleScreen(this.uiRoot, {
      hasSave: this.hasSave,
      onContinue: () => this.#enter(true),
      onNew: () => this.#requestNew(),
    });
  }

  /* ── 세션 전환 ──────────────────────────────────────────── */

  #requestNew() {
    if (this.title) this.title.busy = false;
    if (!this.hasSave) {
      this.#enter(false);
      return;
    }
    this.modal.open({
      title: '새 섬을 열까요?',
      subtitle: '지금 저장된 섬은 사라져요',
      body: '저장된 Day·플레이 위치·도감 기록이 지워지고 Day 1 아침부터 다시 시작해요.',
      actions: [
        { label: '그대로 둘게요', kind: 'ghost', onClick: () => this.modal.close() },
        {
          label: '새로 시작',
          kind: 'primary',
          onClick: async () => {
            await this.saveStore.clear();
            this.hasSave = false;
            this.saveData = null;
            this.modal.close();
            this.#enter(false);
          },
        },
      ],
      onClose: () => {
        if (this.title) {
          this.title.busy = false;
          this.title.hint.textContent = '저장된 섬이 있어요 — 이어서 걸어볼까요?';
        }
      },
    });
  }

  #enter(fromSave) {
    if (fromSave && this.saveData) this.#applySave(this.saveData);
    else this.#resetState();

    this.mode = 'play';
    this.paused = false;
    if (this.title) this.title.hide();
    this.hud.show();
    this.hud.joystick.setEnabled(true);
    this.hud.setMuted(this.state.settings.muted);

    this.audio.start();
    this.audio.setMuted(this.state.settings.muted);
    this.audio.setPhase(phaseAt(this.state.elapsed).id);

    this.world.setWeather(weatherForDay(this.state.day));
    this.#snapCamera();
    this.#refreshHud();

    this.hud.toast(
      fromSave ? `Day ${this.state.day} — 다시 만나서 반가워요 🌿` : 'Day 1 — 섬에 도착했어요 🌿',
      2800
    );
    this.autosaveAcc = 0;
    this.save();
  }

  #resetState() {
    this.state.day = 1;
    this.state.elapsed = 120;
    this.state.discovered = [];
    this.state.settings = { ...DEFAULT_SETTINGS };
    for (const ditto of this.dittos) ditto.discovered = false;
    this.player.teleport(SPAWN.x, SPAWN.z);
    this.player.yaw = Math.PI;
    this.player.targetYaw = Math.PI;
  }

  #applySave(data) {
    const day = Number(data.day);
    this.state.day = Number.isFinite(day) && day >= 1 ? Math.min(3650, Math.floor(day)) : 1;

    const elapsed = Number(data.elapsed);
    this.state.elapsed = Number.isFinite(elapsed) ? Math.max(0, Math.min(DAY_SECONDS - 0.01, elapsed)) : 60;

    this.state.discovered = Array.isArray(data.discovered)
      ? data.discovered.filter((id) => typeof id === 'string')
      : [];

    const settings = data.settings && typeof data.settings === 'object' ? data.settings : {};
    this.state.settings = {
      muted: !!settings.muted,
      timeScale: SPEEDS.includes(Number(settings.timeScale)) ? Number(settings.timeScale) : 1,
      fps30: !!settings.fps30,
    };

    const px = Number(data.player && data.player.x);
    const pz = Number(data.player && data.player.z);
    if (Number.isFinite(px) && Number.isFinite(pz) && this.world.terrain.isWalkable(px, pz)) {
      this.player.teleport(px, pz);
    } else {
      this.player.teleport(SPAWN.x, SPAWN.z);
    }
    const yaw = Number(data.player && data.player.yaw);
    if (Number.isFinite(yaw)) {
      this.player.yaw = yaw;
      this.player.targetYaw = yaw;
    }
    for (const ditto of this.dittos) ditto.discovered = this.state.discovered.includes(ditto.id);
  }

  #snapCamera() {
    const p = this.player.position;
    this.camera.position.set(p.x + CAMERA.offset.x, p.y + CAMERA.offset.y, p.z + CAMERA.offset.z);
    this.lookAt.set(p.x, p.y + CAMERA.lookHeight, p.z);
    this.camera.lookAt(this.lookAt);
  }

  async backToTitle() {
    this.modal.close();
    await this.save();
    this.mode = 'title';
    this.hasSave = true;
    this.hud.hide();
    this.hud.joystick.setEnabled(false);
    this.#createTitle();
    if (this.title) this.title.setProgress(1);
  }

  /* ── 메인 루프 ──────────────────────────────────────────── */

  #loop() {
    this.last = performance.now();
    const frame = (now) => {
      this.rafId = requestAnimationFrame(frame);
      let dt = (now - this.last) / 1000;
      this.last = now;
      if (!Number.isFinite(dt) || dt <= 0) dt = 1 / 60;
      dt = Math.min(dt, 0.05);

      if (this.state.settings.fps30) {
        this.acc30 += dt;
        if (this.acc30 < 1 / 32) return;
        dt = Math.min(this.acc30, 0.06);
        this.acc30 = 0;
      }
      this.#frame(dt);
    };
    this.rafId = requestAnimationFrame(frame);
  }

  #frame(dt) {
    const playing = this.mode === 'play' && !this.paused && !this.modal.isOpen && !document.hidden;

    if (playing) {
      this.state.elapsed += dt * this.state.settings.timeScale;
      if (this.state.elapsed >= DAY_SECONDS) {
        this.state.elapsed -= DAY_SECONDS;
        this.state.day += 1;
        this.world.setWeather(weatherForDay(this.state.day));
        this.hud.toast(`Day ${this.state.day} — 새로운 하루가 시작됐어요`, 3000);
      }
    }

    const move = this.#inputVector(playing);
    this.player.update(dt, move, this.world.terrain);
    for (const cat of this.cats) cat.update(dt);
    for (const ditto of this.dittos) ditto.update(dt, this.player.position);

    if (this.mode === 'title') this.#titleCamera(dt);
    else this.#followCamera(dt);

    this.world.update(dt, this.state.elapsed, this.camera, this.player.position);
    this.landmarkLabels.update(this.camera, this.mode === 'play');

    if (this.mode === 'play') {
      this.#updateTarget();
      this.hudAcc += dt;
      if (this.hudAcc > 0.14) {
        this.hudAcc = 0;
        this.#refreshHud();
      }
    }

    if (playing) {
      this.autosaveAcc += dt;
      const interval = this.state.settings.timeScale > 1 ? Math.max(2, SAVE.intervalSeconds) : SAVE.intervalSeconds;
      if (this.autosaveAcc >= interval) {
        this.autosaveAcc = 0;
        this.save();
      }
    }

    if (!this.contextLost) this.renderer.render(this.scene, this.camera);
    this.#trackStats(dt);
  }

  #trackStats(dt) {
    this.frames += 1;
    this.fpsAcc += dt;
    if (this.fpsAcc >= 0.5) {
      this.fps = Math.round(this.frames / this.fpsAcc);
      const info = this.renderer.info.render;
      this.stats.fps = this.fps;
      this.stats.calls = info.calls;
      this.stats.triangles = info.triangles;
      this.frames = 0;
      this.fpsAcc = 0;
    }
  }

  #titleCamera(dt) {
    this.titleAngle += dt * 0.09;
    const r = 40;
    const cx = Math.cos(this.titleAngle) * r;
    const cz = Math.sin(this.titleAngle) * r;
    const y = 16 + Math.sin(this.titleAngle * 0.8) * 0.9;
    this.camera.position.set(cx, y, cz);
    this.camera.lookAt(0, 1.0, 0);
  }

  #followCamera(dt) {
    const p = this.player.position;
    const desired = this.tmpA.set(p.x + CAMERA.offset.x, p.y + CAMERA.offset.y, p.z + CAMERA.offset.z);
    const k = 1 - Math.exp(-CAMERA.lerp * dt);
    this.camera.position.lerp(desired, k);

    const groundY = this.world.terrain.sampleHeight(this.camera.position.x, this.camera.position.z);
    const minY = Math.max(groundY, 0) + 1.3;
    if (this.camera.position.y < minY) this.camera.position.y = minY;

    const lookTarget = this.tmpB.set(p.x, p.y + CAMERA.lookHeight, p.z);
    this.lookAt.lerp(lookTarget, Math.min(1, dt * 9));
    this.camera.lookAt(this.lookAt);
  }

  #inputVector(playing) {
    if (!playing) return { x: 0, z: 0 };

    const j = this.hud.joystick.vector;
    let x = j.x;
    let z = j.y;

    let kx = 0;
    let kz = 0;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) kz -= 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) kz += 1;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) kx -= 1;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) kx += 1;
    const km = Math.hypot(kx, kz);
    if (km > 0) {
      kx /= km;
      kz /= km;
      if (Math.hypot(kx, kz) > Math.hypot(x, z)) {
        x = kx;
        z = kz;
      }
    }
    return { x, z };
  }

  /* ── 상호작용 ──────────────────────────────────────────── */

  #updateTarget() {
    let best = null;
    let bestDist = Infinity;

    for (const ditto of this.dittos) {
      const dist = ditto.distanceTo(this.player.position);
      ditto.setNear(dist < 3.8);
      if (dist <= INTERACT.dittoRange && dist < bestDist) {
        best = ditto;
        bestDist = dist;
      }
    }
    for (const cat of this.cats) {
      const dist = cat.distanceTo(this.player.position);
      if (dist <= INTERACT.catRange && dist < bestDist) {
        best = cat;
        bestDist = dist;
      }
    }
    this.target = best;
  }

  interact() {
    if (this.mode !== 'play' || this.modal.isOpen || this.paused) return;
    const t = this.target;
    if (!t) {
      this.hud.toast('가까이에 살펴볼 게 없어요 — 돌멩이를 잘 보세요 ·‿·', 1600);
      return;
    }
    this.#activateActor(t);
  }

  #activateActor(actor) {
    if (actor.kind === 'ditto') this.#discoverDitto(actor);
    else if (actor.kind === 'cat') this.#petCat(actor);
  }

  #discoverDitto(ditto) {
    ditto.interact();
    if (!this.state.discovered.includes(ditto.id)) {
      ditto.markDiscovered();
      this.state.discovered.push(ditto.id);
      this.hud.toast(
        `도감 등록! ${ditto.name} ·‿· (${this.state.discovered.length}/${DITTOS.length})`,
        3200
      );
      this.save();
    } else {
      this.hud.toast(`${ditto.name} — "·‿·" 이미 도감에 있어요`, 2000);
    }
  }

  #petCat(cat) {
    cat.pet();
    this.hud.toast(`${cat.name}가 기분 좋아 보여요 ♥`, 1800);
  }

  #onCanvasTap(e) {
    if (this.mode !== 'play' || this.modal.isOpen) return;
    if (performance.now() - this.tap.t > 520) return;
    if (Math.hypot(e.clientX - this.tap.x, e.clientY - this.tap.y) > 14) return;

    const ndc = new THREE.Vector2(
      (e.clientX / window.innerWidth) * 2 - 1,
      -((e.clientY / window.innerHeight) * 2 - 1)
    );
    this.raycaster.setFromCamera(ndc, this.camera);
    const meshes = [...this.dittos.map((d) => d.hitMesh), ...this.cats.map((c) => c.body)];
    const hits = this.raycaster.intersectObjects(meshes, true);
    if (!hits.length) return;

    let obj = hits[0].object;
    let actor = null;
    while (obj && !actor) {
      actor = obj.userData && obj.userData.actor ? obj.userData.actor : null;
      obj = obj.parent;
    }
    if (!actor) return;
    if (actor.distanceTo(this.player.position) > INTERACT.tapRange) {
      this.hud.toast('조금 더 가까이 가서 볼까요?', 1600);
      return;
    }
    this.#activateActor(actor);
  }

  #refreshHud() {
    const phase = phaseAt(this.state.elapsed);
    const weather = this.world.weather;
    this.hud.setTime({
      icon: phase.icon,
      label: phase.label,
      weatherIcon: weather.icon,
      weatherLabel: weather.label,
      day: this.state.day,
      clock: clockLabel(this.state.elapsed),
      speed: this.state.settings.timeScale,
    });

    const t = this.target;
    if (t && t.kind === 'ditto') {
      this.hud.setAction({
        active: true,
        icon: t.discovered ? '👀' : '🔍',
        label: t.discovered ? '다시 보기' : '살펴보기',
      });
    } else if (t && t.kind === 'cat') {
      this.hud.setAction({ active: true, icon: '🤲', label: '쓰다듬기' });
    } else {
      this.hud.setAction({ active: false, icon: '✋', label: '둘러보기' });
    }
  }

  /* ── 모달 ──────────────────────────────────────────────── */

  #openModal(opt) {
    this.paused = true;
    this.hud.joystick.reset();
    const prevClose = opt.onClose;
    this.modal.open({
      ...opt,
      onClose: () => {
        this.paused = false;
        if (prevClose) prevClose();
      },
    });
  }

  toggleMute() {
    this.state.settings.muted = !this.state.settings.muted;
    this.audio.setMuted(this.state.settings.muted);
    this.hud.setMuted(this.state.settings.muted);
    return this.state.settings.muted;
  }

  openPause() {
    if (this.mode !== 'play' || this.modal.isOpen) return;
    const s = this.state.settings;
    const phase = phaseAt(this.state.elapsed);

    const muteSwitch = h('button', {
      class: `switch ${s.muted ? 'on' : ''}`,
      type: 'button',
      'aria-label': '음소거',
    });
    muteSwitch.addEventListener('click', () => {
      const muted = this.toggleMute();
      muteSwitch.classList.toggle('on', muted);
    });

    const speedButtons = [];
    const seg = h('div', { class: 'seg' });
    for (const v of SPEEDS) {
      const b = h('button', { type: 'button', class: s.timeScale === v ? 'on' : '' }, `${v}×`);
      b.addEventListener('click', () => {
        this.state.settings.timeScale = v;
        for (const btn of speedButtons) btn.classList.remove('on');
        b.classList.add('on');
        this.#refreshHud();
      });
      speedButtons.push(b);
      seg.append(b);
    }

    const fpsSwitch = h('button', {
      class: `switch ${s.fps30 ? 'on' : ''}`,
      type: 'button',
      'aria-label': '30fps 절전',
    });
    fpsSwitch.addEventListener('click', () => {
      this.state.settings.fps30 = !this.state.settings.fps30;
      fpsSwitch.classList.toggle('on', this.state.settings.fps30);
    });

    const row = (label, hint, control) =>
      h('div', { class: 'row' }, h('div', {}, h('div', { class: 'label' }, label), h('div', { class: 'hint' }, hint)), control);

    const savedLabel = this.lastSavedAt
      ? new Date(this.lastSavedAt).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
      : '아직 없음';

    const body = h(
      'div',
      {},
      h('div', { class: 'section-label' }, '지금 섬'),
      h(
        'div',
        { class: 'row' },
        h(
          'div',
          {},
          h('div', { class: 'label' }, `Day ${this.state.day} · ${phase.label}`),
          h('div', { class: 'hint' }, `도감 ${this.state.discovered.length}/${DITTOS.length} · 고양이 ${this.cats.length}마리`)
        ),
        h('span', { class: 'hint' }, clockLabel(this.state.elapsed))
      ),
      h('div', { class: 'section-label' }, '설정'),
      row('음소거', '섬의 소리를 끕니다', muteSwitch),
      row('시간 배속', '20분 하루를 빨리 감아 조명 변화를 확인', seg),
      row('30fps 절전', '배터리와 발열을 아껴요', fpsSwitch),
      h('div', { class: 'section-label' }, '저장'),
      h(
        'div',
        { class: 'hint' },
        `자동 저장 · ${this.saveStore.mode === 'idb' ? 'IndexedDB' : 'localStorage'} · 마지막 ${savedLabel}`
      )
    );

    this.#openModal({
      title: '잠깐 쉬는 중',
      subtitle: '모달이 열려 있는 동안 섬의 시간도 멈춰요',
      body,
      actions: [
        { label: '계속 걷기', kind: 'primary', onClick: () => this.modal.close() },
        { label: '타이틀로 돌아가기', kind: 'ghost', onClick: () => this.backToTitle() },
      ],
      onClose: () => this.save(),
    });
  }

  openQuick(id) {
    if (this.mode !== 'play' || this.modal.isOpen) return;

    if (id === 'codex') {
      const found = this.state.discovered;
      const grid = h('div', { class: 'codex-grid' });
      for (const def of DITTOS) {
        const known = found.includes(def.id);
        grid.append(
          h(
            'div',
            { class: `codex-card ${known ? '' : 'unknown'}` },
            h('div', { class: 'face' }, known ? '· ‿ ·' : '· ? ·'),
            h('div', { class: 'name' }, known ? def.name : '아직 못 찾음'),
            h('div', { class: 'meta' }, known ? def.flavor : '섬 어딘가에서 돌멩이인 척하고 있어요')
          )
        );
      }
      const pct = Math.round((found.length / DITTOS.length) * 100);
      const body = h(
        'div',
        {},
        h('div', { class: 'progress-line' }, h('i', { style: { width: `${pct}%` } })),
        h('div', { class: 'hint' }, `발견 ${found.length} / ${DITTOS.length} · 이번 섬에는 돌멩이 두 마리가 숨어 있어요`),
        h('div', { class: 'section-label' }, '이번 섬의 도감'),
        grid,
        h('div', { class: 'section-label' }, '다음 단계'),
        h('div', { class: 'hint' }, '시즌 1 도감 40종 전체와 3D 프리뷰는 Phase 3에서 열려요.')
      );
      this.#openModal({
        title: '메타몽 도감',
        subtitle: '점 눈 두 개만 남은 어설픈 위장들',
        body,
        actions: [{ label: '닫기', kind: 'primary', onClick: () => this.modal.close() }],
      });
      return;
    }

    if (id === 'build') {
      const list = h('div', {});
      for (const lm of LANDMARKS) {
        list.append(
          h(
            'div',
            { class: 'site-item' },
            h('div', { class: 'site-ico' }, lm.icon),
            h(
              'div',
              { style: { flex: '1' } },
              h('div', { class: 'site-name' }, lm.name),
              h('div', { class: 'site-meta' }, `${lm.day}일차 복구 예정`)
            ),
            h('span', { class: 'hint' }, '복구 전')
          )
        );
      }
      this.#openModal({
        title: '섬 건축',
        subtitle: '4단계 복구 부지가 섬에 자리잡고 있어요',
        body: h(
          'div',
          {},
          list,
          h('div', { class: 'section-label' }, '다음 단계'),
          h('div', { class: 'hint' }, '목제 울타리 배치와 BFS 경로 검사는 Phase 3에서 열려요.')
        ),
        actions: [{ label: '닫기', kind: 'primary', onClick: () => this.modal.close() }],
      });
      return;
    }

    if (id === 'bag') {
      const items = ['통나무', '가지', '조약돌', '생선', '메타몽 젤리'];
      this.#openModal({
        title: '가방',
        subtitle: '아직 비어 있어요',
        body: h(
          'div',
          {},
          h('div', { class: 'hint' }, 'Phase 2에서 채집·요리가 열리면 이 가방이 채워져요.'),
          h('div', { class: 'section-label' }, 'Phase 2에서 열리는 재료'),
          ...items.map((name) =>
            h('div', { class: 'row' }, h('div', { class: 'label' }, name), h('span', { class: 'hint' }, '— 준비 중'))
          )
        ),
        actions: [{ label: '닫기', kind: 'primary', onClick: () => this.modal.close() }],
      });
      return;
    }

    if (id === 'rank') {
      this.#openModal({
        title: '생활 랭크',
        subtitle: '연습 · 0 EXP',
        body: h(
          'div',
          {},
          h('div', { class: 'progress-line' }, h('i', { style: { width: '8%' } })),
          h('div', { class: 'hint' }, '채집 10 EXP · 낮 보너스 15 EXP · 요리/제작 25 EXP'),
          h('div', { class: 'section-label' }, '승급 조건'),
          h('div', { class: 'hint' }, '연습 → F (50) · F → E (200) · E → D (600)'),
          h('div', { class: 'section-label' }, '다음 단계'),
          h('div', { class: 'hint' }, '채집·요리·랭크 시스템은 Phase 2에서 열려요.')
        ),
        actions: [{ label: '닫기', kind: 'primary', onClick: () => this.modal.close() }],
      });
    }
  }

  /* ── 저장 ──────────────────────────────────────────────── */

  snapshot() {
    return {
      version: 1,
      savedAt: Date.now(),
      day: this.state.day,
      elapsedSeconds: Math.round(this.state.elapsed * 100) / 100,
      elapsed: Math.round(this.state.elapsed * 100) / 100,
      playerPos: {
        x: +this.player.position.x.toFixed(3),
        y: +(this.player.position.y || 0).toFixed(3),
        z: +this.player.position.z.toFixed(3),
      },
      player: {
        x: +this.player.position.x.toFixed(3),
        z: +this.player.position.z.toFixed(3),
        yaw: +this.player.yaw.toFixed(3),
      },
      discoveredDittos: [...this.state.discovered],
      discovered: [...this.state.discovered],
      settings: { ...this.state.settings },
    };
  }

  async save() {
    if (this.mode === 'boot') return false;
    const snap = this.snapshot();
    const ok = await this.saveStore.save(snap);
    this.lastSavedAt = snap.savedAt;
    this.lastSaveOk = ok;
    if (ok) this.hasSave = true;
    return ok;
  }
}

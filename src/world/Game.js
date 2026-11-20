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
import { Panels } from '../ui/Panels.js';
import { h } from '../ui/dom.js';
import { SaveStore } from '../storage/SaveStore.js';
import { createPost } from '../render/post.js';
import { makeRamp } from '../render/toon.js';
import { loadAtlases } from '../sprites/atlas.js';
import { Progress } from '../systems/Progress.js';
import { Gathering } from './Gathering.js';
import { DropField } from './Drops.js';
import { Fx } from './Fx.js';
import { BAG, HARVEST, ITEMS, RECIPES, STAMINA } from '../systems/items.js';
import { LETTERS } from '../systems/letters.js';
import {
  CAMERA,
  CATS,
  DAY_SECONDS,
  DITTOS,
  INTERACT,
  LANDMARKS,
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

    // ── 1단계 생활 시스템 (기력·가방·창고·복구·우체통)
    this.progress = new Progress();
    this.gathering = null;
    this.drops = null;
    this.fx = null;
    this.panels = null;
    this.nodeMeshes = [];
    this.siteMeshes = [];

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
    this.stats = { fps: 0, calls: 0, triangles: 0, sceneCalls: 0, sceneTriangles: 0 };

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
    // ① 도트 아틀라스 로드 (NearestFilter 텍스처 + JSON 매니페스트)
    this.atlases = await loadAtlases();
    this.#setupRenderer();
    this.#setupWorld();
    this.#setupPost();
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
    renderer.toneMappingExposure = 1.28;

    // ① 그림자 — 모바일 발열/성능 균형: 1024 섀도맵 + PCF
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap; // r187에서 PCFSoft는 제거됨
    renderer.info.autoReset = false; // 후처리 패스 전체 합계를 직접 집계
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
      if (this.post) this.post.setSize(w, hgt);
    };
    window.addEventListener('resize', this.onResize);
    if (window.visualViewport) window.visualViewport.addEventListener('resize', this.onResize);
  }

  #setupWorld() {
    this.world = new World(this.atlases);
    this.scene = this.world.scene;

    this.player = new Player(SPAWN, this.world.terrain, this.atlases);
    this.player.colliders = [
      ...this.world.scenery.colliders,
      ...DITTOS.map((d) => ({ x: d.x, z: d.z, r: Math.max(0.34, d.height * 0.42) })),
      ...CATS.map((c) => ({ x: c.x, z: c.z, r: 0.3 })),
    ];
    this.scene.add(this.player.group);
    this.scene.add(this.player.shadow);
    this.scene.add(this.player.dust);

    this.cats = CATS.map((def) => new Cat(def, this.world.terrain, this.atlases));
    for (const cat of this.cats) {
      this.scene.add(cat.group);
      this.scene.add(cat.shadow);
    }

    this.dittos = DITTOS.map((def) => new Ditto(def, this.world.terrain, this.atlases));
    for (const ditto of this.dittos) {
      this.scene.add(ditto.group);
      this.scene.add(ditto.shadow);
    }

    // 시간대 틴트를 받을 스프라이트 머티리얼 목록
    this.spriteMaterials = [
      ...this.player.sprites,
      ...this.cats.flatMap((c) => c.sprites),
      ...this.dittos.flatMap((d) => d.sprites),
      ...this.world.scenery.billboards.map((b) => b.material),
    ];

    this.world.setWeather(weatherForDay(this.state.day));
    this.lookAt.set(SPAWN.x, this.player.position.y + CAMERA.lookHeight, SPAWN.z);

    // ── 1단계: 채집 노드 · 드롭 · 파티클 · 플로팅 문구
    this.fx = new Fx(this.scene, this.uiRoot);
    this.drops = new DropField(this.scene, this.world.terrain);
    this.gathering = new Gathering({
      scenery: this.world.scenery,
      progress: this.progress,
      drops: this.drops,
      fx: this.fx,
      audio: this.audio,
    });
    this.gathering.hooks = {
      toast: (msg, ms) => this.hud && this.hud.toast(msg, ms),
      save: () => {
        if (this.mode === 'play') this.save();
      },
      onPickup: () => this.#refreshHud(),
    };
    this.nodeMeshes = this.world.scenery.nodes.map((n) => n.mesh);
    this.siteMeshes = this.world.scenery.sites.map((s) => s.billboard.mesh);
  }

  #setupPost() {
    this.post = createPost(this.renderer, this.scene, this.camera);
  }

  #setupUi() {
    this.hud = new Hud(this.uiRoot, {
      onAction: () => this.interact(),
      onMute: () => this.toggleMute(),
      onPause: () => this.openPause(),
      onQuick: (id) => this.openQuick(id),
      onMail: () => this.openMailbox(),
    });
    this.hud.hide();
    this.modal = new Modal(this.uiRoot);
    this.landmarkLabels = new LandmarkLabels(this.uiRoot, this.world.scenery.sites);
    this.panels = new Panels(this);
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
        // 후처리 렌더타깃은 컨텍스트를 잃을 때 함께 사라진다 → 새로 만든다(검은 화면 방지)
        try {
          if (this.post) this.post.dispose();
        } catch (err) {
          /* 이미 정리된 경우 무시 */
        }
        this.post = createPost(this.renderer, this.scene, this.camera);
        this.post.setSize(window.innerWidth, window.innerHeight);
        // 툰 램프(DataTexture)를 새로 만들어 갈아 끼운다 — 이게 빠지면 지형이 검게 죽는다
        const freshRamp = makeRamp();
        this.scene.traverse((o) => {
          const mats = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
          for (const m of mats) {
            if (m && m.isMeshToonMaterial) {
              m.gradientMap = freshRamp;
              m.needsUpdate = true;
            }
          }
        });
        // 섀도맵도 새 컨텍스트에 다시 굽는다
        const shadow = this.world.sunLight.shadow;
        if (shadow.map) shadow.map.dispose();
        shadow.map = null;
        this.renderer.shadowMap.needsUpdate = true;
        // 텍스처·셰이더를 새 컨텍스트에 다시 올린다(검은 지면·밋밋한 스프라이트 방지)
        this.scene.traverse((o) => {
          const mats = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
          for (const m of mats) {
            if (!m) continue;
            m.needsUpdate = true;
            for (const key of ['map', 'alphaMap', 'gradientMap']) {
              if (m[key]) m[key].needsUpdate = true;
            }
          }
        });
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
    this.player.setYaw(Math.PI);

    // 생활 시스템도 처음 상태로
    this.progress.reset();
    if (this.gathering) {
      this.gathering.applySaved({});
      this.gathering.hooks.toast = (msg, ms) => this.hud && this.hud.toast(msg, ms);
    }
    if (this.fx) this.fx.clear();
    this.#syncBuilt();
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
    if (Number.isFinite(yaw)) this.player.setYaw(yaw);
    for (const ditto of this.dittos) ditto.discovered = this.state.discovered.includes(ditto.id);

    // ── 1단계 생활 상태 (구버전 세이브는 migrateSave 가 기본값을 채워 준다)
    this.progress.load(data);
    if (this.gathering) this.gathering.applySaved(data.nodes || {});
    this.#syncBuilt();
  }

  /** 저장된 복구 상태를 3D·이름표에 반영 */
  #syncBuilt() {
    for (const lm of LANDMARKS) {
      const done = !!this.progress.building(lm.id).done;
      this.world.scenery.setBuilt(lm.id, done);
      if (this.landmarkLabels) this.landmarkLabels.setDone(lm.id, done);
    }
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
    const scaledDt = playing ? dt * this.state.settings.timeScale : 0;

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
    this.player.update(dt, move, this.world.terrain, this.camera);
    for (const cat of this.cats) cat.update(dt, this.camera);
    for (const ditto of this.dittos) ditto.update(dt, this.player.position, this.camera);

    // 채집·리젠·열매 드롭·기력 회복 (모달이 열리면 scaledDt 가 0 이라 시간이 멈춘다)
    if (this.gathering) this.gathering.update(dt, scaledDt, this.player.position, playing);
    if (this.fx) this.fx.update(dt, this.camera);

    // 시간대 색을 스프라이트에 그대로 곱한다(밤에는 보랏빛으로 가라앉힘)
    for (const mat of this.spriteMaterials) mat.color.copy(this.world.spriteLight);

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

    if (!this.contextLost) {
      this.renderer.info.reset();
      this.post.render();
    }
    this.#trackStats(dt);
  }

  #trackStats(dt) {
    this.frames += 1;
    this.fpsAcc += dt;
    if (this.fpsAcc >= 0.5) {
      this.fps = Math.round(this.frames / this.fpsAcc);
      const info = this.renderer.info.render;
      const scene = this.post ? this.post.sceneStats : info;
      this.stats.fps = this.fps;
      this.stats.calls = info.calls;
      this.stats.triangles = info.triangles;
      this.stats.sceneCalls = scene.calls;
      this.stats.sceneTriangles = scene.triangles;
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
    const p = this.player.position;

    for (const ditto of this.dittos) {
      const dist = ditto.distanceTo(p);
      ditto.setNear(dist < 3.8);
      if (dist <= INTERACT.dittoRange && dist < bestDist) {
        best = ditto;
        bestDist = dist;
      }
    }
    for (const cat of this.cats) {
      const dist = cat.distanceTo(p);
      if (dist <= INTERACT.catRange && dist < bestDist) {
        best = cat;
        bestDist = dist;
      }
    }

    // 채집 노드 — 지금 두드릴 수 있는 가장 가까운 나무·바위·꽃덤불
    const node = this.gathering.nearest(p, INTERACT.nodeRange);
    if (node) {
      const dist = Math.hypot(node.x - p.x, node.z - p.z);
      if (dist < bestDist) {
        best = node;
        bestDist = dist;
      }
    }

    // 복구 부지 — 공방은 창고 메뉴를 연다
    const site = this.#nearestSite(p, INTERACT.siteRange);
    if (site) {
      const dist = Math.hypot(site.x - p.x, site.z - p.z);
      if (dist < bestDist) {
        best = site;
        bestDist = dist;
      }
    }

    this.target = best;
  }

  #nearestSite(pos, range) {
    let best = null;
    let bestDist = range;
    for (const site of this.world.scenery.sites) {
      const d = Math.hypot(site.x - pos.x, site.z - pos.z);
      if (d < bestDist) {
        best = site;
        bestDist = d;
      }
    }
    return best;
  }

  interact() {
    if (this.mode !== 'play' || this.modal.isOpen || this.paused) return;
    const t = this.target;
    if (!t) {
      this.hud.toast('가까이에 살펴볼 게 없어요 — 나무나 바위를 두드려 보세요 🪓', 1700);
      return;
    }
    if (t.isNode) {
      this.gathering.hit(t);
      this.#refreshHud();
      return;
    }
    if (t.kind === 'site') {
      this.#openSite(t);
      return;
    }
    this.#activateActor(t);
  }

  #openSite(site) {
    if (site.id === 'workshop') this.#openModal(this.panels.workshopMenu());
    else this.#openModal(this.panels.build(site.id));
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
    const meshes = [
      ...this.dittos.map((d) => d.hitMesh),
      ...this.cats.map((c) => c.body),
      ...this.nodeMeshes,
      ...this.siteMeshes,
      ...this.drops.rayTargets(),
    ];
    const hits = this.raycaster.intersectObjects(meshes, true);
    if (!hits.length) return;

    let obj = hits[0].object;
    let found = null;
    while (obj && !found) {
      const data = obj.userData || {};
      if (data.drop) found = { kind: 'drop', drop: data.drop };
      else if (data.node) found = { kind: 'node', node: data.node };
      else if (data.site) found = { kind: 'site', site: data.site };
      else if (data.actor) found = { kind: 'actor', actor: data.actor };
      obj = obj.parent;
    }
    if (!found) return;

    const p = this.player.position;
    const near = (x, z) => Math.hypot(x - p.x, z - p.z);

    if (found.kind === 'drop') {
      if (near(found.drop.x, found.drop.z) > INTERACT.nodeRange + 1.6) {
        this.hud.toast('조금 더 가까이 가서 주울까요?', 1600);
        return;
      }
      const took = this.gathering.pickup(found.drop);
      if (took) this.drops.remove(found.drop);
      this.#refreshHud();
      return;
    }

    if (found.kind === 'node') {
      if (near(found.node.x, found.node.z) > INTERACT.nodeRange + 0.9) {
        this.hud.toast('조금 더 가까이 가서 두드려 볼까요?', 1600);
        return;
      }
      this.gathering.hit(found.node);
      this.#refreshHud();
      return;
    }

    if (found.kind === 'site') {
      if (near(found.site.x, found.site.z) > INTERACT.siteRange + 1.6) {
        this.hud.toast('조금 더 가까이 가서 살펴볼까요?', 1600);
        return;
      }
      this.#openSite(found.site);
      return;
    }

    const actor = found.actor;
    if (actor.distanceTo(p) > INTERACT.tapRange) {
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

    this.hud.setStamina(this.progress.stamina, STAMINA.max);
    this.hud.setMail(this.#mailBadgeCount());
    this.hud.setBag(this.progress.inventory.usedSlots(), BAG.slots);

    const t = this.target;
    if (t && t.kind === 'ditto') {
      this.hud.setAction({
        active: true,
        icon: t.discovered ? '👀' : '🔍',
        label: t.discovered ? '다시 보기' : '살펴보기',
      });
    } else if (t && t.kind === 'cat') {
      this.hud.setAction({ active: true, icon: '🤲', label: '쓰다듬기' });
    } else if (t && t.isNode) {
      const def = HARVEST[t.kind];
      this.hud.setAction({ active: true, icon: def.icon, label: `${def.verb} ${t.hitsLeft}/${t.hitsNeeded}` });
    } else if (t && t.kind === 'site') {
      this.hud.setAction({
        active: true,
        icon: t.id === 'workshop' ? '🔨' : t.icon,
        label: t.id === 'workshop' ? '공방 열기' : '복구 보기',
      });
    } else {
      this.hud.setAction({ active: false, icon: '✋', label: '둘러보기' });
    }
  }

  /** 안 읽은 편지 + 아직 안 받은 선물을 한 통으로 센다 */
  #mailBadgeCount() {
    let n = 0;
    for (const letter of LETTERS) {
      const unread = !this.progress.isRead(letter.id);
      const giftWaiting = !!letter.gift && !this.progress.isClaimed(letter.id);
      if (unread || giftWaiting) n += 1;
    }
    return n;
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

  /** 도감 카드 썸네일 — 아틀라스 시트에서 해당 셀만 잘라 보여 준다 */
  #paintThumb(el, thumb) {
    const atlas = this.atlases.get(thumb.set);
    if (!atlas) return;
    const cols = atlas.cols;
    const rows = atlas.rows;
    el.style.backgroundImage = `url("${new URL(`sprites/${thumb.set}_sheet.png`, document.baseURI).href}")`;
    el.style.backgroundSize = `${cols * 100}% ${rows * 100}%`;
    el.style.backgroundPosition = `${((thumb.col - 1) / Math.max(1, cols - 1)) * 100}% ${((thumb.row - 1) / Math.max(1, rows - 1)) * 100}%`;
  }

  openQuick(id) {
    if (this.mode !== 'play' || this.modal.isOpen) return;

    if (id === 'codex') {
      const found = this.state.discovered;
      const grid = h('div', { class: 'codex-grid' });
      for (const def of DITTOS) {
        const known = found.includes(def.id);
        const thumb = h('div', { class: `codex-thumb ${known ? '' : 'locked'}` }, known ? '' : '· ? ·');
        if (known && def.thumb) this.#paintThumb(thumb, def.thumb);
        grid.append(
          h(
            'div',
            { class: `codex-card ${known ? '' : 'unknown'}` },
            thumb,
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
        h('div', { class: 'hint' }, `발견 ${found.length} / ${DITTOS.length} · 이번 섬에는 어설픈 메타몽 일곱 마리가 숨어 있어요`),
        h('div', { class: 'section-label' }, '이번 섬의 도감'),
        grid,
        h('div', { class: 'section-label' }, '다음 단계'),
        h('div', { class: 'hint' }, '시즌 1 도감 40종 전체와 도트 프리뷰는 Phase 3에서 열려요.')
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
        const st = this.progress.building(lm.id);
        const recipe = RECIPES[lm.id] || {};
        const totalNeed = Object.values(recipe).reduce((a, b) => a + b, 0);
        const totalIn = Object.entries(recipe).reduce((a, [item, need]) => a + Math.min(need, st.invested[item] || 0), 0);
        const row = h(
          'button',
          { class: `site-item as-button ${st.done ? 'done' : ''}`, type: 'button', onclick: () => this.openBuild(lm.id) },
          h('div', { class: 'site-ico' }, st.done ? '✨' : lm.icon),
          h(
            'div',
            { style: { flex: '1' } },
            h('div', { class: 'site-name' }, lm.name),
            h('div', { class: 'site-meta' }, st.done ? '복구 완료' : `재료 ${totalIn}/${totalNeed} 투입`)
          ),
          h('span', { class: 'hint' }, st.done ? '완료' : '복구')
        );
        list.append(row);
      }
      const doneCount = LANDMARKS.filter((lm) => this.progress.building(lm.id).done).length;
      this.#openModal({
        title: '섬 건축',
        subtitle: `네 곳 중 ${doneCount}곳 복구 완료`,
        body: h(
          'div',
          {},
          list,
          h('div', { class: 'section-label' }, 'Tip'),
          h('div', { class: 'hint' }, '건물 앞에서 바로 복구할 수도 있어요. 공방을 복구하면 창고가 열려요.')
        ),
        actions: [{ label: '닫기', kind: 'primary', onClick: () => this.modal.close() }],
      });
      return;
    }

    if (id === 'bag') {
      this.openBag();
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

  /* ── 1단계: 가방 · 창고 · 복구 · 우체통 ──────────────── */

  openBag() {
    if (this.mode !== 'play') return;
    this.#openModal(this.panels.bag());
  }

  openStorage() {
    if (this.mode !== 'play') return;
    if (!this.progress.building('workshop').done) {
      this.audio.sfxDeny();
      this.hud.toast('공방을 먼저 복구해야 창고가 열려요 🔨', 2200);
      return;
    }
    this.#openModal(this.panels.storage());
  }

  openBuild(id) {
    if (this.mode !== 'play') return;
    this.#openModal(this.panels.build(id));
  }

  openWorkshop() {
    if (this.mode !== 'play') return;
    this.#openModal(this.panels.workshopMenu());
  }

  openMailbox(letterId = null) {
    if (this.mode !== 'play') return;
    if (letterId) this.progress.markRead(letterId);
    this.#openModal(this.panels.mailbox(letterId));
    this.#refreshHud();
  }

  eatBerry() {
    if (this.mode !== 'play') return false;
    const inv = this.progress.inventory;
    if (inv.count('berry') <= 0) {
      this.audio.sfxDeny();
      this.hud.toast('가방에 열매가 없어요 🍓 — 나무 밑을 살펴보세요', 2000);
      return false;
    }
    if (this.progress.stamina >= STAMINA.max) {
      this.hud.toast('기력이 이미 가득해요 💪', 1600);
      return false;
    }
    inv.take('berry', 1);
    this.progress.restStamina(STAMINA.eat);
    this.audio.sfxEat();
    const p = this.player.position;
    if (this.fx) this.fx.float(`+${STAMINA.eat} 기력`, p.x, p.y + 1.7, p.z, '#6f9450');
    this.hud.toast(`열매를 먹었어요 — 기력 +${STAMINA.eat}`, 1800);
    this.#refreshHud();
    this.save();
    if (this.modal.isOpen) this.#openModal(this.panels.bag());
    return true;
  }

  moveToStorage(id, amount = 'all') {
    const moved = this.progress.inventory.toStorage(id, amount);
    if (moved > 0) {
      this.audio.sfxUi();
      this.save();
    } else {
      this.audio.sfxDeny();
    }
    this.#openModal(this.panels.storage());
  }

  moveFromStorage(id, amount = 'all') {
    const moved = this.progress.inventory.fromStorage(id, amount);
    if (moved > 0) {
      this.audio.sfxUi();
      this.save();
    } else {
      this.audio.sfxDeny();
      this.hud.toast('가방이 가득 차서 꺼내지 못했어요', 1800);
    }
    this.#openModal(this.panels.storage());
  }

  /** 가방에서 모자란 만큼 한 번에 넣는다 */
  invest(id) {
    const st = this.progress.building(id);
    const recipe = RECIPES[id] || {};
    const inv = this.progress.inventory;
    let added = 0;
    for (const [item, need] of Object.entries(recipe)) {
      const missing = need - (st.invested[item] || 0);
      if (missing <= 0) continue;
      const take = inv.take(item, missing);
      if (take > 0) {
        st.invested[item] = (st.invested[item] || 0) + take;
        added += take;
      }
    }
    if (added > 0) {
      this.audio.sfxBuild();
      const lm = LANDMARKS.find((l) => l.id === id);
      if (lm && this.fx) this.fx.burst(lm.x, lm.y + lm.height * 0.5, lm.z, '#ffe3b0', 12, { spread: 1.6, up: 2.2 });
      this.save();
      this.#refreshHud();
      this.#openModal(this.panels.build(id));
    } else {
      this.audio.sfxDeny();
      this.hud.toast('넣을 재료가 부족해요 — 채집해 올까요? 🪓', 2000);
    }
  }

  completeBuild(id) {
    const st = this.progress.building(id);
    const recipe = RECIPES[id] || {};
    const ready = Object.entries(recipe).every(([item, need]) => (st.invested[item] || 0) >= need);
    if (!ready || st.done) return false;

    const lm = LANDMARKS.find((l) => l.id === id);
    st.done = true;
    this.world.scenery.setBuilt(id, true);
    this.landmarkLabels.setDone(id, true);
    this.audio.sfxFanfare();
    if (lm && this.fx) {
      this.fx.burst(lm.x, lm.y + lm.height * 0.55, lm.z, '#ffe6a8', 34, { spread: 3.2, up: 4.4, size: 1.3 });
      this.fx.float('복구 완료!', lm.x, lm.y + lm.height * 0.9, lm.z, '#b2698f');
    }
    this.hud.toast(`🎉 ${lm ? lm.name : id} 복구 완료!`, 3200);
    if (id === 'workshop') {
      setTimeout(() => this.hud.toast('공방이 열렸어요 — 창고에 재료를 맡길 수 있어요 📦', 3000), 900);
    }
    this.save();
    this.#refreshHud();
    this.#openModal(this.panels.build(id));
    return true;
  }

  claimGift(letterId) {
    const letter = LETTERS.find((l) => l.id === letterId);
    if (!letter || !letter.gift || this.progress.isClaimed(letterId)) return false;
    const inv = this.progress.inventory;
    let given = 0;
    let stored = 0;
    for (const [id, n] of Object.entries(letter.gift)) {
      const leftover = inv.add(id, n);
      given += n - leftover;
      if (leftover > 0) {
        inv.storage[id] = (inv.storage[id] || 0) + leftover;
        stored += leftover;
      }
    }
    this.progress.markClaimed(letterId);
    this.progress.markRead(letterId);
    this.audio.sfxPickup();
    this.hud.toast(
      stored > 0 ? `선물을 받았어요 — 가방이 가득해 ${stored}개는 창고에 넣었어요 🎁` : '선물을 받았어요 🎁',
      2800
    );
    this.save();
    this.#refreshHud();
    this.#openModal(this.panels.mailbox(letterId));
    return true;
  }

  /* ── 저장 ──────────────────────────────────────────────── */

  snapshot() {
    const life = this.progress.toJSON();
    // 노드 상태는 Gathering 이 들고 있다(리젠 카운트다운 포함)
    life.nodes = this.gathering ? this.gathering.toJSON() : {};
    return {
      version: 2,
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
      ...life,
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

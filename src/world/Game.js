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
import { cartTexture } from '../sprites/icons3d.js';
import { Progress } from '../systems/Progress.js';
import { Gathering } from './Gathering.js';
import { Fishing } from './Fishing.js';
import { DropField } from './Drops.js';
import { Fx } from './Fx.js';
import { BAG, BRIDGE_RECIPE, CART, HARVEST, ITEMS, RECIPES, STAMINA } from '../systems/items.js';
import { LETTERS } from '../systems/letters.js';
import { LifePanels } from '../ui/LifePanels.js';
import { Phase3Panels } from '../ui/Phase3Panels.js';
import { Minimap } from '../ui/Minimap.js';
import { Farming } from './Farming.js';
import { Bridge } from './Bridge.js';
import { Paddy } from './Paddy.js';
import { Defense } from './Defense.js';
import { setBridgeBuilt } from '../terrain/Heightmap.js';
import { Phase4Panels } from '../ui/Phase4Panels.js';
import { Phase5Panels } from '../ui/Phase5Panels.js';
import { Phase7Panels } from '../ui/Phase7Panels.js';
import { TutorialUI } from '../ui/TutorialUI.js';
import { HomeHud } from '../ui/HomeHud.js';
import { ExpeditionHud } from '../ui/ExpeditionHud.js';
import { Home } from './Home.js';
import { Expedition } from './Expedition.js';
import { stageOf } from './Farming.js';
import { cook as cookRecipe } from '../systems/Cooking.js';
import { buy as buyGoods, sell as sellGoods } from '../systems/Shop.js';
import {
  ADE_STAMINA,
  CAT_CARE,
  EXP_GAIN,
  FISH,
  FISHING,
  FISHING_ZONES,
  FISHING_ZONE_ORDER,
  FISH_TIME,
  GOLDEN_BUFF,
  TOOLS,
  fishIn,
  fishTimeLabel,
  itemIcon,
  itemName,
} from '../systems/lifeData.js';
import { CROPS, FARMING, NEW_CROP_ORDER, PADDY_SEED_ORDER, SEEDS } from '../systems/farmData.js';
import {
  BRIDGE,
  CAMERA,
  CATS,
  DAY_SECONDS,
  DEFENSE,
  DITTOS,
  FARM,
  GATHER,
  GATHER_TYPES,
  INTERACT,
  LANDMARKS,
  PADDY,
  SAVE,
  SPAWN,
  WELCOME,
  clockLabel,
  isInvasionDay,
  phaseAt,
  weatherForDay,
} from '../config.js';
import { STRUCTURES } from '../systems/defenseData.js';
import { FURNITURE, HOUSE, ROOM, furnitureOf } from '../systems/homeData.js';
import { EXPEDITION, EXPEDITION_RESOURCES, ranToday, siteOf } from '../systems/expeditionData.js';
import { TUTORIAL_STEPS, TUTORIAL_TOTAL } from '../systems/tutorialData.js';

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
    this.life = null;
    this.fishing = null;
    this.farming = null;
    this.paddy = null;
    this.bridge = null;
    this.phase3 = null;
    this.phase4 = null;
    this.phase5 = null;
    this.phase7 = null;
    this.home = null;
    this.expedition = null;
    this.tutorialUI = null;
    this.tutorialAcc = 0;
    this.defense = null;
    this.minimap = null;
    this.achAcc = 0;
    this.welcomeAcc = 0;
    this.somiPickAcc = 0;
    this.invasionWarnedDay = 0;
    this.audioPhase = null; // 지금 BGM 이 어느 국면(아침·낮·노을·밤·방어전)인지
    this.lastMuteToggle = 0;
    this.cartSprite = null;
    this.fishTarget = null;
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
      if (this.home) this.home.fitCamera();
      if (this.expedition) this.expedition.fitCamera();
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
    // (건물 빌보드는 복구 상태 색까지 곱해야 해서 Scenery 가 직접 조명을 받는다)
    this.spriteMaterials = [
      ...this.player.sprites,
      ...this.cats.flatMap((c) => c.sprites),
      ...this.dittos.flatMap((d) => d.sprites),
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
      onHit: (kind) => {
        // 나무/바위를 한 번 두드릴 때마다 오늘의 의뢰 진행
        if (kind === 'tree') this.#event('chop', 1);
        else if (kind === 'rock') this.#event('mine', 1);
      },
      onHarvest: (kind, gains) => {
        this.#gainExp('gather', EXP_GAIN.harvest);
        // 한 그루/한 덩이를 다 캐낸 횟수 — 업적이 '두드린 횟수'와 구분해 센다
        if (kind === 'tree' || kind === 'rock' || kind === 'flower') this.progress.bump(kind, 1);
        // 6단계: 해변·숲·광맥은 종류별로 세고 오늘의 의뢰에도 반영한다
        if (kind === 'beach' || kind === 'forest' || kind === 'mine') {
          const counter = kind === 'mine' ? 'ore' : kind;
          const n = Object.values(gains || {}).reduce((a, b) => a + b, 0) || 1;
          this.progress.bump(counter, n);
          this.#event(counter, n, false);
        }
        if (gains && gains.petal) this.#event('petal', gains.petal);
        this.#refreshHud();
        this.checkAchievements();
        // 웰컴 3단계(첫 나무 베기)가 베는 즉시 넘어가도록
        this.#welcomeCheck();
      },
    };
    this.nodeMeshes = this.world.scenery.nodes.map((n) => n.mesh);
    this.siteMeshes = this.world.scenery.sites.map((s) => s.billboard.mesh);

    // ── 2단계: 부두 낚시 (찌·물결·입질) — 6단계부터 강가·다리 위에서도
    this.fishing = new Fishing({
      progress: this.progress,
      audio: this.audio,
      fx: this.fx,
      scene: this.scene,
      hud: null,
      hooks: {
        toast: (msg, ms) => this.hud && this.hud.toast(msg, ms),
        save: () => {
          if (this.mode === 'play') this.save();
        },
        /** 지금 시간대(아침·낮·노을·밤)에 맞는 어종만 물게 한다 */
        getPhase: () => phaseAt(this.state.elapsed).id,
        onCatch: (fish, size, info) => {
          this.audio.sfxCoin();
          this.#gainExp('fish', FISHING.exp);
          this.#event('fish', 1);
          const river = fish.habitat === 'river';
          if (river) {
            this.progress.bump('riverfish', 1);
            this.#event('riverfish', 1, false);
          }
          const first = this.progress.fishCount(fish.id) === 1;
          const place = river ? '민물' : '바다';
          this.hud.toast(
            `${fish.icon} ${fish.name} ${fish.id === 'star' ? '' : `${size}cm`} 낚았다! (${place})${first ? ' 도감 등록 📔' : ''}`,
            2600
          );
          this.#refreshHud();
          this.checkAchievements();
          this.save();
        },
        onStart: () => this.#refreshHud(),
      },
    });

    // ── 3단계: 북서쪽 텃밭 3×3 경작지
    this.farming = new Farming({
      terrain: this.world.terrain,
      progress: this.progress,
      fx: this.fx,
      audio: this.audio,
      hooks: {
        toast: (msg, ms) => this.hud && this.hud.toast(msg, ms),
        save: () => {
          if (this.mode === 'play') this.save();
        },
        onPlant: () => {
          this.#gainExp('farm', EXP_GAIN.plant);
          // 씨앗 심기 카운터는 Progress.plantSeed 가 이미 올렸다
          this.#event('plant', 1, false);
        },
        onWater: () => {
          this.#gainExp('farm', EXP_GAIN.water);
        },
        onHarvest: (crop, n) => {
          this.#gainExp('farm', EXP_GAIN.crop);
          // 수확 카운터는 Progress.harvestPlot 이 이미 올렸다
          this.#event('crop', 1, false);
          this.audio.sfxCoin();
        },
        /** 6단계: 성장 비료 — 농사 경험치를 조금 주고 업적을 다시 본다 */
        onFertilize: () => {
          this.#gainExp('farm', 2);
          this.checkAchievements();
        },
        onRipe: (indexes) => {
          if (!indexes.length) return;
          this.audio.sfxRare?.();
          this.hud?.toast(`✨ 텃밭에 ${indexes.length}칸이 다 자랐어요 — [수확] 할까요?`, 2600);
          this.#refreshHud();
        },
      },
    });
    this.scene.add(this.farming.group);

    // ── 4단계: 중앙 강의 다리 + 북쪽 개척권의 논
    this.bridge = new Bridge(this.world.terrain);
    this.scene.add(this.bridge.group);

    this.paddy = new Paddy({
      terrain: this.world.terrain,
      progress: this.progress,
      fx: this.fx,
      audio: this.audio,
      hooks: {
        toast: (msg, ms) => this.hud && this.hud.toast(msg, ms),
        save: () => {
          if (this.mode === 'play') this.save();
        },
        onPlant: () => {
          this.#gainExp('farm', EXP_GAIN.plant);
          this.#event('plant', 1, false);
          this.#welcomeCheck();
        },
        onWater: () => this.#gainExp('farm', EXP_GAIN.water),
        onHarvest: (crop, n) => {
          this.#gainExp('farm', EXP_GAIN.crop);
          this.#event('crop', 1, false);
          this.audio.sfxCoin();
        },
        onFertilize: () => {
          this.#gainExp('farm', 2);
          this.checkAchievements();
        },
        onRipe: (indexes) => {
          if (!indexes.length) return;
          this.audio.sfxRare?.();
          this.hud?.toast(`✨ 논에 벼 ${indexes.length}칸이 다 여물었어요 — [수확] 할까요?`, 2600);
          this.#refreshHud();
        },
      },
    });
    this.scene.add(this.paddy.group);

    // 🛒 리어카 — 보유하면 플레이어 뒤를 따라오는 작은 손수레
    this.cartSprite = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: cartTexture(), transparent: true, depthWrite: false, toneMapped: false })
    );
    this.cartSprite.scale.set(0.72, 0.72, 1);
    this.cartSprite.visible = false;
    this.cartSprite.renderOrder = 4;
    this.scene.add(this.cartSprite);
    this.spriteMaterials.push(this.cartSprite.material);

    // ── 5단계: 불청객 방어전 (슬롯 · 웨이브 · 냥이 헬퍼 · 메타몽 대피)
    this.defense = new Defense({
      scene: this.scene,
      terrain: this.world.terrain,
      progress: this.progress,
      player: this.player,
      cats: this.cats,
      dittos: this.dittos,
      fx: this.fx,
      spriteMaterials: this.spriteMaterials,
      atlases: this.atlases,
      camera: this.camera,
      hooks: {
        toast: (msg, ms) => this.hud && this.hud.toast(msg, ms),
        save: () => {
          if (this.mode === 'play') this.save();
        },
        getDiscovered: () => this.state.discovered,
        catLevel: (id) => this.progress.catRow(id).level,
        day: () => this.state.day,
        onWaveStart: () => {
          // 방어전이 시작되면 실내에 있어도 안전하게 밖으로 나온다
          if (this.home && this.home.inside) {
            this.home.exit();
            this.hud?.toast('🛡️ 수집단이 왔어요 — 집 밖으로 나왔습니다', 2600);
          }
          this.audioPhase = 'battle';
          this.audio.setPhase('battle');
          this.save();
          this.#refreshHud();
        },
        onEvacDone: () => {
          this.save();
          this.checkAchievements();
          this.#refreshHud();
        },
        onWaveEnd: (res) => this.#onDefenseEnd(res),
      },
    });

    // ── 7단계: 내 집(하우징) — 섬 위의 집 그림 + 분리된 실내 씬
    this.home = new Home({
      progress: this.progress,
      scene: this.scene,
      atlases: this.atlases,
      hooks: {
        toast: (msg, ms) => this.hud && this.hud.toast(msg, ms),
        onChange: (kind) => {
          if (kind === 'place' || kind === 'remove' || kind === 'rotate') {
            this.save();
            // 가구 목록이 열려 있었다면 보유 수를 다시 그린다
            if (this.modal && this.modal.isOpen && (this.modal.card.textContent || '').includes('가구 고르기')) this.#openModal(this.phase7.furniture());
            this.#refreshHud();
          }
        },
        onEnter: () => {
          this.hud?.joystick.setEnabled(false);
          this.#refreshHud();
        },
        onExit: () => {
          this.hud?.joystick.setEnabled(true);
          this.#applyRenderTarget();
          this.#refreshHud();
          this.save();
        },
      },
    });
    this.scene.add(this.home.exterior);
    this.spriteMaterials.push(this.home.exterior.material);
    this.player.colliders.push({ x: HOUSE.x, z: HOUSE.z, r: HOUSE.collide });

    // ── 7단계: 원정지(다른 지역) — 역시 분리된 씬
    this.expedition = new Expedition({
      progress: this.progress,
      atlases: this.atlases,
      hooks: {
        toast: (msg, ms) => this.hud && this.hud.toast(msg, ms),
        onHarvest: (info) => {
          if (info && info.res) {
            const p = this.player.position;
            if (this.fx) this.fx.float(`${info.res.icon} +${info.n}`, p.x, p.y + 1.9, p.z, '#b2698f');
          }
        },
        onReturn: (res) => this.#onExpeditionReturn(res),
      },
    });
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
      onQuest: () => this.openQuest(),
      onWelcome: () => this.openWelcome(),
      onDefense: () => this.openDefense(),
      onDefenseStart: () => this.startDefenseNow(),
      onWeapon: (kind) => this.fireWeapon(kind),
      onHelp: () => this.openHelp(),
      onExpedition: () => this.openExpedition(),
    });
    this.hud.hide();
    this.modal = new Modal(this.uiRoot);
    this.landmarkLabels = new LandmarkLabels(this.uiRoot, this.world.scenery.sites);
    this.panels = new Panels(this);
    this.life = new LifePanels(this);
    this.phase3 = new Phase3Panels(this);
    this.phase4 = new Phase4Panels(this);
    this.phase5 = new Phase5Panels(this);
    this.phase7 = new Phase7Panels(this);
    this.homeHud = new HomeHud(this.uiRoot, {
      onFurniture: () => this.openHomeFurniture(),
      onRotate: () => this.rotateHomeFurniture(),
      onPlace: () => this.confirmHomePlace(),
      onPick: () => this.pickHomeFurniture(),
      onRemove: () => this.removeHomeFurniture(),
      onExit: () => this.exitHome(),
    });
    this.expHud = new ExpeditionHud(this.uiRoot, { onReturn: () => this.returnExpedition() });
    this.tutorialUI = new TutorialUI(this.uiRoot, {
      onHelp: () => this.openHelp(),
      onNext: () => this.tutorialNext(),
      onSkip: () => this.skipTutorial(),
    });
    this.minimap = new Minimap(this.hud.container, this);
    if (this.fishing) this.fishing.hud = this.hud;
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

    // 음소거 상태를 먼저 알려 주고 시작해야, 저장된 설정이 '꺼짐'일 때 첫 음이 새어 나오지 않는다
    this.audio.setMuted(this.state.settings.muted);
    this.audio.start();
    this.audioPhase = this.defense && this.defense.waveActive ? 'battle' : phaseAt(this.state.elapsed).id;
    this.audio.setPhase(this.audioPhase);

    this.world.setWeather(weatherForDay(this.state.day));
    this.#snapCamera();
    this.#refreshHud();
    if (this.farming) this.farming.syncAll();
    if (this.paddy) this.paddy.syncAll();
    this.#syncBridge(true);
    this.#syncCart();
    this.#welcomeSync();
    if (this.defense) this.defense.sync();
    // ── 7단계: 하우징·원정은 항상 집 밖/섬에서 시작한다
    if (this.home) {
      this.home.inside = false;
      this.home.sync();
    }
    this.#applyRenderTarget();
    this.#syncTutorial(true);
    // 세이브를 복원한 직후 콜라이더(건물·나무·설비) 안에 겹쳐 있으면 밖으로 빼 준다
    // — 울타리 위에서 저장한 세이브를 새로고침해도 이동이 막히지 않는다
    const freed = this.player.unstick();
    this.checkAchievements();

    this.hud.toast(
      fromSave ? `Day ${this.state.day} — 다시 만나서 반가워요 🌿` : 'Day 1 — 섬에 도착했어요 🌿',
      2800
    );
    if (freed) this.hud.toast('🪄 끼어 있던 자리에서 살며시 빠져나왔어요', 2000);
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
    this.progress.rollQuests(1);
    this.#syncCart();
    this.#syncBridge(true);
    if (this.gathering) {
      this.gathering.applySaved({});
      this.gathering.hooks.toast = (msg, ms) => this.hud && this.hud.toast(msg, ms);
    }
    for (const cat of this.cats) cat.setFollow(false);
    if (this.fishing) this.fishing.cancel();
    if (this.fx) this.fx.clear();
    if (this.farming) this.farming.syncAll();
    if (this.paddy) this.paddy.syncAll();
    if (this.defense) {
      this.defense.releaseDittos();
      this.defense.sync();
    }
    this.#syncBuilt();
    // ── 7단계: 새 섬은 가구 한두 개를 들고 시작한다(튜토리얼 하우징 단계용)
    if (this.home) this.home.sync();
    this.tutorialAcc = 0;
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
    // 다리 위에서 저장한 세이브도 같은 자리에 서도록, 걷기 판정 전에 다리 상태를 먼저 반영한다
    setBridgeBuilt(!!(data.bridgeBuilt || (data.bridge && data.bridge.built)));
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

    // ── 2단계: 오늘의 의뢰·따라오기·낚싯줄 정리
    this.progress.rollQuests(this.state.day);
    for (const cat of this.cats) cat.setFollow(this.progress.cat(cat.id).follow);
    if (this.fishing) this.fishing.cancel();

    // ── 3단계: 텃밭 상태 · 도감 발견 수
    this.progress.discoveredCount = this.state.discovered.length;
    if (this.farming) this.farming.syncAll();

    // ── 4단계: 다리 · 리어카 · 논 · 웰컴 미션
    this.#syncBridge(true);
    this.#syncCart();
    if (this.paddy) this.paddy.syncAll();

    // ── 5단계: 방어 슬롯에 세워 둔 설비 복원
    if (this.defense) this.defense.sync();
    // ── 7단계: 가구 배치·원정 바구니·튜토리얼 단계 복원
    if (this.home) this.home.sync();
    this.#applyRenderTarget();
    this.#syncTutorial(true);
    // 복원된 설비·건물 콜라이더 안에 서 있던 세이브라면 가장 가까운 안전한 자리로
    this.player.unstick();
  }

  /** 저장된 복구 상태를 3D·이름표에 반영 */
  #syncBuilt() {
    for (const lm of LANDMARKS) {
      const done = !!this.progress.building(lm.id).done;
      this.world.scenery.setBuilt(lm.id, done, true);
      if (this.landmarkLabels) this.landmarkLabels.setDone(lm.id, done);
    }
  }

  /** 다리 상태 → Heightmap 걷기 예외 + 3D 데크 */
  #syncBridge(instant = false) {
    const built = this.progress.bridgeBuilt;
    setBridgeBuilt(built);
    if (this.bridge) this.bridge.setBuilt(built, instant);
    return built;
  }

  /** 리어카 상태 → 가방 칸 수 + 따라오는 손수레 */
  #syncCart() {
    this.progress.syncCapacity();
    if (this.cartSprite) this.cartSprite.visible = this.progress.cartLevel > 0;
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
    const away = !!(this.expedition && this.expedition.active);
    const indoor = !!(this.home && this.home.inside);
    const playing = this.mode === 'play' && !this.paused && !this.modal.isOpen && !document.hidden && !away;
    const scaledDt = playing ? dt * this.state.settings.timeScale : 0;

    if (playing) {
      this.state.elapsed += dt * this.state.settings.timeScale;
      if (this.state.elapsed >= DAY_SECONDS) {
        this.state.elapsed -= DAY_SECONDS;
        this.state.day += 1;
        this.world.setWeather(weatherForDay(this.state.day));
        const fresh = this.progress.rollQuests(this.state.day);
        if (this.defense) this.defense.onNewDay(this.state.day);
        this.hud.toast(
          fresh ? `Day ${this.state.day} — 새로운 하루 · 의뢰 2건이 새로 왔어요 📋` : `Day ${this.state.day} — 새로운 하루가 시작됐어요`,
          3000
        );
      }
    }

    // BGM 국면 — 하루의 시간대를 따라가고, 방어전 중에는 가벼운 긴장 국면으로 바뀐다
    if (playing && this.audioPhase) {
      const want = this.defense && this.defense.waveActive ? 'battle' : phaseAt(this.state.elapsed).id;
      if (want !== this.audioPhase) {
        this.audioPhase = want;
        this.audio.setPhase(want);
      }
    }

    // 5단계: 예고된 날(Day 3·6·9…) 밤이 되면 수집단이 스스로 상륙한다.
    // 노을에는 미리 알려 주고, 밤에 아직 방어하지 않았다면 웨이브를 연다(직접 시작은 언제든 가능).
    if (playing && this.defense && !this.defense.waveActive) {
      const ph = phaseAt(this.state.elapsed).id;
      const invasionToday = isInvasionDay(this.state.day) && this.progress.defense.lastRunDay !== this.state.day;
      if (ph === 'sunset' && invasionToday && this.invasionWarnedDay !== this.state.day) {
        this.invasionWarnedDay = this.state.day;
        this.hud.toast('🛡️ 노을이 짙어져요 — 밤이 되면 수집단이 옵니다', 3200);
      }
      if (ph === 'night' && invasionToday) {
        this.defense.startWave(this.state.day, 'night');
        this.hud.toast('🌙 밤이 되자 부두 앞 바다에 회색 돛이…!', 3000);
      }
    }

    // 황금 정식 버프 타이머 (모달이 열려 있으면 멈춘다)
    if (playing && this.progress.tickBuff(dt)) {
      this.hud.toast('✨ 황금 버프가 끝났어요', 2000);
    }
    this.player.speedScale = this.progress.buffActive && this.progress.buff.kind === 'golden' ? GOLDEN_BUFF.speed : 1;

    // 5단계: 방어전 — 웨이브 · 불청객 진격 · 포탑 사격 · 냥이 헬퍼
    if (this.defense) {
      // 시간 배속(10×·60×)은 방어전에도 그대로 적용된다 — 빠르게 감아 볼 때 쓴다
      this.defense.update(playing ? scaledDt : 0, playing);
      if (this.defense.waveActive) this.player.speedScale *= this.defense.speedMultiplier;
    }

    const move = this.#inputVector(playing && !indoor && !away);
    this.player.update(dt, move, this.world.terrain, this.camera);

    // 🛒 리어카가 있으면 플레이어 뒤를 살짝 따라온다
    if (this.cartSprite && this.cartSprite.visible) {
      const yaw = this.player.yaw;
      const bx = Math.sin(yaw) * 0.72 + Math.cos(yaw) * 0.34;
      const bz = Math.cos(yaw) * 0.72 - Math.sin(yaw) * 0.34;
      const bob = Math.sin(performance.now() * 0.006) * 0.02;
      this.cartSprite.position.set(this.player.position.x - bx, this.player.position.y + 0.4 + bob, this.player.position.z - bz);
    }

    for (const cat of this.cats) {
      const chase = this.defense ? this.defense.catTarget(cat.id) : null;
      cat.update(dt, this.camera, chase || this.player.position, playing);
    }
    for (const ditto of this.dittos) ditto.update(dt, this.player.position, this.camera, playing ? scaledDt : 0);

    // 채집·리젠·열매 드롭·기력 회복 (모달이 열리면 scaledDt 가 0 이라 시간이 멈춘다)
    if (this.gathering) this.gathering.update(dt, scaledDt, this.player.position, playing);

    // 솜이 서포트 — 따라다닐 때 주변 드롭(열매 등)을 대신 주워 준다
    if (playing && this.drops && this.gathering) {
      this.somiPickAcc += dt;
      if (this.somiPickAcc > 0.35) {
        this.somiPickAcc = 0;
        const somi = this.cats.find((c) => c.id === 'somi');
        if (somi && somi.follow) this.#somiPickup(somi);
      }
    }
    if (this.farming) this.farming.update(dt, scaledDt, this.camera);
    if (this.paddy) this.paddy.update(dt, scaledDt, this.camera);
    if (this.bridge) this.bridge.update(dt, this.world.palette ? this.world.palette.night : 0);
    if (this.fishing && playing) this.fishing.update(dt, this.player.position);
    if (this.fx) this.fx.update(dt, this.camera);
    // ── 7단계: 실내 가구 연출 · 원정지 진행(제한 시간·걸어가기·캐기)
    if (this.home) this.home.update(dt);
    if (this.expedition && this.expedition.active) this.expedition.update(dt);

    // 업적 조건 재검사 — 0.5초에 한 번이면 충분하다
    if (this.mode === 'play') {
      this.achAcc += dt;
      if (this.achAcc > 0.5) {
        this.achAcc = 0;
        this.checkAchievements();
      }
      // 튜토리얼 — 지금 단계의 실제 행동을 마쳤는지 확인
      this.tutorialAcc += dt;
      if (this.tutorialAcc > 0.4) {
        this.tutorialAcc = 0;
        this.#tutorialCheck();
      }
    }

    // 시간대 색을 스프라이트에 그대로 곱한다(밤에는 보랏빛으로 가라앉힘)
    for (const mat of this.spriteMaterials) mat.color.copy(this.world.spriteLight);
    this.world.scenery.setSpriteLight(this.world.spriteLight);

    if (this.mode === 'title') this.#titleCamera(dt);
    else this.#followCamera(dt);

    this.world.update(dt, this.state.elapsed, this.camera, this.player.position);
    this.landmarkLabels.update(this.camera, this.mode === 'play');

    if (this.mode === 'play') {
      if (!indoor && !away) this.#updateTarget();
      else this.target = null;
      this.hudAcc += dt;
      if (this.hudAcc > 0.14) {
        this.hudAcc = 0;
        this.#refreshHud();
        this.#welcomeCheck();
      }
      if (this.minimap) this.minimap.update(dt);
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
      this.#applyRenderTarget();
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
    if (this.home && this.home.inside) {
      this.target = null;
      return;
    }
    if (this.expedition && this.expedition.active) {
      this.target = null;
      return;
    }
    let best = null;
    let bestDist = Infinity;
    const p = this.player.position;
    this.fishTarget = null;


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

    // 텃밭 칸 — 빈 밭·자라는 밭·다 자란 밭 모두 손이 닿는다
    const plot = this.farming ? this.farming.nearest(p, INTERACT.nodeRange) : null;
    if (plot) {
      const dist = Math.hypot(plot.x - p.x, plot.z - p.z);
      if (dist < bestDist) {
        const info = this.#plotState(plot.index);
        best = { kind: 'plot', plot, index: plot.index, x: plot.x, z: plot.z, info };
        bestDist = dist;
      }
    }

    // 논 칸 — 다리 건너 개척권의 볍씨 자리
    const paddyPlot = this.paddy ? this.paddy.nearest(p, INTERACT.plotRange) : null;
    if (paddyPlot) {
      const dist = Math.hypot(paddyPlot.x - p.x, paddyPlot.z - p.z);
      if (dist < bestDist) {
        const info = this.#paddyState(paddyPlot.index);
        best = { kind: 'paddy', plot: paddyPlot, index: paddyPlot.index, x: paddyPlot.x, z: paddyPlot.z, info };
        bestDist = dist;
      }
    }

    // 다리 건축 지점 — 아직 놓지 않았을 때만 (강둑 양쪽 어느 쪽에서든)
    // 방어전 중에는 불청객이 우선이라 다른 상호작용은 대상에서 뺀다
    const inWave = !!(this.defense && this.defense.waveActive);
    if (!this.progress.bridgeBuilt && !inWave) {
      const dSouth = Math.hypot(BRIDGE.south.x - p.x, BRIDGE.south.z - p.z);
      const dNorth = Math.hypot(BRIDGE.north.x - p.x, BRIDGE.north.z - p.z);
      const dBridge = Math.min(dSouth, dNorth);
      if (dBridge <= BRIDGE.range + 0.6 && dBridge < bestDist) {
        const anchor = dSouth <= dNorth ? BRIDGE.south : BRIDGE.north;
        best = { kind: 'bridge', id: 'bridge', x: anchor.x, z: anchor.z, side: dSouth <= dNorth ? 'south' : 'north' };
        bestDist = dBridge;
      }
    }

    // 방어 슬롯 — 부두~광장 오솔길 다섯 자리 [설치/관리]
    // 방어전 중에는 불청객 쪽이 우선이라 슬롯은 대상에서 뺀다
    if (!(this.defense && this.defense.waveActive)) {
      let bestSlot = -1;
      let bestSlotD = DEFENSE.slotRange;
      DEFENSE.slots.forEach((slot, i) => {
        const d = Math.hypot(slot.x - p.x, slot.z - p.z);
        if (d < bestSlotD) {
          bestSlotD = d;
          bestSlot = i;
        }
      });
      if (bestSlot >= 0 && bestSlotD < bestDist) {
        const slot = DEFENSE.slots[bestSlot];
        best = { kind: 'defense_slot', index: bestSlot, x: slot.x, z: slot.z };
        bestDist = bestSlotD;
      }
    }

    // 🏠 내 집 문 앞 — [들어가기]. 방어전 중에는 집에 들어가지 않는다
    if (!inWave) {
      const dHome = Math.hypot(HOUSE.door.x - p.x, HOUSE.door.z - p.z);
      if (dHome <= HOUSE.range && dHome < bestDist) {
        best = { kind: 'home', id: 'home', x: HOUSE.door.x, z: HOUSE.door.z };
        bestDist = dHome;
      }
    }

    // 복구 부지 — 공방은 창고 메뉴를 연다
    const site = inWave ? null : this.#nearestSite(p, INTERACT.siteRange);
    if (site) {
      const dist = Math.hypot(site.x - p.x, site.z - p.z);
      if (dist < bestDist) {
        best = site;
        bestDist = dist;
      }
    }

    // 낚시 자리 — 부두(바다)·강가·다리 위(민물). 복구 전에는 복구 안내를 보여 준다
    if (!inWave) {
      for (const zoneId of FISHING_ZONE_ORDER) {
        const zone = FISHING_ZONES[zoneId];
        // 다리 위 자리는 다리를 놓아야 데크에 설 수 있으니 완성 뒤에만 대상이 된다
        if (zone.need === 'bridge' && !this.progress.bridgeBuilt) continue;
        const fdist = Math.hypot(zone.spot.x - p.x, zone.spot.z - p.z);
        if (fdist > zone.spot.range) continue;
        const ready = zone.need === 'dock' ? !!this.progress.building('dock').done : zone.need === 'bridge' ? this.progress.bridgeBuilt : true;
        if (fdist < bestDist) {
          this.fishTarget = {
            kind: 'fish',
            id: `fish_${zone.id}`,
            zone: zone.id,
            name: zone.name,
            x: zone.spot.x,
            z: zone.spot.z,
            built: ready,
          };
          best = this.fishTarget;
          bestDist = fdist;
        }
      }
    }

    // 5단계: 방어전 중에는 가장 가까운 불청객이 액션 대상 1순위 — 액션 버튼이 새총이 된다
    if (this.defense && this.defense.waveActive) {
      const raider = this.defense.nearestRaider(p, 6.5);
      if (raider) {
        this.target = { kind: 'raider', raider, x: raider.x, z: raider.z };
        return;
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

    // 원정지에서는 액션 버튼이 가까운 자원 캐기
    if (this.expedition && this.expedition.active) {
      const res = this.expedition.collectNearby();
      if (!res.ok) this.hud.toast('가까이에 캘 자원이 없어요 — 자원을 탭해 걸어가 보세요', 1800);
      return;
    }

    // 실내에서는 액션 버튼이 놓기/회전/나가기
    if (this.home && this.home.inside) {
      if (this.home.ghost) return this.confirmHomePlace();
      if (this.home.selected >= 0) return this.rotateHomeFurniture();
      return this.exitHome();
    }

    // 낚시 중에는 액션 버튼이 곧 찌 당기기
    if (this.fishing && this.fishing.active) {
      this.fishing.reel();
      this.#refreshHud();
      return;
    }

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
    if (t.kind === 'raider') {
      const res = this.defense.fire('sling');
      if (!res.ok) this.audio.sfxDeny();
      this.#refreshHud();
      return;
    }
    if (t.kind === 'plot') {
      this.#touchPlot(t.index);
      return;
    }
    if (t.kind === 'paddy') {
      this.#touchPaddy(t.index);
      return;
    }
    if (t.kind === 'bridge') {
      this.openBridge();
      return;
    }
    if (t.kind === 'defense_slot') {
      this.openDefenseSlot(t.index);
      return;
    }
    if (t.kind === 'home') {
      this.enterHome();
      return;
    }
    if (t.kind === 'site') {
      this.#openSite(t);
      return;
    }
    if (t.kind === 'fish') {
      this.openFishSpot(t.zone);
      return;
    }
    this.#activateActor(t);
  }

  #openSite(site) {
    if (site.id === 'workshop') this.#openModal(this.panels.workshopMenu());
    else if (site.id === 'vending' && this.progress.building('vending').done) this.openVending();
    else this.#openModal(this.panels.build(site.id));
  }

  #activateActor(actor) {
    if (actor.kind === 'ditto') this.#discoverDitto(actor);
    else if (actor.kind === 'cat') this.openCat(actor.id);
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
      this.checkAchievements();
      this.#welcomeCheck();
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

    // 원정지 — 자원이나 바닥을 탭하면 주인공이 걸어간다
    if (this.expedition && this.expedition.active) {
      this.expedition.tap(e.clientX, e.clientY);
      return;
    }

    // 실내 — 유령 가구 이동 / 놓인 가구 선택
    if (this.home && this.home.inside) {
      const res = this.home.onTap(e.clientX, e.clientY);
      if (res && res.kind === 'select') this.#refreshHud();
      if (res && res.kind === 'ghost') this.#refreshHud();
      return;
    }

    // 낚시 중 화면 탭 = 찌 당기기 (대상 판정보다 먼저)
    if (this.fishing && this.fishing.active) {
      this.fishing.reel();
      this.#refreshHud();
      return;
    }

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
      ...(this.defense ? this.defense.rayTargets() : []),
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
      else if (data.raider) found = { kind: 'raider', raider: data.raider };
      else if (data.actor) found = { kind: 'actor', actor: data.actor };
      obj = obj.parent;
    }
    if (!found) return;

    const p = this.player.position;
    const near = (x, z) => Math.hypot(x - p.x, z - p.z);

    if (found.kind === 'raider') {
      // 불청객을 톡 누르면 그쪽으로 새총을 쏜다
      const res = this.defense.fire('sling');
      if (!res.ok) this.hud.toast(res.reason === 'cooldown' ? '새총을 다시 장전하는 중…' : '조금 더 가까이 가서 쏠까요?', 1500);
      this.#refreshHud();
      return;
    }

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
    this.hud.setBag(this.progress.inventory.usedSlots(), this.progress.inventory.slots);
    this.hud.setCoins(this.progress.coins);
    this.hud.setCart(this.progress.cartLevel, this.progress.inventory.slots);
    this.hud.setQuests(this.progress.claimableQuests);
    this.hud.setBuff(this.progress.buffActive ? `✨ ${Math.ceil(this.progress.buff.left)}s` : null);
    this.hud.setAchievements(this.progress.claimableAchievements);
    this.hud.setRipePlots(this.progress.farmPlots.filter((st) => st && st.remain <= 0).length);
    this.#refreshDefenseHud();
    if (this.defense && this.defense.waveActive) this.tutorialUI.hide();

    // ── 7단계: 실내 조작 바
    if (this.home && this.home.inside) {
      const st = this.home.state();
      const sel = st.selected >= 0 ? st.placed[st.selected] : null;
      const selDef = sel ? FURNITURE[sel.id] : null;
      const ghostDef = st.ghost ? FURNITURE[st.ghost.id] : null;
      this.homeHud.show();
      this.homeHud.update({
        ghost: ghostDef ? { name: ghostDef.name } : null,
        selected: sel,
        selectedName: selDef ? selDef.name : '',
        placedCount: st.placedCount,
      });
      this.hud.setDefense({ banner: null, wave: null, weapons: null });
      this.expHud.hide();
      this.tutorialUI.hide();
      if (ghostDef) this.hud.setAction({ active: true, icon: '🪑', label: `${ghostDef.name} 놓기` });
      else if (selDef) this.hud.setAction({ active: true, icon: '🔄', label: `${selDef.name} 회전` });
      else this.hud.setAction({ active: true, icon: '🚪', label: '나가기' });
      return;
    }
    this.homeHud.hide();

    // ── 7단계: 원정지 머리 띠
    if (this.expedition && this.expedition.active) {
      const es = this.expedition.state();
      const site = siteOf(es.site);
      this.expHud.show();
      this.expHud.update({ siteName: site ? site.name : '', icon: site ? site.icon : '', timer: es.timer, collected: es.collected });
      this.hud.setDefense({ banner: null, wave: null, weapons: null });
      this.tutorialUI.hide();
      this.hud.setAction({ active: true, icon: '🧺', label: '자원 캐기' });
      return;
    }
    this.expHud.hide();

    // 낚시 중에는 액션 버튼이 낚시 하나만 가리킨다
    if (this.fishing && this.fishing.active) {
      const st = this.fishing.state;
      if (st === 'bite') this.hud.setAction({ active: true, icon: '🎣', label: '입질! 탭!' });
      else if (st === 'cast' || st === 'wait') this.hud.setAction({ active: true, icon: '🎣', label: '회수하기' });
      else this.hud.setAction({ active: false, icon: '🎣', label: '낚시 마무리' });
      return;
    }

    const t = this.target;
    if (this.defense && this.defense.waveActive && t && t.kind === 'raider') {
      this.hud.setAction({ active: true, icon: '🪃', label: '새총 쏘기' });
    } else if (t && t.kind === 'ditto') {
      this.hud.setAction({
        active: true,
        icon: t.discovered ? '👀' : '🔍',
        label: t.discovered ? '다시 보기' : '살펴보기',
      });
    } else if (t && t.kind === 'cat') {
      this.hud.setAction({ active: true, icon: '🐾', label: '돌보기' });
    } else if (t && t.kind === 'fish') {
      const zone = FISHING_ZONES[t.zone] || FISHING_ZONES.sea;
      this.hud.setAction(
        t.built
          ? { active: true, icon: zone.icon, label: zone.habitat === 'river' ? '강 낚시하기' : '낚시하기' }
          : { active: true, icon: zone.icon, label: zone.needLabel || '복구 필요' }
      );
    } else if (t && t.isNode) {
      const def = HARVEST[t.kind];
      this.hud.setAction({ active: true, icon: def.icon, label: `${def.verb} ${t.hitsLeft}/${t.hitsNeeded}` });
    } else if (t && t.kind === 'plot') {
      const info = this.#plotState(t.index);
      if (info.state === 'empty') this.hud.setAction({ active: true, icon: '🌱', label: '씨앗 심기' });
      else if (info.state === 'ripe') this.hud.setAction({ active: true, icon: '🧺', label: '수확하기' });
      else if (info.st.watered < FARMING.maxWater)
        this.hud.setAction({ active: true, icon: '💧', label: `물주기 ${Math.ceil(info.st.remain)}초` });
      else this.hud.setAction({ active: false, icon: '🌱', label: `${Math.ceil(info.st.remain)}초 뒤 수확` });
    } else if (t && t.kind === 'paddy') {
      const info = this.#paddyState(t.index);
      if (info.state === 'empty') this.hud.setAction({ active: true, icon: '🌾', label: '볍씨 심기' });
      else if (info.state === 'ripe') this.hud.setAction({ active: true, icon: '🧺', label: '벼 수확하기' });
      else if (info.st.watered < FARMING.maxWater)
        this.hud.setAction({ active: true, icon: '💧', label: `물주기 ${Math.ceil(info.st.remain)}초` });
      else this.hud.setAction({ active: false, icon: '🌾', label: `${Math.ceil(info.st.remain)}초 뒤 수확` });
    } else if (t && t.kind === 'bridge') {
      this.hud.setAction({ active: true, icon: '🌉', label: '다리 놓기' });
    } else if (t && t.kind === 'defense_slot') {
      const st = this.defense ? this.defense.structureAt(t.index) : null;
      this.hud.setAction(
        st
          ? { active: true, icon: st.def.icon, label: `${t.index + 1}번 슬롯 관리` }
          : { active: true, icon: '➕', label: `${t.index + 1}번 슬롯 설치` }
      );
    } else if (t && t.kind === 'home') {
      this.hud.setAction({ active: true, icon: '🏠', label: '집에 들어가기' });
    } else if (t && t.kind === 'site') {
      const built = !!this.progress.building(t.id).done;
      const openLabel = t.id === 'workshop' ? '공방 열기' : t.id === 'vending' ? '자판기 열기' : `${t.name} 살펴보기`;
      this.hud.setAction({
        active: true,
        icon: t.id === 'workshop' && built ? '🔨' : t.id === 'vending' && built ? '🥤' : built ? '✨' : t.icon,
        label: built ? openLabel : `${t.name} 복구하기`,
      });
    } else {
      this.hud.setAction({ active: false, icon: '✋', label: '둘러보기' });
    }
  }

  /** 5단계 HUD — 예고 배너 · 웨이브 스트립 · 무기 버튼을 한 번에 맞춘다 */
  #refreshDefenseHud() {
    if (!this.hud || !this.defense) return;
    const d = this.defense;
    const wave = d.waveState();
    let banner = null;
    if (!wave) {
      const ranToday = this.progress.defense.lastRunDay === this.state.day;
      const today = isInvasionDay(this.state.day);
      const until = DEFENSE.periodDays - (this.state.day % DEFENSE.periodDays);
      const text = today
        ? ranToday
          ? '오늘 밤 방어 완료 · 슬롯 관리'
          : '오늘 밤 수집단 상륙 예정 · 준비하기'
        : `D-${until} 수집단 상륙 · 방어 준비`;
      banner = { text, go: !wave };
    }
    const weapons = wave
      ? { ammo: d.ammo, sling: d.slingCd <= 0, balloon: d.balloonCd <= 0 }
      : null;
    this.hud.setDefense({ banner, wave, weapons });
  }

  /** 안 읽은 편지 + 아직 안 받은 선물을 한 통으로 센다 */
  #mailBadgeCount() {    let n = 0;
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
    // 손가락이 두 번 튕겨 켜자마자 꺼지는 일을 막는다(200ms)
    const now = performance.now();
    if (now - this.lastMuteToggle < 200) return this.state.settings.muted;
    this.lastMuteToggle = now;

    this.state.settings.muted = !this.state.settings.muted;
    const muted = this.state.settings.muted;
    this.audio.setMuted(muted);
    this.hud.setMuted(muted);
    // 버튼이 눌렸다는 걸 눈으로도 확인할 수 있게 — 화면에 바로 알려 준다
    this.hud.toast(muted ? '🔇 소리를 껐어요' : '🔊 소리를 켰어요', 1400);
    // 새로고침·다음 실행에도 그대로 유지되도록 바로 저장
    if (this.mode === 'play') this.save();
    return muted;
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
        { label: '📖 도움말', kind: 'ghost', onClick: () => this.openHelp() },
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

    if (id === 'codex') return this.openCodex();
    if (id === 'rank') return this.openRank();
    if (id === 'bag') return this.openBag();
    if (id === 'farm') return this.openFarm();
    if (id === 'help') return this.openHelp();
    if (id !== 'build') return;

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
      const bst = this.progress.bridgeState();
      const bReady = Object.entries(BRIDGE_RECIPE).every(([item, need]) => (bst.invested[item] || 0) >= need);
      const bIn = Object.entries(BRIDGE_RECIPE).reduce((a, [item, need]) => a + Math.min(need, bst.invested[item] || 0), 0);
      const bTotal = Object.values(BRIDGE_RECIPE).reduce((a, b) => a + b, 0);
      list.append(
        h(
          'button',
          { class: `site-item as-button ${bst.built ? 'done' : ''}`, type: 'button', onclick: () => this.openBridge() },
          h('div', { class: 'site-ico' }, bst.built ? '✨' : '🌉'),
          h(
            'div',
            { style: { flex: '1' } },
            h('div', { class: 'site-name' }, '다리 (강 건너 개척권)'),
            h('div', { class: 'site-meta' }, bst.built ? '건널 수 있어요' : bReady ? '재료가 모였어요' : `재료 ${bIn}/${bTotal} 투입`)
          ),
          h('span', { class: 'hint' }, bst.built ? '완성' : '놓기')
        )
      );
      this.#openModal({
        title: '섬 건축',
        subtitle: `네 곳 중 ${doneCount}곳 복구 · 다리 ${bst.built ? '완성' : '미완성'}`,
        body: h(
          'div',
          {},
          list,
          h('div', { class: 'section-label' }, 'Tip'),
          h('div', { class: 'hint' }, 'Day 를 기다릴 필요 없어요 — 재료만 모이면 Day 1에도 바로 복구합니다. 공방을 복구하면 창고가 열려요.')
        ),
        actions: [{ label: '닫기', kind: 'primary', onClick: () => this.modal.close() }],
      });
      return;
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
    this.questSource = 'mail';
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
      setTimeout(() => this.hud.toast('공방이 열렸어요 — 창고·요리·도구 강화를 쓸 수 있어요 📦', 3000), 900);
    } else if (id === 'dock') {
      setTimeout(() => this.hud.toast('부두 끝에서 [낚시하기] — 찌를 던져 볼까요? 🎣', 3000), 900);
    } else if (id === 'vending') {
      setTimeout(() => this.hud.toast('자판기가 켜졌어요 — 재료와 물고기를 팔고 물건을 살 수 있어요 🥤', 3000), 900);
    }
    this.save();
    this.#refreshHud();
    this.checkAchievements();
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
      // 씨앗처럼 가방(8칸)이 아니라 supplies 로 들어가는 선물
      if (!ITEMS[id]) {
        if (SEEDS[id]) {
          this.progress.addSupply(id, n);
          given += n;
        }
        continue;
      }
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
    this.#welcomeCheck();
    this.#openModal(this.panels.mailbox(letterId));
    return true;
  }

  /* ── 2단계: 낚시 · 요리 · 상점 · 랭크 · 고양이 ─────────── */

  paintDittoThumb(el, thumb) {
    this.#paintThumb(el, thumb);
  }

  /** 생활 스킬 EXP — 랭크가 오르면 팡파르와 문구 */
  #gainExp(id, amount) {
    const res = this.progress.gainExp(id, amount);
    if (res.rankedUp) this.#rankUpToast(id, res.rank);
    this.#refreshHud();
    return res;
  }

  #rankUpToast(id, rank) {
    const row = this.progress.skills.row(id);
    this.audio.sfxFanfare();
    this.hud.toast(`🌱 ${row.name} 랭크 업! ${rank || row.rank}`, 2800);
    const p = this.player.position;
    if (this.fx) this.fx.float(`${row.icon} ${rank || row.rank}`, p.x, p.y + 1.9, p.z, '#b2698f');
  }

  /** 의뢰 진행 — 목표를 채우면 바로 알려 준다 (카운터는 호출자가 이미 올린 경우 bump=false) */
  #questEvent(event, amount = 1, bump = true) {
    const done = this.progress.questEvent(event, amount);
    if (bump) this.progress.bump(event, amount);
    if (done.length) {
      this.audio.sfxCoin();
      this.hud.toast(
        `📋 의뢰 달성 — ${done.map((q) => q.label).join(' · ')} · 우체통에서 보상 받기`,
        3000
      );
    }
    this.#refreshHud();
    this.checkAchievements();
    return done;
  }

  /** 의뢰·업적 카운터를 함께 올리는 짧은 이름 (채집·낚시 훅에서 쓴다) */
  #event(name, amount = 1, bump = true) {
    return this.#questEvent(name, amount, bump);
  }

  openCodex() {
    if (this.mode !== 'play') return;
    this.#openModal(this.life.codex());
  }

  openRank() {
    if (this.mode !== 'play') return;
    this.#openModal(this.life.rank());
  }

  openQuest() {
    if (this.mode !== 'play') return;
    this.questSource = 'quest';
    this.#openModal(this.life.quests());
  }

  openVending() {
    if (this.mode !== 'play') return;
    if (!this.progress.building('vending').done) {
      this.audio.sfxDeny();
      this.hud.toast('자판기를 먼저 복구해야 열려요 🥤', 2200);
      this.#openModal(this.panels.build('vending'));
      return;
    }
    this.#openModal(this.life.vending());
  }

  openCooking() {
    if (this.mode !== 'play') return;
    if (!this.progress.building('workshop').done) {
      this.audio.sfxDeny();
      this.hud.toast('공방을 먼저 복구해야 요리할 수 있어요 🔨', 2200);
      this.#openModal(this.panels.build('workshop'));
      return;
    }
    this.#openModal(this.life.cooking());
  }

  openUpgrade() {
    if (this.mode !== 'play') return;
    if (!this.progress.building('workshop').done) {
      this.audio.sfxDeny();
      this.hud.toast('공방을 먼저 복구해야 도구를 강화할 수 있어요 🔨', 2200);
      return;
    }
    this.#openModal(this.life.upgrade());
  }

  openCat(catId) {
    if (this.mode !== 'play') return;
    this.#openModal(this.life.cat(catId));
  }

  /* ── 3단계: 텃밭 · 업적 · 지도 ─────────────────────── */

  /** 텃밭 한 칸의 지금 상태 — 액션 라벨·패널·퀵버튼이 같이 본다 */
  #plotState(index) {
    const st = this.progress.plot(index);
    if (!st) return { state: 'empty', st: null, stage: -1, pct: 0, crop: null };
    const crop = CROPS[st.crop];
    const stage = stageOf(st);
    return {
      state: st.remain > 0 ? 'grow' : 'ripe',
      st,
      stage,
      crop,
      pct: Math.round((1 - st.remain / Math.max(1, st.total)) * 100),
    };
  }

  openFarm() {
    if (this.mode !== 'play') return;
    this.#openModal(this.phase3.farm());
  }

  openSeedPicker(index) {
    if (this.mode !== 'play') return;
    this.#openModal(this.phase3.seedPicker(index));
  }

  openAchievements() {
    if (this.mode !== 'play') return;
    this.#openModal(this.phase3.achievements());
  }

  openMinimap() {
    if (this.mode !== 'play') return;
    if (!this.minimap) return;
    this.#openModal({
      title: '🗺️ 섬 지도',
      subtitle: '사각 섬 72×72 — 강과 다리, 남쪽 생활권과 북쪽 개척권',
      body: this.minimap.modalBody(),
      actions: [{ label: '닫기', kind: 'primary', onClick: () => this.modal.close() }],
    });
  }

  /** 빈 밭을 손으로 눌렀을 때 — 상태에 따라 심기/물주기/수확 */
  #touchPlot(index) {
    const info = this.#plotState(index);
    if (info.state === 'empty') return this.openSeedPicker(index);
    if (info.state === 'ripe') return this.harvestPlot(index);
    return this.waterPlot(index);
  }

  plantPlot(index, cropId) {
    if (!this.farming) return false;
    const plot = this.farming.plotByIndex(index);
    const res = this.farming.plant(plot, cropId);
    if (!res.ok) {
      this.audio.sfxDeny();
      const msg =
        res.reason === 'seed'
          ? '그 씨앗이 없어요 — 자판기 [사기] 탭에서 사 올까요? 🌱'
          : res.reason === 'occupied'
            ? '이미 자라고 있는 밭이에요'
            : '지금은 심을 수 없어요';
      this.hud.toast(msg, 2200);
      if (this.modal.isOpen) this.#openModal(this.phase3.seedPicker(index));
      return false;
    }
    this.#refreshHud();
    if (this.modal.isOpen) this.#openModal(this.phase3.farm());
    return true;
  }

  waterPlot(index) {
    if (!this.farming) return false;
    const plot = this.farming.plotByIndex(index);
    const level = this.progress.toolLevel('water');
    const res = this.farming.water(plot, level);
    if (!res.ok) {
      this.audio.sfxDeny();
      const msg =
        res.reason === 'stamina'
          ? `기력이 부족해요 — 물주기에 ${res.cost} 필요해요 💪`
          : res.reason === 'max'
            ? '물을 줄 만큼 준 밭이에요 — 이제 기다리면 익어요'
            : '지금은 물을 줄 밭이 없어요';
      this.hud.toast(msg, 2200);
    } else {
      this.hud.toast(`💧 ${res.watered}칸에 물을 줬어요 — 남은 시간 절반! (기력 -${res.cost})`, 2300);
    }
    this.#refreshHud();
    if (this.modal.isOpen) this.#openModal(this.phase3.farm());
    return res.ok;
  }

  harvestPlot(index) {
    if (!this.farming) return false;
    const plot = this.farming.plotByIndex(index);
    const res = this.farming.harvest(plot);
    if (!res.ok) {
      this.audio.sfxDeny();
      this.hud.toast(res.reason === 'growing' ? '아직 덜 자랐어요 — 조금만 기다려요 🌱' : '빈 밭이에요', 2000);
    }
    this.#refreshHud();
    if (this.modal.isOpen) this.#openModal(this.phase3.farm());
    return res.ok;
  }

  /** 6단계: 성장 비료 — 텃밭 한 칸 */
  fertilizePlot(index) {
    if (!this.farming) return false;
    const plot = this.farming.plotByIndex(index);
    if (!plot) return false;
    const res = this.farming.fertilize(plot);
    if (!res.ok) {
      this.audio.sfxDeny();
      const msg =
        res.reason === 'no-fertilizer'
          ? '성장 비료가 없어요 — 자판기 [사기] 탭에서 40코인에 살 수 있어요 🧪'
          : res.reason === 'max'
            ? '이 칸에는 비료를 다 줬어요 — 다시 자라는 걸 기다려요'
            : res.reason === 'ripe'
              ? '이미 다 자랐어요 — [수확] 해 주세요 🧺'
              : '지금은 비료를 줄 수 없어요';
      this.hud.toast(msg, 2300);
    }
    this.#refreshHud();
    if (this.modal.isOpen) this.#openModal(this.phase3.farm());
    return res.ok;
  }

  /* ── 4단계: 다리 · 논 · 리어카 · 웰컴 미션 ────────── */

  /** 논 한 칸의 지금 상태 — 액션 라벨·패널이 같이 본다 */
  #paddyState(index) {
    const st = this.progress.paddyPlot(index);
    if (!st) return { state: 'empty', st: null, stage: -1, pct: 0, crop: null };
    const crop = CROPS[st.crop];
    const stage = stageOf(st);
    return {
      state: st.remain > 0 ? 'grow' : 'ripe',
      st,
      stage,
      crop,
      pct: Math.round((1 - st.remain / Math.max(1, st.total)) * 100),
    };
  }

  /* ── 🌉 다리 ──────────────────────────────────────── */

  openBridge() {
    if (this.mode !== 'play') return;
    this.#openModal(this.phase4.bridge());
  }

  /** 재료를 모자란 만큼 한 번에 넣는다 */
  investBridge() {
    const st = this.progress.bridgeState();
    const inv = this.progress.inventory;
    let added = 0;
    for (const [item, need] of Object.entries(BRIDGE_RECIPE)) {
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
      if (this.fx) this.fx.burst(BRIDGE.x, BRIDGE.deckY + 0.7, BRIDGE.z + BRIDGE.halfSpan - 0.6, '#ffe3b0', 12, { spread: 1.6, up: 2.2 });
      this.save();
      this.#refreshHud();
      this.#openModal(this.phase4.bridge());
    } else {
      this.audio.sfxDeny();
      this.hud.toast('넣을 재료가 부족해요 — 통나무와 돌을 모아 올까요? 🪓', 2200);
    }
  }

  /** 다리 완성 — 데크가 놓이고 그 위를 걸어 북쪽 개척권으로 건넌다 */
  completeBridge() {
    const st = this.progress.bridgeState();
    const ready = Object.entries(BRIDGE_RECIPE).every(([item, need]) => (st.invested[item] || 0) >= need);
    if (!ready || st.built) return false;

    st.built = true;
    st.invested = {};
    this.#syncBridge(false);
    this.audio.sfxFanfare();
    if (this.fx) {
      this.fx.burst(BRIDGE.x, BRIDGE.deckY + 0.8, BRIDGE.z, '#ffe6a8', 34, { spread: 3.2, up: 4.0, size: 1.3 });
      this.fx.float('다리 완성!', BRIDGE.x, BRIDGE.deckY + 1.6, BRIDGE.z + 1.4, '#b2698f');
    }
    this.hud.toast('🌉 다리가 놓였어요 — 이제 북쪽 숲·채석장·논으로 걸어서 건널 수 있어요!', 3400);
    this.save();
    this.#refreshHud();
    this.checkAchievements();
    this.#welcomeCheck();
    this.#openModal(this.phase4.bridge());
    return true;
  }

  /* ── 🌾 논 ────────────────────────────────────────── */

  openPaddy() {
    if (this.mode !== 'play') return;
    this.#openModal(this.phase4.paddy());
  }

  openPaddySeedPicker(index) {
    if (this.mode !== 'play') return;
    this.#openModal(this.phase4.paddySeedPicker(index));
  }

  /** 논 한 칸을 눌렀을 때 — 비었으면 볍씨, 다 자랐으면 수확, 아니면 물주기 */
  #touchPaddy(index) {
    const info = this.#paddyState(index);
    if (info.state === 'empty') return this.openPaddySeedPicker(index);
    if (info.state === 'ripe') return this.harvestPaddy(index);
    return this.waterPaddy(index);
  }

  plantPaddy(index, cropId = 'rice') {
    if (!this.paddy) return false;
    const plot = this.paddy.plotByIndex(index);
    const res = this.paddy.plant(plot, cropId);
    if (!res.ok) {
      this.audio.sfxDeny();
      const msg =
        res.reason === 'seed'
          ? '볍씨가 없어요 — 자판기 [사기] 탭에서 사 올까요? 🌾'
          : res.reason === 'occupied'
            ? '이미 벼가 자라고 있는 논이에요'
            : '지금은 심을 수 없어요';
      this.hud.toast(msg, 2200);
      if (this.modal.isOpen) this.#openModal(this.phase4.paddySeedPicker(index));
      return false;
    }
    this.#refreshHud();
    if (this.modal.isOpen) this.#openModal(this.phase4.paddy());
    return true;
  }

  waterPaddy(index) {
    if (!this.paddy) return false;
    const plot = this.paddy.plotByIndex(index);
    const level = this.progress.toolLevel('water');
    const res = this.paddy.water(plot, level);
    if (!res.ok) {
      this.audio.sfxDeny();
      const msg =
        res.reason === 'stamina'
          ? `기력이 부족해요 — 물주기에 ${res.cost} 필요해요 💪`
          : res.reason === 'max'
            ? '물을 줄 만큼 준 논이에요 — 이제 기다리면 여물어요'
            : '지금은 물을 줄 논이 없어요';
      this.hud.toast(msg, 2200);
    } else {
      this.hud.toast(`💧 논 ${res.watered}칸에 물을 댔어요 — 남은 시간 절반! (기력 -${res.cost})`, 2300);
    }
    this.#refreshHud();
    if (this.modal.isOpen) this.#openModal(this.phase4.paddy());
    return res.ok;
  }

  harvestPaddy(index) {
    if (!this.paddy) return false;
    const plot = this.paddy.plotByIndex(index);
    const res = this.paddy.harvest(plot);
    if (!res.ok) {
      this.audio.sfxDeny();
      this.hud.toast(res.reason === 'growing' ? '아직 덜 여물었어요 — 조금만 기다려요 🌾' : '빈 논이에요', 2000);
    }
    this.#refreshHud();
    if (this.modal.isOpen) this.#openModal(this.phase4.paddy());
    return res.ok;
  }

  /** 6단계: 성장 비료 — 논 한 칸 */
  fertilizePaddy(index) {
    if (!this.paddy) return false;
    const plot = this.paddy.plotByIndex(index);
    if (!plot) return false;
    const res = this.paddy.fertilize(plot);
    if (!res.ok) {
      this.audio.sfxDeny();
      const msg =
        res.reason === 'no-fertilizer'
          ? '성장 비료가 없어요 — 자판기 [사기] 탭에서 40코인에 살 수 있어요 🧪'
          : res.reason === 'max'
            ? '이 칸에는 비료를 다 줬어요 — 다시 여무는 걸 기다려요'
            : res.reason === 'ripe'
              ? '이미 다 여물었어요 — [수확] 해 주세요 🧺'
              : '지금은 비료를 줄 수 없어요';
      this.hud.toast(msg, 2300);
    }
    this.#refreshHud();
    if (this.modal.isOpen) this.#openModal(this.phase4.paddy());
    return res.ok;
  }

  /* ── 🛒 리어카 ────────────────────────────────────── */

  /** 리어카 제작 가능 여부 — 공방 복구 + 재료·코인 */
  canBuildCart() {
    if (this.progress.cartLevel >= CART.maxLevel) return { ok: false, reason: 'max', lack: [] };
    if (!this.progress.building('workshop').done) return { ok: false, reason: 'workshop', lack: [] };
    const lack = [];
    for (const [id, need] of Object.entries(CART.cost)) {
      const have = id === 'coin' ? this.progress.coins : this.progress.inventory.count(id);
      if (have < need) lack.push({ id, need, have });
    }
    return { ok: lack.length === 0, reason: lack.length ? 'lack' : '', lack };
  }

  openCart() {
    if (this.mode !== 'play') return;
    this.#openModal(this.phase4.cart());
  }

  buildCart() {
    const check = this.canBuildCart();
    if (!check.ok) {
      this.audio.sfxDeny();
      const msg =
        check.reason === 'max'
          ? '이미 리어카가 있어요 🛒'
          : check.reason === 'workshop'
            ? '공방을 먼저 복구해야 리어카를 만들 수 있어요 🔨'
            : '재료나 코인이 부족해요 🪙';
      this.hud.toast(msg, 2400);
      if (this.modal.isOpen) this.#openModal(this.phase4.cart());
      return false;
    }
    for (const [id, need] of Object.entries(CART.cost)) {
      if (id === 'coin') this.progress.spendCoins(need);
      else this.progress.inventory.take(id, need);
    }
    this.progress.cartLevel = 1;
    this.#syncCart();
    this.audio.sfxBuild();
    const p = this.player.position;
    if (this.fx) {
      this.fx.burst(p.x, p.y + 0.9, p.z, '#ffe3b0', 20, { spread: 1.6, up: 2.6 });
      this.fx.float('🛒 리어카 완성', p.x, p.y + 2.0, p.z, '#b2698f');
    }
    this.hud.toast(`🛒 리어카 완성 — 가방이 ${BAG.slots}칸 → ${this.progress.inventory.slots}칸으로 늘었어요!`, 3200);
    this.save();
    this.#refreshHud();
    this.checkAchievements();
    if (this.modal.isOpen) this.#openModal(this.phase4.cart());
    return true;
  }

  /* ── 7단계: 🏠 하우징 ────────────────────────────── */

  /** 후처리 RenderPass 의 무대를 월드 → 실내 / 원정지로 바꾼다 */
  #applyRenderTarget() {
    if (!this.post || !this.post.renderPass) return;
    const rp = this.post.renderPass;
    if (this.home && this.home.inside) {
      rp.scene = this.home.room;
      rp.camera = this.home.camera;
      return;
    }
    if (this.expedition && this.expedition.active) {
      rp.scene = this.expedition.scene;
      rp.camera = this.expedition.camera;
      return;
    }
    rp.scene = this.scene;
    rp.camera = this.camera;
  }

  enterHome() {
    if (this.mode !== 'play' || !this.home) return false;
    if (this.defense && this.defense.waveActive) {
      this.audio.sfxDeny();
      this.hud.toast('🛡️ 방어전 중에는 집에 들어갈 수 없어요', 2000);
      return false;
    }
    if (this.expedition && this.expedition.active) return false;
    if (this.modal.isOpen) this.modal.close();
    const ok = this.home.enter();
    if (!ok) return false;
    this.paused = false;
    this.hud.joystick.reset();
    this.#applyRenderTarget();
    this.#refreshHud();
    this.save();
    return true;
  }

  exitHome() {
    if (!this.home || !this.home.inside) return false;
    this.home.exit();
    // 문 앞 잔디로 나온다 — 문 앞이 막혔으면 조금 남쪽으로
    const door = HOUSE.door;
    const tx = this.world.terrain.isWalkable(door.x, door.z + 0.4) ? door.x : door.x - 1.2;
    const tz = this.world.terrain.isWalkable(door.x, door.z + 0.4) ? door.z + 0.4 : door.z + 1.0;
    this.player.teleport(tx, tz);
    this.player.setYaw(Math.PI);
    this.#snapCamera();
    this.#applyRenderTarget();
    this.hud.toast('🚪 집 밖으로 나왔어요', 1800);
    this.#syncTutorial(true);
    this.#refreshHud();
    this.save();
    return true;
  }

  openHomeFurniture() {
    if (this.mode !== 'play') return;
    if (!this.home || !this.home.inside) {
      this.hud.toast('🏠 먼저 집에 들어가야 가구를 놓을 수 있어요', 2000);
      return;
    }
    this.#openModal(this.phase7.furniture());
    this.hud.joystick.reset();
  }

  /** 가구 제작 — 공방 복구 + 재료(가방·특산·원정 바구니) + 코인 */
  craftFurniture(id) {
    const def = furnitureOf(id);
    if (!def) return false;
    if (!this.progress.building('workshop').done) {
      this.audio.sfxDeny();
      this.hud.toast('공방을 먼저 복구해야 가구를 만들 수 있어요 🔨', 2200);
      return false;
    }
    const lack = Object.entries(def.cost).filter(([k, n]) => (k === 'coin' ? this.progress.coins : this.progress.materialCount(k)) < n);
    if (lack.length) {
      this.audio.sfxDeny();
      const need = lack.map(([k, n]) => `${k === 'coin' ? '🪙' : ''}${ITEMS[k] ? ITEMS[k].name : EXPEDITION_RESOURCES[k] ? EXPEDITION_RESOURCES[k].name : k} ${n}`).join(' · ');
      this.hud.toast(`재료가 부족해요 — ${need}`, 2400);
      return false;
    }
    for (const [k, n] of Object.entries(def.cost)) {
      if (k === 'coin') this.progress.spendCoins(n);
      else this.progress.takeMaterial(k, n);
    }
    this.home.addOwned(id, 1);
    this.audio.sfxBuild();
    this.hud.toast(`${def.icon} ${def.name} 제작! 보유 ${this.home.ownedCount(id)}개 — [놓기] 로 방에 두세요`, 2800);
    this.save();
    this.#refreshHud();
    if (this.modal.isOpen) this.#openModal(this.phase7.furniture());
    return true;
  }

  /** 보유 가구를 집어 든다 — 가구 목록을 닫고 방에서 탭해 놓는다 */
  placeFurniture(id) {
    if (!this.home || !this.home.inside) {
      this.hud.toast('🏠 먼저 집에 들어가 주세요', 1800);
      return false;
    }
    const res = this.home.beginPlace(id);
    if (!res.ok) {
      this.audio.sfxDeny();
      this.hud.toast(res.reason === 'full' ? `방이 가득 찼어요 (최대 ${ROOM.maxPlaced}개)` : '그 가구가 없어요 — 먼저 제작해 주세요', 2200);
      return false;
    }
    if (this.modal.isOpen) this.modal.close();
    this.hud.toast(`${res.def.icon} ${res.def.name} — 방을 탭해 자리를 잡아요`, 2400);
    this.#refreshHud();
    return true;
  }

  rotateHomeFurniture() {
    if (!this.home) return false;
    const res = this.home.rotate();
    if (!res.ok) {
      this.audio.sfxDeny();
      this.hud.toast('돌릴 가구를 먼저 골라 주세요', 1700);
      return false;
    }
    this.audio.sfxUi();
    if (res.wallName) this.hud.toast(`🔄 ${res.wallName} 으로 옮겼어요`, 1800);
    else this.hud.toast(`🔄 ${res.deg}° 회전`, 1500);
    this.#refreshHud();
    this.save();
    return true;
  }

  confirmHomePlace() {
    if (!this.home) return false;
    const res = this.home.confirmPlace();
    if (!res.ok) {
      this.audio.sfxDeny();
      return false;
    }
    const def = furnitureOf(res.data.id);
    this.audio.sfxBuild();
    this.hud.toast(`${def ? def.icon + ' ' + def.name : '가구'} — 방에 놓았어요!`, 2200);
    this.#refreshHud();
    this.save();
    return true;
  }

  pickHomeFurniture() {
    if (!this.home) return false;
    const res = this.home.pickSelected();
    if (!res.ok) {
      this.hud.toast('옮길 가구를 먼저 골라 주세요', 1700);
      return false;
    }
    this.hud.toast('✋ 가구를 다시 들었어요 — 방을 탭해 자리를 잡아요', 2200);
    this.#refreshHud();
    return true;
  }

  removeHomeFurniture() {
    if (!this.home) return false;
    const res = this.home.removeSelected();
    if (!res.ok) {
      this.hud.toast('치울 가구를 먼저 골라 주세요', 1700);
      return false;
    }
    this.audio.sfxUi();
    this.hud.toast(`🧹 ${res.name} 을(를) 치웠어요 — 보유 목록으로 돌아갔어요`, 2200);
    this.#refreshHud();
    this.save();
    return true;
  }

  /* ── 7단계: 🧭 원정 ────────────────────────────────── */

  openExpedition() {
    if (this.mode !== 'play') return;
    if (this.home && this.home.inside) this.exitHome();
    this.#openModal(this.phase7.expedition());
  }

  /** 원정 출발 — 하루 1회 · 기력 확인 */
  startExpedition(siteId) {
    if (this.mode !== 'play' || !this.expedition) return false;
    if (this.expedition.active) return false;
    const site = siteOf(siteId);
    if (!site) return false;
    if (ranToday(this.progress, this.state.day)) {
      this.audio.sfxDeny();
      this.hud.toast(`🧭 오늘(Day ${this.state.day})은 이미 다녀왔어요 — 다음 날 다시 열려요`, 2400);
      return false;
    }
    if (this.defense && this.defense.waveActive) {
      this.audio.sfxDeny();
      this.hud.toast('🛡️ 방어전 중에는 원정을 떠날 수 없어요', 2200);
      return false;
    }
    if (!this.progress.useStamina(EXPEDITION.entryStamina)) {
      this.audio.sfxDeny();
      this.hud.toast(`💪 기력이 부족해요 — 출발에 ${EXPEDITION.entryStamina} 필요해요`, 2200);
      return false;
    }
    if (this.modal.isOpen) this.modal.close();
    this.paused = false;
    const res = this.expedition.start(siteId, this.state.day);
    if (!res.ok) {
      this.progress.restStamina(EXPEDITION.entryStamina);
      return false;
    }
    this.audio.sfxRare?.();
    this.hud.joystick.setEnabled(false);
    this.hud.toast(`${site.icon} ${site.name} 도착 — 자원을 탭해 캐고, 다 챙기면 [귀환]!`, 3000);
    this.#applyRenderTarget();
    this.#refreshHud();
    return true;
  }

  /** [귀환] — 챙긴 자원을 들고 돌아온다 */
  returnExpedition() {
    if (!this.expedition || !this.expedition.active) return false;
    this.expedition.stop('manual');
    return true;
  }

  /** 원정 결과 → 원정 바구니 · 전적 · 저장 */
  #onExpeditionReturn(res) {
    if (!res) return;
    let total = 0;
    const labels = [];
    for (const [id, n] of Object.entries(res.collected || {})) {
      this.progress.addExpedition(id, n);
      total += n;
      const r = EXPEDITION_RESOURCES[id];
      if (r) labels.push(`${r.icon} ${r.name} ${n}`);
    }
    const e = this.progress.expedition;
    e.runs = (Number(e.runs) || 0) + 1;
    e.lastDay = Number(res.day) || this.state.day;
    e.lastSite = res.site || '';
    e.lastTotal = total;
    this.audio.sfxFanfare?.();
    this.hud.toast(
      total > 0 ? `🧭 원정 귀환 — ${labels.join(' · ')}` : '🧭 원정에서 빈손으로 돌아왔어요 — 다음엔 자원을 탭해 캐 보세요',
      3200
    );
    this.#applyRenderTarget();
    this.hud.joystick.setEnabled(true);
    this.checkAchievements();
    this.save();
    this.#syncTutorial(true);
    this.#refreshHud();
    if (this.mode === 'play') this.#openModal(this.phase7.expeditionResult(res));
  }

  /* ── 7단계: 📖 튜토리얼 · 도움말 ───────────────────── */

  haveMaterial(id) {
    return this.progress.materialCount(id);
  }

  openHelp() {
    if (this.mode !== 'play') return;
    this.#openModal(this.phase7.help());
  }

  /** 튜토리얼 카드를 지금 단계에 맞춘다 */
  #syncTutorial(force = false) {
    if (!this.tutorialUI) return;
    const t = this.progress.tutorial;
    if (!t || t.done || t.skipped) {
      this.tutorialUI.hide();
      return;
    }
    const def = TUTORIAL_STEPS[t.step];
    if (!def) {
      t.done = true;
      this.tutorialUI.hide();
      return;
    }
    if (!force && this.tutorialUI.visible) return;
    this.tutorialUI.show(t.step, TUTORIAL_TOTAL, def);
  }

  /** 지금 단계의 실제 행동을 마쳤는지 0.4초마다 확인 */
  #tutorialCheck() {
    const t = this.progress.tutorial;
    if (!t || t.done || t.skipped) return;
    const def = TUTORIAL_STEPS[t.step];
    if (!def || typeof def.check !== 'function') return;
    let ok = false;
    try {
      ok = !!def.check(this);
    } catch (err) {
      ok = false;
    }
    if (!ok) return;
    this.audio.sfxCoin?.();
    this.hud.toast(`✅ ${def.title} — 다음 안내로 넘어갈게요`, 2400);
    this.#tutorialAdvance();
  }

  #tutorialAdvance() {
    const t = this.progress.tutorial;
    t.step = Math.min(TUTORIAL_TOTAL, (Number(t.step) || 0) + 1);
    if (t.step >= TUTORIAL_TOTAL) {
      t.done = true;
      this.tutorialUI.hide();
      this.hud.toast('🎉 단계별 안내를 모두 마쳤어요 — 도움말 ❓에서 언제든 다시 볼 수 있어요', 3400);
      this.save();
      return;
    }
    this.tutorialUI.show(t.step, TUTORIAL_TOTAL, TUTORIAL_STEPS[t.step]);
    this.save();
  }

  /** [다음] — 지금 단계를 건너뛰고 다음으로 */
  tutorialNext() {
    const t = this.progress.tutorial;
    if (!t || t.done) return;
    this.#tutorialAdvance();
  }

  /** [건너뛰기] — 안내 카드를 닫는다(도움말에서 언제든 다시 볼 수 있음) */
  skipTutorial() {
    const t = this.progress.tutorial;
    if (!t) return;
    t.skipped = true;
    this.tutorialUI.hide();
    this.hud.toast('📖 안내를 닫았어요 — 도움말(❓)에서 언제든 다시 볼 수 있어요', 2800);
    this.save();
  }

  /** [처음부터 다시 보기] */
  restartTutorial() {
    this.progress.tutorial = { step: 0, done: false, skipped: false };
    if (this.modal.isOpen) this.modal.close();
    this.#syncTutorial(true);
    this.hud.toast('📖 단계별 안내를 처음부터 다시 보여 드릴게요', 2400);
    this.save();
  }

  /* ── 🛡️ 5단계: 불청객 방어전 ─────────────────────── */

  openDefense() {
    if (this.mode !== 'play') return;
    this.#openModal(this.phase5.defense());
  }

  /** 방어 슬롯 하나 [설치/관리] */
  openDefenseSlot(index) {
    if (this.mode !== 'play') return;
    this.#openModal(this.phase5.slot(index));
  }

  /** 공방 [방어 제작] */
  openDefenseCraft() {
    if (this.mode !== 'play') return;
    if (!this.progress.building('workshop').done) {
      this.audio.sfxDeny();
      this.hud.toast('공방을 먼저 복구해야 방어 설비를 만들 수 있어요 🔨', 2200);
      return;
    }
    this.#openModal(this.phase5.craft());
  }

  /** 방어 설비 제작 — 재료를 넣고 창고(progress.defense.stock)에 담는다 */
  craftStructure(kind) {
    const def = STRUCTURES[kind];
    if (!def) return false;
    const prog = this.progress;
    const lack = Object.entries(def.cost).filter(([id, n]) => prog.materialCount(id) < n);
    if (lack.length) {
      this.audio.sfxDeny();
      const need = lack
        .map(([id, n]) => `${ITEMS[id] ? ITEMS[id].name : EXPEDITION_RESOURCES[id] ? EXPEDITION_RESOURCES[id].name : id} ${n}`)
        .join(' · ');
      this.hud.toast(`재료가 부족해요 — ${need}`, 2400);
      if (this.modal.isOpen) this.#openModal(this.phase5.craft());
      return false;
    }
    for (const [id, n] of Object.entries(def.cost)) prog.takeMaterial(id, n);
    const d = this.progress.defense;
    d.stock[kind] = Math.min(9, (d.stock[kind] || 0) + 1);
    this.audio.sfxBuild();
    const p = this.player.position;
    if (this.fx) {
      this.fx.burst(p.x, p.y + 0.9, p.z, '#ffe3b0', 12, { spread: 1.2, up: 2.0 });
      this.fx.float(`${def.icon} ${def.name}`, p.x, p.y + 1.9, p.z, '#b2698f');
    }
    this.hud.toast(`${def.icon} ${def.name} 제작! 슬롯에서 [설치] 하세요 (창고 ${d.stock[kind]}개)`, 2600);
    this.save();
    this.#refreshHud();
    if (this.modal.isOpen) this.#openModal(this.phase5.craft());
    return true;
  }

  /** 슬롯에 설치 — 창고에서 하나 꺼내 세운다 */
  installStructure(index, kind) {
    const d = this.progress.defense;
    const def = STRUCTURES[kind];
    if (!d || !def) return false;
    if (this.defense.waveActive) {
      this.audio.sfxDeny();
      this.hud.toast('방어전 중에는 슬롯을 바꿀 수 없어요 🛡️', 2000);
      return false;
    }
    if (d.slots[index]) {
      this.audio.sfxDeny();
      this.hud.toast('이미 설비가 있는 슬롯이에요 — 먼저 [회수] 해 주세요', 2000);
      return false;
    }
    if ((d.stock[kind] || 0) <= 0) {
      this.audio.sfxDeny();
      this.hud.toast(`창고에 ${def.name}이 없어요 — 공방 [방어 제작] 에서 만들어요`, 2400);
      return false;
    }
    d.stock[kind] -= 1;
    this.defense.placeStructure(index, kind);
    this.audio.sfxBuild();
    const slot = DEFENSE.slots[index];
    if (this.fx) this.fx.burst(slot.x, this.world.terrain.groundY(slot.x, slot.z) + 0.6, slot.z, '#ffe3b0', 12, { spread: 1.2, up: 2.0 });
    this.hud.toast(`${def.icon} ${def.name} — ${index + 1}번 슬롯에 설치!`, 2200);
    this.save();
    this.#refreshHud();
    if (this.modal.isOpen) this.#openModal(this.phase5.slot(index));
    return true;
  }

  /** 슬롯 회수 — 창고로 돌아간다 */
  removeStructure(index) {
    if (this.defense.waveActive) {
      this.audio.sfxDeny();
      this.hud.toast('방어전 중에는 회수할 수 없어요 🛡️', 2000);
      return false;
    }
    const st = this.defense.structureAt(index);
    if (!st) return false;
    const kind = st.kind;
    const def = STRUCTURES[kind];
    this.defense.removeStructure(index);
    const d = this.progress.defense;
    d.stock[kind] = Math.min(9, (d.stock[kind] || 0) + 1);
    this.audio.sfxUi();
    this.hud.toast(`${def.icon} ${def.name}을 회수했어요 — 창고에 담았습니다`, 2000);
    this.save();
    this.#refreshHud();
    if (this.modal.isOpen) this.#openModal(this.phase5.slot(index));
    return true;
  }

  /** [지금 방어 시작] — 날짜와 상관없이 바로 웨이브 */
  startDefenseNow() {
    if (this.mode !== 'play' || !this.defense) return false;
    if (this.defense.waveActive) {
      this.hud.toast('이미 방어전이 진행 중이에요 🛡️', 1800);
      return false;
    }
    if (this.modal.isOpen) this.modal.close();
    // 실내에 있었다면 방어전 전에 밖으로 나온다
    if (this.home && this.home.inside) this.exitHome();
    const res = this.defense.startWave(this.state.day, 'manual');
    if (!res.ok) {
      this.audio.sfxDeny();
      return false;
    }
    this.audio.sfxRare();
    this.#refreshHud();
    return true;
  }

  /** [📣 메타몽 모으기] */
  gatherDittos() {
    if (this.mode !== 'play' || !this.defense) return false;
    const res = this.defense.gatherDittos();
    if (!res.ok) {
      this.audio.sfxDeny();
      this.hud.toast(res.reason === 'active' ? '방어전이 시작됐어요 — 지금은 모을 수 없어요' : '모을 메타몽이 없어요', 2200);
      return false;
    }
    this.audio.sfxRare();
    this.hud.toast('📣 메타몽 모으기! 섬 곳곳의 메타몽이 광장으로 달려와요', 2600);
    this.save();
    this.#refreshHud();
    // 모달을 닫아야 달려오는 모습이 보인다(모달이 열려 있으면 섬의 시간이 멈춘다)
    if (this.modal.isOpen) this.modal.close();
    return true;
  }

  /** 무기 발사 — 새총 · 꽃잎 물풍선 */
  fireWeapon(kind = 'sling') {
    if (this.mode !== 'play' || !this.defense) return false;
    if (this.modal.isOpen || this.paused) return false;
    const res = this.defense.fire(kind);
    if (!res.ok) {
      if (res.reason === 'petal') {
        this.audio.sfxDeny();
        this.hud.toast('꽃잎이 없어요 — 꽃덤불에서 꽃잎을 모아 올까요? 🌸', 2200);
      } else if (res.reason === 'none') {
        this.audio.sfxDeny();
        this.hud.toast('사거리 안에 불청객이 없어요 🎯', 1600);
      } else if (res.reason === 'cooldown') {
        this.audio.sfxUi();
      } else if (res.reason === 'idle') {
        this.hud.toast('지금은 방어전 중이 아니에요', 1600);
      }
      this.#refreshHud();
      return false;
    }
    if (kind === 'balloon') this.audio.sfxSplash(2);
    else this.audio.sfxHit('rock');
    this.#refreshHud();
    return true;
  }

  /** 웨이브 종료 — 보상 · 업적 · 결과 화면 */
  #onDefenseEnd(res) {
    if (!res) return;
    // 방어전이 끝나면 다시 그 시간대의 평화로운 선율로
    this.audioPhase = phaseAt(this.state.elapsed).id;
    this.audio.setPhase(this.audioPhase);
    const r = res.reward || {};
    if (res.victory) {
      this.audio.sfxFanfare();
      const seed = r.seedCount ? ` · 🌱 희귀 씨앗 ${r.seedCount}` : '';
      this.hud.toast(`🎉 승리! 수집단을 모두 막아냈어요 — 🪙 ${r.coin} · ⭐ ${r.star}${seed}`, 4000);
    } else {
      this.audio.sfxDeny();
      this.hud.toast(`😿 코인 ${res.stolen}개를 빼앗겼어요 — 건물과 작물은 무사해요`, 3600);
    }
    this.save();
    this.#refreshHud();
    this.checkAchievements();
    if (this.mode === 'play') this.#openModal(this.phase5.result(res));
  }

  /** 솜이 서포트 — 따라다니며 가까운 드롭을 주워 담는다 */
  #somiPickup(somi) {
    if (!this.drops || !this.gathering) return;
    const list = this.drops.items;
    for (let i = list.length - 1; i >= 0; i--) {
      const d = list[i];
      if (Math.hypot(d.x - somi.position.x, d.z - somi.position.z) > 1.5) continue;
      const took = this.gathering.pickup(d);
      if (took === false) continue;
      this.drops.remove(d);
      if (this.fx) this.fx.float('솜이가 주웠어요 ♥', somi.position.x, somi.position.y + 0.95, somi.position.z, '#e78aa8');
      this.#refreshHud();
    }
  }

  /* ── 첫 1분 웰컴 3단 미션 ──────────────────────────── */

  #welcomeDone(i) {
    if (i === 0) return this.progress.mailbox.claimed.length > 0;
    if (i === 1) return this.state.discovered.length >= 2;
    if (i === 2) return this.progress.count('tree') >= 1;
    return true;
  }

  /** 단계 조건을 확인해 완료분을 순서대로 통과시키고, 단계마다 코인 +15 */
  #welcomeCheck() {
    if (this.mode !== 'play') return 0;
    const w = this.progress.welcome || (this.progress.welcome = { step: 0 });
    if (w.step >= WELCOME.steps.length) return 0;
    let passed = 0;
    while (w.step < WELCOME.steps.length && this.#welcomeDone(w.step)) {
      w.step += 1;
      passed += 1;
      const step = WELCOME.steps[w.step - 1];
      this.progress.addCoins(WELCOME.reward);
      this.audio.sfxCoin?.();
      this.hud.toast(`🎉 ${step.icon} ${step.label} 완료! 코인 +${WELCOME.reward} (${w.step}/${WELCOME.steps.length})`, 2600);
      const p = this.player.position;
      if (this.fx) this.fx.float(`+${WELCOME.reward} 🪙`, p.x, p.y + 1.9, p.z, '#b38b3d');
    }
    if (passed > 0) {
      if (w.step >= WELCOME.steps.length) {
        setTimeout(() => this.hud && this.hud.toast('🌿 첫걸음 완료 — 이제 섬은 마음 가는 대로예요', 3000), 900);
      }
      this.#welcomeSync();
      this.#refreshHud();
      this.save();
    }
    return passed;
  }

  /** 웰컴 배너를 지금 단계에 맞춘다 */
  #welcomeSync() {
    if (!this.hud) return;
    const w = this.progress.welcome || { step: 0 };
    this.hud.setWelcome(w.step, WELCOME.steps);
  }

  /** 상단 웰컴 칩을 탭했을 때 — 3단 미션 현황판 */
  openWelcome() {
    if (this.mode !== 'play') return;
    const w = this.progress.welcome || { step: 0 };
    const rows = WELCOME.steps.map((s, i) => {
      const done = i < w.step;
      const cur = i === w.step;
      return h(
        'div',
        { class: `welcome-row ${done ? 'done' : cur ? 'cur' : ''}` },
        h('span', { class: 'wico' }, done ? '✅' : s.icon),
        h(
          'div',
          { class: 'wmain' },
          h('div', { class: 'nm' }, `${i + 1}. ${s.label}`),
          h('div', { class: 'meta' }, s.hint || '')
        ),
        h('span', { class: 'wtag' }, done ? '완료' : cur ? '지금' : '다음')
      );
    });
    this.#openModal({
      title: '🎯 섬의 첫걸음',
      subtitle: `3단계를 마치면 단계마다 🪙 ${WELCOME.reward}`,
      body: h(
        'div',
        {},
        h('div', { class: 'welcome-list' }, ...rows),
        h('div', { class: 'hint' }, `지금 ${w.step}/${WELCOME.steps.length} 단계 · 위에서부터 차례로 완료돼요`)
      ),
      actions: [{ label: '닫기', kind: 'primary', onClick: () => this.modal.close() }],
    });
  }

  /** 업적 조건 재검사 — 새로 달성한 것이 있으면 토스트 + 저장 */
  checkAchievements() {
    this.progress.discoveredCount = this.state.discovered.length;
    const fresh = this.progress.checkAchievements();
    if (!fresh.length) return [];
    this.audio.sfxFanfare?.();
    if (fresh.length === 1) {
      const r = fresh[0];
      this.hud.toast(`🏆 업적 달성 — ${r.name}! 랭크에서 보상을 받을 수 있어요`, 3000);
      const p = this.player.position;
      if (this.fx) this.fx.float(`🏆 ${r.name}`, p.x, p.y + 1.95, p.z, '#b2698f');
    } else {
      this.hud.toast(`🏆 업적 ${fresh.length}개 달성 — ${fresh.map((r) => r.name).join(' · ')}`, 3400);
    }
    this.#refreshHud();
    this.save();
    return fresh;
  }

  claimAchievement(id) {
    const res = this.progress.claimAchievement(id);
    if (!res.ok) {
      this.audio.sfxDeny();
      if (res.reason === 'unfinished') this.hud.toast('아직 조건을 채우지 못했어요', 1800);
      return false;
    }
    const r = res.row;
    this.audio.sfxCoin();
    this.hud.toast(
      `🏆 ${r.name} 보상 — 🪙 ${r.reward.coin}${r.reward.star ? ` · ⭐ ${r.reward.star}` : ''}${res.stored ? ' (별조각은 창고로)' : ''}`,
      2800
    );
    this.#refreshHud();
    this.save();
    if (this.modal.isOpen) this.#openModal(this.phase3.achievements());
    return true;
  }

  /* ── 부두 낚시 ────────────────────────────────────────── */

  /** 낚시 자리 하나를 연다 — zoneId 는 'sea' · 'river_bank' · 'river_bridge' */
  openFishSpot(zoneId = 'sea') {
    if (this.mode !== 'play') return;
    const zone = FISHING_ZONES[zoneId] || FISHING_ZONES.sea;
    if (zone.need === 'dock' && !this.progress.building('dock').done) {
      this.audio.sfxDeny();
      this.hud.toast('부두를 먼저 복구해야 낚시할 수 있어요 ⚓', 2200);
      this.#openModal(this.panels.build('dock'));
      return;
    }
    if (zone.need === 'bridge' && !this.progress.bridgeBuilt) {
      this.audio.sfxDeny();
      this.hud.toast('다리를 놓아야 다리 위에서 낚시할 수 있어요 🌉', 2200);
      return;
    }
    if (this.fishing.active) {
      this.fishing.reel();
      return;
    }

    const p = this.progress;
    const bait = p.supply('bait');
    const phase = phaseAt(this.state.elapsed);
    const habitatName = zone.habitat === 'river' ? '민물' : '바다';
    const nowFish = fishIn(zone.habitat, phase.id);

    // 지금 시간대에 이 물에서 물리는 어종만 — 시간대별 출현을 한눈에 보여 준다
    const list = h('div', { class: 'fish-grid' });
    for (const id of nowFish) {
      const f = FISH[id];
      list.append(
        h(
          'div',
          { class: `fish-card ${f.rare ? 'rare' : ''}` },
          h('span', { class: 'fico' }, f.icon),
          h(
            'div',
            { class: 'fmain' },
            h('div', { class: 'nm' }, f.name),
            h(
              'div',
              { class: 'meta' },
              f.id === 'star' ? `${fishTimeLabel(f)} · 가방 재료 (별조각)` : `${fishTimeLabel(f)} · ${f.rare ? '희귀' : '흔함'} · 개당 🪙 ${f.price}`
            )
          ),
          h('div', { class: 'fright' }, h('span', { class: 'lchip' }, f.id === 'star' ? '조각' : `${f.size[0]}~${f.size[1]}cm`))
        )
      );
    }

    const body = h(
      'div',
      {},
      h('div', { class: 'hint' }, zone.hint),
      h(
        'div',
        { class: 'row' },
        h('div', {}, h('div', { class: 'label' }, '기력'), h('div', { class: 'hint' }, `낚시 1회에 ${FISHING.stamina} 소모`)),
        h('span', { class: 'hint' }, `${Math.round(p.stamina)} / 100`)
      ),
      h(
        'div',
        { class: 'row' },
        h('div', {}, h('div', { class: 'label' }, '별빛 미끼'), h('div', { class: 'hint' }, '희귀 어종 확률이 올라가요')),
        h('span', { class: 'hint' }, `${bait}개`)
      ),
      h('div', { class: 'section-label' }, `${phase.icon} 지금 ${phase.label} — ${habitatName}에 물리는 ${nowFish.length}종`),
      list,
      h('div', { class: 'hint' }, '아침·낮·노을·밤에 따라 물리는 어종이 달라져요. 다른 시간대에 다시 와 보세요.')
    );

    const actions = [
      { label: `${zone.icon} 낚시하기 (기력 ${FISHING.stamina})`, kind: 'primary', onClick: () => this.#beginFishing(false, zone.id) },
    ];
    if (bait > 0) {
      actions.push({ label: '🪱 별빛 미끼 쓰고 낚시', kind: 'ghost', onClick: () => this.#beginFishing(true, zone.id) });
    }
    actions.push({ label: '닫기', kind: 'ghost', onClick: () => this.modal.close() });

    this.#openModal({
      title: `${zone.icon} ${zone.name}`,
      subtitle: zone.habitat === 'river' ? '중앙 강 — 찌·물결·그리고 1.4초' : '찌 · 물결 · 그리고 1.4초',
      body,
      actions,
    });
  }

  #beginFishing(bait, zoneId = 'sea') {
    this.modal.close();
    const res = this.fishing.start({ bait, zone: zoneId });
    if (!res.ok) {
      this.audio.sfxDeny();
      const msg =
        res.reason === 'stamina'
          ? '기력이 부족해요 — 열매나 요리로 채워 주세요 🍓'
          : res.reason === 'dock'
            ? '부두를 먼저 복구해야 해요 ⚓'
            : res.reason === 'bridge'
              ? '다리를 놓아야 다리 위에서 낚시할 수 있어요 🌉'
              : res.reason === 'no-bait'
                ? '별빛 미끼가 없어요'
                : '지금은 낚시할 수 없어요';
      this.hud.toast(msg, 2200);
      return;
    }
    this.player.setYaw(0);
    if (res.bait) this.hud.toast('별빛 미끼를 달았어요 — 희귀한 손님이 올지도 🪱', 2000);
    this.#refreshHud();
  }

  /* ── 요리 · 강화 ──────────────────────────────────────── */

  cook(id) {
    const before = this.progress.skills.level('cook');
    const res = cookRecipe(this.progress, id);
    if (!res.ok) {
      this.audio.sfxDeny();
      this.hud.toast(
        res.reason === 'full' ? '기력이 이미 가득해요 💪' : '재료가 부족해요 — 채집·낚시로 모아 올까요?',
        2200
      );
      if (this.modal.isOpen) this.#openModal(this.life.cooking());
      return false;
    }
    this.audio.sfxCook();
    const p = this.player.position;
    this.fx.float(`${res.recipe.icon} ${res.recipe.name}`, p.x, p.y + 1.8, p.z, '#b2698f');
    this.hud.toast(`${res.recipe.icon} ${res.recipe.name} 완성 — 기력 +${res.recipe.stamina}`, 2400);
    if (res.recipe.buff > 0) {
      setTimeout(() => this.hud.toast(`✨ ${GOLDEN_BUFF.seconds}초 동안 채집 기력이 가벼워져요`, 2600), 700);
    }
    this.#questEvent('cook', 1);
    if (this.progress.skills.level('cook') > before) this.#rankUpToast('cook', this.progress.skills.row('cook').rank);
    this.save();
    this.#refreshHud();
    this.#openModal(this.life.cooking());
    return true;
  }

  upgradeTool(id) {
    const def = TOOLS[id];
    const res = this.progress.upgradeTool(id);
    if (!res.ok) {
      this.audio.sfxDeny();
      this.hud.toast(res.reason === 'max' ? '이미 최고 레벨이에요' : '재료나 코인이 부족해요 🪙', 2200);
      if (this.modal.isOpen) this.#openModal(this.life.upgrade());
      return false;
    }
    this.audio.sfxBuild();
    const kindLabel = def.kind === 'tree' ? '나무' : def.kind === 'rock' ? '바위' : '텃밭';
    this.hud.toast(
      `${def.icon} ${def.name} Lv.${res.info.level} 강화! ${
        def.kind === 'farm' ? `한 번에 ${['1칸', '십자 5칸', '3×3 9칸'][res.info.level - 1]}에 물을 줘요` : `${kindLabel}가 더 빨리 캐져요`
      }`,
      2600
    );
    const p = this.player.position;
    this.fx.burst(p.x, p.y + 0.9, p.z, '#ffe3b0', 14, { spread: 1.1, up: 2.0 });
    this.save();
    this.#refreshHud();
    this.#openModal(this.life.upgrade());
    return true;
  }

  /* ── 자판기 ───────────────────────────────────────────── */

  sellItem(id, amount = 1) {
    const res = sellGoods(this.progress, id, amount);
    if (!res.ok) {
      this.audio.sfxDeny();
      this.hud.toast('팔 수 있는 게 없어요', 1800);
      return false;
    }
    this.audio.sfxCoin();
    this.hud.toast(`${itemIcon(id)} ${itemName(id)} ${res.count}개 → 🪙 ${res.coin}`, 2200);
    this.#questEvent('sell', res.count);
    this.save();
    this.#refreshHud();
    this.#openModal(this.life.vending());
    return true;
  }

  buyGood(id) {
    const res = buyGoods(this.progress, id);
    if (!res.ok) {
      this.audio.sfxDeny();
      this.hud.toast(
        res.reason === 'coin' ? '섬 코인이 부족해요 — 자판기에 재료를 팔아 모아 보세요 🪙' : '지금은 살 수 없어요',
        2200
      );
      if (this.modal.isOpen) this.#openModal(this.life.vending());
      return false;
    }
    this.audio.sfxCoin();
    this.hud.toast(`${res.good.icon} ${res.good.name} 구입 — ${res.good.price} 코인`, 2200);
    this.save();
    this.#refreshHud();
    this.#openModal(this.life.vending());
    return true;
  }

  drinkAde() {
    if (this.progress.supply('ade') <= 0) {
      this.audio.sfxDeny();
      return false;
    }
    if (this.progress.stamina >= STAMINA.max) {
      this.hud.toast('기력이 이미 가득해요 💪', 1800);
      return false;
    }
    this.progress.takeSupply('ade', 1);
    this.progress.restStamina(ADE_STAMINA);
    this.audio.sfxEat();
    this.hud.toast(`🥤 반짝 에이드 — 기력 +${ADE_STAMINA}`, 2000);
    this.save();
    this.#refreshHud();
    this.#openModal(this.life.vending());
    return true;
  }

  /* ── 고양이 돌보기 ────────────────────────────────────── */

  #catOf(id) {
    return this.cats.find((c) => c.id === id) || null;
  }

  petCat(id) {
    const cat = this.#catOf(id);
    const def = CATS.find((c) => c.id === id);
    if (!cat || !def) return;
    if (cat.cd.pet > 0) {
      this.audio.sfxDeny();
      return;
    }
    cat.cd.pet = CAT_CARE.pet.cooldown;
    cat.pet();
    this.audio.sfxMeow();
    this.progress.restStamina(CAT_CARE.pet.stamina);
    const res = this.progress.addAffection(id, CAT_CARE.pet.aff);
    this.#gainExp('care', EXP_GAIN.pet);
    this.#questEvent('pet', 1);
    this.#catAfter(def, cat, res);
  }

  feedCat(id, itemId) {
    const cat = this.#catOf(id);
    const def = CATS.find((c) => c.id === id);
    const treat = CAT_CARE.snacks[itemId];
    if (!cat || !def || !treat) return;

    if (cat.cd.snack > 0) {
      this.audio.sfxDeny();
      this.hud.toast(`${def.name}가 방금 간식을 먹었어요 — 조금 뒤에 주세요`, 1900);
      return;
    }
    const have =
      itemId === 'churu'
        ? this.progress.supply('churu')
        : itemId === 'berry'
          ? this.progress.inventory.count('berry')
          : this.progress.fishCount('anchovy');
    if (have <= 0) {
      this.audio.sfxDeny();
      this.hud.toast(`${treat.icon} ${treat.name}이 없어요${itemId === 'churu' ? ' — 자판기에서 살 수 있어요' : ''}`, 2200);
      return;
    }
    if (itemId === 'churu') this.progress.takeSupply('churu', 1);
    else if (itemId === 'berry') this.progress.inventory.take('berry', 1);
    else this.progress.takeFish('anchovy', 1);

    cat.cd.snack = treat.cooldown;
    cat.feast();
    this.audio.sfxMeow();
    const res = this.progress.addAffection(id, treat.aff);
    this.#gainExp('care', EXP_GAIN.treat);
    this.#questEvent('treat', 1);
    this.hud.toast(`${def.name}가 ${treat.icon} ${treat.name}을 맛있게 먹었어요 · 호감도 +${treat.aff}`, 2300);
    this.#catAfter(def, cat, res);
  }

  #catAfter(def, cat, res) {
    const level = res.row.level;
    if (this.fx) {
      this.fx.burst(cat.position.x, cat.position.y + cat.height, cat.position.z, '#ffb3d1', 12, { spread: 0.9, up: 1.6 });
    }
    if (res.levelUp) {
      this.hud.toast(`${def.name} 호감도 Lv.${level}! ${CAT_CARE.dialogue[def.id][level - 1]}`, 3400);
      this.#giveCatGift(def.id, level);
      if (level === CAT_CARE.followLevel) {
        setTimeout(() => this.hud.toast(`${def.name}가 이제 따라와도 된대요 — 돌보기에서 [따라오기] 🐾`, 3000), 900);
      }
    } else if (Math.random() < 0.45) {
      this.hud.toast(CAT_CARE.dialogue[def.id][level - 1], 1900);
    }
    this.save();
    this.#refreshHud();
    if (this.modal.isOpen) this.#openModal(this.life.cat(def.id));
  }

  /** 레벨 첫 달성 보답 선물 — 가방이 차면 창고로 */
  #giveCatGift(catId, level) {
    const gift = CAT_CARE.gifts[level];
    if (!gift) return;
    const st = this.progress.cat(catId);
    if (st.gifts.includes(level)) return;
    st.gifts.push(level);
    let stored = 0;
    for (const [id, n] of Object.entries(gift)) {
      const leftover = this.progress.inventory.add(id, n);
      if (leftover > 0) {
        this.progress.inventory.storage[id] = this.progress.inventory.stored(id) + leftover;
        stored += leftover;
      }
    }
    this.audio.sfxRare();
    const label = Object.entries(gift)
      .map(([id, n]) => `${itemIcon(id)} ${itemName(id)} ${n}`)
      .join(' · ');
    const def = CATS.find((c) => c.id === catId);
    this.hud.toast(`🎁 ${def ? def.name : catId}의 보답 선물 — ${label}${stored ? ` (${stored}개는 창고로)` : ''}`, 3200);
  }

  toggleFollow(id) {
    const row = this.progress.catRow(id);
    const def = CATS.find((c) => c.id === id);
    if (!row.canFollow) {
      this.audio.sfxDeny();
      this.hud.toast(`따라오기는 호감도 Lv.${CAT_CARE.followLevel}부터예요 (지금 Lv.${row.level})`, 2200);
      return;
    }
    const st = this.progress.cat(id);
    st.follow = !st.follow;
    const cat = this.#catOf(id);
    if (cat) cat.setFollow(st.follow);
    this.audio.sfxUi();
    this.hud.toast(st.follow ? `${def ? def.name : id}가 따라와요 🐾` : `${def ? def.name : id}는 여기서 기다릴게요`, 2000);
    this.save();
    this.#refreshHud();
    if (this.modal.isOpen) this.#openModal(this.life.cat(id));
  }

  /* ── 오늘의 의뢰 ──────────────────────────────────────── */

  claimQuest(id) {
    const res = this.progress.claimQuest(id);
    if (!res.ok) {
      this.audio.sfxDeny();
      return false;
    }
    const q = res.quest;
    if (q.reward.star > 0) {
      const leftover = this.progress.inventory.add('star', q.reward.star);
      if (leftover > 0) {
        this.progress.inventory.storage.star = this.progress.inventory.stored('star') + leftover;
      }
    }
    this.audio.sfxCoin();
    this.hud.toast(`📋 의뢰 완료! 🪙 ${q.reward.coin}${q.reward.star ? ` · ⭐ ${q.reward.star}` : ''}`, 2600);
    this.save();
    this.#refreshHud();
    this.#openModal(this.questSource === 'mail' ? this.panels.mailbox() : this.life.quests());
    return true;
  }

  /* ── 저장 ──────────────────────────────────────────────── */

  snapshot() {
    const life = this.progress.toJSON();
    // 노드 상태는 Gathering 이 들고 있다(리젠 카운트다운 포함)
    life.nodes = this.gathering ? this.gathering.toJSON() : {};
    return {
      version: 8,
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

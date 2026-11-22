/**
 * Home.js — 7단계 하우징(내 집 실내 꾸미기)
 *
 * 실내는 월드와 분리된 작은 3D 씬이다. 들어가면 Game 이 후처리 RenderPass 의
 * scene/camera 를 이 씬으로 바꿔 그리고, 나오면 월드로 되돌린다.
 *
 * ── 조작
 *  · 문 앞에서 [들어가기] → 실내
 *  · [🛋️ 가구] 로 가구 목록(보유·제작)을 열고, 보유 가구를 고르면 유령 가구가 따라온다
 *  · 화면을 탭하면 그 자리에 붙는다(격자 스냅)
 *  · [🔄 회전] — 바닥 가구는 45°, 벽면 가구는 붙는 벽이 바뀐다(왼쪽 벽 ↔ 뒤쪽 벽 ↔ 오른쪽 벽)
 *  · [놓기] 로 확정, 놓인 가구를 탭해 고르면 [회전]·[치우기] 가 그 가구에 적용된다
 *
 * 데이터(가구 정의·방 크기)는 homeData.js, 그림은 homeArt.js 가 갖는다.
 * 세이브에는 progress.home(보유·배치·방문)만 남는다.
 */
import * as THREE from 'three';
import { HOUSE, ROOM, WALL_CYCLE, WALL_NAMES, furnitureOf } from '../systems/homeData.js';
import { floorTexture, furnitureTexture, houseTexture, wallTexture, warmGlowTexture } from '../sprites/homeArt.js';
import { Billboard, blobShadow } from '../sprites/Billboard.js';

const SNAP = (v, step) => Math.round(v / step) * step;
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

export class Home {
  /**
   * @param {{progress:object, scene:THREE.Scene, atlases:Map, hooks:object}} opts
   */
  constructor(opts) {
    this.scene = opts.scene;
    this.atlases = opts.atlases;
    this.progress = opts.progress;
    this.terrain = opts.terrain || null;
    this.hooks = opts.hooks || {};

    this.inside = false;
    this.placed = []; // { id, mesh, group, data, index }
    this.selected = -1;
    this.ghost = null; // { id, group, mesh, data }
    this.pendingPlace = null; // 놓기 전 가구 id

    /* ── 실내 씬 ─────────────────────────────────────── */
    this.room = new THREE.Scene();
    this.room.background = new THREE.Color('#d9cde0');
    this.room.fog = null;
    this.camera = new THREE.PerspectiveCamera(52, window.innerWidth / Math.max(1, window.innerHeight), 0.1, 120);

    this.root = new THREE.Group();
    this.root.name = 'HomeInterior';
    this.room.add(this.root);

    const hemi = new THREE.HemisphereLight('#fff6ea', '#e8d7bd', 1.05);
    this.room.add(hemi);
    const key = new THREE.DirectionalLight('#fff1d8', 0.95);
    key.position.set(-6, 12, 7);
    this.room.add(key);
    const warm = new THREE.PointLight('#ffd9a0', 0.85, 16, 1.6);
    warm.position.set(0, 2.6, 1.5);
    this.room.add(warm);
    this.warmLight = warm;

    this.#buildRoom();
    this.raycaster = new THREE.Raycaster();
    this.floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    this.tmpV = new THREE.Vector3();
    this.fitCamera();
    this.sync();

    /* ── 섬 위의 집 그림 ─────────────────────────────── */
    this.exterior = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: houseTexture(), transparent: true, depthWrite: false, toneMapped: false })
    );
    this.exterior.scale.set(HOUSE.height * (96 / 84), HOUSE.height, 1);
    this.exterior.renderOrder = 4;
    // Sprite 원점은 가운데 — 발밑이 지면에 닿도록 절반 높이만큼 올린다
    const groundY = this.terrain ? this.terrain.groundY(HOUSE.x, HOUSE.z) : 0;
    this.exterior.position.set(HOUSE.x, groundY + HOUSE.height / 2, HOUSE.z);
    this.exterior.name = 'HomeExterior';
    this.exterior.visible = true;
  }

  /* ── 실내 무대 ─────────────────────────────────────── */

  #buildRoom() {
    const { width: W, depth: D, wallHeight: H } = ROOM;

    // 바닥
    const floorGeo = new THREE.PlaneGeometry(W, D);
    floorGeo.rotateX(-Math.PI / 2);
    const floor = new THREE.Mesh(
      floorGeo,
      new THREE.MeshBasicMaterial({ map: floorTexture(), toneMapped: true })
    );
    floor.material.map.repeat.set(W / 2.6, D / 2.6);
    floor.material.map.needsUpdate = true;
    floor.position.set(0, 0, 0);
    floor.name = 'HomeFloor';
    floor.userData.homeFloor = true;
    this.root.add(floor);
    this.floorMesh = floor;

    // 벽 3면 — 안쪽을 보도록 회전
    const mkWall = (w2, h2, tint) => {
      const mat = new THREE.MeshBasicMaterial({ map: wallTexture(), color: tint, toneMapped: true, side: THREE.FrontSide });
      return new THREE.Mesh(new THREE.PlaneGeometry(w2, h2), mat);
    };
    const back = mkWall(W, H, '#f3e6cf');
    back.position.set(0, H / 2, -D / 2);
    back.name = 'HomeWallBack';
    this.root.add(back);

    const left = mkWall(D, H, '#ddcbb0');
    left.position.set(-W / 2, H / 2, 0);
    left.rotation.y = Math.PI / 2;
    left.name = 'HomeWallLeft';
    this.root.add(left);

    const right = mkWall(D, H, '#ddcbb0');
    right.position.set(W / 2, H / 2, 0);
    right.rotation.y = -Math.PI / 2;
    right.name = 'HomeWallRight';
    this.root.add(right);

    // 걸레받이 · 상단 몰딩 — 벽과 바닥의 경계를 또렷하게
    const trimMat = new THREE.MeshBasicMaterial({ color: '#8a6743', toneMapped: true });
    const trim = (w2, h2, d2, x, y, z) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w2, h2, d2), trimMat);
      m.position.set(x, y, z);
      this.root.add(m);
      return m;
    };
    trim(W + 0.16, 0.16, 0.1, 0, 0.08, -D / 2 + 0.05);
    trim(0.1, 0.16, D + 0.16, -W / 2 + 0.05, 0.08, 0);
    trim(0.1, 0.16, D + 0.16, W / 2 - 0.05, 0.08, 0);
    trim(W + 0.16, 0.1, 0.1, 0, H - 0.05, -D / 2 + 0.05);
    trim(0.1, 0.1, D + 0.16, -W / 2 + 0.05, H - 0.05, 0);
    trim(0.1, 0.1, D + 0.16, W / 2 - 0.05, H - 0.05, 0);

    // 바닥 테두리(방이 땅에서 뜨지 않게)
    const base = new THREE.Mesh(
      new THREE.BoxGeometry(W + 0.5, 0.32, D + 0.5),
      new THREE.MeshBasicMaterial({ color: '#b99c76', toneMapped: true })
    );
    base.position.set(0, -0.17, 0);
    this.root.add(base);

    // 창밖 대신 두는 은은한 빛무리 — 방 안이 어둡게 죽지 않게
    const glow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: warmGlowTexture(),
        transparent: true,
        opacity: 0.1,
        depthWrite: false,
        toneMapped: false,
        blending: THREE.AdditiveBlending,
      })
    );
    glow.scale.set(5.5, 5.5, 1);
    glow.position.set(0, 3.2, -1.2);
    this.root.add(glow);

    // 선택 표시 링
    const ringGeo = new THREE.RingGeometry(0.42, 0.62, 28);
    ringGeo.rotateX(-Math.PI / 2);
    this.selectRing = new THREE.Mesh(
      ringGeo,
      new THREE.MeshBasicMaterial({ color: '#ff9ec2', transparent: true, opacity: 0.85, depthWrite: false, toneMapped: false })
    );
    this.selectRing.position.y = 0.03;
    this.selectRing.visible = false;
    this.root.add(this.selectRing);
  }

  /** 세로 화면에 방이 꽉 차도록 카메라를 맞춘다(창 크기가 바뀌면 다시 부른다) */
  fitCamera() {
    const aspect = window.innerWidth / Math.max(1, window.innerHeight);
    const fov = (this.camera.fov * Math.PI) / 180;
    const hHalf = Math.atan(Math.tan(fov / 2) * aspect);
    const needW = ROOM.width * 1.06;
    const dist = needW / 2 / Math.max(0.05, Math.tan(hHalf));
    const pitch = (48 * Math.PI) / 180;
    const focus = new THREE.Vector3(0, 1.25, -0.3);
    this.camera.position.set(
      focus.x,
      focus.y + Math.sin(pitch) * dist,
      focus.z + Math.cos(pitch) * dist * 0.92
    );
    this.camera.aspect = aspect;
    this.camera.lookAt(focus);
    this.camera.updateProjectionMatrix();
    this.focus = focus;
  }

  /* ── 상태 · 복원 ───────────────────────────────────── */

  homeState() {
    const h = this.progress.home;
    if (!h || typeof h !== 'object') this.progress.home = { owned: {}, placed: [], visits: 0 };
    if (!this.progress.home.owned || typeof this.progress.home.owned !== 'object') this.progress.home.owned = {};
    if (!Array.isArray(this.progress.home.placed)) this.progress.home.placed = [];
    return this.progress.home;
  }

  ownedCount(id) {
    return Math.max(0, Math.floor(Number(this.homeState().owned[id]) || 0));
  }

  addOwned(id, n = 1) {
    if (!furnitureOf(id)) return 0;
    const st = this.homeState();
    st.owned[id] = Math.min(9, Math.max(0, Math.floor(Number(st.owned[id]) || 0)) + n);
    return st.owned[id];
  }

  takeOwned(id, n = 1) {
    const st = this.homeState();
    const have = this.ownedCount(id);
    const take = Math.min(have, Math.max(0, n));
    if (take <= 0) return 0;
    st.owned[id] = have - take;
    return take;
  }

  get placedCount() {
    return this.homeState().placed.length;
  }

  /** 벽면 가구의 월드 좌표 — wall(뒤·왼쪽·오른쪽) + u(벽을 따라가는 위치 0~1) */
  wallPoint(wall, u) {
    const { width: W, depth: D, wallGap } = ROOM;
    const t = clamp(u, 0.06, 0.94);
    if (wall === 'left') return { x: -W / 2 + wallGap, z: (t - 0.5) * (D - 0.9), rot: Math.PI / 2 };
    if (wall === 'right') return { x: W / 2 - wallGap, z: (t - 0.5) * (D - 0.9), rot: -Math.PI / 2 };
    return { x: (t - 0.5) * (W - 0.9), z: -D / 2 + wallGap, rot: 0 };
  }

  /** 저장된 배치 → 3D 다시 세우기 */
  sync() {
    for (const p of this.placed) {
      this.root.remove(p.group);
      p.mesh.geometry.dispose();
      p.mesh.material.dispose();
      if (p.shadow) {
        this.root.remove(p.shadow);
        p.shadow.geometry.dispose();
        p.shadow.material.dispose();
      }
    }
    this.placed = [];
    this.selected = -1;
    this.selectRing.visible = false;
    const st = this.homeState();
    st.placed = st.placed.filter((d) => d && furnitureOf(d.id)).slice(0, ROOM.maxPlaced);
    for (const d of st.placed) {
      if (furnitureOf(d.id).kind === 'wall') {
        if (!WALL_CYCLE.includes(d.wall)) d.wall = 'back';
        const pt = this.wallPoint(d.wall, Number(d.u) || 0.5);
        d.x = pt.x;
        d.z = pt.z;
        d.rot = pt.rot;
      } else {
        d.x = clamp(Number(d.x) || 0, -ROOM.width / 2 + ROOM.margin, ROOM.width / 2 - ROOM.margin);
        d.z = clamp(Number(d.z) || 0, -ROOM.depth / 2 + ROOM.margin, ROOM.depth / 2 - 1.35);
        d.rot = Number(d.rot) || 0;
      }
      const built = this.#spawnFurniture(d);
      if (built) {
        built.index = this.placed.length;
        this.placed.push(built);
      }
    }
  }

  #spawnFurniture(data, { ghost = false } = {}) {
    const def = furnitureOf(data.id);
    if (!def) return null;
    const tex = furnitureTexture(def.id);
    const geo = new THREE.PlaneGeometry(def.w, def.h);
    // 발밑(또는 벽에 붙는 아래쪽)을 원점으로
    geo.translate(0, def.h / 2, 0);
    const mat = new THREE.MeshBasicMaterial({
      map: tex,
      transparent: true,
      alphaTest: 0.16,
      depthWrite: true,
      side: THREE.DoubleSide,
      toneMapped: true,
      opacity: ghost ? 0.62 : 1,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.name = `Furniture_${def.id}`;
    mesh.userData.furniture = data;

    const group = new THREE.Group();
    group.name = `FurnitureGroup_${def.id}`;

    if (def.kind === 'wall') {
      const pt = this.wallPoint(data.wall || 'back', Number(data.u) || 0.5);
      group.position.set(pt.x, def.mount || 1.6, pt.z);
      // 벽면 가구는 벽에 붙은 채 카메라를 향한다 — 옆벽(90°)에 걸면 종잇장처럼 보이지 않게
      group.rotation.y = Math.atan2(this.camera.position.x - pt.x, this.camera.position.z - pt.z);
      mesh.position.set(0, -def.h / 2, 0);
      mesh.scale.setScalar(1.12);
    } else if (def.flat) {
      group.position.set(data.x, 0.02, data.z);
      group.rotation.y = data.rot || 0;
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.y = 0.01;
    } else {
      group.position.set(data.x, 0, data.z);
      group.rotation.y = data.rot || 0;
    }
    group.add(mesh);

    // 바닥 가구에는 부드러운 그림자
    let shadow = null;
    if (def.kind === 'floor' && !def.flat) {
      shadow = blobShadow(def.w * 0.36, ghost ? 0.1 : 0.22);
      shadow.position.set(0, 0.015, 0);
      group.add(shadow);
    }

    this.root.add(group);
    return { id: def.id, def, group, mesh, shadow, data, ghost };
  }

  /* ── 들어가기 · 나가기 ─────────────────────────────── */

  enter() {
    if (this.inside) return false;
    this.inside = true;
    this.homeState().visits = Math.min(9999, (Number(this.homeState().visits) || 0) + 1);
    this.fitCamera();
    this.sync();
    this.hooks.onEnter?.();
    this.hooks.toast?.('🏠 우리 집 — 가구를 골라 방을 꾸며 보세요', 2400);
    return true;
  }

  exit() {
    if (!this.inside) return false;
    this.cancelPlace();
    this.select(-1);
    this.inside = false;
    this.hooks.onExit?.();
    return true;
  }

  /* ── 가구 놓기 ─────────────────────────────────────── */

  /** 보유 가구 하나를 집어 든다 — 탭한 자리에 유령 가구가 따라온다 */
  beginPlace(id) {
    const def = furnitureOf(id);
    if (!def) return { ok: false, reason: 'id' };
    if (this.ownedCount(id) <= 0) return { ok: false, reason: 'none' };
    if (this.placedCount >= ROOM.maxPlaced) return { ok: false, reason: 'full' };
    this.cancelPlace();
    const data =
      def.kind === 'wall'
        ? { id, wall: 'back', u: 0.5, x: 0, z: -ROOM.depth / 2 + ROOM.wallGap, rot: 0 }
        : { id, x: 0, z: 0.6, rot: 0 };
    const built = this.#spawnFurniture(data, { ghost: true });
    if (!built) return { ok: false, reason: 'id' };
    this.ghost = built;
    this.pendingPlace = id;
    this.select(-1);
    this.hooks.onChange?.('ghost');
    return { ok: true, def, data };
  }

  cancelPlace() {
    if (!this.ghost) return false;
    this.root.remove(this.ghost.group);
    this.ghost.mesh.geometry.dispose();
    this.ghost.mesh.material.dispose();
    this.ghost = null;
    this.pendingPlace = null;
    this.hooks.onChange?.('cancel');
    return true;
  }

  /** 유령 가구를 탭한 자리로 (격자 스냅 · 벽면 가구는 벽에 붙임) */
  moveGhostTo(x, z) {
    if (!this.ghost) return null;
    const def = this.ghost.def;
    if (def.kind === 'wall') {
      const wall = this.#nearestWall(x, z);
      if (!wall) return null;
      const u = this.#uOnWall(wall, x, z);
      this.ghost.data.wall = wall;
      this.ghost.data.u = u;
      const pt = this.wallPoint(wall, u);
      this.ghost.group.position.set(pt.x, def.mount || 1.6, pt.z);
      this.ghost.group.rotation.y = pt.rot;
      this.ghost.data.x = pt.x;
      this.ghost.data.z = pt.z;
      this.ghost.mesh.material.opacity = 0.62;
      return this.ghost.data;
    }
    const gx = clamp(SNAP(x, ROOM.grid), -ROOM.width / 2 + ROOM.margin, ROOM.width / 2 - ROOM.margin);
    const gz = clamp(SNAP(z, ROOM.grid), -ROOM.depth / 2 + ROOM.margin, ROOM.depth / 2 - 1.35);
    this.ghost.data.x = gx;
    this.ghost.data.z = gz;
    this.ghost.group.position.set(gx, def.flat ? 0.02 : 0, gz);
    return this.ghost.data;
  }

  /** 유령 가구 확정 — 보유 수에서 하나 빠지고 배치 목록에 들어간다 */
  confirmPlace() {
    if (!this.ghost) return { ok: false, reason: 'none' };
    const id = this.ghost.id;
    if (this.takeOwned(id, 1) <= 0) {
      this.cancelPlace();
      return { ok: false, reason: 'none' };
    }
    const data = { ...this.ghost.data };
    const st = this.homeState();
    st.placed.push(data);
    this.root.remove(this.ghost.group);
    this.ghost.mesh.geometry.dispose();
    this.ghost.mesh.material.dispose();
    this.ghost = null;
    this.pendingPlace = null;
    this.sync();
    this.select(st.placed.length - 1);
    this.hooks.onChange?.('place');
    return { ok: true, data };
  }

  /* ── 벽 판정 ──────────────────────────────────────── */

  #nearestWall(x, z) {
    const { width: W, depth: D, wallSnap } = ROOM;
    const options = [
      { wall: 'back', d: Math.abs(z + D / 2) },
      { wall: 'left', d: Math.abs(x + W / 2) },
      { wall: 'right', d: Math.abs(x - W / 2) },
    ].sort((a, b) => a.d - b.d);
    return options[0].d <= wallSnap ? options[0].wall : null;
  }

  #uOnWall(wall, x, z) {
    const { width: W, depth: D } = ROOM;
    const t = wall === 'back' ? (x + (W - 0.9) / 2) / (W - 0.9) : (z + (D - 0.9) / 2) / (D - 0.9);
    return clamp(t, 0.06, 0.94);
  }

  /* ── 선택 · 회전 · 치우기 ─────────────────────────── */

  select(index) {
    this.selected = index >= 0 && index < this.placed.length ? index : -1;
    if (this.selected < 0) {
      this.selectRing.visible = false;
      this.hooks.onChange?.('select');
      return null;
    }
    const p = this.placed[this.selected];
    const def = p.def;
    if (def.kind === 'wall') {
      this.selectRing.visible = false;
    } else {
      this.selectRing.visible = true;
      this.selectRing.position.set(p.data.x, 0.04, p.data.z);
      this.selectRing.scale.setScalar(Math.max(0.9, def.w * 0.42));
    }
    this.hooks.onChange?.('select');
    return p.data;
  }

  /** 선택한 가구(없으면 유령)를 회전 — 바닥 45°, 벽면은 붙는 벽이 바뀐다 */
  rotate() {
    if (this.ghost) {
      const def = this.ghost.def;
      if (def.kind === 'wall') {
        const cur = this.ghost.data.wall || 'back';
        const next = WALL_CYCLE[(WALL_CYCLE.indexOf(cur) + 1) % WALL_CYCLE.length];
        this.ghost.data.wall = next;
        const pt = this.wallPoint(next, this.ghost.data.u);
        this.ghost.group.position.set(pt.x, def.mount || 1.6, pt.z);
        this.ghost.group.rotation.y = pt.rot;
        this.ghost.data.x = pt.x;
        this.ghost.data.z = pt.z;
        this.ghost.data.rot = pt.rot;
        return { ok: true, wall: next, wallName: WALL_NAMES[next], ghost: true };
      }
      this.ghost.data.rot = ((Number(this.ghost.data.rot) || 0) + ROOM.rotateStep) % (Math.PI * 2);
      this.ghost.group.rotation.y = this.ghost.data.rot;
      return { ok: true, rot: this.ghost.data.rot, ghost: true, deg: Math.round((this.ghost.data.rot * 180) / Math.PI) };
    }
    if (this.selected < 0) return { ok: false, reason: 'none' };
    const p = this.placed[this.selected];
    const def = p.def;
    if (def.kind === 'wall') {
      const cur = p.data.wall || 'back';
      const next = WALL_CYCLE[(WALL_CYCLE.indexOf(cur) + 1) % WALL_CYCLE.length];
      p.data.wall = next;
      const pt = this.wallPoint(next, p.data.u);
      p.data.x = pt.x;
      p.data.z = pt.z;
      p.data.rot = pt.rot;
      p.group.position.set(pt.x, def.mount || 1.6, pt.z);
      p.group.rotation.y = pt.rot;
      this.#commit();
      return { ok: true, wall: next, wallName: WALL_NAMES[next], index: this.selected };
    }
    p.data.rot = ((Number(p.data.rot) || 0) + ROOM.rotateStep) % (Math.PI * 2);
    p.group.rotation.y = p.data.rot;
    this.#commit();
    return { ok: true, rot: p.data.rot, deg: Math.round((p.data.rot * 180) / Math.PI), index: this.selected };
  }

  /** 선택한 가구를 방에서 치운다 — 보유 목록으로 돌아간다 */
  removeSelected() {
    if (this.selected < 0) return { ok: false, reason: 'none' };
    const st = this.homeState();
    const p = this.placed[this.selected];
    const id = p.data.id;
    st.placed.splice(this.selected, 1);
    this.addOwned(id, 1);
    this.sync();
    this.hooks.onChange?.('remove');
    return { ok: true, id, name: p.def.name };
  }

  /** 지금 고른(또는 놓는 중인) 가구를 다시 집어 옮긴다 */
  pickSelected() {
    if (this.selected < 0) return { ok: false, reason: 'none' };
    const p = this.placed[this.selected];
    const data = { ...p.data };
    this.homeState().placed.splice(this.selected, 1);
    this.addOwned(data.id, 1);
    this.sync();
    const res = this.beginPlace(data.id);
    if (res.ok && res.data) {
      if (data.wall) {
        this.ghost.data.wall = data.wall;
        this.ghost.data.u = data.u;
        const pt = this.wallPoint(data.wall, data.u);
        this.ghost.group.position.set(pt.x, this.ghost.def.mount || 1.6, pt.z);
        this.ghost.group.rotation.y = pt.rot;
        this.ghost.data.x = pt.x;
        this.ghost.data.z = pt.z;
      } else {
        this.ghost.data.x = data.x;
        this.ghost.data.z = data.z;
        this.ghost.data.rot = data.rot;
        this.ghost.group.position.set(data.x, this.ghost.def.flat ? 0.02 : 0, data.z);
        this.ghost.group.rotation.y = data.rot;
      }
    }
    return res;
  }

  #commit() {
    this.hooks.onChange?.('rotate');
  }

  /* ── 화면 탭 ──────────────────────────────────────── */

  /** 캔버스 탭 → 유령 가구 이동 / 놓인 가구 선택 */
  onTap(clientX, clientY) {
    const ndc = new THREE.Vector2(
      (clientX / window.innerWidth) * 2 - 1,
      -((clientY / window.innerHeight) * 2 - 1)
    );
    this.raycaster.setFromCamera(ndc, this.camera);

    // 1) 놓인 가구를 눌렀나
    const targets = this.placed.map((p) => p.mesh);
    if (targets.length) {
      const hits = this.raycaster.intersectObjects(targets, false);
      if (hits.length) {
        const hit = hits[0].object;
        const idx = this.placed.findIndex((p) => p.mesh === hit);
        if (idx >= 0) {
          this.select(idx);
          if (this.ghost) return { kind: 'blocked' };
          return { kind: 'select', index: idx, data: this.placed[idx].data };
        }
      }
    }

    // 2) 바닥 위치
    const pt = new THREE.Vector3();
    const onFloor = this.raycaster.ray.intersectPlane(this.floorPlane, pt);
    if (!onFloor) return { kind: 'none' };
    const x = clamp(pt.x, -ROOM.width / 2, ROOM.width / 2);
    const z = clamp(pt.z, -ROOM.depth / 2, ROOM.depth / 2);

    if (this.ghost) {
      const moved = this.moveGhostTo(x, z);
      if (!moved && this.ghost.def.kind === 'wall') {
        this.hooks.toast?.('🖼️ 벽면 가구예요 — 벽 가까이 탭해 주세요', 1900);
        return { kind: 'nop' };
      }
      return { kind: 'ghost', data: moved };
    }
    this.select(-1);
    return { kind: 'floor', x, z };
  }

  /* ── 매 프레임 ─────────────────────────────────────── */

  update(dt) {
    if (!this.inside) return;
    const t = performance.now() * 0.001;
    this.warmLight.intensity = 0.8 + Math.sin(t * 1.4) * 0.06;
    if (this.selectRing.visible) {
      this.selectRing.material.opacity = 0.6 + Math.sin(t * 3.2) * 0.22;
    }
    for (const p of this.placed) {
      if (p.def.kind !== 'wall') continue;
      p.group.rotation.y = Math.atan2(this.camera.position.x - p.group.position.x, this.camera.position.z - p.group.position.z);
    }
    if (this.ghost && this.ghost.def.kind === 'wall') {
      this.ghost.group.rotation.y = Math.atan2(this.camera.position.x - this.ghost.group.position.x, this.camera.position.z - this.ghost.group.position.z);
    }
    if (this.ghost) {
      this.ghost.group.position.y += Math.sin(t * 4) * 0.0015;
    }
  }

  /** QA·디버그용 요약 */
  state() {
    return {
      inside: this.inside,
      visits: Number(this.homeState().visits) || 0,
      owned: { ...this.homeState().owned },
      placed: this.homeState().placed.map((d) => ({ id: d.id, x: +(d.x || 0).toFixed(2), z: +(d.z || 0).toFixed(2), rot: +(d.rot || 0).toFixed(3), wall: d.wall || null, u: d.u === undefined ? null : +Number(d.u).toFixed(3) })),
      placedCount: this.placed.length,
      selected: this.selected,
      ghost: this.ghost ? { id: this.ghost.id, x: +(this.ghost.data.x || 0).toFixed(2), z: +(this.ghost.data.z || 0).toFixed(2), rot: +(this.ghost.data.rot || 0).toFixed(3), wall: this.ghost.data.wall || null } : null,
      room: { width: ROOM.width, depth: ROOM.depth, height: ROOM.wallHeight },
    };
  }
}

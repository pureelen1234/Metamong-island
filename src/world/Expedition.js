/**
 * Expedition.js — 7단계 원정지 3곳의 작은 맵
 *
 * 월드와 분리된 씬이다. 원정을 떠나면 Game 이 후처리 RenderPass 의 scene/camera 를
 * 이 씬으로 바꾼다. 주인공은 HD-2D 도트 빌보드로 원정지 바닥을 걸어 다니고,
 * 자원 자리를 탭하면 걸어가서 캔다. 제한 시간이 다 되거나 [귀환] 을 누르면 돌아온다.
 *
 * 규칙 수치(제한 시간·기력·수확량)는 expeditionData.js, 그림은 expeditionArt.js 가 갖는다.
 * 세이브에는 progress.expedition(바구니·마지막 원정 Day·횟수)만 남는다.
 */
import * as THREE from 'three';
import { EXPEDITION, EXPEDITION_RESOURCES, SITE_ORDER, siteOf } from '../systems/expeditionData.js';
import { decorTexture, groundTexture, resourceTexture } from '../sprites/expeditionArt.js';
import { Billboard, blobShadow } from '../sprites/Billboard.js';

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

export class Expedition {
  /**
   * @param {{progress:object, atlases:Map, hooks:object}} opts
   */
  constructor(opts) {
    this.progress = opts.progress;
    this.atlases = opts.atlases;
    this.hooks = opts.hooks || {};

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#cfdbe8');
    this.camera = new THREE.PerspectiveCamera(48, window.innerWidth / Math.max(1, window.innerHeight), 0.1, 200);

    this.root = new THREE.Group();
    this.root.name = 'Expedition';
    this.scene.add(this.root);

    this.hemi = new THREE.HemisphereLight('#ffffff', '#d8d0c0', 1.15);
    this.scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight('#fff2dc', 1.0);
    this.sun.position.set(-8, 14, 8);
    this.scene.add(this.sun);

    this.active = false;
    this.site = null;
    this.timer = 0;
    this.collected = {};
    this.nodes = [];
    this.decor = [];
    this.harvested = 0;
    this.startedAt = 0;
    this.avatar = null;
    this.target = null;
    this.harvestT = 0;
    this.walkT = 0;
    this.frameName = 'front1';
    this.raycaster = new THREE.Raycaster();
    this.groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

    this.#buildStage();
    this.fitCamera();
  }

  /* ── 무대 ─────────────────────────────────────────────── */

  #buildStage() {
    // 물 — 원정지 둘레의 짙은 테두리
    const seaGeo = new THREE.CircleGeometry(14, 48);
    seaGeo.rotateX(-Math.PI / 2);
    this.sea = new THREE.Mesh(
      seaGeo,
      new THREE.MeshBasicMaterial({ color: '#7fbfc9', toneMapped: false })
    );
    this.sea.position.y = -0.12;
    this.root.add(this.sea);

    // 섬 바닥
    const groundGeo = new THREE.CircleGeometry(9.6, 56);
    groundGeo.rotateX(-Math.PI / 2);
    this.ground = new THREE.Mesh(
      groundGeo,
      new THREE.MeshBasicMaterial({ map: groundTexture('mist'), toneMapped: false })
    );
    this.ground.name = 'ExpeditionGround';
    this.root.add(this.ground);

    // 둘레 바위 — 원정지마다 다시 배치한다
    this.decorGroup = new THREE.Group();
    this.root.add(this.decorGroup);

    // 자원 자리들
    this.nodeGroup = new THREE.Group();
    this.root.add(this.nodeGroup);

    // 주인공 — 월드와 같은 HD-2D 도트(아틀라스 재사용)
    const atlas = this.atlases ? this.atlases.get('protagonist') : null;
    if (atlas) {
      this.bb = new Billboard(atlas, 'front1', { height: 1.5 });
      this.avatar = this.bb.mesh;
    } else {
      this.avatar = new THREE.Sprite(new THREE.SpriteMaterial({ color: '#f6c9d8', toneMapped: false }));
      this.avatar.scale.set(0.8, 1.4, 1);
    }
    this.avatar.name = 'ExpeditionAvatar';
    this.avatar.position.set(0, 0, 5.6);
    this.root.add(this.avatar);
    this.shadow = blobShadow(0.4, 0.3);
    this.shadow.position.set(0, 0.02, 5.6);
    this.root.add(this.shadow);
    this.pos = { x: 0, z: 5.6 };

    // 목표 표시 링
    const ringGeo = new THREE.RingGeometry(0.3, 0.46, 24);
    ringGeo.rotateX(-Math.PI / 2);
    this.marker = new THREE.Mesh(
      ringGeo,
      new THREE.MeshBasicMaterial({ color: '#ffe1a8', transparent: true, opacity: 0.9, depthWrite: false, toneMapped: false })
    );
    this.marker.visible = false;
    this.marker.position.y = 0.04;
    this.root.add(this.marker);
  }

  fitCamera() {
    const aspect = window.innerWidth / Math.max(1, window.innerHeight);
    const fov = (this.camera.fov * Math.PI) / 180;
    const hHalf = Math.atan(Math.tan(fov / 2) * aspect);
    const needW = 15.5;
    const dist = needW / 2 / Math.max(0.05, Math.tan(hHalf));
    const pitch = (48 * Math.PI) / 180;
    const focus = new THREE.Vector3(0, 0.6, 0.4);
    this.camera.position.set(0, focus.y + Math.sin(pitch) * dist, focus.z + Math.cos(pitch) * dist * 0.95);
    this.camera.aspect = aspect;
    this.camera.lookAt(focus);
    this.camera.updateProjectionMatrix();
  }

  /* ── 원정 시작 ────────────────────────────────────────── */

  /** 오늘 다녀왔는지 — Game 이 모달에서 안내한다 */
  get lastDay() {
    const e = this.progress.expedition;
    return e ? Number(e.lastDay) || 0 : 0;
  }

  /** 원정지로 떠난다 (기력·하루 횟수 확인은 Game 이 먼저 한다) */
  start(siteId, day) {
    const site = siteOf(siteId);
    if (!site) return { ok: false, reason: 'site' };
    if (this.active) return { ok: false, reason: 'active' };

    this.site = site;
    this.active = true;
    this.timer = EXPEDITION.duration;
    this.collected = {};
    this.harvested = 0;
    this.startedAt = performance.now();
    this.target = null;
    this.harvestT = 0;
    this.marker.visible = false;
    this.day = day;

    // 하늘·바다·바닥 색
    this.scene.background = new THREE.Color(site.sky);
    this.ground.material.map = groundTexture(site.id);
    this.ground.material.needsUpdate = true;
    this.hemi.color = new THREE.Color(site.id === 'volcano' ? '#ffd8b8' : site.id === 'ice' ? '#eaf7ff' : '#ffffff');

    // 배경 소품
    for (const d of this.decor) {
      this.decorGroup.remove(d.sprite);
      d.sprite.material.dispose();
    }
    this.decor = [];
    const decorKind = site.id === 'volcano' ? 'vent' : site.id === 'ice' ? 'ice' : 'reef';
    const spots = [
      [-7.0, -3.6, 'rock'], [6.6, 4.2, 'rock'], [-5.4, 5.6, 'rock'], [7.2, -3.2, 'rock'],
      [-1.8, -6.4, decorKind], [3.6, 6.0, decorKind], [-6.4, 1.0, decorKind], [5.0, -5.6, decorKind],
    ];
    for (const [x, z, kind] of spots) {
      const tex = decorTexture(kind);
      const sp = new THREE.Sprite(
        new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, toneMapped: false })
      );
      const h = kind === 'rock' ? 1.1 : 0.95;
      sp.scale.set(h, h, 1);
      sp.position.set(x, h / 2 - 0.06, z);
      sp.renderOrder = 3;
      this.root.add(sp);
      this.decorGroup.add(sp);
      this.decor.push({ sprite: sp, x, z });
    }

    // 자원 자리
    for (const n of this.nodes) {
      this.nodeGroup.remove(n.sprite);
      n.sprite.material.dispose();
    }
    this.nodes = [];
    for (const node of site.nodes) {
      const res = EXPEDITION_RESOURCES[node.type];
      if (!res) continue;
      const tex = resourceTexture(node.type);
      const h = 1.05;
      const sp = new THREE.Sprite(
        new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, toneMapped: false })
      );
      sp.scale.set(h, h, 1);
      sp.position.set(node.x, h / 2, node.z);
      sp.renderOrder = 4;
      sp.userData.nodeIndex = this.nodes.length;
      this.root.add(sp);
      this.nodeGroup.add(sp);
      const sh = blobShadow(0.26, 0.2);
      sh.position.set(node.x, 0.02, node.z);
      this.root.add(sh);
      this.nodes.push({ type: node.type, x: node.x, z: node.z, sprite: sp, shadow: sh, taken: false, bob: Math.random() * 6.28 });
    }

    // 주인공은 남쪽 입구에서
    this.pos = { x: 0, z: 5.8 };
    this.avatar.position.set(0, 0, 5.8);
    this.shadow.position.set(0, 0.02, 5.8);
    this.setFrame('front1');
    this.hooks.onStart?.({ site: site.id, nodes: this.nodes.length });
    return { ok: true, site: site.id, nodes: this.nodes.length, timer: this.timer };
  }

  /* ── 조작 ─────────────────────────────────────────────── */

  /** 화면 탭 — 자원 자리 또는 바닥 */
  tap(clientX, clientY) {
    if (!this.active) return { kind: 'idle' };
    const ndc = new THREE.Vector2(
      (clientX / window.innerWidth) * 2 - 1,
      -((clientY / window.innerHeight) * 2 - 1)
    );
    this.raycaster.setFromCamera(ndc, this.camera);
    const sprites = this.nodes.filter((n) => !n.taken).map((n) => n.sprite);
    if (sprites.length) {
      const hits = this.raycaster.intersectObjects(sprites, false);
      if (hits.length) {
        const nodeIndex = hits[0].object.userData.nodeIndex;
        const node = this.nodes[nodeIndex];
        if (node) {
          this.walkTo(node.x, node.z, node);
          return { kind: 'node', index: nodeIndex, type: node.type };
        }
      }
    }
    const pt = new THREE.Vector3();
    if (!this.raycaster.ray.intersectPlane(this.groundPlane, pt)) return { kind: 'none' };
    const len = Math.hypot(pt.x, pt.z);
    if (len > 9.2) return { kind: 'none' };
    this.walkTo(pt.x, pt.z, null);
    return { kind: 'floor', x: pt.x, z: pt.z };
  }

  /** 가장 가까운 자원 자리를 골라 걸어간다 — 액션 버튼 보조용 */
  nearestNode() {
    let best = null;
    let bestD = 2.4;
    for (const n of this.nodes) {
      if (n.taken) continue;
      const d = Math.hypot(n.x - this.pos.x, n.z - this.pos.z);
      if (d < bestD) {
        bestD = d;
        best = n;
      }
    }
    return best;
  }

  /** [캐기] — 발밑 가까운 자리를 캔다 */
  collectNearby() {
    const n = this.nearestNode();
    if (!n) return { ok: false, reason: 'none' };
    this.walkTo(n.x, n.z, n);
    return { ok: true, node: n };
  }

  walkTo(x, z, node = null) {
    this.target = { x, z, node };
    this.harvestT = 0;
    this.marker.visible = true;
    this.marker.position.set(x, 0.04, z);
  }

  #harvest(node) {
    if (!node || node.taken) return null;
    if (!this.progress.useStamina(EXPEDITION.harvestStamina)) {
      this.hooks.toast?.('💪 기력이 부족해요 — [귀환] 해서 쉬어야겠어요', 2200);
      this.target = null;
      this.marker.visible = false;
      return null;
    }
    const [lo, hi] = EXPEDITION.yield;
    const n = lo + Math.floor(Math.random() * (hi - lo + 1));
    node.taken = true;
    node.sprite.visible = false;
    node.shadow.visible = false;
    this.collected[node.type] = Math.min(999, (Number(this.collected[node.type]) || 0) + n);
    this.harvested += 1;
    const res = EXPEDITION_RESOURCES[node.type];
    this.hooks.onHarvest?.({ type: node.type, n, res });
    this.marker.visible = false;
    return { type: node.type, n };
  }

  /* ── 귀환 ─────────────────────────────────────────────── */

  /** 지금까지 챙긴 것을 들고 돌아온다 — Game 이 바구니에 담는다 */
  stop(reason = 'manual') {
    if (!this.active) return null;
    const result = {
      site: this.site ? this.site.id : null,
      collected: { ...this.collected },
      harvested: this.harvested,
      reason,
      day: this.day,
      total: Object.values(this.collected).reduce((a, b) => a + b, 0),
    };
    this.active = false;
    this.site = null;
    this.target = null;
    this.marker.visible = false;
    this.hooks.onReturn?.(result);
    return result;
  }

  /* ── 매 프레임 ────────────────────────────────────────── */

  update(dt) {
    if (!this.active) return;
    this.timer = Math.max(0, this.timer - dt);

    // 자원 자리 둥실둥실
    const t = performance.now() * 0.001;
    for (const n of this.nodes) {
      if (n.taken) continue;
      n.bob += dt * 2.4;
      n.sprite.position.y = 0.42 + Math.sin(n.bob) * 0.05;
    }

    // 걸어가기
    if (this.target) {
      const dx = this.target.x - this.pos.x;
      const dz = this.target.z - this.pos.z;
      const d = Math.hypot(dx, dz);
      if (d > 0.08) {
        const step = Math.min(d, EXPEDITION.walkSpeed * dt);
        this.pos.x += (dx / d) * step;
        this.pos.z += (dz / d) * step;
        this.walkT += dt;
        const front = dz > 0.05;
        const name = `${front ? 'front' : 'back'}${(Math.floor(this.walkT * 9) % 4) + 1}`;
        if (name !== this.frameName) this.setFrame(name);
      } else if (this.target.node) {
        this.harvestT += dt;
        if (this.harvestT >= EXPEDITION.harvestTime) {
          this.#harvest(this.target.node);
          this.target = null;
        }
      } else if (d <= 0.08) {
        this.target = null;
        this.marker.visible = false;
        this.setFrame('idle');
      }
    }

    this.avatar.position.set(this.pos.x, 0, this.pos.z);
    this.shadow.position.set(this.pos.x, 0.02, this.pos.z);
    if (this.bb) this.bb.mesh.visible = true;

    if (this.timer <= 0) {
      this.hooks.toast?.('⏳ 제한 시간이 다 됐어요 — 자동으로 돌아갑니다', 2400);
      this.stop('timeout');
    }
  }

  setFrame(name) {
    this.frameName = name;
    if (this.bb) {
      try {
        this.bb.setFrame(name);
      } catch (err) {
        /* 프레임이 없으면 그대로 둔다 */
      }
    }
  }

  /** QA·디버그용 */
  state() {
    return {
      active: this.active,
      site: this.site ? this.site.id : null,
      timer: Math.round(this.timer * 10) / 10,
      collected: { ...this.collected },
      collectedTotal: Object.values(this.collected).reduce((a, b) => a + b, 0),
      harvested: this.harvested,
      nodes: this.nodes.map((n) => ({ type: n.type, x: n.x, z: n.z, taken: n.taken })),
      left: this.nodes.filter((n) => !n.taken).length,
      pos: { x: +this.pos.x.toFixed(2), z: +this.pos.z.toFixed(2) },
      sites: SITE_ORDER,
    };
  }
}

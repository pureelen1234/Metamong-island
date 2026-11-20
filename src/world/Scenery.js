/**
 * Scenery.js — HD-2D 배경 소품: 도트 건물 4채 + 자연물(벚꽃나무·초록나무·꽃덤불·바위·울타리·가로등)
 * 모두 투명 PNG 빌보드라 카메라를 향해 서 있고, 그림자는 지형이 진짜로 받는다.
 *
 * 1단계 추가: 채집 가능한 자연물(나무·바위·꽃덤불)은 노드(node)로 등록해
 *   · 타격 시 흔들림(pop)
 *   · 채집 완료 시 반투명 그루터기 + 새싹으로 전환(충돌 반경 해제)
 *   · 리젠 시 원래 모습으로 복귀
 * 를 담당한다. 게임 규칙(기력·드롭·리젠 시간)은 Gathering.js 가 갖고,
 * 여기서는 "보이는 상태"만 바꾼다. 복구가 끝난 등대의 밤 불빛도 여기서 켠다.
 */
import * as THREE from 'three';
import { LANDMARKS, NATURE } from '../config.js';
import { Billboard, blobShadow } from '../sprites/Billboard.js';
import { HARVEST, harvestKindOf } from '../systems/items.js';
import { glowTexture, sproutTexture, stumpTexture } from '../sprites/icons3d.js';

const BUILDING_FRAME = { workshop: 'workshop', lighthouse: 'lighthouse', vending: 'vending', dock: 'dock' };
// 충돌 반경은 스프라이트 발밑 폭에 맞춘다 — 그림 폭(높이×종횡비)의 절반보다 조금 작게
// workshop 2.8×1.19→폭 3.3 / lighthouse 4.4×0.61→2.7 / vending 1.8×0.68→1.2 / dock 1.7×1.34→2.3
const BUILDING_COLLIDER = { workshop: 1.2, lighthouse: 0.82, vending: 0.55, dock: 0.9 };

/** 채집 후 남는 그루터기 — 나무는 밑동, 바위는 자갈, 꽃덤불은 흙더미 */
const STUMP_SIZE = { tree: [1.05, 1.35], rock: [0.8, 0.62], flower: [0.78, 0.56] };
/** 채집된 나무·바위 스프라이트는 이만큼 줄어들며 사라진다 */
const STUMP_SCALE = 0.06;
const STUMP_OPACITY = 0.0;

export class Scenery {
  constructor(terrain, atlases) {
    this.terrain = terrain;
    this.group = new THREE.Group();
    this.group.name = 'Scenery';
    this.sites = [];
    this.billboards = [];
    this.colliders = [];
    /** @type {Array<object>} 채집 노드 */
    this.nodes = [];
    this.beacon = null;

    const buildings = atlases.get('buildings');
    const nature = atlases.get('nature');

    for (const lm of LANDMARKS) {
      const y = lm.water ? 0 : Math.max(terrain.sampleHeight(lm.x, lm.z), 0.02);
      const bb = new Billboard(buildings, BUILDING_FRAME[lm.id], { height: lm.height, exact: true });
      bb.mesh.position.set(lm.x, y, lm.z);
      bb.mesh.name = `Building_${lm.id}`;
      this.group.add(bb.mesh);
      this.billboards.push(bb);
      const site = { ...lm, y, billboard: bb, built: false };
      site.kind = 'site';
      bb.mesh.userData.site = site;
      this.sites.push(site);
      this.colliders.push({ x: lm.x, z: lm.z, r: BUILDING_COLLIDER[lm.id] || 1.0 });

      const sh = blobShadow(lm.height * 0.34, 0.26);
      sh.position.set(lm.x, y + 0.02, lm.z);
      this.group.add(sh);
    }

    for (const item of NATURE) {
      const y = Math.max(terrain.sampleHeight(item.x, item.z), 0.02);
      const bb = new Billboard(nature, item.frame, { height: item.height, exact: true });
      bb.mesh.position.set(item.x, y, item.z);
      bb.mesh.name = `Nature_${item.frame}_${item.x}_${item.z}`;
      this.group.add(bb.mesh);
      this.billboards.push(bb);

      let collider = null;
      if (item.collide) {
        collider = { x: item.x, z: item.z, r: item.collide };
        this.colliders.push(collider);
      }

      const sh = blobShadow((item.collide || 0.3) * 1.25, 0.22);
      sh.position.set(item.x, y + 0.02, item.z);
      this.group.add(sh);

      const kind = harvestKindOf(item.frame);
      if (kind) {
        const node = this.#createNode(item, kind, y, bb, collider);
        bb.mesh.userData.node = node;
        this.nodes.push(node);
      }
    }

    this.#buildBeacon();
  }

  #createNode(item, kind, y, billboard, collider) {
    const def = HARVEST[kind];
    const [hMin, hMax] = def.hits;
    const hitsNeeded = hMin + Math.floor(Math.random() * (hMax - hMin + 1));

    // 채집이 끝난 자리에 남는 그루터기(밑동)와 새싹
    const stubSize = STUMP_SIZE[kind] || STUMP_SIZE.tree;
    const stub = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: stumpTexture(kind), transparent: true, depthWrite: false, toneMapped: false, opacity: 0 })
    );
    stub.scale.set(stubSize[0], stubSize[1], 1);
    stub.position.set(item.x, y + stubSize[1] * 0.46, item.z);
    stub.visible = false;
    stub.renderOrder = 3;
    this.group.add(stub);

    const sprout = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: sproutTexture(), transparent: true, depthWrite: false, toneMapped: false })
    );
    sprout.scale.set(0.55, 0.55, 1);
    sprout.position.set(item.x + 0.42, y + 0.3, item.z + 0.45);
    sprout.renderOrder = 5;
    sprout.visible = false;
    sprout.renderOrder = 4;
    this.group.add(sprout);

    return {
      key: `${item.frame}@${item.x},${item.z}`,
      isNode: true,
      kind,
      frame: item.frame,
      x: item.x,
      z: item.z,
      y,
      height: item.height,
      billboard,
      mesh: billboard.mesh,
      collider,
      baseR: item.collide || 0,
      hitsNeeded,
      hitsLeft: hitsNeeded,
      harvested: false,
      respawn: 0,
      berryT: 24 + Math.random() * 26,
      hasBerry: false,
      scale: 1,
      targetScale: 1,
      opacity: 1,
      targetOpacity: 1,
      popT: 0,
      sprout,
      stub,
      stubTarget: 0,
    };
  }

  /* ── 채집 연출 ────────────────────────────────────────── */

  /** 타격 한 번 — 스프라이트가 좌우로 부르르 떨린다 */
  pop(node) {
    node.popT = 0.26;
  }

  /** 채집 완료 ↔ 리젠: 나무는 밑동 그루터기 + 새싹으로 바뀐다 */
  setHarvested(node, harvested) {
    node.harvested = !!harvested;
    node.targetScale = harvested ? STUMP_SCALE : 1;
    node.targetOpacity = harvested ? STUMP_OPACITY : 1;
    node.stubTarget = harvested ? 0.92 : 0;
    node.sprout.visible = !!harvested;
    if (harvested) {
      node.mesh.material.transparent = true;
      node.mesh.material.depthWrite = false;
    }
    if (node.collider) node.collider.r = harvested ? 0 : node.baseR;
    if (!harvested) {
      node.mesh.material.depthWrite = true;
      node.hasBerry = false;
    }
  }

  /** 저장된 상태를 그대로 반영(불러오기 직후) */
  applyNodeState(node, state) {
    if (!state) return;
    const harvested = state.left <= 0 || state.respawn > 0;
    node.hitsLeft = Math.max(1, Math.min(node.hitsNeeded, state.left || node.hitsNeeded));
    node.respawn = Math.max(0, Number(state.respawn) || 0);
    node.mesh.material.transparent = true;
    node.scale = harvested ? STUMP_SCALE : 1;
    node.opacity = harvested ? STUMP_OPACITY : 1;
    node.mesh.scale.setScalar(node.scale);
    node.mesh.material.opacity = node.opacity;
    node.harvested = harvested;
    node.targetScale = harvested ? STUMP_SCALE : 1;
    node.targetOpacity = harvested ? STUMP_OPACITY : 1;
    node.sprout.visible = harvested;
    node.stubTarget = harvested ? 0.92 : 0;
    node.stub.material.opacity = node.stubTarget;
    node.stub.visible = harvested;
    if (node.collider) node.collider.r = harvested ? 0 : node.baseR;
    if (!harvested) node.mesh.material.depthWrite = true;
  }

  /* ── 복구된 건물 ──────────────────────────────────────── */

  setBuilt(id, built = true) {
    const site = this.sites.find((s) => s.id === id);
    if (!site) return;
    site.built = !!built;
    if (this.beacon && id === 'lighthouse') this.beacon.enabled = !!built;
  }

  #buildBeacon() {
    const site = this.sites.find((s) => s.id === 'lighthouse');
    if (!site) return;
    const y = site.y + site.height * 0.86;

    const light = new THREE.PointLight('#ffdca8', 0, 26, 1.7);
    light.position.set(site.x, y, site.z);
    this.group.add(light);

    const glow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTexture(),
        color: '#ffd79a',
        transparent: true,
        opacity: 0,
        depthWrite: false,
        toneMapped: false,
        blending: THREE.AdditiveBlending,
      })
    );
    glow.scale.set(5.2, 5.2, 1);
    glow.position.set(site.x, y, site.z);
    this.group.add(glow);

    // 등대 창의 작은 등 하나 — 밤에만 또렷하게
    const lamp = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: glowTexture(), color: '#fff3cf', transparent: true, opacity: 0, depthWrite: false, toneMapped: false })
    );
    lamp.scale.set(1.1, 1.1, 1);
    lamp.position.set(site.x, y + 0.1, site.z);
    this.group.add(lamp);

    this.beacon = { enabled: false, light, glow, lamp, t: 0 };
  }

  /** 모든 빌보드가 카메라를 향하도록 + 채집 노드 애니메이션 */
  update(dt, camera, night = 0) {
    if (camera) for (const bb of this.billboards) bb.faceCamera(camera);

    for (const node of this.nodes) {
      // 타격 흔들림
      if (node.popT > 0) {
        node.popT = Math.max(0, node.popT - dt);
        const k = node.popT / 0.26;
        node.mesh.rotation.z = Math.sin((1 - k) * 30) * 0.09 * k;
      } else if (node.mesh.rotation.z !== 0) {
        node.mesh.rotation.z = 0;
      }

      // 크기·투명도 보간
      if (Math.abs(node.scale - node.targetScale) > 0.003) {
        node.scale += (node.targetScale - node.scale) * Math.min(1, dt * 9);
        node.mesh.scale.setScalar(node.scale);
        const opa = node.opacity + (node.targetOpacity - node.opacity) * Math.min(1, dt * 9);
        node.opacity = opa;
        node.mesh.material.opacity = opa;
      } else if (Math.abs(node.opacity - node.targetOpacity) > 0.003) {
        node.opacity += (node.targetOpacity - node.opacity) * Math.min(1, dt * 9);
        node.mesh.material.opacity = node.opacity;
      }
      // 그루터기 페이드 인/아웃
      const stubTarget = node.stubTarget || 0;
      if (Math.abs(node.stub.material.opacity - stubTarget) > 0.004) {
        node.stub.material.opacity += (stubTarget - node.stub.material.opacity) * Math.min(1, dt * 9);
        node.stub.visible = node.stub.material.opacity > 0.02;
      } else {
        node.stub.material.opacity = stubTarget;
        node.stub.visible = stubTarget > 0.02;
      }

      if (node.opacity > 0.99 && node.mesh.material.transparent) {
        node.mesh.material.transparent = false;
        node.mesh.material.opacity = 1;
        node.opacity = 1;
      }

      // 새싹은 살랑살랑
      if (node.sprout.visible) {
        node.sprout.position.y = node.y + 0.16 + Math.sin(performance.now() * 0.002 + node.x) * 0.02;
        node.sprout.material.rotation = Math.sin(performance.now() * 0.0012 + node.z) * 0.12;
      }
    }

    // 등대 불빛 — 복구했고 밤일 때만
    if (this.beacon) {
      const b = this.beacon;
      b.t += dt;
      const on = b.enabled ? 1 : 0;
      const flicker = 0.88 + Math.sin(b.t * 1.7) * 0.07 + Math.sin(b.t * 3.3) * 0.05;
      b.light.intensity += (on * (0.8 + night * 3.4) * flicker - b.light.intensity) * Math.min(1, dt * 2.4);
      b.glow.material.opacity += (on * (0.16 + night * 0.72) * flicker - b.glow.material.opacity) * Math.min(1, dt * 2.4);
      b.lamp.material.opacity += (on * (0.2 + night * 0.8) - b.lamp.material.opacity) * Math.min(1, dt * 2.4);
    }
  }
}

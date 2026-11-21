/**
 * Bridge.js — 강을 건너는 목재 다리 (미완성 말뚝 → 완성 데크)
 *
 * 상태(놓았는가)는 Progress.bridge 가 들고 있고, 여기서는 **보이는 것**만 바꾼다.
 *   · 미완성: 강 양쪽에 박아 둔 말뚝 네 개 + 삐뚤빼뚤한 널 + 안내판 + 은은한 빛
 *   · 완성:   강을 가로지르는 널빤지 데크 + 난간 + 양 끝 디딤돌
 * 걷기 판정은 Heightmap.isWalkableAt 이 BRIDGE 데크 사각형을 예외로 열어 준다
 * (다리 완성 상태를 setBridgeBuilt 로 알려 주는 것은 Game 의 몫).
 */
import * as THREE from 'three';
import { BRIDGE } from '../config.js';
import { toonMaterial } from '../render/toon.js';
import { glowTexture } from '../sprites/icons3d.js';

const WOOD = '#c08a52';
const WOOD_TOP = '#dcae74';
const WOOD_DARK = '#8f6236';
const ROPE = '#e6d3ae';

export class Bridge {
  constructor(terrain) {
    this.terrain = terrain;
    this.group = new THREE.Group();
    this.group.name = 'Bridge';
    this.built = false;
    this.t = 0;

    this.siteGroup = new THREE.Group();
    this.deckGroup = new THREE.Group();
    this.group.add(this.siteGroup, this.deckGroup);

    this.#buildSite();
    this.#buildDeck();
    this.setBuilt(false, true);
  }

  /* ── 미완성: 말뚝 · 널 · 안내판 ────────────────────────── */

  #buildSite() {
    const { x, z, halfWidth, halfSpan } = BRIDGE;
    const woodMat = toonMaterial({ color: WOOD });
    const darkMat = toonMaterial({ color: WOOD_DARK });

    // 강 이쪽·저쪽에 박아 둔 말뚝 네 개
    const postGeo = new THREE.BoxGeometry(0.24, 1.5, 0.24);
    for (const dz of [-halfSpan + 0.5, halfSpan - 0.5]) {
      for (const dx of [-halfWidth + 0.15, halfWidth - 0.15]) {
        const post = new THREE.Mesh(postGeo, darkMat);
        post.position.set(x + dx, BRIDGE.deckY + 0.15, z + dz);
        post.castShadow = true;
        post.receiveShadow = true;
        this.siteGroup.add(post);
      }
    }

    // 삐뚤빼뚤 놓인 널 세 장 — 아직 강을 건너지 못한다는 표시
    const plankGeo = new THREE.BoxGeometry(1.6, 0.1, 0.34);
    for (let i = 0; i < 3; i++) {
      const plank = new THREE.Mesh(plankGeo, woodMat);
      plank.position.set(x + (i % 2 ? 0.22 : -0.18), BRIDGE.deckY + 0.42 + i * 0.03, z + halfSpan - 0.5 - i * 0.55);
      plank.rotation.y = (i - 1) * 0.16;
      plank.rotation.z = (i % 2 ? 1 : -1) * 0.05;
      plank.castShadow = true;
      this.siteGroup.add(plank);
    }

    // 안내판 — 남쪽 끝, 다리로 오는 길목
    const signPost = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.05, 0.12), darkMat);
    signPost.position.set(x + halfWidth + 0.55, BRIDGE.deckY + 0.55, z + halfSpan - 0.15);
    signPost.castShadow = true;
    this.siteGroup.add(signPost);
    const board = new THREE.Mesh(new THREE.BoxGeometry(0.86, 0.52, 0.08), toonMaterial({ color: WOOD_TOP }));
    board.position.set(x + halfWidth + 0.55, BRIDGE.deckY + 1.0, z + halfSpan - 0.15);
    board.castShadow = true;
    this.siteGroup.add(board);

    // 은은한 빛 — 아직 놓을 수 있다는 신호
    this.glow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTexture(),
        color: '#ffe6b0',
        transparent: true,
        opacity: 0.5,
        depthWrite: false,
        toneMapped: false,
        blending: THREE.AdditiveBlending,
      })
    );
    this.glow.scale.set(3.6, 3.6, 1);
    this.glow.position.set(x, BRIDGE.deckY + 1.1, z + halfSpan - 0.2);
    this.siteGroup.add(this.glow);
  }

  /* ── 완성: 널빤지 데크 · 난간 · 디딤돌 ───────────────── */

  #buildDeck() {
    const { x, z, halfWidth, halfSpan } = BRIDGE;
    const topMat = toonMaterial({ color: WOOD_TOP });
    const sideMat = toonMaterial({ color: WOOD });
    const darkMat = toonMaterial({ color: WOOD_DARK });

    const length = halfSpan * 2;
    const plankCount = 20;
    const plankDepth = (length - 0.3) / plankCount;
    const plankGeo = new THREE.BoxGeometry(halfWidth * 2, 0.12, plankDepth * 0.86);
    for (let i = 0; i < plankCount; i++) {
      const pz = z - halfSpan + 0.15 + plankDepth * (i + 0.5);
      const plank = new THREE.Mesh(plankGeo, i % 2 ? topMat : sideMat);
      plank.position.set(x, BRIDGE.deckY - 0.06, pz);
      plank.rotation.y = (i % 3 - 1) * 0.012;
      plank.castShadow = true;
      plank.receiveShadow = true;
      this.deckGroup.add(plank);
    }

    // 난간 — 양옆 긴 빔 + 기둥
    const beamGeo = new THREE.BoxGeometry(0.1, 0.1, length);
    for (const dx of [-halfWidth + 0.08, halfWidth - 0.08]) {
      const beam = new THREE.Mesh(beamGeo, darkMat);
      beam.position.set(x + dx, BRIDGE.deckY + 0.52, z);
      beam.castShadow = true;
      this.deckGroup.add(beam);
    }
    const railPostGeo = new THREE.BoxGeometry(0.12, 0.62, 0.12);
    const railPosts = Math.max(3, Math.round(length / 1.6));
    for (let i = 0; i <= railPosts; i++) {
      const pz = z - halfSpan + (length / railPosts) * i;
      for (const dx of [-halfWidth + 0.08, halfWidth - 0.08]) {
        const post = new THREE.Mesh(railPostGeo, sideMat);
        post.position.set(x + dx, BRIDGE.deckY + 0.24, pz);
        post.castShadow = true;
        this.deckGroup.add(post);
      }
    }

    // 양 끝 디딤돌 — 강둑에 얹히는 돌 받침
    const stoneGeo = new THREE.BoxGeometry(halfWidth * 2 + 0.5, 0.3, 0.55);
    for (const dz of [-halfSpan + 0.1, halfSpan - 0.1]) {
      const step = new THREE.Mesh(stoneGeo, toonMaterial({ color: '#ded6c6' }));
      step.position.set(x, BRIDGE.deckY - 0.18, z + dz);
      step.receiveShadow = true;
      this.deckGroup.add(step);
    }
  }

  /* ── 상태 ─────────────────────────────────────────────── */

  setBuilt(built, instant = false) {
    this.built = !!built;
    this.siteGroup.visible = !this.built;
    this.deckGroup.visible = this.built;
    if (this.built) {
      this.deckGroup.scale.set(1, instant ? 1 : 0.02, 1);
      this.deckGroup.position.y = instant ? 0 : 0.4;
    } else {
      this.deckGroup.scale.set(1, 1, 1);
      this.deckGroup.position.y = 0;
    }
  }

  /** 완성 연출 — 데크가 아래에서 올라오며 자리를 잡는다 */
  update(dt, night = 0) {
    this.t += dt;
    if (this.built) {
      if (this.deckGroup.scale.y < 1) {
        this.deckGroup.scale.y += (1 - this.deckGroup.scale.y) * Math.min(1, dt * 6);
        this.deckGroup.position.y += (0 - this.deckGroup.position.y) * Math.min(1, dt * 6);
        if (this.deckGroup.scale.y > 0.995) {
          this.deckGroup.scale.y = 1;
          this.deckGroup.position.y = 0;
        }
      }
      return;
    }
    if (this.glow) {
      const pulse = 0.34 + Math.sin(this.t * 1.9) * 0.12 + night * 0.25;
      this.glow.material.opacity = pulse;
      const s = 3.4 + Math.sin(this.t * 1.5) * 0.22;
      this.glow.scale.set(s, s, 1);
    }
  }
}

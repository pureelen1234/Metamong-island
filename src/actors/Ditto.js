/**
 * Ditto.js — 어설픈 메타몽 (도트 스프라이트 · HD-2D)
 *
 * · 기본 메타몽: ditto_basic 아틀라스(숨쉬기·신남·찌부)로 통통 튄다.
 * · 위장 6종: disguises 아틀라스(조약돌·우체통·화분·벤치·버섯·이정표) 한 프레임 + 살짝 흔들림.
 * 가까이 다가가면 반응(폴짝·하트)하고, 살펴보면 도감에 등록된다.
 */
import * as THREE from 'three';
import { Billboard, blobShadow, heartSprite, glowDisc } from '../sprites/Billboard.js';

const BASIC_IDLE = ['idle1', 'idle2', 'idle3', 'idle4'];
const BASIC_HAPPY = ['smile1', 'smile2', 'smile3', 'smile4'];
const BASIC_JOY = ['joy1', 'joy2', 'joy3', 'joy4'];

export class Ditto {
  constructor(def, terrain, atlases) {
    this.kind = 'ditto';
    this.id = def.id;
    this.name = def.name;
    this.flavor = def.flavor || '';
    this.variant = def.variant || 'basic';
    this.isBasic = this.variant === 'basic';
    this.discovered = false;
    this.terrain = terrain;
    this.height = def.height || 0.8;

    this.position = new THREE.Vector3(def.x, terrain.groundY(def.x, def.z), def.z);
    this.group = new THREE.Group();
    this.group.name = `Ditto_${def.id}`;
    this.group.position.copy(this.position);

    this.atlas = atlases.get(this.isBasic ? 'ditto_basic' : 'disguises');
    this.billboard = new Billboard(this.atlas, this.isBasic ? 'idle1' : this.variant, {
      height: this.height,
      exact: !this.isBasic,
    });
    this.group.add(this.billboard.mesh);
    this.mesh = this.billboard.mesh;
    this.mesh.userData.actor = this;
    this.group.userData.actor = this;
    this.hitMesh = this.mesh;

    this.shadow = blobShadow(this.height * 0.46, 0.26);
    this.shadow.position.set(def.x, this.position.y + 0.02, def.z);

    this.heart = heartSprite(0.24);
    this.heart.position.set(0, this.height * 1.05, 0);
    this.group.add(this.heart);

    // 가까이 오면 바닥에 은은하게 번지는 반짝 링
    this.ring = glowDisc(this.height * 0.46);
    this.ring.position.y = 0.04;
    this.ring.visible = false;
    this.group.add(this.ring);

    this.t = Math.random() * 6.28;
    this.near = false;
    this.reactT = 0;
    this.hop = 0;
    this.joy = 0;
    this.frameIdx = 0;
    this.frameT = 0;
    this.sprites = [this.billboard.material];
  }

  distanceTo(pos) {
    const dx = this.position.x - pos.x;
    const dz = this.position.z - pos.z;
    return Math.hypot(dx, dz);
  }

  setNear(v) {
    this.near = v;
  }

  markDiscovered() {
    this.discovered = true;
    this.joy = 3.2;
    this.hop = 1;
    this.reactT = 1;
  }

  interact() {
    this.reactT = 1.4;
    this.hop = 1;
  }

  update(dt, playerPos, camera) {
    this.t += dt;
    if (this.joy > 0) this.joy = Math.max(0, this.joy - dt);
    if (this.reactT > 0) this.reactT = Math.max(0, this.reactT - dt);

    // 프레임 애니메이션
    this.frameT += dt;
    if (this.isBasic) {
      const set = this.joy > 0 ? BASIC_JOY : this.near || this.reactT > 0 ? BASIC_HAPPY : BASIC_IDLE;
      const fps = this.joy > 0 ? 7 : 3.2;
      if (this.frameT > 1 / fps) {
        this.frameT = 0;
        this.frameIdx = (this.frameIdx + 1) % 4;
      }
      const name = set[this.frameIdx];
      if (this.billboard.frame !== this.atlas.frames.get(name)) this.billboard.setFrame(name);
    } else if (this.frameT > 2.4 && Math.random() < 0.5) {
      // 위장 메타몽: 가끔 몰래 움찔
      this.frameT = 0;
      this.billboard.setFrame(this.variant);
    }

    // 숨쉬기·폴짝
    const breathe = 1 + Math.sin(this.t * 1.7) * (this.isBasic ? 0.035 : 0.018);
    if (this.hop > 0) this.hop = Math.max(0, this.hop - dt * 2.2);
    const lift = this.hop > 0 ? Math.sin((1 - this.hop) * Math.PI) * this.height * 0.22 : 0;
    const wobble = this.reactT > 0 ? Math.sin(this.t * 26) * 0.06 * this.reactT : 0;

    this.group.position.set(this.position.x, this.position.y + lift, this.position.z);
    this.billboard.mesh.scale.set(breathe + wobble * 0.3, breathe - wobble * 0.3, 1);
    if (camera) this.billboard.faceCamera(camera);

    this.shadow.position.set(this.position.x, this.position.y + 0.02, this.position.z);
    const sk = 1 - lift * 0.7;
    this.shadow.scale.set(sk, 1, sk);

    // 반짝 링
    const target = this.near && !this.discovered ? 0.34 : 0;
    const mat = this.ring.material;
    mat.opacity += (target - mat.opacity) * Math.min(1, dt * 6);
    this.ring.visible = mat.opacity > 0.01;
    if (this.ring.visible) {
      const rs = 1 + Math.sin(this.t * 2.4) * 0.06;
      this.ring.scale.set(rs, 1, rs);
      this.ring.rotation.y += dt * 0.4;
    }

    // 하트
    if (this.reactT > 0 || this.joy > 0) {
      const life = this.joy > 0 ? this.joy / 3.2 : this.reactT / 1.4;
      this.heart.visible = true;
      const p = 1 - Math.min(1, life);
      this.heart.position.set(0, this.height * (1.0 + p * 0.7), 0);
      this.heart.material.opacity = Math.min(1, life * 2.2);
      const s = this.height * 0.3 + p * this.height * 0.14;
      this.heart.scale.set(s, s, 1);
    } else if (this.heart.visible) {
      this.heart.visible = false;
    }

    if (playerPos) this.near = this.distanceTo(playerPos) < 3.8;
  }
}

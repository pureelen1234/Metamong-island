/**
 * Cat.js — 솜이 · 옹이 (도트 스프라이트 · HD-2D)
 *
 * 아틀라스 4×5: 1행 정면 / 2행 뒷면 / 3행 왼쪽 / 4행 오른쪽 걷기 · 5행 앉기·식빵·그루밍·신남
 * 섬을 자유롭게 거닐다가 쉬는 자리에서 포즈를 바꾸고, 쓰다듬으면 폴짝 뛰며 하트를 띄운다.
 *
 * 2단계: 호감도 Lv.3 이상이면 [따라오기] 를 켤 수 있다 — 그때는 배회 대신
 * 플레이어 뒤 1.4m 지점을 목표로 부드럽게 따라온다(모달·일시정지 중에는 멈춤).
 */
import * as THREE from 'three';
import { PLAYER } from '../config.js';
import { Billboard, blobShadow, heartSprite } from '../sprites/Billboard.js';

const WALK_FPS = 7;
const WALK_SPEED = 0.85;
const FOLLOW_SPEED = 3.1;
const FOLLOW_KEEP = 1.45;

export class Cat {
  constructor(def, terrain, atlases) {
    this.kind = 'cat';
    this.id = def.id;
    this.name = def.name;
    this.terrain = terrain;
    this.home = new THREE.Vector2(def.x, def.z);
    this.position = new THREE.Vector3(def.x, terrain.groundY(def.x, def.z), def.z);
    this.height = def.height || 0.9;

    this.atlas = atlases.get(def.set || def.id);
    this.group = new THREE.Group();
    this.group.name = `Cat_${def.id}`;
    this.group.position.copy(this.position);

    this.billboard = new Billboard(this.atlas, 'sit', { height: this.height });
    this.group.add(this.billboard.mesh);
    this.body = this.billboard.mesh;
    this.body.userData.actor = this;
    this.group.userData.actor = this;

    this.shadow = blobShadow(0.24, 0.3);
    this.shadow.position.set(def.x, this.position.y + 0.02, def.z);

    this.heart = heartSprite(0.26);
    this.heart.position.set(0, this.height * 1.1, 0);
    this.group.add(this.heart);

    this.state = 'idle';
    this.stateT = 1 + Math.random() * 2;
    this.target = null;
    this.walkT = Math.random() * 2;
    this.hop = 0;
    this.heartT = 0;
    this.heartMax = 1.4;
    this.pets = 0;
    this.follow = false;
    this.followGrace = 0;
    /** 쓰다듬기·간식 쿨타임(초) */
    this.cd = { pet: 0, snack: 0 };
    this.yaw = Math.random() * Math.PI * 2;
    this.frameName = 'sit';
    this.restPose = 'sit';
    this.sprites = [this.billboard.material];
  }

  distanceTo(pos) {
    const dx = this.position.x - pos.x;
    const dz = this.position.z - pos.z;
    return Math.hypot(dx, dz);
  }

  pet() {
    this.hop = 1;
    this.heartT = 1.4;
    this.heartMax = 1.4;
    this.pets += 1;
    this.state = 'happy';
    this.stateT = 1.2;
    this.billboard.setFrame('happy');
    this.frameName = 'happy';
  }

  /** 간식 — 쓰다듬기보다 크게 기뻐한다 */
  feast() {
    this.pet();
    this.hop = 1.25;
    this.heartT = 1.8;
    this.heartMax = 1.8;
  }

  setFollow(on) {
    this.follow = !!on;
    this.followGrace = 0.4;
    if (!this.follow) this.target = null;
  }

  /** 방향에 맞는 걷기 프레임 (호출자가 walkT 를 먼저 진행시킨다) */
  #walkFrame(nx, nz) {
    const idx = Math.floor(this.walkT * WALK_FPS) % 4;
    const ax = Math.abs(nx);
    const az = Math.abs(nz);
    const name = ax > az * 1.05 ? `${nx < 0 ? 'left' : 'right'}${idx + 1}` : `${nz > 0 ? 'front' : 'back'}${idx + 1}`;
    if (name !== this.frameName) {
      this.frameName = name;
      this.billboard.setFrame(name);
    }
  }

  /** 플레이어를 따라온다 — 너무 가까우면 앉아서 기다린다 */
  #followStep(dt, playerPos) {
    const dx = playerPos.x - this.position.x;
    const dz = playerPos.z - this.position.z;
    const dist = Math.hypot(dx, dz);
    if (dist < FOLLOW_KEEP + 0.35) {
      if (this.state !== 'rest') {
        this.state = 'rest';
        this.stateT = 0.6;
        this.billboard.setFrame(this.restPose);
        this.frameName = this.restPose;
      }
      return;
    }
    const nx = dx / dist;
    const nz = dz / dist;
    const followSpeed = Math.min(PLAYER.speed * 1.12, FOLLOW_SPEED + Math.max(0, dist - 2.2) * 0.9);
    const step = Math.min(dist - FOLLOW_KEEP, followSpeed * dt);
    const px = this.position.x + nx * step;
    const pz = this.position.z + nz * step;
    if (this.terrain.isWalkable(px, pz)) {
      this.position.x = px;
      this.position.z = pz;
      this.state = 'walk';
      this.yaw = Math.atan2(nx, nz);
      this.walkT += dt;
      this.#walkFrame(nx, nz);
    } else if (dist > 4.5 && this.terrain.isWalkable(playerPos.x, playerPos.z)) {
      // 물·바위에 막혀 너무 멀어지면 살짝 뛰어 넘어온다 (물 위 텔레포트 방지)
      const tx = playerPos.x - nx * 1.4;
      const tz = playerPos.z - nz * 1.4;
      if (this.terrain.isWalkable(tx, tz)) {
        this.position.x = tx;
        this.position.z = tz;
      } else {
        this.position.x = playerPos.x;
        this.position.z = playerPos.z;
      }
    }
  }

  #pickTarget() {
    for (let i = 0; i < 12; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 1.2 + Math.random() * 3.4;
      const x = this.home.x + Math.cos(a) * r;
      const z = this.home.y + Math.sin(a) * r;
      if (this.terrain.isWalkable(x, z)) {
        this.target = new THREE.Vector2(x, z);
        this.state = 'walk';
        return;
      }
    }
    this.state = 'idle';
    this.stateT = 1.5;
  }

  #rest() {
    const poses = ['sit', 'loaf', 'groom', 'sit', 'loaf'];
    this.restPose = poses[Math.floor(Math.random() * poses.length)];
    this.state = 'rest';
    this.stateT = 2.6 + Math.random() * 3.4;
    this.billboard.setFrame(this.restPose);
    this.frameName = this.restPose;
  }

  /**
   * @param {number} dt
   * @param {THREE.Camera} camera
   * @param {{x:number,z:number}} [playerPos] 따라오기 대상
   * @param {boolean} [canMove] 모달·일시정지 중에는 false
   */
  update(dt, camera, playerPos = null, canMove = true) {
    this.cd.pet = Math.max(0, this.cd.pet - dt);
    this.cd.snack = Math.max(0, this.cd.snack - dt);
    this.stateT -= dt;

    if (this.follow && playerPos) {
      if (canMove) this.#followStep(dt, playerPos);
    } else if (this.state === 'walk' && this.target) {
      const dx = this.target.x - this.position.x;
      const dz = this.target.y - this.position.z;
      const dist = Math.hypot(dx, dz);
      if (dist < 0.12) {
        this.target = null;
        this.#rest();
      } else {
        const nx = dx / dist;
        const nz = dz / dist;
        const step = Math.min(dist, WALK_SPEED * dt);
        const px = this.position.x + nx * step;
        const pz = this.position.z + nz * step;
        if (this.terrain.isWalkable(px, pz)) {
          this.position.x = px;
          this.position.z = pz;
        } else {
          this.target = null;
          this.#rest();
        }
        this.yaw = Math.atan2(nx, nz);
        this.walkT += dt;
        const idx = Math.floor(this.walkT * WALK_FPS) % 4;
        const ax = Math.abs(nx);
        const az = Math.abs(nz);
        let name;
        if (ax > az * 1.05) name = `${nx < 0 ? 'left' : 'right'}${idx + 1}`;
        else name = `${nz > 0 ? 'front' : 'back'}${idx + 1}`;
        if (name !== this.frameName) {
          this.frameName = name;
          this.billboard.setFrame(name);
        }
      }
    } else if (!this.follow && this.stateT <= 0 && canMove) {
      if (Math.random() < 0.62) this.#pickTarget();
      else this.#rest();
    }

    if (this.state === 'happy' && this.stateT <= 0) {
      this.state = 'rest';
      this.stateT = 1.8;
      this.billboard.setFrame(this.restPose);
      this.frameName = this.restPose;
    }

    // 지면 추종
    const groundY = this.terrain.groundY(this.position.x, this.position.z);
    this.position.y += (groundY - this.position.y) * Math.min(1, dt * 12);

    // 폴짝
    let lift = 0;
    if (this.hop > 0) {
      this.hop = Math.max(0, this.hop - dt * 1.5);
      lift = Math.sin((1 - this.hop) * Math.PI) * 0.22;
    }

    this.group.position.set(this.position.x, this.position.y + lift, this.position.z);
    if (camera) this.billboard.faceCamera(camera);
    this.shadow.position.set(this.position.x, this.position.y + 0.02, this.position.z);
    const k = 1 - lift * 0.8;
    this.shadow.scale.set(k, 1, k);

    // 하트
    if (this.heartT > 0) {
      this.heartT = Math.max(0, this.heartT - dt);
      const p = 1 - this.heartT / Math.max(0.1, this.heartMax || 1.4);
      this.heart.visible = true;
      this.heart.position.set(0, this.height * 1.05 + p * 0.55, 0);
      this.heart.material.opacity = Math.min(1, this.heartT * 1.8);
      const s = this.height * 0.3 + p * this.height * 0.18;
      this.heart.scale.set(s, s, 1);
    } else if (this.heart.visible) {
      this.heart.visible = false;
    }
  }
}

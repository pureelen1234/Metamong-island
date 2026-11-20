/**
 * Player.js — 주인공 (도트 스프라이트 · HD-2D)
 *
 * 아틀라스 4×4: 1행 정면 걷기 / 2행 뒷면 걷기 / 3행 옆모습 걷기 / 4행 대기·손흔들기·점프
 * 이동 방향에 따라 행을 고르고 4프레임을 번갈아 재생한다. 이동·충돌·지형 추종은 기존 코어 그대로.
 */
import * as THREE from 'three';
import { PLAYER } from '../config.js';
import { Billboard, blobShadow } from '../sprites/Billboard.js';

const WALK_FPS = 9.5;
const DUST_COUNT = 14;

export class Player {
  constructor(spawn, terrain, atlases) {
    this.terrain = terrain;
    this.position = new THREE.Vector3(spawn.x, terrain.groundY(spawn.x, spawn.z), spawn.z);
    this.yaw = Math.PI; // 카메라를 등지고 바다를 바란다
    this.targetYaw = this.yaw;
    this.moving = 0;
    this.idleT = 0;
    this.walkT = 0;
    this.flip = false;
    this.emoteT = 0;
    this.frameName = 'idle';
    /** @type {{x:number,z:number,r:number}[]} */
    this.colliders = [];

    this.group = new THREE.Group();
    this.group.name = 'Player';

    this.atlas = atlases.get('protagonist');
    this.billboard = new Billboard(this.atlas, 'idle', { height: PLAYER.spriteHeight });
    this.group.add(this.billboard.mesh);
    this.mesh = this.billboard.mesh;
    this.mesh.userData.actor = this;

    this.shadow = blobShadow(0.4, 0.34);
    this.group.position.copy(this.position);

    this.dust = this.#buildDust();
    this.sprites = [this.billboard.material];
  }

  #buildDust() {
    const geo = new THREE.CircleGeometry(1, 10);
    geo.rotateX(-Math.PI / 2);
    const mat = new THREE.MeshBasicMaterial({
      color: '#fff8e6',
      transparent: true,
      opacity: 0.42,
      depthWrite: false,
      toneMapped: false,
    });
    const mesh = new THREE.InstancedMesh(geo, mat, DUST_COUNT);
    mesh.name = 'PlayerDust';
    mesh.frustumCulled = false;
    mesh.renderOrder = 3;
    this.dustParts = Array.from({ length: DUST_COUNT }, () => ({
      x: 0, y: -99, z: 0, vx: 0, vy: 0, vz: 0, life: 0, max: 1, size: 0.1,
    }));
    this.dustCursor = 0;
    const zero = new THREE.Matrix4().makeScale(0, 0, 0);
    for (let i = 0; i < DUST_COUNT; i++) mesh.setMatrixAt(i, zero);
    mesh.instanceMatrix.needsUpdate = true;
    return mesh;
  }

  #puff(x, y, z, forward) {
    const p = this.dustParts[this.dustCursor];
    this.dustCursor = (this.dustCursor + 1) % DUST_COUNT;
    p.x = x + (Math.random() - 0.5) * 0.16;
    p.y = y + 0.03;
    p.z = z + (Math.random() - 0.5) * 0.16;
    p.vx = -forward.x * 0.5 + (Math.random() - 0.5) * 0.35;
    p.vz = -forward.z * 0.5 + (Math.random() - 0.5) * 0.35;
    p.vy = 0.2 + Math.random() * 0.16;
    p.max = 0.4 + Math.random() * 0.2;
    p.life = p.max;
    p.size = 0.06 + Math.random() * 0.05;
  }

  #updateDust(dt) {
    const m = new THREE.Matrix4();
    const v = new THREE.Vector3();
    const q = new THREE.Quaternion();
    const s = new THREE.Vector3();
    for (let i = 0; i < this.dustParts.length; i++) {
      const p = this.dustParts[i];
      if (p.life <= 0) {
        m.makeScale(0, 0, 0);
        this.dust.setMatrixAt(i, m);
        continue;
      }
      p.life = Math.max(0, p.life - dt);
      const t = 1 - p.life / p.max;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.z += p.vz * dt;
      p.vy -= 0.35 * dt;
      p.vx *= 1 - dt * 2.2;
      p.vz *= 1 - dt * 2.2;
      const size = p.size * (0.55 + t * 1.15) * Math.min(1, (1 - t) * 1.9);
      v.set(p.x, p.y, p.z);
      s.set(size, size, size);
      m.compose(v, q, s);
      this.dust.setMatrixAt(i, m);
    }
    this.dust.instanceMatrix.needsUpdate = true;
  }

  /** 손 흔들기 (상호작용·인사) */
  wave() {
    this.emoteT = 1.4;
  }

  /** @param {{x:number,z:number}} dir 정규화되지 않은 월드 방향(길이 ≤ 1) */
  update(dt, dir, terrain, camera) {
    const mag = Math.min(1, Math.hypot(dir.x, dir.z));
    const t = terrain || this.terrain;
    this.moving += (mag - this.moving) * Math.min(1, dt * 10);
    this.idleT += dt;
    if (this.emoteT > 0) this.emoteT = Math.max(0, this.emoteT - dt);

    if (mag > 0.02) {
      const speed = PLAYER.speed * mag;
      const stepX = (dir.x / (mag || 1)) * speed * dt;
      const stepZ = (dir.z / (mag || 1)) * speed * dt;

      const canX = this.canStand(t, this.position.x + stepX, this.position.z);
      if (canX) this.position.x += stepX;
      const canZ = this.canStand(t, this.position.x, this.position.z + stepZ);
      if (canZ) this.position.z += stepZ;
      if (!canX && !canZ) {
        if (this.canStand(t, this.position.x + stepX * 0.5, this.position.z + stepZ * 0.5)) {
          this.position.x += stepX * 0.5;
          this.position.z += stepZ * 0.5;
        }
      }

      this.targetYaw = Math.atan2(dir.x, dir.z);
      this.walkT += dt;

      // 발걸음마다 먼지
      const stepNow = Math.floor(this.walkT * WALK_FPS * 1.5);
      if (stepNow !== this.lastStep) {
        this.lastStep = stepNow;
        this.#puff(this.position.x, this.position.y, this.position.z, {
          x: dir.x / (mag || 1),
          z: dir.z / (mag || 1),
        });
      }
    }

    // 지면 높이 추종
    this.position.y += (t.groundY(this.position.x, this.position.z) - this.position.y) * Math.min(1, dt * 14);

    // 부드러운 방향 전환
    let diff = this.targetYaw - this.yaw;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    this.yaw += diff * Math.min(1, dt * PLAYER.turnLerp);

    this.#animate(mag);
    this.#faceAndPlace(camera);
    this.#updateDust(dt);
  }

  #animate(mag) {
    if (this.emoteT > 0) {
      this.frameName = this.emoteT > 0.85 ? 'wave' : 'idle';
      this.billboard.setFrame(this.frameName, false);
      return;
    }

    if (mag > 0.06) {
      const idx = Math.floor(this.walkT * WALK_FPS) % 4;
      const ax = Math.abs(Math.sin(this.yaw));
      const az = Math.abs(Math.cos(this.yaw));
      let name;
      let flip = false;
      if (ax > az * 1.02) {
        // 좌우 이동 — 3행 옆모습(왼쪽을 봄)을 오른쪽 이동 시 반전
        name = `side${idx + 1}`;
        flip = this.yaw > 0;
      } else {
        name = this.yaw > Math.PI / 2 || this.yaw < -Math.PI / 2 ? `back${idx + 1}` : `front${idx + 1}`;
      }
      this.frameName = name;
      this.billboard.setFrame(name, flip);
    } else {
      if (this.frameName !== 'idle') {
        this.frameName = 'idle';
        this.billboard.setFrame('idle', false);
      }
    }
  }

  #faceAndPlace(camera) {
    this.group.position.set(this.position.x, this.position.y, this.position.z);
    if (camera) this.billboard.faceCamera(camera);
    this.shadow.position.set(this.position.x, this.position.y + 0.02, this.position.z);
  }

  canStand(terrain, x, z) {
    if (!terrain.isWalkable(x, z)) return false;
    for (let i = 0; i < this.colliders.length; i++) {
      const c = this.colliders[i];
      const dx = x - c.x;
      const dz = z - c.z;
      const r = c.r + PLAYER.radius;
      if (dx * dx + dz * dz < r * r) return false;
    }
    return true;
  }

  teleport(x, z, terrain) {
    const t = terrain || this.terrain;
    this.position.set(x, t.groundY(x, z), z);
    this.group.position.copy(this.position);
    this.shadow.position.set(x, this.position.y + 0.02, z);
  }
}

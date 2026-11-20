/**
 * Player.js — 주인공 액터 (파스텔 로우폴리 · 1 Draw Call + 블롭 그림자)
 * 이동은 축 분리 충돌로 처리해 물가/경사에서 미끄러지듯 막힌다.
 */
import * as THREE from 'three';
import { PLAYER } from '../config.js';
import { part, buildMesh, blobShadow } from '../props/parts.js';

const SKIN = '#ffe3cd';
const SKIN_SHADE = '#f6d2b8';
const HAIR = '#a98a7c';
const DRESS = '#c9b6ec';
const DRESS_DARK = '#b5a0e0';
const EYE = '#3b3a46';
const BLUSH = '#ffc3d2';

export class Player {
  constructor(spawn, terrain) {
    this.terrain = terrain;
    this.position = new THREE.Vector3(spawn.x, terrain.groundY(spawn.x, spawn.z), spawn.z);
    this.yaw = Math.PI; // 카메라를 등지고 서서 바다를 바라본다
    this.targetYaw = this.yaw;
    this.walkPhase = 0;
    this.moving = 0;
    /** @type {{x:number,z:number,r:number}[]} 구조물·프롭·액터 충돌 원 */
    this.colliders = [];

    this.group = new THREE.Group();
    this.group.name = 'Player';
    this.mesh = this.#build();
    this.group.add(this.mesh);

    this.shadow = blobShadow(0.4, 0.18);
    this.group.position.copy(this.position);
  }

  #build() {
    const parts = [];
    // 발
    parts.push(part(new THREE.SphereGeometry(0.1, 8, 6), '#f4e2cf', { position: [-0.12, 0.06, 0.02], scale: [1, 0.7, 1.25] }));
    parts.push(part(new THREE.SphereGeometry(0.1, 8, 6), '#f4e2cf', { position: [0.12, 0.06, 0.02], scale: [1, 0.7, 1.25] }));
    // 다리
    parts.push(part(new THREE.CapsuleGeometry(0.072, 0.16, 3, 8), SKIN_SHADE, { position: [-0.11, 0.2, 0] }));
    parts.push(part(new THREE.CapsuleGeometry(0.072, 0.16, 3, 8), SKIN_SHADE, { position: [0.11, 0.2, 0] }));
    // 원피스
    parts.push(part(new THREE.CylinderGeometry(0.19, 0.33, 0.42, 10), DRESS, { position: [0, 0.5, 0] }));
    parts.push(part(new THREE.CylinderGeometry(0.2, 0.21, 0.1, 10), DRESS_DARK, { position: [0, 0.68, 0] }));
    // 팔
    parts.push(
      part(new THREE.CapsuleGeometry(0.062, 0.2, 3, 8), SKIN, {
        position: [-0.25, 0.55, 0],
        rotation: [0, 0, 0.38],
      })
    );
    parts.push(
      part(new THREE.CapsuleGeometry(0.062, 0.2, 3, 8), SKIN, {
        position: [0.25, 0.55, 0],
        rotation: [0, 0, -0.38],
      })
    );
    // 목 · 머리
    parts.push(part(new THREE.CylinderGeometry(0.07, 0.08, 0.08, 8), SKIN_SHADE, { position: [0, 0.78, 0] }));
    parts.push(part(new THREE.SphereGeometry(0.25, 12, 10), SKIN, { position: [0, 0.96, 0] }));
    // 머리카락
    parts.push(part(new THREE.SphereGeometry(0.265, 12, 10), HAIR, { position: [0, 1.0, -0.03], scale: [1, 0.92, 1] }));
    parts.push(part(new THREE.SphereGeometry(0.275, 12, 10), SKIN, { position: [0, 0.95, 0.02], scale: [0.98, 0.8, 0.95] }));
    // 양갈래 머리
    parts.push(part(new THREE.SphereGeometry(0.13, 10, 8), HAIR, { position: [-0.27, 0.9, -0.03], scale: [0.9, 1.2, 0.9] }));
    parts.push(part(new THREE.SphereGeometry(0.13, 10, 8), HAIR, { position: [0.27, 0.9, -0.03], scale: [0.9, 1.2, 0.9] }));
    // 눈 · 볼
    parts.push(part(new THREE.SphereGeometry(0.031, 8, 8), EYE, { position: [-0.085, 0.97, 0.225] }));
    parts.push(part(new THREE.SphereGeometry(0.031, 8, 8), EYE, { position: [0.085, 0.97, 0.225] }));
    parts.push(part(new THREE.SphereGeometry(0.042, 8, 8), BLUSH, { position: [-0.15, 0.9, 0.2], scale: [1, 0.65, 0.4] }));
    parts.push(part(new THREE.SphereGeometry(0.042, 8, 8), BLUSH, { position: [0.15, 0.9, 0.2], scale: [1, 0.65, 0.4] }));
    // 입
    parts.push(part(new THREE.TorusGeometry(0.035, 0.008, 4, 10, Math.PI), EYE, { position: [0, 0.915, 0.235], rotation: [0, 0, Math.PI] }));

    const mesh = buildMesh(parts);
    mesh.name = 'PlayerBody';
    return mesh;
  }

  /** @param {{x:number,z:number}} dir 정규화되지 않은 월드 방향(길이 ≤ 1) */
  update(dt, dir, terrain) {
    const mag = Math.min(1, Math.hypot(dir.x, dir.z));
    const t = terrain || this.terrain;
    this.moving += (mag - this.moving) * Math.min(1, dt * 10);

    if (mag > 0.02) {
      const speed = PLAYER.speed * mag;
      const stepX = (dir.x / (mag || 1)) * speed * dt;
      const stepZ = (dir.z / (mag || 1)) * speed * dt;

      // 축 분리 이동 → 해안선·구조물을 따라 미끄러진다
      const canX = this.canStand(t, this.position.x + stepX, this.position.z);
      if (canX) this.position.x += stepX;
      const canZ = this.canStand(t, this.position.x, this.position.z + stepZ);
      if (canZ) this.position.z += stepZ;
      if (!canX && !canZ) {
        // 벽에 막히면 살짝 옆으로
        if (this.canStand(t, this.position.x + stepX * 0.5, this.position.z + stepZ * 0.5)) {
          this.position.x += stepX * 0.5;
          this.position.z += stepZ * 0.5;
        }
      }

      this.targetYaw = Math.atan2(dir.x, dir.z);
      this.walkPhase += dt * 10.5 * mag;
    } else {
      this.walkPhase += dt * 1.2;
    }

    // 지면 높이 추종
    this.position.y += (t.groundY(this.position.x, this.position.z) - this.position.y) * Math.min(1, dt * 14);

    // 부드러운 회전
    let diff = this.targetYaw - this.yaw;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    this.yaw += diff * Math.min(1, dt * PLAYER.turnLerp);

    const bob = Math.abs(Math.sin(this.walkPhase)) * 0.075 * this.moving;
    const breathe = Math.sin(this.walkPhase * 0.8) * 0.012 * (1 - this.moving);
    this.group.position.set(this.position.x, this.position.y + bob + breathe, this.position.z);
    this.group.rotation.y = this.yaw;
    this.group.rotation.z = Math.sin(this.walkPhase) * 0.035 * this.moving;

    // 통통 튀는 스쿼시
    const squash = 1 + Math.sin(this.walkPhase * 2) * 0.02 * this.moving;
    this.mesh.scale.set(1 / squash, squash, 1 / squash);

    this.shadow.position.set(this.position.x, this.position.y + 0.03, this.position.z);
  }

  /** 지형 + 충돌 원을 모두 통과해야 설 수 있다 */
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
    this.shadow.position.set(x, this.position.y + 0.03, z);
  }
}

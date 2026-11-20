/**
 * Player.js — 주인공 액터 (찹쌀떡 치비 · 약 2.8등신)
 * 팔·다리 피벗을 따로 두어 걷기 스윙 · 통통 바운스 · 발밑 먼지가 살아 있다.
 * 이동은 축 분리 충돌로 처리해 물가/경사에서 미끄러지듯 막힌다.
 */
import * as THREE from 'three';
import { PLAYER } from '../config.js';
import { part, buildMesh, blobShadow, sphere, rbox, capsule, cyl } from '../props/parts.js';
import { solid } from '../render/toon.js';

const HIP = 0.40; // 엉덩이 높이 (다리 길이)

const SKIN = '#ffe5cd';
const SKIN_SHADE = '#f8d4b8';
const HAIR = '#6d4b3b';
const HAIR_DARK = '#5d3f31';
const SWEATER = '#fff4de';
const SWEATER_SHADE = '#f3e3c6';
const OVERALL = '#bcd3a2';
const OVERALL_DARK = '#a9c48e';
const BOOT = '#a87550';
const BOOT_SOLE = '#8b5f3f';
const EYE = '#4a3428';
const BLUSH = '#ffb8c6';
const BAG = '#c08a5c';

const DUST_COUNT = 18;

export class Player {
  constructor(spawn, terrain) {
    this.terrain = terrain;
    this.position = new THREE.Vector3(spawn.x, terrain.groundY(spawn.x, spawn.z), spawn.z);
    this.yaw = Math.PI; // 카메라를 등지고 서서 바다를 바라본다
    this.targetYaw = this.yaw;
    this.walkPhase = 0;
    this.moving = 0;
    this.idleT = 0;
    /** @type {{x:number,z:number,r:number}[]} 구조물·프롭·액터 충돌 원 */
    this.colliders = [];

    this.group = new THREE.Group();
    this.group.name = 'Player';

    // hip pivot — 여기에 통통 바운스/스쿼시를 건다
    this.rig = new THREE.Group();
    this.rig.name = 'PlayerRig';
    this.rig.position.y = HIP;
    this.group.add(this.rig);

    this.bodyMesh = this.#buildBody();
    this.rig.add(this.bodyMesh);
    this.mesh = this.bodyMesh;
    // 얼굴은 몸통의 자식 → 숨쉬기/스쿼시 스케일을 그대로 따라간다
    this.faceMesh = this.#buildFace();
    this.bodyMesh.add(this.faceMesh);

    this.legL = this.#buildLeg(-1);
    this.legR = this.#buildLeg(1);
    this.rig.add(this.legL, this.legR);

    this.armL = this.#buildArm(-1);
    this.armR = this.#buildArm(1);
    this.rig.add(this.armL, this.armR);

    this.shadow = blobShadow(0.44, 0.05);
    this.group.position.copy(this.position);

    this.dust = this.#buildDust();
  }

  /* ── 몸통 · 머리 (정적 파트는 1 Draw Call) ─────────────────── */

  #buildBody() {
    const parts = [];

    // 원피스(오버롤) 몸통 — 다리가 보이도록 밑단을 올린다
    parts.push(part(sphere(0.19, 20, 16), OVERALL, { position: [0, 0.2, 0], scale: [1, 0.88, 0.86] }));
    // 니트 스웨터 상체 · 목
    parts.push(part(sphere(0.18, 20, 16), SWEATER, { position: [0, 0.41, 0], scale: [1.03, 0.9, 0.88] }));
    parts.push(part(cyl(0.065, 0.075, 0.1, 12), SKIN_SHADE, { position: [0, 0.55, 0] }));
    // 앞치마 단추 · 주머니
    parts.push(part(rbox(0.18, 0.16, 0.07, 0.035), OVERALL, { position: [0, 0.32, 0.125] }));
    parts.push(part(rbox(0.05, 0.2, 0.04, 0.02), OVERALL_DARK, { position: [-0.068, 0.45, 0.1], rotation: [-0.18, 0, 0.03] }));
    parts.push(part(rbox(0.05, 0.2, 0.04, 0.02), OVERALL_DARK, { position: [0.068, 0.45, 0.1], rotation: [-0.18, 0, -0.03] }));
    parts.push(part(sphere(0.019, 8, 6), '#f0cf8e', { position: [-0.068, 0.38, 0.158] }));
    parts.push(part(sphere(0.019, 8, 6), '#f0cf8e', { position: [0.068, 0.38, 0.158] }));
    parts.push(part(rbox(0.1, 0.07, 0.02, 0.012), OVERALL_DARK, { position: [0, 0.25, 0.152] }));

    // 옆으로 멘 가방끈 + 작은 가방
    parts.push(part(rbox(0.03, 0.5, 0.02, 0.012), '#a9744a', { position: [0.04, 0.33, 0.148], rotation: [0, 0, 0.72] }));
    parts.push(part(rbox(0.13, 0.115, 0.075, 0.04), BAG, { position: [0.215, 0.13, 0.06], rotation: [0, 0.25, 0.06] }));
    parts.push(part(rbox(0.135, 0.045, 0.08, 0.02), '#a9744a', { position: [0.215, 0.18, 0.06], rotation: [0, 0.25, 0.06] }));

    // 머리
    parts.push(part(sphere(0.26, 24, 18), SKIN, { position: [0, 0.84, 0] }));
    // 뒤통수 머리카락
    parts.push(part(sphere(0.275, 24, 18), HAIR, { position: [0, 0.84, -0.055], scale: [1.0, 0.97, 0.97] }));
    // 단발 끝
    parts.push(part(sphere(0.17, 18, 14), HAIR_DARK, { position: [0, 0.73, -0.1], scale: [1.0, 0.75, 0.8] }));
    // 앞머리
    parts.push(part(sphere(0.26, 22, 16), HAIR, { position: [0, 1.005, 0.01], scale: [1.03, 0.55, 1.0] }));
    // 양 갈래 단발
    parts.push(part(sphere(0.115, 16, 12), HAIR, { position: [-0.225, 0.74, 0.01], scale: [0.85, 1.2, 0.95] }));
    parts.push(part(sphere(0.115, 16, 12), HAIR, { position: [0.225, 0.74, 0.01], scale: [0.85, 1.2, 0.95] }));

    const mesh = buildMesh(parts);
    mesh.name = 'PlayerBody';
    solid(mesh, 0.0115);
    return mesh;
  }

  /**
   * 얼굴 디테일(눈·하이라이트·볼터치·입·코) — 몸통과 따로 분리한다.
   * 잉크 외곽선이 붙으면 눈알이 튀어나와 보이므로 이 메시에는 헐을 씌우지 않는다.
   * 눈은 얼굴 표면에 살짝 묻히도록 Z를 안쪽으로 넣고 납작하게 눌러 붙인다.
   */
  #buildFace() {
    const parts = [];
    for (const side of [-1, 1]) {
      parts.push(part(sphere(0.046, 14, 12), EYE, { position: [side * 0.088, 0.825, 0.246], scale: [1, 1, 0.5] }));
      parts.push(part(sphere(0.013, 8, 8), '#ffffff', { position: [side * 0.088 + (side < 0 ? 0.012 : -0.012), 0.838, 0.266] }));
      parts.push(part(sphere(0.045, 10, 8), BLUSH, { position: [side * 0.155, 0.77, 0.19], scale: [1, 0.6, 0.3] }));
    }
    parts.push(
      part(new THREE.TorusGeometry(0.026, 0.007, 6, 12, Math.PI), '#c9806f', {
        position: [0, 0.745, 0.236],
        rotation: [0, 0, Math.PI],
      })
    );
    parts.push(part(sphere(0.014, 8, 6), '#f6c3a4', { position: [0, 0.782, 0.246] }));

    const mesh = buildMesh(parts);
    mesh.name = 'PlayerFace';
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    return mesh;
  }

  /* ── 다리 (피벗 = 엉덩이) ──────────────────────────────────── */

  #buildLeg(side) {
    const pivot = new THREE.Group();
    pivot.name = side < 0 ? 'LegL' : 'LegR';
    pivot.position.set(side * 0.095, 0, 0);

    const parts = [
      part(capsule(0.08, 0.11, 12), OVERALL, { position: [0, -0.1, 0] }),
      part(new THREE.CylinderGeometry(0.087, 0.087, 0.05, 12), OVERALL_DARK, { position: [0, -0.19, 0] }),
      part(rbox(0.125, 0.11, 0.185, 0.05), BOOT, { position: [0, -0.285, 0.03] }),
      part(rbox(0.13, 0.035, 0.19, 0.016), BOOT_SOLE, { position: [0, -0.345, 0.03] }),
    ];
    const legMesh = buildMesh(parts);
    legMesh.name = side < 0 ? 'LegMeshL' : 'LegMeshR';
    solid(legMesh, 0.0105);
    pivot.add(legMesh);
    return pivot;
  }

  /* ── 팔 (피벗 = 어깨) ─────────────────────────────────────── */

  #buildArm(side) {
    const pivot = new THREE.Group();
    pivot.name = side < 0 ? 'ArmL' : 'ArmR';
    pivot.position.set(side * 0.21, 0.46, 0);
    pivot.rotation.z = side < 0 ? -0.14 : 0.14;

    const parts = [
      part(capsule(0.06, 0.1, 10), SWEATER, { position: [0, -0.085, 0] }),
      part(sphere(0.066, 12, 10), SWEATER_SHADE, { position: [0, -0.155, 0] }),
      part(sphere(0.055, 12, 10), SKIN, { position: [0, -0.205, 0], scale: [1, 0.95, 1] }),
    ];
    const armMesh = buildMesh(parts);
    armMesh.name = side < 0 ? 'ArmMeshL' : 'ArmMeshR';
    solid(armMesh, 0.0105);
    pivot.add(armMesh);
    return pivot;
  }

  /* ── 발밑 먼지 (1 Draw Call 인스턴스) ─────────────────────── */

  #buildDust() {
    const geo = new THREE.CircleGeometry(1, 10);
    geo.rotateX(-Math.PI / 2);
    const mat = new THREE.MeshBasicMaterial({
      color: '#fff8e6',
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      toneMapped: false,
    });
    const mesh = new THREE.InstancedMesh(geo, mat, DUST_COUNT);
    mesh.name = 'PlayerDust';
    mesh.frustumCulled = false;
    mesh.renderOrder = 3;
    this.dustParts = Array.from({ length: DUST_COUNT }, () => ({
      x: 0,
      y: -99,
      z: 0,
      vx: 0,
      vy: 0,
      vz: 0,
      life: 0,
      max: 1,
      size: 0.1,
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
    p.vy = 0.22 + Math.random() * 0.18;
    p.max = 0.42 + Math.random() * 0.2;
    p.life = p.max;
    p.size = 0.075 + Math.random() * 0.05;
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
      const t = 1 - p.life / p.max; // 0 → 1
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.z += p.vz * dt;
      p.vy -= 0.35 * dt;
      p.vx *= 1 - dt * 2.2;
      p.vz *= 1 - dt * 2.2;
      const grow = 0.55 + t * 1.15;
      const fade = Math.min(1, (1 - t) * 1.9);
      const size = p.size * grow * fade;
      v.set(p.x, p.y, p.z);
      s.set(size, size, size);
      m.compose(v, q, s);
      this.dust.setMatrixAt(i, m);
    }
    this.dust.instanceMatrix.needsUpdate = true;
  }

  /* ── 갱신 ──────────────────────────────────────────────────── */

  /** @param {{x:number,z:number}} dir 정규화되지 않은 월드 방향(길이 ≤ 1) */
  update(dt, dir, terrain) {
    const mag = Math.min(1, Math.hypot(dir.x, dir.z));
    const t = terrain || this.terrain;
    this.moving += (mag - this.moving) * Math.min(1, dt * 10);
    this.idleT += dt;

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
        if (this.canStand(t, this.position.x + stepX * 0.5, this.position.z + stepZ * 0.5)) {
          this.position.x += stepX * 0.5;
          this.position.z += stepZ * 0.5;
        }
      }

      this.targetYaw = Math.atan2(dir.x, dir.z);

      // 속도에 비례한 보폭 — 발걸음이 땅에 닿을 때마다 먼지가 피어오른다
      const prev = this.walkPhase;
      this.walkPhase += dt * 9.2 * Math.max(0.45, mag);
      const stepNow = Math.floor(this.walkPhase / Math.PI);
      const stepBefore = Math.floor(prev / Math.PI);
      if (stepNow !== stepBefore) {
        const side = stepNow % 2 === 0 ? -1 : 1;
        const fx = Math.sin(this.yaw) * 0.02 + Math.cos(this.yaw) * side * 0.1;
        const fz = Math.cos(this.yaw) * 0.02 - Math.sin(this.yaw) * side * 0.1;
        this.#puff(this.position.x + fx, this.position.y, this.position.z + fz, {
          x: dir.x / (mag || 1),
          z: dir.z / (mag || 1),
        });
      }
    } else {
      // 정지: 발끝이 천천히 제자리로
      this.walkPhase += dt * 1.1;
    }

    // 지면 높이 추종
    this.position.y += (t.groundY(this.position.x, this.position.z) - this.position.y) * Math.min(1, dt * 14);

    // 부드러운 회전
    let diff = this.targetYaw - this.yaw;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    this.yaw += diff * Math.min(1, dt * PLAYER.turnLerp);

    const stretch = Math.min(1, this.moving);

    // ── 걷기 스윙 (좌우 교차) + 정지 시 0도 복귀
    const swing = Math.sin(this.walkPhase);
    const legSwing = 0.52 * swing * stretch;
    const armSwing = -0.44 * swing * stretch;
    this.legL.rotation.x = legSwing;
    this.legR.rotation.x = -legSwing;
    this.armL.rotation.x = armSwing;
    this.armR.rotation.x = -armSwing;
    // 팔은 걷는 동안 살짝 벌어지고, 정지하면 편안히 내려온다
    this.armL.rotation.z = -0.14 - 0.1 * stretch;
    this.armR.rotation.z = 0.14 + 0.1 * stretch;

    // ── 통통 바운스 (발걸음 박자)
    const bob = Math.abs(Math.sin(this.walkPhase)) * 0.055 * stretch;
    // ── 숨쉬기 (정지 시)
    const breathe = Math.sin(this.idleT * 2.1) * 0.014 * (1 - stretch);
    const idleSway = Math.sin(this.idleT * 1.35) * 0.02 * (1 - stretch);

    this.rig.position.y = HIP + bob;
    this.rig.rotation.x = 0.07 * stretch;
    this.rig.rotation.z = Math.sin(this.walkPhase) * 0.045 * stretch + idleSway * 0.4;
    this.bodyMesh.rotation.z = idleSway;

    const squash = 1 + Math.sin(this.walkPhase * 2) * 0.025 * stretch + breathe;
    const widen = 1 - Math.sin(this.walkPhase * 2) * 0.02 * stretch - breathe * 0.6;
    this.rig.scale.set(widen, squash, widen);

    this.group.position.set(this.position.x, this.position.y, this.position.z);
    this.group.rotation.y = this.yaw;

    // 그림자: 점프 높이에 따라 살짝 작아진다
    const k = 1 - bob * 1.6;
    this.shadow.scale.set(k, 1, k);
    this.shadow.position.set(this.position.x, this.position.y + 0.03, this.position.z);

    this.#updateDust(dt);
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

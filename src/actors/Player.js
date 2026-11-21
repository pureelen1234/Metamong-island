/**
 * Player.js — 주인공 (도트 스프라이트 · HD-2D)
 *
 * 아틀라스 4×4: 1행 정면 걷기 / 2행 뒷면 걷기 / 3행 옆모습 걷기 / 4행 대기·손흔들기·점프
 * 이동 방향에 따라 행을 고르고 4프레임을 번갈아 재생한다. 이동·충돌·지형 추종은 기존 코어 그대로.
 *
 * ── 문워크 방지 규칙 (2026-11-20 수정)
 * 3행 옆모습은 '왼쪽을 보는' 그림이다. 그래서 오른쪽(+x)으로 갈 때만 좌우 반전(flip)한다.
 * 이 판정은 반드시 -π~π로 감싼 yaw로 해야 한다. yaw를 감싸지 않으면 뒷면(π)에서
 * 왼쪽으로 걸을 때 yaw가 3π/2까지 흘러가 부호가 뒤집혀, 왼쪽으로 가는데 오른쪽을 보는
 * 문워크가 됐다. 아래 wrapAngle()이 그 누적을 막는다.
 */
import * as THREE from 'three';
import { PLAYER } from '../config.js';
import { Billboard, blobShadow } from '../sprites/Billboard.js';

const WALK_FPS = 9.5;
const DUST_COUNT = 14;
const TWO_PI = Math.PI * 2;

/** 각도를 (-π, π] 로 감싼다 — yaw 누적으로 인한 방향 반전을 막는다 */
export function wrapAngle(a) {
  let r = a % TWO_PI;
  if (r <= -Math.PI) r += TWO_PI;
  else if (r > Math.PI) r -= TWO_PI;
  return r;
}

export class Player {
  constructor(spawn, terrain, atlases) {
    this.terrain = terrain;
    this.position = new THREE.Vector3(spawn.x, terrain.groundY(spawn.x, spawn.z), spawn.z);
    this.yaw = Math.PI; // 카메라를 등지고 바다를 바란다
    this.targetYaw = this.yaw;
    this.speedScale = 1;
    this.moving = 0;
    this.idleT = 0;
    this.walkT = 0;
    this.flip = false;
    this.facing = 'back'; // 'front' | 'back' | 'left' | 'right' (QA·디버그용)
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
    // 겹쳐 있으면 먼저 밖으로 — 설비 설치 직후·세이브 복원 직후의 끼임을 여기서 푼다
    this.unstick(t);
    this.moving += (mag - this.moving) * Math.min(1, dt * 10);
    this.idleT += dt;
    if (this.emoteT > 0) this.emoteT = Math.max(0, this.emoteT - dt);

    if (mag > 0.02) {
      const speed = PLAYER.speed * mag * (this.speedScale || 1);
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

    // 부드러운 방향 전환 — 가장 짧은 호로 돌고, 결과를 (-π, π]로 감싼다
    const diff = wrapAngle(this.targetYaw - this.yaw);
    this.yaw = wrapAngle(this.yaw + diff * Math.min(1, dt * PLAYER.turnLerp));

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
      // 감싼 yaw의 x성분 = 바라보는 좌우, z성분 = 앞뒤
      const sx = Math.sin(this.yaw); // +1 오른쪽, -1 왼쪽
      const cz = Math.cos(this.yaw); // +1 정면(카메라 쪽), -1 뒷면
      let name;
      let flip = false;
      if (Math.abs(sx) > Math.abs(cz) * 1.02) {
        // 좌우 이동 — 3행은 왼쪽을 보는 그림이라 오른쪽(+x)일 때만 반전한다
        name = `side${idx + 1}`;
        flip = sx > 0;
        this.facing = flip ? 'right' : 'left';
      } else {
        const back = cz < 0;
        name = `${back ? 'back' : 'front'}${idx + 1}`;
        this.facing = back ? 'back' : 'front';
      }
      this.frameName = name;
      this.flip = flip;
      this.billboard.setFrame(name, flip);
    } else {
      if (this.frameName !== 'idle') {
        this.frameName = 'idle';
        this.flip = false;
        this.facing = 'front';
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
      // allyPass — 아군(주인공·고양이·메타몽)은 지나가는 자리.
      // 방어 설비(울타리·허수아비·포탑·경보등)가 여기 해당한다: 불청객만 Defense 가 따로 막는다.
      if (c.allyPass) continue;
      const dx = x - c.x;
      const dz = z - c.z;
      const r = c.r + PLAYER.radius;
      if (dx * dx + dz * dz < r * r) return false;
    }
    return true;
  }

  /**
   * 콜라이더 안에 겹쳐 있으면 가장 가까운 안전한 자리로 밀어낸다.
   *   · 울타리·설비를 세운 자리에 서 있었거나
   *   · 설비 위에서 저장한 세이브를 다시 불렀을 때
   * 이동이 통째로 막히지 않도록 매 프레임 한 번 확인한다(겹치지 않으면 즉시 반환).
   * @returns {{x:number,z:number}|null} 실제로 옮겼으면 새 자리, 아니면 null
   */
  unstick(terrain) {
    const t = terrain || this.terrain;
    if (this.canStand(t, this.position.x, this.position.z)) return null;
    const from = { x: this.position.x, z: this.position.z };
    let x = from.x;
    let z = from.z;

    // ① 겹친 콜라이더 바깥으로 밀어낸다 — 여러 개가 겹쳐도 몇 번이면 풀린다
    for (let iter = 0; iter < 6; iter++) {
      let pushed = false;
      for (let i = 0; i < this.colliders.length; i++) {
        const c = this.colliders[i];
        if (c.allyPass) continue;
        const r = c.r + PLAYER.radius + 0.02;
        let dx = x - c.x;
        let dz = z - c.z;
        let d = Math.hypot(dx, dz);
        if (d >= r) continue;
        if (d < 1e-4) {
          // 정확히 중심에 서 있다 — 바라보는 반대쪽으로
          dx = -Math.sin(this.yaw);
          dz = -Math.cos(this.yaw);
          d = 1;
        }
        x = c.x + (dx / d) * r;
        z = c.z + (dz / d) * r;
        pushed = true;
      }
      if (!pushed) break;
    }

    // ② 밀려난 자리가 물·절벽이라 못 서면, 가까운 걷는 자리를 찾는다
    const candidates = [{ x, z }];
    for (let ring = 1; ring <= 8; ring++) {
      const rad = ring * 0.25;
      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2 + ring * 0.26;
        candidates.push({ x: x + Math.cos(a) * rad, z: z + Math.sin(a) * rad });
      }
    }
    let best = null;
    let bestD = Infinity;
    for (const p of candidates) {
      if (!t.isWalkable(p.x, p.z)) continue;
      if (!this.canStand(t, p.x, p.z)) continue;
      const d = Math.hypot(p.x - from.x, p.z - from.z);
      if (d < bestD) {
        bestD = d;
        best = p;
      }
    }
    if (!best) return null;
    this.teleport(best.x, best.z, t);
    return { x: best.x, z: best.z };
  }

  teleport(x, z, terrain) {
    const t = terrain || this.terrain;
    this.position.set(x, t.groundY(x, z), z);
    this.group.position.copy(this.position);
    this.shadow.position.set(x, this.position.y + 0.02, z);
  }

  /** 저장값 등 외부에서 방향을 넣을 때도 감싼 값을 쓴다 */
  setYaw(yaw) {
    this.yaw = wrapAngle(yaw);
    this.targetYaw = this.yaw;
  }
}

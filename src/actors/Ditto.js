/**
 * Ditto.js — 어설픈 위장 메타몽 (점 눈 `· ‿ ·` 고정)
 * 돌멩이인 척하다가, 다가가서 살펴보면 살짝 흔들리며 도감에 등록된다.
 */
import * as THREE from 'three';
import { part, buildMesh, blobShadow } from '../props/parts.js';

const VARIANTS = {
  pebble: {
    size: 0.4,
    rock: '#d8d2c4',
    rockShade: '#c8c1b1',
    moss: null,
    eyeSpacing: 0.105,
    eyeY: 0.1,
    scale: [1.22, 0.78, 1.02],
  },
  boulder: {
    size: 0.55,
    rock: '#c6d2bd',
    rockShade: '#b3c2a9',
    moss: '#a4c495',
    eyeSpacing: 0.14,
    eyeY: 0.16,
    scale: [1.15, 0.8, 1.05],
  },
};

export class Ditto {
  constructor(def, terrain) {
    this.kind = 'ditto';
    this.id = def.id;
    this.name = def.name;
    this.flavor = def.flavor || '';
    this.variant = def.variant || 'pebble';
    this.discovered = false;
    this.terrain = terrain;

    const v = VARIANTS[this.variant] || VARIANTS.pebble;
    this.v = v;

    this.base = new THREE.Vector3(def.x, terrain.groundY(def.x, def.z), def.z);
    this.group = new THREE.Group();
    this.group.name = `Ditto_${def.id}`;
    this.group.position.copy(this.base);

    this.mesh = this.#build(v);
    this.mesh.position.y = v.size * 0.52; // 땅에 파묻히지 않게 살짝 들어올린다
    this.mesh.userData.actor = this;
    this.group.userData.actor = this;
    this.group.add(this.mesh);
    this.hitMesh = this.mesh;

    this.shadow = blobShadow(v.size * 1.15, 0.15);
    this.shadow.position.set(this.base.x, this.base.y + 0.03, this.base.z);

    // 다가가면 반짝이는 표식 링
    const ringGeo = new THREE.TorusGeometry(v.size * 0.62, 0.022, 6, 20);
    ringGeo.rotateX(Math.PI / 2);
    this.ring = new THREE.Mesh(
      ringGeo,
      new THREE.MeshBasicMaterial({ color: '#ffd9ea', transparent: true, opacity: 0, depthWrite: false, toneMapped: false })
    );
    this.ring.position.y = v.size * 2.1;
    this.group.add(this.ring);

    // 발견 연출용 확산 링
    const pulseGeo = new THREE.TorusGeometry(v.size * 0.8, 0.03, 6, 24);
    pulseGeo.rotateX(Math.PI / 2);
    this.pulse = new THREE.Mesh(
      pulseGeo,
      new THREE.MeshBasicMaterial({ color: '#ffe6b8', transparent: true, opacity: 0, depthWrite: false, toneMapped: false })
    );
    this.pulse.position.y = v.size * 0.9;
    this.pulse.visible = false;
    this.group.add(this.pulse);

    this.t = Math.random() * 6.28;
    this.near = false;
    this.shakeT = 0;
    this.pulseT = 0;
    this.faceYaw = Math.random() * 6.28;
  }

  #build(v) {
    const parts = [];
    const r = v.size;
    const rock = new THREE.DodecahedronGeometry(r, 0);
    parts.push(part(rock, v.rock, { scale: v.scale }));

    // 아래쪽 그늘진 밑동
    parts.push(
      part(new THREE.DodecahedronGeometry(r * 0.62, 0), v.rockShade, {
        position: [0.02, -r * 0.26, 0.02],
        scale: [1.05, 0.5, 0.95],
      })
    );

    // 이끼 (바위 메타몽)
    if (v.moss) {
      parts.push(
        part(new THREE.IcosahedronGeometry(r * 0.42, 0), v.moss, {
          position: [-r * 0.5, r * 0.32, -r * 0.18],
          scale: [1.2, 0.42, 1.0],
        })
      );
      parts.push(
        part(new THREE.IcosahedronGeometry(r * 0.3, 0), v.moss, {
          position: [r * 0.42, r * 0.18, -r * 0.4],
          scale: [1.1, 0.36, 0.9],
        })
      );
    }

    // 점 눈 `· ‿ ·`
    const eyeZ = r * 0.9;
    const eyeY = v.eyeY;
    const eyeR = r * 0.13;
    parts.push(part(new THREE.SphereGeometry(eyeR, 8, 8), '#3b3a46', { position: [-v.eyeSpacing, eyeY, eyeZ] }));
    parts.push(part(new THREE.SphereGeometry(eyeR, 8, 8), '#3b3a46', { position: [v.eyeSpacing, eyeY, eyeZ] }));
    parts.push(
      part(new THREE.TorusGeometry(r * 0.2, r * 0.032, 4, 12, Math.PI), '#3b3a46', {
        position: [0, eyeY - r * 0.2, eyeZ + r * 0.02],
        rotation: [0, 0, Math.PI],
      })
    );

    const mesh = buildMesh(parts);
    mesh.name = `DittoBody_${this.id}`;
    return mesh;
  }

  distanceTo(pos) {
    const dx = this.base.x - pos.x;
    const dz = this.base.z - pos.z;
    return Math.hypot(dx, dz);
  }

  setNear(v) {
    this.near = v;
  }

  markDiscovered() {
    this.discovered = true;
    this.shakeT = 1;
    this.pulseT = 1;
    this.pulse.visible = true;
  }

  interact() {
    this.shakeT = 1;
  }

  update(dt, playerPos) {
    this.t += dt;

    // 숨쉬기
    const breathe = 1 + Math.sin(this.t * 1.6) * 0.022;
    this.mesh.scale.set(1 / breathe, breathe, 1 / breathe);

    // 가까이 오면 살짝 플레이어 쪽을 본다
    if (playerPos && this.distanceTo(playerPos) < 4.2) {
      const dx = playerPos.x - this.base.x;
      const dz = playerPos.z - this.base.z;
      const want = Math.atan2(dx, dz);
      let diff = want - this.faceYaw;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      this.faceYaw += diff * Math.min(1, dt * 2.2);
    } else {
      this.faceYaw += Math.min(1, dt * 0.4) * 0.02 * Math.sin(this.t * 0.5);
    }
    this.group.rotation.y = this.faceYaw;

    // 흔들림 (발견/터치 연출)
    if (this.shakeT > 0) {
      this.shakeT = Math.max(0, this.shakeT - dt * 1.05);
      const k = this.shakeT * this.shakeT;
      this.group.rotation.z = Math.sin(this.t * 42) * 0.22 * k;
      this.group.position.y = this.base.y + Math.abs(Math.sin(this.t * 30)) * 0.06 * k;
    } else {
      this.group.rotation.z *= 0.86;
      this.group.position.y = this.base.y;
    }

    // 표식 링
    const targetOpacity = this.near && !this.discovered ? 0.85 : this.discovered ? 0.22 : 0;
    const mat = this.ring.material;
    mat.opacity += (targetOpacity - mat.opacity) * Math.min(1, dt * 6);
    const rs = 1 + Math.sin(this.t * 2.6) * 0.07;
    this.ring.scale.set(rs, rs, rs);
    this.ring.rotation.y += dt * 0.8;

    // 발견 확산 링
    if (this.pulseT > 0) {
      this.pulseT = Math.max(0, this.pulseT - dt * 1.15);
      const p = 1 - this.pulseT;
      this.pulse.visible = true;
      this.pulse.scale.setScalar(1 + p * 2.4);
      this.pulse.material.opacity = this.pulseT * 0.7;
      this.pulse.position.y = this.v.size * 0.9 + p * 0.6;
    } else if (this.pulse.visible) {
      this.pulse.visible = false;
      this.pulse.material.opacity = 0;
    }
  }
}

/**
 * Ditto.js — 어설픈 위장 메타몽 (점 눈 `· ‿ ·` 고정)
 * 각진 돌 대신 동글동글 모찌/조약돌 + 라벤더·연회색 + 볼터치.
 * 돌멩이인 척하다가, 다가가서 살펴보면 살짝 흔들리며 도감에 등록된다.
 */
import * as THREE from 'three';
import { part, buildMesh, blobShadow, sphere } from '../props/parts.js';
import { solid } from '../render/toon.js';

const VARIANTS = {
  pebble: {
    size: 0.4,
    rock: '#d3c9ea',
    rockShade: '#c3b7e0',
    belly: '#e9e1f8',
    moss: null,
    spot: null,
    eyeSpacing: 0.105,
    eyeY: 0.38,
    eyeR: 0.034,
  },
  boulder: {
    size: 0.56,
    rock: '#d6d1e6',
    rockShade: '#c5bfd8',
    belly: '#ece7f6',
    moss: '#c9e3bd',
    spot: '#f4efe2',
    eyeSpacing: 0.145,
    eyeY: 0.53,
    eyeR: 0.042,
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
    this.mesh.userData.actor = this;
    this.group.userData.actor = this;
    this.group.add(this.mesh);
    this.hitMesh = this.mesh;

    this.shadow = blobShadow(v.size * 1.15, 0.05);
    this.shadow.position.set(this.base.x, this.base.y + 0.03, this.base.z);

    // 다가가면 반짝이는 표식 링
    const ringGeo = new THREE.TorusGeometry(v.size * 0.42, 0.018, 6, 24);
    ringGeo.rotateX(Math.PI / 2);
    this.ring = new THREE.Mesh(
      ringGeo,
      new THREE.MeshBasicMaterial({ color: '#ffd9ea', transparent: true, opacity: 0, depthWrite: false, toneMapped: false })
    );
    this.ring.position.y = v.size * 2.05;
    this.group.add(this.ring);

    // 발견 연출용 확산 링
    const pulseGeo = new THREE.TorusGeometry(v.size * 0.85, 0.026, 6, 26);
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

    // 동글동글 모찌 몸통 (바닥이 땅에 닿도록 중심을 띄운다)
    parts.push(part(sphere(r, 22, 16), v.rock, { position: [0, r * 0.82, 0], scale: [1.22, 0.86, 1.04] }));
    // 밑동 그늘
    parts.push(part(sphere(r * 0.76, 16, 10), v.rockShade, { position: [0, r * 0.2, 0.04], scale: [1.12, 0.42, 0.98] }));
    // 배 부분 크림 하이라이트
    parts.push(part(sphere(r * 0.52, 14, 10), v.belly, { position: [0, r * 0.55, r * 0.62], scale: [1.05, 0.72, 0.42] }));

    // 이끼 · 크림 반점 (바위 메타몽)
    if (v.moss) {
      parts.push(part(sphere(r * 0.3, 12, 9), v.moss, { position: [-r * 0.55, r * 1.15, -r * 0.2], scale: [1.2, 0.4, 0.95] }));
      parts.push(part(sphere(r * 0.24, 12, 9), v.moss, { position: [r * 0.48, r * 1.0, -r * 0.45], scale: [1.1, 0.38, 0.9] }));
    }
    if (v.spot) {
      parts.push(part(sphere(r * 0.16, 10, 8), v.spot, { position: [-r * 0.7, r * 0.6, r * 0.55], scale: [1, 0.7, 0.4] }));
      parts.push(part(sphere(r * 0.12, 10, 8), v.spot, { position: [r * 0.78, r * 0.75, r * 0.35], scale: [0.9, 0.8, 0.4] }));
    }

    // 점 눈 `· ‿ ·` + 반짝 하이라이트 + 볼터치
    for (const side of [-1, 1]) {
      parts.push(part(sphere(v.eyeR, 12, 10), '#3b3a46', { position: [side * v.eyeSpacing, v.eyeY, r * 1.02] }));
      parts.push(
        part(sphere(v.eyeR * 0.36, 8, 6), '#ffffff', {
          position: [side * v.eyeSpacing + v.eyeR * 0.35, v.eyeY + v.eyeR * 0.38, r * 1.09],
        })
      );
      parts.push(
        part(sphere(r * 0.11, 10, 8), '#ffc9db', {
          position: [side * r * 0.56, v.eyeY - r * 0.14, r * 0.98],
          scale: [1, 0.6, 0.32],
        })
      );
    }
    parts.push(
      part(new THREE.TorusGeometry(v.eyeR * 0.9, v.eyeR * 0.17, 6, 12, Math.PI), '#3b3a46', {
        position: [0, v.eyeY - r * 0.2, r * 1.06],
        rotation: [0, 0, Math.PI],
      })
    );

    const mesh = buildMesh(parts);
    mesh.name = `DittoBody_${this.id}`;
    solid(mesh, 0.012);
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
    const breathe = 1 + Math.sin(this.t * 1.6) * 0.024;
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

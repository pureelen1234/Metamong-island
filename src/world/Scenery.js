/**
 * Scenery.js — HD-2D 배경 소품: 도트 건물 4채 + 자연물(벚꽃나무·초록나무·꽃덤불·바위·울타리·가로등)
 * 모두 투명 PNG 빌보드라 카메라를 향해 서 있고, 그림자는 지형이 진짜로 받는다.
 */
import * as THREE from 'three';
import { LANDMARKS, NATURE } from '../config.js';
import { Billboard, blobShadow } from '../sprites/Billboard.js';

const BUILDING_FRAME = { workshop: 'workshop', lighthouse: 'lighthouse', vending: 'vending', dock: 'dock' };
// 충돌 반경은 스프라이트 발밑 폭에 맞춘다 — 그림 폭(높이×종횡비)의 절반보다 조금 작게
// workshop 2.8×1.19→폭 3.3 / lighthouse 4.4×0.61→2.7 / vending 1.8×0.68→1.2 / dock 1.7×1.34→2.3
const BUILDING_COLLIDER = { workshop: 1.2, lighthouse: 0.82, vending: 0.55, dock: 0.9 };

export class Scenery {
  constructor(terrain, atlases) {
    this.group = new THREE.Group();
    this.group.name = 'Scenery';
    this.sites = [];
    this.billboards = [];
    this.colliders = [];

    const buildings = atlases.get('buildings');
    const nature = atlases.get('nature');

    for (const lm of LANDMARKS) {
      const y = lm.water ? 0 : Math.max(terrain.sampleHeight(lm.x, lm.z), 0.02);
      const bb = new Billboard(buildings, BUILDING_FRAME[lm.id], { height: lm.height, exact: true });
      bb.mesh.position.set(lm.x, y, lm.z);
      bb.mesh.name = `Building_${lm.id}`;
      this.group.add(bb.mesh);
      this.billboards.push(bb);
      this.sites.push({ ...lm, y, billboard: bb });
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
      if (item.collide) this.colliders.push({ x: item.x, z: item.z, r: item.collide });

      const sh = blobShadow((item.collide || 0.3) * 1.25, 0.22);
      sh.position.set(item.x, y + 0.02, item.z);
      this.group.add(sh);
    }
  }

  /** 모든 빌보드가 카메라를 향하도록 */
  update(dt, camera) {
    if (!camera) return;
    for (const bb of this.billboards) bb.faceCamera(camera);
  }
}

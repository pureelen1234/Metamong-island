/**
 * Drops.js — 바닥에 떨어진 재료 픽업
 *
 * 나무 밑에 떨어지는 열매, 가방이 가득 차서 잠깐 내려놓은 재료가 여기 산다.
 * 다가가면(0.95m) 자동으로 주워지고, 멀리서 톡 누르면 "더 가까이" 안내가 뜬다.
 * 나무 하나당 열매는 하나만 — sourceKey 로 중복 스폰을 막는다.
 */
import * as THREE from 'three';
import { ITEMS } from '../systems/items.js';
import { itemTexture, glowTexture } from '../sprites/icons3d.js';

const MAX_DROPS = 16;
const PICKUP_RANGE = 0.95;

export class DropField {
  constructor(scene, terrain) {
    this.terrain = terrain;
    this.group = new THREE.Group();
    this.group.name = 'Drops';
    scene.add(this.group);
    /** @type {Array<{itemId:string,count:number,x:number,z:number,y:number,sprite:THREE.Sprite,halo:THREE.Sprite,sourceKey:string|null,age:number}>} */
    this.items = [];
    this.time = 0;
  }

  /** 나무 하나에 열매가 이미 떨어져 있는지 */
  hasSource(sourceKey) {
    return !!sourceKey && this.items.some((d) => d.sourceKey === sourceKey);
  }

  spawn(itemId, count, x, z, sourceKey = null) {
    const id = ITEMS[itemId] ? itemId : 'berry';
    if (sourceKey && this.hasSource(sourceKey)) return null;
    while (this.items.length >= MAX_DROPS) {
      const naturalIdx = this.items.findIndex((d) => d.sourceKey !== null);
      if (naturalIdx >= 0) {
        this.remove(this.items[naturalIdx]);
      } else if (sourceKey !== null) {
        return null;
      } else {
        this.remove(this.items[0]);
      }
    }

    const groundY = Math.max(this.terrain.groundY(x, z), 0.02);
    const sprite = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: itemTexture(id), transparent: true, depthWrite: false, toneMapped: false })
    );
    sprite.scale.set(0.44, 0.44, 1);
    sprite.position.set(x, groundY + 0.36, z);
    sprite.renderOrder = 3;

    const halo = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTexture(),
        color: ITEMS[id].tint,
        transparent: true,
        opacity: 0.8,
        depthWrite: false,
        toneMapped: false,
        blending: THREE.AdditiveBlending,
      })
    );
    halo.scale.set(0.95, 0.95, 1);
    halo.position.copy(sprite.position);
    halo.position.y -= 0.04;
    halo.renderOrder = 2;

    const drop = { itemId: id, count: Math.max(1, Math.floor(count) || 1), x, z, y: groundY, sprite, halo, sourceKey, age: Math.random() * 6 };
    sprite.userData.drop = drop;
    this.group.add(halo);
    this.group.add(sprite);
    this.items.push(drop);
    return drop;
  }

  remove(drop) {
    const i = this.items.indexOf(drop);
    if (i < 0) return;
    this.items.splice(i, 1);
    drop.sprite.material.dispose();
    drop.halo.material.dispose();
    this.group.remove(drop.sprite);
    this.group.remove(drop.halo);
  }

  /** 걸어가면 자동으로 줍는다 */
  update(dt, playerPos, onPickup) {
    this.time += dt;
    for (let i = this.items.length - 1; i >= 0; i--) {
      const d = this.items[i];
      d.age += dt;
      const bob = Math.sin(this.time * 2.3 + d.age) * 0.07;
      d.sprite.position.y = d.y + 0.38 + bob;
      d.halo.position.y = d.y + 0.32 + bob * 0.6;
      const pulse = 0.62 + Math.sin(this.time * 3.1 + d.age) * 0.18;
      d.halo.material.opacity = pulse;
      const scale = 0.9 + Math.sin(this.time * 2.6 + d.age) * 0.08;
      d.halo.scale.set(scale, scale, 1);

      if (!playerPos) continue;
      const dist = Math.hypot(d.x - playerPos.x, d.z - playerPos.z);
      if (dist <= PICKUP_RANGE) {
        // 줍는 쪽이 false 를 돌려주면(가방이 가득 참) 바닥에 그대로 둔다
        const took = onPickup ? onPickup(d) : true;
        if (took !== false) this.remove(d);
      }
    }
  }

  rayTargets() {
    return this.items.map((d) => d.sprite);
  }

  clear() {
    for (let i = this.items.length - 1; i >= 0; i--) this.remove(this.items[i]);
  }
}

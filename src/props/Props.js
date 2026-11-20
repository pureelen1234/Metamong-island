/**
 * Props.js — 우체통·표지판·캠프파이어·고양이 밥그릇 (정적 프롭 1 Draw Call)
 * 따뜻한 우드 + 파스텔, 모서리 둥글게.
 */
import * as THREE from 'three';
import { PROPS } from '../config.js';
import { part, buildMesh, rbox, cyl, sphere } from './parts.js';

const WOOD = '#d8ab7b';
const WOOD_DARK = '#c08f60';
const WOOD_LIGHT = '#efd3a9';

function mailbox(rot) {
  return [
    part(cyl(0.055, 0.07, 0.95, 12), WOOD_DARK, { position: [0, 0.48, 0] }),
    part(rbox(0.44, 0.3, 0.3, 0.1), '#ffb3bd', { position: [0, 1.0, 0], rotation: [0, rot, 0] }),
    part(cyl(0.15, 0.15, 0.46, 16), '#ffc7cf', { position: [0, 1.12, 0], rotation: [0, rot, Math.PI / 2] }),
    part(sphere(0.15, 14, 10), '#ffd3da', { position: [0, 1.12, 0], rotation: [0, rot, 0], scale: [0.5, 1, 1] }),
    part(rbox(0.05, 0.26, 0.04, 0.02), '#ffe08a', { position: [0.26, 1.05, 0.02], rotation: [0, rot, 0] }),
    part(rbox(0.19, 0.15, 0.02, 0.02), '#fffaf2', { position: [0, 1.0, 0.16], rotation: [0, rot, 0] }),
  ];
}

function sign(rot) {
  return [
    part(cyl(0.05, 0.065, 0.98, 12), WOOD_DARK, { position: [0, 0.49, 0] }),
    part(rbox(0.6, 0.36, 0.08, 0.06), WOOD_LIGHT, { position: [0, 0.95, 0], rotation: [0, rot, 0] }),
    part(rbox(0.38, 0.04, 0.02, 0.01), '#c9a98a', { position: [0, 1.01, 0.05], rotation: [0, rot, 0] }),
    part(rbox(0.26, 0.04, 0.02, 0.01), '#c9a98a', { position: [0, 0.9, 0.05], rotation: [0, rot, 0] }),
    part(sphere(0.06, 10, 8), '#b9e08f', { position: [0.3, 1.2, 0.02] }),
  ];
}

function campfire() {
  const parts = [];
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    parts.push(
      part(cyl(0.05, 0.05, 0.44, 10), i % 2 ? WOOD : WOOD_DARK, {
        position: [Math.cos(a) * 0.15, 0.13, Math.sin(a) * 0.15],
        rotation: [Math.PI / 2 - 0.25, a, 0],
      })
    );
  }
  parts.push(part(new THREE.ConeGeometry(0.13, 0.34, 14), '#ffb27a', { position: [0, 0.29, 0] }));
  parts.push(part(new THREE.ConeGeometry(0.075, 0.24, 12), '#ffe6ad', { position: [0, 0.26, 0] }));
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2 + 0.3;
    parts.push(
      part(sphere(0.085, 12, 8), '#d9d2e4', {
        position: [Math.cos(a) * 0.42, 0.05, Math.sin(a) * 0.42],
        scale: [1.1, 0.7, 1.1],
      })
    );
  }
  return parts;
}

function bowl() {
  return [
    part(cyl(0.17, 0.13, 0.08, 16), '#cfe8f2', { position: [0, 0.04, 0] }),
    part(cyl(0.135, 0.135, 0.03, 16), '#ffd6c2', { position: [0, 0.08, 0] }),
    part(sphere(0.1, 12, 8), '#f0b9a0', { position: [0, 0.09, 0], scale: [1, 0.55, 1] }),
  ];
}

export class Props {
  constructor(terrain) {
    this.group = new THREE.Group();
    this.group.name = 'Props';

    const parts = [];
    for (const p of PROPS) {
      const y = Math.max(terrain.sampleHeight(p.x, p.z), 0.02) - 0.02;
      let local = [];
      if (p.kind === 'mailbox') local = mailbox(p.rot);
      else if (p.kind === 'sign') local = sign(p.rot);
      else if (p.kind === 'campfire') local = campfire();
      else if (p.kind === 'bowl') local = bowl();
      for (const g of local) {
        g.translate(p.x, y, p.z);
        parts.push(g);
      }
    }
    const mesh = buildMesh(parts);
    mesh.name = 'PropsMerged';
    this.group.add(mesh);
  }
}

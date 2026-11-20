/**
 * Props.js — 우체통·표지판·캠프파이어·고양이 밥그릇 (정적 프롭 1 Draw Call)
 */
import * as THREE from 'three';
import { PROPS } from '../config.js';
import { part, buildMesh } from './parts.js';

const WOOD = '#d8b78d';
const WOOD_DARK = '#bd9a71';
const WOOD_LIGHT = '#e9d2ae';

function mailbox(rot) {
  return [
    part(new THREE.BoxGeometry(0.1, 0.95, 0.1), WOOD_DARK, { position: [0, 0.48, 0] }),
    part(new THREE.BoxGeometry(0.5, 0.34, 0.32), '#f0a2aa', { position: [0, 1.0, 0], rotation: [0, rot, 0] }),
    part(new THREE.CylinderGeometry(0.17, 0.17, 0.5, 10, 1, false, 0, Math.PI), '#f7bcc2', {
      position: [0, 1.17, 0],
      rotation: [Math.PI / 2, 0, 0],
    }),
    part(new THREE.BoxGeometry(0.06, 0.3, 0.05), '#f6d98a', { position: [0.29, 1.05, 0.02] }),
    part(new THREE.BoxGeometry(0.2, 0.16, 0.02), '#fdf6ee', { position: [0, 1.0, 0.17] }),
  ];
}

function sign(rot) {
  return [
    part(new THREE.BoxGeometry(0.1, 1.1, 0.1), WOOD_DARK, { position: [0, 0.55, 0] }),
    part(new THREE.BoxGeometry(0.76, 0.44, 0.08), WOOD_LIGHT, { position: [0, 1.0, 0], rotation: [0, rot, 0] }),
    part(new THREE.BoxGeometry(0.52, 0.05, 0.02), '#b79c8b', { position: [0, 1.06, 0.05] }),
    part(new THREE.BoxGeometry(0.34, 0.05, 0.02), '#b79c8b', { position: [0, 0.95, 0.05] }),
  ];
}

function campfire() {
  const parts = [];
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    parts.push(
      part(new THREE.CylinderGeometry(0.07, 0.07, 0.62, 5), i % 2 ? WOOD : WOOD_DARK, {
        position: [Math.cos(a) * 0.18, 0.16, Math.sin(a) * 0.18],
        rotation: [Math.PI / 2 - 0.25, a, 0],
      })
    );
  }
  parts.push(part(new THREE.ConeGeometry(0.2, 0.42, 6), '#ffb37a', { position: [0, 0.36, 0] }));
  parts.push(part(new THREE.ConeGeometry(0.11, 0.28, 6), '#ffe0a3', { position: [0, 0.32, 0] }));
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2 + 0.3;
    parts.push(
      part(new THREE.DodecahedronGeometry(0.11, 0), '#d7d1dd', {
        position: [Math.cos(a) * 0.66, 0.06, Math.sin(a) * 0.66],
        scale: [1.1, 0.7, 1.1],
      })
    );
  }
  return parts;
}

function bowl() {
  return [
    part(new THREE.CylinderGeometry(0.17, 0.13, 0.08, 10), '#cfe3f2', { position: [0, 0.04, 0] }),
    part(new THREE.CylinderGeometry(0.13, 0.13, 0.03, 10), '#f0b9a2', { position: [0, 0.08, 0] }),
    part(new THREE.SphereGeometry(0.1, 8, 6), '#e8a98e', { position: [0, 0.09, 0], scale: [1, 0.55, 1] }),
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

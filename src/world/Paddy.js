/**
 * Paddy.js — 북쪽 개척권의 논(수전) 3×2 타일
 *
 * 텃밭(Farming.js)과 같은 규약이지만 흙이 **물에 잠겨** 있다.
 *   · 물 잠긴 흙 타일 + 얇은 물판 + 논두렁 테두리
 *   · 볍씨 → 새싹 → 자라는 벼 → 황금 이삭(수확 가능) 네 단계
 *   · 물주기는 텃밭과 같은 규칙(남은 시간 절반)이고, 물뿌리개 레벨이 오르면
 *     1칸 → 한 줄 3칸 → 6칸까지 한 번에 준다
 * 상태는 Progress.paddyPlots 가 들고, 여기서는 보이는 것과 손 닿는 판정만 맡는다.
 */
import * as THREE from 'three';
import { PADDY } from '../config.js';
import { CROPS, FARMING } from '../systems/farmData.js';
import { cropTexture, dropletTexture, soilTexture, sparkleTexture } from '../sprites/farmArt.js';
import { toonMaterial } from '../render/toon.js';
import { stageOf } from './Farming.js';

const WATER_TINT = '#8fd7e0';
const RIDGE = '#9c7a52';

export class Paddy {
  constructor({ terrain, progress, fx, audio, hooks = {} }) {
    this.terrain = terrain;
    this.progress = progress;
    this.fx = fx;
    this.audio = audio;
    this.hooks = hooks;
    this.group = new THREE.Group();
    this.group.name = 'Paddy';
    /** @type {Array<object>} */
    this.plots = [];
    this.time = 0;

    this.#build();
  }

  #build() {
    this.soil = { dry: soilTexture(false), wet: soilTexture(true) };

    for (let r = 0; r < PADDY.rows; r++) {
      for (let c = 0; c < PADDY.cols; c++) {
        const x = +(PADDY.x + (c - (PADDY.cols - 1) / 2) * PADDY.pitch).toFixed(3);
        const z = +(PADDY.z + (r - (PADDY.rows - 1) / 2) * PADDY.pitch).toFixed(3);
        const y = this.terrain.groundY(x, z);

        const tile = PADDY.tile;

        // 물에 잠긴 흙
        const soilGeo = new THREE.PlaneGeometry(tile, tile, 1, 1);
        soilGeo.rotateX(-Math.PI / 2);
        const soil = new THREE.Mesh(soilGeo, toonMaterial({ map: this.soil.wet, color: '#dfeef0' }));
        soil.position.set(x, y + 0.03, z);
        soil.receiveShadow = true;
        soil.name = `PaddyTile_${r}-${c}`;
        this.group.add(soil);

        // 논물 — 아주 얇고 연한 청록 판
        const waterGeo = new THREE.PlaneGeometry(tile * 0.94, tile * 0.94, 1, 1);
        waterGeo.rotateX(-Math.PI / 2);
        const water = new THREE.Mesh(
          waterGeo,
          new THREE.MeshBasicMaterial({
            color: WATER_TINT,
            transparent: true,
            opacity: 0.42,
            depthWrite: false,
            toneMapped: false,
          })
        );
        water.position.set(x, y + PADDY.waterY, z);
        water.renderOrder = 1;
        this.group.add(water);

        // 논두렁 — 네 변의 흙 둑
        const ridgeMat = toonMaterial({ color: RIDGE });
        const ridgeLong = new THREE.BoxGeometry(tile + 0.2, 0.16, 0.16);
        const ridgeSide = new THREE.BoxGeometry(0.16, 0.16, tile);
        for (const dz of [-tile / 2, tile / 2]) {
          const m = new THREE.Mesh(ridgeLong, ridgeMat);
          m.position.set(x, y + 0.1, z + dz);
          m.castShadow = true;
          m.receiveShadow = true;
          this.group.add(m);
        }
        for (const dx of [-tile / 2, tile / 2]) {
          const m = new THREE.Mesh(ridgeSide, ridgeMat);
          m.position.set(x + dx, y + 0.1, z);
          m.castShadow = true;
          m.receiveShadow = true;
          this.group.add(m);
        }

        // 벼 — 발밑 기준 세로 빌보드 (텃밭과 같은 방식)
        const plantGeo = new THREE.PlaneGeometry(1, 1);
        plantGeo.translate(0, 0.5, 0);
        const plant = new THREE.Mesh(
          plantGeo,
          new THREE.MeshBasicMaterial({
            map: cropTexture('rice', 0),
            alphaTest: 0.5,
            side: THREE.DoubleSide,
            toneMapped: false,
            fog: true,
          })
        );
        plant.position.set(x, y + 0.05, z);
        plant.visible = false;
        plant.renderOrder = 3;
        this.group.add(plant);

        // 다 자란 논의 반짝임
        const sparkle = new THREE.Sprite(
          new THREE.SpriteMaterial({
            map: sparkleTexture(),
            color: '#fff1c2',
            transparent: true,
            opacity: 0,
            depthWrite: false,
            toneMapped: false,
            blending: THREE.AdditiveBlending,
          })
        );
        sparkle.scale.set(0.62, 0.62, 1);
        sparkle.position.set(x + 0.3, y + 1.05, z - 0.22);
        sparkle.visible = false;
        sparkle.renderOrder = 4;
        this.group.add(sparkle);

        // 물 준 직후의 물방울
        const droplet = new THREE.Sprite(
          new THREE.SpriteMaterial({ map: dropletTexture(), transparent: true, opacity: 0, depthWrite: false, toneMapped: false })
        );
        droplet.scale.set(0.26, 0.26, 1);
        droplet.position.set(x + tile * 0.24, y + 0.4, z + tile * 0.16);
        droplet.visible = false;
        this.group.add(droplet);

        const index = r * PADDY.cols + c;
        const plot = { index, row: r, col: c, x, z, y, soil, water, plant, sparkle, droplet, stage: -1, wet: false, crop: null };
        soil.userData.paddy = plot;
        this.plots.push(plot);
      }
    }
    this.syncAll();
  }

  /* ── 판정 ─────────────────────────────────────────────── */

  plotAt(x, z, range = 1.5) {
    let best = null;
    let bestD = range;
    for (const plot of this.plots) {
      const d = Math.hypot(plot.x - x, plot.z - z);
      if (d < bestD) {
        best = plot;
        bestD = d;
      }
    }
    return best;
  }

  nearest(pos, range = 2.5) {
    return this.plotAt(pos.x, pos.z, range);
  }

  plotByIndex(index) {
    return this.plots[index] || null;
  }

  /** 물주기 대상 — 물뿌리개 Lv.1 1칸 / Lv.2 한 줄 3칸 / Lv.3 6칸 */
  waterTargets(plot, level = 1) {
    const lv = Math.max(1, Math.min(3, Math.floor(level) || 1));
    if (lv <= 1) return [plot.index];
    const row = this.plots.filter((p) => p.row === plot.row).map((p) => p.index);
    if (lv === 2) return row;
    return this.plots.map((p) => p.index);
  }

  /* ── 보이는 상태 ──────────────────────────────────────── */

  syncAll() {
    for (const plot of this.plots) this.#syncPlot(plot, true);
  }

  #syncPlot(plot, instant = false) {
    const st = this.progress.paddyPlot(plot.index);
    const stage = st ? stageOf(st) : -1;
    const cropId = st ? st.crop : null;
    const wet = !!(st && st.wet > 0);
    const dirty = instant || stage !== plot.stage || cropId !== plot.crop || wet !== plot.wet;

    plot.stage = stage;
    plot.crop = cropId;
    plot.wet = wet;

    plot.soil.material.map = wet ? this.soil.wet : this.soil.dry;
    plot.water.material.opacity = wet ? 0.56 : 0.4;
    plot.water.material.color.set(wet ? '#9ee2ea' : WATER_TINT);
    if (!dirty) return;

    if (stage < 0) {
      plot.plant.visible = false;
      plot.sparkle.visible = false;
      return;
    }
    plot.plant.visible = true;
    plot.plant.material.map = cropTexture(cropId || 'rice', stage);
    plot.plant.material.needsUpdate = true;
    const s = stage === 0 ? 0.8 : stage === 1 ? 0.98 : stage === 2 ? 1.2 : 1.34;
    plot.plant.scale.set(s, s, 1);
    plot.plant.position.y = plot.y + 0.05;
    plot.sparkle.visible = stage === 3;
  }

  /* ── 동작 ─────────────────────────────────────────────── */

  plant(plot, cropId = 'rice') {
    const res = this.progress.plantPaddy(plot.index, cropId);
    if (!res.ok) return res;
    const crop = res.crop;
    this.#syncPlot(plot, true);
    this.fx.burst(plot.x, plot.y + 0.2, plot.z, '#b9e6c6', 10, { spread: 0.9, up: 1.4 });
    this.audio.sfxSplash?.(0.5);
    this.hooks.toast?.(`🌾 ${crop.name} 볍씨를 논에 심었어요 — ${Math.round(crop.grow)}초 뒤에 여물어요`, 2400);
    this.hooks.onPlant?.(crop, plot);
    this.hooks.save?.();
    return { ok: true, crop };
  }

  water(plot, level = 1) {
    const targets = this.waterTargets(plot, level)
      .map((i) => this.plotByIndex(i))
      .filter((p) => {
        const st = this.progress.paddyPlot(p.index);
        return st && st.remain > 0 && st.watered < FARMING.maxWater;
      });
    if (!targets.length) {
      const anyGrowing = this.waterTargets(plot, level).some((i) => !!this.progress.paddyPlot(i));
      return { ok: false, reason: anyGrowing ? 'max' : 'empty' };
    }
    const cost = FARMING.waterStamina * targets.length;
    if (this.progress.stamina < cost) return { ok: false, reason: 'stamina', cost };

    let watered = 0;
    for (const p of targets) {
      const res = this.progress.waterPaddy(p.index);
      if (!res.ok) continue;
      watered += 1;
      this.fx.burst(p.x, p.y + 0.5, p.z, '#bfeaff', 9, { spread: 0.55, up: 1.1 });
      this.#syncPlot(p, true);
    }
    if (!watered) return { ok: false, reason: 'empty' };
    this.progress.useStamina(cost);
    this.audio.sfxSplash?.(0.4);
    this.hooks.onWater?.(watered, plot);
    this.hooks.save?.();
    return { ok: true, watered, cost };
  }

  harvest(plot) {
    const st = this.progress.paddyPlot(plot.index);
    if (!st) return { ok: false, reason: 'empty' };
    if (st.remain > 0) return { ok: false, reason: 'growing' };
    const res = this.progress.harvestPaddy(plot.index);
    if (!res.ok) return res;
    const crop = res.crop;
    this.audio.sfxPickup?.();
    this.fx.burst(plot.x, plot.y + 0.5, plot.z, crop.tint, 16, { spread: 1.1, up: 1.8, size: 1.1 });
    this.fx.float(`${crop.icon} ${crop.name} +${res.n}`, plot.x, plot.y + 1.0, plot.z, '#7a6a4d');
    this.hooks.toast?.(`🌾 ${crop.name} ${res.n}개 수확! 수확 바구니에 담았어요 (${res.total}개)`, 2600);
    this.#syncPlot(plot, true);
    this.hooks.onHarvest?.(crop, res.n, plot);
    this.hooks.save?.();
    return { ok: true, crop, n: res.n, total: res.total };
  }

  /** 6단계: 성장 비료 — 논 한 칸의 성장 단계를 하나 올린다 */
  fertilize(plot) {
    const res = this.progress.fertilizePaddy(plot.index);
    if (!res.ok) return res;
    const st = this.progress.paddyPlot(plot.index);
    const crop = st ? CROPS[st.crop] : CROPS.rice;
    this.#syncPlot(plot, true);
    this.fx.burst(plot.x, plot.y + 0.35, plot.z, '#b6f0a8', 12, { spread: 0.8, up: 1.6 });
    this.fx.float('🧪 성장 +1', plot.x, plot.y + 0.95, plot.z, '#4f8f45');
    this.audio.sfxSplash?.(0.35);
    const stageLabel = ['씨앗', '새싹', '자라는 중', '수확 가능'][res.stage] || '';
    this.hooks.toast?.(
      res.stage >= 3 ? `🧪 ${crop.name}이(가) 다 여물었어요 — 이제 수확할 수 있어요` : `🧪 비료를 줬어요 — ${crop.name}이(가) ${stageLabel} 단계로 자랐어요`,
      2500
    );
    this.hooks.onFertilize?.(crop, res, plot);
    this.hooks.save?.();
    return res;
  }

  /* ── 매 프레임 ────────────────────────────────────────── */

  update(dt, scaledDt, camera = null) {
    this.time += dt;
    this.camera = camera;
    const ripe = scaledDt > 0 ? this.progress.tickPaddy(scaledDt) : [];
    for (const plot of this.plots) {
      const st = this.progress.paddyPlot(plot.index);
      if (st && st.wet > 0) plot.wet = true;
      this.#syncPlot(plot);
      if (plot.plant.visible && camera) {
        plot.plant.rotation.y = Math.atan2(camera.position.x - plot.x, camera.position.z - plot.z);
      }
      // 논물은 아주 천천히 일렁인다
      plot.water.position.y = plot.y + PADDY.waterY + Math.sin(this.time * 1.3 + plot.index * 0.7) * 0.006;
      if (plot.sparkle.visible) {
        plot.sparkle.material.opacity = 0.7 + Math.sin(this.time * 2.6 + plot.index * 0.9) * 0.3;
        const s = 0.58 + Math.sin(this.time * 2.2 + plot.index) * 0.1;
        plot.sparkle.scale.set(s, s, 1);
        plot.plant.position.y = plot.y + 0.05 + Math.sin(this.time * 2 + plot.index) * 0.014;
      }
      if (st && st.wet > 0) {
        plot.droplet.visible = true;
        plot.droplet.material.opacity = 0.15 + 0.6 * Math.min(1, st.wet / 3);
        plot.droplet.position.y = plot.y + 0.32 + Math.sin(this.time * 3 + plot.index) * 0.03;
      } else {
        plot.droplet.visible = false;
      }
    }
    if (ripe.length) {
      for (const i of ripe) {
        const plot = this.plots[i];
        if (!plot) continue;
        const st = this.progress.paddyPlot(i);
        const crop = st ? CROPS[st.crop] : CROPS.rice;
        this.fx.burst(plot.x, plot.y + 0.45, plot.z, crop.tint, 8, { spread: 0.7, up: 1.3 });
      }
      this.hooks.onRipe?.(ripe);
    }
  }
}

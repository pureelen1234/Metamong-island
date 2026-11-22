/**
 * Farming.js — 북서쪽 텃밭 3×3 경작지의 3D 표현과 농사 규칙의 연결
 *
 * 상태(무엇이 심겨 있고 얼마나 자랐는가)는 Progress.farmPlots 가 들고 있고,
 * 여기서는 **보이는 것**과 **손에 닿는 판정**만 맡는다.
 *   · 빈 밭 / 씨앗 / 새싹 / 자라는 중 / 수확 가능(반짝임) + 물 준 촉촉한 흙 색
 *   · 가장 가까운 밭 칸(nearest) → Game 이 액션 버튼([심기]·[물주기]·[수확])으로 연결
 *   · 물뿌리개 레벨에 따라 1칸 → 십자 5칸 → 3×3 9칸에 한 번에 물주기
 */
import * as THREE from 'three';
import { FARM } from '../config.js';
import { CROPS, FARMING } from '../systems/farmData.js';
import { cropTexture, dropletTexture, soilTexture, sparkleTexture } from '../sprites/farmArt.js';
import { glowTexture } from '../sprites/icons3d.js';
import { toonMaterial } from '../render/toon.js';

/** 성장률(0~1) → 단계 번호 */
export function stageOf(plot) {
  if (!plot || !plot.crop) return -1;
  if (plot.remain <= 0) return 3;
  const p = 1 - plot.remain / Math.max(1, plot.total);
  if (p < 0.3) return 0;
  if (p < 0.62) return 1;
  return 2;
}

export class Farming {
  constructor({ terrain, progress, fx, audio, hooks = {} }) {
    this.terrain = terrain;
    this.progress = progress;
    this.fx = fx;
    this.audio = audio;
    this.hooks = hooks;
    this.group = new THREE.Group();
    this.group.name = 'Farming';
    /** @type {Array<object>} */
    this.plots = [];
    this.time = 0;

    this.#build();
  }

  /* ── 3D 흙 타일 ───────────────────────────────────────── */

  #build() {
    const dryTex = soilTexture(false);
    const wetTex = soilTexture(true);
    this.soilTex = { dry: dryTex, wet: wetTex };

    for (let r = 0; r < FARM.rows; r++) {
      for (let c = 0; c < FARM.cols; c++) {
        const x = +(FARM.x + (c - (FARM.cols - 1) / 2) * FARM.pitch).toFixed(3);
        const z = +(FARM.z + (r - (FARM.rows - 1) / 2) * FARM.pitch).toFixed(3);
        const y = this.terrain.groundY(x, z);

        const geo = new THREE.PlaneGeometry(FARM.tile, FARM.tile, 1, 1);
        geo.rotateX(-Math.PI / 2);
        const mat = toonMaterial({ map: dryTex, color: '#ffffff' });
        const base = new THREE.Mesh(geo, mat);
        base.position.set(x, y + 0.035, z);
        base.receiveShadow = true;
        base.name = `FarmPlot_${r}-${c}`;
        this.group.add(base);

        // 밭 테두리 — 흙이 잔디와 섞이지 않게 얇은 테두리
        const edgeGeo = new THREE.RingGeometry(FARM.tile * 0.5, FARM.tile * 0.5 + 0.09, 4, 1);
        edgeGeo.rotateX(-Math.PI / 2);
        edgeGeo.rotateY(Math.PI / 4);
        const edge = new THREE.Mesh(edgeGeo, new THREE.MeshBasicMaterial({ color: '#b08155', transparent: true, opacity: 0.5, depthWrite: false }));
        edge.position.set(x, y + 0.032, z);
        this.group.add(edge);

        // 작물 스프라이트 (단계별로 텍스처 교체)
        // 작물은 섬의 다른 소품과 같은 '발밑 기준 세로 빌보드' 메시로 세운다
        // (투명 스프라이트 정렬 문제 없이 도트 실루엣이 칼같이 서고, 알파 컷아웃이라 흙과 안 섞인다)
        const plantGeo = new THREE.PlaneGeometry(1, 1);
        plantGeo.translate(0, 0.5, 0);
        const plant = new THREE.Mesh(
          plantGeo,
          new THREE.MeshBasicMaterial({
            map: cropTexture('strawberry', 0),
            alphaTest: 0.5,
            side: THREE.DoubleSide,
            toneMapped: false,
            fog: true,
          })
        );
        plant.position.set(x, y + 0.02, z);
        plant.visible = false;
        plant.renderOrder = 3;
        this.group.add(plant);

        // 다 자란 밭의 반짝임
        const sparkle = new THREE.Sprite(
          new THREE.SpriteMaterial({
            map: sparkleTexture(),
            color: '#fff6c8',
            transparent: true,
            opacity: 0,
            depthWrite: false,
            toneMapped: false,
            blending: THREE.AdditiveBlending,
          })
        );
        sparkle.scale.set(0.62, 0.62, 1);
        sparkle.position.set(x + 0.28, y + 1.05, z - 0.2);
        sparkle.visible = false;
        sparkle.renderOrder = 4;
        this.group.add(sparkle);

        // 물을 준 밭 위 물방울
        const droplet = new THREE.Sprite(
          new THREE.SpriteMaterial({ map: dropletTexture(), transparent: true, opacity: 0, depthWrite: false, toneMapped: false })
        );
        droplet.scale.set(0.28, 0.28, 1);
        droplet.position.set(x + FARM.tile * 0.24, y + 0.42, z + FARM.tile * 0.16);
        droplet.visible = false;
        this.group.add(droplet);

        const index = r * FARM.cols + c;
        const plot = {
          index,
          row: r,
          col: c,
          x,
          z,
          y,
          base,
          edge,
          plant,
          sparkle,
          droplet,
          stage: -1,
          wet: false,
          crop: null,
        };
        base.userData.plot = plot;
        this.plots.push(plot);
      }
    }
    this.syncAll();
  }

  /* ── 판정 ─────────────────────────────────────────────── */

  plotAt(x, z, range = 1.4) {
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

  /** 플레이어가 선 자리에서 가장 가까운 밭 칸 — 범위 밖이면 null */
  plotByIndex(index) {
    return this.plots[index] || null;
  }

  /** 물주기 대상 — 물뿌리개 레벨(1 → 1칸, 2 → 십자 5칸, 3 → 3×3 9칸) */
  waterTargets(plot, level = 1) {
    const n = FARM.cols * FARM.rows;
    const lv = Math.max(1, Math.min(3, Math.floor(level) || 1));
    if (lv <= 1) return [plot.index];
    if (lv === 2) {
      const out = [plot.index];
      for (const [dr, dc] of [
        [0, -1],
        [0, 1],
        [-1, 0],
        [1, 0],
      ]) {
        const r = plot.row + dr;
        const c = plot.col + dc;
        if (r >= 0 && r < FARM.rows && c >= 0 && c < FARM.cols) out.push(r * FARM.cols + c);
      }
      return out.filter((i) => i < n);
    }
    return Array.from({ length: n }, (_, i) => i);
  }

  /* ── 보이는 상태 ──────────────────────────────────────── */

  /** Progress 상태를 그대로 반영(불러오기·새 섬) */
  syncAll() {
    for (const plot of this.plots) this.#syncPlot(plot, true);
  }

  #syncPlot(plot, instant = false) {
    const st = this.progress.plot(plot.index);
    const stage = st ? stageOf(st) : -1;
    const cropId = st ? st.crop : null;
    const wet = !!(st && st.wet > 0);
    const dirty = instant || stage !== plot.stage || cropId !== plot.crop || wet !== plot.wet;

    plot.stage = stage;
    plot.crop = cropId;
    plot.wet = wet;

    plot.base.material.map = wet ? this.soilTex.wet : this.soilTex.dry;
    // 물을 준 흙은 살짝 푸른 기운이 돌며 촉촉해 보인다
    plot.base.material.color.set(wet ? '#e4eef2' : '#ffffff');
    plot.base.material.needsUpdate = true;

    if (!dirty) return;

    if (stage < 0) {
      plot.plant.visible = false;
      plot.sparkle.visible = false;
      return;
    }
    plot.plant.visible = true;
    plot.plant.material.map = cropTexture(cropId, stage);
    plot.plant.material.needsUpdate = true;
    const s = stage === 0 ? 0.86 : stage === 1 ? 1.06 : stage === 2 ? 1.28 : 1.42;
    plot.plant.scale.set(s, s, 1);
    plot.plant.position.y = plot.y + 0.02;
    plot.sparkle.visible = stage === 3;
  }

  /* ── 동작 ─────────────────────────────────────────────── */

  /** @returns {{ok:boolean, reason?:string}} */
  plant(plot, cropId) {
    const res = this.progress.plantSeed(plot.index, cropId);
    if (!res.ok) return res;
    const crop = res.crop;
    this.#syncPlot(plot, true);
    this.fx.burst(plot.x, plot.y + 0.25, plot.z, '#a8804f', 10, { spread: 0.9, up: 1.5 });
    this.audio.sfxPickup?.();
    this.hooks.toast?.(`🌱 ${crop.name} 씨앗을 심었어요 — ${Math.round(crop.grow)}초 뒤에 익어요`, 2400);
    this.hooks.onPlant?.(crop, plot);
    this.hooks.save?.();
    return { ok: true, crop };
  }

  /**
   * 물주기 — 범위 안에서 지금 물을 줄 수 있는 칸만 골라 한 번에 준다.
   * @returns {{ok:boolean, reason?:string, watered?:number, cost?:number}}
   */
  water(plot, level = 1) {
    const targets = this.waterTargets(plot, level)
      .map((i) => this.plotByIndex(i))
      .filter((p) => {
        const st = this.progress.plot(p.index);
        return st && st.remain > 0 && st.watered < FARMING.maxWater;
      });
    if (!targets.length) {
      const anyGrowing = this.waterTargets(plot, level).some((i) => !!this.progress.plot(i));
      return { ok: false, reason: anyGrowing ? 'max' : 'empty' };
    }
    const cost = FARMING.waterStamina * targets.length;
    if (this.progress.stamina < cost) return { ok: false, reason: 'stamina', cost, need: cost };

    let watered = 0;
    for (const p of targets) {
      const res = this.progress.waterPlot(p.index);
      if (!res.ok) continue;
      watered += 1;
      this.fx.burst(p.x, p.y + 0.55, p.z, '#bfeaff', 9, { spread: 0.55, up: 1.1 });
      this.#syncPlot(p, true);
    }
    if (!watered) return { ok: false, reason: 'empty' };
    this.progress.useStamina(cost);
    this.audio.sfxSplash?.(0.4);
    this.hooks.onWater?.(watered, plot);
    this.hooks.save?.();
    return { ok: true, watered, cost };
  }

  /** @returns {{ok:boolean, reason?:string, crop?:object, n?:number}} */
  harvest(plot) {
    const st = this.progress.plot(plot.index);
    if (!st) return { ok: false, reason: 'empty' };
    if (st.remain > 0) return { ok: false, reason: 'growing' };
    const res = this.progress.harvestPlot(plot.index);
    if (!res.ok) return res;
    const crop = res.crop;
    this.audio.sfxPickup?.();
    this.fx.burst(plot.x, plot.y + 0.5, plot.z, crop.tint, 16, { spread: 1.1, up: 1.8, size: 1.1 });
    this.fx.float(`${crop.icon} ${crop.name} +${res.n}`, plot.x, plot.y + 1.0, plot.z, '#7a5c6d');
    this.hooks.toast?.(`🧺 ${crop.name} ${res.n}개 수확! 텃밭 바구니에 담았어요 (${res.total}개)`, 2600);
    this.#syncPlot(plot, true);
    this.hooks.onHarvest?.(crop, res.n, plot);
    this.hooks.save?.();
    return { ok: true, crop, n: res.n, total: res.total };
  }

  /**
   * 6단계: 성장 비료 — 한 칸의 성장 단계를 하나 올린다.
   * @returns {{ok:boolean, reason?:string, stage?:number}}
   */
  fertilize(plot) {
    const res = this.progress.fertilizePlot(plot.index);
    if (!res.ok) return res;
    const crop = CROPS[this.progress.plot(plot.index).crop];
    this.#syncPlot(plot, true);
    this.fx.burst(plot.x, plot.y + 0.35, plot.z, '#b6f0a8', 12, { spread: 0.8, up: 1.6 });
    this.fx.float('🧪 성장 +1', plot.x, plot.y + 0.95, plot.z, '#4f8f45');
    this.audio.sfxSplash?.(0.35);
    const stageLabel = ['씨앗', '새싹', '자라는 중', '수확 가능'][res.stage] || '';
    this.hooks.toast?.(
      res.stage >= 3
        ? `🧪 ${crop ? crop.name : '작물'}이(가) 다 자랐어요 — 이제 수확할 수 있어요`
        : `🧪 비료를 줬어요 — ${crop ? crop.name : '작물'}이(가) ${stageLabel} 단계로 자랐어요`,
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
    const ripe = scaledDt > 0 ? this.progress.tickFarm(scaledDt) : [];
    for (const plot of this.plots) {
      const st = this.progress.plot(plot.index);
      if (st && st.wet > 0) plot.wet = true;
      this.#syncPlot(plot);
      if (plot.plant.visible) {
        // 카메라를 향해 Y축으로만 회전 (섬의 다른 빌보드와 같은 규칙)
        const cam = this.camera;
        if (cam) plot.plant.rotation.y = Math.atan2(cam.position.x - plot.x, cam.position.z - plot.z);
      }
      if (plot.sparkle.visible) {
        const pulse = 0.7 + Math.sin(this.time * 2.6 + plot.index * 0.9) * 0.3;
        plot.sparkle.material.opacity = pulse;
        const s = 0.58 + Math.sin(this.time * 2.2 + plot.index) * 0.1;
        plot.sparkle.scale.set(s, s, 1);
        plot.plant.position.y = plot.y + 0.02 + Math.sin(this.time * 2 + plot.index) * 0.015;
      }
      if (plot.droplet.visible || (st && st.wet > 0)) {
        plot.droplet.visible = true;
        const k = st ? Math.min(1, st.wet / 3) : 0;
        plot.droplet.material.opacity = 0.15 + 0.6 * k;
        plot.droplet.position.y = plot.y + 0.34 + Math.sin(this.time * 3 + plot.index) * 0.03;
      } else {
        plot.droplet.visible = false;
      }
    }
    if (ripe.length) {
      for (const i of ripe) {
        const plot = this.plots[i];
        if (!plot) continue;
        const crop = CROPS[this.progress.plot(i).crop];
        this.fx.burst(plot.x, plot.y + 0.45, plot.z, crop.tint, 8, { spread: 0.7, up: 1.3 });
      }
      this.hooks.onRipe?.(ripe);
    }
  }
}

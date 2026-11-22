import './ui/styles.css';
import { Game } from './world/Game.js';
import { GRID, HALF, phaseAt } from './config.js';

const canvas = document.getElementById('scene');
const uiRoot = document.getElementById('ui');

const game = new Game(canvas, uiRoot);

// QA·디버그용 읽기 전용 상태 (개발자 도구에서 확인)
window.__metamong = {
  game,
  get audio() {
    return game.audio;
  },
  /** 1·2단계 생활 상태 — QA 스크립트가 그대로 읽는다 */
  life() {
    const g = game;
    const inv = g.progress.inventory;
    const p = g.progress;
    return {
      stamina: Math.round(p.stamina * 10) / 10,
      bagSlots: inv.usedSlots(),
      bag: inv.toJSON().bag,
      storage: { ...inv.storage },
      buildings: JSON.parse(JSON.stringify(p.buildings)),
      mailbox: { read: [...p.mailbox.read], claimed: [...p.mailbox.claimed] },
      harvested: g.gathering ? Object.keys(g.gathering.toJSON()).length : 0,
      drops: g.drops ? g.drops.items.map((d) => `${d.itemId}x${d.count}`) : [],
      // ── 2단계
      coins: p.coins,
      skills: p.skills.toJSON(),
      skillRows: p.skills.rows().map((r) => ({ id: r.id, rank: r.rank, level: r.level, exp: r.exp, pct: r.pct })),
      title: p.skills.title(),
      fish: { ...p.fish },
      fishKinds: p.fishKinds(),
      supplies: { ...p.supplies },
      tools: p.tools,
      cats: Object.fromEntries(
        Object.keys(p.cats).map((id) => [id, { ...p.catRow(id), follow: !!p.cat(id).follow }])
      ),
      cooked: { ...p.cooked },
      quests: { day: p.quests.day, list: p.questRows() },
      claimableQuests: p.claimableQuests,
      buff: { ...p.buff },
      fishingStats: { ...p.fishing },
      // ── 3단계
      crops: { ...p.crops },
      cropKinds: p.cropKinds(),
      seeds: Object.fromEntries(Object.keys(p.supplies).filter((id) => id.startsWith('seed_')).map((id) => [id, p.supply(id)])),
      farmPlots: p.farmPlots.map((st) =>
        st ? { crop: st.crop, remain: Math.round(st.remain * 10) / 10, total: st.total, watered: st.watered, fert: st.fert || 0, ripe: st.remain <= 0 } : null
      ),
      farmPlanted: p.farmPlots.filter(Boolean).length,
      farmRipe: p.farmPlots.filter((st) => st && st.remain <= 0).length,
      counters: { ...p.counters },
      // ── 6단계: 특산 바구니 · 성장 비료 · 새 작물 · 새 채집지 · 낚시 자리
      forage: { ...p.forage },
      forageKinds: p.forageKinds(),
      forageTotal: p.forageTotal,
      fertilizer: p.supply('fertilizer'),
      newCrops: Object.fromEntries(['tomato', 'corn', 'sweetpotato', 'melon', 'sunflower'].map((id) => [id, p.cropCount(id)])),
      fishZones: Object.fromEntries(
        ['sea', 'river_bank', 'river_bridge'].map((id) => [id, { target: game.fishTarget && game.fishTarget.zone === id, fishing: game.fishing && game.fishing.zone.id === id ? game.fishing.state : 'idle' }])
      ),
      gatherNodes: game.world && game.world.scenery ? game.world.scenery.nodes.filter((n) => n.bucket).map((n) => ({ kind: n.kind, sprite: n.sprite, bucket: n.bucket, harvested: n.harvested, respawn: Math.round(n.respawn) })) : [],
      gatherTotal: game.world && game.world.scenery ? game.world.scenery.nodes.filter((n) => n.bucket).length : 0,
      achievements: { unlocked: [...p.achievements.unlocked], claimed: [...p.achievements.claimed] },
      achRows: p.achRows().map((r) => ({ id: r.id, value: r.value, need: r.need, done: r.done, claimed: r.claimed })),
      claimableAchievements: p.claimableAchievements,
      waterCan: p.toolLevel('water'),
      // ── 4단계: 다리 · 리어카 · 논 · 웰컴 미션
      bridge: { built: p.bridgeBuilt, invested: { ...p.bridgeState().invested } },
      bridgeBuilt: p.bridgeBuilt,
      cartLevel: p.cartLevel,
      bagCapacity: p.inventory.slots,
      paddyPlots: p.paddyPlots.map((st) =>
        st ? { crop: st.crop, remain: Math.round(st.remain * 10) / 10, total: st.total, watered: st.watered, fert: st.fert || 0, ripe: st.remain <= 0 } : null
      ),
      paddyPlanted: p.paddyPlots.filter(Boolean).length,
      paddyRipe: p.paddyPlots.filter((st) => st && st.remain <= 0).length,
      welcome: { step: p.welcome ? p.welcome.step : 0 },
      // ── 5단계: 방어전
      defense: {
        ...JSON.parse(JSON.stringify(p.defense)),
        installed: p.defense.slots.filter(Boolean).length,
        stockTotal: Object.values(p.defense.stock).reduce((a, b) => a + b, 0),
      },
      mapGrid: { grid: GRID, half: HALF },
      // ── 7단계: 하우징 · 원정 · 튜토리얼
      home: g.home ? g.home.state() : null,
      expedition: {
        ...JSON.parse(JSON.stringify(p.expedition || {})),
        kinds: p.expeditionKinds(),
        total: p.expeditionTotal,
        active: !!(g.expedition && g.expedition.active),
        run: g.expedition ? g.expedition.state() : null,
      },
      tutorial: { ...(p.tutorial || {}) },
      materials: Object.fromEntries(
        ['log', 'stone', 'petal', 'star', 'berry', 'copper', 'crystal', 'driftwood', 'volcano_heart', 'ice_crystal', 'ancient_gear', 'deep_pearl', 'meteor_shard', 'mist_mushroom'].map((id) => [id, p.materialCount(id)])
      ),
      fishing: g.fishing
        ? { state: g.fishing.state, active: g.fishing.active, baitUsed: !!g.fishing.baitUsed, last: g.fishing.lastResult ? { id: g.fishing.lastResult.fish.id, size: g.fishing.lastResult.size } : null }
        : null,
    };
  },
  stats() {
    const g = game;
    return {
      mode: g.mode,
      day: g.state.day,
      elapsed: Math.round(g.state.elapsed * 100) / 100,
      phase: phaseAt(g.state.elapsed).id,
      paused: g.paused,
      modalOpen: !!(g.modal && g.modal.isOpen),
      contextLost: g.contextLost,
      fps: g.stats.fps,
      drawCalls: g.stats.calls,
      triangles: g.stats.triangles,
      sceneDrawCalls: g.stats.sceneCalls,
      sceneTriangles: g.stats.sceneTriangles,
      discovered: [...g.state.discovered],
      saveMode: g.saveStore.mode,
      hasSave: g.hasSave,
      stamina: Math.round(g.progress.stamina * 10) / 10,
      bagSlots: g.progress.inventory.usedSlots(),
      coins: g.progress.coins,
      quests: g.progress.claimableQuests,
      fishing: g.fishing ? g.fishing.state : 'idle',
      defense: g.defense ? g.defense.stats() : null,
      indoor: !!(g.home && g.home.inside),
      expeditionActive: !!(g.expedition && g.expedition.active),
      tutorialCard: !!(g.tutorialUI && g.tutorialUI.visible),
      tutorialStep: g.progress.tutorial ? g.progress.tutorial.step : 0,
      fishZone: g.fishing ? g.fishing.zone.id : null,
      fishPhase: g.fishing ? g.fishing.zone.habitat : null,
      settings: { ...g.state.settings },
      player: g.player
        ? {
            x: +g.player.position.x.toFixed(2),
            y: +g.player.position.y.toFixed(2),
            z: +g.player.position.z.toFixed(2),
            yaw: +g.player.yaw.toFixed(3),
            facing: g.player.facing,
            flipX: !!g.player.flip,
            frame: g.player.frameName,
          }
        : null,
    };
  },
};

game.start().catch((err) => {
  console.error('게임 시작 실패', err);
  const overlay = document.createElement('div');
  overlay.style.cssText =
    'position:fixed;inset:0;display:grid;place-items:center;background:#fff6fa;color:#6b5878;font-family:system-ui,sans-serif;font-size:14px;text-align:center;padding:24px;z-index:999;';
  overlay.textContent = '섬을 여는 중 문제가 생겼어요. 새로고침 해 주세요: ' + String(err && err.message ? err.message : err);
  document.body.appendChild(overlay);
});

// PWA: 프로덕션 빌드에서만 서비스 워커 등록 (개발 중 캐시 방지)
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(new URL('sw.js', document.baseURI)).catch(() => {});
  });
}

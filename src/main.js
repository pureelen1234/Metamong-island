import './ui/styles.css';
import { Game } from './world/Game.js';
import { phaseAt } from './config.js';

const canvas = document.getElementById('scene');
const uiRoot = document.getElementById('ui');

const game = new Game(canvas, uiRoot);

// QA·디버그용 읽기 전용 상태 (개발자 도구에서 확인)
window.__metamong = {
  game,
  get audio() {
    return game.audio;
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

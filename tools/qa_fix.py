#!/usr/bin/env python3
"""수정 4종 실측 QA — 390×844 세로 뷰포트.

1) 문워크: 뒤(위) → 왼쪽 → 오른쪽 → 아래 연속 입력에서 facing/flipX/좌표 변화를 샘플링
2) BGM: AudioContext 상태 + AnalyserNode RMS/피크
3) 평지·카메라: 지형 높이 편차, camera.fov
4) 배치: 에셋 범위·충돌 반경
+ 도감 화면, 콘솔 에러 수집, 스크린샷 저장
"""
import json
import os
import sys

from playwright.sync_api import sync_playwright

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
OUT = os.path.join(ROOT, 'screenshots', 'fix4')
os.makedirs(OUT, exist_ok=True)
URL = os.environ.get('QA_URL', 'http://127.0.0.1:4173/')

logs, errors, failed = [], [], []
problems = []

PROBE = """() => {
  window.__rec = [];
  window.__recTimer = setInterval(() => {
    const s = window.__metamong.stats();
    window.__rec.push({ t: Math.round(performance.now()), x: s.player.x, z: s.player.z,
      f: s.player.facing, flip: s.player.flipX, frame: s.player.frame, yaw: s.player.yaw });
  }, 40);
}"""


def snap(page, name, clip=None):
    path = os.path.join(OUT, name)
    page.screenshot(path=path, clip=clip)
    print(f'  📸 {name}')


def sample(page):
    return page.evaluate('window.__rec.slice()')


def check_flip(samples, expect_facing, expect_flip, dx_sign=None, label=''):
    """이동 표본이 방향과 스프라이트(행+flipX)가 일치하는지 검사"""
    bad = []
    moved = 0
    matched = sum(1 for s in samples if s['f'] == expect_facing)
    if matched == 0:
        problems.append(f'{label}: {expect_facing} 방향 표본이 없음 (facing={sorted({s["f"] for s in samples})})')
    for i in range(len(samples) - 1):
        a, b = samples[i], samples[i + 1]
        if b['f'] != expect_facing:
            continue
        if b['flip'] != expect_flip:
            bad.append(f"{b['f']} 인데 flipX={b['flip']}")
        ddx = round(b['x'] - a['x'], 3)
        if dx_sign and abs(ddx) > 0.02:
            moved += 1
            if (ddx > 0) != (dx_sign > 0):
                bad.append(f"facing={b['f']} 인데 dx={ddx}")
    if bad:
        problems.append(f'{label}: {bad[:4]}')
    if dx_sign and moved == 0:
        problems.append(f'{label}: 실제 수평 이동 표본 없음')
    print(f'  · {label}: 표본 {len(samples)}개({expect_facing} {matched}) · 위반 {len(bad)}건 · 이동표본 {moved}개')


def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(args=['--use-gl=angle', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'])
        ctx = browser.new_context(
            viewport={'width': 390, 'height': 844},
            device_scale_factor=2,
            is_mobile=True,
            has_touch=True,
            user_agent='Mozilla/5.0 (Linux; Android 14; SM-S911N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Mobile Safari/537.36',
            service_workers='block',
        )
        page = ctx.new_page()
        page.set_default_timeout(20000)
        page.on('console', lambda m: logs.append((m.type, m.text)))
        page.on('pageerror', lambda e: errors.append(str(e)))
        page.on('requestfailed', lambda r: failed.append(f'{r.url} :: {r.failure}'))
        page.on('response', lambda r: failed.append(f'HTTP {r.status} {r.url}') if r.status >= 400 else None)

        try:
            page.goto(URL, wait_until='networkidle')
            page.wait_for_timeout(3500)
            snap(page, '01_title.png')
            stats = page.evaluate('window.__metamong.stats()')
            print('  stats:', json.dumps({k: stats[k] for k in ('mode', 'fps', 'sceneTriangles', 'sceneDrawCalls')}, ensure_ascii=False))

            page.locator('.title-actions button').last.click()
            page.wait_for_timeout(2200)
            snap(page, '02_play_spawn.png')

            # ── 카메라 · 지형 실측
            cam = page.evaluate("""() => {
              const g = window.__metamong.game;
              let minH = 9, maxH = -9, samples = 0;
              for (let x = -14; x <= 14; x += 0.5) for (let z = -14; z <= 14; z += 0.5) {
                if (Math.hypot(x, z * 0.97) / 24 > 0.55) continue;  // 평지 안쪽만
                const h = g.world.terrain.sampleHeight(x, z);
                minH = Math.min(minH, h); maxH = Math.max(maxH, h); samples++;
              }
              const c = g.camera;
              return {
                fov: c.fov,
                camY: +c.position.y.toFixed(2),
                dist: +Math.hypot(c.position.x - g.player.position.x, c.position.z - g.player.position.z).toFixed(2),
                landMin: +minH.toFixed(3), landMax: +maxH.toFixed(3),
                spriteHeight: g.player.billboard.height,
                colliders: g.player.colliders.length,
                flatSamples: samples,
                walkEdgeZ: (() => { let z = 0; while (z < 24 && g.world.terrain.isWalkable(0, z + 0.25)) z += 0.25; return +z.toFixed(2); })(),
              };
            }""")
            print('  camera/terrain:', json.dumps(cam, ensure_ascii=False))
            if not (36 <= cam['fov'] <= 38):
                problems.append(f"camera.fov={cam['fov']} (36~38 기대)")
            if cam['landMax'] - cam['landMin'] > 0.02:
                problems.append(f"평지 높이 편차 {cam['landMax'] - cam['landMin']:.3f} (표본 {cam['flatSamples']})")

            # ── BGM 실측
            audio = page.evaluate("""async () => {
              const a = window.__metamong.audio;
              if (!a || !a.started) return { started: false };
              const ctx = a.ctx;
              if (ctx.state !== 'running') { try { await ctx.resume(); } catch (e) {} }
              const an = ctx.createAnalyser();
              an.fftSize = 2048;
              a.master.connect(an);
              const buf = new Float32Array(an.fftSize);
              let peak = 0, sum = 0, n = 0;
              const t0 = performance.now();
              await new Promise((res) => {
                const step = () => {
                  an.getFloatTimeDomainData(buf);
                  for (let i = 0; i < buf.length; i++) {
                    const v = Math.abs(buf[i]);
                    if (v > peak) peak = v;
                    sum += v * v; n++;
                  }
                  if (performance.now() - t0 > 4200) res();
                  else requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
              });
              return {
                started: true, state: ctx.state, phase: a.phase, muted: a.muted,
                masterGain: +a.master.gain.value.toFixed(3),
                peak: +peak.toFixed(4), rms: +Math.sqrt(sum / Math.max(1, n)).toFixed(4),
              };
            }""")
            print('  audio:', json.dumps(audio, ensure_ascii=False))
            if not audio.get('started'):
                problems.append('BGM 이 시작되지 않음')
            elif audio['state'] != 'running':
                problems.append(f"AudioContext state={audio['state']}")
            elif audio.get('peak', 0) < 0.02:
                problems.append(f"BGM 신호 피크 {audio.get('peak')} — 소리가 사실상 없음")

            # ── 1. 문워크: 스폰(yaw=π, 뒷면) 에서 바로 왼쪽
            print('\n[1] 왼쪽 이동 (뒷면 상태에서 출발)')
            page.evaluate(PROBE)
            page.mouse.click(195, 700)  # 제스처(오디오 resume)
            page.keyboard.down('ArrowLeft')
            page.wait_for_timeout(850)
            snap(page, '03_left_from_back.png', clip={'x': 30, 'y': 260, 'width': 330, 'height': 420})
            page.keyboard.up('ArrowLeft')
            page.wait_for_timeout(250)
            left1 = sample(page)
            print('   samples:', json.dumps(left1[-3:], ensure_ascii=False))
            check_flip(left1, 'left', False, dx_sign=-1, label='왼쪽(뒷면 출발)')

            # ── 2. 오른쪽
            print('[2] 오른쪽 이동')
            page.evaluate('window.__rec = []')
            page.keyboard.down('ArrowRight')
            page.wait_for_timeout(900)
            snap(page, '04_right.png', clip={'x': 30, 'y': 260, 'width': 330, 'height': 420})
            page.keyboard.up('ArrowRight')
            page.wait_for_timeout(250)
            right1 = sample(page)
            print('   samples:', json.dumps(right1[-3:], ensure_ascii=False))
            check_flip(right1, 'right', True, dx_sign=1, label='오른쪽')

            # ── 3. 위(뒷면) → 왼쪽 → 오른쪽 → 아래 연속
            print('[3] 위 → 왼 → 오른 → 아래 연속')
            page.evaluate('window.__rec = []')
            page.keyboard.down('ArrowUp')
            page.wait_for_timeout(700)
            snap(page, '05_up.png', clip={'x': 30, 'y': 260, 'width': 330, 'height': 420})
            up1 = sample(page)
            page.keyboard.up('ArrowUp')
            page.wait_for_timeout(120)
            check_flip(up1, 'back', False, dx_sign=None, label='위(뒷면)')

            page.evaluate('window.__rec = []')
            page.keyboard.down('ArrowLeft')
            page.wait_for_timeout(700)
            snap(page, '06_up_then_left.png', clip={'x': 30, 'y': 260, 'width': 330, 'height': 420})
            page.keyboard.up('ArrowLeft')
            page.wait_for_timeout(200)
            left2 = sample(page)
            print('   samples:', json.dumps(left2[-3:], ensure_ascii=False))
            check_flip(left2, 'left', False, dx_sign=-1, label='위→왼')

            page.evaluate('window.__rec = []')
            page.keyboard.down('ArrowRight')
            page.wait_for_timeout(700)
            snap(page, '07_right_again.png', clip={'x': 30, 'y': 260, 'width': 330, 'height': 420})
            page.keyboard.up('ArrowRight')
            page.wait_for_timeout(200)
            right2 = sample(page)
            check_flip(right2, 'right', True, dx_sign=1, label='왼→오른')

            page.evaluate('window.__rec = []')
            page.keyboard.down('ArrowDown')
            page.wait_for_timeout(700)
            snap(page, '08_down.png', clip={'x': 30, 'y': 260, 'width': 330, 'height': 420})
            page.keyboard.up('ArrowDown')
            page.wait_for_timeout(200)
            down1 = sample(page)
            check_flip(down1, 'front', False, dx_sign=None, label='아래(정면)')

            # ── 4. 조이스틱(터치) 로 왼쪽 — 실기기와 같은 경로
            print('[4] 조이스틱 왼쪽')
            box = page.evaluate("""() => {
              const el = document.querySelector('.joystick-zone');
              if (!el) return null;
              const r = el.getBoundingClientRect();
              return { x: r.x + r.width / 2, y: r.y + r.height / 2, w: r.width, h: r.height };
            }""")
            print('   joystick:', box)
            if box:
                page.evaluate('window.__rec = []')
                page.mouse.move(box['x'], box['y'])
                page.mouse.down()
                page.mouse.move(box['x'] - box['w'] * 0.32, box['y'], steps=8)
                page.wait_for_timeout(900)
                snap(page, '09_joystick_left.png', clip={'x': 30, 'y': 260, 'width': 330, 'height': 420})
                page.mouse.up()
                page.wait_for_timeout(200)
                stick = sample(page)
                check_flip(stick, 'left', False, dx_sign=-1, label='조이스틱 왼쪽')

            page.wait_for_timeout(400)
            snap(page, '10_play_wide.png')
            final = page.evaluate('window.__metamong.stats()')
            print('  final player:', json.dumps(final['player'], ensure_ascii=False))

            # ── 5. 도감
            page.locator('.quickbar button', has_text='도감').click()
            page.wait_for_timeout(800)
            snap(page, '11_codex.png')
            page.locator('button.btn.primary', has_text='닫기').first.click()
            page.wait_for_timeout(400)

            # ── 6. 음소거 토글
            muted = page.evaluate("""async () => {
              const g = window.__metamong.game;
              const before = g.state.settings.muted;
              const after = g.toggleMute();
              await new Promise(r => setTimeout(r, 500));
              const a = window.__metamong.audio;
              return { before, after, masterGain: +a.master.gain.value.toFixed(4) };
            }""")
            print('  mute:', json.dumps(muted, ensure_ascii=False))
            if muted['after'] == muted['before']:
                problems.append('음소거 토글이 동작하지 않음')

            print('\n[콘솔]', json.dumps(logs[-6:], ensure_ascii=False))
            if errors:
                problems.append(f'pageerror {errors[:3]}')
            bad_req = [f for f in failed if 'favicon' not in f]
            if bad_req:
                problems.append(f'요청 실패 {bad_req[:4]}')
        except Exception as exc:  # noqa: BLE001
            problems.append(f'예외: {exc!r}')
            import traceback

            traceback.print_exc()
        finally:
            browser.close()

    print('\n=== 결과 ===')
    if problems:
        for p in problems:
            print(' ❌', p)
    else:
        print(' ✅ 모든 검사 통과')
    return 1 if problems else 0


if __name__ == '__main__':
    sys.exit(run())

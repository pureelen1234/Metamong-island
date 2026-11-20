#!/usr/bin/env python3
"""HD-2D 브라우저 실측 QA — 390×844 세로 뷰포트에서 타이틀→플레이→이동→도감→자동저장 확인"""
import json
import os
import traceback

from playwright.sync_api import sync_playwright

OUT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'screenshots', 'hd2d_run2'))
os.makedirs(OUT, exist_ok=True)
URL = os.environ.get('QA_URL', 'http://127.0.0.1:4173/')

logs = []
errors = []
failed = []


def snap(page, name, clip=None):
    path = os.path.join(OUT, name)
    page.screenshot(path=path, clip=clip)
    print(f'  📸 {path}')


def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(args=['--use-gl=angle', '--enable-unsafe-swiftshader'])
        ctx = browser.new_context(
            viewport={'width': 390, 'height': 844},
            device_scale_factor=2,
            is_mobile=True,
            has_touch=True,
            user_agent='Mozilla/5.0 (Linux; Android 14; SM-S911N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Mobile Safari/537.36',
            service_workers='block',
        )
        page = ctx.new_page()
        page.set_default_timeout(15000)
        page.on('console', lambda m: logs.append((m.type, m.text)))
        page.on('pageerror', lambda e: errors.append(str(e)))
        page.on('requestfailed', lambda r: failed.append(f'{r.url} :: {r.failure}'))
        page.on('response', lambda r: failed.append(f'HTTP {r.status} {r.url}') if r.status >= 400 else None)

        try:
            page.goto(URL, wait_until='networkidle')
            page.wait_for_timeout(3500)
            snap(page, '01_title.png')
            print('  stats:', json.dumps(page.evaluate('window.__metamong.stats()'), ensure_ascii=False))

            page.locator('.title-actions button').last.click()
            page.wait_for_timeout(2500)
            snap(page, '02_play_morning.png')

            # 조이스틱으로 이동
            box = page.evaluate("""() => {
              const el = document.querySelector('.joystick-base') || document.querySelector('.joystick');
              if (!el) return null;
              const r = el.getBoundingClientRect();
              return {x: r.x + r.width/2, y: r.y + r.height/2, w: r.width, h: r.height};
            }""")
            print('  joystick box:', box)
            if box:
                page.mouse.move(box['x'], box['y'])
                page.mouse.down()
                page.mouse.move(box['x'], box['y'] - box['h'] * 0.42, steps=6)
                page.wait_for_timeout(1600)
                snap(page, '03_walking.png')
                page.mouse.move(box['x'] + box['w'] * 0.42, box['y'] + box['h'] * 0.1, steps=6)
                page.wait_for_timeout(1500)
                snap(page, '04_walking_left.png')
                page.mouse.up()
            page.wait_for_timeout(600)
            print('  after walk:', json.dumps(page.evaluate('window.__metamong.stats()')['player'], ensure_ascii=False))

            # 도감 (빈 상태)
            page.locator('.quickbar button', has_text='도감').click()
            page.wait_for_timeout(700)
            snap(page, '05_codex_empty.png')
            page.locator('button.btn.primary', has_text='닫기').first.click()
            page.wait_for_timeout(400)

            # 조약돌 메타몽 발견
            page.evaluate("""() => {
              const g = window.__metamong.game;
              g.player.teleport(-4.0, 11.4);
              g.player.yaw = Math.PI; g.player.targetYaw = Math.PI;
            }""")
            page.wait_for_timeout(1100)
            snap(page, '06_ditto_near.png')
            page.locator('.action-btn').click()
            page.wait_for_timeout(1100)
            snap(page, '07_ditto_discovered.png')

            # 도감 — 발견 카드 확인(맨 위로 스크롤)
            page.locator('.quickbar button', has_text='도감').click()
            page.wait_for_timeout(700)
            page.evaluate("""() => { const m = document.querySelector('.modal-scroll') || document.querySelector('.modal'); if (m) m.scrollTop = 0; }""")
            page.wait_for_timeout(400)
            snap(page, '08_codex_one.png')
            page.locator('button.btn.primary', has_text='닫기').first.click()
            page.wait_for_timeout(400)

            # 고양이
            page.evaluate("() => window.__metamong.game.player.teleport(5.2, 4.9)")
            page.wait_for_timeout(1200)
            snap(page, '09_cats.png')

            # 건물
            page.evaluate("() => window.__metamong.game.player.teleport(8.2, -4.6)")
            page.wait_for_timeout(1200)
            snap(page, '10_lighthouse.png')
            page.evaluate("() => window.__metamong.game.player.teleport(-4.6, 5.6)")
            page.wait_for_timeout(1200)
            snap(page, '11_workshop.png')

            # 주인공 클로즈업 (플레이어 주변 크롭)
            page.evaluate("() => window.__metamong.game.player.teleport(1.0, 10.0)")
            page.wait_for_timeout(1000)
            snap(page, '15_hero_closeup.png', clip={'x': 95, 'y': 480, 'width': 200, 'height': 300})

            # 시간대
            page.evaluate("() => { window.__metamong.game.state.elapsed = 800; }")
            page.wait_for_timeout(1300)
            snap(page, '12_sunset.png')
            page.evaluate("() => { window.__metamong.game.state.elapsed = 1000; }")
            page.wait_for_timeout(1300)
            snap(page, '13_night.png')
            page.evaluate("() => { window.__metamong.game.state.elapsed = 120; }")
            page.wait_for_timeout(900)

            # 자동 저장 확인
            page.evaluate('() => window.__metamong.game.save()')
            page.wait_for_timeout(800)
            saved = page.evaluate("""async () => {
              const g = window.__metamong.game;
              const data = await g.saveStore.load();
              return data ? {day: data.day, discovered: data.discovered, pos: data.player, savedAt: data.savedAt} : null;
            }""")
            print('  saved:', json.dumps(saved, ensure_ascii=False))

            page.locator('.icon-btn[aria-label="일시정지 및 설정"]').click()
            page.wait_for_timeout(700)
            snap(page, '14_pause.png')
            page.locator('button.btn.primary', has_text='계속 걷기').first.click()
            page.wait_for_timeout(400)
        except Exception:
            print('  ✗ 예외:')
            traceback.print_exc()
            try:
                snap(page, '99_failure.png')
            except Exception:
                pass

        print('\\n--- console ---')
        for t, msg in logs:
            print(f'  [{t}] {msg}')
        print('--- page errors ---')
        print('  (없음)' if not errors else '')
        for e in errors:
            print('  ', e)
        print('--- failed requests / >=400 ---')
        print('  (없음)' if not failed else '')
        for f in failed:
            print('  ', f)

        browser.close()


if __name__ == '__main__':
    run()

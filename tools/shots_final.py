#!/usr/bin/env python3
"""최종 스크린샷 — 390×844 세로 뷰포트, 타이틀·플레이·클로즈업·고양이·도감·노을·밤"""
import json
import os

from playwright.sync_api import sync_playwright

OUT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'screenshots', 'hd2d'))
os.makedirs(OUT, exist_ok=True)
URL = os.environ.get('QA_URL', 'http://127.0.0.1:4173/')

logs, errors = [], []


def shot(page, name, clip=None):
    page.screenshot(path=os.path.join(OUT, name), clip=clip)
    print('📸', name)


with sync_playwright() as p:
    browser = p.chromium.launch(args=['--use-gl=angle', '--enable-unsafe-swiftshader'])
    ctx = browser.new_context(
        viewport={'width': 390, 'height': 844}, device_scale_factor=2, is_mobile=True, has_touch=True,
        service_workers='block', timezone_id='Asia/Seoul',
    )
    page = ctx.new_page()
    page.set_default_timeout(20000)
    page.on('console', lambda m: logs.append(f'[{m.type}] {m.text}'))
    page.on('pageerror', lambda e: errors.append(str(e)))

    page.goto(URL, wait_until='networkidle')
    page.wait_for_timeout(4000)
    shot(page, '01_title.png')

    page.locator('.title-actions button').last.click()
    page.wait_for_timeout(3000)
    shot(page, '02_play_morning.png')

    # 이동 (조이스틱 위로 → 북쪽)
    page.mouse.move(58, 566)
    page.mouse.down()
    page.mouse.move(58, 506, steps=8)
    page.wait_for_timeout(1800)
    page.mouse.up()
    page.wait_for_timeout(700)
    shot(page, '03_walking.png')
    print('player:', json.dumps(page.evaluate('window.__metamong.stats()')['player']))

    page.wait_for_timeout(1200)
    page.evaluate("() => window.__metamong.game.player.teleport(5.2, 4.6)")
    page.wait_for_timeout(2500)
    shot(page, '04_cats.png')

    page.evaluate("() => window.__metamong.game.player.teleport(1.0, 10.0)")
    page.wait_for_timeout(2000)
    shot(page, '05_hero_closeup.png', clip={'x': 118, 'y': 330, 'width': 170, 'height': 240})

    page.evaluate("() => window.__metamong.game.player.teleport(-4.0, 11.4)")
    page.wait_for_timeout(2000)
    shot(page, '06_ditto_near.png')
    page.locator('.action-btn').click()
    page.wait_for_timeout(1600)
    shot(page, '07_ditto_found.png')

    page.locator('.quickbar button', has_text='도감').click()
    page.wait_for_timeout(1200)
    shot(page, '08_codex.png')
    page.locator('button.btn.primary', has_text='닫기').first.click()
    page.wait_for_timeout(800)

    page.evaluate("() => window.__metamong.game.player.teleport(-4.4, 6.2)")
    page.wait_for_timeout(2200)
    shot(page, '09_workshop.png')

    page.evaluate("() => { window.__metamong.game.state.elapsed = 820; }")
    page.wait_for_timeout(2500)
    shot(page, '10_sunset.png')
    page.evaluate("() => { window.__metamong.game.state.elapsed = 1010; }")
    page.wait_for_timeout(2500)
    shot(page, '11_night.png')

    page.evaluate("() => { window.__metamong.game.state.elapsed = 150; }")
    page.wait_for_timeout(1500)
    shot(page, '12_dock.png')

    page.evaluate('() => window.__metamong.game.save()')
    page.wait_for_timeout(1000)
    saved = page.evaluate("""async () => {
      const d = await window.__metamong.game.saveStore.load();
      return d ? {day: d.day, discovered: d.discovered, savedAt: d.savedAt} : null;
    }""")
    print('saved:', json.dumps(saved, ensure_ascii=False))
    print('stats:', json.dumps(page.evaluate('window.__metamong.stats()'), ensure_ascii=False))
    print('errors:', errors if errors else '(없음)')
    print('console warnings:', [l for l in logs if l.startswith('[warning]')][:4])
    browser.close()

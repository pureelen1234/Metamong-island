#!/usr/bin/env python3
"""최종 스크린샷(세션 분할) — 세로 390×844. 한 세션에 스크린샷을 적게 찍어 소프트웨어 GL 부담을 줄인다."""
import json
import os
import sys

from playwright.sync_api import sync_playwright

OUT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'screenshots', 'hd2d'))
os.makedirs(OUT, exist_ok=True)
URL = os.environ.get('QA_URL', 'http://127.0.0.1:4173/')

# (파일명, 준비 스크립트, 추가 대기 ms, 클립)
SCENES = [
    ('01_title.png', None, 0, None),
    ('02_play_morning.png', None, 0, None),
    ('03_walking.png', "game.player.teleport(0.6, 10.0); game.player.yaw = Math.PI; game.player.targetYaw = Math.PI;", 1200, None),
    ('04_cats.png', 'game.player.teleport(5.2, 4.6);', 1500, None),
    ('05_hero_closeup.png', 'game.player.teleport(1.0, 10.0);', 1200, {'x': 118, 'y': 330, 'width': 170, 'height': 240}),
    ('06_ditto_near.png', 'game.player.teleport(-4.0, 11.4);', 1500, None),
    ('07_ditto_found.png', 'FOUND', 1200, None),
    ('08_codex.png', 'CODEX', 900, None),
    ('09_workshop.png', 'game.player.teleport(-4.4, 6.4);', 1500, None),
    ('10_sunset.png', 'game.player.teleport(0.4, 11.0); game.state.elapsed = 810;', 1800, None),
    ('11_night.png', 'game.player.teleport(0.4, 11.0); game.state.elapsed = 1010;', 1800, None),
    ('12_dock.png', 'game.player.teleport(0.4, 17.2); game.state.elapsed = 200;', 1800, None),
]

errors = []

with sync_playwright() as p:
    browser = p.chromium.launch(args=['--use-gl=angle', '--enable-unsafe-swiftshader'])
    for name, setup, wait, clip in SCENES:
        ctx = browser.new_context(
            viewport={'width': 390, 'height': 844}, device_scale_factor=2, is_mobile=True, has_touch=True,
            service_workers='block', timezone_id='Asia/Seoul',
        )
        page = ctx.new_page()
        page.set_default_timeout(20000)
        page.on('pageerror', lambda e: errors.append(f'{name}: {e}'))
        page.goto(URL, wait_until='networkidle')
        page.wait_for_timeout(3200)
        if name == '01_title.png':
            page.screenshot(path=os.path.join(OUT, name))
            print('📸', name)
            ctx.close()
            continue

        page.locator('.title-actions button').last.click()
        page.wait_for_timeout(2400)
        if setup == 'FOUND':
            page.evaluate("() => { window.__metamong.game.player.teleport(-4.0, 11.4); }")
            page.wait_for_timeout(1100)
            page.locator('.action-btn').click()
            page.wait_for_timeout(wait)
        elif setup == 'CODEX':
            page.evaluate("() => { window.__metamong.game.player.teleport(-4.0, 11.4); }")
            page.wait_for_timeout(900)
            page.locator('.action-btn').click()
            page.wait_for_timeout(900)
            page.locator('.quickbar button', has_text='도감').click()
            page.wait_for_timeout(wait)
        elif setup:
            page.evaluate(f"""() => {{
              const game = window.__metamong.game;
              {setup}
            }}""")
            page.wait_for_timeout(wait)
        page.screenshot(path=os.path.join(OUT, name), clip=clip)
        print('📸', name)
        ctx.close()

    browser.close()

print('errors:', errors if errors else '(없음)')

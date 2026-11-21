#!/usr/bin/env python3
"""qa_live.py — 배포된 GitHub Pages 사이트가 실제로 부팅되는지 확인 (390×844)"""
import os
import sys

from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.abspath(os.path.join(HERE, '..', 'screenshots', 'phase3'))
os.makedirs(OUT, exist_ok=True)
URL = 'https://pureelen1234.github.io/Metamong-island/'

errors, failed = [], []
with sync_playwright() as p:
    browser = p.chromium.launch(args=['--use-gl=angle', '--enable-unsafe-swiftshader'])
    ctx = browser.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2, is_mobile=True, has_touch=True)
    page = ctx.new_page()
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.on('console', lambda m: errors.append(f'console:{m.type}:{m.text}') if m.type == 'error' else None)
    page.on('response', lambda r: failed.append(f'HTTP {r.status} {r.url}') if r.status >= 400 else None)
    page.goto(URL, wait_until='networkidle')
    page.wait_for_timeout(3200)
    page.screenshot(path=os.path.join(OUT, '00_live_title.png'))
    page.locator('.title-actions button').last.click()
    page.wait_for_timeout(3000)
    # 새 섬에서 텃밭까지 걸어가기 대신 좌표 이동으로 화면 확인
    page.evaluate("() => window.__metamong.game.player.teleport(-12.4, -8.4)")
    page.wait_for_timeout(1500)
    page.screenshot(path=os.path.join(OUT, '00_live_deployed.png'))
    info = page.evaluate(
        """() => { const g = window.__metamong.game;
          return { mode: g.mode, day: g.state.day, farm: g.farming ? g.farming.plots.length : 0,
                   minimap: !!document.querySelector('.minimap-canvas'), saveVer: g.snapshot().version,
                   letters: document.querySelectorAll('.mail-row').length }; }"""
    )
    print('live info', info)
    page.evaluate("() => window.__metamong.game.openFarm()")
    page.wait_for_timeout(800)
    page.screenshot(path=os.path.join(OUT, '00_live_farm_panel.png'))
    print('errors', errors[:6])
    print('failed', failed[:6])
    browser.close()

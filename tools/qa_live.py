#!/usr/bin/env python3
"""qa_live.py — 배포된 GitHub Pages 사이트가 실제로 부팅되는지 확인 (390×844)"""
import json
import os
import sys

from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from browser_env import STUB  # noqa: F401,E402
OUT = os.path.abspath(os.path.join(HERE, '..', 'screenshots', 'phase4'))
os.makedirs(OUT, exist_ok=True)
URL = 'https://pureelen1234.github.io/Metamong-island/'

errors, failed = [], []
with sync_playwright() as p:
    browser = p.chromium.launch(args=['--use-gl=angle', '--enable-unsafe-swiftshader'])
    ctx = browser.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2, is_mobile=True, has_touch=True, service_workers='block')
    page = ctx.new_page()
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.on('console', lambda m: errors.append(f'console:{m.type}:{m.text}') if m.type == 'error' else None)
    page.on('response', lambda r: failed.append(f'HTTP {r.status} {r.url}') if r.status >= 400 else None)
    page.goto(URL, wait_until='networkidle')
    page.wait_for_timeout(3200)
    page.screenshot(path=os.path.join(OUT, '00_live_title.png'))
    title_badge = page.locator('.title-badge').inner_text()
    page.locator('.title-actions button').last.click()
    page.wait_for_timeout(3000)
    info = page.evaluate(
        """() => { const g = window.__metamong.game;
          return { mode: g.mode, day: g.state.day, grid: 72,
                   bridge: g.progress.bridgeBuilt, paddy: g.paddy ? g.paddy.plots.length : 0,
                   minimap: !!document.querySelector('.minimap-canvas'), saveVer: g.snapshot().version,
                   welcome: g.progress.welcome.step, cart: g.progress.cartLevel,
                   letters: document.querySelectorAll('.mail-row').length,
                   welcomeChip: !!document.querySelector('.welcome-chip') }; }"""
    )
    print('live info', json.dumps(info, ensure_ascii=False))
    print('title badge', title_badge)
    page.evaluate("() => window.__metamong.game.player.teleport(0, -4.4)")
    page.wait_for_timeout(1500)
    page.screenshot(path=os.path.join(OUT, '00_live_bridge.png'))
    print('action', page.locator('.action-btn .txt').inner_text())
    page.evaluate("() => window.__metamong.game.openMinimap()")
    page.wait_for_timeout(800)
    page.screenshot(path=os.path.join(OUT, '00_live_map.png'))
    print('errors', [e for e in errors if 'favicon' not in e][:6])
    print('failed', failed[:6])
    browser.close()

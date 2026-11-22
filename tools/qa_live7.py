#!/usr/bin/env python3
"""배포된 실서버(GitHub Pages)가 7단계로 부팅되는지 확인 — 200 · Phase 7 · Save v8 · 집/원정 · 콘솔 에러 0"""
import json
import os
import sys

from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, HERE)
from browser_env import STUB  # noqa: F401,E402

OUT = os.path.join(ROOT, 'screenshots', 'phase7')
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
    resp = page.goto(URL, wait_until='networkidle')
    print('status', resp.status if resp else None)
    page.wait_for_timeout(3600)
    page.screenshot(path=os.path.join(OUT, '00_live_title.png'))
    badge = page.locator('.title-badge').inner_text()
    version = page.locator('.title-version').inner_text()
    print('badge', badge, '|', version)
    page.locator('.title-actions button').last.click()
    page.wait_for_timeout(3200)
    info = page.evaluate(
        """() => {
          const g = window.__metamong.game;
          const l = window.__metamong.life();
          return {
            mode: g.mode, day: g.state.day, saveVer: g.snapshot().version,
            home: l.home, tutorial: l.tutorial,
            expeditionSites: l.expedition.run ? l.expedition.run.sites : [],
            defenseSlots: l.defense.slots.length,
            structures: Object.keys(l.defense.stock),
            sw: !!navigator.serviceWorker,
          };
        }"""
    )
    print('live info', json.dumps(info, ensure_ascii=False))
    page.evaluate("() => { const g = window.__metamong.game; g.player.teleport(3.2, 10.6); g.player.setYaw(Math.PI); }")
    page.wait_for_timeout(1500)
    print('action', page.locator('.action-btn .txt').inner_text())
    page.screenshot(path=os.path.join(OUT, '00_live_home_door.png'))
    page.evaluate("() => window.__metamong.game.enterHome()")
    page.wait_for_timeout(1400)
    page.screenshot(path=os.path.join(OUT, '00_live_interior.png'))
    print('indoor', page.evaluate("() => window.__metamong.stats().indoor"))
    page.evaluate("() => window.__metamong.game.exitHome()")
    page.wait_for_timeout(800)
    page.evaluate("() => window.__metamong.game.openHelp()")
    page.wait_for_timeout(900)
    page.screenshot(path=os.path.join(OUT, '00_live_help.png'))
    page.evaluate("() => window.__metamong.game.modal.close()")
    page.wait_for_timeout(400)
    print('errors', [e for e in errors if 'favicon' not in e][:6])
    print('failed', failed[:6])
    browser.close()

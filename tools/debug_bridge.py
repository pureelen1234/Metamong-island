#!/usr/bin/env python3
"""debug_bridge.py — 다리 완성 후 걷기 판정 임시 확인"""
import json
import os
import sys

from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from browser_env import STUB  # noqa: F401,E402
from serve_dist import start  # noqa: E402

DIST = os.path.abspath(os.path.join(HERE, '..', 'dist'))
OUT = os.path.abspath(os.path.join(HERE, '..', 'screenshots', 'phase4'))

errors = []
with sync_playwright() as p:
    httpd, port = start(DIST)
    browser = p.chromium.launch(args=['--use-gl=angle', '--enable-unsafe-swiftshader'])
    ctx = browser.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=1, is_mobile=True, has_touch=True, service_workers='block')
    page = ctx.new_page()
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.goto(f'http://127.0.0.1:{port}/', wait_until='networkidle')
    page.evaluate("""async () => { try { await window.__metamong.game.saveStore.clear(); } catch (e) {} localStorage.clear(); }""")
    page.reload(wait_until='networkidle')
    page.wait_for_timeout(3000)
    page.locator('.title-actions button').last.click()
    page.wait_for_timeout(2500)

    print('before build walkable(0,-9)', page.evaluate("() => window.__metamong.game.world.terrain.isWalkable(0, -9)"))
    page.evaluate("""() => {
      const g = window.__metamong.game;
      g.progress.inventory.add('log', 6); g.progress.inventory.add('stone', 4);
      g.investBridge(); g.completeBridge();
    }""")
    page.wait_for_timeout(700)
    print('after build walkable(0,-9)', page.evaluate("() => window.__metamong.game.world.terrain.isWalkable(0, -9)"))
    print('built', page.evaluate("() => window.__metamong.game.progress.bridgeBuilt"))
    page.evaluate("() => { const g = window.__metamong.game; if (g.modal.isOpen) g.modal.close(); }")
    page.wait_for_timeout(400)
    print('paused', page.evaluate("() => window.__metamong.game.paused"), 'modal', page.evaluate("() => window.__metamong.game.modal.isOpen"))
    page.evaluate("() => window.__metamong.game.player.teleport(0, -4.6)")
    page.wait_for_timeout(600)
    print('start', page.evaluate("() => ({...window.__metamong.stats().player})"))
    for step in range(8):
        page.keyboard.down('KeyW')
        page.wait_for_timeout(500)
        page.keyboard.up('KeyW')
        page.wait_for_timeout(150)
        st = page.evaluate("() => ({...window.__metamong.stats().player})")
        print(step, st)
    print('walkable samples', page.evaluate("""() => {
      const t = window.__metamong.game.world.terrain;
      return [-4.5,-5.2,-6.0,-7.0,-8.0,-9.0,-10.0,-11.0,-12.0,-13.0,-14.0].map((z) => [z, t.isWalkable(0, z), +t.sampleHeight(0, z).toFixed(2), +t.groundY(0,z).toFixed(2)]);
    }"""))
    page.screenshot(path=os.path.join(OUT, 'dbg_bridge_walk.png'))
    print('errors', errors[:4])
    browser.close()
    httpd.shutdown()

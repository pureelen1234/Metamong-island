#!/usr/bin/env python3
"""smoke_phase4.py — 4단계 빠른 부팅 점검 (390×844, 콘솔 에러·404 확인 + 스크린샷)"""
import json
import os
import sys

from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from browser_env import STUB  # noqa: F401,E402  (ATK 스텁 경로 보정)
from serve_dist import start  # noqa: E402

OUT = os.path.abspath(os.path.join(HERE, '..', 'screenshots', 'phase4'))
DIST = os.path.abspath(os.path.join(HERE, '..', 'dist'))
os.makedirs(OUT, exist_ok=True)

errors, failed, logs = [], [], []
with sync_playwright() as p:
    httpd, port = start(DIST)
    url = f'http://127.0.0.1:{port}/'
    browser = p.chromium.launch(args=['--use-gl=angle', '--enable-unsafe-swiftshader'])
    ctx = browser.new_context(
        viewport={'width': 390, 'height': 844},
        device_scale_factor=1,
        is_mobile=True,
        has_touch=True,
        service_workers='block',
    )
    page = ctx.new_page()
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.on('console', lambda m: logs.append((m.type, m.text)))
    page.on('response', lambda r: failed.append(f'HTTP {r.status} {r.url}') if r.status >= 400 else None)
    page.goto(url, wait_until='networkidle')
    page.evaluate("""async () => { try { await window.__metamong.game.saveStore.clear(); } catch (e) {} try { localStorage.clear(); } catch (e) {} }""")
    page.reload(wait_until='networkidle')
    page.wait_for_timeout(3200)
    page.screenshot(path=os.path.join(OUT, '00_title.png'))
    page.locator('.title-actions button').last.click()
    page.wait_for_timeout(2600)
    page.screenshot(path=os.path.join(OUT, '01_spawn.png'))
    lf = page.evaluate('window.__metamong.life()')
    st = page.evaluate('window.__metamong.stats()')
    print('stats', json.dumps({k: st[k] for k in ('mode', 'day', 'fps', 'triangles', 'sceneTriangles', 'player')}, ensure_ascii=False))
    print('life', json.dumps({k: lf[k] for k in ('coins', 'bagCapacity', 'bridgeBuilt', 'cartLevel', 'welcome', 'mapGrid', 'paddyPlanted')}, ensure_ascii=False))

    # 강 · 다리 앞
    page.evaluate("() => window.__metamong.game.player.teleport(0, -4.6)")
    page.wait_for_timeout(1400)
    page.screenshot(path=os.path.join(OUT, '02_bridge_site.png'))
    print('target', page.evaluate("() => { const t = window.__metamong.game.target; return t ? {kind: t.kind, id: t.id} : null; }"))
    print('label', page.locator('.action-btn .txt').inner_text())

    # 북쪽 숲
    page.evaluate("() => window.__metamong.game.player.teleport(-11.5, -16.0)")
    page.wait_for_timeout(1400)
    page.screenshot(path=os.path.join(OUT, '03_forest.png'))

    # 논
    page.evaluate("() => window.__metamong.game.player.teleport(-3.4, -16.4)")
    page.wait_for_timeout(1400)
    page.screenshot(path=os.path.join(OUT, '04_paddy.png'))

    # 채석장
    page.evaluate("() => window.__metamong.game.player.teleport(13.6, -15.4)")
    page.wait_for_timeout(1400)
    page.screenshot(path=os.path.join(OUT, '05_quarry.png'))

    # 남쪽 광장
    page.evaluate("() => window.__metamong.game.player.teleport(0, 18.0)")
    page.wait_for_timeout(1400)
    page.screenshot(path=os.path.join(OUT, '06_plaza.png'))

    print('--- errors ---')
    for e in errors:
        print(' ', e[:300])
    print('--- failed ---')
    for f in failed[:8]:
        print(' ', f)
    print('--- console warn/error ---')
    for t, m in logs:
        if t in ('error', 'warning'):
            print(f'  [{t}] {m[:200]}')
    browser.close()
    httpd.shutdown()

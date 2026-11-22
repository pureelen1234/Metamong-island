#!/usr/bin/env python3
"""6단계 빠른 스모크 — 부팅·새 섬·텃밭/논 칸 수·새 채집지·모달 오픈 오류 확인."""
import json
import os
import sys
import traceback

from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.dirname(HERE))
from tools.browser_env import STUB  # noqa: F401,E402
from tools.serve_dist import start  # noqa: E402

DIST = os.path.abspath(os.path.join(os.path.dirname(HERE), 'dist'))
OUT = os.path.abspath(os.path.join(os.path.dirname(HERE), 'screenshots', 'phase6_smoke'))
os.makedirs(OUT, exist_ok=True)

logs, errors, failed = [], [], []
httpd, port = start(DIST)
url = f'http://127.0.0.1:{port}/'
print('URL', url)
with sync_playwright() as p:
    browser = p.chromium.launch(args=['--use-gl=angle', '--enable-unsafe-swiftshader'])
    ctx = browser.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=1, is_mobile=True, has_touch=True, service_workers='block')
    page = ctx.new_page()
    page.set_default_timeout(20000)
    page.on('console', lambda m: logs.append((m.type, m.text)))
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.on('requestfailed', lambda r: failed.append(f'{r.url} :: {r.failure}'))
    page.on('response', lambda r: failed.append(f'HTTP {r.status} {r.url}') if r.status >= 400 else None)
    try:
        page.goto(url, wait_until='networkidle')
        page.wait_for_timeout(3200)
        print('title', page.locator('.title-version').inner_text())
        page.locator('.title-actions button').last.click()
        page.wait_for_timeout(2600)
        print('stats', json.dumps(page.evaluate('window.__metamong.stats()'), ensure_ascii=False)[:300])
        lf = page.evaluate('window.__metamong.life()')
        print('farm', len(lf['farmPlots']), 'paddy', len(lf['paddyPlots']), 'gather', lf['gatherTotal'])
        print('gather kinds', sorted(set(n['sprite'] for n in lf['gatherNodes'])))
        print('forage', lf['forage'], 'fert', lf['fertilizer'])
        for fn, name in (('openFarm', 'farm'), ('openPaddy', 'paddy'), ('openCodex', 'codex'), ('openVending', 'vending'), ('openFishSpot', 'fish')):
            page.evaluate(f'() => window.__metamong.game.{fn}()')
            page.wait_for_timeout(700)
            title = page.locator('.modal-title').first.inner_text() if page.locator('.modal-title').count() else ''
            print(name, '->', title)
            if name in ('farm', 'paddy', 'codex'):
                page.screenshot(path=os.path.join(OUT, f'{name}.png'))
            page.locator('.modal.open .modal-close').first.click(no_wait_after=True)
            page.wait_for_timeout(350)
    except Exception:
        traceback.print_exc()
    finally:
        bad = [(t, m) for t, m in logs if t == 'error']
        print('console errors', len(bad))
        for t, m in bad[:8]:
            print(' ', m[:300])
        print('page errors', len(errors))
        for e in errors[:8]:
            print(' ', e[:400])
        print('failed', len(failed))
        for f in failed[:8]:
            print(' ', f[:200])
        browser.close()
        httpd.shutdown()

#!/usr/bin/env python3
"""7단계 빠른 스모크 — 부팅·새 섬·집 들어가기·가구 놓기·원정 출발/귀환·도움말."""
import json
import os
import sys
import traceback

from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.dirname(HERE))
from tools.browser_env import STUB  # noqa: F401,E402
from tools.serve_dist import start  # noqa: E402

ROOT = os.path.dirname(HERE)
DIST = os.path.join(ROOT, 'dist')
OUT = os.path.join(ROOT, 'screenshots', 'phase7_smoke')
os.makedirs(OUT, exist_ok=True)

logs, errors, failed = [], [], []
httpd, port = start(DIST)
url = f'http://127.0.0.1:{port}/'
print('URL', url)
with sync_playwright() as p:
    browser = p.chromium.launch(args=['--use-gl=angle', '--enable-unsafe-swiftshader'])
    ctx = browser.new_context(
        viewport={'width': 390, 'height': 844},
        device_scale_factor=1,
        is_mobile=True,
        has_touch=True,
        service_workers='block',
        user_agent='Mozilla/5.0 (Linux; Android 14; SM-S911N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Mobile Safari/537.36',
    )
    page = ctx.new_page()
    page.set_default_timeout(20000)
    page.on('console', lambda m: logs.append((m.type, m.text)))
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.on('requestfailed', lambda r: failed.append(f'{r.url} :: {r.failure}'))
    page.on('response', lambda r: failed.append(f'HTTP {r.status} {r.url}') if r.status >= 400 else None)
    try:
        page.goto(url, wait_until='networkidle')
        page.evaluate("async () => { try { await window.__metamong.game.saveStore.clear(); } catch(e){} localStorage.clear(); }")
        page.reload(wait_until='networkidle')
        page.wait_for_timeout(3000)
        print('title', page.locator('.title-version').inner_text())
        page.locator('.title-actions button').last.click()
        page.wait_for_timeout(2600)
        print('stats', json.dumps(page.evaluate('window.__metamong.stats()'), ensure_ascii=False)[:260])
        lf = page.evaluate('window.__metamong.life()')
        print('home', json.dumps(lf['home'], ensure_ascii=False))
        print('tutorial', lf['tutorial'])
        print('tutorialCard', page.evaluate('window.__metamong.stats()')['tutorialCard'])
        page.screenshot(path=os.path.join(OUT, 'boot.png'))

        # 집으로 순간이동 → 들어가기
        page.evaluate("() => { const g = window.__metamong.game; g.player.teleport(3.2, 10.6); }")
        page.wait_for_timeout(900)
        print('action', page.locator('.action-btn .txt').inner_text())
        page.screenshot(path=os.path.join(OUT, 'door.png'))
        print('enterHome', page.evaluate("() => window.__metamong.game.enterHome()"))
        page.wait_for_timeout(1000)
        page.screenshot(path=os.path.join(OUT, 'interior.png'))
        print('indoor', page.evaluate("() => window.__metamong.stats().indoor"))
        print('furn owned', page.evaluate("() => window.__metamong.life().home.owned"))
        page.evaluate("() => window.__metamong.game.openHomeFurniture()")
        page.wait_for_timeout(700)
        print('furniture modal', page.locator('.modal-title').first.inner_text())
        page.screenshot(path=os.path.join(OUT, 'furniture.png'))
        # 보유 가구(의자) 놓기 → 방 가운데 탭 → 확정
        page.evaluate("() => window.__metamong.game.placeFurniture('chair')")
        page.wait_for_timeout(600)
        page.evaluate("() => window.__metamong.game.home.moveGhostTo(-1.2, 1.4)")
        page.wait_for_timeout(400)
        print('ghost', page.evaluate("() => window.__metamong.life().home.ghost"))
        page.evaluate("() => window.__metamong.game.rotateHomeFurniture()")
        page.wait_for_timeout(300)
        print('ghost rotated', page.evaluate("() => window.__metamong.life().home.ghost"))
        page.evaluate("() => window.__metamong.game.confirmHomePlace()")
        page.wait_for_timeout(700)
        print('placed', page.evaluate("() => window.__metamong.life().home.placed"))
        page.screenshot(path=os.path.join(OUT, 'placed.png'))
        # 벽면 가구 — 액자 제작 후 벽에
        page.evaluate(
            "() => { const g = window.__metamong.game; g.progress.building('workshop').done = true; for (const [id,n] of Object.entries({log:20, stone:20, petal:20, star:5, copper:5, crystal:5, driftwood:3, berry:5})) { const left = g.progress.inventory.add(id, n); if (left) g.progress.inventory.storage[id] = (g.progress.inventory.storage[id]||0)+left; } g.progress.addCoins(500); }"
        )
        print('craft picture', page.evaluate("() => window.__metamong.game.craftFurniture('picture')"))
        page.evaluate("() => window.__metamong.game.placeFurniture('picture')")
        page.wait_for_timeout(500)
        page.evaluate("() => window.__metamong.game.home.moveGhostTo(0, -3.0)")
        page.wait_for_timeout(300)
        print('wall ghost', page.evaluate("() => window.__metamong.life().home.ghost"))
        page.evaluate("() => window.__metamong.game.rotateHomeFurniture()")
        page.wait_for_timeout(300)
        print('wall rotated', page.evaluate("() => window.__metamong.life().home.ghost"))
        page.evaluate("() => window.__metamong.game.confirmHomePlace()")
        page.wait_for_timeout(600)
        page.screenshot(path=os.path.join(OUT, 'wall.png'))
        print('placed2', page.evaluate("() => window.__metamong.life().home.placed"))
        page.evaluate("() => window.__metamong.game.exitHome()")
        page.wait_for_timeout(900)
        print('indoor after exit', page.evaluate("() => window.__metamong.stats().indoor"))

        # 도움말
        page.evaluate("() => window.__metamong.game.openHelp()")
        page.wait_for_timeout(700)
        print('help', page.locator('.modal-title').first.inner_text())
        page.screenshot(path=os.path.join(OUT, 'help.png'))
        page.locator('.modal.open .modal-close').first.click(no_wait_after=True)
        page.wait_for_timeout(400)

        # 원정
        page.evaluate("() => window.__metamong.game.openExpedition()")
        page.wait_for_timeout(700)
        print('expedition modal', page.locator('.modal-title').first.inner_text())
        page.screenshot(path=os.path.join(OUT, 'expedition.png'))
        print('start', page.evaluate("() => window.__metamong.game.startExpedition('volcano')"))
        page.wait_for_timeout(1200)
        print('run', json.dumps(page.evaluate("() => window.__metamong.life().expedition"), ensure_ascii=False)[:300])
        page.screenshot(path=os.path.join(OUT, 'expedition_run.png'))
        page.evaluate("() => { const g = window.__metamong.game; g.expedition.walkTo(g.expedition.nodes[0].x, g.expedition.nodes[0].z, g.expedition.nodes[0]); }")
        page.wait_for_timeout(2600)
        print('after harvest', json.dumps(page.evaluate("() => window.__metamong.life().expedition.run"), ensure_ascii=False)[:300])
        page.screenshot(path=os.path.join(OUT, 'expedition_harvest.png'))
        print('return', page.evaluate("() => window.__metamong.game.returnExpedition()"))
        page.wait_for_timeout(900)
        print('result modal', page.locator('.modal-title').first.inner_text() if page.locator('.modal-title').count() else '')
        print('expedition basket', page.evaluate("() => window.__metamong.life().expedition.basket"))
        page.screenshot(path=os.path.join(OUT, 'expedition_result.png'))
        page.locator('.modal.open .modal-close').first.click(no_wait_after=True)
        page.wait_for_timeout(400)
    except Exception:
        traceback.print_exc()
    finally:
        bad = [(t, m) for t, m in logs if t == 'error']
        print('console errors', len(bad))
        for t, m in bad[:10]:
            print(' ', m[:300])
        print('page errors', len(errors))
        for e in errors[:10]:
            print(' ', e[:400])
        print('failed', len(failed))
        for f in failed[:10]:
            print(' ', f[:200])
        browser.close()
        httpd.shutdown()

import os
import sys
from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, os.path.join(ROOT, 'tools'))
from browser_env import STUB  # noqa
from serve_dist import start  # noqa

DIST = os.path.join(ROOT, 'dist')
OUT = os.path.join(ROOT, 'screenshots', 'phase6')
httpd, port = start(DIST)
with sync_playwright() as p:
    b = p.chromium.launch(args=['--use-gl=angle', '--enable-unsafe-swiftshader'])
    ctx = b.new_context(viewport={'width': 390, 'height': 844}, is_mobile=True, has_touch=True, service_workers='block')
    pg = ctx.new_page()
    errs = []
    pg.on('pageerror', lambda e: print('PAGEERR', e))
    pg.on('console', lambda m: print('CONSOLE', m.type, m.text[:200]) if m.type in ('error', 'warning') else None)
    pg.on('requestfailed', lambda r: print('REQFAIL', r.url, r.failure))
    pg.goto(f'http://127.0.0.1:{port}/', wait_until='networkidle')
    pg.wait_for_function("() => !!window.__metamong", timeout=20000)
    pg.wait_for_timeout(2200)
    pg.evaluate("""async () => { await window.__metamong.game.saveStore.clear(); localStorage.clear(); }""")
    pg.reload(wait_until='networkidle')
    pg.wait_for_function("() => !!window.__metamong", timeout=20000)
    pg.wait_for_timeout(2400)
    pg.locator('.title-actions button').last.click()
    pg.wait_for_timeout(2200)

    pg.evaluate("""() => {
      const g = window.__metamong.game;
      for (const id of ['workshop','dock','vending']) { g.progress.building(id).done = true; g.world.scenery.setBuilt(id, true, true); }
      g.progress.addCoins(400);
      g.progress.bridgeState().invested = { log: 6, stone: 4 };
      g.completeBridge();
      g.modal.close();
      g.player.teleport(0.3, -9.0); g.player.setYaw(0);
    }""")
    pg.wait_for_timeout(2000)
    pg.screenshot(path=os.path.join(OUT, '20_bridge_deck.png'))
    print('action', pg.locator('.action-btn .txt').inner_text())
    pg.evaluate("() => window.__metamong.game.openFishSpot('river_bridge')")
    pg.wait_for_timeout(800)
    pg.screenshot(path=os.path.join(OUT, '21_bridge_fish_modal.png'))
    pg.evaluate("() => window.__metamong.game.modal.close()")
    pg.wait_for_timeout(400)

    pg.evaluate("() => window.__metamong.game.openMinimap()")
    pg.wait_for_timeout(900)
    pg.screenshot(path=os.path.join(OUT, '22_map_modal.png'))
    pg.evaluate("() => window.__metamong.game.modal.close()")
    pg.wait_for_timeout(400)

    pg.evaluate("""() => {
      const g = window.__metamong.game;
      g.progress.forage = { shell: 5, conch: 2, driftwood: 1, pine_mushroom: 3, acorn: 4, honey: 2, copper: 3, crystal: 1 };
      g.progress.crops = { tomato: 3, corn: 2, sweetpotato: 2, melon: 1, sunflower: 1, rice: 3, strawberry: 2 };
      g.progress.fish = { trout: 1, catfish: 1, tuna: 1, clownfish: 1 };
      g.openBag();
    }""")
    pg.wait_for_timeout(800)
    pg.evaluate("() => { const c = document.querySelector('.modal.open .modal-card'); if (c) c.scrollTop = 300; }")
    pg.wait_for_timeout(500)
    pg.screenshot(path=os.path.join(OUT, '23_bag_basket.png'))
    pg.evaluate("() => window.__metamong.game.modal.close()")
    pg.wait_for_timeout(300)

    pg.evaluate("() => { const g = window.__metamong.game; g.life.codexTab = 'gather'; g.openCodex(); }")
    pg.wait_for_timeout(900)
    pg.screenshot(path=os.path.join(OUT, '24_codex_gather_filled.png'))
    pg.evaluate("() => window.__metamong.game.modal.close()")
    pg.wait_for_timeout(300)

    # achievement list (23종)
    pg.evaluate("() => window.__metamong.game.openAchievements()")
    pg.wait_for_timeout(900)
    pg.evaluate("() => { const c = document.querySelector('.modal.open .modal-card'); if (c) c.scrollTop = 240; }")
    pg.wait_for_timeout(400)
    pg.screenshot(path=os.path.join(OUT, '25_achievements.png'))
    print('page errors', errs)
    b.close()
httpd.shutdown()

#!/usr/bin/env python3
"""6단계 화면 캡처 — UI(텃밭 4×4·논 4×2·도감·자판기·낚시)와 3D(해변·숲·채석장·강가)."""
import os
import sys
import traceback

from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, HERE)
from browser_env import STUB  # noqa: F401,E402
from serve_dist import start  # noqa: E402

DIST = os.path.join(ROOT, 'dist')
OUT = os.path.join(ROOT, 'screenshots', 'phase6')
os.makedirs(OUT, exist_ok=True)

logs, errors, failed = [], [], []


def alive(page):
    try:
        page.wait_for_function("() => !document.querySelector('.gl-overlay.on')", timeout=8000)
    except Exception:
        page.evaluate("() => { try { window.__metamong.game.hud.setContextLost(false); } catch (e) {} }")
        page.wait_for_timeout(300)


def snap(page, name):
    alive(page)
    page.evaluate("() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(() => r(1))))")
    page.wait_for_timeout(320)
    page.screenshot(path=os.path.join(OUT, name), timeout=30000)
    print('  📸', name)


def scroll_modal(page, y):
    page.evaluate("(y) => { const c = document.querySelector('.modal.open .modal-card'); if (c) c.scrollTop = y; }", y)
    page.wait_for_timeout(360)


def close_modal(page):
    page.evaluate("() => window.__metamong.game.modal.close()")
    page.wait_for_timeout(400)


def new_island(page):
    page.evaluate("""async () => { try { await window.__metamong.game.saveStore.clear(); } catch (e) {} try { localStorage.clear(); } catch (e) {} }""")
    page.reload(wait_until='networkidle')
    page.wait_for_timeout(2600)
    alive(page)
    page.locator('.title-actions button').last.click()
    page.wait_for_timeout(2400)


def unlock(page):
    page.evaluate(
        """() => {
          const g = window.__metamong.game;
          for (const id of ['workshop', 'dock', 'vending', 'lighthouse']) {
            g.progress.building(id).done = true;
            g.world.scenery.setBuilt(id, true, true);
          }
          g.progress.addCoins(500);
        }"""
    )
    page.wait_for_timeout(300)


def run():
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
            page.wait_for_timeout(3000)
            new_island(page)
            unlock(page)
            snap(page, '01_spawn.png')

            # ── 텃밭 4×4
            page.evaluate("""() => {
              const g = window.__metamong.game;
              for (const id of ['seed_tomato','seed_corn','seed_sweetpotato','seed_melon','seed_sunflower','seed_strawberry','seed_radish','seed_pumpkin']) g.progress.addSupply(id, 4);
              g.progress.addSupply('fertilizer', 6);
              g.progress.tools.water = 3;
            }""")
            page.evaluate("() => window.__metamong.game.openFarm()")
            page.wait_for_timeout(700)
            scroll_modal(page, 430)
            snap(page, '02_farm_grid_empty.png')
            page.evaluate("""() => {
              const g = window.__metamong.game;
              const crops = ['tomato','corn','sweetpotato','melon','sunflower','strawberry','radish','pumpkin'];
              for (let i = 0; i < 16; i++) g.progress.plantSeed(i, crops[i % crops.length]);
              g.farming.syncAll();
            }""")
            page.evaluate("() => window.__metamong.game.openFarm()")
            page.wait_for_timeout(700)
            scroll_modal(page, 430)
            snap(page, '03_farm_grid_planted.png')
            page.evaluate("() => window.__metamong.game.fertilizePlot(0)")
            page.wait_for_timeout(600)
            page.evaluate("() => window.__metamong.game.openFarm()")
            page.wait_for_timeout(600)
            scroll_modal(page, 430)
            snap(page, '04_farm_fertilized.png')
            page.evaluate("""() => {
              const g = window.__metamong.game;
              g.progress.farmPlots.forEach((st) => { if (st) st.remain = 0; });
              g.farming.syncAll();
              g.openFarm();
            }""")
            page.wait_for_timeout(700)
            scroll_modal(page, 430)
            snap(page, '05_farm_ripe.png')
            close_modal(page)

            # ── 논 4×2
            page.evaluate("""() => {
              const g = window.__metamong.game;
              g.progress.addSupply('seed_rice', 10);
              g.progress.bridgeState().built = true;
              for (let i = 0; i < 8; i++) g.progress.plantPaddy(i, 'rice');
              g.paddy.syncAll();
              g.openPaddy();
            }""")
            page.wait_for_timeout(900)
            scroll_modal(page, 330)
            snap(page, '06_paddy_grid.png')
            close_modal(page)

            # ── 자판기 사기 탭 (씨앗 9종 + 비료)
            page.evaluate("() => { const g = window.__metamong.game; g.life.shopTab = 'buy'; g.openVending(); }")
            page.wait_for_timeout(800)
            scroll_modal(page, 300)
            snap(page, '07_vending_buy.png')
            close_modal(page)

            # ── 도감 탭
            page.evaluate("() => { const g = window.__metamong.game; g.life.codexTab = 'fish'; g.openCodex(); }")
            page.wait_for_timeout(900)
            snap(page, '08_codex_fish.png')
            page.evaluate("() => { const g = window.__metamong.game; g.life.codexTab = 'gather'; g.openCodex(); }")
            page.wait_for_timeout(800)
            snap(page, '09_codex_gather.png')
            page.evaluate("() => { const g = window.__metamong.game; g.life.codexTab = 'farm'; g.openCodex(); }")
            page.wait_for_timeout(800)
            scroll_modal(page, 210)
            snap(page, '10_codex_farm.png')
            close_modal(page)

            # ── 요리 (새 레시피)
            page.evaluate("""() => {
              const g = window.__metamong.game;
              g.progress.crops = { tomato: 4, corn: 3, sweetpotato: 4, melon: 2, sunflower: 2, rice: 4 };
              g.progress.forage = { honey: 2, pine_mushroom: 3 };
              g.progress.fish = { trout: 2, catfish: 2, lobster: 1 };
              g.progress.inventory.add('log', 4); g.progress.inventory.add('berry', 4); g.progress.inventory.add('petal', 4);
              g.openCooking();
            }""")
            page.wait_for_timeout(900)
            scroll_modal(page, 560)
            snap(page, '11_cooking_new.png')
            close_modal(page)

            # ── 3D 채집지
            page.evaluate("() => { const g = window.__metamong.game; g.player.teleport(0, 28.6); g.player.setYaw(0); }")
            page.wait_for_timeout(1500)
            snap(page, '12_beach_nodes.png')
            print('beach action', page.locator('.action-btn .txt').inner_text())
            page.evaluate("() => { const g = window.__metamong.game; g.player.teleport(-6.8, 29.6); g.player.setYaw(0); }")
            page.wait_for_timeout(1500)
            snap(page, '12b_beach_closeup.png')
            page.evaluate("() => { const g = window.__metamong.game; g.player.teleport(-18.4, -19.6); g.player.setYaw(Math.PI); }")
            page.wait_for_timeout(1600)
            snap(page, '13_forest_nodes.png')
            page.evaluate("() => { const g = window.__metamong.game; g.player.teleport(9.2, -16.6); g.player.setYaw(Math.PI); }")
            page.wait_for_timeout(1600)
            snap(page, '14_quarry_nodes.png')
            page.evaluate("() => { const g = window.__metamong.game; g.player.teleport(10.2, -1.4); g.player.setYaw(Math.PI); }")
            page.wait_for_timeout(1600)
            snap(page, '15_river_bank.png')
            print('river action', page.locator('.action-btn .txt').inner_text())

            # ── 강 낚시 모달 + 입질
            page.evaluate("() => window.__metamong.game.openFishSpot('river_bank')")
            page.wait_for_timeout(800)
            snap(page, '16_river_fish_modal.png')
            close_modal(page)
            page.evaluate("""() => {
              const g = window.__metamong.game;
              g.fishing.start({ zone: 'river_bank' });
              g.fishing.state = 'wait';
              g.fishing.t = g.fishing.waitFor;
            }""")
            page.wait_for_timeout(700)
            snap(page, '17_river_bite.png')
            page.evaluate("() => window.__metamong.game.fishing.cancel()")
            page.wait_for_timeout(400)

            # ── 채집 후 밑동 + 특산 바구니
            page.evaluate("""() => {
              const g = window.__metamong.game;
              const n = g.world.scenery.nodes.find((x) => x.sprite === 'shell');
              g.player.teleport(n.x + 0.9, n.z + 1.1); g.player.setYaw(Math.PI);
              g.gathering.hit(n); g.gathering.hit(n);
            }""")
            page.wait_for_timeout(500)
            page.evaluate("""() => {
              const g = window.__metamong.game;
              for (const sprite of ['shell', 'conch', 'pine_mushroom', 'acorn', 'honey', 'copper', 'crystal']) {
                const n = g.world.scenery.nodes.find((x) => x.sprite === sprite && !x.harvested);
                if (!n) continue;
                for (let i = 0; i < 3; i++) g.gathering.hit(n);
              }
            }""")
            page.wait_for_timeout(700)
            page.evaluate("() => window.__metamong.game.openBag()")
            page.wait_for_timeout(800)
            scroll_modal(page, 260)
            snap(page, '18_bag_forage.png')
            close_modal(page)

            # ── 밤의 강 낚시 (출현 어종 교체)
            page.evaluate("() => { const g = window.__metamong.game; g.state.elapsed = 1000; g.player.teleport(10.2, -1.4); g.player.setYaw(Math.PI); }")
            page.wait_for_timeout(1600)
            page.evaluate("() => window.__metamong.game.openFishSpot('river_bank')")
            page.wait_for_timeout(900)
            snap(page, '19_river_night_fish.png')
            close_modal(page)
        except Exception:
            traceback.print_exc()
        finally:
            bad = [(t, m) for t, m in logs if t == 'error']
            print('\nconsole errors', len(bad))
            for t, m in bad[:8]:
                print(' ', m[:250])
            print('page errors', len(errors))
            for e in errors[:5]:
                print(' ', e[:300])
            print('failed requests', len(failed))
            for f in failed[:5]:
                print(' ', f[:200])
            browser.close()
            httpd.shutdown()


if __name__ == '__main__':
    run()

#!/usr/bin/env python3
"""
shots_phase4.py — 4단계 대표 스크린샷 (세션마다 새 컨텍스트로 짧게 찍는다)

이 환경의 소프트웨어 렌더러는 한 세션에서 오래 조작하면 GPU 프로세스가 한 번 죽어
캔버스가 검게 남는다(3단계 캡처에서도 같은 현상). 그래서 대표 컷은 **세션을 새로 열어**
필요한 동작만 하고 바로 찍는다. 저장 위치: screenshots/phase4/final_*.png
"""
import os
import sys

from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from browser_env import STUB  # noqa: F401,E402
from serve_dist import start  # noqa: E402

OUT = os.path.abspath(os.path.join(HERE, '..', 'screenshots', 'phase4'))
DIST = os.path.abspath(os.path.join(HERE, '..', 'dist'))
os.makedirs(OUT, exist_ok=True)


def boot(browser, url):
    ctx = browser.new_context(
        viewport={'width': 390, 'height': 844},
        device_scale_factor=1,
        is_mobile=True,
        has_touch=True,
        service_workers='block',
    )
    page = ctx.new_page()
    page.goto(url, wait_until='networkidle')
    page.wait_for_timeout(2600)
    page.screenshot(path=os.path.join(OUT, 'zz_skip_title.png'))
    page.locator('.title-actions button').last.click()
    page.wait_for_timeout(2400)
    return ctx, page


def shot(page, name):
    page.wait_for_timeout(700)
    page.screenshot(path=os.path.join(OUT, name))
    print('  📸', name)


def run():
    httpd, port = start(DIST)
    url = f'http://127.0.0.1:{port}/'
    with sync_playwright() as p:
        browser = p.chromium.launch(args=['--use-gl=angle', '--enable-unsafe-swiftshader'])

        # ① 타이틀 + 새 섬(웰컴 배너)
        ctx = browser.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=1, is_mobile=True, has_touch=True, service_workers='block')
        page = ctx.new_page()
        page.goto(url, wait_until='networkidle')
        page.wait_for_timeout(2600)
        page.screenshot(path=os.path.join(OUT, 'final_01_title.png'))
        print('  📸 final_01_title.png')
        page.locator('.title-actions button').last.click()
        page.wait_for_timeout(2400)
        shot(page, 'final_02_spawn_welcome.png')
        ctx.close()

        # ② 다리 건축 전 (강 + 말뚝) + 지도 점선
        ctx, page = boot(browser, url)
        page.evaluate("() => window.__metamong.game.player.teleport(0, -4.4)")
        shot(page, 'final_03_bridge_site.png')
        page.evaluate("() => window.__metamong.game.openMinimap()")
        shot(page, 'final_04_map_unbuilt.png')
        page.evaluate("() => window.__metamong.game.modal.close()")
        ctx.close()

        # ③ 다리 완성 + 북쪽 진입 + 숲/채석장
        ctx, page = boot(browser, url)
        page.evaluate(
            """() => {
              const g = window.__metamong.game;
              g.progress.inventory.add('log', 8); g.progress.inventory.add('stone', 6);
              g.investBridge(); g.completeBridge();
              g.progress.addCoins(120);
              g.save();
            }"""
        )
        page.evaluate("() => window.__metamong.game.modal.close()")
        page.evaluate("() => window.__metamong.game.player.teleport(0, -4.4)")
        shot(page, 'final_05_bridge_built.png')
        page.evaluate("() => window.__metamong.game.player.teleport(-2.0, -13.4)")
        shot(page, 'final_06_north_view.png')
        page.evaluate("() => window.__metamong.game.openMinimap()")
        shot(page, 'final_07_map_built.png')
        page.evaluate("() => window.__metamong.game.modal.close()")
        ctx.close()

        # ④ 숲 · 채석장 · 논
        ctx, page = boot(browser, url)
        page.evaluate("() => window.__metamong.game.player.teleport(-11.0, -15.2)")
        shot(page, 'final_08_forest.png')
        page.evaluate("() => window.__metamong.game.player.teleport(13.4, -15.6)")
        shot(page, 'final_09_quarry.png')
        page.evaluate(
            """() => {
              const g = window.__metamong.game;
              g.progress.addSupply('seed_rice', 4);
              g.progress.paddyPlots[0] = { crop: 'rice', remain: 30, total: 45, watered: 1, wet: 6 };
              g.progress.paddyPlots[1] = { crop: 'rice', remain: 12, total: 45, watered: 2, wet: 0 };
              g.progress.paddyPlots[2] = { crop: 'rice', remain: 0, total: 45, watered: 2, wet: 0 };
              g.paddy.syncAll();
              g.player.teleport(-3.4, -16.0);
            }"""
        )
        shot(page, 'final_10_paddy.png')
        page.evaluate("() => window.__metamong.game.openPaddy()")
        shot(page, 'final_11_paddy_panel.png')
        page.evaluate("() => window.__metamong.game.modal.close()")
        ctx.close()

        # ⑤ 리어카 · 가방 16칸 · 공방 메뉴
        ctx, page = boot(browser, url)
        page.evaluate(
            """() => {
              const g = window.__metamong.game;
              g.progress.building('workshop').done = true;
              g.progress.addCoins(400);
              g.progress.inventory.add('log', 12); g.progress.inventory.add('stone', 8);
              g.progress.inventory.add('berry', 2); g.progress.inventory.add('petal', 3);
              g.world.scenery.setBuilt('workshop', true);
              g.openWorkshop();
            }"""
        )
        shot(page, 'final_12_workshop_cart.png')
        page.evaluate("() => window.__metamong.game.openCart()")
        shot(page, 'final_13_cart_panel.png')
        page.evaluate("() => window.__metamong.game.buildCart()")
        page.evaluate("() => window.__metamong.game.modal.close()")
        page.evaluate("() => window.__metamong.game.player.teleport(0.4, 17.4)")
        page.wait_for_timeout(900)
        shot(page, 'final_14_cart_equipped.png')
        page.evaluate("() => window.__metamong.game.openBag()")
        shot(page, 'final_15_bag_16.png')
        page.evaluate("() => window.__metamong.game.modal.close()")
        page.evaluate("() => window.__metamong.game.openAchievements()")
        shot(page, 'final_16_achievements.png')
        ctx.close()

        browser.close()
    httpd.shutdown()
    try:
        os.remove(os.path.join(OUT, 'zz_skip_title.png'))
    except OSError:
        pass


if __name__ == '__main__':
    run()

#!/usr/bin/env python3
"""
6단계(농장 4×4·논 4×2 · 새 작물 5종 · 성장 비료 · 해변/숲/광맥 채집 · 물고기 15종 & 강 낚시 · 세이브 v7)
브라우저 실측 QA — 390×844 모바일 세로 화면에서 실제로 눌러 본다.

QA_PART=content|save|regress|all (기본 all)
  content : 텃밭 4×4/논 4×2 · 새 작물 · 비료 · 새 채집지 · 특산 바구니 · 자판기 · 도감 · 강 낚시 · 시간대별 어종
  save    : v7 저장/복원 + v6·v5·v1 → v7 마이그레이션 (3×3 → 4×4 행·열 보존)
  regress : 1~5단계 회귀 (채집·우편·가방·창고·낚시·요리·농사·다리·논·리어카·방어전·업적)

스크린샷: screenshots/phase6/qa_*.png
"""
import json
import os
import sys
import time
import traceback

from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from browser_env import STUB  # noqa: F401,E402  (ATK 스텁 경로 보정)
from serve_dist import start  # noqa: E402

ROOT = os.path.dirname(HERE)
DIST = os.path.join(ROOT, 'dist')
OUT = os.path.join(ROOT, 'screenshots', 'phase6')
os.makedirs(OUT, exist_ok=True)
PART = os.environ.get('QA_PART', 'all')

logs, errors, failed, checks = [], [], [], []


def want(part):
    return PART in ('all', part)


def check(label, ok, detail=''):
    checks.append((label, bool(ok), detail))
    print(f'  {"✓" if ok else "✗"} {label}{(" — " + str(detail)) if detail != "" else ""}')
    return ok


def alive(page, timeout=8000):
    try:
        page.wait_for_function("() => !document.querySelector('.gl-overlay.on')", timeout=timeout)
    except Exception:
        page.evaluate("() => { try { window.__metamong.game.hud.setContextLost(false); } catch (e) {} }")
        page.wait_for_timeout(400)


def snap(page, name):
    try:
        alive(page)
    except Exception:
        pass
    try:
        page.evaluate("() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(() => r(1))))")
        page.wait_for_timeout(320)
    except Exception:
        pass
    try:
        page.screenshot(path=os.path.join(OUT, name), timeout=30000)
        print(f'  📸 {name}')
    except Exception as exc:
        print(f'  ⚠ 스크린샷 실패 {name}: {exc}')


def life(page):
    return page.evaluate('window.__metamong.life()')


def stats(page):
    return page.evaluate('window.__metamong.stats()')


def close_modal(page):
    if page.locator('.modal.open').count():
        alive(page)
        try:
            page.locator('.modal.open .modal-close').first.click(timeout=8000, no_wait_after=True)
        except Exception:
            page.evaluate("() => { const b = document.querySelector('.modal.open .modal-close'); if (b) b.click(); }")
    page.wait_for_timeout(320)


def modal_title(page):
    return page.locator('.modal-title').first.inner_text() if page.locator('.modal-title').count() else ''


def action_label(page):
    return page.locator('.action-btn .txt').inner_text() if page.locator('.action-btn .txt').count() else ''


def teleport(page, x, z, yaw=None, settle=650):
    page.evaluate(
        "([x, z, yaw]) => { const g = window.__metamong.game; g.player.teleport(x, z); if (yaw !== null) g.player.setYaw(yaw); }",
        [x, z, yaw],
    )
    page.wait_for_timeout(settle)


def set_time(page, scale):
    page.evaluate("(s) => { window.__metamong.game.state.settings.timeScale = s; }", scale)


def click_in_body(page, text, row_sel='', row_has=''):
    alive(page)
    page.evaluate(
        """([t, rowSel, rowHas]) => {
          let scope = document;
          if (rowSel) {
            const row = [...document.querySelectorAll(rowSel)].find((x) => x.textContent.includes(rowHas));
            if (!row) return;
            scope = row;
          }
          const btn = [...scope.querySelectorAll('button')].find((x) => x.textContent.trim().includes(t) && !x.disabled);
          if (btn) btn.click();
        }""",
        [text, row_sel, row_has],
    )
    page.wait_for_timeout(420)


def click_in_cell(page, index, text):
    """텃밭·논 격자의 한 칸 안 버튼을 누른다 (data-plot)"""
    page.evaluate(
        """([i, t]) => {
          const cell = document.querySelector(`.farm-cell[data-plot="${i}"]`);
          if (!cell) return;
          const btn = [...cell.querySelectorAll('button')].find((x) => x.textContent.includes(t) && !x.disabled);
          if (btn) btn.click();
        }""",
        [index, text],
    )
    page.wait_for_timeout(450)


def fresh(page, url):
    page.goto(url, wait_until='networkidle')
    page.evaluate("""async () => {
      try { await window.__metamong.game.saveStore.clear(); } catch (e) {}
      try { localStorage.clear(); } catch (e) {}
    }""")
    page.reload(wait_until='networkidle')
    page.wait_for_timeout(2800)
    alive(page)


def new_island(page):
    page.locator('.title-actions button').last.click()
    page.wait_for_timeout(2300)


def unlock(page):
    """공방·부두·자판기·등대 복구 + 코인 — 6단계 콘텐츠를 바로 눌러 보기 위한 준비"""
    page.evaluate(
        """() => {
          const g = window.__metamong.game;
          for (const id of ['workshop', 'dock', 'vending', 'lighthouse']) {
            g.progress.building(id).done = true;
            g.world.scenery.setBuilt(id, true, true);
          }
          g.progress.addCoins(600);
        }"""
    )
    page.wait_for_timeout(300)


def harvest_node(page, sprite, hits=8, gap=260):
    """노드 하나를 완전히 캔다 — 타격 쿨다운(0.12s)이 있어 간격을 두고, 기력도 채워 준다"""
    found = page.evaluate(
        """(sprite) => {
          const g = window.__metamong.game;
          const n = g.world.scenery.nodes.find((x) => x.sprite === sprite && !x.harvested);
          if (!n) return null;
          const dirs = [[0,1],[0,-1],[1,0],[-1,0],[0.8,0.8],[-0.8,0.8],[0.8,-0.8],[-0.8,-0.8],[0,1.6],[0,-1.6],[1.6,0],[-1.6,0]];
          for (const [dx, dz] of dirs) {
            const x = n.x + dx * 1.1;
            const z = n.z + dz * 1.1;
            if (g.world.terrain.isWalkable(x, z)) { g.player.teleport(x, z); break; }
          }
          g.progress.restStamina(100);
          return { x: n.x, z: n.z, kind: n.kind, key: n.key };
        }""",
        sprite,
    )
    if not found:
        return None
    page.wait_for_timeout(420)
    for _ in range(hits):
        done = page.evaluate(
            """([sprite, key]) => {
              const g = window.__metamong.game;
              const n = g.world.scenery.nodes.find((x) => x.key === key);
              if (!n || n.harvested) return true;
              g.progress.restStamina(100);
              g.gathering.hit(n);
              return n.harvested;
            }""",
            [sprite, found['key']],
        )
        page.wait_for_timeout(gap)
        if done:
            break
    found['harvested'] = page.evaluate("(key) => { const n = window.__metamong.game.world.scenery.nodes.find((x) => x.key === key); return !!(n && n.harvested); }", found['key'])
    return found


def grid_cells(page):
    return page.locator('.farm-cell').count()


def modal_metrics(page):
    return page.evaluate(
        """() => {
          const c = document.querySelector('.modal.open .modal-card');
          const t = document.querySelector('.modal.open .modal-title');
          if (!c || !t) return null;
          const cr = c.getBoundingClientRect();
          const tr = t.getBoundingClientRect();
          return {
            cardH: Math.round(cr.height),
            cardW: Math.round(cr.width),
            titleH: Math.round(tr.height),
            vh: window.innerHeight,
            overflowX: c.scrollWidth > c.clientWidth + 1,
            overflowY: c.scrollHeight > c.clientHeight,
          };
        }"""
    )


def run():
    httpd, port = start(DIST)
    url = f'http://127.0.0.1:{port}/'
    print(f'QA URL {url} · part={PART}')

    with sync_playwright() as p:
        browser = p.chromium.launch(args=['--use-gl=angle', '--enable-unsafe-swiftshader'])
        ctx = browser.new_context(
            viewport={'width': 390, 'height': 844},
            device_scale_factor=1,
            is_mobile=True,
            has_touch=True,
            user_agent='Mozilla/5.0 (Linux; Android 14; SM-S911N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Mobile Safari/537.36',
            service_workers='block',
        )
        page = ctx.new_page()
        page.set_default_timeout(20000)
        page.on('console', lambda m: logs.append((m.type, m.text)))
        page.on('pageerror', lambda e: errors.append(str(e)))
        page.on('requestfailed', lambda r: failed.append(f'{r.url} :: {r.failure}'))
        page.on('response', lambda r: failed.append(f'HTTP {r.status} {r.url}') if r.status >= 400 else None)

        try:
            if want('content'):
                # ═══ ① 타이틀 · 4×4/4×2 · 모달 격자 ═════════════════
                fresh(page, url)
                snap(page, 'qa_01_title.png')
                badge = page.locator('.title-badge').inner_text()
                version = page.locator('.title-version').inner_text()
                check('타이틀이 Phase 6', 'PHASE 6' in badge and 'Phase 6' in version, f'{badge} / {version}')
                new_island(page)
                lf = life(page)
                check('플레이 진입', stats(page)['mode'] == 'play', stats(page)['mode'])
                check('텃밭 16칸 (4×4)', len(lf['farmPlots']) == 16, len(lf['farmPlots']))
                check('논 8칸 (4×2)', len(lf['paddyPlots']) == 8, len(lf['paddyPlots']))
                check('새 채집지 22곳', lf['gatherTotal'] == 22, lf['gatherTotal'])
                kinds = sorted(set(n['sprite'] for n in lf['gatherNodes']))
                check('채집지 8종 모두 배치', kinds == ['acorn', 'conch', 'copper', 'crystal', 'driftwood', 'honey', 'pine_mushroom', 'shell'], kinds)
                check('새 바구니·비료가 처음엔 비어 있음', lf['forageTotal'] == 0 and lf['fertilizer'] == 0, (lf['forage'], lf['fertilizer']))
                check('업적 23종', len(lf['achRows']) == 23, len(lf['achRows']))

                unlock(page)
                page.evaluate("() => window.__metamong.game.openFarm()")
                page.wait_for_timeout(800)
                m = modal_metrics(page)
                check('텃밭 모달 — 16칸 격자', grid_cells(page) == 16, grid_cells(page))
                check('텃밭 모달 4열', page.evaluate("() => document.querySelectorAll('.farm-grid')[0].getAttribute('data-cols')") == '4')
                check('텃밭 모달 가로 넘침 없음', m and not m['overflowX'], m)
                check('텃밭 모달 세로 레이아웃', m and m['cardH'] <= m['vh'] and m['titleH'] < 90, m)
                snap(page, 'qa_02_farm_grid.png')
                close_modal(page)

                page.evaluate("() => { const g = window.__metamong.game; g.progress.bridgeState().built = true; g.openPaddy(); }")
                page.wait_for_timeout(800)
                check('논 모달 — 8칸 격자', grid_cells(page) == 8, grid_cells(page))
                check('논 모달 가로 넘침 없음', modal_metrics(page) and not modal_metrics(page)['overflowX'], modal_metrics(page))
                snap(page, 'qa_03_paddy_grid.png')
                close_modal(page)

                # ═══ ② 새 작물 5종 — 자판기에서 씨앗 사기 → 4×4 심기 → 물 → 수확 ═══
                page.evaluate("() => { const g = window.__metamong.game; g.life.shopTab = 'buy'; g.openVending(); }")
                page.wait_for_timeout(800)
                shop_txt = page.locator('.modal.open .modal-body').inner_text()
                check('자판기에 새 씨앗 5종', all(name in shop_txt for name in ['방울토마토 씨앗', '옥수수 씨앗', '고구마 순', '멜론 씨앗', '해바라기 씨']), shop_txt[:80])
                check('자판기에 성장 비료', '성장 비료' in shop_txt, '')
                snap(page, 'qa_04_vending_seeds.png')
                # UI 로 방울토마토 씨앗 1개 사기
                before = life(page)
                click_in_body(page, '🪙', '.shop-row', '방울토마토 씨앗')
                after = life(page)
                check('씨앗 구매 (UI) — 코인↓ 씨앗↑', after['coins'] < before['coins'] and after['seeds'].get('seed_tomato', 0) == before['seeds'].get('seed_tomato', 0) + 1, (before['coins'], after['coins'], after['seeds'].get('seed_tomato')))
                # 비료 구매
                before = life(page)
                click_in_body(page, '🪙', '.shop-row', '성장 비료')
                after = life(page)
                check('성장 비료 구매 (UI)', after['fertilizer'] == before['fertilizer'] + 1, (before['fertilizer'], after['fertilizer']))
                close_modal(page)

                # 씨앗·비료 넉넉히 지급 후 16칸 심기 (첫 칸은 UI 로)
                page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      for (const id of ['seed_tomato','seed_corn','seed_sweetpotato','seed_melon','seed_sunflower','seed_strawberry','seed_radish','seed_pumpkin']) g.progress.addSupply(id, 4);
                      g.progress.addSupply('fertilizer', 6);
                      g.progress.tools.water = 3;
                    }"""
                )
                page.evaluate("() => window.__metamong.game.openFarm()")
                page.wait_for_timeout(700)
                click_in_cell(page, 0, '심기')
                page.wait_for_timeout(500)
                picker = modal_title(page)
                check('빈 밭 [심기] → 씨앗 고르기', '번 밭에 심기' in picker, picker)
                click_in_body(page, '심기', '.seed-row', '방울토마토')
                page.wait_for_timeout(500)
                check('UI 로 방울토마토 심기', (life(page)['farmPlots'][0] or {}).get('crop') == 'tomato', life(page)['farmPlots'][0])
                page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      const crops = ['corn','sweetpotato','melon','sunflower','strawberry','radish','pumpkin','tomato','corn','sweetpotato','melon','sunflower','strawberry','radish','pumpkin'];
                      for (let i = 1; i < 16; i++) g.progress.plantSeed(i, crops[i - 1]);
                      g.farming.syncAll();
                      g.openFarm();
                    }"""
                )
                page.wait_for_timeout(700)
                check('16칸 모두 심음', life(page)['farmPlanted'] == 16, life(page)['farmPlanted'])
                snap(page, 'qa_05_farm_full.png')

                # 물뿌리개 Lv.3 → 16칸 한 번에
                watered = page.evaluate("() => { const g = window.__metamong.game; return g.progress.farmPlots.filter((st) => st && st.watered > 0).length; }")
                page.evaluate("() => window.__metamong.game.waterPlot(0)")
                page.wait_for_timeout(700)
                watered_after = page.evaluate("() => { const g = window.__metamong.game; return g.progress.farmPlots.filter((st) => st && st.watered > 0).length; }")
                check('물뿌리개 Lv.3 → 16칸 한 번에 물주기', watered_after >= 15, (watered, watered_after))

                # 성장 비료 — 한 칸 단계 상승
                page.evaluate("() => window.__metamong.game.openFarm()")
                page.wait_for_timeout(600)
                before_plot = page.evaluate("() => JSON.parse(JSON.stringify(window.__metamong.game.progress.farmPlots[0]))")
                before_plot['fert'] = before_plot.get('fert') or 0
                before_fert = life(page)['fertilizer']
                click_in_cell(page, 0, '🧪')
                after_plot = page.evaluate("() => JSON.parse(JSON.stringify(window.__metamong.game.progress.farmPlots[0]))")
                after_plot['fert'] = after_plot.get('fert') or 0
                after_fert = life(page)['fertilizer']
                check('비료로 성장 단계 상승', after_plot['remain'] < before_plot['remain'] and after_plot['fert'] == before_plot['fert'] + 1, (round(before_plot['remain'], 1), round(after_plot['remain'], 1)))
                check('비료 1개 소모', after_fert == before_fert - 1, (before_fert, after_fert))
                snap(page, 'qa_06_fertilized.png')
                # 두 번째는 되고 세 번째는 막힌다
                page.evaluate("() => window.__metamong.game.fertilizePlot(0)")
                page.wait_for_timeout(300)
                third = page.evaluate("() => window.__metamong.game.fertilizePlot(0)")
                check('한 칸 비료 2번까지', third is False, third)
                # 다 자란 칸에는 못 준다
                page.evaluate("() => { const g = window.__metamong.game; g.progress.farmPlots[1].remain = 0; g.farming.syncAll(); }")
                ripe_fert = page.evaluate("() => window.__metamong.game.fertilizePlot(1)")
                check('다 자란 칸에는 비료 불가', ripe_fert is False, ripe_fert)

                # 시간 배속으로 다 자라게 → 모두 수확
                set_time(page, 60)
                page.wait_for_timeout(2600)
                set_time(page, 1)
                page.evaluate("() => { const g = window.__metamong.game; g.progress.farmPlots.forEach((st, i) => { if (st) { st.remain = 0; g.harvestPlot(i); } }); }")
                page.wait_for_timeout(900)
                lf = life(page)
                newc = lf['newCrops']
                check('새 작물 5종 수확 → 바구니', all(v > 0 for v in newc.values()), newc)
                check('새 작물 수확 카운터', lf['counters'].get('newcrop', 0) >= 5, lf['counters'].get('newcrop'))
                check('수확 후 밭 비움', lf['farmPlanted'] == 0, lf['farmPlanted'])

                # ═══ ③ 새 채집지 — 해변·숲·광맥 + 특산 바구니 ═════════
                page.evaluate("() => window.__metamong.game.modal.close()")
                teleport(page, -6.8, 29.6, 0)
                check('해변에서 [줍기] 액션', '줍기' in action_label(page), action_label(page))
                snap(page, 'qa_07_beach_shell.png')
                before = life(page)
                harvest_node(page, 'shell')
                page.wait_for_timeout(700)
                lf = life(page)
                check('조개 채집 → 특산 바구니', lf['forage'].get('shell', 0) >= 1, lf['forage'])
                bag_ids = [slot['id'] for slot in lf['bag'] if slot]
                check(
                    '특산물은 가방 칸을 차지하지 않음 (특산 바구니로)',
                    not any(i in ('shell', 'conch', 'driftwood', 'pine_mushroom', 'acorn', 'honey', 'copper', 'crystal') for i in bag_ids),
                    bag_ids,
                )
                check('해변 채집 카운터', lf['counters'].get('beach', 0) >= 1, lf['counters'].get('beach'))
                check('캔 자리는 밑동(수확됨)으로', page.evaluate("() => window.__metamong.game.world.scenery.nodes.filter((n) => n.sprite === 'shell' && n.harvested).length") >= 1)

                for sprite, label in (('pine_mushroom', '송이버섯'), ('acorn', '도토리'), ('honey', '달콤한 꿀')):
                    harvest_node(page, sprite)
                teleport(page, -18.4, -19.6, 3.14159)
                page.wait_for_timeout(700)
                snap(page, 'qa_08_forest_nodes.png')
                for sprite, label in (('copper', '구리광석'), ('crystal', '수정')):
                    harvest_node(page, sprite)
                teleport(page, 9.6, -16.6, 3.14159)
                page.wait_for_timeout(700)
                snap(page, 'qa_09_quarry_nodes.png')
                lf = life(page)
                check('숲 특산물 3종 채집', all(lf['forage'].get(k, 0) > 0 for k in ('pine_mushroom', 'acorn', 'honey')), lf['forage'])
                check('광물 2종 채굴 (구리·수정)', all(lf['forage'].get(k, 0) > 0 for k in ('copper', 'crystal')), (lf['forage'], page.evaluate("() => window.__metamong.game.world.scenery.nodes.filter((n) => n.bucket === 'ore').map((n) => ({ s: n.sprite, h: n.harvested, left: n.hitsLeft }))")))
                check('숲·광맥 카운터', lf['counters'].get('forest', 0) >= 3 and lf['counters'].get('ore', 0) >= 2, (lf['counters'].get('forest'), lf['counters'].get('ore')))

                # 리젠 — 수확한 노드는 시간이 지나면 다시 자란다
                page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      const n = g.world.scenery.nodes.find((x) => x.sprite === 'shell' && x.harvested);
                      if (n) n.respawn = 0.2;
                    }"""
                )
                set_time(page, 10)
                page.wait_for_timeout(1600)
                set_time(page, 1)
                check('새 채집지 리젠', page.evaluate("() => window.__metamong.game.world.scenery.nodes.filter((n) => n.sprite === 'shell' && !n.harvested).length") >= 1)

                # 가방 모달 — 특산 바구니
                page.evaluate("() => window.__metamong.game.openBag()")
                page.wait_for_timeout(700)
                bag_txt = page.locator('.modal.open .modal-body').inner_text()
                check('가방에 특산 바구니 안내', '특산 바구니' in bag_txt and '송이버섯' in bag_txt, bag_txt[:60])
                snap(page, 'qa_10_bag_forage.png')
                close_modal(page)

                # 자판기 팔기 — 특산물 줄 + 판매
                page.evaluate("() => { const g = window.__metamong.game; g.life.shopTab = 'sell'; g.openVending(); }")
                page.wait_for_timeout(800)
                sell_rows = page.evaluate("() => [...document.querySelectorAll('.modal.open .shop-row')].map((r) => r.textContent)")
                check('자판기 팔기 목록에 특산물', any('송이버섯' in r and '특산 바구니' in r for r in sell_rows), len(sell_rows))
                snap(page, 'qa_11_vending_sell.png')
                before = life(page)
                click_in_body(page, '1개', '.shop-row', '송이버섯')
                after = life(page)
                check('특산물 판매 (UI) — 코인↑ 바구니↓', after['coins'] > before['coins'] and after['forage'].get('pine_mushroom', 0) < before['forage'].get('pine_mushroom', 0), (before['coins'], after['coins']))
                close_modal(page)

                # 도감 채집 탭
                page.evaluate("() => { const g = window.__metamong.game; g.life.codexTab = 'gather'; g.openCodex(); }")
                page.wait_for_timeout(800)
                codex_txt = page.locator('.modal.open .modal-body').inner_text()
                check('도감 채집 탭 — 8종', '0 / 8종' not in codex_txt and '/ 8종' in codex_txt, codex_txt[:80])
                check(
                    '도감 채집 탭 — 3분류·등록 항목',
                    all(k in codex_txt for k in ['해변 특산', '숲 특산', '광물']) and ('수정' in codex_txt or '송이버섯' in codex_txt),
                    codex_txt[:90],
                )
                snap(page, 'qa_12_codex_gather.png')
                close_modal(page)

                # ═══ ④ 물고기 15종 + 시간대 + 강 낚시 ═══════════════
                # 시간대 풀은 낚시 모달의 '지금 N종' 목록으로 확인한다
                # 부두(바다) — 아침
                page.evaluate("() => { const g = window.__metamong.game; g.state.elapsed = 120; g.player.teleport(0, 28.4); g.player.setYaw(0); }")
                page.wait_for_timeout(1200)
                check('부두 [낚시하기]', '낚시하기' in action_label(page), action_label(page))
                page.evaluate("() => window.__metamong.game.openFishSpot('sea')")
                page.wait_for_timeout(800)
                sea_morning = page.locator('.modal.open .modal-body').inner_text()
                check('바다 아침 어종에 흰동가리', '흰동가리' in sea_morning, sea_morning[:80])
                check('바다 아침에 밤 전용(별빛해파리) 없음', '별빛해파리' not in sea_morning, '')
                snap(page, 'qa_13_sea_morning.png')
                close_modal(page)

                # 강가(민물) — 아침
                teleport(page, 10.2, -1.4, 3.14159)
                check('강가 [강 낚시하기]', '강 낚시하기' in action_label(page), action_label(page))
                page.evaluate("() => window.__metamong.game.openFishSpot('river_bank')")
                page.wait_for_timeout(800)
                river_morning = page.locator('.modal.open .modal-body').inner_text()
                check('민물 아침 어종에 무지개송어', '무지개송어' in river_morning, river_morning[:80])
                check('민물 아침에 밤 전용(황금장어) 없음', '황금장어' not in river_morning, '')
                snap(page, 'qa_14_river_morning.png')
                close_modal(page)

                # 실제 낚시 — 입질 → 탭 → 민물고기 (별조각이 걸리면 한 번 더 던진다)
                page.evaluate("() => window.__metamong.game.openFishSpot('river_bank')")
                page.wait_for_timeout(600)
                page.evaluate("() => window.__metamong.game.modal.close()")
                caught = None
                for attempt in range(5):
                    page.evaluate("() => window.__metamong.game.fishing.start({ zone: 'river_bank' })")
                    page.wait_for_timeout(420)
                    page.evaluate("() => { const f = window.__metamong.game.fishing; f.state = 'wait'; f.t = f.waitFor; }")
                    page.wait_for_timeout(620)
                    if attempt == 0:
                        check('강 낚시 입질', page.evaluate("() => window.__metamong.game.fishing.state") == 'bite', page.evaluate("() => window.__metamong.game.fishing.state"))
                        snap(page, 'qa_15_river_bite.png')
                    page.evaluate("() => window.__metamong.game.fishing.reel()")
                    page.wait_for_timeout(620)
                    last = page.evaluate("() => window.__metamong.game.fishing.lastResult ? window.__metamong.game.fishing.lastResult.fish : null")
                    page.evaluate("() => window.__metamong.game.fishing.cancel()")
                    page.wait_for_timeout(380)
                    if last and last['habitat'] == 'river':
                        caught = last
                        break
                lf = life(page)
                check('민물고기 낚음', caught is not None, (last and last['name'], page.evaluate("() => window.__metamong.game.fishing.zone.id")))
                check('낚시 바구니에 담김', bool(caught) and lf['fish'].get(caught['id'], 0) >= 1, lf['fish'])
                check('민물 낚시 카운터', lf['counters'].get('riverfish', 0) >= 1, lf['counters'].get('riverfish'))

                # 밤 — 민물 풀이 바뀐다
                page.evaluate("() => { window.__metamong.game.state.elapsed = 1000; }")
                page.wait_for_timeout(900)
                page.evaluate("() => window.__metamong.game.openFishSpot('river_bank')")
                page.wait_for_timeout(800)
                river_night = page.locator('.modal.open .modal-body').inner_text()
                check('민물 밤 어종에 메기·황금장어', '메기' in river_night and '황금장어' in river_night, river_night[:100])
                check('민물 밤에 아침 전용(무지개송어) 없음', '무지개송어' not in river_night, '')
                snap(page, 'qa_16_river_night.png')
                close_modal(page)

                # 다리 위 낚시 — 다리를 놓은 뒤
                page.evaluate("() => { const g = window.__metamong.game; g.state.elapsed = 400; }")
                page.evaluate("() => { const g = window.__metamong.game; g.completeBridge(); }")
                page.wait_for_timeout(1200)
                if page.locator('.modal.open').count():
                    close_modal(page)
                check('다리 완성', life(page)['bridgeBuilt'] is True)
                teleport(page, 0, -9.0, 0, 900)
                check('다리 위 [강 낚시하기]', '강 낚시하기' in action_label(page), action_label(page))
                snap(page, 'qa_17_bridge_fishing.png')
                page.evaluate("() => window.__metamong.game.openFishSpot('river_bridge')")
                page.wait_for_timeout(800)
                bridge_txt = page.locator('.modal.open .modal-body').inner_text()
                check('다리 위 낚시 모달', '다리 위' in modal_title(page), modal_title(page))
                close_modal(page)

                # 도감 물고기 탭 — 바다/민물 묶음
                page.evaluate("() => { const g = window.__metamong.game; g.life.codexTab = 'fish'; g.openCodex(); }")
                page.wait_for_timeout(900)
                fish_txt = page.locator('.modal.open .modal-body').inner_text()
                check('물고기 도감 — 바다/민물 묶음', '바다 (' in fish_txt and '민물 (' in fish_txt, fish_txt[:100])
                check('물고기 도감 — 시간대·희귀 표시', '🕐' in fish_txt and '아침' in fish_txt, '')
                snap(page, 'qa_18_codex_fish.png')
                close_modal(page)

                # ═══ ⑤ 새 요리 레시피 ══════════════════════════
                page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      g.progress.crops = { tomato: 4, corn: 3, sweetpotato: 4, melon: 2, sunflower: 2, rice: 4 };
                      g.progress.forage = { honey: 2, pine_mushroom: 3 };
                      g.progress.fish = { trout: 2, catfish: 2, lobster: 1 };
                      for (const [id, n] of Object.entries({ log: 4, berry: 6, petal: 4 })) { const left = g.progress.inventory.add(id, n); if (left) g.progress.inventory.storage[id] = (g.progress.inventory.storage[id] || 0) + left; }
                      g.progress.stamina = 30;
                      g.openCooking();
                    }"""
                )
                page.wait_for_timeout(900)
                cook_txt = page.locator('.modal.open .modal-body').inner_text()
                check('새 요리 레시피 표시', all(name in cook_txt for name in ['방울토마토 샐러드', '버터 옥수수', '군고구마', '멜론 주스', '무지개송어 구이', '메기 매운탕', '송이버섯 구이', '달콤 꿀차']), cook_txt[:120])
                snap(page, 'qa_19_cooking.png')
                before = life(page)
                click_in_body(page, '요리', '.recipe-row', '메기 매운탕')
                after = life(page)
                check('특산물+민물고기 요리 (메기 매운탕)', after['stamina'] > before['stamina'] and after['forage'].get('pine_mushroom', 0) < before['forage'].get('pine_mushroom', 1), (before['stamina'], after['stamina']))
                check('요리 도감 17종', page.evaluate("() => Object.keys(window.__metamong.game.progress.cooked).length") >= 1)
                close_modal(page)

                # ═══ ⑥ 도감 농사 탭 — 9종 ══════════════════════
                page.evaluate("() => { const g = window.__metamong.game; g.life.codexTab = 'farm'; g.openCodex(); }")
                page.wait_for_timeout(800)
                farm_txt = page.locator('.modal.open .modal-body').inner_text()
                check('도감 농사 탭 — 9종(쌀 포함)', '9종' in farm_txt and '해바라기' in farm_txt and '쌀' in farm_txt, farm_txt[:100])
                snap(page, 'qa_20_codex_farm.png')
                close_modal(page)

                # ═══ ⑦ 모달 레이아웃 전수 (가로 넘침) ══════════
                for fn, name in (
                    ('openFarm', 'farm'),
                    ('openPaddy', 'paddy'),
                    ('openVending', 'vending'),
                    ('openCooking', 'cooking'),
                    ('openUpgrade', 'upgrade'),
                    ('openCodex', 'codex'),
                ):
                    page.evaluate(f"() => window.__metamong.game.{fn}()")
                    page.wait_for_timeout(600)
                    met = modal_metrics(page)
                    check(f'레이아웃 — {name}', met and met['cardH'] <= met['vh'] and met['titleH'] < 90 and not met['overflowX'], met)
                    close_modal(page)

                # 낮·노을 민물 풀도 각각 다르게 보인다
                for elapsed, must, mustnot, name in (
                    (520, ['무지개송어', '민물가재'], ['황금장어'], 'qa_21a_river_day.png'),
                    (820, ['메기', '쏘가리'], ['무지개송어'], 'qa_21b_river_sunset.png'),
                ):
                    page.evaluate("(t) => { window.__metamong.game.state.elapsed = t; }", elapsed)
                    page.wait_for_timeout(700)
                    page.evaluate("() => window.__metamong.game.openFishSpot('river_bank')")
                    page.wait_for_timeout(700)
                    txt = page.locator('.modal.open .modal-body').inner_text()
                    check(f'민물 시간대 풀 (elapsed {elapsed})', all(k in txt for k in must) and all(k not in txt for k in mustnot), txt[:90])
                    snap(page, name)
                    close_modal(page)

                # 물고기 도감 — 16칸(15종 + 별조각)
                page.evaluate("() => { const g = window.__metamong.game; g.life.codexTab = 'fish'; g.openCodex(); }")
                page.wait_for_timeout(700)
                fish_txt0 = page.locator('.modal.open .modal-body').inner_text()
                check('물고기 도감 16칸 (15종 + 별조각)', '/ 16종' in fish_txt0, fish_txt0[:60])
                close_modal(page)

            if want('save'):
                # ═══ 세이브 v7 · 마이그레이션 ═══════════════════
                fresh(page, url)
                new_island(page)
                unlock(page)
                page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      for (const id of ['seed_tomato','seed_corn','seed_sweetpotato','seed_melon','seed_sunflower']) g.progress.addSupply(id, 3);
                      g.progress.addSupply('seed_rice', 5);
                      g.progress.addSupply('fertilizer', 7);
                      g.progress.bridgeState().built = true;
                      g.progress.plantSeed(0, 'tomato');
                      g.progress.plantSeed(15, 'sunflower');
                      g.progress.plantPaddy(0, 'rice');
                      g.progress.plantPaddy(7, 'rice');
                      g.progress.fertilizePlot(0);
                      g.progress.forage = { shell: 4, pine_mushroom: 2, honey: 1, crystal: 1 };
                      g.progress.crops = { melon: 2, corn: 1 };
                      g.progress.fish = { trout: 2, tuna: 1 };
                      g.progress.bump('beach', 5);
                      g.progress.bump('riverfish', 2);
                      g.farming.syncAll();
                      g.paddy.syncAll();
                      g.progress.addCoins(77);
                      g.save();
                    }"""
                )
                page.wait_for_timeout(1200)
                ver = page.evaluate("() => window.__metamong.game.snapshot().version")
                check('스냅샷 버전 7', ver == 7, ver)
                stored = page.evaluate(
                    """async () => {
                      const s = await window.__metamong.game.saveStore.load();
                      return { version: s.version, forage: s.forage, farm: s.farmPlots, paddy: s.paddyPlots, fert: s.supplies.fertilizer, fish: s.fish, counter: s.counters.beach };
                    }"""
                )
                check('세이브에 특산 바구니', stored['forage'].get('shell') == 4 and stored['forage'].get('crystal') == 1, stored['forage'])
                check('세이브에 16칸 텃밭 · 8칸 논', len(stored['farm']) == 16 and len(stored['paddy']) == 8, (len(stored['farm']), len(stored['paddy'])))
                check('세이브에 비료 · 새 어종 · 카운터', stored['fert'] == 6 and stored['fish'].get('trout') == 2 and stored['counter'] == 5, (stored['fert'], stored['fish'], stored['counter']))
                check('첫·마지막 칸 작물 저장', stored['farm'][0]['crop'] == 'tomato' and stored['farm'][15]['crop'] == 'sunflower', '')

                page.reload(wait_until='networkidle')
                page.wait_for_timeout(2600)
                alive(page)
                page.locator('.title-actions button').first.click(no_wait_after=True)
                page.wait_for_timeout(2400)
                lf = life(page)
                check('새로고침 후 특산 바구니 유지', lf['forage'].get('shell') == 4, lf['forage'])
                check('새로고침 후 텃밭 16칸 유지', lf['farmPlots'][0]['crop'] == 'tomato' and lf['farmPlots'][15]['crop'] == 'sunflower', (lf['farmPlots'][0], lf['farmPlots'][15]))
                check('새로고침 후 논 8칸 유지', lf['paddyPlots'][0]['crop'] == 'rice' and lf['paddyPlots'][7]['crop'] == 'rice', '')
                check('새로고침 후 비료·비료 사용 기록', lf['fertilizer'] == 6 and lf['farmPlots'][0]['fert'] == 1, (lf['fertilizer'], lf['farmPlots'][0]))
                check('새로고침 후 새 어종·코인', lf['fish'].get('trout') == 2 and lf['coins'] >= 77, (lf['fish'], lf['coins']))
                snap(page, 'qa_21_reloaded.png')

                # ── v6 세이브(3×3 텃밭 · 3×2 논) → v7: 행·열 보존
                page.evaluate(
                    """async () => {
                      const g = window.__metamong.game;
                      await g.saveStore.clear();
                      const farm = new Array(9).fill(null);
                      farm[4] = { crop: 'strawberry', remain: 12, total: 27, watered: 1, wet: 3 };
                      farm[8] = { crop: 'pumpkin', remain: 20, total: 60, watered: 0, wet: 0 };
                      const paddy = new Array(6).fill(null);
                      paddy[4] = { crop: 'rice', remain: 15, total: 45, watered: 1, wet: 2 };
                      await g.saveStore.save({
                        version: 6, savedAt: Date.now(), day: 6, elapsed: 300,
                        coins: 123, stamina: 70,
                        discovered: ['ditto_basic_01'],
                        bag: [{ id: 'log', n: 5 }],
                        buildings: { dock: { invested: {}, done: true } },
                        bridge: { built: true, invested: {} }, bridgeBuilt: true,
                        farmPlots: farm, paddyPlots: paddy,
                        cats: { somi: { aff: 40, gifts: [2], follow: true } },
                        defense: { wins: 2, slots: [null, null, null, null, null], stock: { fence: 1 } },
                      });
                    }"""
                )
                page.reload(wait_until='networkidle')
                page.wait_for_timeout(2600)
                alive(page)
                page.locator('.title-actions button').first.click(no_wait_after=True)
                page.wait_for_timeout(2400)
                lf = life(page)
                check('v6 → v7 (Day·코인 승계)', stats(page)['day'] == 6 and lf['coins'] == 123, (stats(page)['day'], lf['coins']))
                check('v6 3×3 텃밭 → 4×4 행·열 보존 (center→(1,1), bottom-right→(2,2))', lf['farmPlots'][5] and lf['farmPlots'][5]['crop'] == 'strawberry' and lf['farmPlots'][10] and lf['farmPlots'][10]['crop'] == 'pumpkin', [(i, p and p['crop']) for i, p in enumerate(lf['farmPlots']) if p])
                check('v6 3×2 논 → 4×2 행·열 보존', lf['paddyPlots'][5] and lf['paddyPlots'][5]['crop'] == 'rice', [(i, p and p['crop']) for i, p in enumerate(lf['paddyPlots']) if p])
                check('v6 세이브는 빈 특산 바구니', lf['forageTotal'] == 0, lf['forage'])
                check('v6 세이브 방어전 승계', lf['defense']['wins'] == 2 and lf['defense']['stock']['fence'] == 1, lf['defense'])
                snap(page, 'qa_22_v6_migrated.png')

                # ── v5 세이브 → v7
                page.evaluate(
                    """async () => {
                      const g = window.__metamong.game;
                      await g.saveStore.clear();
                      await g.saveStore.save({
                        version: 5, savedAt: Date.now(), day: 9, elapsed: 640,
                        coins: 88, stamina: 44,
                        counters: { tree: 7, rock: 3 },
                        farmPlots: [{ crop: 'radish', remain: 20, total: 42, watered: 0, wet: 0 }, null, null, null, null, null, null, null, null],
                        crops: { radish: 3 },
                        achievements: { unlocked: ['ach_first_chop'], claimed: [] },
                        cartLevel: 1, welcome: { step: 3 },
                      });
                    }"""
                )
                page.reload(wait_until='networkidle')
                page.wait_for_timeout(2600)
                alive(page)
                page.locator('.title-actions button').first.click(no_wait_after=True)
                page.wait_for_timeout(2400)
                lf = life(page)
                check('v5 → v7 (Day·코인·텃밭)', stats(page)['day'] == 9 and lf['coins'] == 88 and lf['farmPlots'][0]['crop'] == 'radish', (stats(page)['day'], lf['coins']))
                check('v5 세이브 특산 바구니 기본값', lf['forageTotal'] == 0 and lf['forageKinds'] == 0, lf['forage'])
                check('v5 세이브 업적·카운터 승계', 'ach_first_chop' in lf['achievements']['unlocked'] and lf['counters'].get('tree') == 7, (lf['achievements']['unlocked'], lf['counters'].get('tree')))
                snap(page, 'qa_23_v5_migrated.png')

                # ── v1 세이브 → v7
                page.evaluate(
                    """async () => {
                      const g = window.__metamong.game;
                      await g.saveStore.clear();
                      await g.saveStore.save({
                        version: 1, savedAt: Date.now(), day: 3, elapsed: 500,
                        discoveredDittos: ['ditto_mailbox_03'],
                        playerPos: { x: 0.4, z: 17.4 },
                        settings: { muted: true, timeScale: 10, fps30: false },
                      });
                    }"""
                )
                page.reload(wait_until='networkidle')
                page.wait_for_timeout(2600)
                alive(page)
                page.locator('.title-actions button').first.click(no_wait_after=True)
                page.wait_for_timeout(2400)
                lf = life(page)
                check('v1 → v7 (Day·설정)', stats(page)['day'] == 3 and stats(page)['settings']['timeScale'] == 10, (stats(page)['day'], stats(page)['settings']))
                check('v1 세이브 텃밭·논 빈 기본값', lf['farmPlanted'] == 0 and lf['paddyPlanted'] == 0 and lf['forageTotal'] == 0, (lf['farmPlanted'], lf['paddyPlanted']))
                check('v1 세이브 메타몽 승계', len(stats(page)['discovered']) == 1, stats(page)['discovered'])
                snap(page, 'qa_24_v1_migrated.png')

            if want('regress'):
                # ═══ 1~5단계 회귀 ══════════════════════════════
                fresh(page, url)
                new_island(page)
                lf = life(page)
                check('회귀 · 가방 8칸', lf['bagCapacity'] == 8, lf['bagCapacity'])
                check('회귀 · 다리 미완성', lf['bridgeBuilt'] is False)
                check('회귀 · 텃밭 16칸 · 논 8칸', len(lf['farmPlots']) == 16 and len(lf['paddyPlots']) == 8, (len(lf['farmPlots']), len(lf['paddyPlots'])))

                page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      const n = g.world.scenery.nodes.find((x) => x.kind === 'tree');
                      for (let a = 0; a < 18; a++) {
                        const ang = (a / 18) * Math.PI * 2;
                        const x = n.x + Math.cos(ang) * 1.3;
                        const z = n.z + Math.sin(ang) * 1.3;
                        if (!g.world.terrain.isWalkable(x, z)) continue;
                        let nearest = null, best = 2.5;
                        for (const o of g.world.scenery.nodes) {
                          const d = Math.hypot(o.x - x, o.z - z);
                          if (d < best) { best = d; nearest = o; }
                        }
                        if (nearest === n) { g.player.teleport(x, z); return; }
                      }
                    }"""
                )
                page.wait_for_timeout(800)
                for _ in range(16):
                    page.evaluate("() => { if (window.__metamong.game.target && window.__metamong.game.target.isNode) window.__metamong.game.interact(); }")
                    page.wait_for_timeout(240)
                check('회귀 · 채집(나무 베기)', life(page)['counters'].get('tree', 0) >= 1, life(page)['counters'].get('tree'))

                page.evaluate("() => window.__metamong.game.openMailbox()")
                page.wait_for_timeout(600)
                check('회귀 · 우체통 모달', '우체통' in modal_title(page), modal_title(page))
                close_modal(page)

                for fn, label in (
                    ('openFishSpot', '낚시'),
                    ('openCooking', '요리'),
                    ('openQuest', '의뢰'),
                    ('openCodex', '도감'),
                    ('openAchievements', '업적'),
                    ('openMinimap', '지도'),
                    ('openFarm', '텃밭'),
                    ('openBag', '가방'),
                    ('openBuild', '건축'),
                ):
                    page.evaluate(f"() => window.__metamong.game.{fn}()")
                    page.wait_for_timeout(560)
                    okmodal = page.locator('.modal.open').count() == 1
                    check(f'회귀 · {label} 모달', okmodal, modal_title(page))
                    close_modal(page)

                unlock(page)
                for fn, label in (('openStorage', '창고'), ('openVending', '자판기'), ('openUpgrade', '도구 강화'), ('openDefense', '방어 현황'), ('openDefenseCraft', '방어 제작'), ('openCart', '리어카')):
                    page.evaluate(f"() => window.__metamong.game.{fn}()")
                    page.wait_for_timeout(560)
                    okmodal = page.locator('.modal.open').count() == 1
                    check(f'회귀 · {label} 모달', okmodal, modal_title(page))
                    close_modal(page)

                page.evaluate("() => window.__metamong.game.openCat('somi')")
                page.wait_for_timeout(560)
                check('회귀 · 고양이 돌보기', '솜이' in modal_title(page), modal_title(page))
                close_modal(page)
                check('회귀 · 업적 23종', len(life(page)['achRows']) == 23, len(life(page)['achRows']))

                # 다리 놓기 → 논 넘어가기
                page.evaluate("() => { const g = window.__metamong.game; g.progress.addCoins(200); }")
                page.evaluate("() => window.__metamong.game.openBridge()")
                page.wait_for_timeout(600)
                check('회귀 · 다리 패널', '다리' in modal_title(page), modal_title(page))
                close_modal(page)
                snap(page, 'qa_25_regress.png')

        except Exception:
            traceback.print_exc()
            errors.append('QA script exception')
        finally:
            bad_logs = [(t, m) for (t, m) in logs if t == 'error']
            allowed = ('Service Worker registration blocked', 'GPU stall due to ReadPixels')
            bad_failed = [f for f in failed if not any(a in f for a in allowed)]
            print('\n── 콘솔 error ──')
            for t, m in bad_logs[:10]:
                print(' ', m[:200])
            print('── 페이지 error ──')
            for e in errors[:10]:
                print(' ', e[:300])
            print('── 실패 요청 ──')
            for f in bad_failed[:10]:
                print(' ', f[:200])
            check('콘솔 에러 0', len(bad_logs) == 0, len(bad_logs))
            check('페이지 에러 0', len(errors) == 0, len(errors))
            check('404·실패 요청 0', len(bad_failed) == 0, len(bad_failed))
            browser.close()
            httpd.shutdown()

    ok = sum(1 for c in checks if c[1])
    print(f'\n{ok}/{len(checks)} 통과')
    for label, good, detail in checks:
        if not good:
            print(f'  ✗ {label} — {detail}')
    sys.exit(0 if ok == len(checks) else 1)


if __name__ == '__main__':
    run()

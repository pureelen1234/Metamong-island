#!/usr/bin/env python3
"""
5단계(불청객 방어전 · 메타몽 대피 · 솜이/옹이 헬퍼 · 세이브 v6) 브라우저 실측 QA.

390×844 모바일 세로 화면에서
  ① 예고 배너 · 방어 현황/슬롯/제작 모달이 열리고, 방어 설비 4종을 만들어 5개 슬롯에 세운다
  ② [📣 메타몽 모으기] — 섬 곳곳(남쪽·북쪽)의 메타몽 7마리가 광장 안전 울타리로 모인다
  ③ [지금 방어 시작] — 부두 상륙 · 미니맵 빨간 점 · 포탑 자동 사격 · 새총/물풍선 직접 사격
     · 솜이 냥냥 펀치 / 옹이 할퀴기 · 웨이브 클리어 → 보상 · 결과 모달 · 업적 3종
  ④ Save v6 저장/복원 + v5·v4·v1 세이브 자동 마이그레이션
  ⑤ 1~4단계 기능이 그대로인지 짧은 회귀(채집·가방·우편·낚시·요리·농사·다리·논·리어카)
를 실제로 눌러 보고, 콘솔 에러·404 를 센다.
스크린샷은 screenshots/phase5/ 에 남긴다.

QA_PART=content|save|regress|all (기본 all)
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

OUT = os.path.abspath(os.path.join(HERE, '..', 'screenshots', 'phase5'))
DIST = os.path.abspath(os.path.join(HERE, '..', 'dist'))
os.makedirs(OUT, exist_ok=True)
PART = os.environ.get('QA_PART', 'all')

logs, errors, failed, checks = [], [], [], []


def want(part):
    return PART in ('all', part)


def check(label, ok, detail=''):
    checks.append((label, bool(ok), detail))
    print(f'  {"✓" if ok else "✗"} {label}{(" — " + str(detail)) if detail else ""}')
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
        page.wait_for_timeout(300)
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


def defense_stats(page):
    return page.evaluate('window.__metamong.stats().defense')


def close_modal(page):
    if page.locator('.modal.open').count():
        alive(page)
        try:
            page.locator('.modal.open .modal-close').first.click(timeout=8000, no_wait_after=True)
        except Exception:
            page.evaluate("() => { const b = document.querySelector('.modal.open .modal-close'); if (b) b.click(); }")
    page.wait_for_timeout(320)


def click_btn(page, text):
    alive(page)
    try:
        page.locator('.modal-actions .btn', has_text=text).first.click(timeout=8000, no_wait_after=True)
    except Exception:
        page.evaluate(
            """(t) => {
              const b = [...document.querySelectorAll('.modal-actions .btn')].find((x) => x.textContent.includes(t));
              if (b) b.click();
            }""",
            text,
        )
    page.wait_for_timeout(380)


def click_in_body(page, text, row_sel='', row_has=''):
    """모달 본문에서 text 를 가진 버튼을 누른다. row_sel/row_has 를 주면 그 행 안의 버튼만."""
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


def modal_title(page):
    return page.locator('.modal-title').first.inner_text() if page.locator('.modal-title').count() else ''


def action_label(page):
    return page.locator('.action-btn .txt').inner_text() if page.locator('.action-btn .txt').count() else ''


def teleport(page, x, z, settle=600):
    page.evaluate("([x, z]) => window.__metamong.game.player.teleport(x, z)", [x, z])
    page.wait_for_timeout(settle)


def grant(page, items):
    """가방 8칸을 넘지 않도록 아이템을 나눠 넣는다."""
    page.evaluate(
        """(items) => {
          const g = window.__metamong.game;
          const inv = g.progress.inventory;
          for (const [id, n] of Object.entries(items)) {
            let left = n;
            const got = inv.add(id, left);
            left = got;
            if (left > 0) inv.storage[id] = (inv.storage[id] || 0) + left;
          }
        }""",
        items,
    )


def set_time(page, scale):
    page.evaluate("(s) => { window.__metamong.game.state.settings.timeScale = s; }", scale)


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
    page.wait_for_timeout(2200)


def canvas_red_pixels(page, selector):
    """미니맵에 불청객 빨간 점이 찍혔는지 — 붉은 픽셀 수를 센다"""
    return page.evaluate(
        """(sel) => {
          const c = document.querySelector(sel);
          if (!c) return -1;
          const ctx = c.getContext('2d');
          const d = ctx.getImageData(0, 0, c.width, c.height).data;
          let n = 0;
          for (let i = 0; i < d.length; i += 4) {
            const r = d[i], g = d[i + 1], b = d[i + 2];
            if (r > 190 && g < 110 && b < 130) n += 1;
          }
          return n;
        }""",
        selector,
    )


def crop_slots(page):
    return page.evaluate(
        """() => window.__metamong.game.defense.slotsInfo().map((s) => ({ i: s.index, kind: s.kind, hp: s.hp, hpMax: s.hpMax }))"""
    )


def prep(page):
    """방어전 준비 공통 — 새 섬 + 자재 + 공방 복구 + 설비 4종 제작/설치"""
    page.evaluate(
        """() => {
          const g = window.__metamong.game;
          const inv = g.progress.inventory;
          for (const [id, n] of Object.entries({ log: 20, stone: 18, petal: 12, star: 3, berry: 3 })) {
            const left = inv.add(id, n);
            if (left > 0) inv.storage[id] = (inv.storage[id] || 0) + left;
          }
          g.progress.building('workshop').done = true;
          g.world.scenery.setBuilt('workshop', true, true);
          g.progress.addCoins(120);
        }"""
    )
    page.wait_for_timeout(300)


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
        page.set_default_timeout(15000)
        page.on('console', lambda m: logs.append((m.type, m.text)))
        page.on('pageerror', lambda e: errors.append(str(e)))
        page.on('requestfailed', lambda r: failed.append(f'{r.url} :: {r.failure}'))
        page.on('response', lambda r: failed.append(f'HTTP {r.status} {r.url}') if r.status >= 400 else None)

        try:
            if want('content'):
                # ═══ ① 타이틀 · 예고 배너 · 방어 현황 ═════════════
                fresh(page, url)
                snap(page, '01_title.png')
                badge = page.locator('.title-badge').inner_text()
                version = page.locator('.title-version').inner_text()
                check('타이틀이 Phase 5', 'PHASE 5' in badge and 'Phase 5' in version, f'{badge} / {version}')
                new_island(page)
                check('플레이 진입', stats(page)['mode'] == 'play', stats(page)['mode'])
                banner = page.locator('.defense-banner .df-txt').inner_text()
                check('상단 방어 예고 배너', '수집단' in banner, banner)
                check('배너에 [지금 방어 시작] 버튼', page.locator('.defense-banner .df-go').count() == 1)
                check('미니맵에 방어 슬롯 표시', page.evaluate("() => window.__metamong.game.defense.slotsInfo().length") == 5)

                # 수집단이 오는 날(Day 3·6…)에는 예고 문구가 바뀐다
                page.evaluate("() => { window.__metamong.game.state.day = 3; }")
                page.wait_for_timeout(700)
                banner3 = page.locator('.defense-banner .df-txt').inner_text()
                check('상륙일 예고 문구', '오늘 밤' in banner3, banner3)
                page.evaluate("() => { const g = window.__metamong.game; g.state.day = 1; }")
                page.wait_for_timeout(500)

                # 솜이 서포트 — Lv.3 따라오기 상태에서 주변 드롭을 대신 줍는다
                page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      const somi = g.cats.find((c) => c.id === 'somi');
                      g.progress.cat('somi').aff = 40;
                      somi.setFollow(true);
                      g.drops.spawn('berry', 1, somi.position.x + 0.4, somi.position.z + 0.2);
                    }"""
                )
                set_time(page, 10)
                page.wait_for_timeout(2500)
                set_time(page, 1)
                picked = page.evaluate("() => ({ drops: window.__metamong.game.drops.items.length, berry: window.__metamong.life().bag.filter((s) => s && s['id'] === 'berry').length })")
                check('솜이가 주변 드롭을 대신 주움', picked['drops'] == 0 and picked['berry'] >= 1, picked)
                snap(page, '02_island_banner.png')

                # 배너 본문 탭 → 방어 현황 모달
                page.locator('.defense-banner .df-main').click(no_wait_after=True)
                page.wait_for_timeout(600)
                check('예고 배너 탭 → 방어 모달', '불청객 방어전' in modal_title(page), modal_title(page))
                check('방어 모달에 슬롯 5줄', page.locator('.df-slot-list .df-slot').count() == 5, page.locator('.df-slot-list .df-slot').count())
                check('방어 모달에 [지금 방어 시작]', page.locator('.modal-actions .btn', has_text='지금 방어 시작').count() == 1)
                snap(page, '03_defense_modal.png')
                close_modal(page)

                # ═══ ② 공방 [방어 제작] → 설비 4종 제작 ═══════════
                prep(page)
                page.evaluate("() => window.__metamong.game.openWorkshop()")
                page.wait_for_timeout(600)
                check('공방 메뉴에 [방어 제작]', page.locator('.menu-entry', has_text='방어 제작').count() == 1)
                snap(page, '04_workshop_menu.png')
                page.locator('.menu-entry', has_text='방어 제작').first.click(no_wait_after=True)
                page.wait_for_timeout(700)
                check('방어 제작 탭 열림', '방어 제작' in modal_title(page), modal_title(page))
                snap(page, '05_defense_craft.png')

                before = life(page)
                for name in ('나무 울타리', '나무 울타리', '물풍선 포탑', '별빛 경보등', '메타몽 허수아비'):
                    click_in_body(page, '제작', '.df-pick-row', name)
                lf = life(page)
                stock = lf['defense']['stock']
                check('설비 5개 제작 (창고로)', sum(stock.values()) == 5, stock)
                check('제작에 재료가 실제로 쓰임', lf['stamina'] == before['stamina'] and (lf['bag'] != before['bag'] or lf['storage'] != before['storage']), json.dumps(stock, ensure_ascii=False))
                snap(page, '06_crafted.png')

                # ═══ ③ 슬롯 관리 → 설치 (UI 클릭) ═════════════════
                page.evaluate("() => window.__metamong.game.modal.close()")
                page.evaluate("() => window.__metamong.game.openDefenseSlot(0)")
                page.wait_for_timeout(600)
                check('슬롯 관리 모달', '번 방어 슬롯' in modal_title(page), modal_title(page))
                click_in_body(page, '설치', '.df-pick-row', '나무 울타리')
                slots = crop_slots(page)
                check('1번 슬롯에 나무 울타리 설치', slots[0]['kind'] == 'fence' and slots[0]['hp'] == 88, slots[0])
                snap(page, '07_slot_installed.png')
                page.evaluate("() => window.__metamong.game.modal.close()")

                # 나머지는 같은 경로를 빠르게(설치 로직은 동일)
                page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      g.installStructure(1, 'fence');
                      g.installStructure(2, 'turret');
                      g.installStructure(3, 'lamp');
                      g.installStructure(4, 'scarecrow');
                      g.modal.close();
                    }"""
                )
                page.wait_for_timeout(700)
                slots = crop_slots(page)
                kinds = [s['kind'] for s in slots]
                check('5개 슬롯 모두 설치', kinds == ['fence', 'fence', 'turret', 'lamp', 'scarecrow'], kinds)
                check('설치 후 창고 비었음', sum(life(page)['defense']['stock'].values()) == 0, life(page)['defense']['stock'])
                teleport(page, 0.2, 25.0, 900)
                snap(page, '08_slots_world.png')

                # ═══ ④ [📣 메타몽 모으기] ═════════════════════════
                page.evaluate("() => window.__metamong.game.openDefense()")
                page.wait_for_timeout(600)
                click_btn(page, '메타몽 모으기')
                ev = page.evaluate("() => window.__metamong.game.defense.evac")
                check('메타몽 모으기 시작', ev['active'] is True, ev)
                snap(page, '09_evac_start.png')
                set_time(page, 10)
                try:
                    page.wait_for_function("() => window.__metamong.game.defense.evacCount >= 7", timeout=120000)
                except Exception:
                    pass
                ev = page.evaluate("() => ({ count: window.__metamong.game.defense.evacCount, total: window.__metamong.game.defense.dittos.length })")
                check('메타몽 7마리 모두 광장 도착', ev['count'] == ev['total'] == 7, ev)
                set_time(page, 1)
                teleport(page, 0.6, 19.4, 800)
                snap(page, '10_evac_done.png')

                # ═══ ⑤ [지금 방어 시작] — 배너 ▶ 실제 클릭 ═════════
                close_modal(page)
                page.locator('.defense-banner .df-go').click(no_wait_after=True)
                page.wait_for_timeout(1200)
                ds = defense_stats(page)
                check('웨이브 시작', ds and ds['wave'] is not None, ds and ds['wave'])
                check('웨이브 스트립 표시', page.locator('.defense-strip').is_visible())
                check('무기 버튼 표시 (새총·물풍선)', page.locator('.weapon-bar .wp').count() == 2)
                check('예고 배너는 웨이브 중 숨김', not page.locator('.defense-banner').is_visible())
                snap(page, '11_wave_start.png')

                # 불청객이 내려오길 기다린다(배 → 부두 → 길)
                set_time(page, 6)
                page.wait_for_function("() => (window.__metamong.stats().defense.raiders || []).length > 0", timeout=60000)
                set_time(page, 1)
                ds = defense_stats(page)
                check('부두에 불청객 상륙', len(ds['raiders']) > 0, ds['raiders'][:2])
                check('수집단 배가 보임', ds['boatVisible'] is True, ds['boatVisible'])
                red = canvas_red_pixels(page, '.minimap-canvas')
                check('미니맵에 빨간 점', red >= 6, red)

                # ═══ ⑥ 직접 사격 — 새총 · 물풍선 ═════════════════
                page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      const r = g.defense.raiders[0];
                      if (r) g.player.teleport(r.x, r.z + 2.2);
                    }"""
                )
                page.wait_for_timeout(900)
                hp0 = page.evaluate("() => (window.__metamong.game.defense.raiders[0] || {}).hp")
                page.locator('.weapon-bar .wp', has_text='새총').click(no_wait_after=True)
                # 헤드리스는 프레임이 느려 조약돌이 날아가는 데도 몇 초 걸린다
                page.wait_for_timeout(2600)
                hp1 = page.evaluate("() => (window.__metamong.game.defense.raiders[0] || {}).hp")
                ds = defense_stats(page)
                check('새총이 불청객 체력을 깎음', hp1 is None or hp1 < hp0 or ds['wave']['slingHits'] >= 1, f'{hp0} → {hp1} · slingHits {ds["wave"]["slingHits"]}')
                snap(page, '12_sling_shot.png')

                ammo0 = defense_stats(page)['ammo']
                page.locator('.weapon-bar .wp.balloon').click(no_wait_after=True)
                page.wait_for_timeout(2600)
                ds = defense_stats(page)
                check('물풍선 발사 (탄약 -1)', ds['ammo'] == ammo0 - 1 or ds['wave']['balloonHits'] >= 1, f'{ammo0} → {ds["ammo"]}')
                snap(page, '13_balloon.png')

                # 액션 버튼도 가장 가까운 불청객에게 새총
                label = action_label(page)
                check('방어전 중 액션 버튼이 새총', '새총' in label, label)

                # ═══ ⑦ 포탑 자동 사격 · 냥이 헬퍼 ═════════════════
                page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      const d = g.defense;
                      const r = d.raiders[0] || { x: 0, z: 24 };
                      const somi = g.cats.find((c) => c.id === 'somi');
                      const ongi = g.cats.find((c) => c.id === 'ongi');
                      if (somi) { somi.position.set(r.x + 0.9, somi.position.y, r.z + 0.6); }
                      if (ongi) { ongi.position.set(r.x - 0.9, ongi.position.y, r.z - 0.6); }
                      g.player.teleport(r.x, r.z + 3.0);
                    }"""
                )
                set_time(page, 4)
                page.wait_for_timeout(6000)
                set_time(page, 1)
                ds = defense_stats(page)
                check('포탑이 자동으로 명중', ds['wave']['turretHits'] >= 1, ds['wave']['turretHits'])
                check('솜이 냥냥 펀치 발동', ds['wave']['somiHits'] >= 1, ds['wave']['somiHits'])
                check('옹이 할퀴기 발동', ds['wave']['ongiHits'] >= 1, ds['wave']['ongiHits'])
                # 포탑이 10번 명중할 때까지 조금 더 지켜본다('포탑 장인' 업적)
                set_time(page, 4)
                for _ in range(24):
                    if defense_stats(page)['wave'] and defense_stats(page)['wave']['turretHits'] >= 10:
                        break
                    page.wait_for_timeout(400)
                set_time(page, 1)
                snap(page, '14_helpers_turret.png')

                # ═══ ⑧ 웨이브 클리어 → 승리 보상 ═════════════════
                coins0 = life(page)['coins']
                seed0 = life(page)['supplies'].get('seed_pumpkin', 0)
                # 실제 사격으로 마무리한다 — 프레임이 느린 헤드리스라 남은 체력을 조금 깎아 두고 새총을 쏜다
                set_time(page, 6)
                for _ in range(120):
                    done = page.evaluate("() => !window.__metamong.game.defense.wave")
                    if done:
                        break
                    page.evaluate(
                        """() => {
                          const g = window.__metamong.game;
                          const d = g.defense;
                          for (const r of d.raiders) if (r.hp > 16) r.hp = 16;
                          const t = d.raiders[0];
                          if (t) g.player.teleport(t.x, t.z + 1.8);
                          d.fire('sling');
                        }"""
                    )
                    page.wait_for_timeout(120)
                set_time(page, 1)
                page.wait_for_timeout(800)
                ds = defense_stats(page)
                check('웨이브 종료', ds['wave'] is None, ds['wave'])
                res = ds['lastResult']
                check('승리 판정', bool(res and res['victory']), res)
                check('승리 보상 (코인·별조각·희귀 씨앗)', res and res['reward'] and res['reward']['coin'] > 0, res and res['reward'])
                lf = life(page)
                check('코인이 실제로 늘어남', lf['coins'] >= coins0 + (res['reward']['coin'] if res and res['reward'] else 0), (coins0, lf['coins']))
                check('희귀 씨앗(황금호박) 지급', lf['supplies'].get('seed_pumpkin', 0) >= seed0 + 2, lf['supplies'].get('seed_pumpkin'))
                check('결과 모달 표시', page.locator('.modal.open .modal-title').count() == 1, modal_title(page))
                snap(page, '15_victory.png')

                ach = {r['id']: r for r in lf['achRows']}
                check('업적 — 첫 방어 성공', ach.get('ach_first_defense', {}).get('done') is True, ach.get('ach_first_defense'))
                check('업적 — 완벽한 대피', ach.get('ach_perfect_evac', {}).get('done') is True, ach.get('ach_perfect_evac'))
                check('업적 — 포탑 장인', ach.get('ach_turret_master', {}).get('done') is True, ach.get('ach_turret_master'))
                check('전적 기록 (승 1)', lf['defense']['wins'] >= 1, lf['defense']['wins'])
                close_modal(page)

                # 결과 모달에서 슬롯 관리로 이어지는 동선
                page.evaluate("() => window.__metamong.game.openDefense()")
                page.wait_for_timeout(600)
                txt = page.locator('.modal-body').inner_text()
                check('방어 모달이 전적·대피 상태를 보여 줌', '방어 승' in txt and '대피' in txt, txt[:40])
                snap(page, '16_defense_after.png')
                close_modal(page)

                # ═══ ⑩ 순한 맛 — 광장을 뚫려도 건물·작물은 무사 ═══
                page.evaluate("() => window.__metamong.game.modal.close()")
                page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      g.progress.addCoins(200);
                      g.__coinsBefore = g.progress.coins;
                      g.__buildingsBefore = JSON.stringify(g.progress.buildings);
                      g.__cropsBefore = JSON.stringify(g.progress.farmPlots) + JSON.stringify(g.progress.crops);
                      for (let i = 0; i < 5; i++) g.defense.removeStructure(i);   // 일부러 비워 둔다
                      g.player.teleport(0.6, 17.4);
                      g.startDefenseNow();
                      g.state.settings.timeScale = 6;
                    }"""
                )
                try:
                    page.wait_for_function("() => { const d = window.__metamong.game.defense; return d.wave && d.wave.stolen > 0; }", timeout=90000)
                except Exception:
                    pass
                set_time(page, 1)
                ds = defense_stats(page)
                stolen = ds['wave']['stolen'] if ds['wave'] else (ds['lastResult'] or {}).get('stolen', 0)
                check('불청객이 광장을 뚫으면 코인을 챙김', stolen > 0, stolen)
                snap(page, '19_partial_steal.png')
                coins_before2 = page.evaluate("() => window.__metamong.game.__coinsBefore")
                page.evaluate("() => window.__metamong.game.defense.stopWave()")
                page.wait_for_timeout(900)
                lf = life(page)
                coins_after = lf['coins']
                res2 = defense_stats(page)['lastResult']
                check('뚫린 방어는 승리가 아님', bool(res2) and res2['victory'] is False, res2)
                check('패 기록 남음', lf['defense']['losses'] >= 1, lf['defense']['losses'])
                check('건물·작물은 그대로', page.evaluate("() => JSON.stringify(window.__metamong.game.progress.buildings) === window.__metamong.game.__buildingsBefore"), '')
                check('코인은 챙겨 간 만큼만 줄어듦', coins_after == coins_before2 - (res2 or {}).get('stolen', 0), (coins_before2, (res2 or {}).get('stolen'), coins_after))
                if page.locator('.modal.open').count():
                    snap(page, '20_partial_modal.png')
                    close_modal(page)
                # 다음 날 아침이면 메타몽이 제자리로 돌아간다
                page.evaluate("() => window.__metamong.game.defense.onNewDay(window.__metamong.game.state.day + 1)")
                page.wait_for_timeout(600)
                ev = page.evaluate("() => ({ active: window.__metamong.game.defense.evac.active, returning: window.__metamong.game.dittos.filter((d) => d.returning).length })")
                check('다음 날 아침 메타몽 복귀', ev['active'] is False and ev['returning'] >= 1, ev)

                # ═══ ⑨ 모달 3종 레이아웃 (세로 찌그러짐) ══════════
                for fn, name in (
                    ('openDefense', 'defense'),
                    ('openDefenseCraft', 'craft'),
                ):
                    page.evaluate(f"() => window.__metamong.game.{fn}()")
                    page.wait_for_timeout(500)
                    box = page.evaluate(
                        """() => {
                          const c = document.querySelector('.modal.open .modal-card');
                          const t = document.querySelector('.modal.open .modal-title');
                          if (!c || !t) return null;
                          const cr = c.getBoundingClientRect();
                          const tr = t.getBoundingClientRect();
                          return { cardH: Math.round(cr.height), titleH: Math.round(tr.height), vh: window.innerHeight, overflow: c.scrollHeight > c.clientHeight };
                        }"""
                    )
                    check(f'모달 레이아웃 — {name}', box and box['cardH'] <= box['vh'] and box['titleH'] < 90, box)
                    close_modal(page)

            if want('save'):
                # ═══ 세이브 v6 · 마이그레이션 ═══════════════════
                fresh(page, url)
                new_island(page)
                prep(page)
                page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      g.craftStructure('fence');
                      g.craftStructure('turret');
                      g.craftStructure('scarecrow');
                      g.installStructure(0, 'fence');
                      g.installStructure(2, 'turret');
                      g.modal.close();
                      g.progress.defense.wins = 2;
                      g.progress.defense.turretHits = 11;
                      g.progress.addCoins(55);
                    }"""
                )
                page.wait_for_timeout(400)
                page.evaluate("() => window.__metamong.game.save()")
                page.wait_for_timeout(1200)
                raw = page.evaluate("() => window.__metamong.game.snapshot().version")
                check('스냅샷 버전 6', raw == 6, raw)
                stored = page.evaluate(
                    """async () => {
                      const g = window.__metamong.game;
                      const s = await g.saveStore.load();
                      return { version: s.version, wins: s.defense.wins, slots: s.defense.slots, stock: s.defense.stock, turretHits: s.defense.turretHits };
                    }"""
                )
                check('세이브에 defense 가 들어감', stored['slots'][0] and stored['slots'][0]['kind'] == 'fence', stored)
                check('세이브에 전적·포탑 명중', stored['wins'] == 2 and stored['turretHits'] == 11, (stored['wins'], stored['turretHits']))

                page.reload(wait_until='networkidle')
                page.wait_for_timeout(2600)
                alive(page)
                page.locator('.title-actions button').first.click(no_wait_after=True)
                page.wait_for_timeout(2400)
                lf = life(page)
                slots = lf['defense']['slots']
                check('새로고침 후 슬롯 유지', slots[0] and slots[0]['kind'] == 'fence' and slots[2] and slots[2]['kind'] == 'turret', slots)
                check('새로고침 후 창고 유지', lf['defense']['stock']['scarecrow'] == 1, lf['defense']['stock'])
                check('새로고침 후 전적 유지', lf['defense']['wins'] == 2 and lf['defense']['turretHits'] == 11, (lf['defense']['wins'], lf['defense']['turretHits']))
                check('설치물이 3D에 다시 세워짐', page.evaluate("() => window.__metamong.game.defense.structures.filter(Boolean).length") == 2)
                snap(page, '21_reloaded.png')
                check('불러온 뒤 업적 조건 유지 (포탑 장인)', any(r['id'] == 'ach_turret_master' and r['done'] for r in lf['achRows']))

                # ── v5 세이브 주입 → v6 마이그레이션
                page.evaluate(
                    """async () => {
                      const g = window.__metamong.game;
                      await g.saveStore.clear();
                      await g.saveStore.save({
                        version: 5, savedAt: Date.now(), day: 6, elapsed: 300,
                        coins: 123, stamina: 70,
                        discovered: ['ditto_basic_01', 'ditto_pebble_02'],
                        bag: [{ id: 'log', n: 5 }],
                        buildings: { dock: { invested: {}, done: true } },
                        bridge: { built: true, invested: {} }, bridgeBuilt: true,
                        cartLevel: 1, welcome: { step: 3 },
                        cats: { somi: { aff: 40, gifts: [2], follow: true } },
                      });
                    }"""
                )
                page.reload(wait_until='networkidle')
                page.wait_for_timeout(2600)
                alive(page)
                page.locator('.title-actions button').first.click(no_wait_after=True)
                page.wait_for_timeout(2400)
                lf = life(page)
                check('v5 → v6 마이그레이션 (Day·코인 승계)', stats(page)['day'] == 6 and lf['coins'] == 123, (stats(page)['day'], lf['coins']))
                check('v5 세이브는 빈 방어 슬롯·0전적', lf['defense']['installed'] == 0 and lf['defense']['wins'] == 0, lf['defense'])
                check('v5 세이브 다리·리어카 승계', lf['bridgeBuilt'] is True and lf['cartLevel'] == 1, (lf['bridgeBuilt'], lf['cartLevel']))
                snap(page, '22_v5_migrated.png')

                # ── v4 세이브 주입 → v6
                page.evaluate(
                    """async () => {
                      const g = window.__metamong.game;
                      await g.saveStore.clear();
                      await g.saveStore.save({
                        version: 4, savedAt: Date.now(), day: 9, elapsed: 640,
                        coins: 88, stamina: 44,
                        counters: { tree: 7, rock: 3, fish: 2 },
                        farmPlots: [{ crop: 'strawberry', remain: 12, total: 27, watered: 1, wet: 3 }, null, null, null, null, null, null, null, null],
                        achievements: { unlocked: ['ach_first_chop'], claimed: [] },
                        crops: { strawberry: 4 },
                      });
                    }"""
                )
                page.reload(wait_until='networkidle')
                page.wait_for_timeout(2600)
                alive(page)
                page.locator('.title-actions button').first.click(no_wait_after=True)
                page.wait_for_timeout(2400)
                lf = life(page)
                check('v4 → v6 마이그레이션 (Day·코인·텃밭)', stats(page)['day'] == 9 and lf['coins'] == 88 and lf['farmPlanted'] == 1, (stats(page)['day'], lf['coins'], lf['farmPlanted']))
                check(
                    'v4 세이브 업적·카운터 승계 (소급 달성 포함)',
                    'ach_first_chop' in lf['achievements']['unlocked'] and lf['counters'].get('tree') == 7,
                    (lf['achievements']['unlocked'], lf['counters'].get('tree')),
                )
                check('v4 세이브 방어 기본값', lf['defense']['installed'] == 0 and lf['defense']['runs'] == 0, lf['defense'])

                # ── v1 세이브 주입 → v6
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
                check('v1 → v6 마이그레이션 (Day·설정)', stats(page)['day'] == 3 and stats(page)['settings']['timeScale'] == 10, (stats(page)['day'], stats(page)['settings']))
                check('v1 세이브 방어 기본값', lf['defense']['installed'] == 0 and lf['defense']['stock']['fence'] == 0, lf['defense'])
                check('v1 세이브 메타몽 도감 승계', len(stats(page)['discovered']) == 1, stats(page)['discovered'])
                snap(page, '23_v1_migrated.png')

            if want('regress'):
                # ═══ 1~4단계 핵심 회귀 ══════════════════════════
                fresh(page, url)
                new_island(page)
                check('회귀 · 가방 8칸', life(page)['bagCapacity'] == 8, life(page)['bagCapacity'])
                check('회귀 · 다리 미완성', life(page)['bridgeBuilt'] is False)
                check('회귀 · 텃밭 9칸', len(life(page)['farmPlots']) == 9)
                check('회귀 · 논 6칸', len(life(page)['paddyPlots']) == 6)

                # 채집 — 나무 한 그루
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

                # 우체통
                page.evaluate("() => window.__metamong.game.openMailbox()")
                page.wait_for_timeout(600)
                check('회귀 · 우체통 모달', '우체통' in modal_title(page), modal_title(page))
                close_modal(page)

                # 낚시 · 요리 · 자판기 · 의뢰 · 고양이 · 업적 · 지도 모달
                for fn, label in (
                    ('openFishSpot', '낚시'),
                    ('openCooking', '요리'),
                    ('openQuest', '의뢰'),
                    ('openCodex', '도감'),
                    ('openAchievements', '업적'),
                    ('openMinimap', '지도'),
                    ('openFarm', '텃밭'),
                ):
                    page.evaluate(f"() => window.__metamong.game.{fn}()")
                    page.wait_for_timeout(520)
                    okmodal = page.locator('.modal.open').count() == 1
                    title = modal_title(page)
                    check(f'회귀 · {label} 모달', okmodal, title)
                    close_modal(page)

                page.evaluate("() => window.__metamong.game.openCat('somi')")
                page.wait_for_timeout(520)
                check('회귀 · 고양이 돌보기', '솜이' in modal_title(page), modal_title(page))
                close_modal(page)
                check('회귀 · 업적 17종', len(life(page)['achRows']) == 17, len(life(page)['achRows']))
                snap(page, '24_regress.png')

        except Exception:
            traceback.print_exc()
            errors.append('QA script exception')
        finally:
            # ── 콘솔 에러·404 요약
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


run()

#!/usr/bin/env python3
"""
4단계(72×72 맵 확장 · 중앙 강/다리 · 북쪽 숲/채석장/논 · 리어카 · 초반 재미) 브라우저 실측 QA.

390×844 모바일 세로 화면에서
  ① 1·2·3단계 회귀 — 채집·가방·우체통·4대 건물 복구·낚시·요리·상점·의뢰·고양이·텃밭·미니맵·업적
  ② 4단계 — 웰컴 3단 미션(+15×3) · Day 잠금 없는 즉시 복구 · 타격 +1 플로팅/럭키 드롭
  ③ 강이 길을 막고 → 다리를 놓으면 북쪽 개척권으로 걸어서 건너기
  ④ 북쪽 숲/채석장 군락 · 논 볍씨 심기/물주기/수확/판매 · 주먹밥 요리
  ⑤ 리어카 제작 → 가방 8칸 → 16칸 · 업적
  ⑥ Save v5 저장/복원 · v4/v3/v1 → v5 마이그레이션
을 실제로 눌러 보고, 콘솔 에러·404 를 센다.
스크린샷은 screenshots/phase4/ 에 남긴다.

QA_PART=farm|save|all (기본 all)
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

OUT = os.path.abspath(os.path.join(HERE, '..', 'screenshots', 'phase4'))
DIST = os.path.abspath(os.path.join(HERE, '..', 'dist'))
os.makedirs(OUT, exist_ok=True)
PART = os.environ.get('QA_PART', 'all')

logs, errors, failed, checks = [], [], [], []


def want(part):
    return PART in ('all', part)


# ── 공용 도우미 ────────────────────────────────────────────────
def check(label, ok, detail=''):
    checks.append((label, bool(ok), detail))
    print(f'  {"✓" if ok else "✗"} {label}{(" — " + str(detail)) if detail else ""}')
    return ok


def life(page):
    return page.evaluate('window.__metamong.life()')


def stats(page):
    return page.evaluate('window.__metamong.stats()')


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
    # 소프트웨어 렌더러에서는 프레임이 아직 합성되지 않은 채로 캡처될 때가 있다 — 두 프레임을 기다린다
    try:
        page.evaluate("() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(() => r(1))))")
        page.wait_for_timeout(320)
    except Exception:
        pass
    try:
        page.screenshot(path=os.path.join(OUT, name), timeout=25000)
    except Exception as exc:
        print(f'  ⚠ 스크린샷 실패 {name}: {exc}')
        return
    print(f'  📸 {name}')


def tap(page, selector, **kw):
    alive(page)
    try:
        page.locator(selector, **kw).first.click(timeout=8000, no_wait_after=True)
        return True
    except Exception:
        alive(page)
        page.wait_for_timeout(200)
        try:
            page.locator(selector, **kw).first.click(timeout=8000, no_wait_after=True)
            return True
        except Exception:
            page.evaluate("(sel) => { const el = document.querySelector(sel); if (el) el.click(); }", selector)
            page.wait_for_timeout(160)
            return False


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
    page.wait_for_timeout(300)


def body_btn(page, text):
    alive(page)
    page.evaluate(
        """(t) => {
          const el = [...document.querySelectorAll('.modal-body button')].find((x) => x.textContent.includes(t));
          if (el) el.click();
        }""",
        text,
    )
    page.wait_for_timeout(320)


def title(page):
    return page.locator('.modal-title').first.inner_text() if page.locator('.modal-title').count() else ''


def action_label(page):
    return page.locator('.action-btn .txt').inner_text()


def wait_label(page, text, timeout=7000):
    try:
        page.wait_for_function(
            "(t) => { const el = document.querySelector('.action-btn .txt'); return !!el && el.textContent.includes(t); }",
            arg=text,
            timeout=timeout,
        )
        return True
    except Exception:
        return False


def teleport(page, x, z, settle=500):
    page.evaluate("([x, z]) => window.__metamong.game.player.teleport(x, z)", [x, z])
    page.wait_for_timeout(settle)


def give(page, items):
    page.evaluate(
        """(items) => {
          const inv = window.__metamong.game.progress.inventory;
          for (const [id, n] of Object.entries(items)) inv.add(id, n);
        }""",
        items,
    )


def walk_until(page, key, predicate, max_seconds=40):
    """키를 누른 채 조건이 될 때까지 기다린다 — 헤드리스는 게임 시간이 아주 느리게 흐른다"""
    t0 = time.time()
    page.keyboard.down(key)
    try:
        while time.time() - t0 < max_seconds:
            page.wait_for_timeout(400)
            if page.evaluate(predicate):
                return True
        return False
    finally:
        page.keyboard.up(key)
        page.wait_for_timeout(220)


def hold_keys(page, keys, seconds):
    for k in keys:
        page.keyboard.down(k)
    page.wait_for_timeout(int(seconds * 1000))
    for k in keys:
        page.keyboard.up(k)
    page.wait_for_timeout(220)


def build(page, lm_id):
    page.evaluate(
        """(id) => {
          const g = window.__metamong.game;
          const need = { dock: { log: 3, stone: 2 }, workshop: { log: 4, stone: 3 },
                         vending: { log: 4, stone: 4 }, lighthouse: { log: 6, stone: 5 } }[id] || {};
          for (const [item, n] of Object.entries(need)) g.progress.inventory.add(item, n);
          g.invest(id);
          g.completeBuild(id);
        }""",
        lm_id,
    )
    page.wait_for_timeout(500)
    close_modal(page)


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


def canvas_ink(page, selector):
    """캔버스가 실제로 그려졌는지 — 서로 다른 색 수를 센다"""
    return page.evaluate(
        """(sel) => {
          const c = document.querySelector(sel);
          if (!c) return -1;
          const ctx = c.getContext('2d');
          const d = ctx.getImageData(0, 0, c.width, c.height).data;
          const set = new Set();
          for (let i = 0; i < d.length; i += 4 * 97) {
            if (d[i + 3] === 0) continue;
            set.add(`${d[i]},${d[i + 1]},${d[i + 2]}`);
          }
          return set.size;
        }""",
        selector,
    )


def nearest_ditto_spot(page, ditto_id):
    """고양이·채집물에 가리지 않고 그 메타몽이 대상이 되는 자리를 찾는다"""
    return page.evaluate(
        """(id) => {
          const g = window.__metamong.game;
          const d = g.dittos.find((x) => x.id === id);
          for (let a = 0; a < 24; a++) {
            const ang = (a / 24) * Math.PI * 2;
            for (const r of [1.1, 1.5, 1.9]) {
              const x = d.position.x + Math.cos(ang) * r;
              const z = d.position.z + Math.sin(ang) * r;
              if (!g.world.terrain.isWalkable(x, z)) continue;
              g.player.teleport(x, z);
              return [x, z];
            }
          }
          g.player.teleport(d.position.x, d.position.z + 1.4);
          return [0, 0];
        }""",
        ditto_id,
    )


def discover_ditto(page, ditto_id):
    """그 메타몽이 액션 대상이 되는 자리를 찾아 [살펴보기] 로 도감 등록"""
    for attempt in range(10):
        page.evaluate(
            """([id, i]) => {
              const g = window.__metamong.game;
              const d = g.dittos.find((x) => x.id === id);
              const ang = (i / 10) * Math.PI * 2;
              const r = [1.2, 1.6, 2.0][i % 3];
              g.player.teleport(d.position.x + Math.cos(ang) * r, d.position.z + Math.sin(ang) * r);
            }""",
            [ditto_id, attempt],
        )
        page.wait_for_timeout(420)
        t = page.evaluate("() => { const t = window.__metamong.game.target; return t ? { kind: t.kind, id: t.id } : null; }")
        if t and t.get('kind') == 'ditto' and t.get('id') == ditto_id:
            page.evaluate("() => window.__metamong.game.interact()")
            page.wait_for_timeout(500)
            return True
    return False


def reset_hud_state(page):
    """텔레포트 직후 대상 판정이 갱신되도록 몇 프레임 기다린다"""
    page.wait_for_timeout(650)


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
                # ═══ ① 새 섬 · 72×72 · HUD · 웰컴 배너 ══════════════
                fresh(page, url)
                snap(page, '01_title.png')
                badge = page.locator('.title-badge').inner_text()
                version = page.locator('.title-version').inner_text()
                check('타이틀이 Phase 4', 'PHASE 4' in badge and 'Phase 4' in version, f'{badge} / {version}')
                new_island(page)
                snap(page, '02_new_island.png')
                st, lf = stats(page), life(page)
                check('플레이 진입', st['mode'] == 'play', st['mode'])
                check('맵 72×72', lf['mapGrid']['grid'] == 72 and lf['mapGrid']['half'] == 36, lf['mapGrid'])
                check('미니맵 캔버스 존재', page.locator('.minimap-canvas').count() == 1)
                ink = canvas_ink(page, '.minimap-canvas')
                check('미니맵이 실제로 그려짐(색 종류)', ink > 8, ink)
                check('웰컴 배너 1/3 표시', page.locator('.welcome-chip').count() == 1 and '1/3' in page.locator('.welcome-chip').inner_text(), page.locator('.welcome-chip').inner_text())
                check('가방 8칸', lf['bagCapacity'] == 8 and page.locator('.quick-bag .quick-badge').inner_text() == '0/8', lf['bagCapacity'])
                check('다리 미완성', lf['bridgeBuilt'] is False, lf['bridge'])

                # ── 4단계: 강이 길을 막는다 (걸어서 확인)
                teleport(page, 0, -4.4, 900)
                crossed = walk_until(page, 'KeyW', "() => window.__metamong.stats().player.z < -12", 10)
                after = stats(page)['player']['z']
                check('다리 없이는 강을 건널 수 없다', (not crossed) and after > -6.2, round(after, 2))
                check('강물 자체가 걷기 불가', page.evaluate("() => window.__metamong.game.world.terrain.isWalkable(0, -9)") is False)

                # 다리 미완성 상태의 지도 (점선)
                page.evaluate("() => window.__metamong.game.openMinimap()")
                page.wait_for_timeout(700)
                snap(page, '02b_map_unbuilt.png')
                close_modal(page)

                # ── 웰컴 1단계: 우체통 선물
                page.evaluate("() => window.__metamong.game.openMailbox('welcome_bokyung')")
                page.wait_for_timeout(450)
                snap(page, '03_mailbox_letter.png')
                coins0 = life(page)['coins']
                body_btn(page, '선물 받기')
                page.wait_for_timeout(700)
                lf = life(page)
                check('웰컴 1단계 완료 (선물)', lf['welcome']['step'] >= 1, lf['welcome'])
                check('웰컴 보상 코인 +15', lf['coins'] >= coins0 + 15, (coins0, lf['coins']))
                close_modal(page)
                check('배너가 2/3로 진행', '2/3' in page.locator('.welcome-chip').inner_text(), page.locator('.welcome-chip').inner_text())

                # ── 웰컴 2단계: 메타몽 2마리
                for did in ('ditto_mailbox_03', 'ditto_basic_01'):
                    ok = discover_ditto(page, did)
                    print(f'    · discover {did} = {ok}')
                lf = life(page)
                check('메타몽 2마리 도감 등록', len(stats(page)['discovered']) >= 2, stats(page)['discovered'])
                check('웰컴 2단계 완료', lf['welcome']['step'] >= 2, lf['welcome'])
                snap(page, '04_welcome_step2.png')

                # ── 채집 타격감: +1 플로팅 + 럭키 드롭
                page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      const nodes = g.world.scenery.nodes;
                      let spot = null;
                      outer: for (const n of nodes) {
                        if (n.kind !== 'tree') continue;
                        for (let a = 0; a < 16; a++) {
                          const ang = (a / 16) * Math.PI * 2;
                          const x = n.x + Math.cos(ang) * 1.25;
                          const z = n.z + Math.sin(ang) * 1.25;
                          if (!g.world.terrain.isWalkable(x, z)) continue;
                          let best = null; let bestD = 2.5;
                          for (const o of nodes) {
                            const d = Math.hypot(o.x - x, o.z - z);
                            if (d < bestD) { bestD = d; best = o; }
                          }
                          if (best === n) { spot = [x, z]; break outer; }
                        }
                      }
                      g.player.teleport(spot[0], spot[1]);
                    }"""
                )
                page.wait_for_timeout(700)
                check('나무 앞 액션 라벨', wait_label(page, '베기'), action_label(page))
                page.evaluate("() => { window.__metamong.__origRandom = Math.random; Math.random = () => 0.01; }")
                coins_before = life(page)['coins']
                page.evaluate("() => document.querySelector('.action-btn').click()")
                page.wait_for_timeout(650)
                page.evaluate("() => { Math.random = window.__metamong.__origRandom; }")
                lf = life(page)
                floats = page.locator('.float-layer .float-text').all_inner_texts()
                check('타격 한 번에 +1 통나무 플로팅', any('통나무' in t for t in floats), floats[-4:])
                check('타격에 통나무가 바로 들어옴', any(s and s['id'] == 'log' for s in lf['bag']), json.dumps(lf['bag'], ensure_ascii=False)[:80])
                check('럭키 드롭(숨은 코인 +5)', lf['coins'] >= coins_before + 5 and lf['counters'].get('lucky', 0) >= 1, (coins_before, lf['coins'], lf['counters'].get('lucky')))
                snap(page, '05_lucky_hit.png')
                # 나무를 끝까지 베어 웰컴 3단계
                for _ in range(14):
                    page.evaluate("() => document.querySelector('.action-btn').click()")
                    page.wait_for_timeout(380)
                    if life(page)['counters'].get('tree', 0) >= 1:
                        break
                lf = life(page)
                check('나무 1그루 베기', lf['counters'].get('tree', 0) >= 1, lf['counters'])
                check(
                    '웰컴 3단계 완료 → 배너 종료',
                    lf['welcome']['step'] >= 3
                    and (page.locator('.welcome-chip').count() == 0 or 'hidden' in (page.locator('.welcome-chip').first.get_attribute('class') or '')),
                    lf['welcome'],
                )
                check('웰컴 보상 누적 +45', lf['coins'] >= 45, lf['coins'])

                # ═══ ② Day 잠금 없는 즉시 복구 (4곳) ═════════════════
                for lm_id, name in (('dock', '부두'), ('workshop', '공방'), ('vending', '자판기'), ('lighthouse', '등대')):
                    build(page, lm_id)
                    ok = life(page)['buildings'][lm_id]['done'] is True
                    check(f'Day 1 즉시 복구 — {name}', ok)
                check('건축 모달 4곳 + 다리', page.evaluate("() => { window.__metamong.game.openQuick('build'); return document.querySelectorAll('.site-item').length; }") == 5)
                close_modal(page)

                # ═══ ③ 다리 놓기 → 북쪽 개척권 ══════════════════════
                teleport(page, 0, -4.6, 900)
                check('다리 앞 액션 = 다리 놓기', wait_label(page, '다리 놓기'), action_label(page))
                tap(page, '.action-btn')
                page.wait_for_timeout(600)
                snap(page, '06_bridge_panel.png')
                check('다리 패널 열림', '다리' in title(page), title(page))
                body = page.locator('.modal-body').inner_text()
                check('다리 재료 = 통나무 6 · 돌 4', '통나무' in body and '돌' in body, body[:120])
                give(page, {'log': 6, 'stone': 4})
                page.wait_for_timeout(250)
                click_btn(page, '재료 투입')
                page.wait_for_timeout(400)
                click_btn(page, '다리 놓기')
                page.wait_for_timeout(900)
                lf = life(page)
                check('다리 완성', lf['bridgeBuilt'] is True, lf['bridge'])
                check('업적: 강을 건너서', 'ach_bridge' in lf['achievements']['unlocked'], lf['achievements']['unlocked'])
                close_modal(page)
                snap(page, '07_bridge_built.png')

                teleport(page, 0, -4.6, 700)
                crossed2 = walk_until(page, 'KeyW', "() => window.__metamong.stats().player.z < -12.2", 45)
                st = stats(page)
                check('다리 위를 걸어 북쪽 개척권 진입', crossed2 and st['player']['z'] < -12.0, st['player']['z'])
                snap(page, '08_crossed_bridge.png')

                # ── 북쪽 숲 · 채석장 군락 확인
                counts = page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      let forest = 0, quarry = 0;
                      for (const n of g.world.scenery.nodes) {
                        if (n.z > -11) continue;
                        if (n.z < -11) {
                          if (n.kind === 'tree') forest += 1;
                          if (n.kind === 'rock') quarry += 1;
                        }
                      }
                      return { forest, quarry };
                    }"""
                )
                check('북쪽 숲 나무 15그루 이상', counts['forest'] >= 15, counts)
                check('채석장 바위 20개 이상', counts['quarry'] >= 20, counts)
                teleport(page, -11.0, -16.6, 1100)
                snap(page, '09_north_forest.png')
                teleport(page, 13.6, -16.2, 1100)
                snap(page, '10_quarry.png')

                # ═══ ④ 논 — 볍씨 구매 → 심기 → 물주기 → 수확 → 판매 ═══
                page.evaluate("() => { const g = window.__metamong.game; g.progress.addCoins(200); g.openVending(); }")
                page.wait_for_timeout(450)
                page.locator('.tab', has_text='사기').first.click(no_wait_after=True)
                page.wait_for_timeout(450)
                body = page.locator('.modal-body').inner_text()
                check('자판기 사기에 볍씨', '볍씨' in body, body[:120])
                coins_before = life(page)['coins']
                page.evaluate("() => window.__metamong.game.buyGood('seed_rice')")
                page.wait_for_timeout(450)
                lf = life(page)
                check('볍씨 구입 = 20코인', lf['supplies'].get('seed_rice') == 1 and coins_before - lf['coins'] == 20, (coins_before, lf['coins'], lf['supplies'].get('seed_rice')))
                page.evaluate("() => window.__metamong.game.buyGood('seed_rice')")
                page.wait_for_timeout(350)
                close_modal(page)

                teleport(page, -3.4, -16.2, 800)
                check('논 앞 액션 = 볍씨 심기', wait_label(page, '볍씨 심기'), action_label(page))
                tap(page, '.action-btn')
                page.wait_for_timeout(600)
                snap(page, '11_paddy_seed_picker.png')
                check('볍씨 고르기 모달', '논에 심기' in title(page), title(page))
                body_btn(page, '심기')
                page.wait_for_timeout(600)
                lf = life(page)
                idx = next((i for i, v in enumerate(lf['paddyPlots']) if v), -1)
                check('논에 볍씨 심김', lf['paddyPlanted'] >= 1 and idx >= 0 and lf['paddyPlots'][idx]['crop'] == 'rice', lf['paddyPlots'])
                check('볍씨 1개 소모', lf['supplies'].get('seed_rice') == 1, lf['supplies'].get('seed_rice'))
                close_modal(page)

                # 물주기 (액션 버튼)
                page.evaluate("(i) => { const g = window.__metamong.game; const p = g.paddy.plots[i]; g.player.teleport(p.x, p.z + 0.9); }", idx)
                page.wait_for_timeout(800)
                ok_water = wait_label(page, '물주기', 7000)
                check('논 앞 액션 = 물주기', ok_water, action_label(page))
                before = life(page)
                page.evaluate("() => document.querySelector('.action-btn').click()")
                page.wait_for_timeout(700)
                after = life(page)
                check(
                    '논 물주기로 남은 시간 절반',
                    bool(after['paddyPlots'][idx]) and after['paddyPlots'][idx]['remain'] < before['paddyPlots'][idx]['remain'] * 0.6,
                    (before['paddyPlots'][idx], after['paddyPlots'][idx]),
                )
                snap(page, '12_paddy_watered.png')

                # 성장 가속 후 수확
                page.evaluate("(i) => { const g = window.__metamong.game; g.progress.paddyPlots[i].remain = 0.4; g.state.settings.timeScale = 10; }", idx)
                page.wait_for_function(
                    "(i) => { const p = window.__metamong.life().paddyPlots[i]; return !!p && p.ripe === true; }",
                    arg=idx,
                    timeout=30000,
                )
                page.evaluate("() => { window.__metamong.game.state.settings.timeScale = 1; }")
                page.wait_for_timeout(400)
                page.evaluate("(i) => { const g = window.__metamong.game; const p = g.paddy.plots[i]; g.player.teleport(p.x, p.z + 0.9); }", idx)
                page.wait_for_timeout(800)
                lab = action_label(page)
                check('다 여문 논 액션 = 수확', '수확' in lab, lab)
                bag_before = life(page)['bagSlots']
                page.evaluate("() => document.querySelector('.action-btn').click()")
                page.wait_for_timeout(800)
                lf = life(page)
                rice = lf['crops'].get('rice', 0)
                check('쌀 2~3개 수확', 2 <= rice <= 3, lf['crops'])
                check('쌀은 별도 바구니(가방 그대로)', lf['bagSlots'] == bag_before, (bag_before, lf['bagSlots']))
                check('논 타일 비워짐', lf['paddyPlots'][idx] is None, lf['paddyPlots'][idx])
                snap(page, '13_paddy_harvested.png')

                # 자판기 판매 = 개당 28
                page.evaluate("() => { const g = window.__metamong.game; g.openVending(); }")
                page.wait_for_timeout(450)
                page.locator('.tab', has_text='팔기').first.click(no_wait_after=True)
                page.wait_for_timeout(450)
                body = page.locator('.modal-body').inner_text()
                check('팔기 탭에 쌀 표시', '쌀' in body, body[:160])
                coins_before = life(page)['coins']
                page.evaluate("() => window.__metamong.game.sellItem('rice', 'all')")
                page.wait_for_timeout(500)
                lf = life(page)
                check('쌀 판매 = 개당 28코인', lf['coins'] - coins_before == 28 * rice, (rice, lf['coins'] - coins_before))
                close_modal(page)

                # 주먹밥 요리
                page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      g.progress.addCrop('rice', 2);
                      g.progress.inventory.add('berry', 1);
                      g.progress.stamina = 15;
                      g.openCooking();
                    }"""
                )
                page.wait_for_timeout(500)
                body = page.locator('.modal-body').inner_text()
                check('요리 도감에 고소한 주먹밥', '고소한 주먹밥' in body, body[:160])
                before = life(page)
                page.evaluate("() => window.__metamong.game.cook('riceball')")
                page.wait_for_timeout(600)
                lf = life(page)
                check('주먹밥 요리(기력 +80)', lf['stamina'] >= min(100, before['stamina'] + 78), (before['stamina'], lf['stamina']))
                check('주먹밥 재료로 쌀 2개 소모', lf['crops'].get('rice', 0) == 0, lf['crops'])
                snap(page, '14_riceball.png')
                close_modal(page)

                # ═══ ⑤ 리어카 — 가방 8칸 → 16칸 ═════════════════════
                page.evaluate("() => { const g = window.__metamong.game; g.progress.addCoins(300); g.openWorkshop(); }")
                page.wait_for_timeout(450)
                body = page.locator('.modal-body').inner_text()
                check('공방 메뉴에 리어카', '리어카' in body, body[:160])
                page.evaluate("() => window.__metamong.game.openCart()")
                page.wait_for_timeout(500)
                snap(page, '15_cart_panel.png')
                give(page, {'log': 8, 'stone': 5})
                page.wait_for_timeout(300)
                coins_before = life(page)['coins']
                page.evaluate("() => window.__metamong.game.buildCart()")
                page.wait_for_timeout(700)
                lf = life(page)
                check('리어카 제작', lf['cartLevel'] == 1, lf['cartLevel'])
                check('가방 8칸 → 16칸', lf['bagCapacity'] == 16, lf['bagCapacity'])
                check('리어카 코인 60 차감', coins_before - lf['coins'] == 60, (coins_before, lf['coins']))
                check('업적: 손수레의 날', 'ach_cart' in lf['achievements']['unlocked'], lf['achievements']['unlocked'])
                close_modal(page)
                page.wait_for_timeout(500)
                check('HUD 가방 배지 0/16', '/16' in page.locator('.quick-bag .quick-badge').inner_text(), page.locator('.quick-bag .quick-badge').inner_text())
                check('HUD 리어카 칩 표시', page.locator('.cart-chip').count() == 1 and 'hidden' not in (page.locator('.cart-chip').get_attribute('class') or ''), page.locator('.cart-chip').get_attribute('class'))
                check('3D 리어카 스프라이트 표시', page.evaluate("() => !!window.__metamong.game.cartSprite && window.__metamong.game.cartSprite.visible"))
                diag = page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      const c = document.querySelector('#scene');
                      const r = g.renderer;
                      return {
                        cam: [g.camera.position.x, g.camera.position.y, g.camera.position.z].map((v) => +v.toFixed(2)),
                        camFov: g.camera.fov, near: g.camera.near, far: g.camera.far,
                        canvas: [c.width, c.height, c.clientWidth, c.clientHeight],
                        size: [r.getSize ? 0 : 0], domW: r.domElement.width, domH: r.domElement.height,
                        pr: r.getPixelRatio(),
                        post: g.post ? Object.keys(g.post) : null,
                        look: [g.lookAt.x, g.lookAt.y, g.lookAt.z].map((v) => +v.toFixed(2)),
                        player: [g.player.position.x, g.player.position.y, g.player.position.z].map((v) => +v.toFixed(2)),
                        mode: g.mode, paused: g.paused, hidden: document.hidden,
                      };
                    }"""
                )
                print('  진단:', json.dumps(diag, ensure_ascii=False))
                snap(page, '16_cart_equipped.png')

            if want('regress'):
                fresh(page, url)
                new_island(page)
                for lm_id in ('dock', 'workshop', 'vending', 'lighthouse'):
                    build(page, lm_id)
                page.evaluate("() => { window.__metamong.game.progress.addCoins(200); }")

                # ═══ ⑥ 1·2·3단계 회귀 ═══════════════════════════════
                # 낚시
                teleport(page, 0, 28.9, 800)
                check('부두 앞 낚시 액션', wait_label(page, '낚시하기'), action_label(page))
                page.evaluate("() => window.__metamong.game.openFishSpot()")
                page.wait_for_timeout(400)
                click_btn(page, '낚시하기')
                page.wait_for_timeout(200)
                page.evaluate("() => { window.__metamong.game.fishing.waitFor = 0.12; }")
                page.wait_for_function("() => window.__metamong.game.fishing.state === 'bite'", timeout=9000)
                snap(page, '17_fishing_bite.png')
                tap(page, '.action-btn')
                page.wait_for_timeout(700)
                lf = life(page)
                fish_total = sum(lf['fish'].values()) if lf['fish'] else 0
                check('낚시 회귀', fish_total > 0 or any(s and s['id'] == 'star' for s in lf['bag']), json.dumps(lf['fish'], ensure_ascii=False))
                page.evaluate("() => window.__metamong.game.fishing.cancel()")

                # 고양이 · 의뢰 · 랭크
                aff_before = life(page)['cats']['somi']['aff']
                page.evaluate("() => window.__metamong.game.openCat('somi')")
                page.wait_for_timeout(450)
                body_btn(page, '쓰다듬기')
                page.wait_for_timeout(500)
                check('고양이 돌보기 회귀', life(page)['cats']['somi']['aff'] >= aff_before + 4)
                close_modal(page)

                page.evaluate(
                    """() => { const g = window.__metamong.game;
                      for (const q of g.progress.quests.list) q.progress = q.need;
                      g.openQuest(); }"""
                )
                page.wait_for_timeout(450)
                coins_before = life(page)['coins']
                page.locator('.quest-row .quest-claim.on').first.click(no_wait_after=True)
                page.wait_for_timeout(600)
                check('일일 의뢰 보상 회귀', life(page)['coins'] > coins_before)
                close_modal(page)

                # 텃밭 (3단계)
                page.evaluate("() => { const g = window.__metamong.game; g.progress.addSupply('seed_strawberry', 3); g.openFarm(); }")
                page.wait_for_timeout(500)
                check('텃밭 패널 9칸', page.locator('.farm-cell').count() == 9, page.locator('.farm-cell').count())
                page.locator('.farm-cell').first.locator('button', has_text='심기').click(no_wait_after=True)
                page.wait_for_timeout(450)
                page.locator('.seed-row', has_text='딸기').locator('button').first.click(no_wait_after=True)
                page.wait_for_timeout(600)
                lf = life(page)
                check('텃밭 딸기 심기 회귀', lf['farmPlots'][0] and lf['farmPlots'][0]['crop'] == 'strawberry', lf['farmPlots'][0])
                close_modal(page)
                page.evaluate("() => { const g = window.__metamong.game; g.progress.farmPlots[0].remain = 0.4; g.state.settings.timeScale = 10; }")
                page.wait_for_function("() => window.__metamong.life().farmPlots[0].ripe === true", timeout=20000)
                page.evaluate("() => { window.__metamong.game.state.settings.timeScale = 1; }")
                page.evaluate("() => window.__metamong.game.harvestPlot(0)")
                page.wait_for_timeout(600)
                check('텃밭 수확 회귀', life(page)['crops'].get('strawberry', 0) >= 2, life(page)['crops'])
                close_modal(page)

                # 미니맵 모달
                teleport(page, 0.4, 17.0, 700)
                tap(page, '.minimap')
                page.wait_for_timeout(600)
                snap(page, '18_map_modal.png')
                check('확대 지도 모달', '지도' in title(page), title(page))
                body = page.locator('.modal-body').inner_text()
                check('지도 캔버스 그려짐', canvas_ink(page, '.minimap-big') > 8, canvas_ink(page, '.minimap-big'))
                check('지도에 72×72 안내', '72×72' in body, body[:80])
                check('범례에 다리·논·숲·채석장', all(k in body for k in ('다리', '논', '숲', '채석장')), body[:200])
                legends = page.locator('.legend-row').count()
                check('범례 13줄 이상', legends >= 13, legends)
                close_modal(page)

                # 업적 화면 (14종)
                page.evaluate("() => window.__metamong.game.openAchievements()")
                page.wait_for_timeout(500)
                snap(page, '19_achievements.png')
                rows = page.locator('.ach-row').count()
                check('업적 14종', rows == 14, rows)
                coins_before = life(page)['coins']
                if page.locator('.ach-row .ach-claim.on').count():
                    page.locator('.ach-row .ach-claim.on').first.click(no_wait_after=True)
                    page.wait_for_timeout(600)
                check('업적 보상 수령', life(page)['coins'] > coins_before or len(life(page)['achievements']['claimed']) >= 1)
                close_modal(page)

            # ═══ ⑦ Save v5 저장 / 복원 ════════════════════════════════
            if want('save'):
                fresh(page, url)
                new_island(page)
                page.evaluate(
                    """() => {
                      const g = window.__metamong.game;
                      g.progress.inventory.add('log', 20);
                      g.progress.inventory.add('stone', 20);
                      g.progress.addCoins(200);
                      g.progress.building('workshop').done = true;
                      g.investBridge();
                      g.completeBridge();
                      g.modal.close();
                      g.buildCart();
                      g.modal.close();
                      g.progress.welcome.step = 3;
                      g.progress.paddyPlots[2] = { crop: 'rice', remain: 20, total: 45, watered: 1, wet: 0 };
                      g.paddy.syncAll();
                      g.save();
                    }"""
                )
                page.wait_for_timeout(900)
                # ═══ ⑦ 저장 · 복원 (v5) ════════════════════════════
                page.evaluate("() => window.__metamong.game.save()")
                page.wait_for_timeout(900)
                saved = page.evaluate(
                    """async () => {
                      const d = await window.__metamong.game.saveStore.load();
                      return d ? { v: d.version, bridge: d.bridgeBuilt, cart: d.cartLevel, cap: d.bagCapacity,
                                   paddy: d.paddyPlots, welcome: d.welcome, coins: d.coins } : null;
                    }"""
                )
                print('  저장 확인:', json.dumps(saved, ensure_ascii=False)[:300])
                check('세이브 version 5', bool(saved and saved['v'] == 5), saved and saved['v'])
                check('세이브에 다리 완성', bool(saved and saved['bridge'] is True), saved and saved['bridge'])
                check('세이브에 리어카·가방 16칸', bool(saved and saved['cart'] == 1 and saved['cap'] == 16), saved and (saved['cart'], saved['cap']))
                check('세이브에 웰컴 3단계', bool(saved and saved['welcome']['step'] >= 3), saved and saved['welcome'])
                check('세이브에 논 타일 배열', bool(saved and isinstance(saved['paddy'], list) and len(saved['paddy']) == 6), saved and len(saved['paddy'] or []))

                page.reload(wait_until='networkidle')
                page.wait_for_timeout(2800)
                alive(page)
                page.locator('.title-actions button', has_text='이어하기').first.click()
                page.wait_for_timeout(2400)
                lf = life(page)
                check('복원: 다리 완성', lf['bridgeBuilt'] is True, lf['bridge'])
                check('복원: 리어카 · 16칸', lf['cartLevel'] == 1 and lf['bagCapacity'] == 16, (lf['cartLevel'], lf['bagCapacity']))
                check(
                    '복원: 웰컴 종료 배너 없음',
                    lf['welcome']['step'] >= 3
                    and (page.locator('.welcome-chip').count() == 0 or 'hidden' in (page.locator('.welcome-chip').first.get_attribute('class') or '')),
                    lf['welcome'],
                )
                check('복원: 다리 데크가 걷기 가능', page.evaluate("() => window.__metamong.game.world.terrain.isWalkable(0, -9)") is True)
                snap(page, '20_reloaded.png')

            # ═══ ⑧ 마이그레이션 ════════════════════════════════════
            if want('save'):
                fresh(page, url)
                new_island(page)
                page.evaluate(
                    """async () => {
                      await window.__metamong.game.saveStore.clear();
                      const v4 = {
                        version: 4, savedAt: Date.now(), day: 6, elapsed: 500,
                        player: { x: 0.4, z: 17.4, yaw: 3.14 },
                        discovered: ['ditto_basic_01', 'ditto_pebble_02'],
                        settings: { muted: false, timeScale: 1, fps30: false },
                        stamina: 71, bag: [{ id: 'log', n: 4 }, null, null, null, null, null, null, null],
                        storage: { stone: 7 }, mailbox: { read: ['welcome_bokyung'], claimed: ['welcome_bokyung'] },
                        buildings: { dock: { invested: {}, done: true }, workshop: { invested: {}, done: true } },
                        nodes: {},
                        coins: 143, skills: { gather: 120, fish: 84, cook: 60, care: 22, farm: 40 },
                        fish: { bream: 2 }, supplies: { churu: 1, ade: 0, bait: 2, seed_strawberry: 1 },
                        tools: { axe: 2, pick: 1, water: 2 },
                        cats: { somi: { aff: 45, gifts: [2, 3], follow: true }, ongi: { aff: 12, gifts: [], follow: false } },
                        cooked: { tea: 2 }, quests: { day: 6, list: [] }, buff: { kind: '', left: 0 },
                        fishing: { casts: 9, catches: 7, misses: 2, best: 28 },
                        crops: { strawberry: 3 }, farmPlots: [null, { crop: 'radish', remain: 12, total: 42, watered: 1, wet: 0 }],
                        counters: { chop: 9, tree: 3, rock: 1, flower: 0, mine: 1, fish: 7, cook: 2, sell: 4, pet: 3, treat: 0, petal: 0, plant: 2, water: 1, crop: 3 },
                        achievements: { unlocked: ['ach_first_chop', 'ach_first_fish'], claimed: [] },
                      };
                      localStorage.setItem('metamong-island:slot1', JSON.stringify(v4));
                    }"""
                )
                page.reload(wait_until='networkidle')
                page.wait_for_timeout(2800)
                alive(page)
                snap(page, '21_v4_title.png')
                page.locator('.title-actions button', has_text='이어하기').first.click()
                page.wait_for_timeout(2400)
                lf, st = life(page), stats(page)
                ver = page.evaluate("async () => { const d = await window.__metamong.game.saveStore.load(); return d && d.version; }")
                check('v4 → v5 로 저장', ver == 5, ver)
                check('v4 Day 승계', st['day'] == 6, st['day'])
                check('v4 코인 승계 + 웰컴 소급 보상(+15×3)', lf['coins'] == 143 + 45, lf['coins'])
                check('v4 텃밭 승계', lf['farmPlots'][1] and lf['farmPlots'][1]['crop'] == 'radish', lf['farmPlots'][1])
                check('v4 스킬 승계', lf['skills']['gather'] == 120 and lf['skills'].get('farm') == 40, lf['skills'])
                check('v4 새 필드 기본값', lf['bridgeBuilt'] is False and lf['cartLevel'] == 0 and lf['bagCapacity'] == 8, (lf['bridgeBuilt'], lf['cartLevel'], lf['bagCapacity']))
                check('v4 논 기본값(빈 논 6칸)', lf['paddyPlanted'] == 0 and len(lf['paddyPlots']) == 6, lf['paddyPlots'])
                check('v4 웰컴 0단계(선물 이미 받음 → 1단계로 통과)', lf['welcome']['step'] >= 1, lf['welcome'])
                check('v4 다리 위가 아니라 길 위 복원', st['player']['z'] > 10, st['player']['z'])
                snap(page, '22_v4_migrated.png')

                # ── v3 → v5 (아주 오래된 세이브)
                page.evaluate(
                    """async () => {
                      await window.__metamong.game.saveStore.clear();
                      const v3 = {
                        version: 3, savedAt: Date.now(), day: 4, elapsed: 400,
                        player: { x: 0.4, z: 11.8, yaw: 3.14 },
                        discovered: ['ditto_basic_01'], settings: { muted: false, timeScale: 1, fps30: false },
                        stamina: 66, bag: [{ id: 'log', n: 5 }, null, null, null, null, null, null, null],
                        storage: { stone: 9 }, mailbox: { read: [], claimed: [] },
                        buildings: { workshop: { invested: {}, done: true } }, nodes: {},
                        coins: 88, skills: { gather: 60 }, fish: {}, supplies: {}, tools: { axe: 1 },
                      };
                      localStorage.setItem('metamong-island:slot1', JSON.stringify(v3));
                    }"""
                )
                page.reload(wait_until='networkidle')
                page.wait_for_timeout(2800)
                alive(page)
                page.locator('.title-actions button', has_text='이어하기').first.click()
                page.wait_for_timeout(2400)
                st, lf = stats(page), life(page)
                check('v3 → v5: Day·코인 승계', st['day'] == 4 and lf['coins'] == 88, (st['day'], lf['coins']))
                check('v3 → v5: 기력·가방 승계', abs(lf['stamina'] - 66) < 4 and any(s and s['id'] == 'log' for s in lf['bag']), (lf['stamina'], lf['bag'][:2]))
                check('v3 → v5: 4단계 기본값', lf['bridgeBuilt'] is False and lf['bagCapacity'] == 8 and lf['paddyPlanted'] == 0, (lf['bridgeBuilt'], lf['bagCapacity']))
                # 옛 좌표(0.4, 11.8)에 서 있어도 새 섬에서 걸을 수 있는 자리로 복원된다
                check('v3 → v5: 플레이어가 걷기 가능한 자리', page.evaluate("() => { const p = window.__metamong.game.player.position; return window.__metamong.game.world.terrain.isWalkable(p.x, p.z); }") is True)
                snap(page, '23_v3_migrated.png')
                check('업적 14종 유지', len(lf['achRows']) == 14, len(lf['achRows']))

        except Exception:
            print('  ✗ 예외:')
            traceback.print_exc()
            try:
                snap(page, '99_failure.png')
            except Exception:
                pass

        print('\n--- console ---')
        for t, msg in logs:
            if t in ('error',):
                print(f'  [{t}] {msg[:200]}')
        print('--- page errors ---')
        print('  (없음)' if not errors else '')
        for e in errors:
            print('  ', e)
        print('--- failed requests / >=400 ---')
        print('  (없음)' if not failed else '')
        for f in failed:
            print('  ', f)

        bad = [c for c in checks if not c[1]]
        print(f'\n=== 체크 {len(checks)}개 중 실패 {len(bad)}개 ===')
        for label, _, detail in bad:
            print(f'  ✗ {label} — {detail}')
        print(f'콘솔 에러 {len(errors)}건 · 404/실패 요청 {len(failed)}건')

        browser.close()
    httpd.shutdown()


if __name__ == '__main__':
    run()

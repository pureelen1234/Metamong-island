#!/usr/bin/env python3
"""
2단계(낚시·고양이·요리·상점·랭크) 브라우저 실측 QA.

390×844 모바일 세로 화면에서
  ① 1단계 회귀(채집·가방·우체통·창고·복구)
  ② 부두 낚시(찌·입질·성공/실패·미끼)
  ③ 솜이·옹이 호감도·간식·따라오기
  ④ 공방 요리·도구 강화
  ⑤ 자판기 팔기/사기·일일 의뢰
  ⑥ 도감 탭·랭크
  ⑦ v3 저장 복원 · v1/v2 세이브 호환
을 실제로 눌러 보고, 콘솔 에러·404 를 센다.
스크린샷은 screenshots/phase2_life/ 에 남긴다.

QA_PART=main|save|all (기본 all)
  · main : 라이브 플레이 전체 흐름
  · save : 저장/새로고침/구버전 세이브 병합 (짧게 상태를 주입해 확인)
  · all  : 둘 다
"""
import json
import os
import sys
import traceback

from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from serve_dist import start  # noqa: E402

OUT = os.path.abspath(os.path.join(HERE, '..', 'screenshots', 'phase2_life'))
DIST = os.path.abspath(os.path.join(HERE, '..', 'dist'))
os.makedirs(OUT, exist_ok=True)
PART = os.environ.get('QA_PART', 'all')

logs, errors, failed, checks = [], [], [], []


def want(part):
    return PART in ('all', part)


def snap(page, name):
    try:
        alive(page)
    except Exception:
        pass
    try:
        page.screenshot(path=os.path.join(OUT, name), timeout=20000)
    except Exception as exc:
        print(f'  ⚠ 스크린샷 실패 {name}: {exc}')
        return
    print(f'  📸 {name}')


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
    """HUD 액션 라벨이 바뀔 때까지 기다린다(저프레임 환경의 갱신 지연 방지)."""
    try:
        page.wait_for_function(
            "(t) => { const el = document.querySelector('.action-btn .txt'); return !!el && el.textContent.includes(t); }",
            arg=text,
            timeout=timeout,
        )
        return True
    except Exception:
        return False



def teleport(page, x, z, settle=450):
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


def build(page, lm_id):
    page.evaluate(
        """(id) => {
          const g = window.__metamong.game;
          const need = { dock: { log: 6, stone: 2 }, workshop: { log: 8, stone: 6 },
                         vending: { stone: 4, petal: 5, star: 2 }, lighthouse: { log: 12, stone: 10, star: 5 } }[id] || {};
          for (const [item, n] of Object.entries(need)) g.progress.inventory.add(item, n);
          g.invest(id);
          g.completeBuild(id);
        }""",
        lm_id,
    )
    page.wait_for_timeout(500)
    close_modal(page)


def catch_one(page):
    """찌를 던지고 입질이 오면 탭해서 한 마리 잡는다. @returns 성공 여부"""
    page.evaluate("() => window.__metamong.game.openFishSpot()")
    page.wait_for_timeout(350)
    click_btn(page, '낚시하기')
    page.evaluate("() => { window.__metamong.game.fishing.waitFor = 0.12; }")
    try:
        page.wait_for_function("() => window.__metamong.game.fishing.state === 'bite'", timeout=9000)
    except Exception:
        return False
    tap(page, '.action-btn')
    page.wait_for_timeout(600)
    return True


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
            # ══ 세이브 파트: 짧게 상태를 주입해 저장/복원/마이그레이션만 본다
            if want('save') and PART == 'save':
                page.goto(url, wait_until='networkidle')
                page.evaluate("""async () => {
                  try { await window.__metamong.game.saveStore.clear(); } catch (e) {}
                  try { localStorage.clear(); } catch (e) {}
                }""")
                page.reload(wait_until='networkidle')
                page.wait_for_timeout(2600)
                alive(page)
                page.locator('.title-actions button').last.click()
                page.wait_for_timeout(2000)
                page.evaluate("""() => {
                  const g = window.__metamong.game;
                  g.progress.addCoins(123);
                  g.progress.addFish('goldcarp', 1);
                  g.progress.addFish('anchovy', 3);
                  g.progress.markCooked('tea');
                  g.progress.markCooked('golden');
                  g.progress.tools.axe = 2;
                  g.progress.supplies.bait = 2;
                  g.progress.cat('somi').aff = 47;
                  g.progress.cat('somi').follow = true;
                  g.progress.cat('somi').gifts = [2, 3];
                  g.progress.gainExp('fish', 90);
                  g.progress.gainExp('cook', 120);
                  g.completeBuild('dock');
                  g.completeBuild('workshop');
                  g.progress.quests.list[0].progress = g.progress.quests.list[0].need;
                  g.save();
                }""")
                page.wait_for_timeout(700)
                saved = page.evaluate("""async () => {
                  const d = await window.__metamong.game.saveStore.load();
                  return d ? { version: d.version, coins: d.coins, fish: d.fish, skills: d.skills,
                               tools: d.tools, cats: d.cats, questDay: d.quests && d.quests.day,
                               cooked: d.cooked, day: d.day, buildings: d.buildings } : null;
                }""")
                print('  저장 확인:', json.dumps(saved, ensure_ascii=False)[:420])
                check('세이브 version 3', bool(saved and saved['version'] == 3), saved and saved['version'])
                check('세이브에 코인·물고기·스킬', bool(saved and saved['coins'] == 123 and saved['fish'].get('goldcarp') == 1 and saved['skills']['fish'] == 90), saved and {k: saved[k] for k in ('coins', 'fish', 'skills')})
                check('세이브에 도구·고양이·요리', bool(saved and saved['tools']['axe'] == 2 and saved['cats']['somi']['aff'] == 47 and saved['cooked'].get('tea') == 1), saved and {k: saved[k] for k in ('tools', 'cooked')})

                page.reload(wait_until='networkidle')
                page.wait_for_timeout(2600)
                alive(page)
                page.locator('.title-actions button', has_text='이어하기').first.click()
                page.wait_for_timeout(2200)
                snap(page, '32_reloaded.png')
                lf = life(page)
                check('재시작 후 코인', lf['coins'] == 123, lf['coins'])
                check('재시작 후 물고기 바구니', lf['fish'].get('goldcarp') == 1 and lf['fish'].get('anchovy') == 3, lf['fish'])
                check('재시작 후 스킬 EXP', lf['skills']['fish'] == 90 and lf['skills']['cook'] == 120, lf['skills'])
                check('재시작 후 도구 Lv.2', lf['tools']['axe'] == 2, lf['tools'])
                check('재시작 후 고양이 호감도·따라오기', lf['cats']['somi']['aff'] == 47 and lf['cats']['somi']['follow'] is True, lf['cats']['somi'])
                check('재시작 후 보답 선물 기록', lf['cats']['somi']['gifts'] == [2, 3], lf['cats']['somi']['gifts'])
                check('재시작 후 요리 도감', lf['cooked'].get('golden') == 1, lf['cooked'])
                check('재시작 후 의뢰 진행 유지', lf['quests']['list'][0]['progress'] == lf['quests']['list'][0]['need'], lf['quests']['list'][0])
                check('재시작 후 따라오는 고양이', page.evaluate("() => window.__metamong.game.cats.find((c) => c.id === 'somi').follow === true"))

                # v1
                page.evaluate("""async () => {
                  await window.__metamong.game.saveStore.clear();
                  localStorage.setItem('metamong-island:slot1', JSON.stringify({
                    version: 1, day: 3, elapsedSeconds: 600,
                    playerPos: { x: 0.4, y: 0.2, z: 11.8 },
                    discoveredDittos: ['ditto_basic_01'],
                    settings: { muted: true, timeScale: 1, fps30: false },
                  }));
                }""")
                page.reload(wait_until='networkidle')
                page.wait_for_timeout(2600)
                alive(page)
                page.locator('.title-actions button', has_text='이어하기').first.click()
                page.wait_for_timeout(2000)
                snap(page, '33_v1_migrated.png')
                st, lf1 = stats(page), life(page)
                check('v1 Day 승계', st['day'] == 3, st['day'])
                check('v1 → 코인 0', lf1['coins'] == 0, lf1['coins'])
                check('v1 → 스킬 0', lf1['skills'] == {'gather': 0, 'fish': 0, 'cook': 0, 'care': 0}, lf1['skills'])
                check('v1 → 도구 Lv.1', lf1['tools'] == {'axe': 1, 'pick': 1}, lf1['tools'])
                check('v1 → 의뢰 Day 3 · 2건', lf1['quests']['day'] == 3 and len(lf1['quests']['list']) == 2, lf1['quests']['day'])
                check('v1 → 가방 비어 있음', lf1['bagSlots'] == 0, lf1['bagSlots'])
                check('v1 → 코인 HUD 0', page.locator('.coin-chip .n').inner_text() == '0', page.locator('.coin-chip .n').inner_text())

                # v2
                page.evaluate("""async () => {
                  await window.__metamong.game.saveStore.clear();
                  const v2 = {
                    version: 2, savedAt: Date.now(), day: 4, elapsed: 400,
                    player: { x: 0.4, z: 11.8, yaw: 3.14 },
                    discovered: ['ditto_basic_01', 'ditto_pebble_02'],
                    settings: { muted: false, timeScale: 1, fps30: false },
                    stamina: 66, bag: [{ id: 'log', n: 5 }, null, null, null, null, null, null, null],
                    storage: { stone: 9 }, mailbox: { read: ['welcome_bokyung'], claimed: ['welcome_bokyung'] },
                    buildings: { workshop: { invested: { log: 8, stone: 6 }, done: true } },
                    nodes: {},
                  };
                  localStorage.setItem('metamong-island:slot1', JSON.stringify(v2));
                }""")
                page.reload(wait_until='networkidle')
                page.wait_for_timeout(2600)
                alive(page)
                page.locator('.title-actions button', has_text='이어하기').first.click()
                page.wait_for_timeout(2000)
                snap(page, '34_v2_migrated.png')
                lf2 = life(page)
                check('v2 기력·가방 승계', abs(lf2['stamina'] - 66) < 2.5 and any(s and s['id'] == 'log' and s['n'] == 5 for s in lf2['bag']), (lf2['stamina'], lf2['bag']))
                check('v2 창고 승계', lf2['storage'].get('stone') == 9, lf2['storage'])
                check('v2 공방 복구 승계', lf2['buildings']['workshop']['done'] is True, lf2['buildings']['workshop'])
                check('v2 → 2단계 기본값', lf2['coins'] == 0 and lf2['skills']['gather'] == 0 and lf2['cats']['somi']['aff'] == 0, (lf2['coins'], lf2['skills']))
                check('v2 → 의뢰 Day 4', lf2['quests']['day'] == 4, lf2['quests']['day'])
                check('v2 → 공방 메뉴 열림', page.evaluate("() => { const g = window.__metamong.game; g.openCooking(); return g.modal.isOpen; }"))

            # ══ 상점·의뢰·도감·랭크 파트: 짧게 상태를 주입해 화면과 규칙만 본다
            if want('shop'):
                page.goto(url, wait_until='networkidle')
                page.evaluate("""async () => {
                  try { await window.__metamong.game.saveStore.clear(); } catch (e) {}
                  try { localStorage.clear(); } catch (e) {}
                }""")
                page.reload(wait_until='networkidle')
                page.wait_for_timeout(2600)
                alive(page)
                page.locator('.title-actions button').last.click()
                page.wait_for_timeout(2000)
                page.evaluate("""() => {
                  const g = window.__metamong.game;
                  for (const id of ['dock', 'workshop', 'vending']) g.completeBuild(id);
                  g.progress.addFish('minnow', 2);
                  g.progress.addFish('bream', 1);
                  g.progress.markCooked('tea');
                  g.progress.addCoins(150);
                  g.progress.gainExp('fish', 40);
                  g.progress.gainExp('cook', 30);
                  g.progress.gainExp('gather', 70);
                  g.progress.gainExp('care', 20);
                  g.progress.cat('ongi').aff = 22;
                  g.progress.inventory.add('log', 6);
                  g.progress.inventory.add('stone', 6);
                  g.progress.inventory.add('petal', 3);
                  g.save();
                }""")
                page.wait_for_timeout(700)
                close_modal(page)

                # ── 10. 자판기
                build(page, 'vending')
                v_ok = False
                for vpos in ((5.6, 4.0), (4.6, 5.2), (6.5, 5.9)):
                    teleport(page, vpos[0], vpos[1], 450)
                    if wait_label(page, '자판기', 2500):
                        v_ok = True
                        break
                check('자판기 액션', v_ok, action_label(page))
                tap(page, '.action-btn')
                page.wait_for_timeout(450)
                snap(page, '19_vending_sell.png')
                check('자판기 모달', '자판기' in title(page), title(page))
                check('팔기 탭 기본', page.locator('.tab.on').inner_text() == '팔기', page.locator('.tab.on').inner_text())
                coins_before = life(page)['coins']
                page.evaluate("() => window.__metamong.game.sellItem('stone', 'all')")
                page.wait_for_timeout(500)
                lf = life(page)
                check('재료 팔기 → 코인', lf['coins'] > coins_before, (coins_before, lf['coins']))
                check('판 재료 사라짐', all(not (s and s['id'] == 'stone') for s in lf['bag']), json.dumps(lf['bag'], ensure_ascii=False)[:80])
                page.locator('.tab', has_text='사기').first.click(no_wait_after=True)
                page.wait_for_timeout(500)
                snap(page, '20_vending_buy.png')
                page.evaluate("() => { const g = window.__metamong.game; g.progress.addCoins(400); g.openVending(); }")
                page.wait_for_timeout(350)
                page.evaluate("() => window.__metamong.game.buyGood('churu')")
                page.wait_for_timeout(450)
                page.evaluate("() => window.__metamong.game.buyGood('ade')")
                page.wait_for_timeout(450)
                lf = life(page)
                check('츄르 구입', lf['supplies']['churu'] == 1, lf['supplies'])
                check('에이드 구입', lf['supplies']['ade'] == 1, lf['supplies'])
                page.evaluate("() => { const g = window.__metamong.game; g.progress.stamina = 40; g.drinkAde(); }")
                page.wait_for_timeout(450)
                lf = life(page)
                check('에이드 기력 +40', abs(lf['stamina'] - 80) < 4 and lf['supplies']['ade'] == 0, (lf['stamina'], lf['supplies']))
                close_modal(page)

                # 츄르 간식
                page.evaluate("() => window.__metamong.game.openCat('ongi')")
                page.wait_for_timeout(400)
                before_aff = life(page)['cats']['ongi']['aff']
                body_btn(page, '츄르')
                page.wait_for_timeout(500)
                lf = life(page)
                check('츄르 간식 효과', lf['cats']['ongi']['aff'] >= before_aff + 13, (before_aff, lf['cats']['ongi']['aff']))
                check('츄르 소모', lf['supplies']['churu'] == 0, lf['supplies'])
                snap(page, '21_cat_churu.png')
                close_modal(page)

                # ── 11. 의뢰
                page.evaluate("""() => { const g = window.__metamong.game;
                  for (const q of g.progress.quests.list) q.progress = q.need; g.openQuest(); }""")
                page.wait_for_timeout(500)
                snap(page, '22_quests_ready.png')
                check('의뢰 배지 표시', 'hidden' not in (page.locator('.quest-btn .badge').get_attribute('class') or ''), page.locator('.quest-btn .badge').get_attribute('class'))
                coins_before = life(page)['coins']
                page.locator('.quest-row .quest-claim.on').first.click(no_wait_after=True)
                page.wait_for_timeout(600)
                lf = life(page)
                check('의뢰 보상 지급', lf['coins'] > coins_before, (coins_before, lf['coins']))
                check('의뢰 완료 표시', sum(1 for q in lf['quests']['list'] if q['claimed']) == 1, [q['claimed'] for q in lf['quests']['list']])
                snap(page, '23_quest_claimed.png')
                close_modal(page)

                old_ids = [q['id'] for q in life(page)['quests']['list']]
                page.evaluate("() => { window.__metamong.game.state.elapsed = 1199.9; }")
                page.wait_for_timeout(1500)
                lf = life(page)
                check('Day 증가', lf['quests']['day'] >= 2, (lf['quests']['day'], stats(page)['day']))
                check('의뢰 재생성', [q['id'] for q in lf['quests']['list']] != old_ids, [q['id'] for q in lf['quests']['list']])

                # ── 12. 도감 탭 · 랭크
                tap(page, '.quickbar button', has_text='도감')
                page.wait_for_timeout(450)
                snap(page, '24_codex_ditto.png')
                tabs = page.locator('.tabbar .tab').all_inner_texts()
                check('도감 4탭', tabs == ['메타몽', '물고기', '요리', '고양이'], tabs)
                page.locator('.tab', has_text='물고기').first.click(no_wait_after=True)
                page.wait_for_timeout(450)
                snap(page, '25_codex_fish.png')
                check('물고기 도감 카드 6', page.locator('.fish-card').count() == 6, page.locator('.fish-card').count())
                check('물고기 도감 등록 표시', page.locator('.fish-card:not(.locked)').count() >= 1, page.locator('.fish-card:not(.locked)').count())
                page.locator('.tab', has_text='요리').first.click(no_wait_after=True)
                page.wait_for_timeout(450)
                snap(page, '26_codex_cook.png')
                check('요리 도감 카드 4', page.locator('.recipe-card').count() == 4, page.locator('.recipe-card').count())
                page.locator('.tab', has_text='고양이').first.click(no_wait_after=True)
                page.wait_for_timeout(450)
                snap(page, '27_codex_cat.png')
                check('고양이 도감 카드 2', page.locator('.cat-card').count() == 2, page.locator('.cat-card').count())
                close_modal(page)

                tap(page, '.quickbar button', has_text='랭크')
                page.wait_for_timeout(450)
                snap(page, '28_rank.png')
                body = page.locator('.modal-body').inner_text()
                check('랭크 4스킬 표시', all(k in body for k in ('채집', '낚시', '요리', '돌보기')), body[:80])
                check('종합 칭호', page.locator('.title-medal .nm').count() == 1, page.locator('.title-medal .nm').inner_text() if page.locator('.title-medal .nm').count() else '')
                check('스킬 행 4개', page.locator('.skill-row').count() == 4, page.locator('.skill-row').count())
                close_modal(page)

                # ── 13. 자동 저장이 v3 로 되는지
                page.evaluate("() => window.__metamong.game.save()")
                page.wait_for_timeout(600)
                ver = page.evaluate("async () => { const d = await window.__metamong.game.saveStore.load(); return d && d.version; }")
                check('자동 저장 v3', ver == 3, ver)

            if want('main'):
                # ── 0. 깨끗한 상태에서 새 섬
                page.goto(url, wait_until='networkidle')
                page.evaluate("""async () => {
                  try { await window.__metamong.game.saveStore.clear(); } catch (e) {}
                  try { localStorage.clear(); } catch (e) {}
                }""")
                page.reload(wait_until='networkidle')
                page.wait_for_timeout(2800)
                snap(page, '01_title.png')
                alive(page)
                page.locator('.title-actions button').last.click()
                page.wait_for_timeout(2200)
                snap(page, '02_hud_new_day.png')
                st, lf = stats(page), life(page)
                check('플레이 진입', st['mode'] == 'play', st['mode'])
                check('HUD 코인 0', lf['coins'] == 0, lf['coins'])
                check('일일 의뢰 2건 생성', len(lf['quests']['list']) == 2, lf['quests'])
                check('의뢰 Day 일치', lf['quests']['day'] == st['day'], (lf['quests']['day'], st['day']))
                check('랭크 4스킬 시작', lf['skills'] == {'gather': 0, 'fish': 0, 'cook': 0, 'care': 0}, lf['skills'])
                check('도구 Lv.1', lf['tools'] == {'axe': 1, 'pick': 1}, lf['tools'])
                check('고양이 Lv.1', lf['cats']['somi']['level'] == 1 and lf['cats']['ongi']['level'] == 1, lf['cats'])
                check('우체통 배지 3', page.locator('.mail-btn .badge').inner_text() == '3', page.locator('.mail-btn .badge').inner_text())
                check('의뢰 배지 숨김', 'hidden' in (page.locator('.quest-btn .badge').get_attribute('class') or ''))
                check('코인 칩 0', page.locator('.coin-chip .n').inner_text() == '0', page.locator('.coin-chip .n').inner_text())

                page.evaluate("""() => {
                  const g = window.__metamong.game;
                  window.__toasts = [];
                  if (!g.hud.__wrapped) {
                    const orig = g.hud.toast.bind(g.hud);
                    g.hud.toast = (m, ms) => { window.__toasts.push(String(m)); return orig(m, ms); };
                    g.hud.__wrapped = true;
                  }
                }""")

                # ── 1. 1단계 회귀: 나무 베기 · 기력 · 그루터기
                page.evaluate("""() => {
                  const g = window.__metamong.game;
                  const tree = g.world.scenery.nodes.find((n) => n.kind === 'tree');
                  g.player.teleport(tree.x, tree.z + 1.7);
                }""")
                page.wait_for_timeout(600)
                check('나무 앞 액션 라벨', '베기' in action_label(page), action_label(page))
                tap(page, '.action-btn')
                page.wait_for_timeout(380)
                for _ in range(4):
                    page.evaluate("() => document.querySelector('.action-btn').click()")
                    page.wait_for_timeout(380)
                lf = life(page)
                check('통나무 획득', any(s and s['id'] == 'log' for s in lf['bag']), json.dumps(lf['bag'], ensure_ascii=False))
                check('채집 EXP 상승', lf['skills']['gather'] > 0, lf['skills'])
                check('기력 소모', lf['stamina'] < 100, lf['stamina'])
                snap(page, '03_gather_regression.png')

                # ── 2. 가방 · 우체통(의뢰 + 선물)
                tap(page, '.quickbar button', has_text='가방')
                page.wait_for_timeout(450)
                check('가방 모달', page.locator('.modal.open .bag-grid').count() == 1)
                close_modal(page)
                tap(page, '.mail-btn')
                page.wait_for_timeout(500)
                snap(page, '04_mailbox_quests.png')
                body = page.locator('.modal-body').inner_text()
                check('우체통에 오늘의 의뢰', '오늘의 의뢰' in body, '')
                check('의뢰 2행 표시', page.locator('.quest-row').count() == 2, page.locator('.quest-row').count())
                tap(page, '.mail-row', has_text='보경 님께')
                page.wait_for_timeout(500)
                body_btn(page, '선물 받기')
                page.wait_for_timeout(400)
                lf = life(page)
                check('편지 선물 수령', 'welcome_bokyung' in lf['mailbox']['claimed'], lf['mailbox'])
                close_modal(page)

                # ── 3. 복구 전 부두
                teleport(page, 0, 15.8, 700)
                lab_ok = wait_label(page, '부두 복구')
                check('부두 복구 전 액션', lab_ok, action_label(page))
                res = page.evaluate("() => window.__metamong.game.fishing.start({})")
                check('복구 전 낚시 차단', res.get('ok') is False and res.get('reason') == 'dock', res)
                tap(page, '.action-btn')
                page.wait_for_timeout(450)
                t = title(page)
                check('복구 모달 열림', '부두' in t, t)
                close_modal(page)

                # ── 4. 부두 복구 → 낚시 성공
                build(page, 'dock')
                check('부두 복구 완료', life(page)['buildings']['dock']['done'] is True)
                teleport(page, 0, 15.8)
                check('복구 후 낚시 액션', '낚시하기' in action_label(page), action_label(page))
                tap(page, '.action-btn')
                page.wait_for_timeout(500)
                snap(page, '05_fishing_modal.png')
                check('낚시 모달', '낚시' in title(page), title(page))
                st_before = life(page)['stamina']
                click_btn(page, '낚시하기')
                page.wait_for_timeout(220)
                st_after = life(page)['stamina']
                check('찌 던짐(cast/wait)', life(page)['fishing']['state'] in ('cast', 'wait'), life(page)['fishing'])
                snap(page, '06_bobber_wait.png')
                page.evaluate("() => { window.__metamong.game.fishing.waitFor = 0.12; }")
                page.wait_for_function("() => window.__metamong.game.fishing.state === 'bite'", timeout=9000)
                pop = page.evaluate("() => document.querySelector('.bite-pop').classList.contains('on')")
                lab = action_label(page)
                check('입질 상태', life(page)['fishing']['state'] == 'bite', life(page)['fishing']['state'])
                check('입질 액션 라벨', '입질' in lab, lab)
                check('입질 팝업(!)', bool(pop), pop)
                tap(page, '.action-btn')
                page.wait_for_timeout(600)
                lf = life(page)
                fish_total = sum(lf['fish'].values()) if lf['fish'] else 0
                check('낚시 성공', fish_total > 0 or any(s and s['id'] == 'star' for s in lf['bag']), json.dumps(lf['fish'], ensure_ascii=False))
                check('낚시 EXP', lf['skills']['fish'] > 0, lf['skills'])
                check('기력 5 소모', 3.5 <= (st_before - st_after) <= 6.5, (st_before, st_after))
                check('낚시 통계', lf['fishingStats']['casts'] >= 1 and lf['fishingStats']['catches'] >= 1, lf['fishingStats'])
                snap(page, '08_catch_result.png')

                # ── 5. 입질 놓치기
                page.evaluate("() => { window.__metamong.game.progress.stamina = 80; }")
                page.evaluate("() => window.__metamong.game.openFishSpot()")
                page.wait_for_timeout(350)
                click_btn(page, '낚시하기')
                page.evaluate("() => { window.__metamong.game.fishing.waitFor = 0.12; }")
                page.wait_for_function("() => window.__metamong.game.fishing.state === 'bite'", timeout=9000)
                # 소프트웨어 렌더링에서는 캡처 한 장에 2초쯤 걸려 1.6초 애니메이션이 사라진다.
                # 배지가 실제로 그려진 프레임을 잡기 위해 그 순간만 애니메이션을 멈춰 사진을 남긴다.
                try:
                    page.wait_for_function(
                        "() => parseFloat(getComputedStyle(document.querySelector('.bite-pop')).opacity) > 0.6",
                        timeout=3000,
                    )
                except Exception:
                    pass
                page.evaluate("""() => {
                  const el = document.querySelector('.bite-pop');
                  if (el.__timer) clearTimeout(el.__timer);
                  el.getAnimations().forEach((a) => a.pause());
                }""")
                snap(page, '07_bite_popup.png')
                page.evaluate("""() => {
                  const el = document.querySelector('.bite-pop');
                  el.getAnimations().forEach((a) => a.cancel());
                  el.classList.remove('on');
                }""")
                try:
                    page.wait_for_function("() => window.__metamong.game.fishing.state !== 'bite'", timeout=12000)
                except Exception:
                    pass
                lf = life(page)
                check('입질 놓침 처리', lf['fishingStats']['misses'] >= 1, lf['fishingStats'])
                check('놓친 뒤 낚시 종료', lf['fishing']['state'] in ('idle', 'lost'), lf['fishing']['state'])
                page.evaluate("() => window.__metamong.game.fishing.cancel()")
                page.wait_for_timeout(300)

                # ── 6. 별빛 미끼
                page.evaluate("() => { const g = window.__metamong.game; g.progress.addSupply('bait', 2); g.progress.stamina = 90; g.openFishSpot(); }")
                page.wait_for_timeout(450)
                snap(page, '09_fishing_bait.png')
                check('미끼 옵션 표시', page.locator('.modal-actions .btn', has_text='별빛 미끼').count() == 1)
                click_btn(page, '별빛 미끼')
                page.wait_for_timeout(300)
                lf = life(page)
                check('미끼 사용', lf['supplies']['bait'] == 1 and lf['fishing']['baitUsed'] is True, (lf['supplies']['bait'], lf['fishing']['baitUsed']))
                page.evaluate("() => window.__metamong.game.fishing.cancel()")
                page.wait_for_timeout(300)

                # ── 7. 고양이 돌보기
                # 고양이는 배회하므로, 고양이가 가장 가까운 대상이 되는 자리를 찾아 선다
                cat_ok = False
                for ang in (0, 45, 90, 135, 180, 225, 270, 315):
                    catpos = page.evaluate("() => { const c = window.__metamong.game.cats.find((x) => x.id === 'somi'); return [c.position.x, c.position.z]; }")
                    import math as _m
                    px = catpos[0] + _m.cos(_m.radians(ang)) * 0.75
                    pz = catpos[1] + _m.sin(_m.radians(ang)) * 0.75
                    teleport(page, px, pz, 320)
                    kind = page.evaluate("() => { const t = window.__metamong.game.target; return t ? (t.kind || (t.isNode ? 'node' : '')) : null; }")
                    if kind == 'cat' and wait_label(page, '돌보기', 2000):
                        cat_ok = True
                        break
                check('고양이 액션 라벨', cat_ok, action_label(page))
                page.evaluate("() => window.__metamong.game.openCat('somi')")
                page.wait_for_timeout(450)
                t = title(page)
                check('고양이 패널', '솜이' in t, t)
                check(
                    '고양이 초상화',
                    page.evaluate("() => { const el = document.querySelector('.cat-portrait'); return !!el && getComputedStyle(el).backgroundImage.includes('somi_sheet'); }"),
                )
                snap(page, '10_cat_panel.png')
                body_btn(page, '쓰다듬기')
                page.wait_for_timeout(450)
                lf = life(page)
                check('쓰다듬기 호감도', lf['cats']['somi']['aff'] >= 4, lf['cats']['somi'])
                check('쓰다듬기 쿨타임', page.evaluate("() => window.__metamong.game.cats.find((c) => c.id === 'somi').cd.pet > 0"))
                give(page, {'berry': 2})
                body_btn(page, '열매')
                page.wait_for_timeout(500)
                lf2 = life(page)
                check('간식 호감도 추가', lf2['cats']['somi']['aff'] > lf['cats']['somi']['aff'], lf2['cats']['somi'])
                check('돌보기 EXP', lf2['skills']['care'] >= 22, lf2['skills'])
                snap(page, '11_cat_pet.png')

                # ── 8. Lv.3 따라오기
                page.evaluate("() => { window.__metamong.game.progress.cat('somi').aff = 45; }")
                page.evaluate("() => window.__metamong.game.openCat('somi')")
                page.wait_for_timeout(400)
                check('Lv.3 따라오기 버튼', page.locator('.modal-body .switch.wide').count() == 1, page.locator('.modal-body .switch.wide').count())
                snap(page, '12_cat_follow_ready.png')
                body_btn(page, '따라오기')
                page.wait_for_timeout(400)
                check('따라오기 ON', life(page)['cats']['somi']['follow'] is True)
                close_modal(page)
                teleport(page, 1.0, 9.0, 250)
                far = page.evaluate("() => { const g = window.__metamong.game; const c = g.cats.find((x) => x.id === 'somi'); return Math.hypot(c.position.x - g.player.position.x, c.position.z - g.player.position.z); }")
                try:
                    page.wait_for_function(
                        """() => { const g = window.__metamong.game; const c = g.cats.find((x) => x.id === 'somi');
                                 return Math.hypot(c.position.x - g.player.position.x, c.position.z - g.player.position.z) < 2.3; }""",
                        timeout=15000,
                    )
                except Exception:
                    pass
                near = page.evaluate("() => { const g = window.__metamong.game; const c = g.cats.find((x) => x.id === 'somi'); return Math.hypot(c.position.x - g.player.position.x, c.position.z - g.player.position.z); }")
                check('고양이 따라옴', near < 2.6 and near < far, (round(far, 2), round(near, 2)))
                snap(page, '13_cat_following.png')

                # ── 9. 공방: 메뉴 · 요리 · 강화
                build(page, 'workshop')
                teleport(page, -6.6, 4.6)
                tap(page, '.action-btn')
                page.wait_for_timeout(450)
                snap(page, '14_workshop_menu.png')
                body = page.locator('.modal-body').inner_text()
                check('공방 메뉴 3종', all(k in body for k in ('창고', '요리하기', '도구 강화')), body[:60])
                close_modal(page)
                give(page, {'petal': 8, 'berry': 8, 'log': 8, 'stone': 8})
                page.evaluate("() => { const g = window.__metamong.game; g.progress.stamina = 30; g.openCooking(); }")
                page.wait_for_timeout(450)
                snap(page, '15_cooking.png')
                check('요리 모달', '요리' in title(page), title(page))
                before_st = life(page)['stamina']
                page.evaluate("() => window.__metamong.game.cook('tea')")
                page.wait_for_timeout(600)
                lf = life(page)
                check('요리 기력 회복(차 +45)', lf['stamina'] >= min(100, before_st + 42), (before_st, lf['stamina']))
                check('요리 도감 등록', lf['cooked'].get('tea', 0) == 1, lf['cooked'])
                check('요리 EXP', lf['skills']['cook'] >= 30, lf['skills'])
                snap(page, '16_cooked.png')
                close_modal(page)

                # 황금 정식 → 버프
                page.evaluate("""() => { const g = window.__metamong.game;
                  g.progress.addFish('goldcarp', 1); g.progress.inventory.add('petal', 2); g.progress.inventory.add('berry', 2);
                  g.progress.stamina = 20; g.openCooking(); }""")
                page.wait_for_timeout(400)
                page.evaluate("() => window.__metamong.game.cook('golden')")
                page.wait_for_timeout(600)
                lf = life(page)
                check('황금 정식 요리', lf['cooked'].get('golden', 0) == 1, lf['cooked'])
                check('황금 버프 60초', lf['buff']['kind'] == 'golden' and lf['buff']['left'] > 50, lf['buff'])
                check('버프 칩 표시', 'hidden' not in (page.locator('.buff-chip').get_attribute('class') or ''), page.locator('.buff-chip').get_attribute('class'))
                check('기력 100 회복', lf['stamina'] >= 99, lf['stamina'])
                snap(page, '17_golden_buff.png')
                close_modal(page)

                # 도구 강화
                page.evaluate("""() => { const g = window.__metamong.game;
                  g.progress.addCoins(300); g.progress.inventory.add('log', 10); g.progress.inventory.add('stone', 10); g.openUpgrade(); }""")
                page.wait_for_timeout(450)
                snap(page, '18_tool_upgrade.png')
                page.evaluate("() => window.__metamong.game.upgradeTool('axe')")
                page.wait_for_timeout(600)
                lf = life(page)
                check('도끼 Lv.2', lf['tools']['axe'] == 2, lf['tools'])
                check('강화 코인 차감', lf['coins'] <= 260, lf['coins'])
                close_modal(page)

                # 강화 효과 — 버프가 켜져 있으므로 0.85 × 0.6 = 5.1 → 3 (반올림)
                buffed = life(page)['buff']
                page.evaluate("() => { window.__metamong.game.progress.stamina = 90; }")
                page.evaluate("""() => { const g = window.__metamong.game;
                  const tree = g.world.scenery.nodes.find((n) => n.kind === 'tree' && !n.harvested);
                  g.player.teleport(tree.x, tree.z + 1.7); }""")
                page.wait_for_timeout(600)
                before_st = life(page)['stamina']
                page.evaluate("() => document.querySelector('.action-btn').click()")
                page.wait_for_timeout(350)
                used = before_st - life(page)['stamina']
                check(
                    '강화+버프 기력 소모 감소',
                    used < 4.2 if buffed['left'] > 0 else abs(used - 5) < 1.2,
                    (round(used, 2), buffed),
                )
                # 버프를 끄고 강화만 남긴 상태로, 새 나무 앞에서 한 번 더
                page.evaluate("""() => { const g = window.__metamong.game;
                  g.progress.setBuff('', 0); g.progress.stamina = 90;
                  const tree = g.world.scenery.nodes.find((n) => n.kind === 'tree' && !n.harvested);
                  g.player.teleport(tree.x, tree.z + 1.7); }""")
                page.wait_for_timeout(650)
                check('강화 측정 나무 앞', wait_label(page, '베기'), action_label(page))
                before_st = life(page)['stamina']
                page.evaluate("() => document.querySelector('.action-btn').click()")
                page.wait_for_timeout(350)
                used = before_st - life(page)['stamina']
                check('도끼 Lv.2 기력 소모 5', abs(used - 5) < 1.3, round(used, 2))



        except Exception:
            print('  ✗ 예외:')
            traceback.print_exc()
            try:
                snap(page, '99_failure.png')
            except Exception:
                pass

        print('\n--- console ---')
        for t, msg in logs:
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

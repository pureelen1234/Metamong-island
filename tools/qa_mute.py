#!/usr/bin/env python3
"""음소거·BGM 실측 QA — 390×844 세로 뷰포트.

① 음소거 버튼 클릭 전/후로 AmbientSound.muted · master.gain · AudioContext.state 를 확인하고,
   master 뒤 AnalyserNode 로 '실제로 스피커로 나가는 신호'의 피크·RMS 를 잰다(BGM·효과음 각각).
② AudioNode.connect 를 가로채 오디오 그래프를 기록해, ctx.destination 에 직결된 노드가
   컴프레서 하나뿐인지(=마스터 게인을 우회하는 소리가 없는지) 코드+런타임으로 감사한다.
③ 음소거 중 canvas 탭·가시성 복귀(resume 경로)로 소리가 되살아나지 않는지 확인한다.
④ 새로고침(이어하기) 후에도 음소거가 유지되는지 확인한다.
⑤ 새 BGM 의 국면별(아침·낮·노을·밤·방어전) 세기를 재서 '째지 않고 은은한지' 수치로 남긴다.
사용: python3 tools/qa_mute.py
"""
import json
import os
import sys

from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from browser_env import STUB  # noqa: F401,E402  (ATK 스텁 경로 보정)
import serve_dist  # noqa: E402

ROOT = os.path.abspath(os.path.join(HERE, '..'))
OUT = os.path.join(ROOT, 'screenshots', 'mute')
os.makedirs(OUT, exist_ok=True)

problems = []
logs, errors = [], []


def check(ok, msg):
    if not ok:
        problems.append(msg)
    print(('  ✅ ' if ok else '  ❌ ') + msg)


# ── 오디오 그래프 기록기(페이지 스크립트보다 먼저 심는다)
GRAPH_INIT = """
window.__graph = [];
window.__nodeIds = new WeakMap();
window.__nodeSeq = 0;
const nid = (n) => {
  if (!n || typeof n !== 'object') return String(n);
  if (!window.__nodeIds.has(n)) window.__nodeIds.set(n, ++window.__nodeSeq);
  return window.__nodeIds.get(n);
};
const nameOf = (n) => (n && n.constructor && n.constructor.name) || String(n);
if (window.AudioNode) {
  const orig = AudioNode.prototype.connect;
  AudioNode.prototype.connect = function (dst, ...rest) {
    try {
      window.__graph.push({
        src: nameOf(this), srcId: nid(this),
        dst: dst instanceof AudioDestinationNode ? 'destination' : nameOf(dst), dstId: nid(dst),
      });
    } catch (e) {}
    return orig.call(this, dst, ...rest);
  };
}
"""

MEASURE = """async (ms) => {
  const a = window.__metamong.audio;
  const ctx = a.ctx;
  if (!ctx) return { error: 'no ctx' };
  if (ctx.state !== 'running' && !a.muted) { try { await ctx.resume(); } catch (e) {} }
  if (!window.__an) {
    const an = ctx.createAnalyser();
    an.fftSize = 2048;
    a.master.connect(an);          // master → analyser (destination 으로는 가지 않는다)
    window.__an = an;
    window.__buf = new Float32Array(an.fftSize);
  }
  const an = window.__an, buf = window.__buf;
  let peak = 0, sum = 0, n = 0;
  const t0 = performance.now();
  await new Promise((res) => {
    const step = () => {
      an.getFloatTimeDomainData(buf);
      for (let i = 0; i < buf.length; i++) {
        const v = Math.abs(buf[i]);
        if (v > peak) peak = v;
        sum += v * v; n++;
      }
      if (performance.now() - t0 > ms) res(); else setTimeout(step, 25);
    };
    step();
  });
  return {
    state: ctx.state,
    muted: a.muted,
    masterGain: +a.master.gain.value.toFixed(4),
    peak: +peak.toFixed(5),
    rms: +Math.sqrt(sum / Math.max(1, n)).toFixed(5),
    started: a.started,
    phase: a.phase,
    timer: !!a.timer,
  };
}"""

STATE = """() => {
  const a = window.__metamong.audio;
  const g = window.__metamong.game;
  const btn = document.querySelector('.hud-controls .icon-btn');
  return {
    muted: a.muted,
    masterGain: a.master ? +a.master.gain.value.toFixed(4) : null,
    state: a.ctx ? a.ctx.state : null,
    timer: !!a.timer,
    settingMuted: !!(g && g.state && g.state.settings && g.state.settings.muted),
    icon: btn ? btn.textContent : null,
    ariaPressed: btn ? btn.getAttribute('aria-pressed') : null,
  };
}"""

GRAPH = """() => {
  const g = window.__graph || [];
  const toDest = g.filter((e) => e.dst === 'destination');
  return {
    total: g.length,
    toDest,
    // 오실레이터·버퍼가 마스터를 거치지 않고 destination 으로 간 흔적
    bypass: g.filter((e) => e.dst === 'destination' && !['DynamicsCompressorNode'].includes(e.src)),
  };
}"""


def run():
    httpd, port = serve_dist.start(os.path.join(ROOT, 'dist'))
    url = f'http://127.0.0.1:{port}/'
    print('serving', url)
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(args=['--use-gl=angle', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'])
            ctx = browser.new_context(
                viewport={'width': 390, 'height': 844},
                device_scale_factor=2,
                is_mobile=True,
                has_touch=True,
                user_agent='Mozilla/5.0 (Linux; Android 14; SM-S911N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Mobile Safari/537.36',
                service_workers='block',
            )
            page = ctx.new_page()
            page.set_default_timeout(20000)
            page.add_init_script(GRAPH_INIT)
            page.on('console', lambda m: logs.append((m.type, m.text)))
            page.on('pageerror', lambda e: errors.append(str(e)))
            page.goto(url, wait_until='networkidle')
            page.wait_for_timeout(2500)
            page.locator('.title-actions button').last.click(no_wait_after=True)
            page.wait_for_timeout(2500)
            page.mouse.click(195, 700)  # 제스처(오디오 resume)
            page.wait_for_timeout(300)

            print('\n[1] 음소거 전 BGM')
            before = page.evaluate(MEASURE, 2400)
            print('  ', json.dumps(before, ensure_ascii=False))
            check(before.get('state') == 'running', f"AudioContext state={before.get('state')}")
            check(before.get('peak', 0) > 0.005, f"음소거 전 BGM 피크 {before.get('peak')} (들리는 소리 있음)")
            # 마스터 출력이 컴프레서 문턱(0.1) 아래 → 클리핑 없이 은은하게 들리는 대역
            check(before.get('peak', 1) < 0.1, f"음소거 전 BGM 피크 {before.get('peak')} (0.1 미만 · 클리핑 없음)")
            page.screenshot(path=os.path.join(OUT, '01_before.png'))

            print('\n[2] 상단 음소거 버튼 클릭')
            st0 = page.evaluate(STATE)
            page.locator('.hud-controls .icon-btn').first.click(no_wait_after=True)
            page.wait_for_timeout(160)
            st1 = page.evaluate(STATE)
            print('  click 전:', json.dumps(st0, ensure_ascii=False))
            print('  click 후:', json.dumps(st1, ensure_ascii=False))
            check(st1['settingMuted'] is True, '게임 설정 settings.muted 가 true')
            check(st1['icon'] == '🔇', f"버튼 아이콘 {st1['icon']} (🔇 기대)")
            check(st1['ariaPressed'] == 'true', f"aria-pressed={st1['ariaPressed']}")
            check(not st1['timer'], '음소거 시 음 스케줄러 타이머 정지')

            after = page.evaluate(MEASURE, 2200)
            print('  ', json.dumps(after, ensure_ascii=False))
            check(after.get('muted') is True, f"AmbientSound.muted={after.get('muted')}")
            check(after.get('masterGain', 1) == 0, f"master.gain={after.get('masterGain')} (0 기대)")
            check(after.get('state') == 'suspended', f"AudioContext.state={after.get('state')} (suspended 기대)")
            check(after.get('peak', 1) == 0, f"음소거 후 BGM 피크 {after.get('peak')} (완전 무음 기대)")
            page.screenshot(path=os.path.join(OUT, '02_muted.png'))

            print('\n[3] 음소거 중 효과음')
            sfx = page.evaluate("""async () => {
              const a = window.__metamong.audio;
              const ctx = a.ctx;
              const an = window.__an, buf = window.__buf;
              const out = {};
              for (const name of ['sfxPickup', 'sfxHit', 'sfxFanfare', 'sfxCoin', 'sfxMeow', 'sfxBite']) {
                let peak = 0;
                try { a[name]('wood'); } catch (e) {}
                const t0 = performance.now();
                await new Promise((res) => {
                  const step = () => {
                    an.getFloatTimeDomainData(buf);
                    for (let i = 0; i < buf.length; i++) peak = Math.max(peak, Math.abs(buf[i]));
                    if (performance.now() - t0 > 600) res(); else setTimeout(step, 20);
                  };
                  step();
                });
                out[name] = +peak.toFixed(5);
              }
              return out;
            }""")
            print('  ', json.dumps(sfx, ensure_ascii=False))
            worst = max(sfx.values()) if sfx else 1
            check(worst == 0, f'음소거 중 효과음 최대 피크 {worst} (완전 무음 기대)')

            print('\n[4] 음소거 중 화면 탭·복귀(resume 경로)로 소리가 되살아나는지')
            page.mouse.click(195, 620)  # canvas 탭 → audio.resume()
            page.wait_for_timeout(400)
            page.evaluate("document.dispatchEvent(new Event('visibilitychange'))")
            page.wait_for_timeout(600)
            revived = page.evaluate(STATE)
            rv = page.evaluate(MEASURE, 1500)
            print('  ', json.dumps(revived, ensure_ascii=False), json.dumps(rv, ensure_ascii=False))
            check(revived['state'] == 'suspended' and rv.get('peak') == 0, ' 탭·복귀 후에도 suspended·무음 유지')

            print('\n[5] 음소거 해제')
            page.locator('.hud-controls .icon-btn').first.click(no_wait_after=True)
            page.wait_for_timeout(250)
            st2 = page.evaluate(STATE)
            unmuted = page.evaluate(MEASURE, 2600)
            print('  ', json.dumps(st2, ensure_ascii=False))
            print('  ', json.dumps(unmuted, ensure_ascii=False))
            check(st2['muted'] is False, '음소거 해제 상태 반영')
            check(st2['state'] == 'running' and st2['timer'], '해제 시 컨텍스트·스케줄러 재가동')
            check(unmuted.get('peak', 0) > 0.005, f"해제 후 BGM 피크 {unmuted.get('peak')} (다시 들림)")

            print('\n[6] 국면별 BGM 세기 (째지 않는지)')
            levels = {}
            for ph in ['morning', 'day', 'sunset', 'night', 'battle']:
                page.evaluate(f"window.__metamong.audio.setPhase('{ph}')")
                page.wait_for_timeout(2600)
                m = page.evaluate(MEASURE, 2000)
                levels[ph] = {'peak': m.get('peak'), 'rms': m.get('rms'), 'phase': m.get('phase')}
                print(f"  · {ph}: peak={m.get('peak')} rms={m.get('rms')}")
            check(all(v['peak'] < 0.1 for v in levels.values()), f'모든 국면 피크 0.1 미만 {levels}')
            check(all(v['peak'] > 0.002 for v in levels.values()), f'모든 국면에서 소리가 남아 있음 {levels}')

            # 스펙트럼 — 4kHz 위 에너지가 충분히 낮아야 '째지 않는다'
            spec = page.evaluate("""async () => {
              const a = window.__metamong.audio;
              const ctx = a.ctx;
              const an = ctx.createAnalyser();
              an.fftSize = 4096;
              an.smoothingTimeConstant = 0.2;
              a.master.connect(an);
              const bins = new Float32Array(an.frequencyBinCount);
              const nyq = ctx.sampleRate / 2;
              const bands = { '0-500': [0, 500], '500-1k': [500, 1000], '1-2.4k': [1000, 2400], '2.4-4k': [2400, 4000], '4k+': [4000, nyq] };
              const acc = {};
              let n = 0;
              const t0 = performance.now();
              await new Promise((res) => {
                const step = () => {
                  an.getFloatFrequencyData(bins);
                  for (const [k, [lo, hi]] of Object.entries(bands)) {
                    let m = -Infinity;
                    for (let i = 0; i < bins.length; i++) {
                      const f = (i / bins.length) * nyq;
                      if (f >= lo && f < hi && bins[i] > m) m = bins[i];
                    }
                    acc[k] = Math.max(acc[k] === undefined ? -Infinity : acc[k], m);
                  }
                  n++;
                  if (performance.now() - t0 > 2500) res(); else setTimeout(step, 30);
                };
                step();
              });
              a.master.disconnect(an);
              const out = {};
              for (const k of Object.keys(bands)) out[k] = +Number(acc[k]).toFixed(1);
              return out;
            }""")
            print('  스펙트럼(dB):', json.dumps(spec, ensure_ascii=False))
            check(spec.get('4k+', 0) < spec.get('0-500', -100) - 18, f"4kHz 위 에너지가 저역보다 18dB 이상 낮음 {spec}")
            page.evaluate("window.__metamong.audio.setPhase('morning')")

            print('\n[7] 새로고침(이어하기) 후 음소거 유지')
            page.locator('.hud-controls .icon-btn').first.click(no_wait_after=True)
            page.wait_for_timeout(500)
            page.evaluate('window.__metamong.game.save()')
            page.wait_for_timeout(500)
            page.reload(wait_until='networkidle')
            page.wait_for_timeout(2600)
            has_continue = page.locator('.title-actions .btn.primary').count() > 0
            if has_continue:
                page.locator('.title-actions .btn.primary').first.click(no_wait_after=True)  # 이어하기
            else:
                page.locator('.title-actions button').last.click(no_wait_after=True)
            page.wait_for_timeout(2600)
            st3 = page.evaluate(STATE)
            print('  ', json.dumps(st3, ensure_ascii=False))
            check(st3['muted'] is True and st3['settingMuted'] is True, '새로고침 후에도 음소거 유지')
            check(st3['icon'] == '🔇', f"새로고침 후 아이콘 {st3['icon']}")
            check(st3['state'] == 'suspended' and st3['masterGain'] == 0,
                  f"새로고침 후 state={st3['state']} gain={st3['masterGain']}")
            page.screenshot(path=os.path.join(OUT, '03_after_reload_muted.png'))

            print('\n[8] 오디오 그래프 감사 — 마스터를 우회해 destination 으로 가는 소리')
            page.locator('.hud-controls .icon-btn').first.click(no_wait_after=True)
            page.wait_for_timeout(800)
            graph = page.evaluate(GRAPH)
            print('  총 연결', graph['total'], '· destination 직결', graph['toDest'])
            check(len(graph['toDest']) >= 1, 'destination 에 연결된 출력이 있음')
            check(not graph['bypass'], f"컴프레서를 거치지 않는 직결 {graph['bypass']}")
            dest_srcs = {e['src'] for e in graph['toDest']}
            check(dest_srcs == {'DynamicsCompressorNode'}, f'destination 입력 = {dest_srcs} (컴프레서만 기대)')

            check(not errors, f'페이지 에러 {errors[:3]}')
            browser.close()
    finally:
        httpd.shutdown()

    print('\n로그(경고/에러):', [l for l in logs if l[0] == 'error'][:5])
    print('\n── 결과:', 'PASS' if not problems else f'FAIL ({len(problems)})')
    for pr in problems:
        print('  ·', pr)
    return 0 if not problems else 1


if __name__ == '__main__':
    sys.exit(run())

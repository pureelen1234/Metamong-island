#!/usr/bin/env python3
"""
tools/browser_env.py — QA 브라우저 실행 환경 보정

이 작업 환경에는 Chromium 이 필요로 하는 접근성 라이브러리(libatk-1.0 · libatk-bridge-2.0 ·
libatspi)가 없다. `tools/atk_stub/` 에 최소 스텁(.so)을 두고 LD_LIBRARY_PATH 로 먼저 찾게 해
헤드리스 크로미움이 뜨도록 한다(헤드리스에서는 ATK 를 실제로 호출하지 않는다).
스텁이 없으면 아무것도 하지 않는다 — 정상 환경에서는 그대로 동작한다.
"""
import os

HERE = os.path.dirname(os.path.abspath(__file__))
STUB = os.path.join(HERE, 'atk_stub')
if os.path.isdir(STUB):
    cur = os.environ.get('LD_LIBRARY_PATH', '')
    if STUB not in cur.split(':'):
        os.environ['LD_LIBRARY_PATH'] = f'{STUB}:{cur}' if cur else STUB

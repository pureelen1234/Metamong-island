#!/usr/bin/env python3
"""
tools/serve_dist.py — QA 용 정적 서버 (테스트 스크립트가 thread 로 띄운다)

vite preview 를 별도 프로세스로 유지할 수 없는 환경에서, dist/ 를 그대로 서빙한다.
base 가 './' 라서 디렉터리 인덱스만 있으면 index.html 과 해시 자산이 모두 동작한다.
"""
import functools
import http.server
import socketserver
import threading


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, fmt, *args):  # QA 로그를 조용하게
        pass


def start(directory, port=0):
    """@returns (httpd, port) — 호출한 쪽에서 httpd.shutdown() 으로 닫는다"""
    handler = functools.partial(QuietHandler, directory=directory)
    httpd = socketserver.ThreadingTCPServer(('127.0.0.1', port), handler)
    httpd.daemon_threads = True
    thread = threading.Thread(target=httpd.serve_forever, daemon=True)
    thread.start()
    return httpd, httpd.server_address[1]

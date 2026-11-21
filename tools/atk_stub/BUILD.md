# ATK 스텁 (QA 환경용)

이 폴더의 `libatk-1.0.so.0` · `libatk-bridge-2.0.so.0` · `libatspi.so.0` 는
**접근성 라이브러리가 없는 리눅스 컨테이너에서 헤드리스 크로미움을 띄우기 위한 최소 스텁**입니다.
`atk_stub.c` 에 크로미움 바이너리가 참조하는 `atk_*` · `atspi_*` 심볼을 전부 `NULL` 반환 함수로 정의했고,
헤드리스 모드에서는 ATK 를 실제로 호출하지 않으므로 로딩만 통과하면 됩니다.

`tools/browser_env.py` 가 이 폴더를 `LD_LIBRARY_PATH` 앞에 붙입니다(없으면 아무 일도 하지 않음).

다시 만들려면(심볼 목록을 새 크로미움에 맞출 때):

```bash
# zig cc (또는 gcc) 로 스텁 라이브러리 빌드
zig cc -shared -fPIC -O2 -o tools/atk_stub/libatk-1.0.so.0 tools/atk_stub/atk_stub.c
cp tools/atk_stub/libatk-1.0.so.0 tools/atk_stub/libatk-bridge-2.0.so.0
cp tools/atk_stub/libatk-1.0.so.0 tools/atk_stub/libatspi.so.0
```

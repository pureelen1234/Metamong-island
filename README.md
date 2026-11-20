# 🏝️ 어설픈 메타몽 섬 — Phase 1 (HD-2D 도트 · 20분 루프 MVP)

보경 님을 위한 몽글몽글 파스텔 힐링 아일랜드. 기획서 GDD v1.6의 **Phase 1**을 모바일 웹(PWA)로 구현한 빌드입니다.

> **2026-11-20 HD-2D 도트 전환** — 3D 도형 조립식 액터/프롭을 걷어내고, AI로 뽑은 도트 아틀라스(`downloads/metamong_assets/pixel/`)를 **투명 PNG 빌보드 스프라이트**로 얹었습니다. 바닥은 파스텔 2.5D 섬 지형(잔디·모래사장·흙길·반짝이는 바다) 그대로 두고, 그 위에 주인공·고양이·메타몽·건물·자연물이 도트로 서 있습니다. 도트가 뭉개지지 않도록 스프라이트 텍스처는 **전부 `THREE.NearestFilter` + 밉맵 없음**입니다.
>
> 이전 3D 버전은 `projects/metamong-island-3d-backup/`(폴더 통째 백업)과 git 브랜치 **`backup-3d-p0`**(= `9cfd25a`, 원격 푸시됨)으로 남겨 두었습니다.

## HD-2D 렌더링 구조

| 요소 | 구현 |
| --- | --- |
| 바닥 | 기존 `Terrain`(48×48 높이맵, `MeshToonMaterial` + 4단 램프) 유지. 잔디에 밝기만 흔드는 **도트 디테일 텍스처**를 곱해 넓은 들판이 밋밋하지 않게 함 |
| 오솔길 | `world/Path.js` — 부두→광장→공방·자판기·등대를 잇는 Catmull-Rom 리본. 지형 높이를 따라가고, 가장자리는 알파 그라디언트로 잔디에 자연스럽게 녹아듦 |
| 스프라이트 | `sprites/Billboard.js` — `PlaneGeometry` 원점을 **발밑 중앙**으로 옮겨 지형 위에 세우고, 카메라를 향해 **Y축으로만** 회전(눕지 않는 HD-2D 빌보드) |
| 픽셀 선명도 | `sprites/atlas.js` — `magFilter = minFilter = THREE.NearestFilter`, `generateMipmaps = false`, `SRGBColorSpace`. 재질은 `alphaTest 0.45` 컷아웃이라 **흰 사각형 배경이 남지 않음** |
| 그림자 | 캐릭터·소품 발밑에 부드러운 반투명 타원(`blobShadow`), 건물·나무에도 접지 그림자. 지형은 방향광 섀도맵을 그대로 받음 |
| 시간대 | 스프라이트는 조명을 받지 않는 `MeshBasicMaterial`이므로, 낮/노을/밤 팔레트에서 계산한 색을 매 프레임 곱해 준다(`World.spriteLight`) — 밤에는 보랏빛으로 가라앉음 |

### 액터 애니메이션

| 액터 | 아틀라스 | 사용 프레임 |
| --- | --- | --- |
| 주인공 | `protagonist` 4×4 | 1행 정면 걷기 4 · 2행 뒷면 걷기 4 · 3행 옆모습 걷기 4(오른쪽 이동은 좌우 반전) · 4행 대기/손흔들기/반대손 흔들기/점프 |
| 솜이 · 옹이 | `somi` · `ongi` 4×5 | 정면·뒷면·왼쪽·오른쪽 걷기 각 4 + 앉기·식빵·그루밍·신남 |
| 기본 메타몽 | `ditto_basic` 4×4 | 숨쉬기 4 · 웃기 4 · 찌부/녹기/늘어나기/당황 · 좋아서 방방 4 |
| 위장 메타몽 6종 | `disguises` 3×2 | 조약돌 · 우체통 · 화분 · 벤치 · 버섯 · 이정표 |
| 건물 4종 | `buildings` 2×2 | 공방 · 등대 · 메타몽 자판기 · 부두 |
| 자연물 8종 | `nature` 4×2 | 벚꽃나무 2 · 둥근나무 · 키큰나무 · 꽃덤불 · 바위 · 울타리 · 가로등 |

고양이는 자기 자리 주변을 어슬렁거리다 앉기·식빵·그루밍으로 포즈를 바꾸고, 쓰다듬으면 폴짝 뛰며 하트를 띄웁니다. 메타몽은 가까이 가면 반짝 링이 번지고, 살펴보면 통통 튀며 하트를 띄우고 도감에 등록됩니다.

## 스프라이트 파이프라인

원본은 `downloads/metamong_assets/pixel/sliced_test/`(7세트 · 프레임 PNG + 아틀라스 JSON)이고, 게임은 `public/sprites/`의 정규화된 시트를 씁니다.

```bash
python3 tools/build_sprites.py     # public/sprites/<set>_sheet.png + <set>.json 재생성
```

`tools/build_sprites.py`가 하는 일:

1. **주인공 r4c3 결함 보수** — 원본 4행 3열은 주먹 조각만 남아 있어서, 4행 2열(손 흔들기)을 좌우 반전해 **반대손 흔들기** 프레임으로 복원했습니다. 결과물은 `downloads/metamong_assets/pixel/sliced_test/protagonist/frames_fixed/protagonist_r4c3_fixed.png`에도 저장(원본 프레임은 보존).
2. **발밑 회색 그림자 제거** — 주인공 프레임 아래에 구워져 있던 회색 타원(불투명 픽셀)을 지워, 게임에서 까는 반투명 블롭 그림자와 겹치지 않게 했습니다.
3. **셀 정규화** — 세트별 셀 크기를 통일하고 프레임을 **바닥 정렬 + 가로 중심**으로 다시 붙여 걸을 때 위아래로 떨리지 않게 했습니다.
4. `public/sprites/raw/<set>/`에 원본 프레임·아틀라스·매니페스트 사본도 함께 보관합니다.

## 실행

```bash
cd projects/metamong-island
npm install
npm run dev        # 개발 서버 (http://127.0.0.1:5173)
npm run build      # 프로덕션 빌드 → dist/
npm run preview    # 빌드 결과 미리보기 (http://127.0.0.1:4173)
```

`dist/` 폴더를 정적 호스팅에 그대로 올리면 됩니다(상대 경로 `base: './'`). 라이브: <https://pureelen1234.github.io/Metamong-island/>

## Phase 1 구현 범위

| 항목 | 구현 |
| --- | --- |
| 모바일 세로 화면 | `100dvh`, `touch-action: none`, `overscroll-behavior: none`, `manifest.json` `portrait` |
| WebGL 안전 처리 | `webglcontextlost`(preventDefault) → 복구 안내 오버레이, `webglcontextrestored` → 후처리 렌더타깃·섀도맵·툰 램프 텍스처를 새로 만들어 재개 |
| 타이틀 | 실시간 섬 프리뷰(카메라 자동 회전) + `[이어하기]/[새로 시작]` |
| 섬 지형 | `48×48` 그리드 높이맵, 크림 모래·연두/민트 잔디·둥근 언덕·에메랄드 바다(셰이더 물결) + 도트 디테일 텍스처 + 오솔길 |
| 랜드마크 | 부두(5일) · 공방(10일) · 메타몽 자판기(17일) · 등대(24일) |
| 액터 | 주인공(4방향 걷기·방향별 프레임·발밑 먼지), 솜이·옹이(자유 산책 + 포즈 전환) |
| 맛보기 | 기본 메타몽 1 + 위장 메타몽 6(조약돌·우체통·화분·벤치·버섯·이정표) — 반응 후 도감 등록(총 7칸) |
| 도감 UI | 발견한 메타몽은 **아틀라스에서 잘라낸 도트 썸네일**로 표시, 미발견은 `· ? ·` |
| 조작 | Floating 가상 조이스틱(터치·마우스) + WASD/방향키 + `E`/`Space` 액션 |
| HUD (5위젯) | 상태 필(시간대·날씨·Day N·시각) / 음소거·일시정지 / 조이스틱 / 상황 액션 / 4칸 퀵메뉴 |
| 20분 루프 | 아침 5분 · 낮 7분 · 노을 4분 · 밤 4분, 하늘·태양/달·조명·스프라이트 틴트 연속 보간 |
| Pause on Blur | `visibilitychange` 시 시간 정지·자동 저장 |
| 저장 | `IndexedDB`(실패 시 localStorage 폴백): `day`, `elapsedSeconds`, `playerPos`, `discoveredDittos`, `settings` |
| 설정 | 음소거 · 시간 배속 `1×/10×/60×` · 30fps 절전 · 자동 저장 상태 표시 |

## 폴더 구조 (GDD v1.5/v1.6 용어 준수)

```
src/
  config.js            상수·팔레트·배치 데이터 (LANDMARKS·DITTOS·CATS·NATURE)
  main.js              엔트리 (Game 부팅)
  terrain/             Noise · Heightmap · Terrain(도트 디테일 텍스처) · Water
  skybox/              Skybox (그라디언트·해/달·별)
  sprites/             atlas(NearestFilter 로더) · Billboard(발밑 빌보드·블롭 그림자·하트)
  render/              toon(4단 램프·잉크 헐) · post(EffectComposer 파이프라인)
  actors/              Player · Cat · Ditto (모두 빌보드 기반)
  ui/                  Hud · TitleScreen · Joystick · Modal · Toast · Landmarks · styles.css
  storage/             IndexedDB · SaveStore
  world/               World(씬·조명·날씨) · Scenery(건물·자연물) · Path(오솔길) · Game(세션·루프·입력·상호작용) · AmbientSound
tools/
  build_sprites.py     프레임 정규화 · r4c3 보수 · 그림자 제거 → public/sprites/
  qa_hd2d.py           브라우저 실측 QA (390×844, 콘솔/네트워크 에러 수집)
  shots_final.py       최종 스크린샷 세트
  shots_split.py       장면별 세션 분할 스크린샷
```

## 성능 예산 (실측)

390×844 세로 · DPR 2(780×1688 드로잉버퍼) · 헤드리스 Chromium(SwiftShader) 기준 `window.__metamong.stats()` 실측.

| 항목 | HD-2D 전환 후 |
| --- | --- |
| 씬 draw call (그림자 패스 포함) | **23 ~ 45** |
| 씬 삼각형 (그림자 패스 포함) | **약 17,4 ~ 18,2k** |
| 포스트 포함 전체 draw call | **38 ~ 82** |
| 콘솔 에러·페이지 에러·실패 요청 | **0** |

3D 도형 조립식 모델(수만 개 삼각형)이 전부 사라져 삼각형 수가 **약 24만 → 1.8만**으로 줄었습니다. 대신 도트 시트 텍스처가 메모리를 씁니다(7세트 · 시트 합계 약 6.5MB, 텍스처 클론은 GPU 메모리를 공유).
SwiftShader는 CPU 래스터라이저라 fps 수치는 실기기 성능의 지표가 아닙니다. **실제 S26에서 한 번 확인**하는 것을 권합니다.

## Phase 1에서 하지 않은 것 (Phase 2~ 이후)

- 채집·요리·생활 랭크, 첫 3분 온보딩 (Phase 2)
- 도감 40종 전체·도트 프리뷰·건축(BFS 경로 검사)·월간 침공 디펜스 (Phase 3)
- Draco `.glb` 교체·백업 API·`island_config.json` 원격 연동 (Phase 4)
- `secret_dittos`·`mailbox_letters` 라이브 패치, 섬 관리자(기능 미정) (Phase 5)

## 검증 스크린샷

390×844 실측 캡처는 `screenshots/hd2d/`에 있습니다. 용량 때문에 저장소에는 포함하지 않았습니다(`.gitignore`).

| 파일 | 내용 |
| --- | --- |
| `01_title.png` | 타이틀 + 실시간 섬 프리뷰 |
| `02_play_morning.png` | 아침 시작 화면 (광장) |
| `03_walking.png` | 북쪽으로 걷기 (뒷면 프레임 + 먼지) |
| `04_cats.png` | 솜이·옹이 (자유 산책·앉기) |
| `05_hero_closeup.png` | 주인공 클로즈업 (복원된 도트 확인) |
| `06_ditto_near.png` / `07_ditto_found.png` | 조약돌 메타몽 접근 → 발견 |
| `08_codex.png` | 도감 (발견 1/7, 도트 썸네일) |
| `09_workshop.png` | 공방 + 벚꽃나무 |
| `10_sunset.png` / `11_night.png` | 노을 · 밤 (스프라이트 틴트) |
| `12_dock.png` | 부두와 바다 |

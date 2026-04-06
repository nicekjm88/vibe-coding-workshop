# AI 회의록 요약기 (Meeting Summarizer) 설계 문서

## 1. 프로젝트 개요
- **목적**: 워크숍 실습용 데모 앱
- **핵심 기능**: 사용자가 회의록 텍스트를 입력하면 AI가 분석하여 요약, 액션 아이템, 담당자를 추출하고 과거 회의록을 다시 조회할 수 있는 기능.
- **기술 스택**: Next.js (프론트엔드) + FastAPI (백엔드) + SQLite3 (데이터베이스) + Gemini API (AI 모델)

## 2. 워크플로우 파이프라인 (6단계)

```
/brainstorm → /plan → /design → /orchestrate → /review → /commit
```

| 단계 | 슬래시 커맨드 | 에이전트 | 산출물 |
|------|-------------|----------|--------|
| 1단계 | `/brainstorm` | oma-brainstorm | 설계 문서 |
| 2단계 | `/plan` | oma-pm | 실행 계획 (plan.json) |
| 3단계 | `/design` | oma-design | Stitch UI 시안 + 디자인 토큰 |
| 4단계 | `/orchestrate` | oma-orchestrator | 구현된 코드 |
| 5단계 | `/review` | oma-qa | 검증 보고서 |
| 6단계 | `/commit` | oma-commit | Conventional Commits |

### `/design` 단계 상세 (Stitch MCP 연동)
1. `create_project` → Stitch 프로젝트 생성
2. `create_design_system` → 디자인 토큰(색상, 폰트, 라운딩) 설정
3. `generate_screen_from_text` → 메인 화면 시안 생성 (입력폼 + 사이드바)
4. `generate_screen_from_text` → 결과 화면 시안 생성 (요약 + 액션아이템)
5. `apply_design_system` → 전체 화면에 디자인 시스템 적용
6. 사용자에게 Stitch 링크 공유 → 컨펌 요청
7. 수정 요청 시 `edit_screens` / `generate_variants`로 반영
8. ✅ 승인 → 디자인 확정 문서 저장 후 `/orchestrate` 진행

## 3. 아키텍처 및 화면 구성
- **UI 구조**: 단일 페이지 2-Column 레이아웃
- **주요 영역**:
  - 사이드바: 과거 회의록 히스토리 리스트
  - 메인 작업 영역: 텍스트 입력창 (textarea), 요약 버튼
  - 결과 영역: AI 요약 텍스트, 체크리스트 형태의 액션 아이템 + 담당자 표시

## 4. 데이터 모델 설계
### `meetings` 테이블 (SQLite3)
| 컬럼 | 타입 | 설명 |
|------|------|------|
| `id` | Integer/PK | 고유 식별자 |
| `original_text` | Text | 원본 회의록 텍스트 |
| `summary` | Text | AI 핵심 요약 |
| `action_items` | JSON/Text | 담당자 포함 액션 아이템 배열 |
| `created_at` | Datetime | 생성 일시 |

## 5. API 인터페이스 (Backend FastAPI)
1. **`POST /api/meetings`** — 회의록 요약 및 저장
2. **`GET /api/meetings`** — 히스토리 목록 조회
3. **`GET /api/meetings/{id}`** — 단건 상세 조회

## 6. 예외 처리 전략
- **짧은/무의미한 입력**: 프롬프트에 "액션 아이템이 없으면 빈 배열 반환" 지침 추가
- **API 지연**: 프론트엔드 스켈레톤 로딩 UI + FastAPI Timeout 충분히 설정
- **JSON 파싱 에러**: Pydantic 모델로 검증 + 1회 재시도(Retry)

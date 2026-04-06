# /plan — 작업 계획 수립

## 목표

PM 에이전트(`oma-pm`)가 설계 문서를 기반으로 <strong>실행 가능한 태스크로 분해</strong>하고, `plan.json`을 생성합니다.

## 실행 방법

```
/plan
brainstorm에서 나온 회의록 요약기 설계를 태스크로 분해해줘
```

## 진행 과정

### Step 1: 요구사항 수집

PM 에이전트가 설계 문서(`docs/plans/meeting-summarizer-design.md`)를 자동으로 로드합니다:

```
🤖 PM 에이전트: "설계 문서를 로드했습니다.
                AI 회의록 요약기 - Next.js + FastAPI + SQLite3 + Gemini API
                핵심 기능: 회의록 입력, AI 요약, 액션 아이템 추출, 히스토리 저장"
```

### Step 2: 기술 분석

기존 코드베이스를 스캔하고, 무엇을 새로 만들어야 하는지 파악합니다:

```
🤖 PM 에이전트: "기술 분석 완료:
                - 새로 만들 컴포넌트: 5개
                - SQLite3 테이블: 1개 (meetings)
                - 외부 API: Gemini API (텍스트 요약)
                - DB 런타임: better-sqlite3 (로컬 내장 DB)
                - 예상 작업 규모: Small"
```

### Step 3: API 계약 정의

프론트엔드-백엔드 간의 <strong>인터페이스를 먼저 확정</strong>합니다:

```
🤖 PM 에이전트: "API 계약을 정의합니다:

 POST /api/summarize        → 텍스트를 Gemini API로 요약
 GET  /meetings             → 회의록 목록 조회
 POST /meetings             → 회의록 저장
 GET  /meetings/:id         → 회의록 상세 조회
 DELETE /meetings/:id       → 회의록 삭제"
```

### Step 4: 태스크 분해

기능을 <strong>에이전트별 태스크</strong>로 분해합니다:

```
🤖 PM 에이전트: "태스크 분해 결과:

 P0 (필수)
 ├── T1 [oma-db]       meetings 테이블 생성 (RLS 포함)
 ├── T2 [oma-frontend] 회의록 입력 UI (MeetingInput)
 ├── T3 [oma-frontend] 요약 결과 표시 UI (SummaryView, ActionItems)
 └── T4 [oma-backend]  Gemini API 연동 (summarize 함수)

 P1 (권장)
 ├── T5 [oma-frontend] 회의록 히스토리 UI (MeetingHistory)
 └── T6 [oma-qa]       보안 리뷰 (XSS, API 키 관리)

 P2 (선택)
 └── T7 [oma-frontend] 다크 모드, 반응형 레이아웃

 의존성: T1 → T2, T3, T4 → T5, T6 → T7
 
 승인하시겠습니까?"

👤 사용자: "좋아"
```

### Step 5: plan.json 저장

승인된 계획을 <strong>JSON 파일</strong>로 저장합니다:

```json
{
  "project": "meeting-summarizer",
  "tasks": [
    {
      "id": "T1",
      "title": "meetings 테이블 생성",
      "agent": "db",
      "priority": "P0",
      "dependencies": []
    },
    {
      "id": "T2",
      "title": "회의록 입력 UI",
      "agent": "frontend",
      "priority": "P0",
      "dependencies": ["T1"]
    },
    {
      "id": "T4",
      "title": "Gemini API 연동",
      "agent": "backend",
      "priority": "P0",
      "dependencies": ["T1"]
    }
    // ... 나머지 태스크
  ]
}
```

## 산출물

이 단계가 끝나면 <strong>실행 가능한 계획</strong>이 생성됩니다:

```
.agents/plan.json
├── 프로젝트 메타데이터
├── 7개 태스크 (에이전트 배정, 우선순위, 의존성)
└── API 계약 문서
```

::: info 🎯 핵심 메시지
**"계획 없이 코딩하면, AI도 사람도 길을 잃는다."**

`plan.json`이 있으면:
- 어떤 에이전트가 무엇을 하는지 명확
- 의존성에 따라 실행 순서가 결정됨
- 빠뜨린 기능 없이 체계적으로 구현
:::

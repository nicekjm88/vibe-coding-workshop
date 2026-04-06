# /orchestrate — 자동 실행

## 목표

오케스트레이터(`oma-orchestrator`)가 `plan.json`을 기반으로 <strong>에이전트들을 자동으로 스폰</strong>하고, 병렬로 실행합니다.

## 실행 방법

```
/orchestrate
plan.json을 기반으로 실행해줘
```

## 진행 과정

### Step 1: plan.json 파싱

오케스트레이터가 계획 파일을 읽고 <strong>실행 전략</strong>을 수립합니다:

```
🤖 오케스트레이터: "plan.json을 로드했습니다.
                  총 7개 태스크, 4개 에이전트 필요.
                  
                  실행 전략:
                  Phase 1: T1 (DB) — 단독 실행
                  Phase 2: T2, T3, T4 (Frontend + Backend) — 병렬 실행
                  Phase 3: T5, T6 (Frontend + QA) — 병렬 실행
                  Phase 4: T7 (Frontend) — 단독 실행"
```

### Step 2: 의존성 분석

```
🤖 오케스트레이터: "의존성 그래프:

 T1 (DB 설계)
  ├──→ T2 (입력 UI)      ─┐
  ├──→ T3 (요약 UI)      ─┼──→ T5 (히스토리)  ──→ T7 (다크 모드)
  └──→ T4 (Gemini 연동)  ─┘    T6 (보안 리뷰)
  
 Phase 1과 2 사이에 동기화 포인트 설정됨"
```

### Step 3: 에이전트 스폰

각 Phase의 에이전트를 <strong>CLI를 통해 스폰</strong>합니다:

```
🤖 오케스트레이터:

 ▶ Phase 1 시작 ──────────────────────
 
 🟢 [oma-db] T1: meetings 테이블 생성 시작
    → meetings 테이블 생성
      (id, title, raw_text, summary, action_items, user_id, created_at)
    → RLS(Row Level Security) 정책 적용
    → user_id 기반 접근 제어 설정
 ✅ [oma-db] T1: 완료 (2분 소요)

 ▶ Phase 2 시작 ──────────────────────
 
 🟢 [oma-frontend] T2: 입력 UI 시작        ← 병렬
 🟢 [oma-frontend] T3: 요약 UI 시작        ← 병렬
 🟢 [oma-backend]  T4: Gemini 연동 시작    ← 병렬
    
 ✅ [oma-backend]  T4: 완료 (2분 소요)
 ✅ [oma-frontend] T2: 완료 (3분 소요)
 ✅ [oma-frontend] T3: 완료 (3분 소요)

 ▶ Phase 3 시작 ──────────────────────
 
 🟢 [oma-frontend] T5: 히스토리 목록 시작   ← 병렬
 🟢 [oma-qa]       T6: 보안 리뷰 시작      ← 병렬
 
 ⚠️ [oma-qa] T6: XSS 취약점 1건 발견 → 자동 수정 요청
 ✅ [oma-qa]       T6: 보안 리뷰 완료 (수정 반영)
 ✅ [oma-frontend] T5: 히스토리 완료

 ▶ Phase 4 시작 ──────────────────────
 
 🟢 [oma-frontend] T7: 다크 모드/반응형 시작
 ✅ [oma-frontend] T7: 완료 (2분 소요)

 ═══════════════════════════════════════
 🎉 전체 완료! 총 소요 시간: 약 13분
 생성된 파일: 12개
```

### Step 4: 결과 보고

```
🤖 오케스트레이터: "결과 요약:

 📁 생성된 파일 구조
 src/
 ├── components/
 │   ├── MeetingInput.tsx      ← 회의록 입력
 │   ├── SummaryView.tsx       ← AI 요약 표시
 │   ├── ActionItems.tsx       ← 액션 아이템 목록
 │   └── MeetingHistory.tsx    ← 히스토리 목록
 ├── lib/
 │   ├── db.ts                 ← SQLite3 클라이언트
 │   └── gemini.ts             ← Gemini API 호출
 ├── App.tsx
 └── main.tsx

 🔒 보안 리뷰: 통과 (1건 자동 수정)
 📊 성능: Lighthouse 95+"
```

## 핵심 관찰 포인트

::: tip 🔍 실습 중 주목할 점

1. **병렬 실행**: T2, T3, T4가 동시에 실행됨 → 시간 절약
2. **자동 리뷰**: QA 에이전트가 보안 취약점을 발견하고 수정 요청
3. **의존성 준수**: DB가 먼저 완료된 후에야 Frontend가 시작
4. **멀티 에이전트**: DB, Frontend, Backend, QA 에이전트가 각자 역할 수행
:::

::: info 🎯 핵심 메시지
**"사람은 감독하고, AI 팀이 실행한다."**

오케스트레이터를 사용하면:
- 사람은 진행 상황만 모니터링
- 에이전트들이 역할에 따라 자동 실행
- 품질 검증이 워크플로우에 내장
- 결과는 구현 완료된 상태로 전달
:::

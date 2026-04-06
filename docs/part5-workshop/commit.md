# /commit — 깔끔한 커밋

## 목표

커밋 에이전트(`oma-commit`)가 변경 사항을 분석하여 <strong>기능별로 자동 분리된 Conventional Commits</strong>를 생성합니다.

## 실행 방법

```
/commit
```

## Conventional Commits란?

커밋 메시지에 <strong>일관된 규칙</strong>을 적용하는 표준입니다:

```
<type>(<scope>): <description>

feat:     새 기능 추가
fix:      버그 수정
docs:     문서 변경
style:    코드 포맷팅
refactor: 리팩토링
test:     테스트 추가
chore:    빌드/도구 변경
```

## 진행 과정

### Step 1: 변경 사항 분석

커밋 에이전트가 <strong>git diff</strong>를 분석합니다:

```
🤖 커밋 에이전트: "변경 사항을 분석했습니다:

 📁 변경된 파일: 12개
 ├── 신규: 8개
 ├── 수정: 3개
 └── 삭제: 1개
 
 기능별로 분리하면 5개의 커밋이 적절합니다.
 자동 커밋을 생성할까요?"

👤 사용자: "보여줘"
```

### Step 2: 커밋 자동 분리

하나의 큰 변경을 <strong>기능별 커밋으로 분리</strong>합니다:

```
🤖 커밋 에이전트: "다음과 같이 커밋을 분리합니다:

 📝 커밋 1/5
 feat(db): add meetings table with indexes
 ─ db/migrations/create_meetings.sql

 📝 커밋 2/5
 feat(ui): implement meeting input and summary display
 ─ src/components/MeetingInput.tsx
 ─ src/components/SummaryView.tsx
 ─ src/components/ActionItems.tsx

 📝 커밋 3/5
 feat(api): integrate Gemini API for text summarization
 ─ src/lib/gemini.ts
 ─ src/lib/db.ts

 📝 커밋 4/5
 fix(security): add input sanitization for XSS prevention
 ─ src/lib/sanitize.ts
 ─ src/components/MeetingInput.tsx

 📝 커밋 5/5
 feat(a11y): add ARIA labels and keyboard navigation
 ─ src/components/SummaryButton.tsx
 ─ src/App.tsx

 이대로 커밋할까요?"

👤 사용자: "좋아"
```

### Step 3: 커밋 실행

```
🤖 커밋 에이전트: "커밋이 완료되었습니다!

 git log --oneline:
 a1b2c3d feat(a11y): add ARIA labels and keyboard navigation
 d4e5f6a fix(security): add input sanitization for XSS prevention
 7g8h9i0 feat(api): integrate Gemini API for text summarization
 j1k2l3m feat(ui): implement meeting input and summary display
 n4o5p6q feat(db): add meetings table with RLS policies

 ✅ 5개 커밋 생성 완료
 📊 총 12개 파일, +487줄 / -12줄"
```

## 왜 커밋을 분리하는가?

::: tip 💡 좋은 커밋 vs 나쁜 커밋

**나쁜 예**: `"전부 다 함"` — 하나의 거대한 커밋
- 문제가 생기면 어디서 발생했는지 모름
- 코드 리뷰가 불가능
- 롤백 시 전체를 되돌려야 함

**좋은 예**: 기능별 분리 커밋
- 각 커밋이 독립적으로 의미 있음
- 문제 발생 시 해당 커밋만 `git revert` 가능
- 히스토리만 보고도 프로젝트 흐름 파악 가능
:::

::: info 🎯 핵심 메시지
**"커밋은 코드의 일기장이다."**

`/commit`은 AI가 변경 사항을 이해하고, 사람이 읽기 좋은 형태로 기능별 커밋을 자동 생성합니다.
나중에 "이 코드 왜 이렇게 바뀌었지?"라는 질문에 커밋 메시지가 답합니다.
:::

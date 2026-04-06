# 2세대: 컨텍스트 엔지니어링

> **스토리**: "AI에게 기억을 심어주자"

## 정의

<strong>컨텍스트 엔지니어링(Context Engineering)</strong>이란, AI가 프로젝트의 <strong>맥락(코드베이스, 규칙, 히스토리)</strong>을 이해하도록 <strong>환경을 설계하는 기술</strong>입니다.

1세대가 "한 번의 질문을 잘 하는 것"이었다면, 2세대는 "<strong>지속적으로 AI가 우리 프로젝트를 이해하도록 만드는 것</strong>"입니다.

## 프롬프트 vs 컨텍스트 엔지니어링

| 구분 | 프롬프트 엔지니어링 | 컨텍스트 엔지니어링 |
|------|------------------|-------------------|
| 초점 | 일회성 요청 최적화 | 지속적 환경 최적화 |
| 범위 | 단일 대화 | 프로젝트 전체 |
| 저장 | 없음 (매번 재입력) | 파일로 영구 저장 |
| 비유 | 잘 지시하기 | 매뉴얼 만들기 |

## 핵심 개념

### 1. Instruction 파일

프로젝트 루트에 AI를 위한 <strong>지침 파일</strong>을 두는 방법입니다:

| 파일명 | 도구 |
|--------|------|
| `CLAUDE.md` | Claude Code |
| `GEMINI.md` | Gemini CLI |
| `.cursorrules` | Cursor |
| `.github/copilot-instructions.md` | GitHub Copilot |

```markdown
# CLAUDE.md 예시

## 프로젝트 개요
React + TypeScript + Supabase로 구성된 TODO 앱입니다.

## 코딩 규칙
- 함수형 컴포넌트만 사용
- Tailwind CSS v4 사용
- 한국어 주석 작성
- 에러 핸들링 필수
```

이 파일이 있으면, AI가 <strong>대화 시작 시 자동으로 읽고</strong> 프로젝트 맥락을 파악합니다.

### 2. Rules 파일

특정 상황에서만 적용되는 <strong>규칙 파일</strong>을 분리합니다:

```
.cursor/rules/
├── react-component.md    # React 컴포넌트 작성 규칙
├── api-endpoint.md       # API 엔드포인트 규칙
└── database-schema.md    # DB 스키마 규칙
```

### 3. MCP (Model Context Protocol)

AI에게 <strong>외부 도구를 연결</strong>하는 표준 프로토콜입니다.

```
AI ←→ MCP ←→ Supabase (데이터베이스)
             Context7 (공식 문서)
             Serena (코드 분석)
             GitHub (이슈, PR)
```

MCP를 통해 AI가 직접 데이터베이스를 조회하거나, 공식 문서를 참조하거나, 코드를 분석할 수 있습니다.

### 4. RAG (Retrieval Augmented Generation)

AI가 <strong>필요한 정보를 필요한 시점에 검색</strong>하도록 하는 기술입니다. 전체 코드베이스를 한꺼번에 넣는 대신, 관련된 부분만 찾아서 참조합니다.

## 한계점

::: warning ⚠️ 컨텍스트 엔지니어링의 구조적 한계

### 1. 만능 AI의 한계
아무리 맥락을 잘 줘도, <strong>한 AI가 프론트엔드 + 백엔드 + DB + 보안 + 디자인</strong>을 모두 잘할 수는 없습니다.

### 2. 토큰 비용 폭증
맥락이 커질수록, 매 요청마다 전송하는 토큰 수가 늘어나 <strong>비용이 기하급수적으로 증가</strong>합니다.

### 3. 역할 혼동
하나의 AI에게 "프론트엔드도 해줘, 백엔드도 해줘, 리뷰도 해줘"라고 하면, <strong>모든 것을 어중간하게</strong> 하는 결과가 나옵니다.

### 4. 워크플로우 부재
"먼저 설계하고 → 계획 세우고 → 구현하고 → 리뷰한다" 같은 <strong>구조화된 작업 흐름</strong>이 없습니다.
:::

## 비유로 이해하기

컨텍스트 엔지니어링은 마치 <strong>프리랜서에게 회사 매뉴얼을 주는 것</strong>과 같습니다:

- ✅ 매번 반복 설명할 필요 없음
- ✅ 일관된 스타일로 작업
- ❌ 그래도 모든 분야를 한 사람이 하기엔 한계
- ❌ 체계적인 업무 프로세스가 없음

> *"한 사람에게 매뉴얼을 줘봤자, 이제는 팀이 필요하다."*
>
> → 이것이 <strong>3세대: 하네스 엔지니어링</strong>의 출발점입니다.

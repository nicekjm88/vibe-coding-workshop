# 정리 및 Q&A

## 3세대 비교 — 한 장 요약

| | 1세대 프롬프트 | 2세대 컨텍스트 | 3세대 하네스 |
|:--|:---:|:---:|:---:|
| **핵심 질문** | "뭐라고 물어볼까?" | "뭘 알려줄까?" | "팀을 어떻게 꾸릴까?" |
| **작업 단위** | 단일 프롬프트 | 프로젝트 전체 | 전문 에이전트 팀 |
| **저장** | 없음 | 파일 (md, json) | `.agents/` 전체 |
| **비유** | 프리랜서에게 잘 설명 | 프리랜서에게 매뉴얼 제공 | 전문 팀 구성 |
| **확장성** | ❌ | △ | ⭐ |
| **재현성** | ❌ | △ | ⭐ |
| **토큰 효율** | ❌ | ❌ | ⭐ |
| **품질 보증** | ❌ | △ | ⭐ |
| **멀티 벤더** | ❌ | ❌ | ⭐ |

## 오늘 배운 것

### 이론
1. <strong>바이브 코딩</strong>은 자연어로 AI에게 코딩을 시키는 패러다임
2. <strong>프롬프트 엔지니어링</strong> → <strong>컨텍스트 엔지니어링</strong> → <strong>하네스 엔지니어링</strong>의 3세대 진화
3. 하네스 엔지니어링 = 여러 전문 AI 에이전트를 역할 기반으로 협업시키는 기술

### 실습
4. **oh-my-agent** = 포터블 멀티 에이전트 하네스 (한 줄 설치)
5. `/brainstorm` → 아이디어를 구체화하고 설계 문서 생성
6. `/plan` → PM이 태스크로 분해하고 실행 계획 수립
7. `/orchestrate` → 에이전트들이 병렬로 자동 실행

## 다음 단계

### 더 알아보기

| 리소스 | 링크 |
|--------|------|
| 📖 oh-my-agent 공식 문서 | [first-fluke.github.io/oh-my-agent](https://first-fluke.github.io/oh-my-agent/) |
| 💻 GitHub 저장소 | [github.com/first-fluke/oh-my-agent](https://github.com/first-fluke/oh-my-agent) |
| 📦 npm 패키지 | [npmjs.com/package/oh-my-agent](https://www.npmjs.com/package/oh-my-agent) |
| 🚀 풀스택 스타터 | [github.com/first-fluke/fullstack-starter](https://github.com/first-fluke/fullstack-starter) |

### 추천 워크플로우

오늘 배운 기본 워크플로우 외에 더 강력한 워크플로우들:

| 워크플로우 | 설명 |
|-----------|------|
| `/ultrawork` | 11개 리뷰 게이트가 포함된 5단계 최고 품질 워크플로우 |
| `/review` | OWASP 보안 + 성능 + 접근성(WCAG) 종합 감사 |
| `/coordinate` | 단계별 멀티 에이전트 수동 조율 |
| `/design` | 7단계 디자인 시스템 구축 워크플로우 |
| `/debug` | 구조화된 근본 원인 진단 및 회귀 테스트 |

### 추천 학습 경로

```
오늘: /brainstorm → /plan → /orchestrate (기본)
  ↓
다음: /ultrawork (품질 중심 개발)
  ↓
심화: /coordinate + oma agent:spawn (수동 오케스트레이션)
  ↓
고급: 커스텀 스킬 작성, 워크플로우 설계
```

## Q&A

::: details ❓ 자주 묻는 질문

### oh-my-agent는 무료인가요?
네, MIT 라이선스 오픈소스입니다. 다만 각 AI IDE/CLI의 API 비용은 별도입니다.

### 어떤 AI IDE를 써야 하나요?
Antigravity, Claude Code, Cursor, Gemini CLI 모두 지원합니다. 처음이라면 Cursor(GUI)나 Claude Code(CLI)를 추천합니다.

### 비개발자도 혼자 쓸 수 있나요?
기본적인 터미널 사용법을 알면 가능합니다. `/brainstorm`과 `/plan`은 자연어만으로 진행됩니다.

### 한국어로 사용할 수 있나요?
네, `user-preferences.yaml`에서 `language: ko`로 설정하면 에이전트들이 한국어로 응답합니다. 11개 언어를 지원합니다.

### 기존 프로젝트에도 적용할 수 있나요?
네, `bunx oh-my-agent`를 기존 프로젝트에서 실행하면 `.agents/` 폴더만 추가됩니다. 기존 코드에 영향을 주지 않습니다.
:::

---

> **감사합니다!** 🎉
>
> 더 나은 바이브 코딩 경험을 위해, [oh-my-agent에 ⭐ 스타](https://github.com/first-fluke/oh-my-agent)를 눌러주세요.

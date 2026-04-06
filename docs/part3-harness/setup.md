# 하네스 엔지니어링 세팅 방법

## 일반적인 세팅 순서

하네스 엔지니어링을 프로젝트에 적용하는 일반적인 단계입니다.

### Step 1: AI IDE 선택

현재 하네스 엔지니어링을 지원하는 주요 도구:

| 도구 | 유형 | 하네스 지원 | 비고 |
|------|------|:---------:|------|
| **Antigravity** | AI IDE | ⭐ | `.agents/` 직접 읽기 |
| **Claude Code** | CLI | ⭐ | `.claude/` 어댑터 |
| **Cursor** | AI IDE | △ | `.cursor/` 어댑터 |
| **Gemini CLI** | CLI | ⭐ | `.gemini/` 어댑터 |
| **Codex CLI** | CLI | △ | `.codex/` 어댑터 |

### Step 2: Instruction 파일 작성

프로젝트 루트에 AI 지침 파일을 작성합니다:

```markdown
# 프로젝트명

## 기술 스택
- Frontend: React + TypeScript
- Backend: FastAPI + Python
- Database: Supabase (PostgreSQL)

## 코딩 규칙
- 함수형 프로그래밍 우선
- 에러 핸들링 필수
- 한국어 주석

## 아키텍처
- FSD(Feature Sliced Design) 구조
- Repository → Service → Router 패턴
```

### Step 3: MCP 서버 연결

AI에게 외부 도구를 연결합니다:

```json
{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": ["-y", "@supabase/mcp-server-supabase"]
    },
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"]
    },
    "serena": {
      "command": "uvx",
      "args": ["serena-mcp"]
    }
  }
}
```

### Step 4: 에이전트 정의

각 에이전트의 역할과 스킬을 정의합니다:

```yaml
# agents/frontend-engineer.yaml
name: frontend-engineer
description: React/Next.js 프론트엔드 전문 에이전트
skills:
  - oma-frontend
  - oma-design
```

### Step 5: 워크플로우 정의

작업 흐름을 코드로 정의합니다:

```markdown
# workflows/plan.md
---
description: PM이 기능을 태스크로 분해
---
## Step 1: 요구사항 수집
## Step 2: 기술 분석
## Step 3: 태스크 분해
## Step 4: 검토 및 확인
```

## 문제 제기

::: danger ❓ 매번 이걸 프로젝트마다 수동으로?

위의 5단계를 매번 새 프로젝트마다 반복하면:

- ⏰ **시간 낭비**: 설정만 30분~1시간
- 🔧 **설정 실수**: 에이전트 정의 누락, MCP 연결 오류
- 📝 **중복 작업**: 비슷한 스킬/워크플로우를 매번 재작성
- 🔄 **버전 관리**: 스킬이 업데이트되면 모든 프로젝트를 수동 동기화

**이 문제를 한 줄로 해결하는 도구가 있습니다.**
:::

> 다음 파트에서 <strong>oh-my-agent</strong>를 소개합니다.

# 설치 및 세팅

## 사전 준비

oh-my-agent를 설치하기 전에 아래 도구가 필요합니다:

| 도구 | 용도 | 설치 확인 |
|------|------|----------|
| **Node.js 18+** | 런타임 | `node --version` |
| **bun** | 패키지 매니저 (자동 설치됨) | `bun --version` |
| **AI IDE/CLI** | Antigravity, Claude Code, Cursor 등 | 하나 이상 설치 |

## 설치 방법

### 방법 1: 원라인 설치 (권장)

```bash
curl -fsSL https://raw.githubusercontent.com/first-fluke/oh-my-agent/main/cli/install.sh | bash
```

이 스크립트는:
1. `bun`이 없으면 자동 설치
2. `uv`가 없으면 자동 설치
3. oh-my-agent CLI를 전역 설치

### 방법 2: 직접 실행

```bash
bunx oh-my-agent
```

### 방법 3: 전역 설치

```bash
bun install --global oh-my-agent
```

## 프로젝트에 적용하기

### 1단계: 프로젝트 디렉토리에서 실행

```bash
cd my-project
bunx oh-my-agent
```

### 2단계: 프리셋 선택

화면에 프리셋 목록이 나타납니다. 프로젝트에 맞는 것을 선택하세요:

```
? 프리셋을 선택하세요:
  ✨ All      — 모든 에이전트
  🌐 Fullstack — 풀스택 웹 개발
  🎨 Frontend  — 프론트엔드 전용
  ⚙️ Backend   — 백엔드 전용
  📱 Mobile    — 모바일 앱
  🚀 DevOps    — 인프라 및 CI/CD
```

### 3단계: 생성된 구조 확인

설치가 완료되면 프로젝트에 `.agents/` 디렉토리가 생성됩니다:

```
.agents/
├── agents/              # 에이전트 정의 (YAML)
│   ├── backend-engineer.yaml
│   ├── frontend-engineer.yaml
│   └── ...
├── skills/              # 에이전트 스킬 (SKILL.md)
│   ├── oma-frontend/
│   ├── oma-backend/
│   ├── oma-db/
│   ├── oma-qa/
│   └── _shared/         # 공유 리소스
├── workflows/           # 슬래시 커맨드 정의
│   ├── brainstorm.md
│   ├── plan.md
│   ├── orchestrate.md
│   └── ...
├── config/              # 설정 파일
│   └── user-preferences.yaml
└── mcp.json             # MCP 서버 설정
```

## 상태 점검

설치 후 정상 동작을 확인합니다:

```bash
# 상태 점검
oma doctor

# 실시간 에이전트 모니터링 대시보드
oma dashboard
```

## 첫 사용

이제 AI IDE에서 슬래시 커맨드를 사용할 수 있습니다:

```
/brainstorm  — 아이디어 발산
/plan        — 작업 계획 수립
/orchestrate — 에이전트 병렬 실행
/review      — 코드 리뷰
/debug       — 버그 디버깅
```

::: tip 💡 팁
`user-preferences.yaml`에서 언어를 `ko`로 설정하면, 에이전트들이 한국어로 응답합니다.

```yaml
# .agents/config/user-preferences.yaml
language: ko
```
:::

# oh-my-agent 소개

## oh-my-agent란?

<strong>oh-my-agent</strong>는 하네스 엔지니어링을 <strong>한 줄 설치</strong>로 시작할 수 있는 <strong>포터블 멀티 에이전트 하네스</strong>입니다.

> oh-my-zsh가 터미널을 혁신했듯이, oh-my-agent가 AI 코딩을 혁신합니다.

```bash
# 한 줄로 설치
curl -fsSL https://raw.githubusercontent.com/first-fluke/oh-my-agent/main/cli/install.sh | bash
```

## 핵심 특징

### 🔌 어디서든 동작

oh-my-agent는 특정 IDE에 종속되지 않습니다:

| AI IDE/CLI | 지원 |
|------------|:----:|
| Antigravity | ✅ |
| Claude Code | ✅ |
| Cursor | ✅ |
| Gemini CLI | ✅ |
| Codex CLI | ✅ |
| OpenCode | ✅ |

`.agents/` 폴더 하나가 <strong>모든 도구에서 동작</strong>합니다.

### 📦 프리셋으로 빠른 시작

프로젝트 유형에 맞는 프리셋을 선택하면 됩니다:

| 프리셋 | 포함 에이전트 |
|--------|-------------|
| ✨ **All** | 모든 에이전트와 스킬 |
| 🌐 **Fullstack** | frontend + backend + db + pm + qa + debug + brainstorm + commit |
| 🎨 **Frontend** | frontend + pm + qa + debug + brainstorm + commit |
| ⚙️ **Backend** | backend + db + pm + qa + debug + brainstorm + commit |
| 📱 **Mobile** | mobile + pm + qa + debug + brainstorm + commit |
| 🚀 **DevOps** | tf-infra + dev-workflow + pm + qa + debug + brainstorm + commit |

### 🧠 자동 라우팅

슬래시 커맨드 없이도 자연어로 말하면 <strong>알맞은 에이전트가 자동 선택</strong>됩니다:

```
"로그인 페이지 만들어줘"  →  oma-frontend 활성화
"API 엔드포인트 추가해줘"  →  oma-backend 활성화
"이 버그 고쳐줘"         →  oma-debug 활성화
```

11개 언어의 키워드를 자동 감지합니다.

## GitHub

- 📂 저장소: [github.com/first-fluke/oh-my-agent](https://github.com/first-fluke/oh-my-agent)
- 📖 공식 문서: [first-fluke.github.io/oh-my-agent](https://first-fluke.github.io/oh-my-agent/)
- 📦 npm: [npmjs.com/package/oh-my-agent](https://www.npmjs.com/package/oh-my-agent)

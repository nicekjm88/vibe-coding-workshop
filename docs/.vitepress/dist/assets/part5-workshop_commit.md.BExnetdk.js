import{_ as a,o as n,c as p,ae as e}from"./chunks/framework.B6gjLfeO.js";const u=JSON.parse('{"title":"/commit — 깔끔한 커밋","description":"","frontmatter":{},"headers":[],"relativePath":"part5-workshop/commit.md","filePath":"part5-workshop/commit.md"}'),t={name:"part5-workshop/commit.md"};function i(l,s,o,c,r,d){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="commit-—-깔끔한-커밋" tabindex="-1">/commit — 깔끔한 커밋 <a class="header-anchor" href="#commit-—-깔끔한-커밋" aria-label="Permalink to &quot;/commit — 깔끔한 커밋&quot;">​</a></h1><h2 id="목표" tabindex="-1">목표 <a class="header-anchor" href="#목표" aria-label="Permalink to &quot;목표&quot;">​</a></h2><p>커밋 에이전트(<code>oma-commit</code>)가 변경 사항을 분석하여 <strong>기능별로 자동 분리된 Conventional Commits</strong>를 생성합니다.</p><h2 id="실행-방법" tabindex="-1">실행 방법 <a class="header-anchor" href="#실행-방법" aria-label="Permalink to &quot;실행 방법&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/commit</span></span></code></pre></div><h2 id="conventional-commits란" tabindex="-1">Conventional Commits란? <a class="header-anchor" href="#conventional-commits란" aria-label="Permalink to &quot;Conventional Commits란?&quot;">​</a></h2><p>커밋 메시지에 <strong>일관된 규칙</strong>을 적용하는 표준입니다:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;type&gt;(&lt;scope&gt;): &lt;description&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>feat:     새 기능 추가</span></span>
<span class="line"><span>fix:      버그 수정</span></span>
<span class="line"><span>docs:     문서 변경</span></span>
<span class="line"><span>style:    코드 포맷팅</span></span>
<span class="line"><span>refactor: 리팩토링</span></span>
<span class="line"><span>test:     테스트 추가</span></span>
<span class="line"><span>chore:    빌드/도구 변경</span></span></code></pre></div><h2 id="진행-과정" tabindex="-1">진행 과정 <a class="header-anchor" href="#진행-과정" aria-label="Permalink to &quot;진행 과정&quot;">​</a></h2><h3 id="step-1-변경-사항-분석" tabindex="-1">Step 1: 변경 사항 분석 <a class="header-anchor" href="#step-1-변경-사항-분석" aria-label="Permalink to &quot;Step 1: 변경 사항 분석&quot;">​</a></h3><p>커밋 에이전트가 <strong>git diff</strong>를 분석합니다:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>🤖 커밋 에이전트: &quot;변경 사항을 분석했습니다:</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 📁 변경된 파일: 12개</span></span>
<span class="line"><span> ├── 신규: 8개</span></span>
<span class="line"><span> ├── 수정: 3개</span></span>
<span class="line"><span> └── 삭제: 1개</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> 기능별로 분리하면 5개의 커밋이 적절합니다.</span></span>
<span class="line"><span> 자동 커밋을 생성할까요?&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>👤 사용자: &quot;보여줘&quot;</span></span></code></pre></div><h3 id="step-2-커밋-자동-분리" tabindex="-1">Step 2: 커밋 자동 분리 <a class="header-anchor" href="#step-2-커밋-자동-분리" aria-label="Permalink to &quot;Step 2: 커밋 자동 분리&quot;">​</a></h3><p>하나의 큰 변경을 <strong>기능별 커밋으로 분리</strong>합니다:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>🤖 커밋 에이전트: &quot;다음과 같이 커밋을 분리합니다:</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 📝 커밋 1/5</span></span>
<span class="line"><span> feat(db): add meetings table with RLS policies</span></span>
<span class="line"><span> ─ supabase/migrations/create_meetings.sql</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 📝 커밋 2/5</span></span>
<span class="line"><span> feat(ui): implement meeting input and summary display</span></span>
<span class="line"><span> ─ src/components/MeetingInput.tsx</span></span>
<span class="line"><span> ─ src/components/SummaryView.tsx</span></span>
<span class="line"><span> ─ src/components/ActionItems.tsx</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 📝 커밋 3/5</span></span>
<span class="line"><span> feat(api): integrate Gemini API for text summarization</span></span>
<span class="line"><span> ─ src/lib/gemini.ts</span></span>
<span class="line"><span> ─ src/lib/supabase.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 📝 커밋 4/5</span></span>
<span class="line"><span> fix(security): add input sanitization for XSS prevention</span></span>
<span class="line"><span> ─ src/lib/sanitize.ts</span></span>
<span class="line"><span> ─ src/components/MeetingInput.tsx</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 📝 커밋 5/5</span></span>
<span class="line"><span> feat(a11y): add ARIA labels and keyboard navigation</span></span>
<span class="line"><span> ─ src/components/SummaryButton.tsx</span></span>
<span class="line"><span> ─ src/App.tsx</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 이대로 커밋할까요?&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>👤 사용자: &quot;좋아&quot;</span></span></code></pre></div><h3 id="step-3-커밋-실행" tabindex="-1">Step 3: 커밋 실행 <a class="header-anchor" href="#step-3-커밋-실행" aria-label="Permalink to &quot;Step 3: 커밋 실행&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>🤖 커밋 에이전트: &quot;커밋이 완료되었습니다!</span></span>
<span class="line"><span></span></span>
<span class="line"><span> git log --oneline:</span></span>
<span class="line"><span> a1b2c3d feat(a11y): add ARIA labels and keyboard navigation</span></span>
<span class="line"><span> d4e5f6a fix(security): add input sanitization for XSS prevention</span></span>
<span class="line"><span> 7g8h9i0 feat(api): integrate Gemini API for text summarization</span></span>
<span class="line"><span> j1k2l3m feat(ui): implement meeting input and summary display</span></span>
<span class="line"><span> n4o5p6q feat(db): add meetings table with RLS policies</span></span>
<span class="line"><span></span></span>
<span class="line"><span> ✅ 5개 커밋 생성 완료</span></span>
<span class="line"><span> 📊 총 12개 파일, +487줄 / -12줄&quot;</span></span></code></pre></div><h2 id="왜-커밋을-분리하는가" tabindex="-1">왜 커밋을 분리하는가? <a class="header-anchor" href="#왜-커밋을-분리하는가" aria-label="Permalink to &quot;왜 커밋을 분리하는가?&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">💡 좋은 커밋 vs 나쁜 커밋</p><p><strong>나쁜 예</strong>: <code>&quot;전부 다 함&quot;</code> — 하나의 거대한 커밋</p><ul><li>문제가 생기면 어디서 발생했는지 모름</li><li>코드 리뷰가 불가능</li><li>롤백 시 전체를 되돌려야 함</li></ul><p><strong>좋은 예</strong>: 기능별 분리 커밋</p><ul><li>각 커밋이 독립적으로 의미 있음</li><li>문제 발생 시 해당 커밋만 <code>git revert</code> 가능</li><li>히스토리만 보고도 프로젝트 흐름 파악 가능</li></ul></div><div class="info custom-block"><p class="custom-block-title">🎯 핵심 메시지</p><p><strong>&quot;커밋은 코드의 일기장이다.&quot;</strong></p><p><code>/commit</code>은 AI가 변경 사항을 이해하고, 사람이 읽기 좋은 형태로 기능별 커밋을 자동 생성합니다. 나중에 &quot;이 코드 왜 이렇게 바뀌었지?&quot;라는 질문에 커밋 메시지가 답합니다.</p></div>`,20)])])}const h=a(t,[["render",i]]);export{u as __pageData,h as default};

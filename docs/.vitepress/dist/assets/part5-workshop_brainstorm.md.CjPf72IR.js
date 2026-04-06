import{_ as a,o as n,c as p,ae as e}from"./chunks/framework.B6gjLfeO.js";const u=JSON.parse('{"title":"/brainstorm — 아이디어 발산","description":"","frontmatter":{},"headers":[],"relativePath":"part5-workshop/brainstorm.md","filePath":"part5-workshop/brainstorm.md"}'),l={name:"part5-workshop/brainstorm.md"};function t(i,s,o,c,r,d){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="brainstorm-—-아이디어-발산" tabindex="-1">/brainstorm — 아이디어 발산 <a class="header-anchor" href="#brainstorm-—-아이디어-발산" aria-label="Permalink to &quot;/brainstorm — 아이디어 발산&quot;">​</a></h1><h2 id="목표" tabindex="-1">목표 <a class="header-anchor" href="#목표" aria-label="Permalink to &quot;목표&quot;">​</a></h2><p>브레인스토밍 에이전트(<code>oma-brainstorm</code>)와 대화하며 <strong>아이디어를 구체화</strong>하고, 설계 문서를 만듭니다.</p><h2 id="실행-방법" tabindex="-1">실행 방법 <a class="header-anchor" href="#실행-방법" aria-label="Permalink to &quot;실행 방법&quot;">​</a></h2><p>AI IDE에서 다음과 같이 입력합니다:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/brainstorm</span></span>
<span class="line"><span>회의록을 입력하면 AI가 자동으로 요약하고 액션 아이템을 추출해주는 앱을 만들고 싶어.</span></span>
<span class="line"><span>React + Supabase + Gemini API로 구성하려 해.</span></span></code></pre></div><h2 id="진행-과정" tabindex="-1">진행 과정 <a class="header-anchor" href="#진행-과정" aria-label="Permalink to &quot;진행 과정&quot;">​</a></h2><h3 id="step-1-프로젝트-컨텍스트-탐색" tabindex="-1">Step 1: 프로젝트 컨텍스트 탐색 <a class="header-anchor" href="#step-1-프로젝트-컨텍스트-탐색" aria-label="Permalink to &quot;Step 1: 프로젝트 컨텍스트 탐색&quot;">​</a></h3><p>에이전트가 먼저 <strong>현재 프로젝트의 상태</strong>를 파악합니다:</p><ul><li>기존 코드가 있는지</li><li>어떤 프레임워크를 쓰고 있는지</li><li>관련된 패턴이나 규칙이 있는지</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>🤖 에이전트: &quot;프로젝트를 분석했습니다. 현재 빈 프로젝트이며,</span></span>
<span class="line"><span>             React + Supabase + Gemini API 구성을 원하시는군요.&quot;</span></span></code></pre></div><h3 id="step-2-명확화-질문" tabindex="-1">Step 2: 명확화 질문 <a class="header-anchor" href="#step-2-명확화-질문" aria-label="Permalink to &quot;Step 2: 명확화 질문&quot;">​</a></h3><p>에이전트가 <strong>하나씩</strong> 질문을 합니다:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>🤖 에이전트: &quot;회의록 입력 방식은 어떤 걸 선호하시나요?</span></span>
<span class="line"><span>             A) 텍스트 직접 입력 (복사-붙여넣기)</span></span>
<span class="line"><span>             B) 음성 녹음 후 STT 변환</span></span>
<span class="line"><span>             C) 파일 업로드 (txt, docx)&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>👤 사용자: &quot;A&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>🤖 에이전트: &quot;요약 결과에 포함할 항목은?</span></span>
<span class="line"><span>             A) 요약만</span></span>
<span class="line"><span>             B) 요약 + 액션 아이템</span></span>
<span class="line"><span>             C) 요약 + 액션 아이템 + 담당자 배정&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>👤 사용자: &quot;C&quot;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">💡 포인트</p><p>에이전트가 질문을 <strong>한 번에 하나씩</strong> 하는 것에 주목하세요. 한꺼번에 10개를 물어보면 사용자가 압도당합니다.</p></div><h3 id="step-3-접근-방식-제안" tabindex="-1">Step 3: 접근 방식 제안 <a class="header-anchor" href="#step-3-접근-방식-제안" aria-label="Permalink to &quot;Step 3: 접근 방식 제안&quot;">​</a></h3><p>충분한 정보가 모이면, <strong>2~3가지 접근 방식</strong>을 제안합니다:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>🤖 에이전트: &quot;3가지 접근 방식을 제안드립니다:</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 🅰 심플 SPA형 (권장)</span></span>
<span class="line"><span>    - React SPA + Supabase + Gemini API 직접 호출</span></span>
<span class="line"><span>    - 장점: 구조 단순, 학습 최적</span></span>
<span class="line"><span>    - 단점: API 키 노출 위험 (환경변수로 관리)</span></span>
<span class="line"><span>    - 난이도: S</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 🅱 Edge Function형</span></span>
<span class="line"><span>    - React + Supabase Edge Functions (서버사이드 AI 호출)</span></span>
<span class="line"><span>    - 장점: API 키 보안, 서버 로직 분리</span></span>
<span class="line"><span>    - 단점: Edge Function 설정 필요</span></span>
<span class="line"><span>    - 난이도: M</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 🅒 풀스택 분리형</span></span>
<span class="line"><span>    - React + FastAPI + Supabase + Gemini</span></span>
<span class="line"><span>    - 장점: 백엔드 완전 제어, 프롬프트 관리</span></span>
<span class="line"><span>    - 단점: 학습 범위 넓음</span></span>
<span class="line"><span>    - 난이도: L&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>👤 사용자: &quot;🅰로 가자&quot;</span></span></code></pre></div><h3 id="step-4-상세-설계" tabindex="-1">Step 4: 상세 설계 <a class="header-anchor" href="#step-4-상세-설계" aria-label="Permalink to &quot;Step 4: 상세 설계&quot;">​</a></h3><p>선택된 접근 방식을 <strong>섹션별로</strong> 상세 설계합니다:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>🤖 에이전트: &quot;아키텍처 설계를 보여드립니다:</span></span>
<span class="line"><span></span></span>
<span class="line"><span> ┌── App ──────────────────────────┐</span></span>
<span class="line"><span> │  ┌── MeetingInput ────────────┐ │</span></span>
<span class="line"><span> │  │  텍스트 입력 영역           │ │</span></span>
<span class="line"><span> │  │  [요약하기] 버튼            │ │</span></span>
<span class="line"><span> │  └────────────────────────────┘ │</span></span>
<span class="line"><span> │  ┌── SummaryView ─────────────┐ │</span></span>
<span class="line"><span> │  │  AI 요약 결과 표시          │ │</span></span>
<span class="line"><span> │  └────────────────────────────┘ │</span></span>
<span class="line"><span> │  ┌── ActionItems ─────────────┐ │</span></span>
<span class="line"><span> │  │  액션 아이템 + 담당자 목록   │ │</span></span>
<span class="line"><span> │  └────────────────────────────┘ │</span></span>
<span class="line"><span> │  ┌── MeetingHistory ──────────┐ │</span></span>
<span class="line"><span> │  │  과거 회의록 목록            │ │</span></span>
<span class="line"><span> │  └────────────────────────────┘ │</span></span>
<span class="line"><span> └──────── Supabase + Gemini ──────┘</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 승인하시겠습니까?&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>👤 사용자: &quot;좋아, 진행해&quot;</span></span></code></pre></div><h3 id="step-5-설계-문서-저장" tabindex="-1">Step 5: 설계 문서 저장 <a class="header-anchor" href="#step-5-설계-문서-저장" aria-label="Permalink to &quot;Step 5: 설계 문서 저장&quot;">​</a></h3><p>승인된 설계를 <strong>파일로 저장</strong>합니다:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>🤖 에이전트: &quot;설계 문서를 저장했습니다:</span></span>
<span class="line"><span>             📄 docs/plans/meeting-summarizer-design.md</span></span>
<span class="line"><span>             </span></span>
<span class="line"><span>             다음 단계로 /plan을 실행하세요.&quot;</span></span></code></pre></div><h2 id="산출물" tabindex="-1">산출물 <a class="header-anchor" href="#산출물" aria-label="Permalink to &quot;산출물&quot;">​</a></h2><p>이 단계가 끝나면 <strong>설계 문서</strong>가 생성됩니다:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docs/plans/meeting-summarizer-design.md</span></span>
<span class="line"><span>├── 프로젝트 개요</span></span>
<span class="line"><span>├── 선택된 접근 방식</span></span>
<span class="line"><span>├── 아키텍처 설계</span></span>
<span class="line"><span>├── 컴포넌트 구조</span></span>
<span class="line"><span>├── 데이터 모델</span></span>
<span class="line"><span>└── 에러 핸들링 전략</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">🎯 핵심 메시지</p><p><strong>&quot;AI가 바로 코드를 쓰는 게 아니라, 먼저 사고하고 합의한다.&quot;</strong></p><p>이 과정이 없으면 AI는 자기 마음대로 만들고, 사용자는 나중에 &quot;이게 아닌데…&quot;를 반복합니다.</p></div>`,28)])])}const b=a(l,[["render",t]]);export{u as __pageData,b as default};

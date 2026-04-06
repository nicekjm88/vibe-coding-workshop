import{_ as s,o as n,c as p,ae as e}from"./chunks/framework.B6gjLfeO.js";const u=JSON.parse('{"title":"/review — 품질 검증","description":"","frontmatter":{},"headers":[],"relativePath":"part5-workshop/review.md","filePath":"part5-workshop/review.md"}'),l={name:"part5-workshop/review.md"};function t(i,a,c,o,r,d){return n(),p("div",null,[...a[0]||(a[0]=[e(`<h1 id="review-—-품질-검증" tabindex="-1">/review — 품질 검증 <a class="header-anchor" href="#review-—-품질-검증" aria-label="Permalink to &quot;/review — 품질 검증&quot;">​</a></h1><h2 id="목표" tabindex="-1">목표 <a class="header-anchor" href="#목표" aria-label="Permalink to &quot;목표&quot;">​</a></h2><p>QA 에이전트(<code>oma-qa</code>)가 구현된 코드를 <strong>4가지 축으로 검증</strong>합니다: 보안, 성능, 접근성, 코드 품질.</p><h2 id="실행-방법" tabindex="-1">실행 방법 <a class="header-anchor" href="#실행-방법" aria-label="Permalink to &quot;실행 방법&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/review</span></span>
<span class="line"><span>orchestrate 결과물을 리뷰해줘</span></span></code></pre></div><h2 id="진행-과정" tabindex="-1">진행 과정 <a class="header-anchor" href="#진행-과정" aria-label="Permalink to &quot;진행 과정&quot;">​</a></h2><h3 id="step-1-보안-감사-owasp-top-10" tabindex="-1">Step 1: 보안 감사 (OWASP Top 10) <a class="header-anchor" href="#step-1-보안-감사-owasp-top-10" aria-label="Permalink to &quot;Step 1: 보안 감사 (OWASP Top 10)&quot;">​</a></h3><p>QA 에이전트가 <strong>보안 취약점</strong>을 자동으로 스캔합니다:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>🤖 QA 에이전트: &quot;보안 감사를 시작합니다...</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 🔒 OWASP Top 10 체크리스트</span></span>
<span class="line"><span> ├── ✅ A01: 접근 제어 — Supabase RLS 적용됨</span></span>
<span class="line"><span> ├── ✅ A02: 암호화 — HTTPS 강제, Supabase Auth 사용</span></span>
<span class="line"><span> ├── ⚠️ A03: 인젝션 — raw_text 입력에 sanitize 누락</span></span>
<span class="line"><span> ├── ✅ A07: 인증 — Supabase Auth 세션 관리 정상</span></span>
<span class="line"><span> └── ✅ A09: 로깅 — 에러 핸들링 구현됨</span></span>
<span class="line"><span></span></span>
<span class="line"><span> ⚠️ 발견 1건: XSS 방지를 위한 입력 sanitize 필요</span></span>
<span class="line"><span>    → src/lib/sanitize.ts 자동 생성 중...&quot;</span></span></code></pre></div><h3 id="step-2-성능-분석" tabindex="-1">Step 2: 성능 분석 <a class="header-anchor" href="#step-2-성능-분석" aria-label="Permalink to &quot;Step 2: 성능 분석&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>🤖 QA 에이전트: &quot;성능 분석 결과:</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 📊 번들 사이즈</span></span>
<span class="line"><span> ├── Total: 142KB (gzip)</span></span>
<span class="line"><span> ├── React: 42KB</span></span>
<span class="line"><span> ├── Supabase Client: 58KB</span></span>
<span class="line"><span> └── App Code: 42KB</span></span>
<span class="line"><span></span></span>
<span class="line"><span> ⚡ 최적화 제안:</span></span>
<span class="line"><span> └── Supabase Client lazy loading 적용 → -15KB 초기 로드</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 자동 수정을 적용할까요?&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>👤 사용자: &quot;적용해줘&quot;</span></span></code></pre></div><h3 id="step-3-접근성-검증-wcag-2-1-aa" tabindex="-1">Step 3: 접근성 검증 (WCAG 2.1 AA) <a class="header-anchor" href="#step-3-접근성-검증-wcag-2-1-aa" aria-label="Permalink to &quot;Step 3: 접근성 검증 (WCAG 2.1 AA)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>🤖 QA 에이전트: &quot;접근성 검증 결과:</span></span>
<span class="line"><span></span></span>
<span class="line"><span> ♿ WCAG 2.1 AA 체크리스트</span></span>
<span class="line"><span> ├── ✅ 키보드 네비게이션 — Tab 순서 정상</span></span>
<span class="line"><span> ├── ✅ 색 대비 — AAA 기준 충족 (7:1)</span></span>
<span class="line"><span> ├── ⚠️ ARIA 라벨 — 요약 버튼에 aria-label 누락</span></span>
<span class="line"><span> └── ✅ 화면 리더 — 시맨틱 HTML 사용</span></span>
<span class="line"><span></span></span>
<span class="line"><span> ⚠️ 발견 1건: 자동 수정 적용됨</span></span>
<span class="line"><span>    → &lt;button aria-label=&#39;회의 내용 요약하기&#39;&gt;요약&lt;/button&gt;&quot;</span></span></code></pre></div><h3 id="step-4-코드-품질-리뷰" tabindex="-1">Step 4: 코드 품질 리뷰 <a class="header-anchor" href="#step-4-코드-품질-리뷰" aria-label="Permalink to &quot;Step 4: 코드 품질 리뷰&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>🤖 QA 에이전트: &quot;코드 품질 종합 보고:</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 📋 리뷰 결과</span></span>
<span class="line"><span> ┌────────────┬────────┬─────────┐</span></span>
<span class="line"><span> │ 항목        │ 상태   │ 점수     │</span></span>
<span class="line"><span> ├────────────┼────────┼─────────┤</span></span>
<span class="line"><span> │ 보안        │ ✅ 통과 │ 95/100  │</span></span>
<span class="line"><span> │ 성능        │ ✅ 통과 │ 92/100  │</span></span>
<span class="line"><span> │ 접근성      │ ✅ 통과 │ 98/100  │</span></span>
<span class="line"><span> │ 코드 품질   │ ✅ 통과 │ 90/100  │</span></span>
<span class="line"><span> └────────────┴────────┴─────────┘</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> 종합 점수: 94/100 (Grade A)</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> 자동 수정: 2건 적용됨</span></span>
<span class="line"><span> 수동 확인 필요: 0건&quot;</span></span></code></pre></div><h2 id="산출물" tabindex="-1">산출물 <a class="header-anchor" href="#산출물" aria-label="Permalink to &quot;산출물&quot;">​</a></h2><p>이 단계가 끝나면 <strong>검증 완료된 코드</strong>가 됩니다:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>자동 수정된 파일</span></span>
<span class="line"><span>├── src/lib/sanitize.ts        (신규: XSS 방지)</span></span>
<span class="line"><span>├── src/lib/supabase.ts        (수정: lazy loading)</span></span>
<span class="line"><span>└── src/components/SummaryButton.tsx (수정: ARIA 라벨)</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">🎯 핵심 메시지</p><p><strong>&quot;코드가 돌아간다 ≠ 좋은 코드다.&quot;</strong></p><p><code>/review</code>는 사람이 놓치기 쉬운 보안·성능·접근성을 자동으로 잡아줍니다. 코드 리뷰를 AI에게 맡기면, 일관된 기준으로 매번 검증할 수 있습니다.</p></div>`,19)])])}const b=s(l,[["render",t]]);export{u as __pageData,b as default};

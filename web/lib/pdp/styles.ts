/**
 * Atomy PDP 산출물용 CSS.
 *
 * 본 CSS는 kr.atomy.com 상세 페이지(.product-detail-content 등) 내부에
 * 그대로 삽입되는 것을 전제로 한다.
 *
 * 상속 방어 전략:
 *   1) 모든 클래스는 `apdp-` prefix.
 *   2) 모든 규칙은 `.atomy-pdp` 루트 셀렉터를 prefix해 외부 규칙보다 specificity 우위.
 *   3) `.atomy-pdp`에서 font / color / line-height / box-sizing / margin·padding 을
 *      자식 전부에 대해 reset (`.atomy-pdp *`).
 *   4) 타이포·간격·컬러는 전부 CSS 변수로 정의, 본문에서만 참조.
 *   5) 고정 px 금지. clamp() 기반 fluid scale.
 */
export const PDP_CSS = `
.atomy-pdp,
.atomy-pdp * {
  box-sizing: border-box;
}

.atomy-pdp,
.atomy-pdp *::before,
.atomy-pdp *::after {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  text-align: left;
}

.atomy-pdp {
  /* ── Color tokens ── */
  --apdp-bg: #ffffff;
  --apdp-fg: #1a1a1a;
  --apdp-fg-sub: #4a4a4a;
  --apdp-fg-mute: #8a8a8a;
  --apdp-accent: #0064b5;
  --apdp-accent-soft: #e6f0fa;
  --apdp-line: #e5e5e5;
  --apdp-line-soft: #f2f2f2;
  --apdp-bg-soft: #fafafa;

  /* ── Type scale (utopia.fyi, 320→1440) ── */
  --apdp-fs--2: clamp(0.6875rem, 0.66rem + 0.14vw, 0.8125rem);
  --apdp-fs--1: clamp(0.8125rem, 0.78rem + 0.18vw, 0.9375rem);
  --apdp-fs-0:  clamp(0.9375rem, 0.91rem + 0.18vw, 1.0625rem);
  --apdp-fs-1:  clamp(1.0625rem, 1.02rem + 0.27vw, 1.25rem);
  --apdp-fs-2:  clamp(1.1875rem, 1.13rem + 0.45vw, 1.5rem);
  --apdp-fs-3:  clamp(1.375rem, 1.26rem + 0.71vw, 1.875rem);
  --apdp-fs-4:  clamp(1.5625rem, 1.4rem + 0.98vw, 2.25rem);
  --apdp-fs-5:  clamp(1.875rem, 1.6rem + 1.43vw, 2.875rem);
  --apdp-fs-6:  clamp(2.25rem, 1.86rem + 1.96vw, 3.625rem);
  --apdp-fs-7:  clamp(2.75rem, 1.96rem + 3.93vw, 5rem);

  /* ── Spacing scale ── */
  --apdp-sp-3xs: clamp(0.25rem, 0.23rem + 0.09vw, 0.375rem);
  --apdp-sp-2xs: clamp(0.5rem, 0.45rem + 0.18vw, 0.75rem);
  --apdp-sp-xs:  clamp(0.75rem, 0.66rem + 0.27vw, 1.125rem);
  --apdp-sp-s:   clamp(1.125rem, 0.98rem + 0.45vw, 1.75rem);
  --apdp-sp-m:   clamp(1.75rem, 1.5rem + 0.71vw, 2.625rem);
  --apdp-sp-l:   clamp(2.625rem, 2.21rem + 1.16vw, 4rem);
  --apdp-sp-xl:  clamp(4rem, 3.21rem + 2.23vw, 6.25rem);
  --apdp-sp-2xl: clamp(6.25rem, 4.82rem + 4.02vw, 10rem);

  /* ── Container ── */
  --apdp-content-max: 880px;
  --apdp-hero-max: 1440px;
  --apdp-gutter: clamp(1rem, 0.7rem + 1.5vw, 2.5rem);
  --apdp-grid-gap: clamp(0.75rem, 0.5rem + 1.25vw, 1.5rem);

  /* ── Defaults ── */
  font-family: "Pretendard", -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
    "Noto Sans KR", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: var(--apdp-fs-0);
  line-height: 1.7;
  color: var(--apdp-fg);
  background: var(--apdp-bg);
  width: 100%;
  max-width: var(--apdp-hero-max);
  margin: 0 auto;
  letter-spacing: -0.005em;
  word-break: keep-all;
}

.atomy-pdp img,
.atomy-pdp svg,
.atomy-pdp video {
  max-width: 100%;
  height: auto;
  display: block;
}

.atomy-pdp a { color: inherit; text-decoration: none; }

/* ── Section frame ── */
.atomy-pdp .apdp-section {
  padding: var(--apdp-sp-l) var(--apdp-gutter);
}
.atomy-pdp .apdp-section--soft { background: var(--apdp-bg-soft); }
.atomy-pdp .apdp-section--accent { background: var(--apdp-accent-soft); }
.atomy-pdp .apdp-container {
  max-width: var(--apdp-content-max);
  margin: 0 auto;
}
.atomy-pdp .apdp-container--wide {
  max-width: var(--apdp-hero-max);
  margin: 0 auto;
}

/* ── Typography utilities ── */
.atomy-pdp .apdp-eyebrow {
  font-size: var(--apdp-fs--1);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--apdp-accent);
  font-weight: 700;
}
.atomy-pdp .apdp-heading-xl {
  font-size: var(--apdp-fs-5);
  line-height: 1.2;
  letter-spacing: -0.025em;
  font-weight: 800;
}
.atomy-pdp .apdp-heading-l {
  font-size: var(--apdp-fs-4);
  line-height: 1.25;
  letter-spacing: -0.02em;
  font-weight: 700;
}
.atomy-pdp .apdp-heading-m {
  font-size: var(--apdp-fs-3);
  line-height: 1.3;
  letter-spacing: -0.02em;
  font-weight: 700;
}
.atomy-pdp .apdp-heading-s {
  font-size: var(--apdp-fs-2);
  line-height: 1.35;
  font-weight: 700;
}
.atomy-pdp .apdp-body { font-size: var(--apdp-fs-0); }
.atomy-pdp .apdp-body--lg { font-size: var(--apdp-fs-1); }
.atomy-pdp .apdp-caption {
  font-size: var(--apdp-fs--2);
  color: var(--apdp-fg-mute);
  line-height: 1.5;
}

/* ── Hero ── */
.atomy-pdp .apdp-hero {
  padding: var(--apdp-sp-xl) var(--apdp-gutter);
  text-align: center;
}
.atomy-pdp .apdp-hero__brand {
  font-size: var(--apdp-fs--1);
  letter-spacing: 0.32em;
  color: var(--apdp-accent);
  font-weight: 800;
  margin-bottom: var(--apdp-sp-s);
}
.atomy-pdp .apdp-hero__tagline {
  font-size: var(--apdp-fs-3);
  line-height: 1.4;
  font-weight: 500;
  color: var(--apdp-fg-sub);
  margin-bottom: var(--apdp-sp-m);
}
.atomy-pdp .apdp-hero__name-ko {
  font-size: var(--apdp-fs-6);
  line-height: 1.1;
  letter-spacing: -0.03em;
  font-weight: 800;
  margin-bottom: var(--apdp-sp-2xs);
}
.atomy-pdp .apdp-hero__name-en {
  font-size: var(--apdp-fs-1);
  letter-spacing: 0.15em;
  color: var(--apdp-fg-mute);
  font-weight: 600;
  margin-bottom: var(--apdp-sp-m);
}
.atomy-pdp .apdp-hero__badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--apdp-sp-2xs);
}
.atomy-pdp .apdp-badge {
  display: inline-flex;
  align-items: center;
  padding: var(--apdp-sp-3xs) var(--apdp-sp-xs);
  border: 1px solid var(--apdp-accent);
  color: var(--apdp-accent);
  font-size: var(--apdp-fs--1);
  font-weight: 700;
  border-radius: 9999px;
}

/* ── Selling points grid ── */
.atomy-pdp .apdp-sp-grid {
  display: grid;
  gap: var(--apdp-grid-gap);
  grid-template-columns: 1fr;
}
@media (min-width: 640px) {
  .atomy-pdp .apdp-sp-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 960px) {
  .atomy-pdp .apdp-sp-grid { grid-template-columns: repeat(3, 1fr); }
}
.atomy-pdp .apdp-sp-card {
  padding: var(--apdp-sp-m) var(--apdp-sp-s);
  background: var(--apdp-bg);
  border: 1px solid var(--apdp-line);
  border-radius: 12px;
  text-align: center;
}
.atomy-pdp .apdp-sp-card__title {
  font-size: var(--apdp-fs-2);
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: var(--apdp-sp-xs);
}
.atomy-pdp .apdp-sp-card__body {
  font-size: var(--apdp-fs-0);
  line-height: 1.6;
  color: var(--apdp-fg-sub);
}

/* ── POINT block ── */
.atomy-pdp .apdp-point__no {
  font-size: var(--apdp-fs-7);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.04em;
  color: var(--apdp-accent);
  margin-bottom: var(--apdp-sp-s);
}
.atomy-pdp .apdp-point__title {
  font-size: var(--apdp-fs-4);
  line-height: 1.25;
  letter-spacing: -0.02em;
  font-weight: 800;
  margin-bottom: var(--apdp-sp-xs);
}
.atomy-pdp .apdp-point__subtitle {
  font-size: var(--apdp-fs-1);
  line-height: 1.5;
  color: var(--apdp-fg-sub);
  margin-bottom: var(--apdp-sp-m);
}
.atomy-pdp .apdp-point__body {
  font-size: var(--apdp-fs-0);
  line-height: 1.8;
  margin-bottom: var(--apdp-sp-s);
}
.atomy-pdp .apdp-point__cite {
  font-size: var(--apdp-fs--2);
  color: var(--apdp-fg-mute);
  border-left: 2px solid var(--apdp-line);
  padding-left: var(--apdp-sp-xs);
  margin-top: var(--apdp-sp-s);
}
.atomy-pdp .apdp-point__figure {
  margin: var(--apdp-sp-s) 0;
}

/* ── Target personas ── */
.atomy-pdp .apdp-personas {
  display: grid;
  gap: var(--apdp-sp-xs);
  max-width: 720px;
  margin: 0 auto;
}
.atomy-pdp .apdp-persona {
  display: flex;
  gap: var(--apdp-sp-xs);
  align-items: flex-start;
  padding: var(--apdp-sp-xs) var(--apdp-sp-s);
  background: var(--apdp-bg);
  border: 1px solid var(--apdp-line);
  border-radius: 8px;
  font-size: var(--apdp-fs-0);
  line-height: 1.5;
}
.atomy-pdp .apdp-persona__check {
  flex-shrink: 0;
  width: 1.25em;
  height: 1.25em;
  color: var(--apdp-accent);
  font-weight: 800;
}

/* ── Usage steps ── */
.atomy-pdp .apdp-steps {
  display: grid;
  gap: var(--apdp-sp-s);
  grid-template-columns: 1fr;
}
@media (min-width: 640px) {
  .atomy-pdp .apdp-steps { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 960px) {
  .atomy-pdp .apdp-steps { grid-template-columns: repeat(3, 1fr); }
}
.atomy-pdp .apdp-step {
  padding: var(--apdp-sp-s);
  background: var(--apdp-bg);
  border: 1px solid var(--apdp-line);
  border-radius: 12px;
}
.atomy-pdp .apdp-step__no {
  font-size: var(--apdp-fs--1);
  letter-spacing: 0.18em;
  color: var(--apdp-accent);
  font-weight: 800;
  margin-bottom: var(--apdp-sp-2xs);
}
.atomy-pdp .apdp-step__body {
  font-size: var(--apdp-fs-0);
  line-height: 1.6;
}

/* ── Tables ── */
.atomy-pdp .apdp-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--apdp-fs--1);
  line-height: 1.5;
}
.atomy-pdp .apdp-table th,
.atomy-pdp .apdp-table td {
  padding: var(--apdp-sp-2xs) var(--apdp-sp-xs);
  border-bottom: 1px solid var(--apdp-line);
  vertical-align: top;
}
.atomy-pdp .apdp-table th {
  width: 30%;
  background: var(--apdp-bg-soft);
  font-weight: 700;
  color: var(--apdp-fg-sub);
}

/* ── Q&A accordion ── */
.atomy-pdp .apdp-qna {
  border-top: 1px solid var(--apdp-line);
}
.atomy-pdp .apdp-qna__item {
  border-bottom: 1px solid var(--apdp-line);
}
.atomy-pdp .apdp-qna__q {
  padding: var(--apdp-sp-s) 0;
  font-weight: 700;
  font-size: var(--apdp-fs-1);
  cursor: pointer;
  list-style: none;
}
.atomy-pdp .apdp-qna__q::-webkit-details-marker { display: none; }
.atomy-pdp .apdp-qna__q::after {
  content: "+";
  float: right;
  font-weight: 400;
  color: var(--apdp-accent);
}
.atomy-pdp .apdp-qna__item[open] .apdp-qna__q::after { content: "–"; }
.atomy-pdp .apdp-qna__a {
  padding: 0 0 var(--apdp-sp-s);
  font-size: var(--apdp-fs-0);
  color: var(--apdp-fg-sub);
  line-height: 1.7;
}

/* ── Quality Seal ── */
.atomy-pdp .apdp-seal {
  text-align: center;
  padding: var(--apdp-sp-l) var(--apdp-gutter);
  background: var(--apdp-bg);
  border-top: 1px solid var(--apdp-line);
  border-bottom: 1px solid var(--apdp-line);
}
.atomy-pdp .apdp-seal__title {
  font-size: var(--apdp-fs--1);
  letter-spacing: 0.32em;
  font-weight: 800;
  color: var(--apdp-accent);
  margin-bottom: var(--apdp-sp-xs);
}
.atomy-pdp .apdp-seal__body {
  font-size: var(--apdp-fs-0);
  color: var(--apdp-fg-sub);
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.7;
}

/* ── Section header ── */
.atomy-pdp .apdp-section-header {
  text-align: center;
  margin-bottom: var(--apdp-sp-l);
}
.atomy-pdp .apdp-section-header .apdp-eyebrow {
  display: block;
  margin-bottom: var(--apdp-sp-xs);
}

/* ── Citation ── */
.atomy-pdp .apdp-citations {
  margin-top: var(--apdp-sp-m);
  padding-top: var(--apdp-sp-s);
  border-top: 1px solid var(--apdp-line);
  font-size: var(--apdp-fs--2);
  color: var(--apdp-fg-mute);
  line-height: 1.6;
}
.atomy-pdp .apdp-citations li { margin-bottom: var(--apdp-sp-3xs); }
`;

# Atomy PDP Generator (web)

Atomy 스타일 제품상세페이지(PDP)를 자동 생성하는 Next.js 도구. PRD `docs/plans/`의 Atomy PDP 생성기 명세 v0.1 구현체의 1차 산출물.

## 기술 스택

- **Next.js 15** (App Router, React 19)
- **antd v5** — 제너레이터 운영 UI (`@ant-design/nextjs-registry`로 SSR 호환)
- **Google Gemini** (`@google/generative-ai`) — 브리프 → 카피 보강
- TypeScript

## 빠른 시작

```bash
cd web
npm install
cp .env.example .env.local      # GEMINI_API_KEY 채우기
npm run dev                     # http://localhost:3001
```

## 디렉토리 구조

```
web/
├── app/
│   ├── layout.tsx              # antd ConfigProvider + Pretendard
│   ├── page.tsx                # 랜딩
│   ├── generate/page.tsx       # 제너레이터 (업로드/브리프/섹션/iframe 미리보기)
│   ├── globals.css             # 운영 UI 전역 CSS
│   └── api/
│       ├── render/route.ts     # product.json → PDP HTML
│       └── generate/route.ts   # Gemini로 카피 보강
├── lib/
│   ├── pdp/
│   │   ├── styles.ts           # 산출 HTML에 인라인되는 fluid CSS
│   │   ├── sections.ts         # 섹션 라이브러리 (HTML 빌더)
│   │   ├── render.ts           # 카테고리별 기본 섹션 + 최종 HTML 조립
│   │   ├── validate.ts         # 의무표시 검증기
│   │   └── sample.ts           # 샘플 product.json (SKU 004049)
│   └── gemini/
│       ├── client.ts
│       └── prompts.ts
└── types/product.ts            # ProductJson 스키마
```

## PDP CSS 스코핑 전략 (★ 중요)

산출 HTML은 `kr.atomy.com` PDP 본문(자유 HTML 영역)에 그대로 삽입됨을 전제로 합니다. 부모 사이트의 reset/타이포가 새 PDP에 새어 들어오지 않도록 다음 규칙을 적용:

1. 루트 래퍼 `.atomy-pdp` 하위에서 `* { margin:0; padding:0; border:0; font:inherit; }` reset
2. 모든 자체 클래스 prefix `apdp-`
3. 모든 규칙은 `.atomy-pdp .apdp-...` 형태로 specificity 우위 확보
4. font-family / line-height / color 는 `.atomy-pdp` 단일 지점에서 선언
5. 모든 사이즈는 `clamp()` 기반 CSS 변수로만 표현 (px 직접 사용 금지)

이 덕분에 CMS 임포트 시:

- "HTML" 버튼 → 단독으로 열어 미리볼 수 있는 standalone document
- "CMS 삽입용 Fragment" 버튼 → `<style>...</style><div class="atomy-pdp">...</div>` fragment (그대로 붙여넣기 가능)

## 카테고리별 기본 섹션

| 카테고리 | 기본 섹션 순서 |
|---|---|
| health-supplement | hero → selling-points-grid → point-block → target-personas → usage-guide → nutrition-table → mandatory-info → qna → citations → quality-seal |
| beauty | hero → selling-points-grid → point-block → usage-guide → mandatory-info → qna → citations → quality-seal |
| food | hero → selling-points-grid → point-block → target-personas → usage-guide → nutrition-table → mandatory-info → quality-seal |
| living | hero → selling-points-grid → point-block → usage-guide → mandatory-info → quality-seal |

## Gemini 활용

`/api/generate`는 product.json + 브리프를 받아 다음 5개 키만 보강합니다:

- `tagline`, `selling_points`, `points`, `target_personas`, `qna`

`pricing`, `mandatory_info`, `package`, `certifications` 등 사실 정보는 절대 LLM이 임의 생성하지 못하도록 머지 단계에서 원본 값을 보존합니다. (PRD 13. 리스크 — "AI 생성 카피의 사실성·법적 안전성" 대응)

## TODO (다음 단계)

- [ ] beauty / food / living 카테고리 전용 섹션 (clinical-result, ingredient-breakdown, spec-table 등)
- [ ] Overpass 템플릿 변수 매핑 어댑터 (`{{product.price}}` 등)
- [ ] qa-report.md 자동 생성 (의무표시 / 반응형 / 접근성 체크)
- [ ] 부분 섹션만 재생성 (현재는 product 전체 머지)
- [ ] SQLite 프로젝트 영속화 (SKU별 작업 이력)

import type {
  ProductJson,
  ProductPoint,
  PointBlock,
  SectionId,
} from "@/types/product";

/** HTML escape — JSON에서 들어오는 텍스트가 마크업으로 해석되지 않도록 */
function esc(s: string | undefined | null): string {
  if (s == null) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderHero(p: ProductJson): string {
  const badges = (p.certifications ?? [])
    .map((c) => `<span class="apdp-badge">${esc(c)}</span>`)
    .join("");
  return `
    <section class="apdp-section apdp-hero">
      <div class="apdp-container">
        <div class="apdp-hero__brand">ATOMY</div>
        ${p.tagline ? `<p class="apdp-hero__tagline">${esc(p.tagline)}</p>` : ""}
        <h1 class="apdp-hero__name-ko">${esc(p.names.ko)}</h1>
        ${p.names.en ? `<p class="apdp-hero__name-en">${esc(p.names.en)}</p>` : ""}
        ${badges ? `<div class="apdp-hero__badges">${badges}</div>` : ""}
      </div>
    </section>
  `;
}

function renderSellingPoints(p: ProductJson): string {
  if (!p.selling_points?.length) return "";
  const cards = p.selling_points
    .map(
      (sp) => `
        <article class="apdp-sp-card">
          <h3 class="apdp-sp-card__title">${esc(sp.title)}</h3>
          <p class="apdp-sp-card__body">${esc(sp.body)}</p>
        </article>
      `
    )
    .join("");
  return `
    <section class="apdp-section apdp-section--soft">
      <div class="apdp-container--wide">
        <header class="apdp-section-header">
          <span class="apdp-eyebrow">SPECIAL</span>
          <h2 class="apdp-heading-xl">특별함</h2>
        </header>
        <div class="apdp-sp-grid">${cards}</div>
      </div>
    </section>
  `;
}

function renderPointBlock(block: PointBlock): string {
  if (block.type === "text") {
    return `<p class="apdp-point__body">${esc(block.body)}</p>`;
  }
  if (block.type === "infographic") {
    return `<figure class="apdp-point__figure"><img src="${esc(
      block.src
    )}" alt="${esc(block.alt ?? "")}" loading="lazy" decoding="async" /></figure>`;
  }
  return `<p class="apdp-point__cite">${esc(block.body)}</p>`;
}

function renderPoints(p: ProductJson): string {
  if (!p.points?.length) return "";
  return p.points
    .map(
      (pt: ProductPoint, i: number) => `
        <section class="apdp-section${i % 2 === 1 ? " apdp-section--soft" : ""}">
          <div class="apdp-container">
            <div class="apdp-point__no">POINT ${esc(pt.no)}</div>
            <h2 class="apdp-point__title">${esc(pt.title)}</h2>
            ${pt.subtitle ? `<p class="apdp-point__subtitle">${esc(pt.subtitle)}</p>` : ""}
            ${pt.blocks.map(renderPointBlock).join("")}
          </div>
        </section>
      `
    )
    .join("");
}

function renderTargetPersonas(p: ProductJson): string {
  if (!p.target_personas?.length) return "";
  const items = p.target_personas
    .map(
      (t) => `
        <li class="apdp-persona">
          <span class="apdp-persona__check">✓</span>
          <span>${esc(t)}</span>
        </li>
      `
    )
    .join("");
  return `
    <section class="apdp-section">
      <div class="apdp-container">
        <header class="apdp-section-header">
          <span class="apdp-eyebrow">FOR YOU</span>
          <h2 class="apdp-heading-l">이런 분들께 권해드립니다</h2>
        </header>
        <ul class="apdp-personas">${items}</ul>
      </div>
    </section>
  `;
}

function renderUsage(p: ProductJson): string {
  if (!p.usage?.steps?.length) return "";
  const heading =
    p.usage.type === "intake"
      ? "섭취방법"
      : p.usage.type === "enjoy"
        ? "즐기는 방법"
        : "사용방법";
  const steps = p.usage.steps
    .map(
      (s, i) => `
        <article class="apdp-step">
          <div class="apdp-step__no">STEP ${String(i + 1).padStart(2, "0")}</div>
          <p class="apdp-step__body">${esc(s)}</p>
        </article>
      `
    )
    .join("");
  return `
    <section class="apdp-section apdp-section--soft">
      <div class="apdp-container--wide">
        <header class="apdp-section-header">
          <span class="apdp-eyebrow">HOW TO</span>
          <h2 class="apdp-heading-l">${esc(heading)}</h2>
        </header>
        <div class="apdp-steps">${steps}</div>
      </div>
    </section>
  `;
}

function renderQna(p: ProductJson): string {
  if (!p.qna?.length) return "";
  const items = p.qna
    .map(
      (q) => `
        <details class="apdp-qna__item">
          <summary class="apdp-qna__q">${esc(q.q)}</summary>
          <div class="apdp-qna__a">${esc(q.a)}</div>
        </details>
      `
    )
    .join("");
  return `
    <section class="apdp-section">
      <div class="apdp-container">
        <header class="apdp-section-header">
          <span class="apdp-eyebrow">FAQ</span>
          <h2 class="apdp-heading-l">자주 묻는 질문</h2>
        </header>
        <div class="apdp-qna">${items}</div>
      </div>
    </section>
  `;
}

function renderQualitySeal(): string {
  return `
    <section class="apdp-seal">
      <div class="apdp-seal__title">ABSOLUTE ATOMY QUALITY ASSURANCE</div>
      <p class="apdp-seal__body">
        애터미는 절대품질, 절대가격이라는 약속을 지키기 위해 끊임없이 노력합니다.
        고객의 신뢰에 보답하는 최고의 품질을 제공합니다.
      </p>
    </section>
  `;
}

function renderNutritionTable(p: ProductJson): string {
  const nut = p.mandatory_info?.nutrition;
  if (!nut?.rows?.length) return "";
  const rows = nut.rows
    .map(
      (r) => `
        <tr>
          <th scope="row">${esc(r.label)}</th>
          <td>${esc(r.value)}</td>
          <td>${esc(r.percent ?? "")}</td>
        </tr>
      `
    )
    .join("");
  return `
    <section class="apdp-section">
      <div class="apdp-container">
        <header class="apdp-section-header">
          <span class="apdp-eyebrow">NUTRITION</span>
          <h2 class="apdp-heading-m">영양정보 (${esc(nut.serving)} 기준)</h2>
        </header>
        <table class="apdp-table">
          <thead>
            <tr>
              <th scope="col">영양성분</th>
              <th scope="col">함량</th>
              <th scope="col">% 영양성분 기준치</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </section>
  `;
}

function renderProductInfoTable(p: ProductJson): string {
  const m = p.mandatory_info ?? {};
  const all: Array<[string, string | undefined]> = [
    ["제품명", p.names.ko],
    ["식품유형 / 제품유형", m.product_type],
    ["내용량", p.package?.content],
    ["원재료명 및 함량", m.ingredients],
    ["기능성", m.functional_claim],
    ["보관방법", m.storage],
    ["제조원", m.manufacturer],
    ["판매원", m.seller],
  ];
  const rows = all.filter((r): r is [string, string] => Boolean(r[1]));
  if (!rows.length) return "";
  const body = rows
    .map(
      ([k, v]) => `
        <tr><th scope="row">${esc(k)}</th><td>${esc(v ?? "")}</td></tr>
      `
    )
    .join("");
  return `
    <section class="apdp-section apdp-section--soft">
      <div class="apdp-container">
        <header class="apdp-section-header">
          <span class="apdp-eyebrow">PRODUCT INFO</span>
          <h2 class="apdp-heading-m">제품정보</h2>
        </header>
        <table class="apdp-table"><tbody>${body}</tbody></table>
        ${
          m.caution
            ? `<p class="apdp-caption" style="margin-top: var(--apdp-sp-s)">⚠ ${esc(
                m.caution
              )}</p>`
            : ""
        }
      </div>
    </section>
  `;
}

function renderMandatoryInfo(p: ProductJson): string {
  return renderProductInfoTable(p);
}

function renderCitations(p: ProductJson): string {
  if (!p.citations?.length) return "";
  const items = p.citations
    .map(
      (c) =>
        `<li>${esc(c.title)}${c.publisher ? `, ${esc(c.publisher)}` : ""}${c.year ? ` (${c.year})` : ""}</li>`
    )
    .join("");
  return `
    <section class="apdp-section">
      <div class="apdp-container">
        <h3 class="apdp-heading-s">출처</h3>
        <ol class="apdp-citations">${items}</ol>
      </div>
    </section>
  `;
}

const RENDERERS: Record<SectionId, (p: ProductJson) => string> = {
  hero: renderHero,
  "selling-points-grid": renderSellingPoints,
  "point-block": renderPoints,
  "target-personas": renderTargetPersonas,
  "usage-guide": renderUsage,
  qna: renderQna,
  "quality-seal": renderQualitySeal,
  "nutrition-table": renderNutritionTable,
  "product-info-table": renderProductInfoTable,
  "mandatory-info": renderMandatoryInfo,
  citations: renderCitations,
};

export interface SectionMeta {
  id: SectionId;
  label: string;
  description: string;
  defaultFor: ("health-supplement" | "beauty" | "food" | "living")[];
}

export const SECTION_CATALOG: SectionMeta[] = [
  {
    id: "hero",
    label: "Hero (브랜드/제품명/태그라인)",
    description: "브랜드 로고 + 한 줄 카피 + 제품명(국·영문) + 핵심 인증",
    defaultFor: ["health-supplement", "beauty", "food", "living"],
  },
  {
    id: "selling-points-grid",
    label: "셀링포인트 그리드 (특별함)",
    description: "핵심 셀링포인트 3~5 카드 그리드",
    defaultFor: ["health-supplement", "beauty", "food", "living"],
  },
  {
    id: "point-block",
    label: "POINT 01~N 블록",
    description: "큰 번호 + 제목 + 본문 + 인포그래픽 + 출처",
    defaultFor: ["health-supplement", "beauty", "food", "living"],
  },
  {
    id: "target-personas",
    label: "이런 분들께 권해드립니다",
    description: "체크리스트형 타겟 페르소나 5~7개",
    defaultFor: ["health-supplement", "beauty", "food"],
  },
  {
    id: "usage-guide",
    label: "사용/섭취 STEP",
    description: "STEP 1~N (카테고리별 명칭 자동)",
    defaultFor: ["health-supplement", "beauty", "food", "living"],
  },
  {
    id: "qna",
    label: "Q&A 아코디언",
    description: "자주 묻는 질문 5~10",
    defaultFor: ["health-supplement", "beauty", "food", "living"],
  },
  {
    id: "nutrition-table",
    label: "영양정보 표",
    description: "건강기능식품/식품 의무",
    defaultFor: ["health-supplement", "food"],
  },
  {
    id: "mandatory-info",
    label: "제품정보 / 의무표시",
    description: "식약처·공정위 의무 표시 자동 채움",
    defaultFor: ["health-supplement", "beauty", "food", "living"],
  },
  {
    id: "citations",
    label: "출처 / 인용",
    description: "효능 주장 시 학술/시험 출처",
    defaultFor: ["health-supplement", "beauty"],
  },
  {
    id: "quality-seal",
    label: "Absolute Atomy Quality Assurance",
    description: "모든 Atomy PDP 공통 푸터",
    defaultFor: ["health-supplement", "beauty", "food", "living"],
  },
];

export function renderSection(id: SectionId, p: ProductJson): string {
  return RENDERERS[id](p);
}

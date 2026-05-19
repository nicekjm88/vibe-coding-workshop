import type { ProductJson, SectionId } from "@/types/product";
import { renderSection } from "./sections";
import { PDP_CSS } from "./styles";

export interface RenderOptions {
  /** 출력 모드. preview는 standalone HTML, embed는 fragment(CMS 삽입용) */
  mode?: "preview" | "embed";
  /** 사용할 섹션 순서. 미지정 시 카테고리별 기본 */
  sections?: SectionId[];
}

export function defaultSectionsFor(
  category: ProductJson["category"]
): SectionId[] {
  switch (category) {
    case "health-supplement":
      return [
        "hero",
        "selling-points-grid",
        "point-block",
        "target-personas",
        "usage-guide",
        "nutrition-table",
        "mandatory-info",
        "qna",
        "citations",
        "quality-seal",
      ];
    case "beauty":
      return [
        "hero",
        "selling-points-grid",
        "point-block",
        "usage-guide",
        "mandatory-info",
        "qna",
        "citations",
        "quality-seal",
      ];
    case "food":
      return [
        "hero",
        "selling-points-grid",
        "point-block",
        "target-personas",
        "usage-guide",
        "nutrition-table",
        "mandatory-info",
        "quality-seal",
      ];
    case "living":
      return [
        "hero",
        "selling-points-grid",
        "point-block",
        "usage-guide",
        "mandatory-info",
        "quality-seal",
      ];
  }
}

export function renderPdp(
  product: ProductJson,
  opts: RenderOptions = {}
): string {
  const sections =
    opts.sections && opts.sections.length > 0
      ? opts.sections
      : defaultSectionsFor(product.category);

  const body = sections
    .map((id) => renderSection(id, product))
    .filter(Boolean)
    .join("\n");

  const fragment = `<style>${PDP_CSS}</style>\n<div class="atomy-pdp" data-sku="${product.sku}">\n${body}\n</div>`;

  if (opts.mode === "embed") return fragment;

  return `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeAttr(product.names.ko)} | ATOMY</title>
  <meta name="description" content="${escapeAttr(product.tagline ?? product.names.ko)}" />
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
  <style>html,body{margin:0;padding:0;background:#fff;}</style>
</head>
<body>
${fragment}
</body>
</html>`;
}

function escapeAttr(s: string): string {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

import type { ProductJson } from "@/types/product";

export interface ValidationIssue {
  level: "error" | "warning";
  field: string;
  message: string;
}

const REQUIRED_FIELDS: Record<
  ProductJson["category"],
  Array<{ path: string; label: string }>
> = {
  "health-supplement": [
    { path: "mandatory_info.product_type", label: "제품유형(식품유형)" },
    { path: "mandatory_info.ingredients", label: "원재료명 및 함량" },
    { path: "mandatory_info.nutrition", label: "영양정보" },
    { path: "mandatory_info.storage", label: "보관방법" },
    { path: "mandatory_info.manufacturer", label: "제조원" },
    { path: "mandatory_info.seller", label: "판매원" },
    { path: "package.content", label: "내용량" },
  ],
  beauty: [
    { path: "mandatory_info.ingredients", label: "전성분" },
    { path: "mandatory_info.manufacturer", label: "제조원" },
    { path: "mandatory_info.seller", label: "판매원" },
    { path: "mandatory_info.caution", label: "사용 시 주의사항" },
  ],
  food: [
    { path: "mandatory_info.product_type", label: "식품유형" },
    { path: "mandatory_info.ingredients", label: "원재료명" },
    { path: "mandatory_info.storage", label: "보관방법" },
    { path: "mandatory_info.manufacturer", label: "제조원" },
    { path: "package.content", label: "내용량" },
  ],
  living: [
    { path: "mandatory_info.materials", label: "주요 소재" },
    { path: "mandatory_info.manufacturer", label: "제조원" },
    { path: "mandatory_info.seller", label: "판매원" },
  ],
};

function get(obj: unknown, path: string): unknown {
  return path
    .split(".")
    .reduce<unknown>(
      (acc, key) =>
        acc && typeof acc === "object"
          ? (acc as Record<string, unknown>)[key]
          : undefined,
      obj
    );
}

export function validateProduct(p: ProductJson): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const required = REQUIRED_FIELDS[p.category] ?? [];

  for (const { path, label } of required) {
    const v = get(p, path);
    const isEmpty =
      v == null ||
      v === "" ||
      (Array.isArray(v) && v.length === 0) ||
      (typeof v === "object" && Object.keys(v as object).length === 0);
    if (isEmpty) {
      issues.push({
        level: "error",
        field: path,
        message: `${label} 누락 (${path})`,
      });
    }
  }

  if (!p.names?.ko) {
    issues.push({
      level: "error",
      field: "names.ko",
      message: "한글 제품명이 필요합니다",
    });
  }

  if (!p.selling_points?.length) {
    issues.push({
      level: "warning",
      field: "selling_points",
      message: "셀링포인트가 비어있어 hero 외 인상이 약해집니다",
    });
  }
  if (!p.points?.length) {
    issues.push({
      level: "warning",
      field: "points",
      message: "POINT 블록이 비어있어 본문 콘텐츠가 부족합니다",
    });
  }

  return issues;
}

export type ProductCategory =
  | "health-supplement"
  | "beauty"
  | "food"
  | "living";

export interface ProductNames {
  ko: string;
  en?: string;
}

export interface ProductPricing {
  price_krw: number;
  pv?: number;
  free_shipping_threshold_met?: boolean;
}

export interface ProductPackage {
  content: string;
  shelf_life_months?: number;
}

export interface SellingPoint {
  title: string;
  body: string;
}

export type PointBlock =
  | { type: "text"; body: string }
  | { type: "infographic"; src: string; alt?: string }
  | { type: "citation"; body: string };

export interface ProductPoint {
  no: string;
  title: string;
  subtitle?: string;
  blocks: PointBlock[];
}

export interface UsageGuide {
  type: "intake" | "use" | "enjoy";
  steps: string[];
}

export interface NutritionRow {
  label: string;
  value: string;
  percent?: string | null;
}

export interface NutritionInfo {
  serving: string;
  rows: NutritionRow[];
}

export interface MandatoryInfo {
  product_type?: string;
  ingredients?: string;
  nutrition?: NutritionInfo;
  storage?: string;
  manufacturer?: string;
  seller?: string;
  caution?: string;
  functional_claim?: string;
  materials?: string;
}

export interface Citation {
  type: "study" | "patent" | "test" | "etc";
  title: string;
  publisher?: string;
  year?: number;
}

export interface QnaItem {
  q: string;
  a: string;
}

export interface ProductJson {
  sku: string;
  category: ProductCategory;
  subcategory?: string;
  names: ProductNames;
  tagline?: string;
  pricing?: ProductPricing;
  package?: ProductPackage;
  certifications?: string[];
  images?: {
    gallery?: string[];
    detail?: string[];
  };
  selling_points?: SellingPoint[];
  points?: ProductPoint[];
  target_personas?: string[];
  usage?: UsageGuide;
  qna?: QnaItem[];
  mandatory_info?: MandatoryInfo;
  citations?: Citation[];
}

export type SectionId =
  | "hero"
  | "selling-points-grid"
  | "point-block"
  | "target-personas"
  | "usage-guide"
  | "qna"
  | "quality-seal"
  | "nutrition-table"
  | "product-info-table"
  | "mandatory-info"
  | "citations";

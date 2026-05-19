import type { ProductJson } from "@/types/product";

/**
 * PRD 분석 기준 SKU 004049 — 애터미 포스트바이오틱스 코어밸런스 5000
 * (필드 일부는 PRD 본문에서 발췌)
 */
export const SAMPLE_PRODUCT: ProductJson = {
  sku: "004049",
  category: "health-supplement",
  subcategory: "probiotics",
  names: {
    ko: "애터미 포스트바이오틱스 코어밸런스 5000",
    en: "ATOMY POSTBIOTICS CORE BALANCE 5000",
  },
  tagline: "한 포에 담은 열처리 유산균 5,000억 Cell",
  pricing: { price_krw: 37800, pv: 17000, free_shipping_threshold_met: true },
  package: { content: "60g (2g × 30포)", shelf_life_months: 24 },
  certifications: ["HACCP", "차세대 세계일류 상품"],
  selling_points: [
    {
      title: "고함량 포스트바이오틱스",
      body: "1포 당 5,000억 Cells 포스트바이오틱스 함유로 매일 든든하게.",
    },
    {
      title: "7종 복합 배합",
      body: "엄선된 7종 포스트바이오틱스를 황금 비율로 배합했습니다.",
    },
    {
      title: "간편한 1일 1포",
      body: "식사 시간과 관계없이 언제 어디서나 편리하게 섭취하세요.",
    },
  ],
  points: [
    {
      no: "01",
      title: "고함량 포스트바이오틱스",
      subtitle: "1포 당 5,000억 Cells의 고함량 포스트바이오틱스 함유",
      blocks: [
        {
          type: "text",
          body: "포스트바이오틱스 전문 기업과의 협업으로 안정성과 효율을 동시에 잡았습니다. 위산과 담즙산을 통과해 장까지 도달하는 열처리 사균체 방식을 채택했습니다.",
        },
        {
          type: "citation",
          body: "Consensus statement on the definition and scope of postbiotics, ISAPP, Nature Reviews Gastroenterology & Hepatology (2021).",
        },
      ],
    },
    {
      no: "02",
      title: "7종 포스트바이오틱스 황금 비율",
      subtitle: "단일 균이 아닌 7종 복합 균체로 균형 잡힌 설계",
      blocks: [
        {
          type: "text",
          body: "락토바실러스, 비피도박테리움 등 7종을 균형 있게 배합해 다양한 환경에서 안정적으로 작용하도록 설계했습니다.",
        },
      ],
    },
    {
      no: "03",
      title: "간편한 스틱 포장",
      subtitle: "물 없이 입 안에서 부드럽게 녹는 분말",
      blocks: [
        {
          type: "text",
          body: "2g 1회 분량 스틱으로 휴대성과 위생을 모두 잡았습니다. 식사·시간 제약 없이 1일 1포 섭취 가능.",
        },
      ],
    },
  ],
  target_personas: [
    "아이부터 어른까지 누구나 유산균 섭취가 필요하신 분",
    "섭취 시간의 제약 없이 유산균을 섭취하고 싶은 분",
    "장 건강이 신경 쓰이는 분",
    "외식이 잦고 식습관이 불규칙하신 분",
    "여행·출장이 많아 휴대 가능한 형태를 찾는 분",
  ],
  usage: {
    type: "intake",
    steps: [
      "포장지 끝을 잘라 분말을 입에 털어 넣고 부드럽게 녹여 드세요.",
      "물 없이 섭취가 가능하며, 음료에 타서 드셔도 좋습니다.",
      "식사 시간과 관계없이 하루 1포를 권장합니다.",
    ],
  },
  qna: [
    {
      q: "열처리 유산균과 일반 유산균의 차이가 무엇인가요?",
      a: "열처리 사균체는 위산·담즙산의 영향을 적게 받아 장까지 안정적으로 도달하는 장점이 있습니다. 균체의 구성성분이 장내 환경에 기여한다는 점이 포스트바이오틱스의 핵심입니다.",
    },
    {
      q: "어린이도 섭취할 수 있나요?",
      a: "별도 연령 제한은 두지 않습니다. 단, 영유아의 경우 보호자의 판단 하에 섭취량을 조절해주세요.",
    },
    {
      q: "다른 영양제와 함께 먹어도 되나요?",
      a: "일반적으로 병용에 큰 문제는 없으나, 복용 중인 약이 있는 경우 의사·약사와 상의 후 드시는 것을 권장합니다.",
    },
  ],
  mandatory_info: {
    product_type: "기타가공품",
    ingredients:
      "애터미포스트바이오틱스복합물[국내산, 락토바실러스 등 7종 사균체 분말], 결정과당, 프락토올리고당, 분말유산균제제, 정제수, 효소처리스테비아",
    nutrition: {
      serving: "1포 (2g)",
      rows: [
        { label: "열량", value: "6.5 kcal", percent: null },
        { label: "탄수화물", value: "1.6 g", percent: "1%" },
        { label: "당류", value: "0.4 g", percent: "0%" },
        { label: "단백질", value: "0.1 g", percent: "0%" },
        { label: "지방", value: "0 g", percent: "0%" },
        { label: "나트륨", value: "1 mg", percent: "0%" },
      ],
    },
    storage:
      "직사광선을 피하고 실온에서 보관하며, 개봉 후 즉시 섭취해 주세요.",
    manufacturer: "㈜서흥 / 충청북도 청주시 흥덕구 오송읍 오송생명로 61",
    seller: "애터미㈜ / 충청남도 공주시 백제문화로 2148-21",
    caution:
      "특이체질, 알레르기 체질의 경우 원재료를 확인 후 섭취해 주세요. 이상 증상 발생 시 섭취를 중단하시기 바랍니다.",
  },
  citations: [
    {
      type: "study",
      title:
        "Consensus statement on the definition and scope of postbiotics",
      publisher: "ISAPP, Nature Reviews Gastroenterology & Hepatology",
      year: 2021,
    },
  ],
};

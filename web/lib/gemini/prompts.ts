import type { ProductJson } from "@/types/product";

/**
 * Gemini에 전달할 시스템 지침 + 사용자 메시지를 만들어준다.
 *
 * 산출 형태: ProductJson 호환 JSON.
 * (Gemini의 `responseMimeType: application/json` 모드 사용)
 *
 * 절대 금지:
 *  - 효능 주장을 임의로 만들어내기 (제공된 사실만 인용)
 *  - 가격, 제조원, 성분 등 mandatory_info 임의 채움
 */
export function buildEnrichmentPrompt(
  draft: Partial<ProductJson>,
  brief: string
): { system: string; user: string } {
  const system = `당신은 Atomy(애터미) 스타일의 e-커머스 PDP(제품상세) 카피라이팅 어시스턴트입니다.

# 규칙
1. 효능, 성분, 제조원, 가격 등 사실 정보는 입력에 명시된 값만 사용하세요. 추측·생성 금지.
2. 결과는 반드시 ProductJson 스키마와 호환되는 JSON 한 덩어리. 다른 텍스트, 코드펜스 금지.
3. 본문 문장은 간결·평이한 한국어. 한 문장 ≤ 50자 권장.
4. 셀링포인트는 정확히 3~5개. 각 항목은 title(15자 이내) + body(45자 이내).
5. POINT 블록 본문은 6문장 이내. 인용은 입력 citations에 있는 것만.
6. 의무표시(mandatory_info)는 입력값을 절대 수정하지 말고 그대로 통과시키세요.
7. target_personas는 5~7개, 각 25자 이내.

# 출력 JSON 키
- tagline (string)
- selling_points (SellingPoint[])
- points (ProductPoint[])
- target_personas (string[])
- qna (QnaItem[])

위 5개 키만 포함된 JSON 객체를 반환하세요. 그 외 다른 키는 절대 포함하지 마세요.`;

  const user = `# 제품 드래프트
\`\`\`json
${JSON.stringify(draft, null, 2)}
\`\`\`

# MD 브리프 (자연어)
${brief.trim() || "(브리프 없음)"}

위 정보를 바탕으로 Atomy 스타일의 PDP 본문 카피를 보강해 JSON으로만 응답하세요.`;

  return { system, user };
}

import { NextResponse } from "next/server";
import { getGemini, getModelName } from "@/lib/gemini/client";
import { buildEnrichmentPrompt } from "@/lib/gemini/prompts";
import type { ProductJson } from "@/types/product";

export const runtime = "nodejs";
export const maxDuration = 60;

interface GenerateBody {
  product: ProductJson;
  brief: string;
}

interface EnrichmentPayload {
  tagline?: string;
  selling_points?: ProductJson["selling_points"];
  points?: ProductJson["points"];
  target_personas?: ProductJson["target_personas"];
  qna?: ProductJson["qna"];
}

export async function POST(req: Request) {
  const body = (await req.json()) as GenerateBody;
  if (!body?.product) {
    return NextResponse.json({ error: "product is required" }, { status: 400 });
  }

  let gemini;
  try {
    gemini = getGemini();
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }

  const { system, user } = buildEnrichmentPrompt(body.product, body.brief ?? "");

  const model = gemini.getGenerativeModel({
    model: getModelName(),
    systemInstruction: system,
    generationConfig: {
      responseMimeType: "application/json",
      temperature: 0.7,
    },
  });

  let raw: string;
  try {
    const result = await model.generateContent(user);
    raw = result.response.text();
  } catch (e) {
    return NextResponse.json(
      { error: `Gemini 호출 실패: ${String(e)}` },
      { status: 502 }
    );
  }

  let parsed: EnrichmentPayload;
  try {
    parsed = JSON.parse(raw) as EnrichmentPayload;
  } catch {
    return NextResponse.json(
      { error: "Gemini 응답을 JSON으로 파싱하지 못했습니다", raw },
      { status: 502 }
    );
  }

  // 보강 결과를 원본 product에 머지. mandatory_info / pricing / sku 등 사실 데이터는 보존.
  const merged: ProductJson = {
    ...body.product,
    tagline: parsed.tagline ?? body.product.tagline,
    selling_points:
      parsed.selling_points && parsed.selling_points.length > 0
        ? parsed.selling_points
        : body.product.selling_points,
    points:
      parsed.points && parsed.points.length > 0
        ? parsed.points
        : body.product.points,
    target_personas:
      parsed.target_personas && parsed.target_personas.length > 0
        ? parsed.target_personas
        : body.product.target_personas,
    qna:
      parsed.qna && parsed.qna.length > 0 ? parsed.qna : body.product.qna,
  };

  return NextResponse.json({ product: merged });
}

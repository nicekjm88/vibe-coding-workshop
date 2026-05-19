import { NextResponse } from "next/server";
import { renderPdp } from "@/lib/pdp/render";
import type { ProductJson, SectionId } from "@/types/product";

export const runtime = "nodejs";

interface RenderBody {
  product: ProductJson;
  sections?: SectionId[];
  mode?: "preview" | "embed";
}

export async function POST(req: Request) {
  const body = (await req.json()) as RenderBody;
  if (!body?.product) {
    return NextResponse.json({ error: "product is required" }, { status: 400 });
  }
  const html = renderPdp(body.product, {
    mode: body.mode ?? "preview",
    sections: body.sections,
  });
  return NextResponse.json({ html });
}

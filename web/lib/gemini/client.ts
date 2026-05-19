import { GoogleGenerativeAI } from "@google/generative-ai";

let cached: GoogleGenerativeAI | null = null;

export function getGemini(): GoogleGenerativeAI {
  if (cached) return cached;
  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    throw new Error(
      "GEMINI_API_KEY 가 설정되지 않았습니다. web/.env.local 에 추가해 주세요."
    );
  }
  cached = new GoogleGenerativeAI(key);
  return cached;
}

export function getModelName(): string {
  return process.env.GEMINI_MODEL ?? "gemini-2.0-flash-exp";
}

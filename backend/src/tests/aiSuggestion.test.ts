import { describe, expect, it } from "vitest";
import { getAiSuggestion } from "../services/aiSuggestion.js";

describe("getAiSuggestion", () => {
  it("returns deterministic values for same input", () => {
    const a = getAiSuggestion("1", "text", "hello world");
    const b = getAiSuggestion("1", "text", "hello world");
    expect(a).toEqual(b);
  });

  it("returns confidence in bounded range", () => {
    const { confidence } = getAiSuggestion("2", "image", "http://x");
    expect(confidence).toBeGreaterThanOrEqual(0.6);
    expect(confidence).toBeLessThanOrEqual(0.94);
  });
});

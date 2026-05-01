import { describe, expect, it } from "vitest";
import { clearIdentity, readIdentity, saveIdentity } from "../lib/identity";

describe("identity storage", () => {
  it("persists and reads identity", () => {
    clearIdentity();
    saveIdentity({ role: "annotator", name: "demo" });
    expect(readIdentity()).toEqual({ role: "annotator", name: "demo" });
  });
});

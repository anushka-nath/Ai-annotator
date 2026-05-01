import { describe, expect, it } from "vitest";
import { canTransition } from "../utils/transitions.js";
describe("canTransition", () => {
    it("allows only strict lifecycle", () => {
        expect(canTransition("unassigned", "in_progress")).toBe(true);
        expect(canTransition("in_progress", "submitted")).toBe(true);
        expect(canTransition("submitted", "reviewed")).toBe(true);
        expect(canTransition("unassigned", "submitted")).toBe(false);
        expect(canTransition("reviewed", "in_progress")).toBe(false);
    });
});

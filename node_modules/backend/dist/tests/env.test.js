import { describe, expect, it } from "vitest";
import { parseEnv } from "../config/env.js";
describe("env parsing", () => {
    it("applies defaults", () => {
        const parsed = parseEnv({ NODE_ENV: "test" });
        expect(parsed.PORT).toBe(4000);
        expect(parsed.DB_NAME).toBe("annotateai");
    });
});

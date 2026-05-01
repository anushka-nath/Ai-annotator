import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().default(4000),
  MONGODB_URI: z.string().min(1).default("mongodb://127.0.0.1:27017"),
  DB_NAME: z.string().min(1).default("annotateai"),
  FRONTEND_ORIGIN: z.string().default("http://localhost:5173")
});

export type AppEnv = z.infer<typeof envSchema>;

export function parseEnv(raw: NodeJS.ProcessEnv): AppEnv {
  return envSchema.parse(raw);
}

export const env: AppEnv = parseEnv(process.env);

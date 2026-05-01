import dotenv from "dotenv";
import { app } from "./app.js";
import { env } from "./config/env.js";
import { connectDb } from "./db/connect.js";

dotenv.config();

async function start() {
  await connectDb();
  app.listen(env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`API running on http://localhost:${env.PORT}`);
  });
}

start().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});

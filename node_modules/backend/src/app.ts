import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { env } from "./config/env.js";
import { errorHandler, notFound } from "./middleware/errors.js";
import { apiRouter } from "./routes/api.js";

dotenv.config();

export const app = express();

app.use(
  cors({
    origin: env.FRONTEND_ORIGIN
  })
);
app.use(express.json());

app.use("/api", apiRouter);
app.use(notFound);
app.use(errorHandler);

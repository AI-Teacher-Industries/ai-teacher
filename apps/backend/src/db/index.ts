import { PgVector } from "@mastra/pg";
import { drizzle } from "drizzle-orm/node-postgres";

export const db = drizzle(process.env.DATABASE_URL!);
export const pgVector = new PgVector(process.env.DATABASE_URL!);

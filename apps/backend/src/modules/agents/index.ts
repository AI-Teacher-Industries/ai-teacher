import { pgVector } from "@/db";
import { Mastra } from "@mastra/core";

import { ragAgent } from "./rag/ragAgent";

export const mastra = new Mastra({
  agents: { ragAgent },
  vectors: { pgVector },
});

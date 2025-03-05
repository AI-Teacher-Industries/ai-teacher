import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";

import { vectorQueryTool } from "./vectorTool";

export const ragAgent = new Agent({
  name: "RAG Agent",
  instructions:
    "You are a helpful assistant that answers questions based on the provided context. Keep your answers concise and relevant.",
  model: openai("gpt-4o-mini"),
  tools: {
    vectorQueryTool,
  },
});

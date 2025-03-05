import { Hono } from "hono";
import { mastra } from "@/modules/agents";
import { loadToRag } from "./modules/agents/rag/loadToRag";

const app = new Hono();
const agent = mastra.getAgent("ragAgent");

app.get("/load-rag", async (c) => {
  await loadToRag();

  c.text("RAG loaded successfully");
});

app.get("/get-from-rag", async (c) => {
  const prompt = `
  [Расскажи, как работает запустить claude code на моем pc]
  Please base your answer only on the context provided in the tool with this index test_index.
  If the context doesn't contain enough information to fully answer the question, please state that explicitly.
  `;

  const completion = await agent.generate(prompt);
  return c.text(completion.text);
});

export default app;

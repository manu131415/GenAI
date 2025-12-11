import { ChatOllama } from "@langchain/ollama";

export const textModel = new ChatOllama({
  model: "llama3", // Make sure you pulled this in Ollama
  baseUrl: "http://localhost:11434",
});

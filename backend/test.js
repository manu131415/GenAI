import { ChatOllama } from "@langchain/ollama";

const model = new ChatOllama({
  model: "llama3",
  baseUrl: "http://localhost:11434"
});

const run = async () => {
  const res = await model.invoke([
    { role: "user", content: "Hello, are you working?" }
  ]);

  console.log("AI:", res.content);
};

run();

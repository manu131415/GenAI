const { ChatOllama } = require("langchain/chat_models/ollama");

const textModel = new ChatOllama({
  model: "llama3",
  temperature: 0.7,
});

module.exports = textModel;

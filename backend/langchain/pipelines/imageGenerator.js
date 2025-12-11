import { ChatOllama } from "@langchain/ollama";

const imageModel = new ChatOllama({
  model: "dalle-mini", // example local image model
  baseUrl: "http://localhost:11434",
});

export const generateImage = async (topic) => {
  const prompt = `
Generate a visually appealing thumbnail for "${topic}"
Style: modern, colorful, social media ready
Return as BASE64 string
`;

  const response = await imageModel.invoke([
    { role: "user", content: prompt },
  ]);

  return response.content;
};

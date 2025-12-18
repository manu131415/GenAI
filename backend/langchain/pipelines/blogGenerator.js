import { textModel } from "../models/textModel.js";

/**
 * Generates an SEO-optimized blog as a structured JSON object
 * @param {string} topic
 * @returns {Promise<Object>}
 */
export const generateBlog = async (topic) => {
  if (!topic || typeof topic !== "string") {
    throw new Error("Topic must be a non-empty string");
  }

  const prompt = `
You are an expert SEO content writer.

IMPORTANT RULES:
- Return ONLY valid JSON
- No markdown
- No explanations
- No text before or after JSON
- No backticks

JSON schema:
{
  "title": "string",
  "meta": "string",
  "headings": ["string"],
  "article": "string",
  "faq": [
    {
      "question": "string",
      "answer": "string"
    }
  ],
  "socialMedia": {
    "instagram": "string",
    "twitter": "string",
    "linkedin": "string"
  }
}

Topic: "${topic}"
`;

  let response;

  try {
    response = await textModel.invoke([
      {
        role: "user",
        content: prompt,
      },
    ]);
  } catch (err) {
    console.error("LLM invocation failed:", err);
    throw new Error("Failed to generate blog content");
  }

  if (!response || !response.content) {
    throw new Error("Empty response from LLM");
  }

  try {
    return JSON.parse(response.content);
  } catch (err) {
    console.error("❌ Invalid JSON from LLM:\n", response.content);
    throw new Error("LLM returned invalid JSON format");
  }
};

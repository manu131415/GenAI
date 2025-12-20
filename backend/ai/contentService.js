import { callHF } from "./hfClient.js";
import { blogPrompt } from "./prompts.js";
import { extractJSON } from "./jsonUtils.js";

export const generateBlog = async (topic) => {
  const prompt = blogPrompt(topic);
  const raw = await callHF(prompt);

  console.log("RAW AI RESPONSE:\n", raw); // 🔍 debug once

  return extractJSON(raw);
};

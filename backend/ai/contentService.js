import { callHF } from "./hfClient.js";
import { MODELS } from "./modelConfig.js";
import { blogPrompt } from "./prompts.js";
import { extractJSON } from "./jsonUtils.js";

export const generateContent = async (type, topic) => {
  const model = MODELS[type] || MODELS.fast;
  const prompt = blogPrompt(topic);

  const raw = await callHF(prompt, model);
  return extractJSON(raw);
};

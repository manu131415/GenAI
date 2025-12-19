import { generateText } from "../models/textModel.js";
import { blogPrompt } from "../../utils/promptTemplates.js";

export async function generateBlog(topic) {
  const prompt = blogPrompt(topic);
  const content = await generateText(prompt);

  return content;
}

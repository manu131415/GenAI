import { textModel } from "../models/textModel.js";

export const generateBlog = async (topic) => {
  const prompt = `
You are an expert SEO content writer.

Task: Generate a full SEO optimized blog about "${topic}"
Include:
- Catchy title
- Meta description
- Headings (H1-H3)
- Long article
- FAQ
- Social media captions (Instagram, Twitter, LinkedIn)

Return as JSON with keys: title, meta, headings, article, faq, socialMedia
`;

  const response = await textModel.invoke([
    { role: "user", content: prompt },
  ]);

  return response.content; // JSON string
};

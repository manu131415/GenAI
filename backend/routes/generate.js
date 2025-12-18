import express from "express";
import { generateBlog } from "../langchain/pipelines/blogGenerator.js";
import { generateImage } from "../langchain/pipelines/imageGenerator.js";
import { enhanceSEO } from "../langchain/pipelines/seoEnhancer.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // 1️⃣ Generate blog
    const blogContent = await generateBlog(prompt);

    // 2️⃣ Enhance SEO (MUST await)
    const seoBlog = await enhanceSEO(blogContent);

    // 3️⃣ Generate thumbnail image
    const imageBase64 = await generateImage(prompt);

    res.json({
      seoBlog,
      imageBase64,
    });
  } catch (err) {
    console.error("Generation error:", err);
    res.status(500).json({ error: err.message || "Generation failed" });
  }
});

export default router;

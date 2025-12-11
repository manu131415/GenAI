import express from "express";
import { generateBlog } from "../langchain/pipelines/blogGenerator.js";
import { generateImage } from "../langchain/pipelines/imageGenerator.js";
import { enhanceSEO } from "../langchain/pipelines/seoEnhancer.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    // 1️⃣ Generate blog
    const blogContent = await generateBlog(prompt);

    // 2️⃣ Enhance SEO
    const seoBlog = enhanceSEO(blogContent);

    // 3️⃣ Generate thumbnail image
    const imageBase64 = await generateImage(prompt);

    res.json({
      seoBlog,
      imageBase64,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Generation failed" });
  }
});

export default router;

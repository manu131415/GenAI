import express from "express";
import { generateBlog } from "../ai/contentService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { topic } = req.body;
    const result = await generateBlog(topic);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

import express from "express";
import { generateContent } from "../ai/contentService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { topic } = req.body;
    const result = await generateContent(topic);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

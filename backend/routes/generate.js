import express from "express";
import { generateSpeech } from "../ai/pythonAiClient.js";

const router = express.Router();

router.post("/tts", async (req, res) => {
  const { text } = req.body;

  try {
    const result = await generateSpeech(text);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "AI generation failed" });
  }
});

export default router;

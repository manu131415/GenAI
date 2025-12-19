import express from "express";
import { generateText } from "../langchain/models/textModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { messages, model } = req.body;

    // messages = [{ role: "user", content: "..." }, ...]
    const prompt = messages
      .map(m => `${m.role.toUpperCase()}: ${m.content}`)
      .join("\n");

    const reply = await generateText(
      prompt,
      model || "meta-llama/Llama-3.1-8B-Instruct"
    );

    res.json({
      success: true,
      reply
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;

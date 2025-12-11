import express from "express";
import { ChatOllama } from "@langchain/ollama";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    const llm = new ChatOllama({
      model: "llama3",
      baseUrl: "http://localhost:11434"
    });

    const response = await llm.invoke([
      { role: "user", content: message }
    ]);

    res.json({
      reply: response.content
    });

  } catch (err) {
    console.error("❌ Chat Error:", err);
    res.status(500).json({ error: "Chat failure" });
  }
});

export default router;

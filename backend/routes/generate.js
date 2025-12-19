import express from "express";
import { contentWorker } from "../workers/contentWorker.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { type, topic } = req.body;

  const result = await contentWorker({ type, topic });

  res.json({ success: true, data: result });
});

export default router;

const express = require("express");
const { Queue } = require("bullmq");

const router = express.Router();
const queue = new Queue("generateContent");

router.post("/", async (req, res) => {
  const job = await queue.add("job", { prompt: req.body.prompt });
  const result = await job.waitUntilFinished();

  res.json(result);
});

module.exports = router;

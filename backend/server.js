import express from "express";
import generateRoute from "./routes/generate.js";
import {generateContent} from "./ai/contentService.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(express.json());

app.use("/api/generate", generateRoute);

app.listen(5000, () => {
  console.log("Response AI:" + generateContent("blog", "The future of AI in healthcare"));
  console.log("HF TOKEN PRESENT:", !!process.env.HF_API_KEY);
});
  

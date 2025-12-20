import express from "express";
import generateRoute from "./routes/generate.js";

const app = express();
app.use(express.json());

app.use("/api/generate", generateRoute);

app.listen(5000, () =>
  console.log("🚀 Backend running on port 5000")
);

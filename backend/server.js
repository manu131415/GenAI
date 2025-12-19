import express from "express";
import chatRoute from "./routes/chat.js";
import generateRoute from "./routes/generate.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.use("/api/chat", chatRoute);
app.use("/api/generate", generateRoute);
app.use(cors({
    origin: "http://localhost:3000", // Your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.listen(5000, () => console.log("Server running on port 5000"));

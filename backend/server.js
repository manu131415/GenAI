const express = require("express");
const app = express();
const generate = require("./routes/generate");
require("./workers/contentWorker");

app.use(express.json());
app.use("/generate", generate);

app.listen(5000, () => console.log("Backend running on port 5000"));

const { Worker } = require("bullmq");
const generateBlog = require("../langchain/pipelines/blogGenerator");
const generateImages = require("../langchain/pipelines/imageGenerator");

const worker = new Worker("generateContent", async job => {
  const prompt = job.data.prompt;

  const blog = await generateBlog(prompt);
  const images = await generateImages(prompt);

  return { blog, images };
});

module.exports = worker;

import { generateBlog } from "../langchain/pipelines/blogGenerator.js";

export async function contentWorker(job) {
  const { type, topic } = job;

  if (type === "blog") {
    return await generateBlog(topic);
  }
}

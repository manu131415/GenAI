const textModel = require("../models/textModel");

module.exports = async function generateBlog(prompt) {
  const res = await textModel.invoke([
    ["human", `Write a SEO optimized blog on: ${prompt}`]
  ]);

  return res.content;
};

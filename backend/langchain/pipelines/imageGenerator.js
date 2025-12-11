const { FluxImageGenerator } = require("langchain/tools/flux");

module.exports = async function generateImages(topic) {
  const img = await FluxImageGenerator.generate(`Create an image for: ${topic}`);
  return img;
};

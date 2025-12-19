import fetch from "node-fetch";

const HF_API_KEY = process.env.HF_API_KEY;

export async function generateText(prompt, model = "meta-llama/Llama-3.1-8B-Instruct") {
  const response = await fetch(
    `https://api-inference.huggingface.co/models/${model}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          max_new_tokens: 800,
          temperature: 0.7,
        },
      }),
    }
  );

  const data = await response.json();
  return data[0]?.generated_text || "";
}

export async function generateChat(messages, model) {
  const prompt = messages.map(m =>
    `<|${m.role}|>\n${m.content}`
  ).join("\n");

  return generateText(prompt, model);
}


export async function callHF(prompt, model) {
  if (!model) {
    throw new Error("Model is undefined");
  }

  const url = `https://router.huggingface.co/hf-inference/models/${model}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.HF_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inputs: prompt,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`HF API Error ${response.status}: ${text}`);
  }

  return await response.json();
}

export const callHF = async (prompt) => {
  const response = await fetch(
    `https://api-inference.huggingface.co/models/${process.env.HF_MODEL}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          max_new_tokens: 800,
          temperature: 0.3,
          return_full_text: false
        }
      }),
    }
  );

  const data = await response.json();

  console.log("HF RAW RESPONSE:", JSON.stringify(data, null, 2));

  // 🔥 IMPORTANT: HF returns ARRAY
  if (Array.isArray(data) && data[0]?.generated_text) {
    return data[0].generated_text;
  }

  // HF error case
  if (data?.error) {
    throw new Error(data.error);
  }

  throw new Error("Empty or invalid HF response");
};

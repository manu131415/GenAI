export const callHF = async (prompt, model) => {
  const res = await fetch(
    `https://api-inference.huggingface.co/models/${model}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          max_new_tokens: 900,
          temperature: 0.3,
          return_full_text: false,
        },
      }),
    }
  );

  const data = await res.json();

  if (Array.isArray(data) && data[0]?.generated_text) {
    return data[0].generated_text;
  }

  if (data?.error) throw new Error(data.error);
  throw new Error("Invalid HF response");
};

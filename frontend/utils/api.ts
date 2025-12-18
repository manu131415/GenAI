export async function generateContent(prompt: string) {
  const res = await fetch("http://localhost:5000/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(text);
    throw new Error("Failed to generate");
  }

  return res.json();
}

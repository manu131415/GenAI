interface GenerateRequest {
  topic: string;
  tone: string;
  length: string;
}

export async function generateContent(data: GenerateRequest) {
  const res = await fetch("http://127.0.0.1:8000/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: data.topic,
      tone: data.tone,
      length: data.length,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status}: ${text}`);
  }

  return await res.json();
}

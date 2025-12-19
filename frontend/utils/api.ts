export async function generateContent(prompt: string) {
  try {
    const res = await fetch("http://localhost:5000/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: "blog", topic: prompt }),
    });

    if (!res.ok) {
      const text = await res.text(); // for debugging non-JSON
      throw new Error(`HTTP error! Status: ${res.status}, Response: ${text}`);
    }

    const data = await res.json();
    console.log("API Response:", data);
    return data;
  } catch (err: any) {
    console.error("generateContent error:", err);
    throw err; // re-throw so frontend can show error
  }
}

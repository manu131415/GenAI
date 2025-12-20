export function extractJSON(text) {
  const firstBrace = text.indexOf("{");
  const lastBrace = text.lastIndexOf("}");

  if (firstBrace === -1 || lastBrace === -1) {
    // ✅ fallback instead of 500
    return {
      title: "Generated Content",
      meta: "",
      headings: [],
      article: text,
      faq: []
    };
  }

  return JSON.parse(text.slice(firstBrace, lastBrace + 1));
}

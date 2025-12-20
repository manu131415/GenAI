export const blogPrompt = (topic) => `
Return ONLY valid JSON.
JSON must start with { and end with }.
Do not explain.

{
  "title": "",
  "meta": "",
  "headings": [],
  "article": "",
  "faq": [
    { "question": "", "answer": "" }
  ]
}

Topic: ${topic}
`;

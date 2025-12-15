export async function generateContent(payload: any) {
const res = await fetch('/api/generateContent', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(payload),
});


if (!res.ok) throw new Error('Failed to generate');
return res.json();
}
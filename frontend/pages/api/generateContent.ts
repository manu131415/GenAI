import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
if (req.method !== 'POST') return res.status(405).end();


const response = await fetch('http://localhost:5000/generate', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(req.body),
});


const data = await response.json();
res.status(200).json(data);
}
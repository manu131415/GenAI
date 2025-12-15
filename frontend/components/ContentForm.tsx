'use client';
import { useState } from 'react';
import  './content_style.css';

export default function ContentForm({ onGenerate, loading }: any) {
const [topic, setTopic] = useState('');
const [tone, setTone] = useState('professional');
const [length, setLength] = useState('medium');


const submit = (e: React.FormEvent) => {
e.preventDefault();
onGenerate({ topic, tone, length });
};


return (
<form onSubmit={submit} className="form">
<input
className="w-full border p-2 rounded"
placeholder="Enter topic (e.g. Benefits of GenAI in Marketing)"
value={topic}
onChange={e => setTopic(e.target.value)}
/>


<select className="option-value" value={tone} onChange={e => setTone(e.target.value)}>
<option value="professional">Professional</option>
<option value="casual">Casual</option>
<option value="persuasive">Persuasive</option>
</select>


<select className="option-value" value={length} onChange={e => setLength(e.target.value)}>
<option value="short">Short</option>
<option value="medium">Medium</option>
<option value="long">Long</option>
</select>


<button
disabled={loading}
className="generate-button"
>
{loading ? 'Generating…' : 'Generate Content'}
</button>
</form>
);
}
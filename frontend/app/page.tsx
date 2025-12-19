'use client';
import { useState } from 'react';
import ContentForm from '@/components/ContentForm';
import Result from '../components/Result';
import { generateContent } from '../utils/api';


export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>('');

  // <-- Replace old handleGenerate with this one
  const handleGenerate = async (payload: any) => {
    setLoading(true);
    try {
      const data = await generateContent(payload);
      if (!data.success) {
        throw new Error("Backend returned failure");
      }
      setResult(data.data); // use data.data from backend
    } catch (err: any) {
      console.error("Error generating content:", err);
      setResult("Failed to generate content. See console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">GenAI Content Creation Platform</h1>
      <ContentForm onGenerate={handleGenerate} loading={loading} />
      <Result loading={loading} content={result} />
    </main>
  );
}

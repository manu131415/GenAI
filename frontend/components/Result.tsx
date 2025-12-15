export default function Result({ content, loading }: any) {
if (loading) return <p className="mt-6">⏳ Generating content…</p>;
if (!content) return null;


return (
<section className="mt-8 bg-gray-50 p-6 rounded-2xl">
<h2 className="text-xl font-semibold mb-2">Generated Output</h2>
<pre className="whitespace-pre-wrap text-sm">{content}</pre>
</section>
);
}

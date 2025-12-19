'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiLoader } from 'react-icons/fi';
import './content_style.css';

export default function ContentForm({ onGenerate, loading }: any) {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('professional');
  const [length, setLength] = useState('medium');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate({ topic, tone, length });
  };

  return (
    <motion.form
      onSubmit={submit}
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Topic Input */}
      <div className="relative group">
        <label className="block text-sm font-semibold text-gray-200 mb-2">
          Topic
        </label>
        <input
          className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
          placeholder="Enter topic (e.g., Benefits of GenAI in Marketing)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
        />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-purple-600/0 group-hover:from-purple-600/5 group-hover:via-purple-600/10 group-hover:to-purple-600/5 transition-all duration-300 pointer-events-none" />
      </div>

      {/* Select Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Tone Select */}
        <div className="relative group">
          <label className="block text-sm font-semibold text-gray-200 mb-2">
            Tone
          </label>
          <select
            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/30 text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 cursor-pointer appearance-none"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option value="professional">Professional</option>
            <option value="casual">Casual</option>
            <option value="persuasive">Persuasive</option>
          </select>
          <div className="absolute right-3 top-10 pointer-events-none text-purple-400">
            ▼
          </div>
        </div>

        {/* Length Select */}
        <div className="relative group">
          <label className="block text-sm font-semibold text-gray-200 mb-2">
            Length
          </label>
          <select
            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/30 text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 cursor-pointer appearance-none"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          >
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </select>
          <div className="absolute right-3 top-10 pointer-events-none text-purple-400">
            ▼
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <motion.button
        type="submit"
        disabled={loading || !topic.trim()}
        whileHover={{ scale: loading ? 1 : 1.02 }}
        whileTap={{ scale: loading ? 1 : 0.98 }}
        className="w-full relative px-6 py-4 rounded-lg font-semibold text-white overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed group"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 transition-all duration-300" />

        {/* Hover effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-full group-hover:translate-x-[-100%] transition-all duration-700" />

        {/* Content */}
        <div className="relative flex items-center justify-center gap-2">
          {loading ? (
            <>
              <FiLoader className="animate-spin" />
              Generating…
            </>
          ) : (
            <>
              Generate Content
              <FiSend className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </div>
      </motion.button>

      {/* Info text */}
      <p className="text-center text-sm text-gray-500">
        Powered by advanced AI models • Fast & Reliable
      </p>
    </motion.form>
  );
}
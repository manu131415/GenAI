'use client';
import { motion } from 'framer-motion';
import { FiCopy, FiCheckCircle } from 'react-icons/fi';
import { useState } from 'react';

export default function Result({ content, loading }: any) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center py-12"
      >
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-purple-500/30" />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-purple-500 border-r-purple-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <span className="ml-4 text-lg font-semibold text-gray-300">
          Generating content…
        </span>
      </motion.div>
    );

  if (!content) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
          Generated Output
        </h2>
        <motion.button
          onClick={handleCopy}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-500/30 text-purple-300 hover:border-purple-400 hover:text-purple-200 transition-all duration-300"
        >
          {copied ? (
            <>
              <FiCheckCircle className="text-green-400" />
              Copied!
            </>
          ) : (
            <>
              <FiCopy />
              Copy
            </>
          )}
        </motion.button>
      </div>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-purple-500/5 to-purple-600/10 rounded-lg blur-xl" />
        <pre className="relative bg-black/30 border border-purple-500/20 rounded-lg p-6 overflow-x-auto text-gray-200 text-sm leading-relaxed whitespace-pre-wrap break-words font-mono hover:border-purple-500/40 transition-all duration-300">
          {content}
        </pre>
      </motion.div>

      {/* Stats Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-purple-500/20"
      >
        <span>Words: {content.split(/\s+/).length}</span>
        <span>Characters: {content.length}</span>
        <span className="text-purple-400 font-semibold">✓ Generated Successfully</span>
      </motion.div>
    </motion.section>
  );
}

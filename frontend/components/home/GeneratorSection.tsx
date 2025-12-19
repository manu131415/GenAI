"use client";

import { useState } from "react";
import ContentForm from "@/components/ContentForm";
import Result from "@/components/Result";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { generateContent } from "@/utils/api";

export default function GeneratorSection() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>("");

  const handleGenerate = async (payload: any) => {
    setLoading(true);
    try {
      const data = await generateContent(payload);
      setResult(data.content);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black to-purple-950/20 py-16 px-4">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <FiStar className="text-purple-400 text-xl" />
            <span className="text-purple-300 text-sm font-semibold">AI-Powered Generator</span>
          </div>
          <h2 className="generator-title">
            Generate Amazing Content
          </h2>
          <p className="text-gray-400 text-lg">
            Powered by advanced AI models to create stunning content instantly
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 backdrop-blur-xl bg-gradient-to-br from-purple-950/30 to-purple-900/10 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
        >
          <ContentForm onGenerate={handleGenerate} loading={loading} />
        </motion.div>

        {/* Results Container */}
        {(loading || result) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-gradient-to-br from-purple-950/30 to-black border border-purple-500/30 rounded-2xl p-8"
          >
            <Result loading={loading} content={result} />
          </motion.div>
        )}
      </div>
    </section>
  );
}

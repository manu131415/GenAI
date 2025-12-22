"use client";

import { useState } from "react";
import ContentForm from "@/components/ContentForm";
import Result from "@/components/Result";
import { motion } from "framer-motion";
import { FiStar, FiZap } from "react-icons/fi";
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
    <section className="relative min-h-screen bg-gradient-to-b from-black via-purple-950/30 to-black py-20 px-4 overflow-hidden">
      {/* Advanced background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated orbs */}
        <motion.div 
          className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-tl from-purple-600/20 to-transparent rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-cyan-600/20 to-transparent rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-600/10 via-purple-600/10 to-cyan-600/10 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="flex items-center justify-center gap-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity }}>
              <FiStar className="text-cyan-400 text-2xl" />

            </motion.div>
            <span className="text-cyan-300 text-sm font-bold tracking-widest uppercase">Intelligence Engine</span>
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 3, repeat: Infinity }}>
              <FiZap className="text-purple-400 text-2xl" />
            </motion.div>
          </motion.div>
          
          <h2 className="generator-title text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Power Up Your Content
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Harness the power of cutting-edge AI to generate extraordinary content. From captivating blogs to stunning visuals – all instantly.
          </p>
        </motion.div>

        {/* Form Container with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 relative group"
        >
          {/* Animated border glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/30 via-purple-600/30 to-pink-600/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-md transition-all duration-500" />
          
          <div className="relative backdrop-blur-2xl bg-gradient-to-br from-purple-950/40 to-cyan-950/20 border-2 border-purple-500/30 group-hover:border-purple-500/70 rounded-3xl p-10 transition-all duration-500 shadow-2xl">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-5">
              <ContentForm onGenerate={handleGenerate} loading={loading} />
            </div>
          </div>
        </motion.div>

        {/* Results Container */}
        {(loading || result) && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600/30 via-cyan-600/30 to-blue-600/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            
            <div className="relative backdrop-blur-2xl bg-gradient-to-br from-purple-950/40 to-black border-2 border-cyan-500/30 group-hover:border-cyan-500/70 rounded-3xl p-10 transition-all duration-500 shadow-2xl">
              <Result loading={loading} content={result} />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

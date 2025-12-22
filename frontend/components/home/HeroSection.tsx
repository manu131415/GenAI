"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiZap, FiStar } from "react-icons/fi";
import { useEffect, useState } from "react";
import Link from "next/link";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [orbs, setOrbs] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    setOrbs(Array.from({ length: 5 }, (_, i) => ({ id: i, x: Math.random() * 100, y: Math.random() * 100 })));
  }, []);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const floatingVariants: any = {
    animate: { y: [0, -12, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } },
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-1/2 w-full h-full bg-gradient-to-br from-purple-900/30 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-1/2 w-full h-full bg-gradient-to-tl from-cyan-600/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-600/20 to-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute w-32 h-32 rounded-full pointer-events-none"
          style={{ left: `${orb.x}%`, top: `${orb.y}%`, background: `radial-gradient(circle, hsl(${orb.id * 72}, 100%, 50%)/20, transparent)`, filter: "blur(40px)" }}
          animate={{ x: [0, Math.cos(orb.id) * 40, 0], y: [0, Math.sin(orb.id) * 40, 0] }}
          transition={{ duration: 8 + orb.id, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <motion.div className="absolute w-96 h-96 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur-3xl opacity-20 pointer-events-none" animate={{ x: mousePosition.x - 192, y: mousePosition.y - 192 }} transition={{ type: "spring", stiffness: 50, damping: 30 }} />

      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <svg className="absolute inset-0 w-full h-full opacity-5" style={{ mixBlendMode: "screen" }}>
        <defs>
          <pattern id="dots" patternUnits="userSpaceOnUse" width="50" height="50">
            <circle cx="25" cy="25" r="1" fill="rgba(168,85,247,0.5)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center max-w-4xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants} className="mb-8 inline-block">
            <motion.div className="px-6 py-3 rounded-full border border-purple-400/50 bg-gradient-to-r from-purple-950/40 to-cyan-950/20 backdrop-blur-xl flex items-center gap-3 shadow-lg shadow-purple-500/20" whileHover={{ scale: 1.05 }}>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity }}>
                <FiZap className="text-cyan-400 text-lg" />
              </motion.div>
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">Next-Gen AI Content Generation</span>
            </motion.div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tighter">
            <span className="relative inline-block">
              <span className="relative z-10">Create</span>
              <motion.span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-30 blur-xl" animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 3, repeat: Infinity }} />
            </span>
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 text-transparent bg-clip-text animate-pulse">Extraordinary Content</span>
              <motion.span className="absolute -bottom-4 left-0 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full shadow-lg shadow-purple-500/50" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.8, duration: 1 }} />
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Harness the power of cutting-edge AI to craft stunning blogs, generate captivating images, and optimize for SEO — all in seconds.
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-6">
            <Link href="/auth">
              <motion.a whileHover={{ scale: 1.05 }} className="group relative px-10 py-4 rounded-xl font-bold text-white overflow-hidden text-lg inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 transition-all duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300" />
                <span className="relative flex items-center gap-3 justify-center"><FiZap className="text-xl" />Launch Now <FiArrowRight className="group-hover:translate-x-2 transition-transform" /></span>
              </motion.a>
            </Link>

            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="px-8 py-3 rounded-xl font-bold text-lg border-2 border-cyan-400 text-cyan-300 hover:text-white transition-all duration-300 backdrop-blur-xl hover:border-purple-400 shadow-lg shadow-cyan-500/20">
              <span className="flex items-center gap-2 justify-center"><FiStar /> Explore Features</span>
            </motion.button>
          </motion.div>

          <div className="w-full mt-12 pt-12 border-t border-purple-800/20 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[{ label: "AI Models", value: "10+"}, { label: "Content Generated", value: "100K+" }, { label: "Active Users", value: "5K+" }].map((stat, idx) => (
              <motion.div key={idx} variants={floatingVariants} animate="animate" className="text-center relative group p-4">
                <div className="relative p-6 rounded-xl backdrop-blur-sm border border-purple-500/20 group-hover:border-purple-500/50 transition-all">
                  
                  <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-400">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center items-start">
              <motion.div className="w-1 h-2 bg-purple-500 rounded-full mt-2" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Suspense } from "react";

const CanvasComponent = dynamic(
  () => import("./CanvasComponent"),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-gray-900 flex items-center justify-center text-white rounded-lg">
        Loading 3D Model...
      </div>
    ),
  }
);

export default function Mascot3DSection() {
  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Meet GENESIS
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-lg">
          Your intelligent 3D AI companion.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full h-[500px] max-w-4xl rounded-lg overflow-hidden shadow-2xl border border-purple-500/20"
      >
        <Suspense fallback={<div className="w-full h-full bg-gray-900 flex items-center justify-center text-white">Loading 3D Model...</div>}>
          <CanvasComponent />
        </Suspense>
      </motion.div>
    </section>
  );
}

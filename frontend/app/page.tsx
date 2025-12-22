"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import { Suspense } from "react";
import HeroSection from "@/components/home/HeroSection";
import GeneratorSection from "@/components/home/GeneratorSection";
import Mascot3DSection from "@/components/home/Mascot3DSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <Mascot3DSection />
      <GeneratorSection />
    </main>
  );
}

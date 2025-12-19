import dynamic from "next/dynamic";
import GeneratorSection from "@/components/home/GeneratorSection";

// Lazy load HeroSection to improve initial page load
const HeroSection = dynamic(() => import("@/components/home/HeroSection"), {
  loading: () => <div className="min-h-screen bg-black" />,
});

export default function HomePage() {
  return (
    <main className="home-root">
      <HeroSection />
      <section id="generator" className="min-h-screen bg-black">
        <GeneratorSection />
      </section>
    </main>
  );
}

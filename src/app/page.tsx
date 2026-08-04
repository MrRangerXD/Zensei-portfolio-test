import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <section className="h-screen flex items-center justify-center bg-black">
        <h2 className="text-neutral-800 text-2xl font-mono uppercase tracking-widest animate-pulse">
          Continuous Innovation — Zensei
        </h2>
      </section>
    </>
  );
}

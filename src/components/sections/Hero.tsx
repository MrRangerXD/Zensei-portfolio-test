"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-20 pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-700/10 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <span className="font-mono text-emerald-500 text-sm tracking-widest uppercase mb-4 block">
          Available for strategic partnerships
        </span>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8">
          Architecting <br />
          <span className="text-emerald-500">Digital Edges.</span>
        </h1>
        <p className="max-w-2xl text-xl text-neutral-400 mb-10 leading-relaxed">
          Founder of Zensei Network. I design and build high-performance systems 
          and luxury interfaces for the next generation of the web.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300 flex items-center gap-2">
            View Projects <ArrowUpRight size={20} />
          </button>
          <button className="px-8 py-4 border border-neutral-800 rounded-full font-semibold hover:border-emerald-500 transition-all duration-300">
            Read Story
          </button>
        </div>
      </motion.div>
    </section>
  );
};

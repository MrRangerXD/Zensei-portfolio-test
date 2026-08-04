"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-6 lg:px-12 py-8 mix-blend-difference"
    >
      <Link href="/" className="text-2xl font-bold tracking-tighter">
        ZENSEI<span className="text-emerald-500">.</span>
      </Link>
      
      <div className="hidden md:flex gap-12 text-sm font-medium uppercase tracking-widest">
        <Link href="#work" className="hover:text-emerald-500 transition-colors">Work</Link>
        <Link href="#about" className="hover:text-emerald-500 transition-colors">About</Link>
        <Link href="#contact" className="hover:text-emerald-500 transition-colors">Connect</Link>
      </div>
      
      <div className="font-mono text-xs text-emerald-500 hidden sm:block">
        EST. 2021 — PORTFOLIO V4
      </div>
    </motion.nav>
  );
};

"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "PrismXGPT",
    category: "Artificial Intelligence",
    description: "A sovereign LLM interface designed for developer autonomy and high-speed reasoning.",
    year: "2024"
  },
  {
    title: "Zensei Network",
    category: "Infrastructure",
    description: "The decentralized backbone for cross-chain automation and community governance.",
    year: "2023"
  },
  {
    title: "Downora",
    category: "Open Source",
    description: "Premium media retrieval engine focusing on privacy and raw performance.",
    year: "2024"
  }
];

export const Projects = () => {
  return (
    <section id="work" className="py-32 px-6 lg:px-20 bg-neutral-950">
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Featured Work</h2>
        <p className="text-neutral-500 font-mono italic">01 // Selected Cases</p>
      </div>

      <div className="grid grid-cols-1 gap-px bg-neutral-800">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ backgroundColor: "rgba(16, 185, 129, 0.05)" }}
            className="group relative bg-black p-10 md:p-20 flex flex-col md:flex-row justify-between items-end md:items-center transition-colors duration-500"
          >
            <div className="max-w-xl">
              <p className="text-emerald-500 font-mono text-sm mb-4">{project.category}</p>
              <h3 className="text-5xl md:text-7xl font-bold mb-6 group-hover:translate-x-4 transition-transform duration-500">
                {project.title}
              </h3>
              <p className="text-neutral-400 text-lg">{project.description}</p>
            </div>
            <span className="text-neutral-700 text-8xl font-bold font-mono opacity-20 group-hover:opacity-100 group-hover:text-emerald-500 transition-all duration-500">
              {project.year}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "EcoFlow Dashboard",
    description: "An AI-powered renewable energy monitoring platform for smart cities.",
    tags: ["Web App", "AI"],
    image: "/project1.png",
  },
  {
    title: "SwiftPay Fintech",
    description: "Next-gen cross-border payments with blockchain settlement layer.",
    tags: ["Fintech", "Next.js"],
    image: "/project2.png",
  },
  {
    title: "NeuroPath AI",
    description: "Medical diagnostic assistant using deep learning for early detection.",
    tags: ["Healthcare", "AI"],
    image: "/project3.png",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-6 relative bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-syne font-bold mt-4 tracking-tight">Recent <span className="text-gradient">Innovations</span></h2>
          </div>
          <button className="flex items-center gap-2 px-8 py-3 rounded-full border border-border hover:border-primary transition-all text-sm font-bold bg-surface/30">
            Explore All <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden bg-surface border border-border mb-8 shadow-2xl transition-transform duration-500 hover:-translate-y-2">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center translate-y-10 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100 z-20">
                  <div className="p-5 rounded-full bg-primary text-background shadow-[0_0_30px_rgba(0,255,178,0.5)]">
                    <ExternalLink size={24} />
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-surface border border-border text-[10px] font-mono text-text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-syne font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              
              <button className="text-sm font-bold flex items-center gap-1 text-white group-hover:underline">
                View Case Study <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight, Github } from "lucide-react";

const projects = [
  {
    title: "EcoFlow Dashboard",
    description: "An AI-powered renewable energy monitoring platform for smart cities. Real-time data visualization with predictive analytics.",
    tags: ["Web App", "AI", "Cloud"],
    image: "/project1.png",
    link: "#",
    category: "AI & Data"
  },
  {
    title: "SwiftPay Fintech",
    description: "Next-gen cross-border payments with blockchain settlement layer. High-security infrastructure for global finance.",
    tags: ["Fintech", "Blockchain", "Next.js"],
    image: "/project2.png",
    link: "#",
    category: "Fintech"
  },
  {
    title: "NeuroPath AI",
    description: "Medical diagnostic assistant using deep learning for early detection of neurological disorders with 98% accuracy.",
    tags: ["Healthcare", "AI", "Medical"],
    image: "/project3.png",
    link: "#",
    category: "HealthTech"
  },
];

export const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-32 px-6 min-h-screen snap-start snap-always w-full flex flex-col justify-center relative bg-alt-section">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-mono text-sm tracking-[0.4em] uppercase mb-4 block animate-pulse">Case Studies</span>
            <h2 className="text-5xl md:text-7xl font-syne font-bold tracking-tighter leading-[0.9]">
              Engineering <br /> <span className="text-gradient">Masterpieces</span>
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="group flex items-center gap-3 px-10 py-5 rounded-full border border-border hover:border-primary transition-all text-sm font-bold bg-surface/50 backdrop-blur-md"
          >
            View All Work
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-full bg-surface border border-border rounded-[3rem] p-4 transition-all duration-700 hover:border-primary/30 shadow-2xl overflow-hidden">

                {/* Image Container */}
                <div className="relative aspect-[16/11] rounded-[2.2rem] overflow-hidden mb-8">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full glass text-[10px] font-bold uppercase tracking-widest z-20">
                    {project.category}
                  </div>

                  {/* Icon Hover */}
                  <div className="absolute inset-0 flex items-center justify-center translate-y-10 group-hover:translate-y-0 transition-all duration-700 opacity-0 group-hover:opacity-100 z-20">
                    <div className="p-6 rounded-full bg-primary text-background shadow-[0_0_40px_rgba(0,255,178,0.6)]">
                      <ExternalLink size={28} />
                    </div>
                  </div>
                </div>

                <div className="px-4 pb-4">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full border border-white/5 text-[9px] font-mono text-text-secondary group-hover:border-primary/20 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-syne font-bold mb-4 group-hover:text-primary transition-colors duration-500">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary text-sm leading-relaxed mb-8 opacity-70 group-hover:opacity-100 transition-opacity line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {/* Avatars of people on project - placeholders */}
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-surface bg-gradient-to-br from-primary/20 to-secondary/20" />
                      ))}
                    </div>
                    <ArrowRight size={24} className="text-primary opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500" />
                  </div>
                </div>

                {/* Spotlight effect overlay */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at center, rgba(0, 255, 178, 0.05), transparent 70%)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

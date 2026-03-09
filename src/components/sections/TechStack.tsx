"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, Brain, Smartphone, ShieldCheck } from "lucide-react";

const techCategories = [
  { icon: <Code2 size={24} />, title: "Web Frontend", techs: ["Next.js", "React", "TypeScript", "TailwindCSS", "Bootstrap", "Material UI"] },
  { icon: <Smartphone size={24} />, title: "Mobile Apps", techs: ["Flutter", "React Native", "Ionic", "iOS Native", "Android Native"] },
  { icon: <Server size={24} />, title: "Backend", techs: ["Node.js", "Nest.js", "Python", "Django", "Flask", "Go", "Laravel"] },
  { icon: <Database size={24} />, title: "Database", techs: ["PostgreSQL", "MySQL", "Cassandra", "MariaDB", "Supabase", "Redis"] },
  { icon: <Brain size={24} />, title: "AI/ML", techs: ["OpenAI", "Hugging Face", "LangChain", "Pinecone", "Gemini API", "Groq API"] },
  { icon: <ShieldCheck size={24} />, title: "DevOps & Automation", techs: ["Docker", "Kubernetes", "Replit", "n8n", "Make.com", "Zapier"] },
];

export const TechStack = () => {
  return (
    <section className="py-32 px-6 relative bg-background overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-mono text-xs uppercase tracking-[0.5em] mb-4 block"
          >
            Our Ecosystem
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-syne font-bold mb-8 tracking-tighter leading-[0.9]"
          >
            The Tech <br /> <span className="text-gradient">We Master.</span>
          </motion.h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            We don&apos;t just use tools; we orchestrate them into high-performance digital architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 glass rounded-[3rem] hover:border-primary/30 transition-all duration-700 hover:-translate-y-2"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {category.icon}
                </div>
                <h3 className="text-3xl font-syne font-bold uppercase tracking-widest">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="px-5 py-2 rounded-full border border-white/5 bg-background/50 text-text-secondary font-mono text-sm hover:text-primary hover:border-primary/20 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Marquee at bottom for logos/brands */}
        <div className="mt-24 pt-24 border-t border-border/50 relative">
          <div className="absolute top-[-1px] left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all">
             {["VERCEL", "STRIPE", "AWS", "LINEAR", "GITHUB", "POSTGRES"].map(brand => (
               <div key={brand} className="text-2xl font-black font-syne tracking-tighter cursor-default">{brand}</div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import { viewTransition, viewViewport } from "@/lib/motion";
import { Code2, Server, Database, Brain, Smartphone, ShieldCheck, Layout, Sparkles, Monitor } from "lucide-react";

const techCategories = [
  { icon: <Code2 size={22} strokeWidth={1.75} />, title: "Web Frontend", techs: ["Next.js", "React", "TypeScript", "TailwindCSS", "Bootstrap", "Material UI"] },
  { icon: <Smartphone size={22} strokeWidth={1.75} />, title: "Mobile Apps", techs: ["Flutter", "React Native", "Ionic", "iOS Native", "Android Native"] },
  { icon: <Server size={22} strokeWidth={1.75} />, title: "Backend", techs: ["Node.js", "Nest.js", "Python", "Django", "Flask", "Go", "Laravel"] },
  { icon: <Database size={22} strokeWidth={1.75} />, title: "Database", techs: ["PostgreSQL", "MySQL", "Cassandra", "MariaDB", "Supabase", "Redis", "MongoDB"] },
  { icon: <Brain size={22} strokeWidth={1.75} />, title: "AI/ML", techs: ["OpenAI", "Hugging Face", "LangChain", "Pinecone", "Gemini API", "TensorFlow"] },
  { icon: <ShieldCheck size={22} strokeWidth={1.75} />, title: "DevOps", techs: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Terraform", "Vercel"] },
  {
    icon: <Layout size={22} strokeWidth={1.75} />,
    title: "UI/UX",
    techs: ["Figma", "Framer", "Adobe XD", "design systems", "prototyping", "accessibility (a11y)"],
  },
  {
    icon: <Sparkles size={22} strokeWidth={1.75} />,
    title: "Vibe Coding",
    techs: ["Cursor", "Google Antigravity", "Lovable", "GitHub Copilot", "v0 (Vercel)", "Bolt.new"],
  },
  {
    icon: <Monitor size={22} strokeWidth={1.75} />,
    title: "Desktop Apps",
    techs: ["Electron", "Tauri", ".NET", "Qt", "Windows APIs", "macOS tooling"],
  },
];

export const TechStack = () => {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 w-full flex flex-col justify-center relative bg-background overflow-hidden snap-start snap-always">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[min(100%,720px)] h-[400px] bg-primary/[0.06] blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-secondary/10 blur-[90px] rounded-full pointer-events-none -z-10 opacity-60" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 md:mb-14 max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewViewport}
            transition={viewTransition}
            className="text-primary font-mono text-xs uppercase tracking-[0.45em] mb-4 block"
          >
            Our Ecosystem
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewViewport}
            transition={{ ...viewTransition, delay: 0.04 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-syne font-bold mb-4 md:mb-5 tracking-tighter"
          >
            Tech <span className="text-gradient">We Use</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewViewport}
            transition={{ ...viewTransition, delay: 0.08 }}
            className="text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed"
          >
            One place to see what we work with. No sideways scroll.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewViewport}
          transition={viewTransition}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5"
        >
          {techCategories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewViewport}
              transition={{ ...viewTransition, delay: index * 0.04 }}
              className="group relative flex flex-col rounded-2xl md:rounded-3xl border border-border/90 bg-surface/50 backdrop-blur-sm p-5 sm:p-6 md:p-7 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.55)] hover:border-primary/25 hover:bg-surface/80 transition-colors duration-200"
            >
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary/[0.04] via-transparent to-secondary/[0.05] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="flex items-start gap-4 mb-5 relative z-10">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary">
                  {category.icon}
                </div>
                <div className="min-w-0 pt-0.5">
                  <h3 className="font-syne font-bold text-base sm:text-lg text-text-primary tracking-tight leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-secondary/70 mt-1">
                    Stack
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                {category.techs.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2.5 py-1.5 rounded-lg border border-white/[0.08] bg-background/60 text-text-secondary text-[11px] sm:text-xs font-mono leading-none group-hover:border-primary/20 group-hover:text-text-primary/90 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

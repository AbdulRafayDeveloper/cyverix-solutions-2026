"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, Brain, Smartphone, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

const techCategories = [
  { icon: <Code2 size={24} />, title: "Web Frontend", techs: ["Next.js", "React", "TypeScript", "TailwindCSS", "Bootstrap", "Material UI"] },
  { icon: <Smartphone size={24} />, title: "Mobile Apps", techs: ["Flutter", "React Native", "Ionic", "iOS Native", "Android Native"] },
  { icon: <Server size={24} />, title: "Backend", techs: ["Node.js", "Nest.js", "Python", "Django", "Flask", "Go", "Laravel"] },
  { icon: <Database size={24} />, title: "Database", techs: ["PostgreSQL", "MySQL", "Cassandra", "MariaDB", "Supabase", "Redis", "MongoDB"] },
  { icon: <Brain size={24} />, title: "AI/ML", techs: ["OpenAI", "Hugging Face", "LangChain", "Pinecone", "Gemini API", "TensorFlow"] },
  { icon: <ShieldCheck size={24} />, title: "DevOps", techs: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Terraform", "Vercel"] },
];

export const TechStack = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -450, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 450, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 md:py-32 px-6 min-h-screen snap-start snap-always w-full flex flex-col justify-center relative bg-background overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 max-w-2xl mx-auto">
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
            className="text-4xl md:text-6xl font-syne font-bold mb-6 tracking-tighter"
          >
            The Tech <span className="text-gradient">We Master</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-base md:text-lg leading-relaxed"
          >
            We orchestrate the modern stack into high-performance architectures.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 rounded-full bg-[#14141E] border border-white/10 shadow-xl flex items-center justify-center text-white z-20 hover:bg-primary/20 hover:border-primary/40 hover:text-primary transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 rounded-full bg-[#14141E] border border-white/10 shadow-xl flex items-center justify-center text-white z-20 hover:bg-primary/20 hover:border-primary/40 hover:text-primary transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 sm:gap-8 pb-10 pt-4 snap-x snap-mandatory no-scrollbar scroll-smooth px-2 md:px-0"
          >
            {techCategories.map((category, index) => (
              <div
                key={index}
                className="min-w-[300px] sm:min-w-[380px] md:min-w-[450px] snap-center shrink-0 relative p-8 md:p-10 rounded-[2rem] bg-[#0c0c12] border border-white/5 hover:border-primary/20 transition-all duration-500 overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)]"
              >
                {/* Subtle top-left glow inside card */}
                <div className="absolute top-[-20px] left-[-20px] w-40 h-40 bg-primary/10 blur-[60px] rounded-full pointer-events-none transition-all duration-500 hover:bg-primary/20" />

                <div className="flex items-center gap-5 sm:gap-6 mb-8 sm:mb-10 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500 shadow-inner">
                    {category.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-inter font-bold uppercase tracking-[0.15em] text-[#E0E0FF]">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5 sm:gap-3 relative z-10">
                  {category.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full border border-white/5 bg-[#14141e] text-[#8888aa] font-mono text-[11px] sm:text-[13px] hover:text-[#E0E0FF] hover:border-primary/30 transition-all cursor-default shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

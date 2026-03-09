"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, Search, FileText, Layers, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Search size={24} />,
    title: "Discovery & Analysis",
    description: "Deep dive into your vision, target audience, and business goals. We analyze the market and technical constraints.",
  },
  {
    number: "02",
    icon: <Layers size={24} />,
    title: "Strategy & Architecture",
    description: "Detailed architecture design and project roadmap. We define the tech stack and scalability requirements.",
  },
  {
    number: "03",
    icon: <FileText size={24} />,
    title: "Design & UX Mastery",
    description: "High-fidelity UI/UX design and interactive user flows. We prioritize accessibility and premium aesthetics.",
  },
  {
    number: "04",
    icon: <Code2 size={24} />,
    title: "Precision Engineering",
    description: "Agile sprints with continuous integration. Our code is peer-reviewed and tested for production-grade scale.",
  },
  {
    number: "05",
    icon: <Rocket size={24} />,
    title: "Deployment & Growth",
    description: "Seamless launch and post-deployment support. We monitor performance and iterate based on real feedback.",
  },
];

export const Process = () => {
  return (
    <section className="py-32 px-6 relative bg-background overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
           <div className="max-w-xl">
             <span className="text-primary font-mono text-xs uppercase tracking-[0.5em] mb-4 block">Our Methodology</span>
             <h2 className="text-4xl md:text-7xl font-syne font-bold tracking-tighter leading-[1] md:leading-[0.9]">
               Atomic <br /> <span className="text-gradient">Workflows.</span>
             </h2>
           </div>
           <p className="text-text-secondary text-base md:text-lg max-w-sm leading-relaxed text-left md:text-right">
             From deep discovery to final deployment, our process is optimized for speed, security, and scalability.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative flex flex-col p-8 glass rounded-[3rem] hover:border-primary/30 transition-all duration-700 hover:-translate-y-4"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-surface border border-border rounded-2xl flex items-center justify-center font-syne font-black text-xs text-text-primary/40 group-hover:text-primary transition-all duration-500 group-hover:rotate-12">
                 {step.number}
              </div>
              
              <div className="mb-10 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-syne font-bold mb-4 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              
              <p className="text-text-secondary text-xs leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                {step.description}
              </p>
              
              {/* Connector dots for visual flair */}
              <div className="absolute top-1/2 -right-4 hidden lg:flex flex-col gap-1.5 opacity-20 group-hover:opacity-40 transition-opacity">
                 {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-border rounded-full" />)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

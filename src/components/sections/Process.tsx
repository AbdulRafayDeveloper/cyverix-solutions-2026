"use client";

import React from "react";
import { motion } from "framer-motion";
import { stagger, viewViewport } from "@/lib/motion";
import { CheckCircle2, Circle, Search, FileText, Layers, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Search size={24} />,
    title: "Discovery and analysis",
    description: "We map what you want to ship, who it is for, and what constraints we have. That includes your market and the tech limits we need to respect.",
  },
  {
    number: "02",
    icon: <Layers size={24} />,
    title: "Strategy and architecture",
    description: "We sketch the architecture and a rough roadmap. You see the stack choices and how we expect the system to grow.",
  },
  {
    number: "03",
    icon: <FileText size={24} />,
    title: "Design and UX",
    description: "Wireframes through finished UI, with flows that work for real users. Accessibility stays on the list, not an afterthought.",
  },
  {
    number: "04",
    icon: <Code2 size={24} />,
    title: "Build and test",
    description: "We ship in short cycles with integration tests and code review. The goal is code you can run in production with confidence.",
  },
  {
    number: "05",
    icon: <Rocket size={24} />,
    title: "Launch and iterate",
    description: "We help you go live, watch how the system behaves, and adjust based on what users actually do.",
  },
];

export const Process = () => {
  return (
    <section className="py-32 px-6 min-h-screen snap-start snap-always w-full flex flex-col justify-center relative bg-alt-section overflow-hidden">
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
            From first workshop to launch, we keep the loop tight: you always know what we are building next and why.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewViewport}
              transition={stagger(index, 0.04)}
              className="group relative flex flex-col p-8 glass rounded-[3rem] hover:border-primary/30 transition-colors duration-200 hover:-translate-y-2"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-surface border border-border rounded-2xl flex items-center justify-center font-syne font-black text-xs text-text-primary/40 group-hover:text-primary transition-all duration-200 group-hover:rotate-12">
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
                {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 bg-border rounded-full" />)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

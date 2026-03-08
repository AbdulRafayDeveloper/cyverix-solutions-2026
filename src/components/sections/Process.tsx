"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "Deep dive into your vision, target audience, and business goals.",
  },
  {
    number: "02",
    title: "Proposal & Planning",
    description: "Detailed architecture design and project roadmap definition.",
  },
  {
    number: "03",
    title: "Design & Prototyping",
    description: "High-fidelity UI/UX design and interactive user flows.",
  },
  {
    number: "04",
    title: "Development & Testing",
    description: "Agile sprints with continuous integration and QA testing.",
  },
  {
    number: "05",
    title: "Launch & Support",
    description: "Seamless deployment and long-term maintenance lifecycle.",
  },
];

export const Process = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-syne font-bold mb-6"
          >
            Our Work <span className="text-gradient">Process</span>
          </motion.h2>
          <p className="text-text-secondary">Precision engineering from concept to reality.</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-0 w-full h-[2px] bg-border z-0">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-cta"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <div className="w-[120px] h-[120px] rounded-full glass border border-border flex items-center justify-center mb-8 relative group transition-all duration-500 hover:border-primary">
                  <span className="text-4xl font-syne font-black text-white/10 group-hover:text-primary transition-colors">
                    {step.number}
                  </span>
                  
                  {/* Glowing Dot Connector */}
                  <div className="hidden lg:block absolute -top-[62px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-cta shadow-[0_0_15px_rgba(0,255,178,1)]" />
                </div>
                
                <h3 className="text-xl font-syne font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

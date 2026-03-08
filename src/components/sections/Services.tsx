"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Cpu, Bot, Smartphone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Globe className="text-primary" size={32} />,
    title: "Web Development",
    description: "Custom websites & portals built for high performance, conversion, and global accessibility.",
    label: "WEB",
  },
  {
    icon: <Cpu className="text-primary" size={32} />,
    title: "Web-Based Software",
    description: "Enterprise SaaS platforms and robust business tools engineered for massive scale and reliability.",
    label: "SAAS",
  },
  {
    icon: <Bot className="text-primary" size={32} />,
    title: "AI Solutions",
    description: "Smart automation, NLP tools, and AI integrations that save time and optimize decision-making.",
    label: "AI",
  },
  {
    icon: <Smartphone className="text-primary" size={32} />,
    title: "Mobile Apps",
    description: "Native and cross-platform apps for iOS & Android with buttery-smooth user experiences.",
    label: "APPS",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-mono text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-syne font-bold mt-6 mb-4"
          >
            What We Build
          </motion.h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            We specialize in niche engineering domains, transforming complex challenges into elegant digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 bg-surface border border-border rounded-3xl hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                {React.cloneElement(service.icon as React.ReactElement<{ size: number }>, { size: 120 })}
              </div>
              
              <div className="relative z-10">
                <div className="mb-6 w-16 h-16 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors duration-500">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-syne font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed mb-8 group-hover:text-text-primary transition-colors">
                  {service.description}
                </p>
                
                <button className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group/link">
                  Learn More 
                  <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
                </button>
              </div>

              {/* Hover Glow */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Zap, Globe2, Clock, Users, Award, Box, Layers, MousePointer2 } from "lucide-react";

const stats = [
  { icon: <Award size={28} />, value: 3, label: "+ EXPERIENCE", desc: "Proven track record since 2023.", color: "text-primary", bg: "bg-primary/5" },
  { icon: <Zap size={28} />, value: 100, label: "+ PROJECTS", desc: "Diverse portfolio of success stories.", color: "text-secondary", bg: "bg-secondary/5" },
  { icon: <Globe2 size={28} />, value: 12, label: "+ COUNTRIES", desc: "Global footprint with local expertise.", color: "text-primary", bg: "bg-primary/5" },
  { icon: <Clock size={28} />, value: 100, label: "% UPTIME", desc: "We value your time as much as ours.", color: "text-secondary", bg: "bg-secondary/5" },
  { icon: <ShieldCheck size={28} />, value: 100, label: "% SECURE", desc: "Your ideas are safe with us.", color: "text-primary", bg: "bg-primary/5" },
  { icon: <Users size={28} />, value: 8, label: "EXPERT PMs", desc: "One point of contact for seamless comms.", color: "text-secondary", bg: "bg-secondary/5" },
];

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / end));
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return <span ref={ref}>{count}</span>;
};

export const WhyUs = () => {
  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
             <div className="h-[1px] w-8 bg-primary/40" />
             <span className="text-primary font-mono text-xs uppercase tracking-[0.4em]">Why Cyverix Solutions</span>
             <div className="h-[1px] w-8 bg-primary/40" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-syne font-bold mb-8 tracking-tighter leading-[1] md:leading-[0.9]"
          >
             Building <br /> <span className="text-gradient">Trust by Quality.</span>
          </motion.h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed">
            We don&apos;t just build software; we build foundations for growth. Our approach combines technical rigor with business intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[3rem] bg-surface/40 border border-border/80 hover:border-primary/20 hover:bg-surface/60 transition-all duration-700 group hover:-translate-y-2 relative"
            >
              {/* Card Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-primary/5 blur-3xl pointer-events-none" />
              
              <div className={`${stat.color} mb-8 ${stat.bg} w-16 h-16 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-12`}>
                {stat.icon}
              </div>
              
              <div className="text-5xl font-syne font-extrabold text-text-primary mb-2 flex items-center gap-1 group-hover:text-primary transition-colors">
                <Counter value={stat.value} />
                <span className="text-2xl font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                  {stat.label.includes("+") ? "+" : stat.label.includes("%") ? "%" : ""}
                </span>
              </div>
              
              <div className="text-text-secondary font-mono text-[10px] uppercase tracking-[0.2em] mb-6">
                {stat.label.replace("+", "").replace("%", "")}
              </div>
              
              <p className="text-text-secondary text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

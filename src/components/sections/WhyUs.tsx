"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Zap, Globe2, Clock, Users, Award } from "lucide-react";

const stats = [
  { icon: <Award />, value: 2, label: "+ Years Experience", desc: "Proven track record since 2024." },
  { icon: <Zap />, value: 100, label: "+ Projects Delivered", desc: "Diverse portfolio of success stories." },
  { icon: <Globe2 />, value: 12, label: "+ Countries Served", desc: "Global footprint with local expertise." },
  { icon: <Clock />, value: 100, label: "% On-Time Delivery", desc: "We value your time as much as ours." },
  { icon: <ShieldCheck />, value: 100, label: "% NDA & IP Protection", desc: "Your ideas are safe with us." },
  { icon: <Users />, value: 8, label: "Dedicated PMs", desc: "One point of contact for seamless comms." },
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
    <section className="py-24 px-6 bg-surface/50 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-syne font-bold mb-6"
          >
            Why Businesses <br /> <span className="text-secondary">Choose Us</span>
          </motion.h2>
          <p className="text-text-secondary max-w-xl">
            We don't just build software; we build foundations for growth. Our approach combines technical rigor with business intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-surface border border-border/50 hover:bg-background/40 hover:scale-[1.02] transition-all"
            >
              <div className="text-primary mb-6">
                {React.cloneElement(stat.icon as React.ReactElement<{ size: number }>, { size: 36 })}
              </div>
              <div className="text-4xl font-syne font-extrabold text-text-primary mb-2">
                <Counter value={stat.value} />
                {stat.label.includes("+") ? "+" : stat.label.includes("%") ? "%" : ""}
              </div>
              <div className="text-primary font-bold text-sm uppercase tracking-tighter mb-4">
                {stat.label.replace("+", "").replace("%", "")}
              </div>
              <p className="text-text-secondary text-sm">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

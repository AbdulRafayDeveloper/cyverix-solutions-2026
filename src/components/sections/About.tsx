"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Activity } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 min-h-screen snap-start snap-always w-full flex flex-col justify-center relative bg-alt-section overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-primary font-mono text-xs uppercase tracking-[0.5em] mb-6 block"
        >
          Our Mission
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-syne font-bold mb-8 md:mb-12 tracking-tighter leading-[1] md:leading-[0.9]"
        >
          Engineering <br /> <span className="text-gradient">with Purpose.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-text-secondary text-base md:text-xl mb-16 leading-relaxed max-w-2xl mx-auto"
        >
          Based in Pakistan, building software for the world. Cyverix Solutions doesn&apos;t just write code — we solve complex problems.
          Our mission is to bridge the gap between human ambition and technological possibility through precision engineering and AI-driven automation.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-20 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 mx-auto">
              <Target size={28} />
            </div>
            <h4 className="text-4xl font-syne font-extrabold text-white mb-2">2023</h4>
            <p className="text-xs text-text-secondary uppercase tracking-[0.2em] font-mono">Inception</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary mb-6 mx-auto">
              <Activity size={28} />
            </div>
            <h4 className="text-4xl font-syne font-extrabold text-white mb-2">100+</h4>
            <p className="text-xs text-text-secondary uppercase tracking-[0.2em] font-mono">Successful Sprints</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

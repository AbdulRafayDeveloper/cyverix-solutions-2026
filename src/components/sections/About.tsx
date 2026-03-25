"use client";

import React from "react";
import { motion } from "framer-motion";
import { viewTransition, viewViewport } from "@/lib/motion";
import { Target, Activity } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-28 md:py-32 px-6 min-h-[70vh] snap-start snap-always w-full flex flex-col justify-center relative bg-alt-section overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full -z-10" />

      <div className="max-w-3xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewViewport}
          transition={viewTransition}
          className="text-primary font-mono text-xs uppercase tracking-[0.5em] mb-6 block"
        >
          About us
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewViewport}
          transition={{ ...viewTransition, delay: 0.04 }}
          className="text-4xl md:text-6xl lg:text-7xl font-syne font-bold mb-8 md:mb-10 tracking-tighter leading-[1] md:leading-[0.95]"
        >
          Engineering <br /> <span className="text-gradient">with purpose.</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewViewport}
          transition={{ ...viewTransition, delay: 0.08 }}
          className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto space-y-5 text-left md:text-center"
        >
          <p>
            We are Cyverix Solutions, a software and AI team in Faisalabad, Pakistan, working with clients in other countries too. We focus on the unglamorous parts that keep projects alive: clear requirements, steady releases, and code you can still change six months from now.
          </p>
          <p>
            Whether you need something new, an update to older software, or AI inside real workflows, we try to act like partners. That means honest updates and ownership, not endless ticket ping-pong.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-20 max-w-2xl mx-auto mt-16 md:mt-20">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewViewport}
            transition={{ ...viewTransition, delay: 0.1 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 mx-auto">
              <Target size={28} />
            </div>
            <h3 className="text-4xl font-syne font-extrabold text-white mb-2">2023</h3>
            <p className="text-xs text-text-secondary uppercase tracking-[0.2em] font-mono">Founded</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewViewport}
            transition={{ ...viewTransition, delay: 0.14 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary mb-6 mx-auto">
              <Activity size={28} />
            </div>
            <h3 className="text-4xl font-syne font-extrabold text-white mb-2">100+</h3>
            <p className="text-xs text-text-secondary uppercase tracking-[0.2em] font-mono">Projects shipped</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

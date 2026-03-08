"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const team = [
  { role: "CEO / Co-Founder", id: "#01" },
  { role: "CPO / Co-Founder", id: "#02" },
  { role: "Lead Developer", id: "#03" },
  { role: "UI/UX Designer", id: "#04" },
  { role: "AI Engineer", id: "#05" },
  { role: "Project Manager", id: "#06" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-syne font-bold mb-8"
          >
            We're a team of <br /> engineers, designers, <br /> and AI specialists.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-secondary leading-relaxed mb-8"
          >
            Based in Pakistan, building software for the world. We don't just write code — we solve problems. 
            Our mission is to bridge the gap between human ambition and technological possibility through precision engineering.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-8"
          >
            <div>
              <h4 className="text-3xl font-syne font-bold text-primary mb-2">2024</h4>
              <p className="text-sm text-text-secondary uppercase tracking-widest font-mono">Founded</p>
            </div>
            <div>
              <h4 className="text-3xl font-syne font-bold text-secondary mb-2">100%</h4>
              <p className="text-sm text-text-secondary uppercase tracking-widest font-mono">Commitment</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-surface border border-border rounded-2xl flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 transition-all group-hover:from-primary group-hover:to-secondary group-hover:text-background">
                <span className="text-xl font-syne font-bold text-text-primary group-hover:text-background">{member.id}</span>
              </div>
              <p className="text-sm font-bold text-text-primary uppercase tracking-tighter mb-4">{member.role}</p>
              <Linkedin size={14} className="text-text-secondary hover:text-primary cursor-pointer" />
            </motion.div>
          ))}
          <div className="p-6 border border-dashed border-border rounded-2xl flex items-center justify-center text-center">
            <p className="text-xs text-text-secondary">You? Join our growing team.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

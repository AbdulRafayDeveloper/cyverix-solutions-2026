"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Target, Fingerprint, Activity } from "lucide-react";

const team = [
  { role: "CEO / Co-Founder", id: "#01", color: "from-primary/20", to: "to-primary/10" },
  { role: "CPO / Co-Founder", id: "#02", color: "from-secondary/20", to: "to-secondary/10" },
  { role: "Lead Developer", id: "#03", color: "from-primary/20", to: "to-primary/10" },
  { role: "UI/UX Designer", id: "#04", color: "from-secondary/20", to: "to-secondary/10" },
  { role: "AI Engineer", id: "#05", color: "from-primary/20", to: "to-primary/10" },
  { role: "Project Manager", id: "#06", color: "from-secondary/20", to: "to-secondary/10" },
];

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative bg-background overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* Text Section */}
        <div className="lg:w-1/2">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-primary font-mono text-xs uppercase tracking-[0.5em] mb-6 block"
          >
            Our Mission
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-syne font-bold mb-10 tracking-tighter leading-[0.9]"
          >
            Engineering <br /> <span className="text-gradient">with Purpose.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg mb-12 leading-relaxed max-w-lg"
          >
            Based in Pakistan, building software for the world. Cyverix Solutions doesn&apos;t just write code — we solve problems. 
            Our mission is to bridge the gap between human ambition and technological possibility through precision engineering.
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6">
                <Target size={24} />
              </div>
              <h4 className="text-3xl font-syne font-extrabold text-white mb-2">2023</h4>
              <p className="text-xs text-text-secondary uppercase tracking-[0.2em] font-mono">Inception</p>
            </div>
            <div>
               <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary mb-6">
                <Activity size={24} />
              </div>
              <h4 className="text-3xl font-syne font-extrabold text-white mb-2">100+</h4>
              <p className="text-xs text-text-secondary uppercase tracking-[0.2em] font-mono">Successful Sprints</p>
            </div>
          </div>
        </div>

        {/* Team Grid (Asymmetric) */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 glass rounded-[2.5rem] flex flex-col items-center text-center group transition-all duration-700 hover:border-primary/30 shadow-xl ${i % 2 === 1 ? 'lg:translate-y-12' : ''}`}
            >
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} ${member.to} flex items-center justify-center mb-6 transition-all group-hover:scale-110 group-hover:rotate-12`}>
                <span className="text-xl font-syne font-extrabold text-text-primary group-hover:text-primary transition-colors">{member.id}</span>
              </div>
              <p className="text-sm font-bold font-syne text-text-primary uppercase tracking-widest mb-4 opacity-80 group-hover:opacity-100">{member.role}</p>
              <div className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-primary transition-all cursor-pointer">
                <Linkedin size={14} />
              </div>
            </motion.div>
          ))}
          
          <div className="p-8 border border-dashed border-border rounded-[2.5rem] flex flex-col items-center justify-center text-center bg-surface/10 lg:translate-y-12">
             <span className="text-primary font-bold text-lg mb-2 capitalize italic">Join Us</span>
             <p className="text-[10px] text-text-secondary leading-tight opacity-60">We are always hunting for world-class engineers.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

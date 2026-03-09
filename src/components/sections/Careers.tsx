"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Zap, Users } from "lucide-react";

const jobs = [
  { title: "Senior AI Engineer", department: "Engineering", type: "Full-time", location: "Global / Remote" },
  { title: "Lead Product Designer", department: "Design", type: "Full-time", location: "Europe / Remote" },
  { title: "Backend Architect", department: "Engineering", type: "Full-time", location: "Pakistan / Hybrid" },
];

export const Careers = () => {
  return (
    <section id="careers" className="py-32 px-6 relative bg-background overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        {/* Left Side: Text */}
        <div className="lg:col-span-5">
          <span className="text-primary font-mono text-sm tracking-[0.4em] uppercase mb-6 block">Career Growth</span>
          <h2 className="text-4xl md:text-7xl font-syne font-bold tracking-tighter leading-[1] md:leading-[0.9] mb-8">
            Build the <br /> <span className="text-gradient">Unbuildable.</span>
          </h2>
          <p className="text-text-secondary text-base md:text-lg mb-12 leading-relaxed max-w-md">
            We are not just hiring employees; we are recruiting pioneers. 
            Join a culture where engineering excellence meets limitless curiosity.
          </p>
          
          <div className="grid grid-cols-1 gap-6">
            {[
              { icon: <Globe size={20} />, text: "Global First Culture" },
              { icon: <Zap size={20} />, text: "Cutting Edge Tech Stack" },
              { icon: <Users size={20} />, text: "Collaborative Intelligence" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-text-primary/80">
                <div className="text-primary">{item.icon}</div>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Jobs */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass rounded-[2.5rem] group flex flex-col md:flex-row items-center justify-between gap-6 hover:border-primary/40 transition-all duration-500 cursor-pointer"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                   <span className="text-[10px] font-mono text-primary bg-primary/5 px-3 py-1 rounded-full border border-primary/10">{job.department}</span>
                   <span className="text-[10px] font-mono text-text-secondary">{job.location}</span>
                </div>
                <h3 className="text-2xl font-bold font-syne group-hover:text-primary transition-colors">{job.title}</h3>
              </div>
              <div className="w-14 h-14 rounded-full bg-surface border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all duration-500 shadow-xl group-hover:shadow-primary/20">
                <ArrowUpRight size={28} />
              </div>
            </motion.div>
          ))}
          
          <div className="p-10 rounded-[2.5rem] border border-dashed border-border flex flex-col items-center justify-center text-center gap-4 bg-surface/20 mt-6">
             <p className="text-text-secondary text-sm">Don&apos;t see your dream role? We hire exceptional talent regardless of open slots.</p>
             <a href="mailto:careers@cyverix.com" className="text-primary font-bold hover:underline">careers@cyverix.com</a>
          </div>
        </div>

      </div>
    </section>
  );
};

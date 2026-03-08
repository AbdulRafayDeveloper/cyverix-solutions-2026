"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const jobs = [
  { title: "Senior AI Engineer", department: "Engineering", type: "Full-time", location: "Remote / Lahore" },
  { title: "Product Designer", department: "Design", type: "Full-time", location: "Remote" },
  { title: "Backend Architect", department: "Engineering", type: "Full-time", location: "Faisalabad / Hybrid" },
];

export const Careers = () => {
  return (
    <section id="careers" className="py-24 px-6 bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-syne font-bold mb-6">Join Our <span className="text-gradient">Team</span></h2>
          <p className="text-text-secondary">We're always looking for talented people who love to build the future.</p>
        </div>

        <div className="flex flex-col gap-4">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass rounded-3xl group flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-primary/50 transition-all cursor-pointer"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-mono rounded-full uppercase tracking-widest">{job.department}</span>
                  <span className="px-3 py-1 bg-border text-text-secondary text-[10px] font-mono rounded-full uppercase tracking-widest">{job.type}</span>
                </div>
                <h3 className="text-2xl font-syne font-bold group-hover:text-primary transition-colors">{job.title}</h3>
                <p className="text-sm text-text-secondary mt-1">{job.location}</p>
              </div>
              <div className="p-4 rounded-full bg-border group-hover:bg-primary group-hover:text-background transition-all">
                <ArrowUpRight size={24} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 bg-surface p-8 rounded-3xl border border-dashed border-border">
          <p className="text-text-secondary">
            Don't see your role? We're always open to meeting extraordinary talent. <br />
            Send your CV to <span className="text-primary font-bold">careers@cyverix.com</span>
          </p>
        </div>
      </div>
    </section>
  );
};

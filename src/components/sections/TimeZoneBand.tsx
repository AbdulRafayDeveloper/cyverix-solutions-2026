"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe2, Sun, Moon, Clock } from "lucide-react";
import { viewTransition, viewViewport } from "@/lib/motion";

const zones = [
  { label: "Americas", hint: "EST · PST" },
  { label: "Europe & UK", hint: "GMT · CET" },
  { label: "Middle East", hint: "GST · AST" },
  { label: "Asia Pacific", hint: "PKT · IST" },
] as const;

export const TimeZoneBand = () => {
  return (
    <section
      className="relative py-20 md:py-28 px-4 sm:px-6 overflow-hidden border-y border-white/[0.06] bg-gradient-to-b from-background via-[#070712] to-background"
      aria-labelledby="timezone-heading"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.35]" aria-hidden>
        <div className="absolute top-1/2 left-1/4 w-[min(90vw,480px)] h-[min(90vw,480px)] rounded-full bg-primary/[0.07] blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-secondary/[0.08] blur-[90px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-[1]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_minmax(0,1fr)] gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewViewport}
              transition={viewTransition}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.06] px-4 py-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-primary mb-5"
            >
              <Globe2 size={14} className="shrink-0" aria-hidden />
              Global delivery
            </motion.div>
            <motion.h2
              id="timezone-heading"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewViewport}
              transition={{ ...viewTransition, delay: 0.04 }}
              className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-5"
            >
              Flexible for <span className="text-gradient">any time zone</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewViewport}
              transition={{ ...viewTransition, delay: 0.08 }}
              className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl"
            >
              We work with teams in North America, Europe, the Middle East, and Asia. You get clear async updates, scheduled calls when decisions need
              real-time alignment, and written outcomes so nothing depends on someone being online at midnight.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewViewport}
              transition={{ ...viewTransition, delay: 0.12 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <li className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs text-text-secondary">
                <Sun size={14} className="text-primary shrink-0" aria-hidden />
                Overlap hours for kickoffs & reviews
              </li>
              <li className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs text-text-secondary">
                <Moon size={14} className="text-secondary shrink-0" aria-hidden />
                Async handoffs that stay traceable
              </li>
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewViewport}
            transition={{ ...viewTransition, delay: 0.06 }}
            className="relative rounded-[1.75rem] border border-white/[0.1] bg-gradient-to-br from-surface/80 via-background/90 to-background/70 p-6 md:p-8 backdrop-blur-md shadow-[0_28px_90px_-40px_rgba(0,0,0,0.85)]"
          >
            <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-text-secondary/80">
              <Clock size={12} aria-hidden />
              Coverage
            </div>
            <ul className="space-y-4 pt-6">
              {zones.map((z) => (
                <li
                  key={z.label}
                  className="flex items-center justify-between gap-4 border-b border-white/[0.06] pb-4 last:border-0 last:pb-0"
                >
                  <span className="font-syne font-bold text-white text-sm md:text-base">{z.label}</span>
                  <span className="text-[11px] font-mono text-primary/90 tabular-nums">{z.hint}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-text-secondary/85 leading-relaxed">
              Tell us your preferred windows. We align stand-ups and demos so your stakeholders are never guessing when we ship.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

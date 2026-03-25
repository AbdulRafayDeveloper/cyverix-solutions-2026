"use client";

import React from "react";
import { motion } from "framer-motion";
import { viewTransition, viewViewport } from "@/lib/motion";

const pillars = [
  {
    n: "01",
    title: "Clear requirements",
    body: "We ask direct questions early so scope and risk are visible before code piles up.",
  },
  {
    n: "02",
    title: "Steady releases",
    body: "Small, testable drops beat one big reveal. You always know what shipped and what is next.",
  },
  {
    n: "03",
    title: "Code you can change",
    body: "Readable structure and notes so your team or ours can extend the product months later.",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-32 lg:py-36 px-6 min-h-[75vh] snap-start snap-always w-full relative bg-alt-section overflow-hidden"
    >
      {/* Soft layers: no box grid */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[min(90vw,520px)] h-[min(90vw,520px)] rounded-full bg-primary/[0.04] blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-secondary/[0.06] blur-[90px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
          aria-hidden
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 lg:items-start">
          {/* Left column: headline stack */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewViewport}
              transition={viewTransition}
              className="text-primary font-mono text-xs uppercase tracking-[0.45em] mb-5 block"
            >
              About us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewViewport}
              transition={{ ...viewTransition, delay: 0.04 }}
              className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-[1.05] mb-6"
            >
              Engineering
              <br />
              <span className="text-gradient">with purpose.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewViewport}
              transition={{ ...viewTransition, delay: 0.08 }}
              className="text-text-secondary text-sm leading-relaxed max-w-sm"
            >
              A small studio in Faisalabad, Punjab, working with teams abroad. We ship a lot of AI alongside classic web and apps: no filler slides, just how we actually work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 1, height: "auto" }}
              viewport={viewViewport}
              transition={{ ...viewTransition, delay: 0.12 }}
              className="hidden lg:block mt-10 pl-6 border-l border-primary/35 space-y-6"
            >
              <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-text-secondary/80">Since</p>
              <p className="font-syne text-5xl font-extrabold text-white/90 tabular-nums">2023</p>
              <div className="h-px w-12 bg-gradient-to-r from-primary/50 to-transparent" aria-hidden />
              <p className="text-xs text-text-secondary leading-relaxed max-w-[14rem]">
                We keep the team small enough to care about your roadmap, and senior enough to ship serious work.
              </p>
            </motion.div>
          </div>

          {/* Right column: editorial body */}
          <div className="lg:col-span-7 space-y-10 md:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewViewport}
              transition={{ ...viewTransition, delay: 0.06 }}
              className="text-text-secondary text-base md:text-lg leading-[1.75] space-y-6"
            >
              <p className="first-letter:text-5xl first-letter:font-syne first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left first-letter:leading-[0.85]">
                We are Cyverix Solutions, a software and AI team in Faisalabad, Punjab, Pakistan, working with clients in other countries too. We
                focus on the unglamorous parts that keep projects alive: clear requirements, steady releases, and code you can still change six
                months from now, including AI that behaves in production, not just in demos.
              </p>
              <p>
                Whether you need something new, an update to older software, or AI inside real workflows, we try to act like partners. That means
                honest updates and ownership, not endless ticket ping-pong.
              </p>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, x: 8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewViewport}
              transition={{ ...viewTransition, delay: 0.1 }}
              className="relative pl-6 md:pl-8 border-l-[3px] border-primary/70 py-1 my-2"
            >
              <p className="text-lg md:text-xl text-text-primary/95 font-medium leading-snug font-syne">
                Good software feels boring to use and honest to maintain. That is what we aim for.
              </p>
            </motion.blockquote>

            {/* Stats strip: one band, not cards */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewViewport}
              transition={{ ...viewTransition, delay: 0.12 }}
              className="flex flex-col sm:flex-row sm:flex-wrap sm:items-stretch gap-0 border-y border-white/[0.08] py-8 md:py-9"
            >
              {[
                { value: "2023", label: "Founded" },
                { value: "100+", label: "Projects shipped" },
                { value: "PK · WW", label: "Faisalabad, global clients" },
              ].map((row, i) => (
                <div
                  key={row.label}
                  className={`flex-1 min-w-[140px] px-4 py-3 sm:py-0 text-center sm:text-left ${
                    i > 0 ? "sm:border-l sm:border-white/[0.08] sm:pl-8" : ""
                  }`}
                >
                  <p className="font-syne text-3xl md:text-4xl font-extrabold text-white tabular-nums tracking-tight mb-1">{row.value}</p>
                  <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-text-secondary">{row.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Pillars: numbered editorial rows, not boxed cards */}
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewViewport}
              transition={{ ...viewTransition, delay: 0.14 }}
              className="space-y-0 divide-y divide-white/[0.06] border-t border-white/[0.06]"
              aria-label="How we work"
            >
              {pillars.map((item, i) => (
                <motion.li
                  key={item.n}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewViewport}
                  transition={{ ...viewTransition, delay: 0.05 * i }}
                  className="py-6 md:py-7 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 group"
                >
                  <span className="font-mono text-sm text-primary/60 tabular-nums shrink-0 pt-0.5">{item.n}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-syne font-bold text-lg md:text-xl text-white mb-2 group-hover:text-primary/95 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm md:text-base leading-relaxed">{item.body}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
};

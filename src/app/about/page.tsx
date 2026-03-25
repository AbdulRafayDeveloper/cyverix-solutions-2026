"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";
import { motion } from "framer-motion";
import { viewTransition, viewViewport } from "@/lib/motion";
import { AlertTriangle, Compass, Eye, MessageCircle, RefreshCw, Rocket } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewViewport,
  transition: viewTransition,
};

const engineeringSignals = [
  {
    icon: AlertTriangle,
    label: "Risks & scope",
    text: "Name uncertainty early. Write down what we are building before the backlog explodes.",
  },
  {
    icon: Rocket,
    label: "Ship in slices",
    text: "Testable drops beat one big reveal: you always know what shipped and what is next.",
  },
  {
    icon: Eye,
    label: "Nothing hidden",
    text: "You stay oriented: trade-offs, cost of change, and what we would redo with hindsight.",
  },
] as const;

const workBriefings = [
  {
    title: "Clarity before code",
    body: "We ask direct questions up front so we are not guessing your business from one vague line. Less drama, more alignment.",
    icon: Compass,
    rail: "from-primary via-emerald-400/80 to-primary/40",
  },
  {
    title: "Ownership end to end",
    body: "You get a steady team on the work, not a new name in chat every week.",
    icon: MessageCircle,
    rail: "from-secondary via-violet-400/70 to-secondary/50",
  },
  {
    title: "Built to evolve",
    body: "We leave room to change: APIs that do not trap you, and notes that help the next developer, maybe you, move faster.",
    icon: RefreshCw,
    rail: "from-primary/90 via-cyan-400/50 to-secondary/80",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen text-text-primary">
      <Navbar />
      <div className="pt-20">
        <About />

        <section className="relative py-20 md:py-32 px-4 sm:px-6 border-t border-white/[0.06] overflow-hidden">
          <div className="absolute inset-0 about-spec-mesh pointer-events-none opacity-90" aria-hidden />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(140vw,900px)] h-[min(140vw,900px)] rounded-full bg-gradient-to-br from-primary/[0.07] via-transparent to-secondary/[0.12] blur-3xl pointer-events-none" aria-hidden />

          <div className="max-w-6xl mx-auto relative z-[1]">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 md:mb-14">
              <div className="max-w-2xl">
                <motion.p
                  {...fade}
                  className="font-mono text-[10px] sm:text-xs text-primary uppercase tracking-[0.35em] mb-4"
                >
                  Delivery doctrine
                </motion.p>
                <motion.h2
                  {...fade}
                  transition={{ ...viewTransition, delay: 0.04 }}
                  className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.08] tracking-tight"
                >
                  What we mean by{" "}
                  <span className="text-gradient">engineering-first</span>
                </motion.h2>
              </div>
              <motion.p
                {...fade}
                transition={{ ...viewTransition, delay: 0.08 }}
                className="text-[10px] font-mono uppercase tracking-[0.28em] text-text-secondary/75 lg:text-right shrink-0"
              >
                Spec · visibility · iteration
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewViewport}
                transition={{ ...viewTransition, delay: 0.06 }}
                className="lg:col-span-5 rounded-3xl border border-white/[0.1] bg-gradient-to-br from-surface/90 via-background/95 to-background/80 p-8 md:p-10 backdrop-blur-md shadow-[0_32px_120px_-48px_rgba(0,0,0,0.85)] flex flex-col justify-between gap-8 min-h-[280px]"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/90">North star</p>
                <p className="font-syne text-2xl md:text-3xl xl:text-[2rem] font-bold text-white leading-snug">
                  No black box at the end of the quarter: only work you have seen in motion.
                </p>
                <div className="h-px w-full bg-gradient-to-r from-primary/40 via-white/10 to-transparent mt-auto" aria-hidden />
              </motion.div>

              <div className="lg:col-span-7 flex flex-col gap-4 md:gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                  {engineeringSignals.map((row, i) => {
                    const Icon = row.icon;
                    return (
                      <motion.div
                        key={row.label}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewViewport}
                        transition={{ ...viewTransition, delay: 0.05 + i * 0.05 }}
                        className="rounded-2xl border border-white/[0.07] bg-background/55 px-4 py-5 md:px-5 md:py-6 backdrop-blur-sm hover:border-primary/25 transition-colors duration-300"
                      >
                        <div className="flex items-center gap-2 mb-3 text-primary">
                          <Icon size={18} strokeWidth={1.75} aria-hidden />
                          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-secondary">{row.label}</span>
                        </div>
                        <p className="text-xs md:text-sm text-text-secondary leading-relaxed">{row.text}</p>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewViewport}
                  transition={{ ...viewTransition, delay: 0.12 }}
                  className="rounded-2xl border border-primary/20 bg-primary/[0.05] px-6 py-7 md:px-8 md:py-8 backdrop-blur-sm"
                >
                  <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                    A lot of projects fail because the spec was fuzzy and everyone rushed. We try to do the opposite: name risks early, write down what we
                    are building, and ship pieces you can try early. You should not get a black box at the end of the quarter.
                  </p>
                  <p className="text-text-secondary text-base md:text-lg leading-relaxed mt-5 pt-5 border-t border-white/[0.08]">
                    Good software feels invisible to the people using it, but not to you. You should know how it works, what it costs to change, and what
                    we would do differently if we started again tomorrow.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-t border-white/[0.06] overflow-hidden bg-[#07070c]">
          <div
            className="absolute inset-0 opacity-[0.45] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(123, 94, 167, 0.22), transparent 55%)",
            }}
            aria-hidden
          />

          <div className="max-w-6xl mx-auto relative flex flex-col lg:flex-row lg:min-h-[520px]">
            <aside className="flex flex-row lg:flex-col items-center lg:items-stretch justify-between gap-6 lg:gap-10 border-b lg:border-b-0 lg:border-r border-white/[0.08] px-6 py-10 sm:px-8 lg:py-14 lg:px-10 lg:w-[min(100%,220px)] shrink-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-primary lg:order-1">Engagement</p>
              <h2 className="font-syne text-2xl sm:text-3xl md:text-[1.75rem] font-bold text-white leading-tight lg:order-2 lg:flex-1 lg:flex lg:items-center lg:justify-center text-center lg:text-left">
                <span className="lg:[writing-mode:vertical-rl] lg:rotate-180 lg:max-h-[min(72vh,380px)]">
                  How we like to work with you
                </span>
              </h2>
              <p className="hidden lg:block font-mono text-[9px] uppercase tracking-[0.25em] text-text-secondary/70 lg:[writing-mode:vertical-rl] lg:rotate-180 lg:order-3">
                Cyverix · ways of working
              </p>
            </aside>

            <div className="flex-1 px-5 sm:px-8 py-10 md:py-14 lg:py-16 lg:pl-12 lg:pr-10">
              <motion.p
                {...fade}
                className="text-text-secondary text-sm md:text-base leading-relaxed max-w-2xl mb-10 md:mb-12"
              >
                Every client is different, but a few habits keep showing up in our best work.
              </motion.p>

              <div className="flex flex-col gap-0">
                {workBriefings.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.article
                      key={item.title}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -12 : 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewViewport}
                      transition={{ ...viewTransition, delay: 0.06 + i * 0.07 }}
                      className={`relative overflow-hidden rounded-2xl border border-white/[0.07] bg-surface/25 pl-1.5 mb-5 last:mb-0 backdrop-blur-[2px] ${
                        i % 2 === 1 ? "lg:ml-8" : "lg:mr-4"
                      }`}
                    >
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${item.rail} rounded-l-2xl`}
                        aria-hidden
                      />
                      <span
                        className="pointer-events-none absolute -right-1 -top-2 sm:right-4 sm:top-2 text-[4.5rem] sm:text-[5.5rem] font-syne font-extrabold leading-none text-white/[0.04] select-none tabular-nums"
                        aria-hidden
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="relative z-[1] p-6 sm:p-8 pl-6 sm:pl-9">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-background/60 text-primary shadow-[0_0_24px_rgba(0,255,178,0.12)]">
                            <Icon size={20} strokeWidth={1.75} aria-hidden />
                          </div>
                          <h3 className="font-syne font-bold text-lg sm:text-xl text-white">{item.title}</h3>
                        </div>
                        <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-2xl">{item.body}</p>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 px-6 border-t border-white/[0.06]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <motion.div {...fade}>
              <h2 className="font-syne text-2xl md:text-3xl font-bold text-white mb-5">
                Based in Faisalabad, working with clients worldwide
              </h2>
              <p className="text-text-secondary leading-relaxed text-base md:text-lg mb-5">
                Our studio is in Faisalabad, Punjab, Pakistan. We chose it on purpose: strong talent, good focus, and a lower cost base than many big cities. That helps you get more of the work in your budget.
              </p>
              <p className="text-text-secondary leading-relaxed text-base md:text-lg">
                Most of how we work with you is remote. Once communication is clear and deadlines are real, time zones are just scheduling. If you are in London, Dubai, or Chicago, we have already done the awkward first call and made it work.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewViewport}
              transition={{ ...viewTransition, delay: 0.06 }}
              className="p-8 md:p-10 rounded-2xl border border-border bg-surface/40"
            >
              <p className="text-primary font-mono text-xs uppercase tracking-[0.35em] mb-4">In short</p>
              <p className="text-white text-lg md:text-xl font-syne font-semibold leading-snug mb-4">
                We are small enough to care about your roadmap, and experienced enough to carry serious work.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed mb-8">
                If that sounds like what you want from a software partner, tell us what you are building.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-cta text-background font-bold rounded-xl text-sm uppercase tracking-widest hover:opacity-95 transition-opacity"
              >
                Start a conversation
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

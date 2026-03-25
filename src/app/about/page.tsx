"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";
import { motion } from "framer-motion";
import { viewTransition, viewViewport } from "@/lib/motion";
import { Compass, MessageCircle, RefreshCw } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewViewport,
  transition: viewTransition,
};

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen text-text-primary">
      <Navbar />
      <div className="pt-20">
        <About />

        <section className="py-20 md:py-28 px-6 border-t border-white/[0.06]">
          <div className="max-w-3xl mx-auto">
            <motion.h2 {...fade} className="font-syne text-2xl md:text-3xl font-bold text-white mb-6">
              What we mean by engineering-first
            </motion.h2>
            <motion.div {...fade} transition={{ ...viewTransition, delay: 0.05 }} className="space-y-5 text-text-secondary leading-relaxed text-base md:text-lg">
              <p>
                A lot of projects fail because the spec was fuzzy and everyone rushed. We try to do the opposite: name risks early, write down what we are building, and ship pieces you can try early. You should not get a black box at the end of the quarter.
              </p>
              <p>
                Good software feels invisible to the people using it, but not to you. You should know how it works, what it costs to change, and what we would do differently if we started again tomorrow.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-28 px-6 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent pointer-events-none" />
          <div className="max-w-5xl mx-auto relative">
            <motion.h2 {...fade} className="font-syne text-2xl md:text-3xl font-bold text-white mb-4 text-center md:text-left">
              How we like to work with you
            </motion.h2>
            <motion.p
              {...fade}
              transition={{ ...viewTransition, delay: 0.04 }}
              className="text-text-secondary text-center md:text-left max-w-2xl mb-12 md:mb-14 leading-relaxed"
            >
              Every client is different, but a few habits keep showing up in our best work.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {[
                {
                  title: "Clarity before code",
                  body: "We ask direct questions up front so we are not guessing your business from one vague line. Less drama, more alignment.",
                  icon: Compass,
                },
                {
                  title: "Ownership end to end",
                  body: "You get a steady team on the work, not a new name in chat every week.",
                  icon: MessageCircle,
                },
                {
                  title: "Built to evolve",
                  body: "We leave room to change: APIs that do not trap you, and notes that help the next developer, maybe you, move faster.",
                  icon: RefreshCw,
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewViewport}
                    transition={{ ...viewTransition, delay: i * 0.06 }}
                    className="p-8 rounded-2xl border border-border/80 bg-surface/30 hover:border-primary/20 transition-colors duration-200"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-syne font-bold text-lg text-white mb-3">{item.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.body}</p>
                  </motion.article>
                );
              })}
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

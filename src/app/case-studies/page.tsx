"use client";

import React, { Suspense, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ArrowUpRight,
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { caseStudies } from "@/data/case-studies";

const INITIAL_VISIBLE = 7;
const LOAD_MORE_COUNT = 5;

const CaseStudyVisual = dynamic(
  () => import("@/components/case-studies/CaseStudyVisual").then((m) => m.CaseStudyVisual),
  {
    ssr: true,
    loading: () => <div className="absolute inset-0 bg-surface animate-pulse rounded-[inherit] min-h-[12rem]" aria-hidden />,
  }
);

export default function CaseStudiesPage() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const visibleStudies = useMemo(() => caseStudies.slice(0, visibleCount), [visibleCount]);
  const hasMore = visibleCount < caseStudies.length;
  const total = caseStudies.length;

  const loadMore = () => {
    setVisibleCount((c) => Math.min(c + LOAD_MORE_COUNT, caseStudies.length));
  };

  return (
    <main className="bg-background min-h-screen text-text-primary">
      <Navbar />

      <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 px-4 sm:px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-90"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 100% 65% at 15% -10%, rgba(123, 94, 167, 0.2), transparent 52%),
              radial-gradient(ellipse 80% 55% at 90% 20%, rgba(0, 255, 178, 0.11), transparent 48%),
              radial-gradient(ellipse 60% 40% at 50% 100%, rgba(0, 255, 178, 0.05), transparent 55%)
            `,
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.2] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
            backgroundSize: "44px 44px",
            maskImage: "linear-gradient(180deg, black 0%, black 50%, transparent 100%)",
          }}
          aria-hidden
        />
        <div className="absolute top-24 right-[12%] h-72 w-72 rounded-full bg-primary/10 blur-[100px] pointer-events-none" aria-hidden />
        <div className="absolute bottom-10 left-[8%] h-56 w-56 rounded-full bg-secondary/15 blur-[90px] pointer-events-none" aria-hidden />

        <div className="max-w-7xl mx-auto relative z-[1]">
          <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest mb-8 md:mb-10 hover:opacity-75 transition-opacity"
            >
              <ArrowLeft size={16} /> Back to home
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,340px)] gap-12 lg:gap-16 xl:gap-20 items-start">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-2.5 rounded-full border border-primary/35 bg-gradient-to-r from-primary/[0.12] via-primary/[0.05] to-transparent px-4 py-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.35em] text-primary mb-6 shadow-[0_0_48px_-12px_rgba(0,255,178,0.35)]"
              >
                <Sparkles size={14} className="shrink-0 opacity-90" aria-hidden />
                Case studies
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.06 }}
                className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-syne font-extrabold tracking-tighter leading-[0.95] mb-6"
              >
                Proof from the{" "}
                <span className="text-gradient">field</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed mb-8"
              >
                These are real products we have built and launched: SaaS, AI-heavy platforms, marketplaces, education tools, and more. Much of our
                work pairs solid engineering with LLMs, automation, and intelligent features. Each story breaks down the problem, our approach, and what
                went live, in simple language you can skim in a few minutes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                className="flex flex-wrap items-center gap-3 md:gap-4"
              >
                <span className="inline-flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-[12px] md:text-sm font-medium text-text-primary/95 backdrop-blur-sm">
                  <Layers size={15} className="text-primary shrink-0" aria-hidden />
                  {total}+ write-ups
                </span>
                <span className="inline-flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-[12px] md:text-sm font-medium text-text-primary/95 backdrop-blur-sm">
                  <Zap size={15} className="text-secondary shrink-0" aria-hidden />
                  Multi-vertical
                </span>
              </motion.div>
            </div>

            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="relative lg:pt-4"
              aria-label="Highlights"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/15 via-transparent to-secondary/20 blur-2xl opacity-70 pointer-events-none" aria-hidden />
              <div className="relative rounded-[1.75rem] border border-white/[0.1] bg-gradient-to-br from-surface/90 via-background/80 to-background/60 p-6 md:p-8 backdrop-blur-md shadow-[0_32px_100px_-40px_rgba(0,0,0,0.85)]">
                <span
                  className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-primary/40 rounded-tl-lg pointer-events-none"
                  aria-hidden
                />
                <span
                  className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-secondary/35 rounded-br-lg pointer-events-none"
                  aria-hidden
                />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-2">At a glance</p>
                <p className="font-syne text-xl md:text-2xl font-bold text-white leading-snug mb-6">
                  Every preview matches the product&apos;s industry: details and stack live beside the art.
                </p>
                <ul className="space-y-4 text-sm text-text-secondary/95">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_12px_rgba(0,255,178,0.6)]" />
                    Live links open when the build is public.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/90" />
                    Scroll through the stories below, and use Load more when you want to go deeper.
                  </li>
                </ul>
              </div>
            </motion.aside>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-sm text-text-secondary/90 mt-12 md:mt-14 max-w-3xl border-l-2 border-primary/40 pl-4 leading-relaxed"
          >
            Each preview image matches that project&apos;s industry and product type. Full details and tech stack are in the sections beside the image.
            If a public link exists, you can open the live product.
          </motion.p>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-20 md:gap-28 lg:gap-36">
            {visibleStudies.map((study, index) => {
              const imageRight = index % 2 === 0;
              return (
                <motion.article
                  key={study.id}
                  id={study.id}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55 }}
                  className="group scroll-mt-28"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start ${imageRight ? "" : "lg:flex-row-reverse"
                      }`}
                  >
                    <div className={`lg:col-span-5 ${imageRight ? "lg:order-1" : "lg:order-2"} shrink-0`}>
                      <div className="relative p-[1px] rounded-[1.85rem] md:rounded-[2.15rem] bg-gradient-to-br from-primary/35 via-white/10 to-secondary/30 shadow-[0_28px_100px_-40px_rgba(0,0,0,0.9)]">
                        <div className="overflow-hidden rounded-[calc(1.85rem-1px)] md:rounded-[calc(2.15rem-1px)] bg-surface aspect-[16/10] relative isolate">
                          <div className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.02] motion-reduce:group-hover:scale-100">
                            <Suspense fallback={<div className="absolute inset-0 bg-surface animate-pulse" aria-hidden />}>
                              <CaseStudyVisual study={study} />
                            </Suspense>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent pointer-events-none z-[1]" />
                          <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06] rounded-[inherit] pointer-events-none z-[2]" />
                        </div>
                      </div>
                    </div>

                    <div className={`lg:col-span-7 ${imageRight ? "lg:order-2" : "lg:order-1"} flex flex-col gap-6`}>
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[9px] font-mono font-bold uppercase tracking-[0.28em] text-text-secondary/90">
                            Industry
                          </span>
                          <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/[0.07] px-3 py-1.5 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wide text-primary leading-snug max-w-full">
                            {study.industry}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] text-text-secondary uppercase tracking-[0.2em]">
                          <span className="text-primary">{study.category}</span>
                          <span className="hidden sm:inline w-8 h-px bg-gradient-to-r from-border to-transparent" />
                          <span>{study.year}</span>
                        </div>
                      </div>

                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-syne font-bold tracking-tight text-white group-hover:text-primary transition-colors">
                        {study.title}
                      </h2>

                      <p className="text-text-secondary/95 text-base md:text-lg leading-relaxed font-medium">{study.summary}</p>

                      <div className="relative pl-5 md:pl-6">
                        <div
                          className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-gradient-to-b from-primary/50 via-secondary/40 to-primary/20"
                          aria-hidden
                        />
                        <div className="space-y-8">
                          <div>
                            <h3 className="text-[10px] font-mono uppercase tracking-[0.28em] text-primary mb-2.5">Challenge</h3>
                            <p className="text-sm md:text-[15px] text-text-secondary leading-relaxed">{study.challenge}</p>
                          </div>
                          <div>
                            <h3 className="text-[10px] font-mono uppercase tracking-[0.28em] text-secondary mb-2.5">Our approach</h3>
                            <p className="text-sm md:text-[15px] text-text-secondary leading-relaxed">{study.solution}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] text-text-secondary mb-3">What we delivered</h3>
                        <ul className="space-y-2.5">
                          {study.highlights.map((h) => (
                            <li key={h} className="flex gap-3 text-sm text-text-primary/90 leading-snug">
                              <CheckCircle2 className="shrink-0 text-primary mt-0.5" size={16} />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-[10px] font-mono uppercase tracking-[0.28em] text-primary mb-3 font-bold">
                          Technology stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {study.techStack.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-2 rounded-lg text-[11px] font-mono font-semibold uppercase tracking-wide text-text-primary/95 bg-white/[0.04] border border-white/[0.08] hover:border-primary/25 transition-colors"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 pt-2 border-t border-white/[0.06] sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                        <div className="min-w-0 flex-1 sm:max-w-[min(100%,26rem)]">
                          <p className="text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-1">Cyverix role</p>
                          <p className="font-semibold text-sm text-text-primary leading-snug line-clamp-2">{study.role}</p>
                        </div>
                        <div className="flex flex-wrap gap-3 shrink-0 sm:justify-end">
                          {study.liveUrl ? (
                            <a
                              href={study.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-background font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
                            >
                              Visit live
                              <ArrowUpRight size={16} />
                            </a>
                          ) : null}
                          <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/[0.1] hover:border-primary/40 text-text-primary font-bold text-xs uppercase tracking-wider transition-colors"
                          >
                            Similar build
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {hasMore ? (
            <div className="flex justify-center mt-14 md:mt-12">
              <button
                type="button"
                onClick={loadMore}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl border border-primary/40 bg-primary/10 text-primary font-bold text-sm hover:bg-primary/16 transition-colors shadow-[0_16px_48px_-20px_rgba(0,255,178,0.35)]"
              >
                <span className="tracking-wide">Load More Projects</span>
                <ChevronDown
                  size={22}
                  strokeWidth={2.25}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                  aria-hidden
                />
              </button>
            </div>
          ) : null}

          <div className="mt-24 md:mt-32 text-center py-16 md:py-20 glass rounded-[2rem] md:rounded-[3rem] border border-dashed border-border/50">
            <h3 className="text-2xl md:text-3xl font-syne font-bold mb-4">Planning something comparable?</h3>
            <p className="text-text-secondary mb-8 max-w-md mx-auto text-sm md:text-base">
              Share your limits and timeline. We will reply with a straight answer on fit, tech, and how we would deliver.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border border-border hover:border-primary/40 text-text-primary font-bold text-sm w-full sm:w-auto max-w-xs"
              >
                View all services
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-10 py-4 rounded-2xl bg-cta text-background font-bold text-sm uppercase tracking-widest hover:opacity-95 transition-opacity w-full sm:w-auto max-w-xs"
              >
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

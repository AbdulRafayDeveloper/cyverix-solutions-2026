"use client";

import React, { Suspense, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowUpRight, ArrowLeft, CheckCircle2 } from "lucide-react";
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

const exploreLinks = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
] as const;

function ExploreStrip({
  variant,
  className,
}: {
  variant: "muted" | "compact";
  className?: string;
}) {
  const base =
    variant === "muted"
      ? "text-text-secondary hover:text-primary border-border/60"
      : "text-text-secondary/90 hover:text-primary border-border/40";
  return (
    <nav className={`flex flex-wrap gap-2 md:gap-3 ${className ?? ""}`} aria-label="Site sections">
      {exploreLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`text-[10px] md:text-xs font-mono uppercase tracking-wider px-3 py-2 rounded-xl border transition-colors ${base}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

export default function CaseStudiesPage() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const visibleStudies = useMemo(() => caseStudies.slice(0, visibleCount), [visibleCount]);
  const hasMore = visibleCount < caseStudies.length;

  const loadMore = () => {
    setVisibleCount((c) => Math.min(c + LOAD_MORE_COUNT, caseStudies.length));
  };

  return (
    <main className="bg-background min-h-screen text-text-primary">
      <Navbar />

      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest mb-10 md:mb-12 hover:opacity-70 transition-all"
          >
            <ArrowLeft size={16} /> Back to home
          </Link>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-12 md:mb-16">
            <div className="max-w-3xl">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary font-mono text-xs uppercase tracking-[0.4em] mb-4 block"
              >
                Case studies
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-syne font-extrabold tracking-tighter leading-[0.95] mb-6"
              >
                Software we&apos;ve <br />
                <span className="text-gradient">shipped</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-text-secondary text-base md:text-lg max-w-xl leading-relaxed"
              >
                Real products we shipped: SaaS, AI, marketplaces, education tools, and more. Each entry lists the problem, what we did,
                and what you should care about, in plain language.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="lg:pt-4"
            >
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-text-secondary mb-3">Explore</p>
              <ExploreStrip variant="muted" className="justify-start lg:justify-end" />
            </motion.div>
          </div>

              <p className="text-sm text-text-secondary/90 mb-14 md:mb-16 max-w-3xl border-l-2 border-primary/40 pl-4">
            Each preview image matches that project&apos;s industry and product type. Full details and tech stack are in the sections beside
            the image. If a public link exists, you can open the live product.
          </p>

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
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start ${
                      imageRight ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`lg:col-span-5 ${imageRight ? "lg:order-1" : "lg:order-2"} overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-border/80 bg-surface aspect-[16/10] relative shrink-0 isolate`}
                    >
                      <div className="absolute inset-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.02] motion-reduce:group-hover:scale-100">
                        <Suspense fallback={<div className="absolute inset-0 bg-surface animate-pulse" aria-hidden />}>
                          <CaseStudyVisual study={study} />
                        </Suspense>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/15 to-transparent pointer-events-none" />
                    </div>

                    <div className={`lg:col-span-7 ${imageRight ? "lg:order-2" : "lg:order-1"} flex flex-col gap-6`}>
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[9px] font-mono font-bold uppercase tracking-[0.28em] text-text-secondary/90">
                            Industry
                          </span>
                          <span className="inline-flex items-center rounded-full border-2 border-primary/55 bg-primary/10 px-3 py-1.5 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wide text-primary leading-snug max-w-full">
                            {study.industry}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] text-text-secondary uppercase tracking-[0.2em]">
                          <span className="text-primary">{study.category}</span>
                          <span className="hidden sm:inline w-8 h-px bg-border" />
                          <span>{study.year}</span>
                        </div>
                      </div>

                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-syne font-bold tracking-tight text-white group-hover:text-primary transition-colors">
                        {study.title}
                      </h2>

                      <p className="text-text-secondary/95 text-base md:text-lg leading-relaxed font-medium">{study.summary}</p>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="rounded-2xl border border-border/80 bg-surface/40 p-5">
                          <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary mb-3">Challenge</h3>
                          <p className="text-sm text-text-secondary leading-relaxed">{study.challenge}</p>
                        </div>
                        <div className="rounded-2xl border border-border/80 bg-surface/40 p-5">
                          <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] text-secondary mb-3">Our approach</h3>
                          <p className="text-sm text-text-secondary leading-relaxed">{study.solution}</p>
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
                              className="px-3 py-2 rounded-lg text-[11px] font-mono font-bold uppercase tracking-wide text-primary border-2 border-primary/40 bg-primary/5 shadow-[0_0_20px_-8px_rgba(0,255,178,0.35)]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 pt-2 border-t border-border/50 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
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
                            className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-border hover:border-primary/40 text-text-primary font-bold text-xs uppercase tracking-wider transition-colors"
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
            <div className="flex justify-center mt-12 md:mt-16">
              <button
                type="button"
                onClick={loadMore}
                className="inline-flex items-center justify-center px-10 py-4 rounded-2xl border border-primary/40 bg-primary/10 text-primary font-bold text-sm uppercase tracking-widest hover:bg-primary/15 transition-colors"
              >
                Load more
              </button>
            </div>
          ) : null}

          <div className="mt-24 md:mt-32 text-center py-16 md:py-20 glass rounded-[2rem] md:rounded-[3rem] border border-dashed border-border/50">
            <h3 className="text-2xl md:text-3xl font-syne font-bold mb-4">Planning something comparable?</h3>
            <p className="text-text-secondary mb-8 max-w-md mx-auto text-sm md:text-base">
              Share your limits and timeline. We will reply with a straight answer on fit, tech, and how we would deliver.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
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
            <ExploreStrip variant="compact" className="justify-center opacity-90" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

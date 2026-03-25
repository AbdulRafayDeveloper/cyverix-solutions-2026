"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SERVICES } from "@/lib/services";
import { getServiceIcon } from "@/lib/service-icons";
import { viewTransition, viewViewport } from "@/lib/motion";
import { ArrowRight, CheckCircle2, HeartHandshake, Sparkles, Zap } from "lucide-react";

const heroChips = [
  { label: "Web & SaaS", icon: Zap },
  { label: "Apps & desktop", icon: Sparkles },
  { label: "Clear handoffs", icon: HeartHandshake },
] as const;

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Navbar />

      <section className="relative pt-24 md:pt-28 pb-10 md:pb-12 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 services-hero-mesh pointer-events-none" aria-hidden />
        <div
          className="absolute inset-0 opacity-[0.22] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            maskImage: "linear-gradient(180deg, black 0%, transparent 85%)",
          }}
          aria-hidden
        />

        <div className="max-w-7xl mx-auto relative z-[1]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,1.05fr)] gap-12 lg:gap-14 xl:gap-16 items-center mb-14 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
            >
              <div className="inline-flex items-center gap-2.5 text-primary font-mono text-[10px] sm:text-xs uppercase tracking-[0.38em] mb-5 px-4 py-2 rounded-full border border-primary/30 bg-gradient-to-r from-primary/[0.08] via-primary/[0.04] to-transparent shadow-[0_0_40px_-12px_rgba(0,255,178,0.35)]">
                <Sparkles size={14} className="shrink-0 opacity-90" aria-hidden />
                What we deliver
              </div>
              <h1 className="font-syne text-[2.35rem] sm:text-5xl md:text-6xl lg:text-[3.35rem] font-bold tracking-tighter mb-5 leading-[1.05]">
                Crafted services for{" "}
                <span className="text-gradient">products that ship</span>
              </h1>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                From the first sketch to real-world production traffic, we build websites, SaaS platforms, mobile and desktop apps, automation systems, cloud solutions, and product designs. You can explore a specific area or read through everything from start to finish.
              </p>
              <ul className="flex flex-wrap justify-center lg:justify-start gap-2.5 md:gap-3" aria-label="Highlights">
                {heroChips.map(({ label, icon: ChipIcon }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-[12px] md:text-sm font-medium text-text-primary/95 backdrop-blur-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
                  >
                    <ChipIcon size={15} className="text-primary shrink-0 opacity-90" aria-hidden />
                    {label}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full max-w-xl mx-auto lg:max-w-none lg:ml-auto"
            >
              <div className="absolute -inset-3 md:-inset-4 rounded-[2.25rem] bg-gradient-to-br from-primary/20 via-transparent to-secondary/25 blur-2xl opacity-70 pointer-events-none" aria-hidden />
              <div className="relative p-[1px] rounded-[1.85rem] md:rounded-[2.1rem] bg-gradient-to-br from-primary/45 via-white/12 to-secondary/40 shadow-[0_28px_100px_-36px_rgba(0,0,0,0.92)]">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/4] lg:min-h-[300px] rounded-[calc(1.85rem-1px)] md:rounded-[calc(2.1rem-1px)] overflow-hidden bg-surface/70">
                  <span
                    className="absolute top-3 left-3 z-20 w-9 h-9 border-t-2 border-l-2 border-primary/45 rounded-tl-xl pointer-events-none"
                    aria-hidden
                  />
                  <span
                    className="absolute top-3 right-3 z-20 w-9 h-9 border-t-2 border-r-2 border-white/20 rounded-tr-xl pointer-events-none"
                    aria-hidden
                  />
                  <span
                    className="absolute bottom-3 left-3 z-20 w-9 h-9 border-b-2 border-l-2 border-white/15 rounded-bl-xl pointer-events-none"
                    aria-hidden
                  />
                  <span
                    className="absolute bottom-3 right-3 z-20 w-9 h-9 border-b-2 border-r-2 border-secondary/35 rounded-br-xl pointer-events-none"
                    aria-hidden
                  />

                  <Image
                    src="/hero-software-house-bg.png"
                    alt=""
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                    quality={88}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/95 via-background/20 to-primary/[0.08] z-[1]" aria-hidden />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30 z-[2]" aria-hidden />

                  <div className="absolute top-4 left-4 z-[3] max-w-[min(100%,220px)] rounded-xl border border-white/10 bg-background/55 px-3 py-2.5 backdrop-blur-md shadow-lg">
                    <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-primary mb-1">Studio note</p>
                    <p className="text-[11px] leading-snug text-text-secondary/95">Same team as the homepage: no anonymous handoffs.</p>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-[3] flex flex-wrap gap-2 justify-between items-end">
                    <span className="text-[10px] font-mono uppercase tracking-[0.18em] px-3 py-2 rounded-xl bg-background/65 border border-white/10 text-text-secondary backdrop-blur-md">
                      Scope · build · measure
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-[0.18em] px-3 py-2 rounded-xl bg-primary/12 border border-primary/35 text-primary backdrop-blur-md shadow-[0_0_24px_-8px_rgba(0,255,178,0.45)]">
                      Production-minded
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <nav
            className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-2.5 max-w-5xl mx-auto lg:mx-0"
            aria-label="Jump to service"
          >
            {SERVICES.map((s, i) => (
              <motion.a
                key={s.id}
                href={`#${s.id}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.15 + i * 0.03 }}
                className="px-4 py-2.5 rounded-full text-[12px] md:text-[13px] font-semibold border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-transparent text-text-primary hover:border-primary/40 hover:bg-primary/[0.07] hover:text-primary hover:shadow-[0_12px_40px_-16px_rgba(0,255,178,0.35)] transition-all duration-300"
              >
                {s.jumpLabel}
              </motion.a>
            ))}
          </nav>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-24 space-y-7 md:space-y-9 pt-2">
        {SERVICES.map((service, index) => {
          const Icon = getServiceIcon(service.id);
          const isPrimary = service.color === "#00FFB2";
          return (
            <motion.section
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewViewport}
              transition={{ ...viewTransition, delay: index * 0.04 }}
              className={`group scroll-mt-28 relative rounded-2xl md:rounded-[1.75rem] border overflow-hidden shadow-[0_28px_90px_-40px_rgba(0,0,0,0.88)] backdrop-blur-[2px] transition-shadow duration-500 hover:shadow-[0_36px_100px_-36px_rgba(0,0,0,0.92)] ${isPrimary
                  ? "border-primary/25 bg-gradient-to-br from-primary/[0.09] via-surface/[0.55] to-background/60"
                  : "border-secondary/20 bg-gradient-to-br from-secondary/[0.1] via-surface/[0.55] to-background/60"
                }`}
            >
              <div
                className={`pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-80 ${isPrimary ? "via-primary/30" : "via-secondary/25"
                  }`}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full blur-[100px] opacity-40 group-hover:opacity-55 transition-opacity duration-500"
                style={{
                  background: isPrimary ? "rgba(0, 255, 178, 0.12)" : "rgba(123, 94, 167, 0.14)",
                }}
                aria-hidden
              />

              <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6 md:gap-10">
                  <div className="shrink-0 flex sm:flex-col items-center sm:items-start gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-text-secondary/80 tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div
                      className={`relative w-16 h-16 md:w-[4.75rem] md:h-[4.75rem] rounded-2xl flex items-center justify-center border shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] ${isPrimary
                          ? "bg-gradient-to-br from-primary/20 to-primary/5 border-primary/35 text-primary ring-1 ring-primary/15"
                          : "bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/35 text-secondary ring-1 ring-secondary/15"
                        }`}
                    >
                      <Icon
                        size={34}
                        strokeWidth={1.5}
                        className={
                          isPrimary
                            ? "drop-shadow-[0_0_14px_rgba(0,255,178,0.28)]"
                            : "drop-shadow-[0_0_14px_rgba(167,139,250,0.22)]"
                        }
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span
                        className={`inline-flex items-center rounded-lg border px-2.5 py-1 text-[11px] font-semibold tracking-wide ${isPrimary
                            ? "border-primary/35 bg-primary/[0.08] text-primary"
                            : "border-secondary/35 bg-secondary/[0.08] text-secondary"
                          }`}
                      >
                        {service.jumpLabel}
                      </span>
                      <span className="h-px flex-1 min-w-[2rem] bg-gradient-to-r from-border to-transparent max-sm:hidden" aria-hidden />
                    </div>
                    <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight group-hover:text-white transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-3">{service.shortDescription}</p>
                    <p className="text-text-secondary/90 text-sm sm:text-base leading-relaxed mb-8">{service.longDescription}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-3.5 mb-8">
                      {service.features.map((f) => (
                        <div
                          key={f}
                          className={`group/feat relative flex items-start gap-3 rounded-xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-transparent p-3.5 pl-4 backdrop-blur-[2px] transition-all duration-300 hover:border-white/12 ${isPrimary
                              ? "hover:shadow-[inset_0_0_0_1px_rgba(0,255,178,0.12)] border-l-2 border-l-primary/30"
                              : "hover:shadow-[inset_0_0_0_1px_rgba(123,94,167,0.15)] border-l-2 border-l-secondary/35"
                            }`}
                        >
                          <CheckCircle2
                            className={`shrink-0 mt-0.5 ${isPrimary ? "text-primary" : "text-secondary"}`}
                            size={18}
                            strokeWidth={2}
                          />
                          <span className="text-sm font-medium text-text-primary leading-snug">{f}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cta text-background font-bold text-sm uppercase tracking-widest hover:opacity-95 transition-opacity shadow-[0_12px_40px_-16px_rgba(0,255,178,0.35)]"
                    >
                      Discuss {service.title}
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.section>
          );
        })}
      </div>

      <section className="px-6 pb-24 max-w-3xl mx-auto text-center">
        <p className="text-text-secondary text-sm md:text-base mb-6">
          Not sure which line fits? Tell us what you are building and we will suggest a sensible stack.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center px-10 py-4 rounded-2xl border border-border hover:border-primary/40 text-text-primary font-bold transition-colors"
        >
          Get in touch
        </Link>
      </section>

      <Footer />
    </main>
  );
}

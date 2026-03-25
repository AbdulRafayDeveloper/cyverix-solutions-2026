"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SERVICES } from "@/lib/services";
import { getServiceIcon } from "@/lib/service-icons";
import { viewTransition } from "@/lib/motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Navbar />

      <div className="pt-24 md:pt-28 pb-8 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-center mb-12 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0"
          >
            <span className="inline-block text-primary font-mono text-xs uppercase tracking-[0.45em] mb-4 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/5">
              What we deliver
            </span>
            <h1 className="font-syne text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-5">
              Services built for <span className="text-gradient">real products</span>
            </h1>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              Websites, SaaS, mobile and desktop apps, automation, cloud, and design. Pick a topic below or scroll through the full list.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="relative w-full max-w-xl mx-auto lg:max-w-none lg:ml-auto"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/4] lg:min-h-[280px] rounded-[1.75rem] md:rounded-[2rem] overflow-hidden border border-white/[0.08] bg-surface/60 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.85),0_0_0_1px_rgba(0,255,178,0.12)]">
              <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06] rounded-[inherit] pointer-events-none z-10" aria-hidden />
              <Image
                src="/hero-software-house-bg.png"
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                quality={88}
              />
              <div
                className="absolute inset-0 bg-gradient-to-tr from-background via-background/25 to-primary/[0.07] z-[1]"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-[2]"
                aria-hidden
              />
              <div className="absolute bottom-4 left-4 right-4 z-[3] flex flex-wrap gap-2 justify-end">
                <span className="text-[10px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-lg bg-background/70 border border-border/80 text-text-secondary backdrop-blur-sm">
                  Engineering delivery
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-lg bg-primary/15 border border-primary/30 text-primary backdrop-blur-sm">
                  Same studio as home
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <nav
          className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-2.5 max-w-5xl mx-auto lg:mx-0"
          aria-label="Jump to service"
        >
          {SERVICES.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-3.5 py-2 rounded-xl text-[13px] md:text-sm font-semibold border border-border bg-surface/70 text-text-primary hover:border-primary/45 hover:bg-primary/5 hover:text-primary transition-colors shadow-sm"
            >
              {s.jumpLabel}
            </a>
          ))}
        </nav>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-6 md:space-y-8 pt-4">
        {SERVICES.map((service, index) => {
          const Icon = getServiceIcon(service.id);
          const isPrimary = service.color === "#00FFB2";
          return (
            <motion.section
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...viewTransition, delay: index * 0.06 }}
              className={`scroll-mt-28 rounded-2xl md:rounded-3xl border overflow-hidden ${
                isPrimary
                  ? "border-primary/20 bg-gradient-to-br from-primary/[0.07] via-surface/40 to-transparent"
                  : "border-secondary/20 bg-gradient-to-br from-secondary/[0.08] via-surface/40 to-transparent"
              }`}
            >
              <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6 md:gap-10">
                  <div className="shrink-0 flex sm:flex-col items-center sm:items-start gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-text-secondary/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center border ${
                        isPrimary
                          ? "bg-primary/15 border-primary/30 text-primary"
                          : "bg-secondary/15 border-secondary/30 text-secondary"
                      }`}
                    >
                      <Icon size={34} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-flex items-center rounded-lg border border-primary/25 bg-primary/5 px-2.5 py-1 text-[11px] font-semibold text-primary tracking-wide">
                        {service.jumpLabel}
                      </span>
                      <span className="h-px flex-1 min-w-[2rem] bg-border max-sm:hidden" aria-hidden />
                    </div>
                    <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-3">{service.shortDescription}</p>
                    <p className="text-text-secondary/90 text-sm sm:text-base leading-relaxed mb-8">{service.longDescription}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8">
                      {service.features.map((f) => (
                        <div
                          key={f}
                          className="flex items-start gap-3 p-3.5 rounded-xl bg-background/50 border border-border/80"
                        >
                          <CheckCircle2 className={`shrink-0 mt-0.5 ${isPrimary ? "text-primary" : "text-secondary"}`} size={18} />
                          <span className="text-sm font-medium text-text-primary leading-snug">{f}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cta text-background font-bold text-sm uppercase tracking-widest hover:opacity-95 transition-opacity"
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

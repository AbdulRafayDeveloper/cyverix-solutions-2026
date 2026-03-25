"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { MoveRight, Sparkles, Rocket } from "lucide-react";
import { HeroTypewriter } from "@/components/sections/HeroTypewriter";

export const Hero = () => {
  const reduceMotion = useReducedMotion();
  const [headlineRest, setHeadlineRest] = useState(false);
  const onTypeDone = useCallback(() => setHeadlineRest(true), []);

  useEffect(() => {
    if (reduceMotion) setHeadlineRest(true);
  }, [reduceMotion]);

  const [imgLoaded, setImgLoaded] = useState(false);
  const bgParallaxRef = useRef<HTMLDivElement>(null);

  /* Barely noticeable parallax on home (`#main-scroll`); no-op on other routes. */
  useEffect(() => {
    if (reduceMotion) return;
    const main = document.getElementById("main-scroll");
    const layer = bgParallaxRef.current;
    if (!main || !layer) return;
    const onScroll = () => {
      const t = Math.min(1, main.scrollTop / 480);
      layer.style.transform = `translate3d(0, ${t * 10}px, 0)`;
    };
    main.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => main.removeEventListener("scroll", onScroll);
  }, [reduceMotion]);

  return (
    <section
      className="relative min-h-screen min-h-[100dvh] w-full snap-start snap-always overflow-hidden flex flex-col justify-center"
      aria-label="Hero"
    >
      {/* Full-bleed background, light parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={bgParallaxRef} className="absolute inset-0 will-change-transform">
          <Image
            src="/hero-software-house-bg.png"
            alt=""
            fill
            priority
            sizes="100vw"
            onLoadingComplete={() => setImgLoaded(true)}
            className={`object-cover object-center transition-opacity duration-500 ease-out motion-reduce:transition-none ${imgLoaded ? "opacity-100" : "opacity-0"}`}
            quality={90}
          />
        </div>
        {/* Readability overlays */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#050508] via-[#0A0A0F]/88 to-[#0A0A0F]/35 sm:from-[#050508] sm:via-[#0A0A0F]/82 sm:to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/25 to-[#050508]/50"
          aria-hidden
        />
        <div className="absolute inset-0 bg-primary/[0.03] mix-blend-overlay pointer-events-none" aria-hidden />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center py-24 sm:py-28 md:py-32 lg:min-h-[100dvh]">
        <div className="w-full max-w-3xl lg:max-w-4xl text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, delay: 0.02, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-primary/90 font-mono text-[10px] sm:text-xs uppercase tracking-[0.35em] mb-5 sm:mb-6"
          >
            Cyverix Solutions, software and AI engineering
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white font-syne font-extrabold text-[clamp(2.25rem,6.5vw,4.75rem)] leading-[1.05] tracking-tight mb-5 sm:mb-6 md:mb-8"
          >
            <span className="text-white">
              <HeroTypewriter onComplete={onTypeDone} />
            </span>
            <br className="hidden sm:block" />
            <motion.span
              initial={false}
              animate={{ opacity: headlineRest ? 1 : 0, y: headlineRest ? 0 : 8 }}
              transition={{ duration: 0.35, delay: 0.06, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-block"
            >
              <span className="text-gradient">Human</span> Advantage.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, delay: 0.14, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white/75 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed font-medium mb-8 sm:mb-10 md:mb-12"
          >
            We help you ship{" "}
            <span className="text-highlight-keyword">AI systems and software</span> that stay reliable as you grow. Clear builds,
            honest timelines, and code your own team can work with later.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <Link
              href="#contact"
              className="btn-polish btn-ripple inline-flex items-center justify-center min-h-[48px] px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-[#0A0A0F] font-bold text-xs sm:text-sm uppercase tracking-[0.12em] rounded-none sm:rounded-sm transition-colors duration-200 delay-[40ms] shadow-lg shadow-black/25"
            >
              Get in touch
            </Link>
            <Link
              href="/case-studies"
              className="btn-polish link-animated inline-flex items-center justify-center gap-2 min-h-[48px] px-8 sm:px-10 py-3.5 sm:py-4 border border-white/25 text-white font-bold text-sm rounded-none sm:rounded-sm transition-colors duration-200 delay-[40ms] hover:border-primary/50 hover:bg-white/5"
            >
              Explore our work
              <MoveRight className="shrink-0 icon-hover-nudge" size={18} strokeWidth={2.5} aria-hidden />
            </Link>
          </motion.div>
        </div>

        {/* Trust strip, desktop */}
        <div className="hidden xl:flex mt-auto pt-20 w-full justify-between items-end gap-8">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 0.92, x: 0 }}
            transition={{ delay: 0.35, duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
            className="card-polish p-5 glass rounded-xl border-white/10 flex items-center gap-4 max-w-sm"
          >
            <div
              className="w-10 h-10 bg-secondary/25 rounded-lg flex items-center justify-center text-secondary shrink-0 icon-hover-nudge"
              title="Delivery track record"
            >
              <Rocket size={20} />
            </div>
            <div>
              <p className="text-[9px] font-mono text-secondary/90 uppercase tracking-widest">Delivery</p>
              <p className="text-lg font-bold font-syne text-white">100+ Projects</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 0.92, x: 0 }}
            transition={{ delay: 0.4, duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
            className="card-polish p-5 glass rounded-xl border-white/10 flex items-center gap-4 max-w-sm"
          >
            <div
              className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary shrink-0 icon-hover-nudge"
              title="Active AI models in production"
            >
              <Sparkles size={20} />
            </div>
            <div>
              <p className="text-[9px] font-mono text-primary/90 uppercase tracking-widest">AI Lab</p>
              <p className="text-lg font-bold font-syne text-white">10+ Active Models</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.48, duration: 0.32 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 md:left-[max(1.25rem,calc((100vw-80rem)/2+1.25rem))] md:translate-x-0 md:bottom-10"
        aria-hidden
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/35 hidden md:block">Scroll</span>
        <div className="w-px h-10 md:h-14 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
};

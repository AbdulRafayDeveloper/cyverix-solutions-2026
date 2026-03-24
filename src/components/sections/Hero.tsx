"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MoveRight, Sparkles, Rocket } from "lucide-react";

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: any[] = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      init();
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = Math.random() > 0.5 ? "rgba(0, 255, 178, 0.4)" : "rgba(123, 94, 167, 0.4)";
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > window.innerWidth) this.x = 0;
        if (this.x < 0) this.x = window.innerWidth;
        if (this.y > window.innerHeight) this.y = 0;
        if (this.y < 0) this.y = window.innerHeight;
      }

      draw() {
        ctx!.fillStyle = this.color;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    const init = () => {
      particles = [];
      const particleCount = window.innerWidth < 768 ? 60 : 150;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      ctx.lineWidth = 1;
      const connectionDistance = 150;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.strokeStyle = `rgba(0, 255, 178, ${0.2 * (1 - distance / connectionDistance)})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative h-screen min-h-screen w-full snap-start snap-always flex flex-col justify-center items-center px-6 overflow-hidden bg-[#0A0A0F]">
      {/* Background Media */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10 opacity-70"
      />

      {/* Background Blobs (Adaptive Size) */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-primary/10 blur-[100px] rounded-full -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.25, 1], x: [0, -20, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -right-1/4 w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] bg-secondary/10 blur-[100px] rounded-full -z-10"
      />

      {/* Content Container (Main Focus) */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center relative z-10">

        {/* Superior Branding Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="group relative inline-flex items-center gap-4 px-5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl mb-10 md:mb-14 hover:border-primary/40 transition-all cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-[10px] md:text-[11px] font-mono tracking-[0.3em] uppercase text-text-secondary">
            Next-Gen AI Engineering
          </span>
        </motion.div>

        {/* Hero Headline (Responsive Clamped Size) */}
        <div className="text-center w-full max-w-6xl pb-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] xl:text-[8rem] font-syne font-extrabold mb-8 leading-[1.1] md:leading-[1.0] tracking-tight md:tracking-tighter"
          >
            Engineering <br className="hidden sm:block" />
            <span className="text-gradient">Human</span> <br className="hidden sm:block" />
            Advantage.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-lg md:text-xl lg:text-2xl text-text-secondary/90 max-w-3xl mx-auto mb-12 md:mb-16 font-medium leading-relaxed balance"
          >
            Building ultra-scalable AI architectures and complex software ecosystems designed
            to redefine world-class enterprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8"
          >
            <Link
              href="#portfolio"
              className="group relative w-full sm:w-auto px-10 py-5 bg-cta rounded-2xl font-bold text-background glow-on-hover flex items-center justify-center gap-3 transition-transform hover:scale-[1.05]"
            >
              Explore Our Work
              <MoveRight className="transition-transform group-hover:translate-x-1.5" size={22} />
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto px-10 py-5 rounded-2xl border border-white/10 hover:border-primary/50 text-text-primary font-bold transition-all bg-white/5 backdrop-blur-sm hover:bg-white/10 flex items-center justify-center"
            >
              Consult an Engineer
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Global Status Indicators (Floating Sidebar-style) */}
      <div className="absolute inset-x-0 bottom-24 max-w-7xl mx-auto px-8 pointer-events-none hidden xl:flex justify-between items-end">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 0.8, x: 0 }}
          transition={{ delay: 1.2 }}
          className="p-5 glass rounded-2xl border-white/5 flex items-center gap-4"
        >
          <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary">
            <Rocket size={20} />
          </div>
          <div>
            <p className="text-[9px] font-mono text-secondary uppercase tracking-widest">Global Status</p>
            <p className="text-lg font-bold font-syne">100+ Projects</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 0.8, x: 0 }}
          transition={{ delay: 1 }}
          className="p-5 glass rounded-2xl border-white/5 flex items-center gap-4"
        >
          <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
            <Sparkles size={20} />
          </div>
          <div>
            <p className="text-[9px] font-mono text-primary uppercase tracking-widest">AI Readiness</p>
            <p className="text-lg font-bold font-syne">10+ Active Models</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-10 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
};

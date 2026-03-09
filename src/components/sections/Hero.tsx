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
    <section className="relative min-h-[110vh] flex flex-col justify-center items-center pt-32 pb-24 overflow-hidden">
      {/* Background Media */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-10 opacity-80"
      />
      
      {/* Moving Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 60, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full -z-10" 
      />

      {/* Floating Elements (Desktop only) */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-6 pointer-events-none hidden lg:block">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 1 }}
           className="absolute top-[20%] right-10 p-6 glass rounded-3xl border-primary/20 backdrop-blur-3xl shadow-2xl"
        >
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
               <Sparkles size={24} />
             </div>
             <div>
               <p className="text-[10px] font-mono text-primary uppercase tracking-widest">Active Engineering</p>
               <p className="text-xl font-bold font-syne">10+ AI Models</p>
             </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 1.2 }}
           className="absolute bottom-[30%] left-0 p-6 glass rounded-3xl border-secondary/20 backdrop-blur-3xl shadow-2xl"
        >
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary">
               <Rocket size={24} />
             </div>
             <div>
               <p className="text-[10px] font-mono text-secondary uppercase tracking-widest">Global Delivery</p>
               <p className="text-xl font-bold font-syne">100+ Projects</p>
             </div>
          </div>
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-xl mb-12 hover:border-primary/30 transition-all cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-text-secondary group-hover:text-primary transition-colors">
              Pioneering Tomorrow&apos;s Tech Stack
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-syne font-extrabold mb-10 leading-[0.85] tracking-tighter"
          >
            Engineering <br />
            <span className="text-gradient">Human</span> <br />
            Advantage.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-text-secondary/80 max-w-2xl mx-auto mb-16 font-medium leading-relaxed"
          >
            Cyverix Solutions builds ultra-scalable AI architectures and complex software ecosystems 
            designed to empower global enterprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link 
              href="#portfolio"
              className="group relative px-10 py-5 bg-cta rounded-2xl font-bold text-background glow-on-hover flex items-center gap-3 transition-all hover:scale-[1.05]"
            >
              <span className="relative z-10">Explore Our Work</span>
              <MoveRight className="relative z-10 transition-transform group-hover:translate-x-1" size={22} />
            </Link>
            <Link 
              href="#contact"
              className="px-10 py-5 rounded-2xl border border-white/10 hover:border-primary/50 text-text-primary font-bold transition-all bg-white/5 backdrop-blur-md hover:bg-white/10"
            >
              Consult an Engineer
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>

    </section>
  );
};

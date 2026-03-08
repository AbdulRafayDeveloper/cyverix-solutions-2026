"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MoveRight, Sparkles } from "lucide-react";

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
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
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2 + 0.1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = Math.random() > 0.5 ? "#00FFB222" : "#7B5EA722";
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        if (this.y < 0) this.y = canvas!.height;
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
      const count = Math.min((window.innerWidth * window.innerHeight) / 9000, 150);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.strokeStyle = `rgba(0, 255, 178, ${0.2 * (1 - distance / 150)})`;
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
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 overflow-hidden mesh-gradient">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full -z-10 animate-pulse-slow" />

      {/* Background Particles */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-10 opacity-70"
      />

      {/* Content */}
      <motion.div
        className="max-w-7xl mx-auto px-6 text-center z-10"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono mb-8 animate-pulse-slow"
        >
          <Sparkles size={14} />
          <span>NOW POWERED BY NEXT-GEN AI</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-9xl font-syne font-extrabold mb-8 leading-[0.9] tracking-tighter"
        >
          Engineering <br />
          <span className="text-gradient">Products</span> <br />
          for the Future.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-text-secondary/80 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
        >
          Specializing in AI automation, scalable software architectures, and 
          next-generation digital experiences that redefine industries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <button className="group relative px-8 py-4 bg-cta rounded-full font-bold text-background glow-on-hover flex items-center gap-2 transition-all overflow-hidden">
            <span className="relative z-10 transition-transform group-hover:-translate-x-1">See Our Work</span>
            <MoveRight className="relative z-10 transition-transform group-hover:translate-x-1" size={20} />
          </button>
          <button className="px-8 py-4 rounded-full border border-border hover:border-primary/50 text-text-primary font-bold transition-all bg-surface/50">
            Talk to Us
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-secondary flex flex-col items-center gap-2"
      >
        <div className="w-5 h-8 border-2 border-border rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

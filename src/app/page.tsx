"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";

// Dynamic imports for optimized loading
const Services = dynamic(() => import("@/components/sections/Services").then(m => m.Services));
const WhyUs = dynamic(() => import("@/components/sections/WhyUs").then(m => m.WhyUs));
const Process = dynamic(() => import("@/components/sections/Process").then(m => m.Process));
const TechStack = dynamic(() => import("@/components/sections/TechStack").then(m => m.TechStack));
const Portfolio = dynamic(() => import("@/components/sections/Portfolio").then(m => m.Portfolio));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(m => m.Testimonials));
const About = dynamic(() => import("@/components/sections/About").then(m => m.About));
const Careers = dynamic(() => import("@/components/sections/Careers").then(m => m.Careers));
const Contact = dynamic(() => import("@/components/sections/Contact").then(m => m.Contact));
const Footer = dynamic(() => import("@/components/layout/Footer").then(m => m.Footer));

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button']")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-primary/40 pointer-events-none z-[1000000] hidden md:block" // Ultra-high z-index
        animate={{
          x: mousePos.x - 24,
          y: mousePos.y - 24,
          scale: isHovering ? 1.6 : 1,
          borderWidth: isHovering ? "1px" : "2px",
          borderColor: isHovering ? "rgba(0, 255, 178, 0.4)" : "rgba(0, 255, 178, 0.2)",
          backgroundColor: isHovering ? "rgba(0, 255, 178, 0.05)" : "transparent",
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.6 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[1000001] hidden md:block shadow-[0_0_10px_#00FFB2]" // Ultra-high z-index
        animate={{
          x: mousePos.x - 3,
          y: mousePos.y - 3,
          scale: isHovering ? 4 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 35, stiffness: 600, mass: 0.1 }}
      />
    </>
  );
};

const ScrollProgress = ({ containerRef }: { containerRef?: React.RefObject<HTMLElement | null> }) => {
  const { scrollYProgress } = useScroll(containerRef ? { container: containerRef } : undefined);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary z-[1000000] origin-left shadow-[0_0_10px_#00FFB2]" // Matches primary color
      style={{ scaleX }}
    />
  );
};

export default function Home() {
  const scrollRef = useRef<HTMLElement>(null);

  return (
    <main
      id="main-scroll"
      ref={scrollRef}
      className="relative h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar"
    >
      <ScrollProgress containerRef={scrollRef} />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <TechStack />
      <Portfolio />
      <Testimonials />
      <About />
      <Careers />
      <Contact />
      <Footer />
    </main>
  );
}

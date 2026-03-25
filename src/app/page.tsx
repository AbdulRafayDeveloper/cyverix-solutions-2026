"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";

const sectionSkeleton = (
  <div className="min-h-[55vh] w-full px-6 py-24 flex flex-col justify-center gap-6" aria-hidden>
    <div className="skeleton-section h-4 w-32 rounded-full mx-auto md:mx-0" />
    <div className="skeleton-section h-12 w-3/4 max-w-lg rounded-xl mx-auto md:mx-0" />
    <div className="skeleton-section h-24 w-full max-w-2xl rounded-2xl mx-auto md:mx-0" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="skeleton-section h-48 rounded-[2rem]" />
      <div className="skeleton-section h-48 rounded-[2rem]" />
    </div>
  </div>
);

const Services = dynamic(() => import("@/components/sections/Services").then((m) => m.Services), { loading: () => sectionSkeleton });
const WhyUs = dynamic(() => import("@/components/sections/WhyUs").then((m) => m.WhyUs), { loading: () => sectionSkeleton });
const Process = dynamic(() => import("@/components/sections/Process").then((m) => m.Process), { loading: () => sectionSkeleton });
const TechStack = dynamic(() => import("@/components/sections/TechStack").then((m) => m.TechStack), { loading: () => sectionSkeleton });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then((m) => m.Testimonials), {
  loading: () => sectionSkeleton,
});
const About = dynamic(() => import("@/components/sections/About").then((m) => m.About), { loading: () => sectionSkeleton });
const Contact = dynamic(() => import("@/components/sections/Contact").then((m) => m.Contact), { loading: () => sectionSkeleton });
const Footer = dynamic(() => import("@/components/layout/Footer").then((m) => m.Footer), { loading: () => <div className="h-32 skeleton-section rounded-none" aria-hidden /> });

const ScrollProgress = ({ containerRef }: { containerRef?: React.RefObject<HTMLElement | null> }) => {
  const { scrollYProgress } = useScroll(containerRef ? { container: containerRef } : undefined);
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 38, mass: 0.12 });

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[1000000] h-[2px] origin-left bg-gradient-to-r from-primary/90 via-secondary/80 to-primary/90 will-change-transform pointer-events-none"
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
      className="relative h-screen overflow-y-auto snap-y snap-proximity no-scrollbar"
    >
      <ScrollProgress containerRef={scrollRef} />
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <TechStack />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

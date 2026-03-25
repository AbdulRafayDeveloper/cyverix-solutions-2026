"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";

/** Thin scroll progress for routes where the window scrolls (not home `#main-scroll`). */
function NonHomeScrollProgress() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 38,
    mass: 0.12,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[1000001] h-[2px] origin-left bg-gradient-to-r from-primary/90 via-secondary/80 to-primary/90 will-change-transform pointer-events-none"
      style={{ scaleX }}
    />
  );
}

export function AppProviders({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <NonHomeScrollProgress />
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
        className="min-h-0"
      >
        {children}
      </motion.div>
    </>
  );
}

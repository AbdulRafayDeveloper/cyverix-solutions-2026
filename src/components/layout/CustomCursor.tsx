"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Global custom cursor — must render from root layout because `body` uses `cursor: none`
 * in globals.css; without this, non-home routes would have no visible pointer.
 */
export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const ringX = useSpring(mx, { stiffness: 520, damping: 38, mass: 0.45 });
  const ringY = useSpring(my, { stiffness: 520, damping: 38, mass: 0.45 });
  const dotX = useSpring(mx, { stiffness: 900, damping: 48, mass: 0.12 });
  const dotY = useSpring(my, { stiffness: 900, damping: 48, mass: 0.12 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      const target = e.target as HTMLElement;
      setIsHovering(
        !!target.closest("a, button, [role='button'], input, textarea, select, label, summary"),
      );
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mx, my]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border pointer-events-none z-[1000000] hidden md:block will-change-transform"
        style={{
          x: ringX,
          y: ringY,
          translateX: -24,
          translateY: -24,
          scale: isHovering ? 1.5 : 1,
          borderWidth: isHovering ? 1 : 2,
          borderColor: isHovering ? "rgba(0, 255, 178, 0.45)" : "rgba(0, 255, 178, 0.22)",
          backgroundColor: isHovering ? "rgba(0, 255, 178, 0.06)" : "rgba(0, 0, 0, 0)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 32 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[1000001] hidden md:block shadow-[0_0_10px_#00FFB2] will-change-transform"
        style={{
          x: dotX,
          y: dotY,
          translateX: -3,
          translateY: -3,
          scale: isHovering ? 3.5 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 36 }}
      />
    </>
  );
}

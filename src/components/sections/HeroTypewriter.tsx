"use client";

import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const FIRST_LINE = "Engineering";

/**
 * Types the first line once; reveals gradient line immediately if reduced motion is preferred.
 */
export function HeroTypewriter({ onComplete }: { onComplete?: () => void }) {
  const reduceMotion = useReducedMotion();
  const [text, setText] = useState(reduceMotion ? FIRST_LINE : "");
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (reduceMotion) {
      setText(FIRST_LINE);
      onCompleteRef.current?.();
      return;
    }
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setText(FIRST_LINE.slice(0, i));
      if (i >= FIRST_LINE.length) {
        window.clearInterval(id);
        onCompleteRef.current?.();
      }
    }, 52);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <>
      {text}
      {!reduceMotion && text.length < FIRST_LINE.length ? (
        <span className="inline-block w-[2px] h-[0.85em] ml-0.5 align-[-0.08em] bg-primary/80 animate-pulse motion-reduce:animate-none" aria-hidden />
      ) : null}
    </>
  );
}

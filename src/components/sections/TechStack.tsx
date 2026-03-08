"use client";

import React from "react";
import { motion } from "framer-motion";

const techs = [
  "React", "Next.js", "Node.js", "Python", "Flutter", 
  "React Native", "PostgreSQL", "MongoDB", "OpenAI", 
  "TensorFlow", "AWS", "Firebase", "Docker", "TypeScript", "Laravel"
];

export const TechStack = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-syne font-bold mb-4">Technologies We Use</h2>
        <p className="text-text-secondary">We stay at the forefront of the digital revolution.</p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Row 1 */}
        <div className="flex w-full overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee hover:pause whitespace-nowrap">
            {[...techs, ...techs].map((tech, i) => (
              <div
                key={i}
                className="mx-8 px-10 py-5 rounded-2xl glass border border-border/50 text-xl font-syne font-bold text-text-secondary hover:text-primary transition-colors hover:border-primary/30"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex w-full overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee-reverse hover:pause whitespace-nowrap">
            {[...techs, ...techs].map((tech, i) => (
              <div
                key={i}
                className="mx-8 px-10 py-5 rounded-2xl glass border border-border/50 text-xl font-syne font-bold text-text-secondary hover:text-primary transition-colors hover:border-primary/30"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

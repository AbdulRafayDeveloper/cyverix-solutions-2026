import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { blogPosts } from "@/lib/blog-posts";
import { BlogIndexClient } from "@/app/blog/BlogIndexClient";

export default function BlogPage() {
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Navbar />

      <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 px-4 sm:px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-90"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 90% 60% at 20% -10%, rgba(0, 255, 178, 0.12), transparent 50%),
              radial-gradient(ellipse 70% 50% at 90% 20%, rgba(123, 94, 167, 0.14), transparent 48%)
            `,
          }}
          aria-hidden
        />
        <div className="max-w-6xl mx-auto relative z-[1] text-center">
          <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.4em] text-primary mb-4">Insights</p>
          <h1 className="font-syne text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-white mb-5">
            Cyverix <span className="text-gradient">Journal</span>
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Practical notes on building software and AI for real businesses: delivery, architecture, and how we work with teams worldwide.
          </p>
        </div>
      </section>

      <BlogIndexClient posts={sorted} />

      <Footer />
    </main>
  );
}

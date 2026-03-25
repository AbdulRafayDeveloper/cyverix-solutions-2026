import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { blogPosts } from "@/lib/blog-posts";
import { ArrowUpRight, Clock } from "lucide-react";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(new Date(iso));
}

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

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative flex flex-col rounded-[1.5rem] border border-white/[0.08] bg-gradient-to-b from-surface/60 to-background/80 overflow-hidden shadow-[0_24px_80px_-40px_rgba(0,0,0,0.85)] transition-all duration-300 hover:border-primary/25 hover:shadow-[0_32px_100px_-36px_rgba(0,255,178,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <span className="relative aspect-[16/10] overflow-hidden block">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
                <span className="absolute top-4 left-4 inline-flex rounded-full border border-primary/35 bg-background/80 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-primary backdrop-blur-sm">
                  {post.category}
                </span>
              </span>
              <span className="flex flex-col flex-1 p-6 md:p-7">
                <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono text-text-secondary/90 mb-3">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span className="hidden sm:inline text-border">·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={12} className="opacity-70" aria-hidden />
                    {post.readTime}
                  </span>
                </span>
                <span className="font-syne text-xl md:text-2xl font-bold text-white leading-snug mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </span>
                <span className="text-text-secondary text-sm leading-relaxed flex-1 mb-5 line-clamp-3">{post.excerpt}</span>
                <span className="flex flex-wrap gap-2 mt-auto">
                  {post.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono uppercase tracking-wider text-text-secondary/90 px-2 py-1 rounded-md border border-white/[0.06] bg-white/[0.02]"
                    >
                      {t}
                    </span>
                  ))}
                </span>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Read article
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

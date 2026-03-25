"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Search, Sparkles } from "lucide-react";
import type { BlogPost } from "@/lib/blog-posts";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(iso));
}

function normalize(s: string) {
  return s.trim().toLowerCase();
}

export function BlogIndexClient({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState(10);

  const categories = useMemo(() => {
    const set = new Set<string>(posts.map((p) => p.category));
    return ["All", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [posts]);

  const filtered = useMemo(() => {
    const q = normalize(query);
    return posts.filter((p) => {
      const inCategory = category === "All" ? true : p.category === category;
      if (!inCategory) return false;
      if (!q) return true;
      const hay = normalize([p.title, p.excerpt, p.category, p.tags.join(" ")].join(" "));
      return hay.includes(q);
    });
  }, [posts, query, category]);

  const featured = filtered[0];
  const rest = filtered.slice(1, Math.max(1, visibleCount) /* visible includes featured */);
  const hasMore = filtered.length > Math.max(1, visibleCount);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24 md:pb-32">
      <div className="mb-8 md:mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 items-end">
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-[1.6rem] opacity-70 blur-2xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(0,255,178,0.14), transparent 70%), radial-gradient(closest-side, rgba(123,94,167,0.18), transparent 70%)",
              }}
              aria-hidden
            />
            <label className="relative block">
              <span className="sr-only">Search articles</span>
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/80">
                <Search size={18} aria-hidden />
              </span>
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setVisibleCount(10);
                }}
                placeholder="Search by topic, tag, or category…"
                className="relative w-full rounded-2xl border border-white/[0.10] bg-surface/50 px-12 py-4 text-sm text-text-primary placeholder:text-text-secondary/70 shadow-[0_30px_100px_-70px_rgba(0,0,0,0.9)] backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-text-secondary/80">
                <Sparkles size={14} aria-hidden />
                Curated
              </span>
            </label>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-text-secondary/80 hidden sm:inline">
              Filter
            </span>
            <div className="relative">
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setVisibleCount(10);
                }}
                className="appearance-none rounded-2xl border border-white/[0.10] bg-surface/50 px-4 py-3 pr-10 text-sm text-text-primary backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary/70">
                <ArrowUpRight size={16} aria-hidden className="rotate-90" />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] font-mono text-text-secondary/80">
          <span className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1">
            Showing <span className="mx-1 text-text-primary font-bold">{filtered.length}</span> articles
          </span>
          {query ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setVisibleCount(10);
              }}
              className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 hover:border-primary/25 hover:text-text-primary transition-colors"
            >
              Clear search
            </button>
          ) : null}
        </div>
      </div>

      {featured ? (
        <Link
          href={`/blog/${featured.slug}`}
          className="group relative grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] overflow-hidden rounded-[2rem] border border-white/[0.10] bg-gradient-to-b from-surface/60 to-background/70 shadow-[0_40px_140px_-80px_rgba(0,0,0,0.95)] transition-all duration-300 hover:border-primary/25 hover:shadow-[0_46px_160px_-92px_rgba(0,255,178,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[360px]">
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/20 to-transparent opacity-90" />
            <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-primary/35 bg-background/70 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-primary backdrop-blur-sm">
              Featured
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
              {featured.category}
            </div>
          </div>

          <div className="p-7 md:p-9 flex flex-col">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono text-text-secondary/90 mb-4">
              <time dateTime={featured.date}>{formatDate(featured.date)}</time>
              <span className="hidden sm:inline text-border">·</span>
              <span className="inline-flex items-center gap-1">
                <Clock size={12} className="opacity-70" aria-hidden />
                {featured.readTime}
              </span>
            </div>
            <h2 className="font-syne text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-[1.15] mb-4 group-hover:text-primary transition-colors">
              {featured.title}
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6 line-clamp-3">{featured.excerpt}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {featured.tags.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono uppercase tracking-wider text-text-secondary/90 px-2 py-1 rounded-md border border-white/[0.06] bg-white/[0.02]"
                >
                  {t}
                </span>
              ))}
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
              Read article
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </span>
          </div>
        </Link>
      ) : (
        <div className="rounded-2xl border border-white/[0.08] bg-surface/30 p-8 text-text-secondary">
          No articles match your search yet.
        </div>
      )}

      {rest.length ? (
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {rest.map((post) => (
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
      ) : null}

      {hasMore ? (
        <div className="mt-10 md:mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((c) => Math.min(filtered.length, c + 9))}
            className="group inline-flex items-center gap-2 rounded-2xl border border-white/[0.10] bg-surface/45 px-6 py-3 text-sm font-bold text-text-primary shadow-[0_24px_90px_-60px_rgba(0,0,0,0.95)] backdrop-blur-md transition-all hover:border-primary/30 hover:shadow-[0_30px_110px_-70px_rgba(0,255,178,0.14)] focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            Show more blogs
            <ArrowUpRight
              size={16}
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      ) : null}
    </section>
  );
}


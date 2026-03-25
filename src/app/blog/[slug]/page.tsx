import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { blogPosts, getBlogPostBySlug, getAllBlogSlugs } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/site";
import { ArrowLeft, Clock } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(new Date(iso));
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      const pa = a.category === post.category ? 1 : 0;
      const pb = b.category === post.category ? 1 : 0;
      return pb - pa || new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Navbar />

      <article className="relative">
        <div className="absolute inset-0 h-[min(70vh,520px)] overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/85 to-background" />
        </div>

        <div className="relative z-[1] max-w-3xl mx-auto px-4 sm:px-6 pt-28 md:pt-36 pb-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest mb-10 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft size={16} /> All articles
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-text-secondary mb-5">
            <span className="rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-primary font-bold uppercase tracking-wide">
              {post.category}
            </span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="text-border">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} aria-hidden />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed border-l-2 border-primary/40 pl-5 mb-12">
            {post.excerpt}
          </p>

          <div className="max-w-none">
            {post.paragraphs.map((para, i) => (
              <p key={i} className="mb-6 last:mb-0 text-[1.05rem] md:text-[1.08rem] leading-relaxed text-text-secondary/95">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-10 border-t border-white/[0.08] flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/[0.1] bg-white/[0.03] text-text-secondary"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-8 text-sm text-text-secondary/80">
            <span className="font-mono text-[10px] uppercase tracking-widest text-text-secondary">Author</span>
            <br />
            <span className="font-semibold text-text-primary">{post.author}</span>
          </p>
        </div>
      </article>

      {related.length > 0 ? (
        <section className="border-t border-white/[0.06] bg-alt-section/50 py-16 md:py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-syne text-2xl font-bold text-white mb-8">Related articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group rounded-2xl border border-white/[0.08] bg-surface/40 p-6 hover:border-primary/30 transition-colors"
                >
                  <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-2">{r.category}</p>
                  <p className="font-syne font-bold text-lg text-white group-hover:text-primary transition-colors leading-snug">
                    {r.title}
                  </p>
                  <p className="text-sm text-text-secondary mt-2 line-clamp-2">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <Footer />
    </main>
  );
}

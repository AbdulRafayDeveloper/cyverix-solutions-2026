import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Home, ArrowRight, SearchX } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found | Cyverix Solutions",
  description: "The page you requested could not be found.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-text-primary flex flex-col">
      <Navbar />

      <div className="relative flex-1 flex flex-col items-center justify-center px-6 pt-28 pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[min(90vw,720px)] h-[min(90vw,720px)] bg-primary/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-[0.12] pointer-events-none" />

        <div className="relative z-10 max-w-xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-surface border border-border mb-8 text-primary">
            <SearchX size={32} strokeWidth={1.75} />
          </div>

          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-4">Error 404</p>

          <h1 className="font-syne font-extrabold text-6xl sm:text-7xl md:text-8xl tracking-tighter mb-2 leading-none">
            <span className="text-gradient">404</span>
          </h1>

          <h2 className="font-syne font-bold text-2xl sm:text-3xl text-text-primary mb-4">
            Page not found
          </h2>

          <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-10">
            The page you&apos;re looking for doesn&apos;t exist or may have been moved. Check the URL, or head back to the homepage.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-cta text-background font-bold rounded-2xl text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(0,255,178,0.15)] hover:opacity-95 transition-opacity"
            >
              <Home size={18} strokeWidth={2.5} />
              Back to home
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 border border-border hover:border-primary/40 text-text-primary font-bold rounded-2xl text-sm transition-colors bg-surface/50"
            >
              Contact us
              <ArrowRight size={18} className="text-primary" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

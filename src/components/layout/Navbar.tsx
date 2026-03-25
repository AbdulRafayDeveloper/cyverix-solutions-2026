"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About", href: "/about" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = 0;
    setNavHidden(false);
  }, [pathname]);

  useEffect(() => {
    let detach: (() => void) | undefined;
    let raf = 0;

    const bind = () => {
      const main = pathname === "/" ? document.getElementById("main-scroll") : null;
      if (pathname === "/" && !main) {
        raf = requestAnimationFrame(bind);
        return;
      }

      const scrollEl: HTMLElement | Window = main ?? window;
      const readY = () => (scrollEl === window ? window.scrollY : (scrollEl as HTMLElement).scrollTop);

      const onScroll = () => {
        const y = readY();
        setIsScrolled(y > 24);

        if (mobileMenuOpen) {
          lastY.current = y;
          return;
        }

        const delta = y - lastY.current;
        if (y > 100 && delta > 6) {
          setNavHidden(true);
        } else if (delta < -6) {
          setNavHidden(false);
        }
        lastY.current = y;
      };

      scrollEl.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      detach = () => scrollEl.removeEventListener("scroll", onScroll);
    };

    bind();
    return () => {
      cancelAnimationFrame(raf);
      detach?.();
    };
  }, [pathname, mobileMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] will-change-transform",
        navHidden && !mobileMenuOpen ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100",
        isScrolled ? "pt-3 md:pt-4 px-4 md:px-6" : "px-4 md:px-6 py-3 md:py-4"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          isScrolled
            ? cn(
                "rounded-3xl px-5 md:px-8 py-2.5 md:py-3",
                "bg-[rgba(18,18,26,0.78)] backdrop-blur-xl backdrop-saturate-150 border border-white/[0.09]",
                "shadow-[0_20px_80px_-20px_rgba(0,0,0,0.65)]"
              )
            : "py-0"
        )}
      >
        <Link href="/" className="flex items-center gap-3 group shrink-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
          <div className="relative w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-lg img-hover-zoom">
            <Image src="/cyverix-logo.svg" alt="Cyverix Solutions" width={40} height={40} priority className="object-contain" />
          </div>
          <span className="text-lg md:text-2xl font-bold font-syne tracking-tight group-hover:text-primary transition-colors duration-200 delay-[40ms] hidden sm:block">
            Cyverix Solutions
          </span>
          <span className="text-lg font-bold font-syne tracking-tight sm:hidden block">Cyverix</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "group relative text-xs font-bold uppercase tracking-widest transition-colors duration-200 delay-[40ms]",
                  active ? "text-primary" : "text-text-secondary hover:text-primary"
                )}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-[2px] bg-primary transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] origin-left will-change-transform",
                    active ? "w-full scale-x-100" : "w-full scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </Link>
            );
          })}
          <Link
            href="/#contact"
            className="btn-polish btn-ripple px-8 py-3 bg-cta text-background font-bold rounded-full text-xs uppercase tracking-widest"
          >
            Start a Project
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden text-text-primary p-2 rounded-lg border border-transparent hover:border-border transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          title={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="inline-flex transition-transform duration-200 delay-75 hover:scale-105 active:scale-95">
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </span>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden mt-2 mx-4 rounded-2xl border border-border/80 bg-[rgba(18,18,26,0.92)] backdrop-blur-xl overflow-hidden shadow-xl"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-text-secondary hover:text-primary transition-colors duration-200 py-3 px-3 rounded-xl hover:bg-white/[0.04]"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-polish w-full py-4 bg-cta text-center text-background font-bold rounded-xl mt-2"
              >
                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

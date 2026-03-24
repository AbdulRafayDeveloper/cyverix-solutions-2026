"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Work", href: "/#portfolio" },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const container = document.getElementById("main-scroll") || window;
    const handleScroll = () => {
      const scrollY = container === window ? window.scrollY : (container as HTMLElement).scrollTop;
      setIsScrolled(scrollY > 20);
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "pt-4 px-6 scale-[0.98]" : "px-6 py-4"
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500",
        isScrolled ? "glass rounded-3xl px-8 py-3 translate-y-2" : ""
      )}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-lg">
            <Image
              src="/logo.png"
              alt="Cyverix Solutions Logo"
              width={40}
              height={40}
              priority
              className="object-contain"
            />
          </div>
          <span className="text-lg md:text-2xl font-bold font-syne tracking-tight group-hover:text-primary transition-all hidden sm:block">
            Cyverix Solutions
          </span>
          <span className="text-lg font-bold font-syne tracking-tight sm:hidden block">
            Cyverix
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-xs font-bold uppercase tracking-widest text-text-secondary hover:text-primary transition-colors"
            >
              {link.name}
              {link.name === "Careers" && (
                <span className="absolute -top-3 -right-6 px-1.5 py-0.5 rounded-full bg-primary/20 text-[6px] text-primary border border-primary/20 animate-pulse">HIRING</span>
              )}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/#contact"
            className="px-8 py-3 bg-cta text-background font-bold rounded-full text-xs uppercase tracking-widest glow-on-hover transition-all"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-text-secondary hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 bg-cta text-center text-background font-bold rounded-xl glow-on-hover"
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

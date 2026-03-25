"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";
import { SITE_LOCATION_DISPLAY, SITE_PHONE_DISPLAY, SITE_PHONE_TEL, SITE_WHATSAPP_URL } from "@/lib/site";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  );
}

export const Footer = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <footer className="bg-background pt-24 pb-8 px-6 border-t border-border/50 relative snap-start w-full">
      {/* Animated gradient line at top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 overflow-hidden rounded-md">
              <Image
                src="/cyverix-logo.svg"
                alt="Cyverix Solutions"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold font-syne tracking-tight">
              Cyverix Solutions
            </span>
          </Link>
          <p className="text-text-secondary text-sm leading-relaxed">
            Software and AI work from Faisalabad, Punjab since 2023. We build SaaS, internal tools, and customer-facing apps, with a strong focus on AI features clients can trust in production: assistants, automation, and model-backed workflows.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/cyverix-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-border rounded-lg flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://facebook.com/cyverix"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-border rounded-lg flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary transition-all"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/cyverix_solutions/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-border rounded-lg flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary transition-all"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-syne font-bold mb-6">Services</h4>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/services" className="link-animated text-sm text-text-secondary hover:text-primary transition-colors duration-200 delay-[40ms] font-semibold">
                All services
              </Link>
            </li>
            {[
              { label: "Websites and web apps", hash: "website" },
              { label: "Software / SaaS", hash: "software" },
              { label: "AI Solutions", hash: "ai" },
              { label: "Automation", hash: "automation" },
              { label: "DevOps and Cloud", hash: "devops" },
              { label: "Desktop applications", hash: "desktop" },
            ].map((item) => (
              <li key={item.hash}>
                <Link href={`/services#${item.hash}`} className="link-animated text-sm text-text-secondary hover:text-primary transition-colors duration-200 delay-[40ms]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-syne font-bold mb-6">Company</h4>
          <ul className="flex flex-col gap-4">
            {[
              { name: "Work", href: "/case-studies" },
              { name: "Blog", href: "/blog" },
              { name: "About Us", href: "/about" },
              { name: "Contact", href: "/#contact" },
              { name: "Privacy Policy", href: "/privacy-policy" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="link-animated text-sm text-text-secondary hover:text-primary transition-colors duration-200 delay-[40ms]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-syne font-bold mb-6">Get in Touch</h4>
          <ul className="flex flex-col gap-6">
            <li>
              <a
                href={SITE_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 rounded-2xl border border-[#25D366]/40 bg-[#25D366]/[0.08] p-4 transition-all duration-300 hover:border-[#25D366]/80 hover:bg-[#25D366]/[0.14] hover:shadow-[0_0_36px_-8px_rgba(37,211,102,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
              >
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center">
                  <span
                    className="absolute inset-0 rounded-2xl bg-[#25D366]/30 opacity-50 motion-safe:animate-ping"
                    aria-hidden
                  />
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366]/25 text-[#25D366] ring-1 ring-[#25D366]/40 group-hover:ring-[#25D366]/70 transition-all">
                    <WhatsAppGlyph className="h-6 w-6" />
                  </span>
                </span>
                <div className="min-w-0 text-left">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#25D366] mb-0.5">WhatsApp</p>
                  <p className="text-sm font-bold text-white group-hover:text-white">Chat with us for the fastest reply</p>
                </div>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-primary mt-1" />
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-widest font-mono">Mail us</p>
                <a href="mailto:hello@cyverix.com" className="text-sm font-bold hover:text-primary transition-colors">
                  hello@cyverix.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-secondary mt-1" />
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-widest font-mono">Call us</p>
                <a href={`tel:${SITE_PHONE_TEL}`} className="text-sm font-bold hover:text-secondary transition-colors">
                  {SITE_PHONE_DISPLAY}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-primary mt-1" />
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-widest font-mono">Visit us</p>
                <p className="text-sm font-bold">{SITE_LOCATION_DISPLAY}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="text-xs text-text-secondary">
          © <span>{mounted ? new Date().getFullYear() : 2026}</span> Cyverix Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

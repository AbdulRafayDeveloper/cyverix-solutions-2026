"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Facebook, Github, Instagram, Twitter } from "lucide-react";

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
                src="/logo.png"
                alt="Cyverix Solutions Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold font-syne tracking-tight">
              Cyverix Solutions
            </span>
          </Link>
          <p className="text-text-secondary text-sm leading-relaxed">
            Engineering the future of digital products since 2023.
            Boutique software house building world-class SaaS, AI solutions, and apps.
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
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-syne font-bold mb-6">Services</h4>
          <ul className="flex flex-col gap-4">
            {["Web Development", "Web-Based Software", "AI Solutions", "Mobile App Development", "UI/UX Design"].map((link) => (
              <li key={link}>
                <Link href="#" className="text-sm text-text-secondary hover:text-primary transition-colors">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-syne font-bold mb-6">Company</h4>
          <ul className="flex flex-col gap-4">
            {["Work", "About Us", "Careers", "Contact", "Privacy Policy"].map((link) => (
              <li key={link}>
                <Link
                  href={link === "Privacy Policy" ? "/privacy-policy" : "#"}
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-syne font-bold mb-6">Get in Touch</h4>
          <ul className="flex flex-col gap-6">
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-primary mt-1" />
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-widest font-mono">Mail us</p>
                <p className="text-sm font-bold">hello@cyverix.com</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-secondary mt-1" />
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-widest font-mono">Call us</p>
                <p className="text-sm font-bold">+92 300 1234567</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-primary mt-1" />
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-widest font-mono">Visit us</p>
                <p className="text-sm font-bold">Faisalabad, PK</p>
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

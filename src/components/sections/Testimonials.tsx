"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, MessageSquareQuote } from "lucide-react";

const testimonials = [
  {
    name: "Robert M. Chen",
    company: "Silicon Dynamics (USA)",
    text: "Cyverix Solutions engineered our entire cloud infrastructure from the ground up. Their expertise in scalable AI is unmatched.",
    rating: 5,
    flag: "🇺🇸",
  },
  {
    name: "Jessica Miller",
    company: "Innovate Financial (USA)",
    text: "Working with them was a game balancer. We got high-end engineering at a fraction of the cost of local US agencies.",
    rating: 5,
    flag: "🇺🇸",
  },
  {
    name: "Liam O'Connor",
    company: "Maple Tech Solutions (Canada)",
    text: "The precision of their frontend work is insane. Our conversion rates jumped 40% after the redesign.",
    rating: 5,
    flag: "🇨🇦",
  },
  {
    name: "Sarah Parker",
    company: "Venture Digital (USA)",
    text: "They are not just vendors; they are partners. Their AI automation saved us 20+ hours of manual work weekly.",
    rating: 5,
    flag: "🇺🇸",
  },
  {
    name: "James Wilson",
    company: "Quantum Analytics (USA)",
    text: "Deep technical knowledge and professional communication. Cyverix Solutions is our go-to for all complex SaaS projects.",
    rating: 5,
    flag: "🇺🇸",
  },
  {
    name: "David Smith",
    company: "Blue Horizon (Canada)",
    text: "Seamless delivery and extremely responsive. They handled our multi-tenant architecture with ease.",
    rating: 5,
    flag: "🇨🇦",
  },
  {
    name: "Alex Thompson",
    company: "NextGen Media (Australia)",
    text: "The double-row marquee and pixel-perfect UI they built for our site is stunning. Highly recommended!",
    rating: 5,
    flag: "🇦🇺",
  },
  {
    name: "Marcus Aurelius",
    company: "E-Commerce Titans (UK)",
    text: "Cyverix Solutions transformed our legacy system into a modern, high-speed platform. Truly world-class software house.",
    rating: 5,
    flag: "🇬🇧",
  },
  {
    name: "Emily Davis",
    company: "HealthTrack AI (USA)",
    text: "The security protocols they implemented gave our investors huge confidence. Top-tier engineering.",
    rating: 5,
    flag: "🇺🇸",
  },
  {
    name: "Michael J. Fox",
    company: "Startup Lab (USA)",
    text: "Speed, quality, and amazing design. Cyverix Solutions is easily the best tech partner we have encountered in years.",
    rating: 5,
    flag: "🇺🇸",
  },
];

const TestimonialCard = ({ t }: { t: any }) => (
  <div className="w-[350px] flex-shrink-0 p-8 glass rounded-3xl relative mx-4">
    <MessageSquareQuote size={48} className="absolute top-6 right-8 text-primary/10" />
    <div className="flex gap-1 mb-6">
      {[...Array(t.rating)].map((_, i) => (
        <Star key={i} size={14} fill="#00FFB2" className="text-primary" />
      ))}
    </div>
    <p className="text-md text-text-primary mb-8 leading-relaxed line-clamp-4 italic">
      "{t.text}"
    </p>
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-bold text-background text-sm">
        {t.name[0]}
      </div>
      <div>
        <h4 className="font-bold text-text-primary text-sm flex items-center gap-2">
          {t.name} {t.flag}
        </h4>
        <p className="text-[10px] text-text-secondary uppercase tracking-widest">{t.company}</p>
      </div>
    </div>
  </div>
);

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 min-h-screen snap-start snap-always w-full flex flex-col justify-center bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
          <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Testimonials</span>
          <h2 className="text-3xl md:text-6xl font-syne font-bold">
            What Our <span className="text-gradient">Clients</span> Say
          </h2>
        </div>
      </div>

      {/* Modern Marquee Carousel */}
      <div className="flex flex-col gap-8">
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

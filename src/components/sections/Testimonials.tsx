"use client";

import React from "react";
import { Star, MessageSquareQuote } from "lucide-react";

const testimonials = [
  {
    name: "Robert M. Chen",
    company: "Silicon Dynamics, USA",
    text: "They built our cloud setup from scratch and stayed with us through scaling questions. Clear communication the whole way.",
    rating: 5,
  },
  {
    name: "Jessica Miller",
    company: "Innovate Financial, USA",
    text: "Strong engineering without the overhead we saw from larger local agencies. We got straight answers and steady delivery.",
    rating: 5,
  },
  {
    name: "Liam O'Connor",
    company: "Maple Tech Solutions, Canada",
    text: "The frontend work was careful and fast. After the redesign, more visitors were completing our main flows.",
    rating: 5,
  },
  {
    name: "Sarah Parker",
    company: "Venture Digital, USA",
    text: "They work like partners, not a ticket queue. The automation they shipped cut down weekly manual work for our team.",
    rating: 5,
  },
  {
    name: "James Wilson",
    company: "Quantum Analytics, USA",
    text: "Solid technical depth and calm updates on Slack. We keep going back to them for SaaS builds.",
    rating: 5,
  },
  {
    name: "David Smith",
    company: "Blue Horizon, Canada",
    text: "Delivery stayed on track and they were quick to answer when we had questions. Multi-tenant setup was handled carefully.",
    rating: 5,
  },
  {
    name: "Alex Thompson",
    company: "NextGen Media, Australia",
    text: "The site they built looks sharp and the small motion details feel intentional. Happy to recommend them.",
    rating: 5,
  },
  {
    name: "Marcus Aurelius",
    company: "E-Commerce Titans, UK",
    text: "They moved us off a slow legacy stack onto something we can actually build on. Professional team.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    company: "HealthTrack AI, USA",
    text: "Security and privacy were taken seriously from the first call. That mattered for our investors.",
    rating: 5,
  },
  {
    name: "Michael J. Fox",
    company: "Startup Lab, USA",
    text: "Fast iteration, good design taste, and they do not disappear after launch. One of our better vendor choices.",
    rating: 5,
  },
];

const TestimonialCard = ({ t }: { t: (typeof testimonials)[number] }) => (
  <div className="w-[350px] flex-shrink-0 p-8 glass rounded-3xl relative mx-4">
    <MessageSquareQuote size={48} className="absolute top-6 right-8 text-primary/10" />
    <div className="flex gap-1 mb-6">
      {[...Array(t.rating)].map((_, i) => (
        <Star key={i} size={14} fill="#00FFB2" className="text-primary" />
      ))}
    </div>
    <p className="text-md text-text-primary mb-8 leading-relaxed line-clamp-4 italic">
      &quot;{t.text}&quot;
    </p>
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-bold text-background text-sm">
        {t.name[0]}
      </div>
      <div>
        <h4 className="font-bold text-text-primary text-sm">{t.name}</h4>
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

      <div className="flex flex-col gap-8">
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

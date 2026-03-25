"use client";

import React from "react";
import { Star, MessageSquareQuote } from "lucide-react";

/** Order: 2 Australia, 1 Taiwan, then 3 Pakistan (center block), 1 Saudi Arabia */
const testimonials = [
  {
    name: "Olivia Bennett",
    company: "Harbor Labs, Australia",
    text: "They shipped a clean admin for our product and stuck to realistic timelines. Time zone overlap with their team was easier than we expected.",
    rating: 5,
  },
  {
    name: "Ryan Mitchell",
    company: "Outback Systems, Australia",
    text: "Solid React work and honest scoping. We liked that they asked hard questions early instead of promising everything in week one.",
    rating: 5,
  },
  {
    name: "Chen Wei-Ting",
    company: "BrightWave Tech, Taiwan",
    text: "Integration with our APIs was handled carefully and the handover notes were actually useful for our internal developers.",
    rating: 5,
  },
  {
    name: "Usman Malik",
    company: "Lahore Commerce Hub, Pakistan",
    text: "We needed Urdu-friendly flows and a checkout that did not break on slower networks. They tested like our real customers would.",
    rating: 5,
  },
  {
    name: "Ayesha Siddiqui",
    company: "Karachi FinTech Collective, Pakistan",
    text: "Clear weekly updates and no surprise invoices. The dashboard they built is what our board actually looks at now.",
    rating: 5,
  },
  {
    name: "Hassan Raza",
    company: "Faisalabad Digital Works, Pakistan",
    text: "Local context helped a lot. They understood how our team works and kept the codebase simple enough for us to hire on later.",
    rating: 5,
  },
  {
    name: "Nora Al-Farsi",
    company: "Riyadh Logistics Suite, Saudi Arabia",
    text: "Arabic layout and RTL were done properly, not patched on at the end. Our ops team trusts the new tools day to day.",
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

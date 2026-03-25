"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { stagger, viewTransition, viewViewport } from "@/lib/motion";
import Link from "next/link";
import { ArrowRight, X, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { getServiceIcon } from "@/lib/service-icons";

const Modal = ({ service, onClose }: { service: (typeof SERVICES)[number]; onClose: () => void }) => {
  const Icon = getServiceIcon(service.id);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="w-full max-w-2xl bg-surface border border-border p-6 md:p-12 rounded-3xl md:rounded-[3rem] relative shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 md:top-8 md:right-8 text-text-secondary hover:text-white transition-colors z-30"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 md:mb-8">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <Icon size={32} className="text-primary" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-primary uppercase tracking-[0.3em]">{service.label}</span>
            <h3 className="text-2xl md:text-3xl font-syne font-bold">{service.title}</h3>
          </div>
        </div>

        <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6 md:mb-8">{service.longDescription}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {service.features.map((feature: string) => (
            <div key={feature} className="flex items-center gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl bg-background/50 border border-border">
              <CheckCircle2 size={18} className="text-primary shrink-0" />
              <span className="text-xs md:text-sm font-bold text-text-primary">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12">
          <Link
            href="/#contact"
            onClick={onClose}
            className="btn-polish btn-ripple block w-full py-3 md:py-4 bg-cta rounded-xl md:rounded-2xl font-bold text-background transition-all text-center text-sm md:text-base"
          >
            Start a Project with Us
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Services = () => {
  const [selectedService, setSelectedService] = useState<(typeof SERVICES)[number] | null>(null);

  return (
    <section id="services" className="py-24 px-6 min-h-screen w-full snap-start snap-always flex flex-col justify-center bg-alt-section relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewViewport}
            transition={viewTransition}
            className="text-primary font-mono text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 inline-flex items-center gap-2"
          >
            Our Expertise
            <span className="badge-minimal">New</span>
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewViewport}
            transition={{ ...viewTransition, delay: 0.04 }}
            className="text-4xl md:text-6xl font-syne font-bold mt-6 mb-4 tracking-tight"
          >
            What We <span className="text-gradient">Build</span>
          </motion.h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg mb-6">
            We build websites, desktop and mobile apps, SaaS-style products, and AI features for teams that need clear delivery, not buzzwords. Pick a lane below or read the full list on our services page.
          </p>
          <Link
            href="/services"
            className="link-animated inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-[0.15em]"
          >
            View all services in detail
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = getServiceIcon(service.id);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewViewport}
                transition={stagger(index, 0.035)}
                className="card-polish group relative p-10 bg-surface border border-border rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-primary/5"
                onClick={() => setSelectedService(service)}
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-15 transition-opacity pointer-events-none">
                  <Icon size={140} strokeWidth={1} className="text-primary" />
                </div>

                <div className="relative z-10">
                  <div className="mb-8 w-14 h-14 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors duration-200 icon-hover-nudge">
                    <Icon size={32} className="text-primary group-hover:text-background" />
                  </div>

                  <h3 className="text-2xl font-syne font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>

                  <p className="text-text-secondary leading-relaxed mb-10 group-hover:text-text-primary transition-colors line-clamp-2">
                    {service.shortDescription}
                  </p>

                  <button
                    type="button"
                    className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em] group/link"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(service);
                    }}
                  >
                    Learn More
                    <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
                  </button>
                </div>

                <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-all" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && <Modal service={selectedService} onClose={() => setSelectedService(null)} />}
      </AnimatePresence>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Globe, Cpu, Bot, Smartphone, ArrowRight, X, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: <Globe className="text-primary" size={32} />,
    title: "Website",
    description: "Custom websites & portals built for high performance, conversion, and global accessibility.",
    label: "WEB",
    details: "Our web development process focuses on creating scalable, secure, and blazing-fast user interfaces. We use the latest technologies like Next.js, React, and high-end CSS architectures to ensure your brand stands out in the digital landscape.",
    features: ["Responsive Engineering", "SEO Best Practices", "Performance Optimization", "Seamless UX Flow", "CMS Integration"],
    color: "#00FFB2"
  },
  {
    icon: <Cpu className="text-primary" size={32} />,
    title: "Software Developement",
    description: "Enterprise SaaS platforms and robust business tools engineered for massive scale and reliability.",
    label: "SAAS",
    details: "We build enterprise-grade SaaS platforms and ERP systems designed to handle thousands of concurrent users. Our focus is on database integrity, secure authentication, and cloud scalability.",
    features: ["Secure Authentication", "Database Architecture", "SaaS Dashboarding", "Cloud Infrastucture", "API First Design"],
    color: "#7B5EA7"
  },
  {
    icon: <Bot className="text-primary" size={32} />,
    title: "Ai solution",
    description: "Smart automation, NLP tools, and AI integrations that save time and optimize decision-making.",
    label: "AI",
    details: "Cyverix Solutions leverages cutting-edge NLP and computer vision models to automate manual workflows. We integrate OpenAI, Anthropic, and custom LLM solutions directly into your business logic.",
    features: ["LLM Integration", "Worklow Automation", "Custom AI Training", "Data Scraping & Analysis", "Predictive Analytics"],
    color: "#00FFB2"
  },
  {
    icon: <Smartphone className="text-primary" size={32} />,
    title: "Mobile App",
    description: "Native and cross-platform apps for iOS & Android with buttery-smooth user experiences.",
    label: "APPS",
    details: "We deliver high-fidelity mobile applications using React Native and Flutter. Our apps bridge the gap between performance and reach, ensuring a consistent look across all devices.",
    features: ["iOS & Android Native", "Offline Functionality", "Push Notifications", "App Store Compliance", "Real-time Syncing"],
    color: "#7B5EA7"
  },
];

const Modal = ({ service, onClose }: { service: any; onClose: () => void }) => {
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
        className="w-full max-w-2xl bg-surface border border-border p-8 md:p-12 rounded-[3rem] relative shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-text-secondary hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            {service.icon}
          </div>
          <div>
            <span className="text-[10px] font-mono text-primary uppercase tracking-[0.3em]">{service.label}</span>
            <h3 className="text-3xl font-syne font-bold">{service.title}</h3>
          </div>
        </div>

        <p className="text-text-secondary text-lg leading-relaxed mb-8">
          {service.details}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.features.map((feature: string) => (
            <div key={feature} className="flex items-center gap-3 p-4 rounded-2xl bg-background/50 border border-border">
              <CheckCircle2 size={18} className="text-primary" />
              <span className="text-sm font-bold text-text-primary">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link 
            href="#contact"
            onClick={onClose}
            className="block w-full py-4 bg-cta rounded-2xl font-bold text-background glow-on-hover transition-all text-center"
          >
            Start a Project with Us
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <section id="services" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-mono text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-syne font-bold mt-6 mb-4 tracking-tight"
          >
            What We <span className="text-gradient">Build</span>
          </motion.h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Cyverix Solutions specializes in high-scale engineering, transforming complex business logic into efficient digital ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-10 bg-surface border border-border rounded-[2.5rem] hover:border-primary/40 transition-all duration-500 overflow-hidden cursor-pointer shadow-xl hover:shadow-primary/5"
              onClick={() => setSelectedService(service)}
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-15 transition-opacity pointer-events-none">
                {React.cloneElement(service.icon as React.ReactElement<{ size: number }>, { size: 140 })}
              </div>
              
              <div className="relative z-10">
                <div className="mb-8 w-14 h-14 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors duration-500">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-syne font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed mb-10 group-hover:text-text-primary transition-colors line-clamp-2">
                  {service.description}
                </p>
                
                <button 
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

              {/* Hover Glow */}
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <Modal 
            service={selectedService} 
            onClose={() => setSelectedService(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

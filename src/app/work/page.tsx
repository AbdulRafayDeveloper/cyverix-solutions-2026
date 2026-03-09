"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight, X, Globe, Cpu, Bot, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const allProjects = [
  {
    title: "EcoFlow Dashboard",
    description: "An AI-powered renewable energy monitoring platform for smart cities. Real-time data visualization with predictive analytics.",
    details: "EcoFlow is a comprehensive energy management system that leverages machine learning to predict energy consumption patterns. It provides city administrators with a real-time dashboard to monitor solar grid efficiency, battery storage levels, and distribution bottlenecks.",
    features: ["Predictive Load Balancing", "Real-time IoT Integration", "Custom Webhooks", "Automated Reporting"],
    tags: ["Web App", "AI", "Cloud"],
    image: "/project1.png",
    category: "AI & Data"
  },
  {
    title: "SwiftPay Fintech",
    description: "Next-gen cross-border payments with blockchain settlement layer. High-security infrastructure for global finance.",
    details: "SwiftPay revolutionizes international transfers by using a distributed ledger to settle transactions in seconds rather than days. It includes features for multi-currency wallets, automatic tax compliance, and fraud detection powered by behavioral AI.",
    features: ["Blockchain Ledger", "Multi-currency Support", "AI Fraud Detection", "Biometric Security"],
    tags: ["Fintech", "Blockchain", "Next.js"],
    image: "/project2.png",
    category: "Fintech"
  },
  {
    title: "NeuroPath AI",
    description: "Medical diagnostic assistant using deep learning for early detection of neurological disorders with 98% accuracy.",
    details: "NeuroPath uses advanced computer vision to analyze MRI scans and identify subtle biomarkers of neurological decay. This tool assists radiographers in early screening, significantly improving patient outcomes through earlier intervention.",
    features: ["Computer Vision", "HIPAA Compliant", "DICOM Support", "Cloud Diagnostics"],
    tags: ["Healthcare", "AI", "Medical"],
    image: "/project3.png",
    category: "HealthTech"
  },
  {
    title: "Nova Retail Engine",
    description: "Omnichannel commerce platform for global retail brands with unified inventory and AI demand forecasting.",
    details: "Nova provides a unified backbone for retail operations, syncing online storefronts with physical POS systems. It includes an AI engine that forecasts seasonal demand to optimize stock levels and reduce waste.",
    features: ["Unified API", "Demand Forecasting", "POS Integration", "Customer Analytics"],
    tags: ["E-commerce", "SaaS", "Retail"],
    image: "/project1.png",
    category: "RetailTech"
  },
  {
    title: "CyberShield Ops",
    description: "Automated threat detection and response platform for enterprise-grade security monitoring.",
    details: "CyberShield acts as a 24/7 security operations center, automatically flagging and mitigating suspicious network activity. It uses anomaly detection to stop zero-day attacks before they reach critical infrastructure.",
    features: ["Network Analysis", "Incident Response", "Zero-trust Security", "Automated Patching"],
    tags: ["Security", "Automation", "DevOps"],
    image: "/project2.png",
    category: "CyberSecurity"
  },
  {
    title: "SkyLogistics AI",
    description: "Intelligent route optimization for global shipping fleets reducing fuel consumption by 30%.",
    details: "SkyLogistics calculates the most efficient paths for cargo ships and planes, accounting for weather patterns, fuel prices, and port congestion. It helps logistics companies significantly lower their carbon footprint and operational costs.",
    features: ["Route Optimization", "Live Tracking", "Fuel Management", "Carbon Tracking"],
    tags: ["Logistics", "AI", "SaaS"],
    image: "/project3.png",
    category: "SupplyChain"
  },
];

const ProjectModal = ({ project, onClose }: { project: any; onClose: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="w-full max-w-4xl bg-surface border border-border rounded-3xl md:rounded-[3rem] relative shadow-2xl overflow-y-auto max-h-[95vh]"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 rounded-full bg-background/50 border border-border flex items-center justify-center text-text-secondary hover:text-white transition-colors z-50"
        >
          <X size={20} />
        </button>

        <div className="relative aspect-video w-full rounded-t-3xl overflow-hidden">
           <Image src={project.image} alt={project.title} fill className="object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
           <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12">
             <span className="px-4 py-1.5 rounded-full glass text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">
               {project.category}
             </span>
             <h2 className="text-3xl md:text-5xl font-syne font-bold">{project.title}</h2>
           </div>
        </div>

        <div className="p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h3 className="text-lg font-bold text-text-primary mb-4">Project Overview</h3>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8">
                {project.details}
              </p>
              
              <h3 className="text-lg font-bold text-text-primary mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {project.features.map((feature: string) => (
                  <div key={feature} className="flex items-center gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl bg-background/50 border border-border">
                    <CheckCircle2 size={18} className="text-primary shrink-0" />
                    <span className="text-xs md:text-sm font-bold text-text-primary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="p-8 rounded-3xl bg-background/50 border border-border sticky top-0">
                <h3 className="text-lg font-bold text-text-primary mb-6">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag: string) => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-white/5 text-[10px] font-mono text-text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-full py-4 bg-cta rounded-2xl font-bold text-background glow-on-hover transition-all text-center flex items-center justify-center gap-2">
                  Visit Live Site <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function WorkPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <main className="relative min-h-screen bg-background pt-32 pb-24 px-6 md:px-12">
      <Navbar />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-syne font-bold tracking-tighter mb-8"
          >
            Our Engineering <br /><span className="text-gradient">Impact</span>
          </motion.h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
            A comprehensive look at the high-scale applications and intelligent systems 
            we&apos;ve built for global partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-surface border border-border rounded-[2.5rem] p-4 transition-all hover:border-primary/30 shadow-xl overflow-hidden"
            >
              <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-6">
                 <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
              </div>
              <div className="px-4 pb-4">
                <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-syne font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-2">{project.description}</p>
                <div className="flex items-center justify-between">
                   <div className="flex gap-2">
                     {project.tags.slice(0, 2).map(tag => (
                       <span key={tag} className="text-[9px] font-mono py-1 px-2 rounded border border-white/5">{tag}</span>
                     ))}
                   </div>
                   <ArrowRight size={20} className="text-primary -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight, X, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const allProjects = [
  {
    title: "EcoFlow Dashboard",
    description:
      "Renewable energy monitoring for cities. Live charts and simple forecasts so you can see how the grid is doing.",
    details:
      "EcoFlow pulls together solar output, battery levels, and load data in one place. You get a clear view of what is happening now, plus light forecasting so teams can plan shifts before problems show up. Built for operators who need numbers they can trust, not another pretty chart with no context.",
    features: ["Load planning helpers", "IoT-friendly feeds", "Webhooks for your tools", "Scheduled reports"],
    tags: ["Web App", "AI", "Cloud"],
    image: "/project1.png",
    category: "AI and Data",
  },
  {
    title: "SwiftPay Fintech",
    description:
      "Cross-border payments with faster settlement. Wallets, compliance hooks, and fraud signals in one stack.",
    details:
      "SwiftPay is built for teams that move money across borders and cannot wait days for clearance. You get multi-currency wallets, rules-friendly reporting, and alerts when activity looks off. Security is treated as part of the product, not a footnote.",
    features: ["Shared ledger core", "Multi-currency wallets", "Risk and fraud signals", "Strong customer verification"],
    tags: ["Fintech", "Blockchain", "Next.js"],
    image: "/project2.png",
    category: "Fintech",
  },
  {
    title: "NeuroPath AI",
    description:
      "Imaging support for neurology teams. Highlights patterns in scans so clinicians can review cases faster.",
    details:
      "NeuroPath helps radiology teams triage MRI work. It flags areas that deserve a closer look so specialists spend time where it matters. It is a decision support tool, not a replacement for clinical judgment, and it is set up with healthcare privacy in mind.",
    features: ["Image analysis", "Built for HIPAA-style controls", "DICOM-friendly workflows", "Cloud-ready deployment"],
    tags: ["Healthcare", "AI", "Medical"],
    image: "/project3.png",
    category: "HealthTech",
  },
  {
    title: "Nova Retail Engine",
    description:
      "Retail ops in one system: web store, stores, and stock. Demand hints so you order closer to what you will sell.",
    details:
      "Nova ties your online and in-store sales to one inventory picture. You see what is selling, what is sitting, and where to move stock. Forecasting is there to cut waste and stockouts, not to promise perfect numbers every season.",
    features: ["Single product API", "Demand hints", "POS links", "Customer and sales views"],
    tags: ["E-commerce", "SaaS", "Retail"],
    image: "/project1.png",
    category: "RetailTech",
  },
  {
    title: "CyberShield Ops",
    description:
      "Security monitoring that surfaces odd traffic and helps your team respond without living inside ten different tools.",
    details:
      "CyberShield watches network and system signals and groups what looks suspicious. Your team gets enough context to investigate or contain issues quickly. The goal is fewer blind spots and calmer incident days, not buzzwords on a slide.",
    features: ["Traffic and asset views", "Playbooks for incidents", "Tight access policies", "Patch tracking"],
    tags: ["Security", "Automation", "DevOps"],
    image: "/project2.png",
    category: "CyberSecurity",
  },
  {
    title: "SkyLogistics AI",
    description:
      "Route planning for ships and air cargo that weighs weather, fuel, and delays so you can cut waste where it hurts.",
    details:
      "SkyLogistics suggests routes and schedules based on live conditions and cost inputs. You see tradeoffs clearly instead of guessing. Many teams see lower fuel use and fewer idle hours, though your results depend on your fleet and lanes.",
    features: ["Route suggestions", "Live shipment status", "Fuel and cost inputs", "Emissions reporting"],
    tags: ["Logistics", "AI", "SaaS"],
    image: "/project3.png",
    category: "SupplyChain",
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
              <h3 className="text-lg font-bold text-text-primary mb-4">Overview</h3>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8">
                {project.details}
              </p>
              
              <h3 className="text-lg font-bold text-text-primary mb-4">What it includes</h3>
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
            Sample projects that show how we build web apps, data-heavy products, and integrations for teams like yours.
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

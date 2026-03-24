"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const caseStudies = [
    {
        id: 1,
        title: "EcoConnect Dashboard",
        category: "AI & SaaS",
        image: "/project1.png",
        description: "A comprehensive energy monitoring dashboard for global eco-conscious enterprises.",
        year: "2023",
        role: "Engineering & UI/UX"
    },
    {
        id: 2,
        title: "Nova Fintech Suite",
        category: "Mobile & Security",
        image: "/project2.png",
        description: "Military-grade encryption fintech application designed for seamless digital payments.",
        year: "2024",
        role: "Architecture & Security"
    },
    {
        id: 3,
        title: "Aura Health Platform",
        category: "Healthcare & AI",
        image: "/project3.png",
        description: "Predictive health platform using custom-trained AI models for personalized diagnostics.",
        year: "2023",
        role: "AI Model Training"
    }
];

export default function CaseStudiesPage() {
    return (
        <main className="bg-background min-h-screen text-text-primary">
            <Navbar />

            <section className="pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <Link href="/" className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest mb-12 hover:opacity-70 transition-all">
                        <ArrowLeft size={16} /> Back to Hub
                    </Link>

                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
                        <div className="max-w-2xl">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-primary font-mono text-xs uppercase tracking-[0.4em] mb-4 block"
                            >
                                Case Studies
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-8xl font-syne font-extrabold tracking-tighter leading-[0.9]"
                            >
                                Proven <br /> <span className="text-gradient">Architectures.</span>
                            </motion.h1>
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-text-secondary text-lg max-w-sm mb-4 leading-relaxed"
                        >
                            Excellence defined through precision engineering. Each study represents a standard in scalability and security.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 gap-12 md:gap-32">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="group relative"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-center">
                                    <div className="md:col-span-7 overflow-hidden rounded-[2.5rem] border border-white/5 bg-surface aspect-[16/10] relative">
                                        <Image
                                            src={study.image}
                                            alt={study.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0 opacity-80 hover:opacity-100"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                                    </div>

                                    <div className="md:col-span-5 flex flex-col gap-6">
                                        <div className="flex items-center gap-4 font-mono text-[10px] text-text-secondary uppercase tracking-[0.2em]">
                                            <span>{study.category}</span>
                                            <span className="w-8 h-[1px] bg-border" />
                                            <span>{study.year}</span>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-syne font-bold group-hover:text-primary transition-colors">{study.title}</h2>
                                        <p className="text-text-secondary text-lg leading-relaxed">{study.description}</p>

                                        <div className="flex items-center gap-10 mt-4">
                                            <div>
                                                <p className="text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-1">Our Role</p>
                                                <p className="font-bold text-sm">{study.role}</p>
                                            </div>
                                            <Link
                                                href="#"
                                                className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all"
                                            >
                                                <ArrowUpRight size={24} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-40 text-center py-20 glass rounded-[3rem] border-dashed border-border/50">
                        <h3 className="text-2xl font-bold mb-4 font-syne">Have a complex challenge?</h3>
                        <p className="text-text-secondary mb-10 max-w-sm mx-auto">We specialize in solving technical hurdles that others shy away from.</p>
                        <Link
                            href="/#contact"
                            className="px-12 py-5 bg-primary text-background font-bold rounded-2xl hover:scale-105 transition-all"
                        >
                            Start Engineering With Us
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

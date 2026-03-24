"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="bg-background min-h-screen text-text-primary">
            <Navbar />
            <div className="pt-20">
                <About />

                <section className="py-24 px-6 relative bg-background">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h4 className="text-xl font-bold font-syne mb-4 text-primary italic">Our Core Principle</h4>
                                <p className="text-text-secondary leading-relaxed">
                                    We believe that software should be invisible to the user but indispensable to the business. At Cyverix, our engineering is focused on the unseen robustness that drives global scalability.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold font-syne mb-4 text-secondary italic">Pakistan Global Hub</h4>
                                <p className="text-text-secondary leading-relaxed">
                                    Strategically located in Faisalabad, one of Pakistan&apos;s fastest growing tech hubs, we bridge the gap between world-class engineering talent and global market demands.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}

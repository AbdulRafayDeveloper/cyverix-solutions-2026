"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Careers } from "@/components/sections/Careers";

export default function CareersPage() {
    return (
        <main className="bg-background min-h-screen text-text-primary">
            <Navbar />
            <div className="pt-20">
                <Careers />

                <section className="py-24 px-6 bg-alt-section">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-4xl font-syne font-extrabold mb-8 italic">Life at <span className="text-primary italic">Cyverix</span></h2>
                        <p className="text-text-secondary max-w-2xl mx-auto mb-12">
                            Work on the most complex problems in AI and Software Engineering. We offer competitive salaries, remote flexibility, and the chance to lead global projects from Faisalabad&apos;s rising tech scene.
                        </p>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Loader2, Linkedin, Github, Instagram, Facebook } from "lucide-react";

export const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "Website",
    budget: "< $1k",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          service: "Website",
          budget: "< $1k",
          message: "",
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-syne font-bold mb-6">Let&apos;s Build Something <span className="text-gradient">Together</span></h2>
          <p className="text-text-secondary">Ready to start your next project? We&apos;re just one message away.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 md:p-12 glass rounded-[2.5rem]"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-text-secondary px-1">Full Name</label>
                  <input
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your name"
                    className="bg-surface/50 border border-border p-4 rounded-xl focus:outline-none focus:border-primary transition-colors text-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-text-secondary px-1">Email Address</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="bg-surface/50 border border-border p-4 rounded-xl focus:outline-none focus:border-primary transition-colors text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-text-secondary px-1">Phone (Optional)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+92 3XX XXXXXXX"
                    className="bg-surface/50 border border-border p-4 rounded-xl focus:outline-none focus:border-primary transition-colors text-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-text-secondary px-1">Service Interested In</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="bg-surface/50 border border-border p-4 rounded-xl focus:outline-none focus:border-primary transition-colors text-white appearance-none"
                  >
                    <option>Website</option>
                    <option>Web App</option>
                    <option>AI Solution</option>
                    <option>Mobile App</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono uppercase tracking-widest text-text-secondary px-1">Project Budget</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="bg-surface/50 border border-border p-4 rounded-xl focus:outline-none focus:border-primary transition-colors text-white appearance-none"
                >
                  <option>&lt; $1k</option>
                  <option>$1k–$5k</option>
                  <option>$5k–$20k</option>
                  <option>$20k+</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono uppercase tracking-widest text-text-secondary px-1">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  className="bg-surface/50 border border-border p-4 rounded-xl focus:outline-none focus:border-primary transition-colors text-white resize-none"
                />
              </div>

              <button
                disabled={status === "loading"}
                type="submit"
                className="w-full py-4 mt-4 bg-cta rounded-xl font-bold text-background flex items-center justify-center gap-3 glow-on-hover transition-all disabled:opacity-50"
              >
                {status === "loading" ? (
                  <Loader2 className="animate-spin" size={24} />
                ) : status === "success" ? (
                  <CheckCircle2 size={24} />
                ) : (
                  <Send size={24} />
                )}
                {status === "loading" ? "Sending..." : status === "success" ? "Sent Successfully!" : "Send Message"}
              </button>

              {status === "error" && (
                <p className="text-center text-red-400 text-sm font-mono mt-2">Failed to send message. Please try again or email us directly.</p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-8 justify-center"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="p-6 glass rounded-2xl flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase text-text-secondary">Email</h4>
                  <p className="font-bold">hello@cyverix.com</p>
                </div>
              </div>
              
              <div className="p-6 glass rounded-2xl flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase text-text-secondary">WhatsApp</h4>
                  <p className="font-bold">+92 300 1234567</p>
                </div>
              </div>

              <div className="p-6 glass rounded-2xl flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase text-text-secondary">Location</h4>
                  <p className="font-bold">Faisalabad, PK</p>
                </div>
              </div>

              <div className="p-6 glass rounded-2xl flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-border flex items-center justify-center text-text-secondary">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase text-text-secondary">Response Time</h4>
                  <p className="font-bold">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a 
                href="https://www.linkedin.com/company/cyverix-solutions" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-xl border border-border flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary transition-all"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

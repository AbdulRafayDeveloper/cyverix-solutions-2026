"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Loader2, Linkedin, Facebook, Instagram, AlertCircle, Sparkles } from "lucide-react";

const Toast = ({ message, type, onClose }: { message: string, type: "success" | "error", onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 20, scale: 0.9 }}
    className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-[1000002] px-8 py-4 rounded-2xl glass border flex items-center gap-4 shadow-2xl min-w-[320px] ${type === "success" ? "border-primary/40 bg-primary/5" : "border-red-500/40 bg-red-500/5"
      }`}
  >
    {type === "success" ? <CheckCircle2 className="text-primary" /> : <AlertCircle className="text-red-500" />}
    <p className="text-sm font-bold tracking-tight">{message}</p>
    <button onClick={onClose} className="ml-auto opacity-40 hover:opacity-100 transition-opacity">
      <Sparkles size={16} />
    </button>
  </motion.div>
);

export const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    service: "Website",
    message: "",
  });

  const [showToast, setShowToast] = useState(false);

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
        setShowToast(true);
        setFormData({
          fullName: "",
          email: "",
          service: "Website",
          message: "",
        });
        setTimeout(() => {
          setStatus("idle");
          setShowToast(false);
        }, 5000);
      } else {
        setStatus("error");
        setShowToast(true);
      }
    } catch (err) {
      setStatus("error");
      setShowToast(true);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 min-h-screen snap-start w-full flex flex-col justify-center relative overflow-hidden bg-alt-section">
      {/* Background Glows */}
      <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column: Info */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-primary font-mono text-xs uppercase tracking-[0.5em] mb-6 block"
            >
              Contact Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-syne font-bold mb-8 tracking-tighter leading-tight"
            >
              Let&apos;s build the <br /> <span className="text-gradient">next big thing.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg max-w-md mb-12 leading-relaxed"
            >
              Whether you have a fully formed idea or just a spark of inspiration,
              we&apos;re here to engineer it into reality.
            </motion.p>

            <div className="flex flex-col gap-6">
              {[
                { icon: <Mail size={24} />, label: "Email", value: "hello@cyverix.com", color: "text-primary" },
                { icon: <Phone size={24} />, label: "WhatsApp", value: "+92 300 1234567", color: "text-secondary" },
                { icon: <MapPin size={24} />, label: "Location", value: "Faisalabad, Pakistan", color: "text-primary" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 p-6 glass rounded-3xl hover:bg-white/5 transition-colors group"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-surface border border-border flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-secondary mb-1">{item.label}</p>
                    <p className="font-bold text-lg">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 mt-12">
              <a href="https://linkedin.com" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:text-primary transition-all"><Linkedin size={20} /></a>
              <a href="https://facebook.com" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:text-primary transition-all"><Facebook size={20} /></a>
              <a href="https://instagram.com" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:text-primary transition-all"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-6 md:p-14 glass rounded-3xl md:rounded-[3rem] shadow-2xl relative"
          >
            {/* Form Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-8">
              <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Full Name</label>
                  <input
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="E.g. Elon Musk"
                    className="bg-transparent border-b border-border p-3 focus:outline-none focus:border-primary transition-all text-white placeholder:text-text-secondary/30"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Email Address</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="bg-transparent border-b border-border p-3 focus:outline-none focus:border-primary transition-all text-white placeholder:text-text-secondary/30"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Service</label>
                <div className="flex flex-wrap gap-2">
                  {["Website", "Ai solution", "Mobile App", "Software Developement"].map(s => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setFormData({ ...formData, service: s })}
                      className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${formData.service === s
                        ? "bg-primary text-background border-primary shadow-[0_0_20px_rgba(0,255,178,0.3)]"
                        : "border-border text-text-secondary hover:border-text-secondary"
                        }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Tell us about your project</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="I have a vision for..."
                  className="bg-background/50 border-b border-border p-3 focus:outline-none focus:border-primary transition-all text-white resize-none placeholder:text-text-secondary/30"
                />
              </div>

              <button
                disabled={status === "loading"}
                type="submit"
                className="group relative w-full py-5 bg-cta rounded-2xl font-bold text-background flex items-center justify-center gap-3 overflow-hidden shadow-2xl transition-all hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
                {status === "loading" ? (
                  <Loader2 className="animate-spin" size={24} />
                ) : status === "success" ? (
                  <CheckCircle2 size={24} />
                ) : (
                  <Send size={24} />
                )}
                <span className="relative z-10">
                  {status === "loading" ? "SENDING..." : status === "success" ? "MESSAGE SENT" : "IGNITE PROJECT"}
                </span>
              </button>

              {status === "error" && (
                <p className="text-center text-red-400 text-xs font-mono">SYSTEM_ERROR: Please try again later.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {showToast && (
          <Toast
            message={status === "success" ? "Transmission Successful. Our engineers will follow up." : "System Error. Protocol Breach Detected."}
            type={status === "success" ? "success" : "error"}
            onClose={() => setShowToast(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

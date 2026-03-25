"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { stagger, viewTransition, viewViewport } from "@/lib/motion";
import { DEFAULT_SERVICE, SERVICE_OPTIONS, type ServiceOption } from "@/lib/service-options";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, Linkedin, Facebook, Instagram, AlertCircle, Sparkles } from "lucide-react";

const Toast = ({
  message,
  type,
  onClose,
}: {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.96 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 20, scale: 0.96 }}
    transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
    className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-[1000002] px-8 py-4 rounded-2xl glass border flex items-center gap-4 shadow-2xl min-w-[320px] ${
      type === "success" ? "border-primary/40 bg-primary/5" : "border-red-500/40 bg-red-500/5"
    }`}
  >
    {type === "success" ? <CheckCircle2 className="text-primary" /> : <AlertCircle className="text-red-500" />}
    <p className="text-sm font-bold tracking-tight">{message}</p>
    <button
      type="button"
      onClick={onClose}
      className="ml-auto opacity-40 hover:opacity-100 transition-opacity duration-200"
      title="Dismiss"
    >
      <Sparkles size={16} />
    </button>
  </motion.div>
);

type FieldErrors = Partial<Record<"fullName" | "email" | "message", string>>;

function validateField(name: keyof FieldErrors, value: string): string | undefined {
  const v = value.trim();
  if (name === "fullName") {
    if (v.length < 2) return "Please enter your full name (at least 2 characters).";
  }
  if (name === "email") {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Enter a valid email address.";
  }
  if (name === "message") {
    if (v.length < 12) return "Add a few more words. At least 12 characters helps us reply with something useful.";
  }
  return undefined;
}

export const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    service: ServiceOption;
    message: string;
  }>({
    fullName: "",
    email: "",
    service: DEFAULT_SERVICE,
    message: "",
  });

  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FieldErrors, boolean>>>({});
  const [showToast, setShowToast] = useState(false);
  const [formShake, setFormShake] = useState(false);

  const runShake = useCallback(() => {
    setFormShake(true);
    window.setTimeout(() => setFormShake(false), 400);
  }, []);

  const validateAll = useCallback(() => {
    const next: FieldErrors = {
      fullName: validateField("fullName", formData.fullName),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };
    setErrors(next);
    return !next.fullName && !next.email && !next.message;
  }, [formData.fullName, formData.email, formData.message]);

  const handleBlur = (field: keyof FieldErrors) => {
    setTouched((t) => ({ ...t, [field]: true }));
    const msg = validateField(field, formData[field]);
    setErrors((e) => ({ ...e, [field]: msg }));
  };

  const handleChange = (field: keyof FieldErrors, value: string) => {
    setFormData((f) => ({ ...f, [field]: value }));
    if (touched[field]) {
      setErrors((e) => ({ ...e, [field]: validateField(field, value) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ fullName: true, email: true, message: true });
    if (!validateAll()) {
      runShake();
      return;
    }

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
          service: DEFAULT_SERVICE,
          message: "",
        });
        setErrors({});
        setTouched({});
        window.setTimeout(() => {
          setStatus("idle");
          setShowToast(false);
        }, 5000);
      } else {
        setStatus("error");
        setShowToast(true);
        runShake();
      }
    } catch {
      setStatus("error");
      setShowToast(true);
      runShake();
    } finally {
      if (status !== "success") {
        /* loading cleared below */
      }
    }
  };

  return (
    <section id="contact" className="py-32 md:py-36 px-6 min-h-screen snap-start w-full flex flex-col justify-center relative overflow-hidden bg-alt-section">
      <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        <hr className="section-flow-divider mb-16 md:mb-20 opacity-80" aria-hidden />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewViewport}
              transition={viewTransition}
              className="text-primary font-mono text-xs uppercase tracking-[0.5em] mb-6 block"
            >
              Contact Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewViewport}
              transition={{ ...viewTransition, delay: 0.04 }}
              className="text-4xl md:text-7xl font-syne font-bold mb-8 tracking-tighter leading-tight"
            >
              Tell us what <br /> <span className="text-gradient">you want to build.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewViewport}
              transition={{ ...viewTransition, delay: 0.08 }}
              className="text-base md:text-lg max-w-md mb-12 leading-relaxed text-text-secondary/95"
            >
              Whether you have a full brief or a rough idea, we can help you turn it into working software.
            </motion.p>

            <div className="flex flex-col gap-5">
              {[
                { icon: <Mail size={24} />, label: "Email", value: "hello@cyverix.com", color: "text-primary" },
                { icon: <Phone size={24} />, label: "WhatsApp", value: "+92 300 1234567", color: "text-secondary" },
                { icon: <MapPin size={24} />, label: "Location", value: "Faisalabad, Pakistan", color: "text-primary" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewViewport}
                  transition={stagger(i, 0.04)}
                  className="card-polish flex items-center gap-6 p-6 glass rounded-3xl hover:bg-white/5 transition-colors duration-200 group"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-surface border border-border flex items-center justify-center ${item.color} icon-hover-nudge`}
                    title={`${item.label}: ${item.value}`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-secondary mb-1">{item.label}</p>
                    <p className="font-bold text-lg">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-3 mt-12">
              <a
                href="https://linkedin.com"
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-text-secondary hover:text-primary transition-colors duration-200 border border-transparent hover:border-primary/30 icon-hover-nudge"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://facebook.com"
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-text-secondary hover:text-primary transition-colors duration-200 border border-transparent hover:border-primary/30 icon-hover-nudge"
                title="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-text-secondary hover:text-primary transition-colors duration-200 border border-transparent hover:border-primary/30 icon-hover-nudge"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewViewport}
            transition={viewTransition}
            className="card-polish p-6 md:p-14 glass rounded-3xl md:rounded-[3rem] shadow-2xl relative border border-border/80"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />

            <form
              onSubmit={handleSubmit}
              noValidate
              className={`flex flex-col gap-7 md:gap-8 ${formShake ? "animate-shake-subtle" : ""}`}
            >
              <div className="flex flex-col md:grid md:grid-cols-2 gap-7 md:gap-8">
                <div className={errors.fullName && touched.fullName ? "float-field float-field--error" : "float-field"}>
                  <input
                    id="contact-fullname"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder=" "
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    onBlur={() => handleBlur("fullName")}
                    className="border-b border-border"
                  />
                  <label htmlFor="contact-fullname">Full name</label>
                  {errors.fullName && touched.fullName ? <p className="field-hint">{errors.fullName}</p> : null}
                </div>
                <div className={errors.email && touched.email ? "float-field float-field--error" : "float-field"}>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder=" "
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    className="border-b border-border"
                  />
                  <label htmlFor="contact-email">Email address</label>
                  {errors.email && touched.email ? <p className="field-hint">{errors.email}</p> : null}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="contact-service" className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">
                  Service
                </label>
                <p className="text-[11px] text-text-secondary/70 -mt-1">
                  Pick what fits. Same list as on Services: Web, SaaS, AI, Automation, DevOps, UI and UX, Mobile.
                </p>
                <select
                  id="contact-service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value as ServiceOption })}
                  className="w-full rounded-xl border border-border bg-background/80 px-4 py-3.5 text-sm font-medium text-text-primary transition-[border-color,box-shadow] duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/35 cursor-pointer"
                >
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <div className="flex flex-wrap gap-2" role="group" aria-label="Quick select service">
                  {SERVICE_OPTIONS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setFormData({ ...formData, service: s })}
                      className={`px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold border transition-all duration-200 delay-[40ms] ${
                        formData.service === s
                          ? "bg-primary text-background border-primary shadow-[0_0_16px_rgba(0,255,178,0.25)]"
                          : "border-border text-text-secondary hover:border-primary/40 hover:text-text-primary"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className={errors.message && touched.message ? "float-field float-field--error" : "float-field"}>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder=" "
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                />
                <label htmlFor="contact-message">Tell us about your project</label>
                {errors.message && touched.message ? <p className="field-hint">{errors.message}</p> : null}
              </div>

              <motion.button
                disabled={status === "loading"}
                type="submit"
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.15 }}
                className="btn-polish btn-ripple group relative w-full py-5 bg-cta rounded-2xl font-bold text-background flex items-center justify-center gap-3 overflow-hidden shadow-2xl transition-shadow duration-200"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
                {status === "loading" ? (
                  <Loader2 className="animate-spin" size={24} aria-hidden />
                ) : status === "success" ? (
                  <motion.span key="ok" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 380, damping: 24 }}>
                    <CheckCircle2 size={24} />
                  </motion.span>
                ) : (
                  <Send size={24} aria-hidden />
                )}
                <span className="relative z-10">
                  {status === "loading" ? "SENDING..." : status === "success" ? "MESSAGE SENT" : "SEND MESSAGE"}
                </span>
              </motion.button>

              {status === "error" && !showToast ? (
                <p className="text-center text-red-400/95 text-xs font-mono">Could not send. Please try again in a moment.</p>
              ) : null}
            </form>
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {showToast && (
          <Toast
            message={
              status === "success"
                ? "We got your message. We will get back to you soon."
                : "Something went wrong. Please try again."
            }
            type={status === "success" ? "success" : "error"}
            onClose={() => setShowToast(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

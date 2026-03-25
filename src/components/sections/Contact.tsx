"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { viewTransition, viewViewport } from "@/lib/motion";
import { DEFAULT_SERVICE, SERVICE_OPTIONS, type ServiceOption } from "@/lib/service-options";
import { Phone, Radio, Send, CheckCircle2, Loader2, AlertCircle, Sparkles, Lock } from "lucide-react";
import { SITE_PHONE_DISPLAY } from "@/lib/site";

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
    <section id="contact" className="py-28 md:py-36 px-4 sm:px-6 min-h-screen snap-start w-full flex flex-col justify-center relative overflow-hidden bg-alt-section">
      <div className="absolute inset-0 contact-scanlines opacity-40 pointer-events-none" aria-hidden />
      <div className="absolute -top-24 -right-24 w-[min(100vw,600px)] h-[600px] bg-primary/6 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -left-24 w-[min(100vw,520px)] h-[520px] bg-secondary/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-[1]">
        <hr className="section-flow-divider mb-12 md:mb-16 opacity-80" aria-hidden />

        <div className="flex flex-col lg:flex-row lg:items-stretch gap-12 lg:gap-0">
          {/* Left: headline + channels — aligned to full column height */}
          <div className="flex flex-col lg:w-[min(100%,440px)] xl:w-[42%] lg:min-h-[560px] lg:justify-between gap-10 lg:gap-12 lg:pr-8 xl:pr-12 lg:border-r lg:border-white/[0.08]">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <motion.span
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewViewport}
                  transition={viewTransition}
                  className="text-primary font-mono text-[10px] sm:text-xs uppercase tracking-[0.35em]"
                >
                  Secure uplink
                </motion.span>
                <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/[0.06] px-2.5 py-0.5 text-[9px] font-mono uppercase tracking-widest text-primary/90">
                  <Lock size={10} aria-hidden />
                  TLS
                </span>
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewViewport}
                transition={{ ...viewTransition, delay: 0.04 }}
                className="text-4xl md:text-6xl xl:text-7xl font-syne font-bold mb-6 tracking-tighter leading-[1.05]"
              >
                Tell us what <br /> <span className="text-gradient">you want to build.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewViewport}
                transition={{ ...viewTransition, delay: 0.08 }}
                className="text-base md:text-lg max-w-md leading-relaxed text-text-secondary/95"
              >
                Whether you have a full brief or a rough idea, we can help you turn it into working software.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewViewport}
              transition={{ ...viewTransition, delay: 0.06 }}
              className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.07] via-transparent to-secondary/[0.06] p-5 md:p-6 backdrop-blur-sm"
            >
              <div className="absolute top-3 right-3 flex items-center gap-1 text-[9px] font-mono uppercase tracking-[0.2em] text-text-secondary/80">
                <span className="h-1 w-1 rounded-full bg-primary animate-pulse" aria-hidden />
                live
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary mb-5 flex items-center gap-2">
                <Radio size={14} className="shrink-0" aria-hidden />
                /channels
              </p>
              <div className="space-y-5 font-mono text-sm">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                  <span className="text-text-secondary/90 shrink-0 text-xs">mail ›</span>
                  <a
                    href="mailto:hello@cyverix.com"
                    className="font-sans font-bold text-base text-text-primary hover:text-primary transition-colors break-all"
                  >
                    hello@cyverix.com
                  </a>
                </div>
                <div className="h-px bg-gradient-to-r from-primary/25 via-border/60 to-transparent" aria-hidden />
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                  <span className="text-text-secondary/90 shrink-0 text-xs">wa ›</span>
                  <a
                    href={`https://wa.me/${SITE_PHONE_DISPLAY.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans font-bold text-base text-text-primary hover:text-secondary transition-colors inline-flex items-center gap-2"
                  >
                    <Phone size={16} className="text-secondary shrink-0 md:hidden" aria-hidden />
                    {SITE_PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: transmission frame + form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewViewport}
            transition={{ ...viewTransition, delay: 0.05 }}
            className="flex-1 flex flex-col min-h-0 lg:min-h-[560px] lg:pl-8 xl:pl-12"
          >
            <div className="contact-transmission-frame relative flex flex-col flex-1 min-h-0 rounded-2xl overflow-hidden backdrop-blur-md">
              <div className="contact-scanlines absolute inset-0 rounded-2xl opacity-[0.35] z-[1]" aria-hidden />
              <div className="absolute -top-20 right-0 w-56 h-56 bg-primary/15 blur-[70px] rounded-full pointer-events-none z-0" aria-hidden />
              <span className="contact-corner-tl" aria-hidden />
              <span className="contact-corner-tr" aria-hidden />
              <span className="contact-corner-bl" aria-hidden />
              <span className="contact-corner-br" aria-hidden />

              <div className="relative z-[2] flex flex-col flex-1 min-h-0 p-5 sm:p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-5">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">Compose uplink</p>
                    <p className="text-[10px] text-text-secondary/75 mt-1 font-mono">session · encrypted in transit</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-background/40 px-2.5 py-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/50 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-secondary">channel open</span>
                  </div>
                </div>

                <ol className="flex flex-wrap gap-2 mb-6 list-none p-0" aria-hidden>
                  {["Identity", "Service", "Brief"].map((label, i) => (
                    <li
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[9px] font-mono uppercase tracking-[0.15em] text-text-secondary"
                    >
                      <span className="text-primary/90 tabular-nums">0{i + 1}</span>
                      {label}
                    </li>
                  ))}
                </ol>

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className={`flex flex-col flex-1 min-h-0 gap-4 md:gap-5 ${formShake ? "animate-shake-subtle" : ""}`}
                >
                  <div className="flex flex-col md:grid md:grid-cols-2 gap-5 md:gap-6 shrink-0">
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

                  <div className="flex flex-col gap-2 shrink-0">
                    <label htmlFor="contact-service" className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">
                      Service
                    </label>
                    <p className="text-[10px] sm:text-[11px] text-text-secondary/70 leading-snug">
                      Same options as on the Services page. Use the dropdown or a quick tag.
                    </p>
                    <select
                      id="contact-service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value as ServiceOption })}
                      className="w-full rounded-xl border border-border bg-background/80 px-3 py-2.5 text-sm font-medium text-text-primary transition-[border-color,box-shadow] duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/35 cursor-pointer"
                    >
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-4 gap-1.5"
                      role="group"
                      aria-label="Quick select service"
                    >
                      {SERVICE_OPTIONS.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setFormData({ ...formData, service: s })}
                          className={`px-2 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold border leading-tight transition-all duration-200 delay-[40ms] ${
                            formData.service === s
                              ? "bg-primary text-background border-primary shadow-[0_0_12px_rgba(0,255,178,0.25)]"
                              : "border-border text-text-secondary hover:border-primary/40 hover:text-text-primary"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className={`flex-1 flex flex-col min-h-[200px] lg:min-h-[220px] ${errors.message && touched.message ? "float-field float-field--error" : "float-field"}`}>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder=" "
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      className="flex-1 min-h-[11rem] md:min-h-[12rem] resize-y"
                    />
                    <label htmlFor="contact-message">Tell us about your project</label>
                    {errors.message && touched.message ? <p className="field-hint">{errors.message}</p> : null}
                  </div>

                  <motion.button
                    disabled={status === "loading"}
                    type="submit"
                    whileTap={{ scale: 0.985 }}
                    transition={{ duration: 0.15 }}
                    className="btn-polish btn-ripple group relative w-full shrink-0 py-3.5 md:py-4 bg-cta rounded-xl md:rounded-2xl font-bold text-background flex items-center justify-center gap-3 overflow-hidden shadow-xl transition-shadow duration-200"
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
                      {status === "loading" ? "SENDING..." : status === "success" ? "MESSAGE SENT" : "TRANSMIT MESSAGE"}
                    </span>
                  </motion.button>

                  {status === "error" && !showToast ? (
                    <p className="text-center text-red-400/95 text-xs font-mono shrink-0">Could not send. Please try again in a moment.</p>
                  ) : null}
                </form>
              </div>
            </div>
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

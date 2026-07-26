"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Loader2, ChevronDown } from "lucide-react";
import { Silver } from "@/components/ui/silver";
import { Magnetic } from "@/components/animations";

const WEB3FORMS_ACCESS_KEY = "208ca774-b486-4459-869e-ea95422bb0a1";

const inquiryTypes = [
  "Full-time role",
  "Freelance / contract",
  "Collaboration",
  "Something else",
];

const socials = [
  { name: "Behance", url: "https://www.behance.net/kaviprasath" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/kaviprasath07/" },
  { name: "Medium", url: "https://medium.com/@kaviprasanth666" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: `New Portfolio Inquiry: ${formData.inquiry || "General"}`,
          message: formData.message,
          inquiry_type: formData.inquiry,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", inquiry: "", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const labelCls =
    "mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500";
  const fieldCls =
    "w-full border-b border-white/15 bg-transparent py-3 text-white placeholder:text-neutral-600 transition-colors focus:border-white focus:outline-none";

  return (
    <div className="bg-neutral-950 pt-px text-white">
      <div className="grain" />

      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(190,198,220,0.1),transparent_65%)] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-8">
          {/* ---------- left: intro ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
              ( Contact )
            </p>
            <h1 className="text-[clamp(2.6rem,6.5vw,5rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
              <Silver>Let&apos;s work</Silver>
              <br />
              <span className="text-shine">together.</span>
            </h1>

            <p className="mt-8 max-w-md text-lg leading-relaxed text-neutral-400">
              Open to product design roles and select freelance — especially
              regulated, high-stakes enterprise work. Tell me what you&apos;re
              building.
            </p>

            {/* availability */}
            <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-300 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Available 2026 · India · Remote-first
            </div>

            {/* direct email */}
            <div className="mt-12">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                Direct
              </p>
              <a
                href="mailto:kaviprasanth666@gmail.com"
                className="group inline-flex items-center gap-3 text-xl font-medium tracking-tight text-white md:text-2xl"
              >
                <span className="link-hover">kaviprasanth666@gmail.com</span>
                <ArrowUpRight className="h-5 w-5 text-neutral-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </a>
            </div>

            {/* socials */}
            <div className="mt-10">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                Elsewhere
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    {s.name}
                    <ArrowUpRight className="h-3.5 w-3.5 text-neutral-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ---------- right: form ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pt-2"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[420px] flex-col items-center justify-center text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: "spring", bounce: 0.4 }}
                  className="mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/5"
                >
                  <Check className="h-7 w-7 text-white" />
                </motion.div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  <Silver>Message sent.</Silver>
                </h3>
                <p className="mt-3 max-w-sm text-neutral-400">
                  Thanks for reaching out — I&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className={labelCls}>
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={fieldCls}
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelCls}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={fieldCls}
                    placeholder="jane@company.com"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="inquiry" className={labelCls}>
                    Inquiry
                  </label>
                  <select
                    id="inquiry"
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleChange}
                    required
                    className={`${fieldCls} cursor-pointer appearance-none pr-8 [&>option]:bg-neutral-900 ${
                      formData.inquiry ? "text-white" : "text-neutral-600"
                    }`}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {inquiryTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute bottom-3.5 right-0 h-4 w-4 text-neutral-500" />
                </div>

                <div>
                  <label htmlFor="message" className={labelCls}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`${fieldCls} resize-none`}
                    placeholder="Tell me about the role or project…"
                  />
                </div>

                {error && <p className="text-sm text-red-400">{error}</p>}

                <Magnetic strength={0.2}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-transform hover:scale-105 active:scale-95 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        Sending
                        <Loader2 className="h-4 w-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Send message
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>
                </Magnetic>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

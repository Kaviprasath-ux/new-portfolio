"use client";

import Link from "next/link";
import { ScrollReveal } from "./animations";
import { Silver } from "./ui/silver";

const nav = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  { name: "Behance", href: "https://www.behance.net/kaviprasath" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/kaviprasath07/" },
  { name: "Medium", href: "https://medium.com/@kaviprasanth666" },
  { name: "Email", href: "mailto:kaviprasanth666@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-neutral-950 text-white">
      {/* glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,255,255,0.06),transparent_65%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20 lg:px-8">
        {/* top row */}
        <div className="grid gap-12 md:grid-cols-12">
          {/* brand */}
          <ScrollReveal className="md:col-span-6">
            <div className="mb-5">
              <Silver className="text-xl font-semibold tracking-tight">
                Kavi Prasath
              </Silver>
            </div>
            <p className="max-w-sm leading-relaxed text-neutral-400">
              Product designer for enterprise SaaS — I design the regulated
              workflows most teams avoid, and ship them in code.
            </p>
            <div className="mt-6 inline-flex items-center gap-2.5 text-sm text-neutral-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for work
            </div>
          </ScrollReveal>

          {/* nav */}
          <ScrollReveal delay={0.1} className="md:col-span-3">
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
              Navigation
            </h3>
            <ul className="space-y-3">
              {nav.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-neutral-300 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-white transition-all duration-300 group-hover:w-4" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* connect */}
          <ScrollReveal delay={0.2} className="md:col-span-3">
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
              Connect
            </h3>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-neutral-300 transition-colors hover:text-white"
                  >
                    {s.name}
                    <svg
                      className="h-3 w-3 -translate-y-px opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>

      {/* giant wordmark */}
      <div className="relative overflow-hidden border-t border-white/10">
        <h2 className="select-none whitespace-nowrap px-6 py-8 text-center text-[13vw] font-bold leading-none tracking-tighter text-white/[0.06] lg:px-8">
          KAVI PRASATH
        </h2>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-neutral-500 sm:flex-row lg:px-8">
          <p>© {"2026"} Kavi Prasath. All rights reserved.</p>
          <p className="font-mono uppercase tracking-wider">Designed &amp; built in code</p>
        </div>
      </div>
    </footer>
  );
}

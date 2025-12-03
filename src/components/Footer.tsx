"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { navLinks, socialLinks } from "@/lib/data";
import { ScrollReveal, Magnetic } from "./animations";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: CTA */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <p className="text-sm font-medium text-background/40 uppercase tracking-wider mb-4">
                Ready to start?
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 leading-tight">
                Let&apos;s create
                <br />
                <span className="text-background/40">something great.</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Magnetic strength={0.15}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-background text-foreground rounded-full font-medium hover:scale-105 active:scale-95 transition-transform"
                  >
                    Start a Project
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </Magnetic>
                <a
                  href="mailto:kaviprasanth666@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-background/20 rounded-full font-medium hover:bg-background/10 transition-colors"
                >
                  kaviprasanth666@gmail.com
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Links */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            {/* Navigation */}
            <ScrollReveal delay={0.1}>
              <h3 className="text-sm font-medium text-background/40 uppercase tracking-wider mb-4">
                Navigation
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-background/60 transition-colors">
                    Home
                  </Link>
                </li>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-background/60 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Social */}
            <ScrollReveal delay={0.2}>
              <h3 className="text-sm font-medium text-background/40 uppercase tracking-wider mb-4">
                Connect
              </h3>
              <ul className="space-y-2">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-background/60 transition-colors group"
                    >
                      {social.name}
                      <svg
                        className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
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
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center">
                <span className="text-foreground font-semibold text-sm">K</span>
              </div>
              <p className="text-sm text-background/40">
                &copy; {currentYear} Kavi Prasath
              </p>
            </div>

            <p className="text-sm text-background/40">
              Designed & Built with care
            </p>
          </div>
        </div>
      </div>

      {/* Large Text Decoration */}
      <div className="border-t border-background/10 py-6 overflow-hidden">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-[6vw] font-semibold text-background/[0.03] mx-8">
              DESIGN WITH PURPOSE
            </span>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}

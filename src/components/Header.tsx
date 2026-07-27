"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";
import { Magnetic } from "./animations";
import { Silver } from "@/components/ui/silver";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  // dark header on the dark-themed pages
  const isHome =
    pathname === "/" ||
    pathname.startsWith("/work") ||
    pathname === "/about" ||
    pathname === "/contact" ||
    pathname === "/blogs";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrolledBg = isScrolled
    ? isHome
      ? "border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl py-3"
      : "glass py-3"
    : "bg-transparent py-5";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolledBg}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-50">
              <Magnetic strength={0.2}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Silver className="text-lg font-semibold tracking-tight md:text-xl">
                    Kavi Prasath
                  </Silver>
                </motion.div>
              </Magnetic>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const isExternal = "external" in link && link.external;
                const Tag: React.ElementType = isExternal ? "a" : Link;
                const extra = isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {};
                return (
                  <Tag
                    key={link.name}
                    href={link.href}
                    {...extra}
                    className="group relative px-4 py-2 text-sm font-medium"
                  >
                    <span
                      className={`relative z-10 transition-colors ${
                        isHome
                          ? isActive
                            ? "text-white"
                            : "text-white/55 group-hover:text-white"
                          : isActive
                          ? "text-foreground"
                          : "text-muted group-hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </span>
                    {/* animated underline */}
                    <span
                      className={`absolute bottom-1 left-4 right-4 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                        isHome ? "bg-white/60" : "bg-foreground"
                      }`}
                    />
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className={`absolute inset-0 rounded-full ${
                          isHome ? "bg-white/10" : "bg-subtle"
                        }`}
                        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                      />
                    )}
                  </Tag>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Magnetic strength={0.15}>
                <Link
                  href="/contact"
                  className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-transform hover:scale-105 active:scale-95 ${
                    isHome ? "bg-white text-black" : "bg-foreground text-background"
                  }`}
                >
                  <span>Let&apos;s Talk</span>
                  <svg
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </Magnetic>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-50 p-2 -mr-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <motion.span
                  animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`w-full h-0.5 origin-left ${isHome ? "bg-white" : "bg-foreground"}`}
                />
                <motion.span
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1, x: isMobileMenuOpen ? 20 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`w-3/4 h-0.5 ${isHome ? "bg-white" : "bg-foreground"}`}
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -8 : 0,
                    width: isMobileMenuOpen ? "100%" : "50%",
                  }}
                  transition={{ duration: 0.3 }}
                  className={`h-0.5 origin-left ${isHome ? "bg-white" : "bg-foreground"}`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className={`absolute inset-0 ${isHome ? "bg-neutral-950" : "bg-background"}`} />
            <div className="relative h-full flex flex-col items-center justify-center gap-2">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                const isExternal = "external" in link && link.external;
                const Tag: React.ElementType = isExternal ? "a" : Link;
                const extra = isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {};
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <Tag
                      href={link.href}
                      {...extra}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-4xl font-semibold transition-colors ${
                        isHome
                          ? isActive
                            ? "text-white"
                            : "text-white/50 hover:text-white"
                          : isActive
                          ? "text-foreground"
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </Tag>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium ${
                    isHome ? "bg-white text-black" : "bg-foreground text-background"
                  }`}
                >
                  Let&apos;s Talk
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

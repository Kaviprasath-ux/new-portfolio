"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations";
import { Silver } from "@/components/ui/silver";

type Blog = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  url: string;
  readLabel: string;
};

const blogs: Blog[] = [
  {
    title: "Will AI Take Your Design Job?",
    excerpt:
      "One designer, a ~130-route enterprise platform, and an AI writing the code. Not hype, not doom — what I actually think about designing in the age of AI.",
    category: "Opinion · AI & Product Design",
    date: "2026",
    image: "/blogs/will-ai-cover.jpg",
    url: "https://www.behance.net/gallery/253322861/Will-AI-Take-Your-Design-Job",
    readLabel: "Read on Behance",
  },
];

/* eslint-disable @next/next/no-img-element */
function BlogRow({
  blog,
  index,
  reverse,
}: {
  blog: Blog;
  index: string;
  reverse: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div ref={ref} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      {/* cover */}
      <a
        href={blog.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative block ${reverse ? "lg:order-2" : ""}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem] border border-white/10 bg-neutral-900">
          <motion.img
            src={blog.image}
            alt={blog.title}
            style={{ y }}
            className="absolute left-0 top-[-6%] h-[112%] w-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />
          <span className="absolute right-6 top-6 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </a>

      {/* text */}
      <div className={reverse ? "lg:order-1 lg:pr-8" : "lg:pl-8"}>
        <div className="mb-5 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
          <span className="text-white/70">{index}</span>
          <span className="h-px w-8 bg-white/15" />
          <span>{blog.category}</span>
          <span>·</span>
          <span>{blog.date}</span>
        </div>

        <h2 className="text-[clamp(2rem,4.5vw,3.6rem)] font-semibold leading-[1.02] tracking-tight">
          <Silver className="pb-[0.06em]">{blog.title}</Silver>
        </h2>

        <p className="mt-5 max-w-md leading-relaxed text-neutral-400">
          {blog.excerpt}
        </p>

        <a
          href={blog.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-white"
        >
          <span className="link-hover">{blog.readLabel}</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
}

export default function BlogsPage() {
  return (
    <div className="bg-neutral-950 pt-px text-white">
      <div className="grain" />

      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-[700px] rounded-full bg-[radial-gradient(ellipse,rgba(190,198,220,0.1),transparent_65%)] blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
              ( Writing — {blogs.length} {blogs.length === 1 ? "post" : "posts"} )
            </p>
            <h1 className="text-[clamp(3rem,11vw,9rem)] font-semibold leading-[0.9] tracking-tight">
              <Silver className="pb-[0.06em]">Blogs</Silver>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-neutral-400">
              Essays and opinions on design, AI, and building enterprise software —{" "}
              <span className="text-white">the honest version</span>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Posts */}
      <section className="border-t border-white/10 py-20 md:py-28">
        <div className="mx-auto max-w-7xl space-y-24 px-6 md:space-y-36 lg:px-8">
          {blogs.map((blog, i) => (
            <ScrollReveal key={blog.title}>
              <BlogRow
                blog={blog}
                index={String(i + 1).padStart(2, "0")}
                reverse={i % 2 === 1}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}

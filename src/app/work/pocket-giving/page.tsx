"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

// Animated Section Component
function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}

// Animated Counter Component
function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: string; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      {prefix}{value}{suffix}
    </motion.span>
  );
}

// Progress Bar Component
function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const opacity = useTransform(scrollYProgress, [0, 0.02], [0, 1]);

  return (
    <motion.div
      className="fixed top-16 left-0 right-0 h-0.5 bg-[#252947] origin-left z-50"
      style={{ scaleX, opacity }}
    />
  );
}

export default function PocketGivingCaseStudyV2() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(heroScrollProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(heroScrollProgress, [0, 0.5], [0, 100]);

  return (
    <article className="min-h-screen bg-white text-[#242424] overflow-x-hidden">
      <ReadingProgress />


      {/* Hero Section - Full Width Immersive */}
      <div ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[#252947]/5 via-white to-white"
          style={{ opacity: heroOpacity }}
        />

        <motion.div
          className="relative z-10 max-w-[900px] mx-auto px-6 text-center"
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        >
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-[#6b6b6b] hover:text-[#242424] transition-colors group"
            >
              <svg
                className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Work
            </Link>
          </motion.div>

          {/* Overline */}
          <motion.p
            className="text-[#252947]/70 font-medium tracking-[0.2em] uppercase text-[11px] md:text-xs mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Case Study · Fintech · UK
          </motion.p>

          <motion.h1
            className="text-[32px] md:text-[42px] lg:text-[52px] font-bold leading-[1.15] tracking-[-0.02em] text-[#242424] mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Reducing Donation Friction by <span className="text-[#252947]">40%</span>: A Systems Approach to Charitable UX
          </motion.h1>

          <motion.p
            className="text-[17px] md:text-[19px] text-[#6b6b6b] leading-[1.7] max-w-[640px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            How I led the design strategy for a UK fintech startup, delivering a 220+ screen ecosystem that transformed charitable giving from a 10-step transaction into a 3-tap experience.
          </motion.p>

          {/* Author */}
          <motion.div
            className="flex items-center justify-center gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-12 h-12 rounded-full bg-[#252947] flex items-center justify-center text-white font-semibold text-lg shadow-lg shadow-[#252947]/30">
              K
            </div>
            <div className="text-left">
              <p className="font-medium text-[#242424]">Kavi Prasath</p>
              <p className="text-sm text-[#6b6b6b]">Product Designer · 4 months</p>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Hero Image - Full Bleed */}
      <motion.figure
        className="relative w-full max-w-[1400px] mx-auto px-6 -mt-20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
          <Image
            src="/projects/pocket-giving/cover.png"
            alt="Pocket Giving App Screens"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        </div>
      </motion.figure>

      {/* Article Body */}
      <div className="max-w-[800px] mx-auto px-6 pt-32 pb-24">

        {/* Executive Summary - Large Opening */}
        <AnimatedSection className="mb-24">
          <motion.p
            className="text-[24px] md:text-[28px] leading-[1.6] text-[#242424] font-light"
            variants={fadeInUp}
          >
            <span className="text-[64px] md:text-[80px] font-bold float-left mr-4 mt-2 leading-none text-[#252947]">P</span>
            ocket Giving approached me with a critical business problem: 73% of donors abandoned their donations mid-flow, and Gift Aid activation—worth £480M annually to UK charities—sat at just 34%.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection className="mb-24">
          <p className="text-[21px] leading-[1.8] text-[#242424]">
            I led the end-to-end design strategy, establishing a component-first design system, conducting structured usability testing with 20+ participants, and shipping 220+ screens across three platforms in four months. The result: <strong className="text-[#252947]">40% reduction in completion time</strong>, <strong className="text-[#252947]">2× Gift Aid activation</strong>, and a scalable system now live on iOS and Android.
          </p>
        </AnimatedSection>

        {/* Chapter Divider */}
        <motion.div
          className="flex items-center gap-6 my-24"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#242424]/20 to-[#242424]/20" />
          <span className="text-[#6b6b6b] text-sm font-medium tracking-wider uppercase">Chapter 01</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#242424]/20 to-[#242424]/20" />
        </motion.div>

        {/* Strategic Context */}
        <AnimatedSection className="mb-16">
          <motion.h2
            className="text-[36px] md:text-[42px] font-bold tracking-[-0.02em] text-[#242424] mb-8"
            variants={fadeInUp}
          >
            The £480 Million Problem
          </motion.h2>

          <p className="text-[21px] leading-[1.8] text-[#242424] mb-8">
            The UK charitable giving sector faces a paradox: donor intent is high, but conversion is catastrophically low. This isn&apos;t a marketing problem—it&apos;s a systems design failure.
          </p>

          <p className="text-[21px] leading-[1.8] text-[#242424]">
            When Pocket Giving&apos;s leadership approached me, they presented a clear business case. Their client charities were hemorrhaging potential donations at every step of the funnel. The numbers were stark:
          </p>
        </AnimatedSection>

        {/* Stats - Animated Cards */}
        <motion.div
          className="grid grid-cols-3 gap-4 my-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            { value: "73%", label: "Abandonment rate", color: "from-red-500 to-orange-500" },
            { value: "34%", label: "Gift Aid activation", color: "from-amber-500 to-yellow-500" },
            { value: "£480M", label: "Lost to friction", color: "from-[#252947] to-[#3d4a6b]" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="relative bg-white rounded-2xl p-6 text-center border border-black/5 overflow-hidden group hover:shadow-xl transition-shadow duration-500"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <p className="text-[36px] md:text-[48px] font-bold text-[#242424] tracking-tight">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="text-[14px] text-[#6b6b6b] mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection className="mb-12">
          <p className="text-[21px] leading-[1.8] text-[#242424] mb-8">
            The root cause wasn&apos;t motivation—donors wanted to give. It was friction relative to emotional window. Charitable giving is an emotionally-driven behavior with a narrow decision window. Every additional step in the flow allows that emotional momentum to dissipate.
          </p>

          <p className="text-[21px] leading-[1.8] text-[#242424]">
            I identified three structural problems in the existing market:
          </p>
        </AnimatedSection>

        {/* Problems - Animated Cards */}
        <motion.div
          className="space-y-4 my-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              num: "01",
              title: "Transaction-oriented architecture",
              desc: "Competitors designed for compliance, not conversion. Average flows required 7–10 steps—appropriate for e-commerce, catastrophic for impulse giving."
            },
            {
              num: "02",
              title: "Cognitive overload on Gift Aid",
              desc: "Legal requirements had been implemented literally rather than thoughtfully. Three paragraphs of tax language mid-flow created decision paralysis."
            },
            {
              num: "03",
              title: "No relationship layer",
              desc: "Every platform treated donations as one-time transactions with no mechanism for ongoing engagement or retention."
            }
          ].map((problem, i) => (
            <motion.div
              key={i}
              className="flex gap-6 p-6 rounded-xl bg-[#fafafa] hover:bg-[#f5f5f5] transition-colors group"
              variants={slideInLeft}
              whileHover={{ x: 10 }}
            >
              <span className="text-[48px] font-bold text-[#e5e5e5] group-hover:text-[#252947]/20 transition-colors leading-none">
                {problem.num}
              </span>
              <div>
                <p className="text-[18px] font-semibold text-[#242424] mb-2">{problem.title}</p>
                <p className="text-[16px] text-[#6b6b6b] leading-[1.6]">{problem.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote - Full Width Highlight */}
        <motion.blockquote
          className="relative my-24 py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#252947] to-[#3d4a6b] rounded-full" />
          <motion.p
            className="text-[26px] md:text-[32px] leading-[1.4] text-[#242424] font-medium pl-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            &ldquo;Donors tell our charity partners: &apos;I want to support you, but the forms take too long. By the time I&apos;m done, I&apos;ve lost the emotional connection.&apos;&rdquo;
          </motion.p>
        </motion.blockquote>

        <AnimatedSection>
          <p className="text-[21px] leading-[1.8] text-[#242424]">
            This insight from stakeholder interviews became the strategic foundation for every design decision that followed.
          </p>
        </AnimatedSection>

        {/* Chapter Divider */}
        <motion.div
          className="flex items-center gap-6 my-24"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#242424]/20 to-[#242424]/20" />
          <span className="text-[#6b6b6b] text-sm font-medium tracking-wider uppercase">Chapter 02</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#242424]/20 to-[#242424]/20" />
        </motion.div>

        {/* Research Strategy */}
        <AnimatedSection className="mb-16">
          <h2 className="text-[36px] md:text-[42px] font-bold tracking-[-0.02em] text-[#242424] mb-8">
            Validating Assumptions at Scale
          </h2>

          <p className="text-[21px] leading-[1.8] text-[#242424]">
            Given the aggressive four-month timeline, I structured research to maximize signal while maintaining velocity. The approach combined three complementary methods:
          </p>
        </AnimatedSection>

        {/* Research Methods - Tabs Style */}
        <AnimatedSection className="mb-16">
          <h3 className="text-[24px] font-bold text-[#242424] mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#252947]/10 text-[#252947] flex items-center justify-center text-sm font-bold">1</span>
            Domain Expert Synthesis
          </h3>
          <p className="text-[21px] leading-[1.8] text-[#242424] mb-6">
            I conducted eight structured sessions with the client&apos;s leadership team, who brought five years of direct charity sector experience and relationships with 50+ UK organizations. These sessions weren&apos;t casual conversations—I used a systematic interview protocol to extract:
          </p>
          <motion.ul
            className="space-y-3 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "Behavioral patterns observed across their charity network",
              "Regulatory constraints (HMRC Gift Aid requirements, GDPR)",
              "Competitive dynamics and market positioning opportunities",
              "Technical constraints from their engineering team"
            ].map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-[18px] text-[#242424]"
                variants={staggerItem}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#252947] mt-3 flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </AnimatedSection>

        <AnimatedSection className="mb-16">
          <h3 className="text-[24px] font-bold text-[#242424] mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#252947]/10 text-[#252947] flex items-center justify-center text-sm font-bold">2</span>
            Competitive Analysis
          </h3>
          <p className="text-[21px] leading-[1.8] text-[#242424] mb-8">
            I personally audited the complete donation flows of JustGiving, GoFundMe, Givelify, and Givebutter—documenting step counts, friction points, and interaction patterns. This wasn&apos;t surface-level review; I completed actual donations, timed each flow, and mapped decision points.
          </p>

          {/* Competitor Table - Enhanced */}
          <motion.div
            className="rounded-2xl border border-black/10 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <table className="w-full text-[15px]">
              <thead>
                <tr className="bg-[#fafafa]">
                  <th className="text-left py-4 px-5 font-semibold text-[#242424]">Platform</th>
                  <th className="text-left py-4 px-5 font-semibold text-[#242424]">Steps</th>
                  <th className="text-left py-4 px-5 font-semibold text-[#242424]">Gift Aid</th>
                  <th className="text-left py-4 px-5 font-semibold text-[#242424]">Key Friction</th>
                </tr>
              </thead>
              <tbody className="text-[#242424]">
                {[
                  { name: "JustGiving", steps: "10 steps", giftAid: "Separate page", friction: "Account required" },
                  { name: "GoFundMe", steps: "8 steps", giftAid: "N/A", friction: "Tip confusion" },
                  { name: "Givebutter", steps: "7 steps", giftAid: "N/A", friction: "Payment selection" },
                  { name: "Givelify", steps: "6 steps", giftAid: "N/A", friction: "Church-specific" }
                ].map((row, i) => (
                  <motion.tr
                    key={i}
                    className="border-t border-black/5 hover:bg-[#fafafa] transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <td className="py-4 px-5 font-medium">{row.name}</td>
                    <td className="py-4 px-5 font-mono text-red-500">{row.steps}</td>
                    <td className="py-4 px-5">{row.giftAid}</td>
                    <td className="py-4 px-5 text-[#6b6b6b]">{row.friction}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection className="mb-16">
          <h3 className="text-[24px] font-bold text-[#242424] mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#252947]/10 text-[#252947] flex items-center justify-center text-sm font-bold">3</span>
            Structured Usability Testing
          </h3>
          <p className="text-[21px] leading-[1.8] text-[#242424] mb-8">
            I designed and facilitated usability testing with 20+ participants across four core scenarios, using think-aloud protocol and task completion metrics. Testing was conducted in iterative rounds, allowing design refinements between sessions.
          </p>

          {/* Testing Box - Enhanced */}
          <motion.div
            className="bg-gradient-to-br from-[#fafafa] to-white rounded-2xl p-8 border border-black/5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[12px] font-bold tracking-[0.2em] text-[#252947] uppercase mb-6">Test Scenarios & Findings</p>
            <div className="space-y-0">
              {[
                { scenario: "First-time donation", target: "<90s completion", finding: "3 friction points in onboarding" },
                { scenario: "Repeat donation", target: "<15s completion", finding: "40% missed Quick Donate" },
                { scenario: "Gift Aid activation", target: ">80% comprehension", finding: "4 iterations needed" },
                { scenario: "Recurring setup", target: "<2min completion", finding: "100% overwhelm initially" }
              ].map((test, i) => (
                <motion.div
                  key={i}
                  className="flex justify-between items-center py-4 border-b border-black/5 last:border-0"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div>
                    <p className="font-semibold text-[#242424]">{test.scenario}</p>
                    <p className="text-[14px] text-[#6b6b6b]">Target: {test.target}</p>
                  </div>
                  <p className="text-[14px] text-[#6b6b6b] text-right">{test.finding}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Chapter Divider */}
        <motion.div
          className="flex items-center gap-6 my-24"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#242424]/20 to-[#242424]/20" />
          <span className="text-[#6b6b6b] text-sm font-medium tracking-wider uppercase">Chapter 03</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#242424]/20 to-[#242424]/20" />
        </motion.div>

        {/* Design Framework */}
        <AnimatedSection className="mb-16">
          <h2 className="text-[36px] md:text-[42px] font-bold tracking-[-0.02em] text-[#242424] mb-8">
            Speed as a Feature
          </h2>

          <p className="text-[21px] leading-[1.8] text-[#242424]">
            Research synthesis revealed a core insight that became the strategic framework for the entire project:
          </p>
        </AnimatedSection>

        {/* Core Insight - Big Quote */}
        <motion.div
          className="relative my-16 py-16 px-8 bg-[#242424] rounded-3xl text-white overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-[#252947]/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <p className="relative text-[24px] md:text-[32px] leading-[1.4] font-medium italic">
            &ldquo;Donation is an emotional behavior with a narrow decision window. Speed isn&apos;t a nice-to-have—it&apos;s the primary feature.&rdquo;
          </p>
        </motion.div>

        <AnimatedSection className="mb-12">
          <p className="text-[21px] leading-[1.8] text-[#242424]">
            This led me to establish three design principles that guided every decision:
          </p>
        </AnimatedSection>

        {/* Principles - Cards */}
        <motion.div
          className="space-y-6 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              num: "01",
              title: "Context-Appropriate Friction",
              desc: "Not all donations are equal. A first-time donor discovering a cause needs different UX than a repeat supporter giving for the fifth time. I designed three distinct flows optimized for different user contexts."
            },
            {
              num: "02",
              title: "Progressive Disclosure",
              desc: "Complex information (recurring schedules, Gift Aid requirements) should be distributed across steps rather than presented simultaneously. One decision at a time, full picture always visible."
            },
            {
              num: "03",
              title: "Leverage Existing Mental Models",
              desc: "Users already know Instagram's follow mechanics and Apple Pay's biometric confirmation. Borrow proven patterns rather than inventing novel interactions."
            }
          ].map((principle, i) => (
            <motion.div
              key={i}
              className="group relative p-8 rounded-2xl border border-black/5 hover:border-[#252947]/20 hover:shadow-lg hover:shadow-[#252947]/5 transition-all duration-500"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <div className="flex gap-6">
                <span className="text-[64px] font-bold text-[#252947]/10 group-hover:text-[#252947]/30 transition-colors leading-none">
                  {principle.num}
                </span>
                <div>
                  <h3 className="text-[20px] font-bold text-[#242424] mb-3">{principle.title}</h3>
                  <p className="text-[17px] text-[#6b6b6b] leading-[1.7]">{principle.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Chapter Divider */}
        <motion.div
          className="flex items-center gap-6 my-24"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#242424]/20 to-[#242424]/20" />
          <span className="text-[#6b6b6b] text-sm font-medium tracking-wider uppercase">Chapter 04</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#242424]/20 to-[#242424]/20" />
        </motion.div>

        {/* Solution Architecture */}
        <AnimatedSection className="mb-16">
          <h2 className="text-[36px] md:text-[42px] font-bold tracking-[-0.02em] text-[#242424] mb-8">
            Three-Tier Donation System
          </h2>

          <p className="text-[21px] leading-[1.8] text-[#242424]">
            Based on the design framework, I architected a donation system with three distinct flows, each optimized for specific user intent and context:
          </p>
        </AnimatedSection>

        {/* Tier 1 */}
        <AnimatedSection className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1.5 bg-[#252947]/10 text-[#252947] text-sm font-semibold rounded-full">Tier 1</span>
            <h3 className="text-[28px] font-bold text-[#242424]">Quick Donate (3 Taps)</h3>
          </div>
          <p className="text-[17px] text-[#6b6b6b] mb-8">
            <strong className="text-[#242424]">Target:</strong> Repeat donors &nbsp;·&nbsp; <strong className="text-[#242424]">Goal:</strong> Capture donation within emotional window (&lt;10s)
          </p>

          <motion.figure
            className="my-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <video
              src="/projects/pocket-giving/quick-donate-demo.mov"
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-[280px] h-auto rounded-2xl shadow-xl"
            />
          </motion.figure>

          <p className="text-[21px] leading-[1.8] text-[#242424] font-semibold mb-4">
            Key design decisions:
          </p>
          <motion.ul
            className="space-y-3 mb-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { bold: "Prominent placement:", text: "Quick Donate at top of home screen after testing revealed 40% of users missed secondary placement" },
              { bold: "Pre-set amounts:", text: "£10/£50/£100/£150 options eliminate friction while preserving flexibility" },
              { bold: "Biometric auth:", text: "Face ID/Touch ID replaces password entry, saving 15+ seconds" },
              { bold: "Undo mechanism:", text: "5-second cancellation window addresses accidental donation concerns" }
            ].map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-[18px] text-[#242424] leading-[1.7]"
                variants={staggerItem}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#252947] mt-3 flex-shrink-0" />
                <span><strong>{item.bold}</strong> {item.text}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Improvement Metric */}
          <motion.div
            className="flex items-center justify-between bg-gradient-to-r from-[#fafafa] to-white rounded-2xl p-8 border border-black/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <p className="text-[14px] text-[#6b6b6b] mb-1">Industry</p>
              <p className="text-[28px] font-bold text-[#242424]">7-10 steps</p>
            </div>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg className="w-8 h-8 text-[#252947]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.div>
            <div className="text-center">
              <p className="text-[14px] text-[#6b6b6b] mb-1">Quick Donate</p>
              <p className="text-[28px] font-bold text-[#252947]">3 taps</p>
            </div>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            >
              <svg className="w-8 h-8 text-[#252947]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.div>
            <div className="text-center">
              <p className="text-[14px] text-[#6b6b6b] mb-1">Result</p>
              <p className="text-[28px] font-bold text-[#252947]">70% faster</p>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Tier 2 */}
        <AnimatedSection className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">Tier 2</span>
            <h3 className="text-[28px] font-bold text-[#242424]">Standard Donation (5–7 Steps)</h3>
          </div>
          <p className="text-[17px] text-[#6b6b6b] mb-6">
            <strong className="text-[#242424]">Target:</strong> New donors &nbsp;·&nbsp; <strong className="text-[#242424]">Goal:</strong> Balance information with conversion momentum
          </p>
          <p className="text-[21px] leading-[1.8] text-[#242424]">
            This flow accommodates the discovery journey—charity browsing, cause evaluation, and informed decision-making—while maintaining forward momentum through clear visual hierarchy and progress indication.
          </p>
        </AnimatedSection>

        {/* Tier 3 */}
        <AnimatedSection className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1.5 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">Tier 3</span>
            <h3 className="text-[28px] font-bold text-[#242424]">Recurring Donation (Progressive Flow)</h3>
          </div>
          <p className="text-[17px] text-[#6b6b6b] mb-6">
            <strong className="text-[#242424]">Target user:</strong> Committed supporters establishing ongoing giving<br />
            <strong className="text-[#242424]">Design goal:</strong> Manage complexity without cognitive overload
          </p>

          <p className="text-[21px] leading-[1.8] text-[#242424] mb-8">
            Initial testing of a comprehensive single-screen approach yielded 100% user overwhelm. I restructured into a progressive five-step flow:
          </p>

          {/* 5 Steps - Visual Timeline */}
          <motion.div
            className="relative pl-8 border-l-2 border-[#252947]/20 space-y-6 my-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: "Charity selection", desc: "Multi-select with visual feedback (max 5)" },
              { title: "Schedule configuration", desc: "One charity at a time, clear frequency options" },
              { title: "Amount allocation", desc: "Sliders with running total always visible" },
              { title: "Calendar review", desc: "Visual representation of upcoming donations" },
              { title: "Confirmation", desc: "Summary with edit capability before commitment" }
            ].map((step, i) => (
              <motion.div
                key={i}
                className="relative"
                variants={staggerItem}
              >
                <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-[#252947] border-4 border-white shadow-sm" />
                <div className="bg-white p-4 rounded-xl border border-black/5 hover:shadow-md transition-shadow">
                  <p className="font-semibold text-[#242424]">{i + 1}. {step.title}</p>
                  <p className="text-[15px] text-[#6b6b6b] mt-1">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mockup */}
          <motion.figure
            className="my-12 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <video
              src="/projects/pocket-giving/recurring-donation-demo.mov"
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-[280px] h-auto rounded-2xl shadow-2xl shadow-black/10"
            />
          </motion.figure>

          <p className="text-[21px] leading-[1.8] text-[#242424]">
            Post-iteration testing showed user overwhelm dropped to 0%, with completion rates increasing 27%.
          </p>
        </AnimatedSection>

        {/* Chapter Divider */}
        <motion.div
          className="flex items-center gap-6 my-24"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#242424]/20 to-[#242424]/20" />
          <span className="text-[#6b6b6b] text-sm font-medium tracking-wider uppercase">Chapter 05</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#242424]/20 to-[#242424]/20" />
        </motion.div>

        {/* Gift Aid Redesign */}
        <AnimatedSection className="mb-16">
          <h2 className="text-[36px] md:text-[42px] font-bold tracking-[-0.02em] text-[#242424] mb-4">
            Gift Aid Redesign
          </h2>
          <p className="text-[24px] text-[#252947] font-semibold mb-8">From 34% to 67% Activation</p>

          <p className="text-[21px] leading-[1.8] text-[#242424] mb-6">
            Gift Aid represented the highest-impact design opportunity in the project. The UK government&apos;s scheme adds 25% to charitable donations at no cost to donors—but industry activation rates sat at just 34% due to poor interface design.
          </p>

          <p className="text-[21px] leading-[1.8] text-[#242424]">
            I approached this as a systematic design problem, running four distinct iterations through usability testing:
          </p>
        </AnimatedSection>

        {/* Iteration Table - Enhanced */}
        <motion.div
          className="rounded-2xl border border-black/10 overflow-hidden mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <table className="w-full text-[15px]">
            <thead>
              <tr className="bg-[#fafafa]">
                <th className="text-left py-4 px-5 font-semibold text-[#242424] w-16">V</th>
                <th className="text-left py-4 px-5 font-semibold text-[#242424]">Approach</th>
                <th className="text-left py-4 px-5 font-semibold text-[#242424]">Result</th>
                <th className="text-left py-4 px-5 font-semibold text-[#242424]">Learning</th>
              </tr>
            </thead>
            <tbody>
              {[
                { v: "1", approach: "Full legal explanation", result: "0% read it", resultColor: "text-red-500", learning: "Compliance ≠ comprehension" },
                { v: "2", approach: "Simple toggle", result: "High confusion", resultColor: "text-orange-500", learning: "Brevity needs context" },
                { v: "3", approach: "Numerical display", result: "Understood math", resultColor: "text-amber-500", learning: "Numbers need narrative" },
                { v: "4", approach: "Visual calc + benefit", result: "90% comprehension", resultColor: "text-[#252947] font-semibold", learning: "Show benefit, hide complexity", highlight: true }
              ].map((row, i) => (
                <motion.tr
                  key={i}
                  className={`border-t border-black/5 ${row.highlight ? 'bg-[#252947]/5' : 'hover:bg-[#fafafa]'} transition-colors`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <td className="py-4 px-5 font-bold">{row.v}</td>
                  <td className="py-4 px-5">{row.approach}</td>
                  <td className={`py-4 px-5 ${row.resultColor}`}>{row.result}</td>
                  <td className="py-4 px-5 text-[#6b6b6b]">{row.learning}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.figure
          className="my-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/projects/pocket-giving/gift aiddd.png"
            alt="Gift Aid Screen"
            width={800}
            height={600}
            className="w-full max-w-[340px] h-auto rounded-2xl shadow-2xl shadow-black/10"
          />
        </motion.figure>

        <AnimatedSection>
          <p className="text-[21px] leading-[1.8] text-[#242424] mb-6">
            The final design positions Gift Aid as an inline toggle within the donation flow (never a separate page), uses visual math (&ldquo;Your £100 = £125 to charity&rdquo;), leads with benefit (&ldquo;At no cost to you&rdquo;), and tucks legal requirements behind a &ldquo;Learn more&rdquo; expansion.
          </p>

          <p className="text-[21px] leading-[1.8] text-[#242424]">
            Projected activation rate: <strong className="text-[#252947] text-[24px]">67%</strong>—nearly double the industry average.
          </p>
        </AnimatedSection>

        {/* Chapter Divider */}
        <motion.div
          className="flex items-center gap-6 my-24"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#242424]/20 to-[#242424]/20" />
          <span className="text-[#6b6b6b] text-sm font-medium tracking-wider uppercase">Results</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#242424]/20 to-[#242424]/20" />
        </motion.div>

        {/* Business Outcomes */}
        <AnimatedSection className="mb-16">
          <h2 className="text-[36px] md:text-[42px] font-bold tracking-[-0.02em] text-[#242424] mb-8">
            Business Outcomes
          </h2>

          <p className="text-[21px] leading-[1.8] text-[#242424]">
            The product shipped on schedule and is live today on iOS and Android.
          </p>
        </AnimatedSection>

        {/* Metrics - Big Numbers */}
        <motion.div
          className="grid grid-cols-3 gap-4 my-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { value: "↓40%", label: "Completion time", sublabel: "2m 20s → 1m 20s" },
            { value: "2×", label: "Gift Aid activation", sublabel: "34% → 67%" },
            { value: "↑27%", label: "Recurring conversion", sublabel: "Progressive flow" }
          ].map((metric, i) => (
            <motion.div
              key={i}
              className="text-center p-8 rounded-2xl bg-gradient-to-b from-[#252947]/5 to-white border border-[#252947]/10"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.p
                className="text-[40px] md:text-[52px] font-bold text-[#252947] tracking-tight"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: i * 0.1 }}
              >
                {metric.value}
              </motion.p>
              <p className="text-[15px] text-[#242424] font-medium mt-2">{metric.label}</p>
              <p className="text-[13px] text-[#6b6b6b] mt-1">{metric.sublabel}</p>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection className="mb-16">
          <h3 className="text-[24px] font-bold text-[#242424] mb-6">Delivery Metrics</h3>
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { value: "220+", label: "screens across three platforms" },
              { value: "4mo", label: "delivery against 6-month estimate" },
              { value: "40-50", label: "components in design system" },
              { value: "100%", label: "production handoff with documentation" }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-5 rounded-xl bg-[#fafafa] border border-black/5"
                variants={staggerItem}
              >
                <p className="text-[28px] font-bold text-[#242424]">{item.value}</p>
                <p className="text-[14px] text-[#6b6b6b]">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Chapter Divider */}
        <motion.div
          className="flex items-center gap-6 my-24"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#242424]/20 to-[#242424]/20" />
          <span className="text-[#6b6b6b] text-sm font-medium tracking-wider uppercase">Reflection</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#242424]/20 to-[#242424]/20" />
        </motion.div>

        {/* Strategic Reflection */}
        <AnimatedSection className="mb-16">
          <h2 className="text-[36px] md:text-[42px] font-bold tracking-[-0.02em] text-[#242424] mb-12">
            Strategic Reflection
          </h2>

          <h3 className="text-[24px] font-bold text-[#242424] mb-6">What Drove Success</h3>

          <motion.div
            className="space-y-6 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: "Framework-first approach", desc: "Establishing design principles before screen-level work ensured consistency across 220+ screens and enabled faster decision-making throughout." },
              { title: "Iterative validation", desc: "Structured usability testing at each phase caught issues early. The Gift Aid interface required four iterations—each informed by real user feedback." },
              { title: "Systems thinking", desc: "Component-first design and template systems transformed overwhelming scope into manageable, repeatable work." }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-4"
                variants={slideInRight}
              >
                <div className="w-2 h-2 rounded-full bg-[#252947] mt-3 flex-shrink-0" />
                <p className="text-[19px] leading-[1.8] text-[#242424]">
                  <strong>{item.title}:</strong> {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <h3 className="text-[24px] font-bold text-[#242424] mb-6">What I&apos;d Approach Differently</h3>

          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: "External user research", desc: "Internal testing validated interaction design but couldn't capture real-world emotional context. For future projects, I'd advocate for 5–8 external interviews in natural contexts." },
              { title: "Analytics instrumentation", desc: "Success metrics were defined, but measurement infrastructure wasn't fully planned during design. Earlier engineering collaboration would enable faster post-launch optimization." },
              { title: "Decision documentation", desc: "At 220+ screens, institutional knowledge dissipates quickly. More rigorous real-time documentation would benefit future iterations." }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-4"
                variants={slideInRight}
              >
                <div className="w-2 h-2 rounded-full bg-[#6b6b6b] mt-3 flex-shrink-0" />
                <p className="text-[19px] leading-[1.8] text-[#242424]">
                  <strong>{item.title}:</strong> {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Key Takeaway - Full Width */}
        <motion.div
          className="relative my-24 -mx-6 md:-mx-12 lg:-mx-24 px-6 md:px-12 lg:px-24 py-20 bg-[#242424] text-white overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated background shapes */}
          <motion.div
            className="absolute top-10 left-10 w-64 h-64 bg-[#252947]/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-48 h-48 bg-[#252947]/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], y: [0, -30, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          <div className="relative max-w-[700px] mx-auto text-center">
            <motion.p
              className="text-[12px] font-bold tracking-[0.3em] text-[#7b8ab8] uppercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Key Takeaway
            </motion.p>
            <motion.p
              className="text-[24px] md:text-[30px] leading-[1.5] font-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Charitable giving is an emotional behavior constrained by transactional interfaces. The opportunity isn&apos;t incremental improvement—it&apos;s fundamental reconception around the principle that{" "}
              <strong className="text-[#7b8ab8] font-semibold">speed preserves generosity</strong>.
            </motion.p>
          </div>
        </motion.div>

        {/* Product Links */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-[18px] text-[#6b6b6b]">
            The product is live: {" "}
            <a href="https://apps.apple.com/in/app/pocket-giving/id6456887391" target="_blank" rel="noopener noreferrer" className="text-[#252947] hover:underline underline-offset-4">iOS</a>
            {" · "}
            <a href="https://play.google.com/store/apps/details?id=com.customers.pocketgiving&hl=en_IN" target="_blank" rel="noopener noreferrer" className="text-[#252947] hover:underline underline-offset-4">Android</a>
            {" · "}
            <a href="https://pocketgiving.co.uk" target="_blank" rel="noopener noreferrer" className="text-[#252947] hover:underline underline-offset-4">pocketgiving.co.uk</a>
          </p>
        </motion.div>

      </div>

      {/* Footer */}
      <footer className="border-t border-black/5">
        <div className="max-w-[800px] mx-auto px-6 py-12 flex justify-between items-center">
          <Link
            href="/work"
            className="group flex items-center gap-3 text-[#6b6b6b] hover:text-[#242424] transition-colors"
          >
            <motion.div
              className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:border-[#242424] transition-colors"
              whileHover={{ x: -5 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.div>
            <span className="font-medium">More Work</span>
          </Link>
          <a
            href="https://linkedin.com/in/kaviprasath"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-[#6b6b6b] hover:text-[#242424] transition-colors"
          >
            <span className="font-medium">LinkedIn</span>
            <motion.div
              className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:border-[#242424] transition-colors"
              whileHover={{ x: 5 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          </a>
        </div>
      </footer>
    </article>
  );
}

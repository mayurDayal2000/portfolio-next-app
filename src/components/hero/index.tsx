"use client";

import { ArrowRight, Download, Loader2, Palette, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { checkResumeAvailability, downloadResume } from "@/lib/resume-utils";
import {
  columnVariants,
  HEADING_SHADOW_STYLE,
  itemUp,
  PULSE_TRANSFORM_STYLE,
  staggerContainer,
  TEXT_SHADOW_STYLE,
} from "./hero.animations";
import { KEY_HIGHLIGHTS, SOCIAL_LINKS, STATS, TECH_STACK } from "./hero.data";

/**
 * Hero Section Component
 *
 * Main landing section featuring:
 * - Personal introduction and headline
 * - Call-to-action buttons (View Work, Download CV)
 * - Social media links
 * - Professional statistics
 * - Tech stack showcase
 * - Availability status
 *
 * @component
 */
export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [isDownloading, setIsDownloading] = useState(false);
  const [isResumeAvailable, setIsResumeAvailable] = useState(true);

  useEffect(() => {
    const verifyResume = async () => {
      const { available } = await checkResumeAvailability();
      setIsResumeAvailable(available);
    };

    verifyResume();
  }, []);

  const handleDownloadResume = useCallback(async () => {
    if (isDownloading) return;

    setIsDownloading(true);
    toast.info("Preparing download...");

    try {
      const result = await downloadResume();

      if (result.success) {
        toast.success("Resume downloaded successfully!");
      } else {
        toast.error(result.error || "Failed to download resume. Please try again.");
      }
    } catch (error) {
      console.error("Unexpected error during download:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  }, [isDownloading]);

  return (
    <section
      aria-label="Hero section - Introduction"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh"
      id="hero"
    >
      {/* Skip to main content link for keyboard users */}
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
        href="#projects"
      >
        Skip to main content
      </a>

      {/* Grain/Noise overlay - inlined SVG for performance */}
      <div className="grain-overlay" />

      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-dark/90" />

      {/* Decorative gradient blobs */}
      <div className="gradient-blob gradient-blob-left" />
      <div className="gradient-blob gradient-blob-right" />

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            animate="show"
            className="space-y-8"
            initial="hidden"
            variants={columnVariants}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 text-sm sm:text-base font-medium text-accent"
              variants={itemUp}
            >
              <Sparkles className="w-4 h-4" />
              <span>Available for Freelance & Full-time</span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              animate="show"
              className="space-y-4"
              initial="hidden"
              variants={staggerContainer}
            >
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]"
                style={HEADING_SHADOW_STYLE}
                variants={itemUp}
              >
                <span className="block text-light">Hi, I'm Mayur.</span>
                <span className="block text-gradient">Full-Stack Engineer Building with AI.</span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-muted max-w-xl leading-relaxed"
                style={TEXT_SHADOW_STYLE}
                variants={itemUp}
              >
                I'm a full-stack engineer with 3+ years of experience building web applications with{" "}
                <span className="text-accent font-semibold">React, Next.js, and TypeScript</span>. I
                love creating clean, performant user interfaces and building scalable backends —
                from pixel-perfect designs to AI-powered features.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              animate="show"
              className="flex flex-col sm:flex-row gap-4"
              initial="hidden"
              variants={staggerContainer}
            >
              <motion.button
                aria-label="View my projects section"
                className="relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors glow-effect"
                initial="rest"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: prefersReducedMotion ? "auto" : "smooth",
                  })
                }
                type="button"
                variants={itemUp}
                whileHover={prefersReducedMotion ? {} : "hover"}
                whileTap={prefersReducedMotion ? {} : "tap"}
              >
                <span>View My Work</span>
                <motion.span
                  transition={{ damping: 22, stiffness: 400, type: "spring" }}
                  variants={{ hover: { x: 6 }, rest: { x: 0 }, tap: { x: 2 } }}
                >
                  <ArrowRight aria-hidden="true" className="w-5 h-5" />
                </motion.span>
              </motion.button>

              <motion.button
                aria-label={
                  isDownloading
                    ? "Downloading resume..."
                    : !isResumeAvailable
                      ? "Resume currently unavailable"
                      : "Download my resume as PDF"
                }
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass-effect hover:bg-white/10 text-light font-semibold rounded-xl border border-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isDownloading || !isResumeAvailable}
                initial="rest"
                onClick={handleDownloadResume}
                type="button"
                variants={itemUp}
                whileHover={
                  prefersReducedMotion || isDownloading || !isResumeAvailable ? {} : { scale: 1.04 }
                }
                whileTap={
                  prefersReducedMotion || isDownloading || !isResumeAvailable ? {} : { scale: 0.98 }
                }
              >
                {isDownloading ? (
                  <Loader2 aria-hidden="true" className="w-5 h-5 animate-spin" />
                ) : (
                  <Download aria-hidden="true" className="w-5 h-5" />
                )}
                <span>
                  {isDownloading
                    ? "Downloading..."
                    : !isResumeAvailable
                      ? "CV Unavailable"
                      : "Download CV"}
                </span>
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div className="flex items-center gap-4 pt-4" variants={itemUp}>
              <span className="text-sm text-muted" id="social-links-label">
                Connect:
              </span>
              <nav aria-labelledby="social-links-label" className="flex gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <motion.a
                    aria-label={social.ariaLabel}
                    className="p-3 glass-effect rounded-lg hover:bg-primary/20 transition-colors"
                    href={social.href}
                    key={social.label}
                    rel="noopener noreferrer"
                    target="_blank"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                  >
                    <span aria-hidden="true" className="text-muted">
                      {social.icon}
                    </span>
                    <span className="sr-only">Visit my {social.label} profile</span>
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </motion.div>

          {/* Right column - Stats & Tech Stack */}
          <motion.div
            className="space-y-4 lg:space-y-6"
            initial="hidden"
            variants={columnVariants}
            viewport={{ margin: "-80px", once: true }}
            whileInView="show"
          >
            {/* Stats Grid with stagger-in */}
            <motion.div
              aria-label="Professional statistics"
              className="grid grid-cols-3 gap-3 sm:gap-4"
              initial="hidden"
              variants={staggerContainer}
              viewport={{ margin: "-80px", once: true }}
              whileInView="show"
            >
              {STATS.map((stat) => (
                <motion.div
                  className="glass-effect rounded-2xl p-4 sm:p-6 text-center hover:bg-white/10"
                  key={stat.label}
                  transition={{ damping: 20, stiffness: 260, type: "spring" }}
                  variants={itemUp}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
                >
                  <div aria-hidden="true" className="flex justify-center mb-2 sm:mb-3 text-accent">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-light mb-1">{stat.value}</div>
                  <div className="text-xs text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Featured Tech Stack Card */}
            <motion.div
              className="glass-effect rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-6 hover:bg-white/5 transition-colors"
              variants={itemUp}
            >
              <div className="flex items-center gap-3">
                <div aria-hidden="true" className="p-2 bg-primary/20 rounded-lg">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-light">Tech Stack</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map((tech) => (
                  <motion.span
                    className="px-4 py-2 bg-dark-secondary/80 border border-white/10 rounded-lg text-sm text-light font-medium"
                    key={tech}
                    whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Quick highlights */}
              <div className="pt-4 border-t border-white/10">
                <ul aria-label="Key strengths" className="space-y-3">
                  {KEY_HIGHLIGHTS.map((highlight) => (
                    <li
                      className="flex items-center gap-3 text-sm text-muted hover:text-light transition-colors"
                      key={highlight}
                    >
                      <div aria-hidden="true" className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Availability badge */}
            <motion.div
              className="glass-effect rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:justify-between hover:bg-white/5 transition-colors"
              variants={itemUp}
            >
              <div className="flex items-center gap-3">
                <div className="relative w-3 h-3">
                  {/* ping ripple */}
                  <span
                    className="pointer-events-none absolute inset-0 rounded-full bg-green-500 pulse-ring"
                    style={PULSE_TRANSFORM_STYLE}
                  />
                  {/* core pulse */}
                  <span className="relative block w-3 h-3 bg-green-500 rounded-full pulse-dot" />
                </div>
                <span className="text-light font-medium">Currently Available</span>
              </div>
              <span className="text-sm text-muted">Remote & On-site Roles</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - truly non-interactive */}
      <div
        aria-hidden="true"
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none ${
          prefersReducedMotion ? "" : "scroll-indicator"
        }`}
        role="presentation"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div
            className={`w-1.5 h-3 bg-white/50 rounded-full ${
              prefersReducedMotion ? "" : "scroll-dot"
            }`}
          />
        </div>
      </div>
    </section>
  );
}

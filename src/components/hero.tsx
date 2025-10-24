"use client";

import {
  ArrowRight,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  Palette,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

interface Stat {
  label: string;
  value: string;
  icon: ReactNode;
}

const CV_URL = process.env.NEXT_PUBLIC_CV_URL || "/cv.pdf";
const CV_FILENAME = process.env.NEXT_PUBLIC_CV_FILENAME || "Mayur_Dayal_Resume.pdf";

const columnVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" }, y: 0 },
};

const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.15, staggerChildren: 0.08 },
  },
};

const itemUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, transition: { duration: 0.45, ease: "easeOut" }, y: 0 },
};

export default function Hero() {
  const stats: Stat[] = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      label: "Years Experience",
      value: "3+",
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      label: "Projects Shipped",
      value: "10+",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      label: "Performance Boost",
      value: "30%",
    },
  ];

  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "Tailwind CSS",
    "Docker",
    "GitHub Actions",
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh"
      id="hero"
    >
      {/* Grain/Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 bg-repeat mix-blend-overlay"
        style={{
          backgroundImage: "url('/grain.svg')",
          opacity: 0.18,
        }}
      />

      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-dark/80" />

      <div
        className="absolute w-80 h-80 bg-primary/15 rounded-full blur-md"
        style={{ left: "5%", top: "10%" }}
      />
      <div
        className="absolute w-80 h-80 bg-secondary/15 rounded-full blur-md"
        style={{ bottom: "10%", right: "5%" }}
      />

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            animate="show"
            className="space-y-8"
            initial="hidden"
            variants={columnVariants}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 text-sm font-medium text-accent"
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
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                variants={itemUp}
              >
                <span className="block text-light">Hi, I'm Mayur.</span>
                <span className="block text-gradient">Full-Stack Engineer</span>
                <span className="block text-light">Fueled by AI.</span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-muted max-w-xl leading-relaxed"
                variants={itemUp}
              >
                I'm a versatile engineer with 3+ years of experience, specializing in{" "}
                <span className="text-accent font-semibold">React, Next.js, and TypeScript</span>.
                My passion is building high-performance, user-centric applications, from
                pixel-perfect UIs to scalable back-ends and AI-powered features.
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
                className="relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors glow-effect"
                initial="rest"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                type="button"
                variants={itemUp}
                whileHover="hover"
                whileTap="tap"
              >
                <span>View My Work</span>
                <motion.span
                  transition={{ damping: 22, stiffness: 400, type: "spring" }}
                  variants={{ hover: { x: 6 }, rest: { x: 0 }, tap: { x: 2 } }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>

              <motion.button
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass-effect hover:bg-white/10 text-light font-semibold rounded-xl border border-white/20 transition-colors"
                initial="rest"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = CV_URL;
                  link.download = CV_FILENAME;
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                type="button"
                variants={itemUp}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div className="flex items-center gap-4 pt-4" variants={itemUp}>
              <span className="text-sm text-muted">Connect:</span>
              <div className="flex gap-3">
                {[
                  {
                    href: "https://github.com/mayurDayal2000",
                    icon: <Github className="w-5 h-5" />,
                    label: "GitHub",
                  },
                  {
                    href: "https://www.linkedin.com/in/mayur-dayal/",
                    icon: <Linkedin className="w-5 h-5" />,
                    label: "LinkedIn",
                  },
                  {
                    href: "mailto:mayur.dayal5k@gmail.com",
                    icon: <Mail className="w-5 h-5" />,
                    label: "Email",
                  },
                ].map((social) => (
                  <motion.a
                    aria-label={social.label}
                    className="p-3 glass-effect rounded-lg hover:bg-primary/20 transition-colors"
                    href={social.href}
                    key={social.label}
                    rel="noopener noreferrer"
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-muted">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Stats & Tech Stack */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            variants={columnVariants}
            viewport={{ margin: "-80px", once: true }}
            whileInView="show"
          >
            {/* Stats Grid with stagger-in */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              initial="hidden"
              variants={staggerContainer}
              viewport={{ margin: "-80px", once: true }}
              whileInView="show"
            >
              {stats.map((stat) => (
                <motion.div
                  className="glass-effect rounded-2xl p-6 text-center hover:bg-white/10"
                  key={stat.label}
                  transition={{ damping: 20, stiffness: 260, type: "spring" }}
                  variants={itemUp}
                  whileHover={{ scale: 1.04 }}
                >
                  <div className="flex justify-center mb-3 text-accent">{stat.icon}</div>
                  <div className="text-3xl font-bold text-light mb-1">{stat.value}</div>
                  <div className="text-xs text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Featured Tech Stack Card */}
            <motion.div
              className="glass-effect rounded-2xl p-8 space-y-6 hover:bg-white/5 transition-colors"
              variants={itemUp}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-light">Tech Stack</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <motion.span
                    className="px-4 py-2 bg-dark-secondary/80 border border-white/10 rounded-lg text-sm text-light font-medium"
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Quick highlights */}
              <div className="pt-4 border-t border-white/10">
                <ul className="space-y-3">
                  {[
                    "Pixel-Perfect UI (from Figma)",
                    "Frontend Performance Optimization",
                    "Refactoring & Code Maintainability",
                  ].map((highlight) => (
                    <li
                      className="flex items-center gap-3 text-sm text-muted hover:text-light transition-colors"
                      key={highlight}
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Availability badge (motion pulse) */}
            <motion.div
              className="glass-effect rounded-2xl p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
              variants={itemUp}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  {/* ping ripple */}
                  <motion.span
                    animate={{ opacity: [0.6, 0, 0.6], scale: [1, 2, 1] }}
                    className="pointer-events-none absolute inset-0 rounded-full bg-green-500"
                    initial={{ opacity: 0.6, scale: 1 }}
                    style={{ transformOrigin: "center" }}
                    transition={{
                      duration: 2.4,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                  />
                  {/* core pulse */}
                  <motion.span
                    animate={{ opacity: [1, 0.9, 1], scale: [1, 1.08, 1] }}
                    className="relative block w-3 h-3 bg-green-500 rounded-full"
                    transition={{
                      duration: 1.6,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                  />
                </div>
                <span className="text-light font-medium">Currently Available</span>
              </div>
              <span className="text-sm text-muted">Remote & On-site Roles</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator (motion replaces animate-bounce) */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
        transition={{ duration: 1.4, ease: "easeInOut", repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ opacity: [0.35, 0.75, 0.35], y: [0, 4, 0] }}
            className="w-1.5 h-3 bg-white/50 rounded-full"
            transition={{ duration: 1.4, ease: "easeInOut", repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

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
import { type JSX, useEffect, useState } from "react";

interface Stat {
  label: string;
  value: string;
  icon: JSX.Element;
}

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

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
      {/* Interactive area for mouse tracking */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        onMouseMove={handleMouseMove}
        role="presentation"
      />

      {/* Grain/Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml;utf8,<svg viewBox="0 0 1920 1080" width="1920" height="1080" xmlns="http://www.w3.org/2000/svg"><filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3"/></filter><rect width="100%" height="100%" filter="url(%23grain)" opacity="0.18"/></svg>\')',
          backgroundRepeat: "repeat",
          mixBlendMode: "overlay",
          opacity: 0.18,
        }}
      />

      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-dark/80" />

      {/* Decorative floating elements */}
      <div
        className="absolute w-80 h-80 bg-primary/15 rounded-full blur-md float-animation"
        style={{
          left: "5%",
          top: "10%",
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          willChange: "transform",
        }}
      />
      <div
        className="absolute w-80 h-80 bg-secondary/15 rounded-full blur-md float-animation"
        style={{
          animationDelay: "2s",
          bottom: "10%",
          right: "5%",
          transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`,
          willChange: "transform",
        }}
      />

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 text-sm font-medium text-accent">
              <Sparkles className="w-4 h-4" />
              <span>Available for Freelance & Full-time</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-light">Hi, I'm Mayur.</span>
                <span className="block text-gradient">Full-Stack Engineer</span>
                <span className="block text-light">Fueled by AI.</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted max-w-xl leading-relaxed">
                I'm a versatile engineer with 3+ years of experience, specializing in{" "}
                <span className="text-accent font-semibold">React, Next.js, and TypeScript</span>.
                My passion is building high-performance, user-centric applications, from
                pixel-perfect UIs to scalable back-ends and AI-powered features.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 glow-effect"
                type="button"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 glass-effect hover:bg-white/10 text-light font-semibold rounded-xl transition-all duration-300 border border-white/20"
                type="button"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-4">
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
                  <a
                    aria-label={social.label}
                    className="group p-3 glass-effect hover:bg-primary/20 rounded-lg transition-all duration-300 hover:scale-110"
                    href={social.href}
                    key={social.label}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-muted group-hover:text-primary transition-colors">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Stats & Tech Stack */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <div
                  className="glass-effect rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer group"
                  key={stat.label}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex justify-center mb-3 text-accent group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-light mb-1">{stat.value}</div>
                  <div className="text-xs text-muted">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Featured Tech Stack Card */}
            <div className="glass-effect rounded-2xl p-8 space-y-6 hover:bg-white/5 transition-all duration-500">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-light">Tech Stack</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    className="px-4 py-2 bg-dark-secondary/80 hover:bg-primary/20 border border-white/10 hover:border-primary/30 rounded-lg text-sm text-light font-medium transition-all duration-300 hover:scale-105 cursor-pointer"
                    key={tech}
                  >
                    {tech}
                  </span>
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
                      className="flex items-center gap-3 text-sm text-muted group hover:text-light transition-colors"
                      key={highlight}
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Availability badge */}
            <div className="glass-effect rounded-2xl p-6 flex items-center justify-between hover:bg-white/5 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                </div>
                <span className="text-light font-medium">Currently Available</span>
              </div>
              <span className="text-sm text-muted">Remote & On-site Roles</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

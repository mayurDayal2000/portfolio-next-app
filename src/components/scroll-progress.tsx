"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Refs to avoid re-renders and coordinate RAF + throttle
  const tickingRef = useRef(false);
  const throttledRef = useRef(false);
  const lastScrollYRef = useRef(0);
  const lastUpdateTsRef = useRef(0);

  // Tune this based on UX needs (60–120ms is a good start)
  const THROTTLE_INTERVAL = 80; // ms

  // Compute progress using latest values
  const computeProgress = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = lastScrollYRef.current;

    const totalScroll = documentHeight - windowHeight;
    const progress = totalScroll <= 0 ? 100 : (scrollTop / totalScroll) * 100;

    setScrollProgress(progress);
    setIsVisible(scrollTop > 100);
  };

  // RAF-aligned, throttled update
  const requestTick = () => {
    if (tickingRef.current) return;
    tickingRef.current = true;

    window.requestAnimationFrame((ts) => {
      tickingRef.current = false;

      // Throttle to at most one update per interval, but align with RAF
      if (!throttledRef.current) {
        throttledRef.current = true;
        lastUpdateTsRef.current = ts;
        computeProgress();

        // Release throttle after interval
        window.setTimeout(() => {
          throttledRef.current = false;
        }, THROTTLE_INTERVAL);
      }
    });
  };

  useEffect(() => {
    const onScroll = () => {
      lastScrollYRef.current = Math.max(window.scrollY, 0);
      requestTick();
    };

    // Recompute on viewport resize
    const onResize = () => {
      requestTick();
    };

    // Observe document height changes (dynamic content/images)
    const ro = new ResizeObserver(() => {
      requestTick();
    });
    ro.observe(document.documentElement);

    // Passive listener for smooth native scrolling
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // Initial measurement
    lastScrollYRef.current = Math.max(window.scrollY, 0);
    computeProgress();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
    };
  }, []);

  return (
    <>
      {/* Main Progress Bar - Top */}
      <div
        aria-label="Page scroll progress"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={Math.round(scrollProgress)}
        className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none"
        role="progressbar"
      >
        {/* Background track with glass effect */}
        <div className="absolute inset-0 glass-effect opacity-30" />

        {/* Animated progress fill with gradient */}
        <div
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent relative overflow-hidden transition-transform duration-150 ease-out glow-effect progress-fill"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        >
          {/* Shimmer animation overlay */}
          <div className="absolute inset-0 shimmer" />

          {/* Pulse effect at the end */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/30 to-transparent" />
        </div>
      </div>

      {/* Circular Progress Indicator - Side */}
      {isVisible && (
        <div
          className="fixed right-6 bottom-6 z-40 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 group"
          style={{
            opacity: scrollProgress > 5 ? 1 : 0,
            transform: `scale(${scrollProgress > 5 ? 1 : 0.8})`,
          }}
        >
          <button
            aria-label="Scroll to top"
            className="relative w-14 h-14 glass-effect hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer border border-white/10"
            onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
            type="button"
          >
            {/* SVG Circular Progress */}
            <svg
              aria-label="Scroll progress indicator"
              className="absolute inset-0 w-full h-full -rotate-90"
              viewBox="0 0 100 100"
            >
              <title>Scroll progress indicator</title>
              {/* Background circle */}
              <circle
                className="text-muted/20"
                cx="50"
                cy="50"
                fill="none"
                r="45"
                stroke="currentColor"
                strokeWidth="4"
              />

              {/* Progress circle */}
              <circle
                className="transition-all duration-300 ease-out drop-shadow-lg"
                cx="50"
                cy="50"
                fill="none"
                r="45"
                stroke="url(#gradient)"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - scrollProgress / 100)}`}
                strokeLinecap="round"
                strokeWidth="4"
              />

              {/* Gradient definition */}
              <defs>
                <linearGradient id="gradient" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Arrow icon */}
            <svg
              className="w-5 h-5 text-light group-hover:text-primary transition-colors relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <title>Scroll to top</title>
              <path
                d="M5 10l7-7m0 0l7 7m-7-7v18"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </button>

          {/* Percentage tooltip */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="glass-effect px-3 py-1.5 rounded-lg text-xs font-semibold text-light whitespace-nowrap border border-white/10">
              {Math.round(scrollProgress)}%
            </div>
          </div>
        </div>
      )}
    </>
  );
}

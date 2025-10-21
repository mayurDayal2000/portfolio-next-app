"use client";

import { Briefcase, Home, Mail, User, Wrench } from "lucide-react";
import { type ReactNode, useEffect, useRef, useState } from "react";

interface Section {
  id: string;
  label: string;
  icon: ReactNode;
}

const sections: Section[] = [
  {
    icon: <Home className="w-4 h-4" />,
    id: "hero",
    label: "Home",
  },
  {
    icon: <User className="w-4 h-4" />,
    id: "about",
    label: "About",
  },
  {
    icon: <Wrench className="w-4 h-4" />,
    id: "skills",
    label: "Skills",
  },
  {
    icon: <Briefcase className="w-4 h-4" />,
    id: "projects",
    label: "Projects",
  },
  {
    icon: <Mail className="w-4 h-4" />,
    id: "contact",
    label: "Contact",
  },
];

export default function SectionIndicator() {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Keep a ref of the last active to avoid unnecessary state churn
  const activeRef = useRef("");

  // Visibility toggle (simple and cheap)
  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver drives active section
  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (!targets.length) return;

    // Track current intersection ratios for all sections
    const ratios = new Map<string, number>();
    const thresholds = Array.from({ length: 11 }, (_, i) => i / 10);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id;
          // Only count when intersecting; otherwise treat as 0
          ratios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        // Choose the section with the highest ratio
        let maxId = "";
        let maxRatio = -1;
        ratios.forEach((r, id) => {
          if (r > maxRatio) {
            maxRatio = r;
            maxId = id;
          }
        });
        if (maxId && activeRef.current !== maxId) {
          activeRef.current = maxId;
          setActiveSection(maxId);
        }
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: thresholds,
      }
    );

    targets.forEach((el) => {
      // Initialize with 0 so we always have a value
      ratios.set(el.id, 0);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (!isVisible) return null;

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="glass-effect rounded-2xl p-3 border border-white/10 space-y-3">
        {sections.map((section, index) => {
          const isActive = activeSection === section.id;

          return (
            <div className="relative group" key={section.id}>
              <button
                aria-current={isActive ? "location" : undefined}
                aria-label={`Navigate to ${section.label}`}
                className={`relative p-3 rounded-xl transition-all duration-300 flex items-center justify-center ${
                  isActive
                    ? "bg-gradient-to-r from-primary to-accent text-white scale-110 glow-effect"
                    : "bg-dark-secondary/50 text-muted hover:bg-primary/20 hover:text-primary hover:scale-105"
                }`}
                onClick={() =>
                  document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
                }
                type="button"
              >
                <span
                  className={`transition-transform duration-300 ${
                    isActive ? "scale-110" : "group-hover:scale-110"
                  }`}
                >
                  {section.icon}
                </span>

                {/* Active indicator dot */}
                {isActive && (
                  <span className="absolute -right-1 -top-1 w-2 h-2 bg-accent rounded-full animate-pulse" />
                )}
              </button>

              {/* Tooltip on hover */}
              <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <div className="glass-effect px-4 py-2 rounded-lg text-sm font-medium text-light whitespace-nowrap border border-white/10 shadow-xl">
                  {section.label}

                  {/* Arrow pointer */}
                  <div className="absolute left-full top-1/2 -translate-y-1/2 -ml-px">
                    <div className="w-2 h-2 bg-dark-secondary border-r border-b border-white/10 rotate-[-45deg] transform" />
                  </div>
                </div>
              </div>

              {/* Connection line */}
              {index < sections.length - 1 && (
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-3 transition-colors duration-300 ${
                    isActive ? "bg-primary/50" : "bg-muted/20"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}

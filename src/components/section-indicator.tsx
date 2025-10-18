"use client";

import { Briefcase, Home, Mail, User, Wrench } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";

interface Section {
  id: string;
  label: string;
  icon: ReactNode;
}

export default function SectionIndicator() {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);

      const sectionElements = sections.map((section) => ({
        element: document.getElementById(section.id),
        id: section.id,
      }));

      // Find which section is currently in view
      for (const { id, element } of sectionElements) {
        if (element) {
          const rect = element.getBoundingClientRect();
          const inView = rect.top <= 150 && rect.bottom >= 150;
          if (inView) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
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
                onClick={() => {
                  document.getElementById(section.id)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
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

import { Code2, Github, Linkedin, Mail, Sparkles, Zap } from "lucide-react";
import type { SocialLink, Stat } from "./hero.types";

export const STATS: Stat[] = [
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

export const TECH_STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "FastAPI",
  "Tailwind CSS",
  "Docker",
  "GitHub Actions",
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    ariaLabel: "GitHub profile",
    href: "https://github.com/mayurDayal2000",
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
  },
  {
    ariaLabel: "LinkedIn profile",
    href: "https://www.linkedin.com/in/mayur-dayal/",
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
  },
  {
    ariaLabel: "Email",
    href: "mailto:mayur.dayal5k@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
  },
];

export const KEY_HIGHLIGHTS = [
  "Pixel-Perfect UI (from Figma)",
  "Frontend Performance Optimization",
  "Refactoring & Code Maintainability",
];

import type { ReactNode } from "react";

export interface Stat {
  label: string;
  value: string;
  icon: ReactNode;
}

export interface SocialLink {
  href: string;
  icon: ReactNode;
  label: string;
  ariaLabel: string;
}

export interface HeroStatsProps {
  stats: Stat[];
  prefersReducedMotion: boolean;
}

export interface HeroTechStackProps {
  techStack: string[];
  highlights: string[];
  prefersReducedMotion: boolean;
}

export interface HeroSocialLinksProps {
  links: SocialLink[];
  prefersReducedMotion: boolean;
}

export interface HeroAvailabilityProps {
  prefersReducedMotion: boolean;
}

export interface HeroContentProps {
  prefersReducedMotion: boolean;
  isDownloading: boolean;
  isResumeAvailable: boolean;
  onDownloadResume: () => void;
}

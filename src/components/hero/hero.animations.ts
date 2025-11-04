import type { Variants } from "motion/react";

export const columnVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" }, y: 0 },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.05 },
  },
};

export const itemUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, transition: { duration: 0.45, ease: "easeOut" }, y: 0 },
};

export const HEADING_SHADOW_STYLE = {
  textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
} as const;

export const TEXT_SHADOW_STYLE = {
  textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
} as const;

export const PULSE_TRANSFORM_STYLE = { transformOrigin: "center" } as const;

"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface SkillBadgeProps {
  name: string;
  icon: React.ReactNode;
  badgeBg: string;
  badgeHover: string;
  color: string;
  borderColor: string;
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

export function SkillBadge({
  name,
  icon,
  badgeBg,
  badgeHover,
  color,
  borderColor,
}: SkillBadgeProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-label={`${name} technology`}
      className={`inline-flex items-center gap-2 px-4 py-2.5 ${badgeBg} ${badgeHover} ${color} rounded-lg border ${borderColor} cursor-default`}
      role="img"
      variants={badgeVariants}
      whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
      whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
    >
      <motion.span
        aria-hidden="true"
        transition={prefersReducedMotion ? {} : { duration: 0.2 }}
        whileHover={prefersReducedMotion ? {} : { rotate: 5, scale: 1.2 }}
      >
        {icon}
      </motion.span>
      <span className="text-sm font-medium text-light">{name}</span>
    </motion.div>
  );
}

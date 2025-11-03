"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import type { SkillCategory } from "../../data/skills";
import { SkillBadge } from "./skill-badge";

interface SkillCardProps {
  category: SkillCategory;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function SkillCard({ category }: SkillCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      aria-label={`${category.title} skills`}
      className={`glass-effect rounded-2xl p-6 lg:p-8 border ${category.borderColor} bg-gradient-to-br ${category.bgGradient}`}
      transition={{ duration: 0.3 }}
      variants={cardVariants}
      whileHover={prefersReducedMotion ? {} : { y: -5 }}
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          aria-hidden="true"
          className={`${category.iconBg} ${category.color} p-3 rounded-xl`}
          transition={prefersReducedMotion ? {} : { duration: 0.6, ease: "easeInOut" }}
          whileHover={prefersReducedMotion ? {} : { rotate: 360 }}
        >
          {category.icon}
        </motion.div>
        <h3 className={`text-2xl font-bold ${category.color}`}>{category.title}</h3>
      </div>

      {/* Skills Badges */}
      <motion.ul
        aria-label={`${category.title} technologies`}
        className="flex flex-wrap gap-3"
        variants={containerVariants}
      >
        {category.skills.map((skill) => (
          <li key={skill.name}>
            <SkillBadge
              badgeBg={category.badgeBg}
              badgeHover={category.badgeHover}
              borderColor={category.borderColor}
              color={category.color}
              icon={skill.icon}
              name={skill.name}
            />
          </li>
        ))}
      </motion.ul>
    </motion.article>
  );
}

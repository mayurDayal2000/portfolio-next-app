"use client";

import { motion } from "motion/react";
import { useMemo } from "react";
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
      staggerChildren: 0.05,
    },
  },
};

export function SkillCard({ category }: SkillCardProps) {
  const prefersReducedMotion = useReducedMotion();

  // Group skills by subcategory
  const groupedSkills = useMemo(() => {
    const groups: Record<string, typeof category.skills> = {};
    category.skills.forEach((skill) => {
      const subcategory = skill.subcategory || "Other";
      if (!groups[subcategory]) {
        groups[subcategory] = [];
      }
      groups[subcategory].push(skill);
    });
    return groups;
  }, [category.skills]);

  const skillCount = category.skills.length;

  return (
    <motion.article
      aria-label={`${category.title} skills`}
      className={`glass-effect rounded-2xl p-6 lg:p-8 border ${category.borderColor} bg-gradient-to-br ${category.bgGradient} flex flex-col`}
      transition={{ duration: 0.3 }}
      variants={cardVariants}
      whileHover={prefersReducedMotion ? {} : { boxShadow: "0 20px 40px rgba(0,0,0,0.3)", y: -5 }}
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
        <div>
          <h3 className={`text-2xl font-bold ${category.color}`}>{category.title}</h3>
          <p className="text-xs text-muted mt-0.5">{skillCount} skills</p>
        </div>
      </div>

      {/* Skills Content */}

      <div className="space-y-6">
        {Object.entries(groupedSkills).map(([subcategory, skills]) => (
          <div key={subcategory}>
            <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
              {subcategory}
            </h4>
            <motion.ul
              animate="visible"
              aria-label={`${subcategory} skills`}
              className="flex flex-wrap gap-3"
              initial="hidden"
              variants={containerVariants}
            >
              {skills.map((skill) => (
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
          </div>
        ))}
      </div>
    </motion.article>
  );
}

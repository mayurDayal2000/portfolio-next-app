import { motion } from "motion/react";

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
  return (
    <motion.div
      className={`inline-flex items-center gap-2 px-4 py-2.5 ${badgeBg} ${badgeHover} ${color} rounded-lg border ${borderColor} cursor-default`}
      variants={badgeVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span transition={{ duration: 0.2 }} whileHover={{ rotate: 5, scale: 1.2 }}>
        {icon}
      </motion.span>
      <span className="text-sm font-medium text-light">{name}</span>
    </motion.div>
  );
}

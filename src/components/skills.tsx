"use client";

import { Sparkles } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { skillCategories } from "../data/skills";
import { SkillCard } from "./ui/skill-card";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Skills() {
  return (
    <section className="relative py-24 lg:py-32 bg-dark-secondary overflow-hidden" id="skills">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 text-sm font-medium text-accent mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mt-4">
            A versatile toolkit refined over 3+ years. I learn what's needed and I build—from
            pixel-perfect UIs to scalable AI-powered backends.
          </p>
        </motion.div>

        {/* Skills Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          initial="hidden"
          variants={containerVariants}
          viewport={{ margin: "-100px", once: true }}
          whileInView="visible"
        >
          {skillCategories.map((category) => (
            <SkillCard category={category} key={category.title} />
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <p className="text-muted text-sm">
            Continuously learning and expanding my skill set to stay ahead in the ever-evolving tech
            landscape
          </p>
        </motion.div>
      </div>
    </section>
  );
}

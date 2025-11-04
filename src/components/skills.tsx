"use client";

import { Sparkles } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { useMemo, useState } from "react";
import { skillCategories } from "../data/skills";
import { SkillCard } from "./ui/skill-card";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Frontend");

  // Get all unique categories (without "All")
  const categories = useMemo(() => {
    return skillCategories.map((cat) => cat.title);
  }, []);

  // Filter categories based on selection
  const filteredCategories = useMemo(() => {
    return skillCategories.filter((cat) => cat.title === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      aria-labelledby="skills-heading"
      className="relative py-24 lg:py-32 bg-dark-secondary overflow-hidden"
      id="skills"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-blob gradient-blob-left opacity-30" />
        <div className="gradient-blob gradient-blob-right opacity-30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 text-sm font-medium text-accent mb-6">
            <Sparkles aria-hidden="true" className="w-4 h-4" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light" id="skills-heading">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mt-4">
            A versatile toolkit refined over 3+ years. I learn what's needed and I build—from
            pixel-perfect UIs to scalable AI-powered backends.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-3 items-center justify-center mb-12"
          initial={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          {categories.map((category) => (
            <button
              aria-pressed={selectedCategory === category}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "glass-effect text-muted hover:text-light hover:bg-white/5"
              }`}
              key={category}
              onClick={() => setSelectedCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Cards Grid - Full Width for Single Card */}
        <motion.div
          aria-label="Skills organized by category"
          className="max-w-5xl mx-auto"
          initial="hidden"
          key={selectedCategory}
          variants={containerVariants}
          viewport={{ margin: "-100px", once: true }}
          whileInView="visible"
        >
          {filteredCategories.map((category) => (
            <SkillCard category={category} key={category.title} />
          ))}
        </motion.div>

        {/* No results message */}
        {filteredCategories.length === 0 && (
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
            initial={{ opacity: 0, scale: 0.9 }}
          >
            <p className="text-muted text-lg">
              No skills match your current filters. Try adjusting your selection.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

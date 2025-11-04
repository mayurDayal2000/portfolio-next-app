// projects.tsx
"use client";

import { Rocket } from "lucide-react";
import { useMemo } from "react";
import { projects } from "@/data/projects";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { ProjectCard } from "./projects/ProjectCard";
import { FadeInOnce } from "./ui/fadeInOnce";

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();

  // Memoize featured and regular projects
  const featuredProjects = useMemo(() => projects.filter((p) => p.featured), []);

  const regularProjects = useMemo(() => projects.filter((p) => !p.featured), []);

  return (
    <section
      aria-labelledby="projects-heading"
      className="relative py-24 lg:py-32 bg-dark overflow-hidden"
      id="projects"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInOnce className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 text-sm font-medium text-accent mb-6">
            <Rocket aria-hidden="true" className="w-4 h-4" />
            <span>What I've Built</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light mb-6"
            id="projects-heading"
          >
            My Recent <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A selection of professional and personal projects that showcase my skills in full-stack
            development and passion for building AI-powered tools.
          </p>
        </FadeInOnce>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {/* Featured Projects */}
          {featuredProjects.map((project, i) => (
            <ProjectCard
              index={i}
              isFeatured={true}
              key={project.id}
              prefersReducedMotion={prefersReducedMotion}
              project={project}
            />
          ))}

          {/* Regular Projects */}
          {regularProjects.map((project, i) => (
            <ProjectCard
              index={i + featuredProjects.length}
              isFeatured={false}
              key={project.id}
              prefersReducedMotion={prefersReducedMotion}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

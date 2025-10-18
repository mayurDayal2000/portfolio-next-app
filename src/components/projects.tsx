// projects.tsx
"use client";

import { ArrowUpRight, ExternalLink, Filter, Github, Rocket, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FadeInOnce } from "./ui/fadeInOnce";

interface Project {
  id: string;
  title: string;
  description: string;
  category: "SaaS" | "AI Tool" | "Web App" | "Dev Tool" | "Website";
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  achievement?: string; // concise, 1-line, quantifiable business outcome
}

const projects: Project[] = [
  {
    achievement: "Increased user engagement by 30%.",
    category: "SaaS",
    description:
      "The core AI-powered developer dashboard for Penify, serving thousands of global users.",
    featured: true,
    githubUrl: "#",
    id: "1",
    liveUrl: "#",
    tags: ["Next.js", "TypeScript", "Redux", "FastAPI", "Tailwind"],
    title: "Penify.ai Developer Dashboard",
  },
  {
    achievement: "Personal project to streamline my own workflow.",
    category: "AI Tool",
    description:
      "An AI-powered tool that analyzes code diffs and automatically generates detailed Git commit messages.",
    featured: true,
    githubUrl: "#",
    id: "2",
    liveUrl: "#",
    tags: ["Python", "Transformers", "AI/ML", "CLI"],
    title: "AI Commit Message Generator",
  },
  {
    achievement: "Reduced dashboard load times by 30%.",
    category: "Web App",
    description:
      "A responsive learning dashboard for 9th-12th grade students at an EdTech startup.",
    featured: false,
    githubUrl: "#", // Private repo
    id: "3",
    liveUrl: "#",
    tags: ["React", "Bootstrap", "Sass", "JWT"],
    title: "ZinEdu Student Dashboard",
  },
  {
    category: "Dev Tool",
    description:
      "A VS Code extension for AI-driven code reviews with a polished React/TypeScript interface.",
    featured: false,
    githubUrl: "#",
    id: "4",
    liveUrl: "#",
    tags: ["React", "TypeScript", "VS Code API"],
    title: "Penify.ai VS Code Extension",
  },
  {
    category: "Website",
    description:
      "Custom WordPress theme and plugin development for a small business client during my freelance period.",
    featured: false,
    githubUrl: "#", // Private repo
    id: "5",
    liveUrl: "#",
    tags: ["PHP", "WordPress", "JavaScript", "CSS"],
    title: "Freelance Client Website",
  },
  {
    category: "AI Tool",
    description:
      "An in-progress personal project featuring a 3D model for interactive AI-driven user experiences.",
    featured: false,
    githubUrl: "#",
    id: "6",
    liveUrl: "#",
    tags: ["React", "Three.js", "AI/ML"],
    title: "3D AI Companion App",
  },
];

const categories = ["All", "SaaS", "AI Tool", "Web App", "Dev Tool", "Website"] as const;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const [transitioning, setTransitioning] = useState(true);

  // Animate cards in on first mount
  useEffect(() => {
    const timer = setTimeout(() => setTransitioning(false), 500); // 500ms is the animation duration
    return () => clearTimeout(timer);
  }, []);

  const handleFilter = (category: (typeof categories)[number]) => {
    if (activeCategory === category) return;
    setTransitioning(true); // Animate out
    setTimeout(() => {
      setActiveCategory(category);
      setTransitioning(false); // Animate in
    }, 300);
  };

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section
      aria-label="Projects"
      className="relative py-24 lg:py-32 bg-dark overflow-hidden"
      id="projects"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInOnce className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 text-sm font-medium text-accent mb-6">
            <Rocket className="w-4 h-4" />
            <span>What I've Built</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light mb-6">
            My Recent <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A selection of my professional and personal projects that showcase my skills in
            full-stack development and my passion for building AI-powered tools.
          </p>
        </FadeInOnce>

        {/* Category Filter */}
        <nav
          aria-label="Filter projects by category"
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <div className="flex items-center gap-2 text-muted">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              aria-pressed={activeCategory === category}
              className={cn(
                "px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                  : "glass-effect text-muted hover:text-light hover:bg-white/5"
              )}
              key={category}
              onClick={() => handleFilter(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </nav>

        {/* Projects Grid - Minimal Bento Layout */}
        <div
          className={cn(
            "grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500",
            transitioning ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
          )}
        >
          {/* Featured Projects */}
          {featuredProjects.map((project, i) => (
            <div
              className={cn(
                "glass-effect rounded-2xl p-8 flex flex-col justify-between shadow-lg border-2 border-primary/20 transition-transform transition-opacity duration-500",
                !transitioning && "opacity-100 translate-y-0",
                transitioning && "opacity-0 translate-y-6",
                `delay-${i * 100}`
              )}
              key={project.id}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-bold text-primary text-sm">Featured</span>
              </div>
              <span className="text-xs text-primary font-semibold">{project.category}</span>
              <h3 className="text-2xl font-bold text-light mb-2">{project.title}</h3>
              <p className="text-muted text-base mb-2">{project.description}</p>
              {project.achievement && (
                <div className="text-sm text-accent font-medium mb-4">{project.achievement}</div>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    className="px-3 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                {project.liveUrl && (
                  <a
                    className="inline-flex items-center gap-2 px-5 py-2 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-300"
                    href={project.liveUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Live <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    className="inline-flex items-center gap-2 px-5 py-2 glass-effect hover:bg-white/10 text-light font-semibold rounded-lg transition-all duration-300 border border-white/20"
                    href={project.githubUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* Regular Projects */}
          {regularProjects.map((project, i) => (
            <div
              className={cn(
                "glass-effect rounded-2xl p-7 flex flex-col justify-between border border-white/10 transition-transform transition-opacity duration-500",
                !transitioning && "opacity-100 translate-y-0",
                transitioning && "opacity-0 translate-y-6",
                `delay-${(featuredProjects.length + i) * 80}`
              )}
              key={project.id}
              style={{
                transitionDelay: `${(featuredProjects.length + i) * 80}ms`,
              }}
            >
              <span className="text-xs text-accent font-semibold mb-1">{project.category}</span>
              <h3 className="text-xl font-bold text-light mb-1">{project.title}</h3>
              <p className="text-muted text-base mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tags.map((tag) => (
                  <span
                    className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                {project.liveUrl && (
                  <a
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent text-accent hover:text-white font-semibold rounded-lg transition-all duration-300 text-sm"
                    href={project.liveUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Live <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    className="inline-flex items-center gap-2 px-4 py-2 glass-effect hover:bg-white/10 text-light font-semibold rounded-lg transition-all duration-300 text-sm border border-white/20"
                    href={project.githubUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

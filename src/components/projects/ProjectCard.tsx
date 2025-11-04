import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { memo } from "react";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";
import { GitHubButton } from "./GitHubButton";

interface ProjectCardProps {
  project: Project;
  index: number;
  isFeatured: boolean;
  prefersReducedMotion: boolean;
}

export const ProjectCard = memo(function ProjectCard({
  project,
  index,
  isFeatured,
  prefersReducedMotion,
}: ProjectCardProps) {
  const transitionDelay = prefersReducedMotion ? "0ms" : `${index * 100}ms`;

  if (isFeatured) {
    return (
      <article
        className={cn(
          "group glass-effect rounded-2xl p-8 flex flex-col shadow-xl border-2 transform-gpu",
          "border-primary/30 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5",
          !prefersReducedMotion &&
            "transition-all duration-500 animate-in fade-in-50 slide-in-from-bottom-4",
          !prefersReducedMotion &&
            "hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50",
          !prefersReducedMotion &&
            "focus-within:scale-[1.02] focus-within:shadow-2xl focus-within:border-primary/50"
        )}
        style={{ animationDelay: transitionDelay }}
      >
        <div className="mb-4 flex items-center gap-2">
          <Sparkles aria-hidden="true" className="w-5 h-5 text-primary animate-pulse" />
          <span className="font-bold text-primary text-sm uppercase tracking-wide">Featured</span>
        </div>

        <div className="mb-4">
          <h3
            className={cn(
              "text-3xl font-bold text-light mb-2 group-hover:text-gradient",
              !prefersReducedMotion && "transition-all duration-300"
            )}
          >
            {project.name}
          </h3>
          <span className="text-xs text-primary/80 font-semibold uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        <h4 className="text-xl font-semibold text-light/90 mb-3">{project.title}</h4>
        <p className="text-muted text-base mb-5 leading-relaxed">{project.description}</p>

        <div className="mb-5">
          <p className="text-sm font-semibold text-light/70 mb-2">Tech Stack:</p>
          <ul
            aria-label="Technologies used"
            className="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent"
          >
            {project.tags.map((tag) => (
              <li key={tag}>
                <span className="px-3 py-1.5 bg-primary/15 text-primary rounded-lg text-xs font-semibold whitespace-nowrap border border-primary/20">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label={`Links for ${project.name}`} className="flex flex-wrap gap-3 mt-auto">
          <GitHubButton githubUrl={project.githubUrl} prefersReducedMotion={prefersReducedMotion} />
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              aria-label={`View live demo of ${project.name}`}
              className={cn(
                "inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transform-gpu",
                !prefersReducedMotion &&
                  "transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
              )}
              href={project.liveUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Live Demo <ExternalLink aria-hidden="true" className="w-4 h-4" />
            </a>
          )}
        </nav>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group glass-effect rounded-2xl p-7 flex flex-col border border-white/10 transform-gpu",
        !prefersReducedMotion &&
          "transition-all duration-500 animate-in fade-in-50 slide-in-from-bottom-4",
        !prefersReducedMotion &&
          "hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/10 hover:border-accent/30 hover:bg-white/5",
        !prefersReducedMotion &&
          "focus-within:scale-[1.02] focus-within:shadow-xl focus-within:border-accent/30"
      )}
      style={{ animationDelay: transitionDelay }}
    >
      <div className="mb-4">
        <h3
          className={cn(
            "text-2xl font-bold text-light mb-2 group-hover:text-accent",
            !prefersReducedMotion && "transition-colors duration-300"
          )}
        >
          {project.name}
        </h3>
        <span className="text-xs text-accent/80 font-semibold uppercase tracking-wider">
          {project.category}
        </span>
      </div>

      <h4 className="text-lg font-semibold text-light/90 mb-3">{project.title}</h4>
      <p className="text-muted text-base mb-4 leading-relaxed">{project.description}</p>

      <div className="mb-4">
        <p className="text-sm font-semibold text-light/70 mb-2">Tech Stack:</p>
        <ul
          aria-label="Technologies used"
          className="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-accent/20 scrollbar-track-transparent"
        >
          {project.tags.map((tag) => (
            <li key={tag}>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-lg text-xs font-semibold whitespace-nowrap border border-accent/20">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <nav aria-label={`Links for ${project.name}`} className="flex flex-wrap gap-2 mt-auto">
        <GitHubButton
          githubUrl={project.githubUrl}
          prefersReducedMotion={prefersReducedMotion}
          size="small"
        />
        {project.liveUrl && project.liveUrl !== "#" && (
          <a
            aria-label={`View live demo of ${project.name}`}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent text-accent hover:text-white font-semibold rounded-lg text-sm transform-gpu",
              !prefersReducedMotion &&
                "transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-105"
            )}
            href={project.liveUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Live Demo <ArrowUpRight aria-hidden="true" className="w-4 h-4" />
          </a>
        )}
      </nav>
    </article>
  );
});

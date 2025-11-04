import { Github } from "lucide-react";
import { memo } from "react";
import { isPrivateRepo } from "@/data/projects";
import { cn } from "@/lib/utils";

interface GitHubButtonProps {
  githubUrl?: string;
  className?: string;
  size?: "default" | "small";
  prefersReducedMotion?: boolean;
}

export const GitHubButton = memo(function GitHubButton({
  githubUrl,
  className,
  size = "default",
  prefersReducedMotion = false,
}: GitHubButtonProps) {
  const isPrivate = isPrivateRepo(githubUrl);
  const isSmall = size === "small";

  const buttonClasses = cn(
    "inline-flex items-center gap-2 glass-effect font-semibold rounded-lg border",
    !prefersReducedMotion && "transition-all duration-300",
    isSmall ? "px-4 py-2 text-sm" : "px-5 py-2.5",
    isPrivate
      ? "text-light/40 border-white/10 cursor-not-allowed"
      : cn(
          "text-light border-white/20 hover:bg-white/10 hover:border-white/40 transform-gpu",
          !prefersReducedMotion && "hover:shadow-md hover:scale-105"
        ),
    className
  );

  if (isPrivate) {
    return (
      <div className="relative inline-block group/github">
        <button className={buttonClasses} disabled type="button">
          <Github className="w-4 h-4" /> Code
        </button>
        {/* Tooltip */}
        <div
          className={cn(
            "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 invisible group-hover/github:opacity-100 group-hover/github:visible pointer-events-none z-10",
            !prefersReducedMotion && "transition-all duration-200"
          )}
        >
          Private Repository
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900" />
        </div>
      </div>
    );
  }

  return (
    <a
      aria-label="View source code on GitHub"
      className={buttonClasses}
      href={githubUrl}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Github aria-hidden="true" className="w-4 h-4" /> Code
    </a>
  );
});

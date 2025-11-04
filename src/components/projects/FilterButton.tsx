import { memo } from "react";
import { cn } from "@/lib/utils";
import type { ProjectCategory } from "@/types/project";

interface FilterButtonProps {
  category: ProjectCategory;
  isActive: boolean;
  isTransitioning: boolean;
  onClick: (category: ProjectCategory) => void;
  prefersReducedMotion: boolean;
}

export const FilterButton = memo(function FilterButton({
  category,
  isActive,
  isTransitioning,
  onClick,
  prefersReducedMotion,
}: FilterButtonProps) {
  return (
    <button
      aria-describedby="filter-label"
      aria-label={`Show ${category} projects`}
      aria-pressed={isActive}
      className={cn(
        "px-5 py-2.5 rounded-xl font-medium text-sm whitespace-nowrap transform-gpu",
        !prefersReducedMotion && "transition-all duration-300",
        isActive
          ? cn(
              "bg-primary text-white shadow-lg shadow-primary/30",
              !prefersReducedMotion && "scale-105"
            )
          : cn(
              "glass-effect text-muted hover:text-light hover:bg-white/10",
              !prefersReducedMotion && "hover:scale-105 hover:shadow-md"
            ),
        isTransitioning && !isActive && "shimmer opacity-50 cursor-wait"
      )}
      disabled={isTransitioning}
      onClick={() => onClick(category)}
      type="button"
    >
      {category}
    </button>
  );
});

import { PackageOpen } from "lucide-react";
import { memo } from "react";
import { cn } from "@/lib/utils";
import type { ProjectCategory } from "@/types/project";

interface EmptyStateProps {
  activeCategory: ProjectCategory;
  onViewAll: () => void;
  prefersReducedMotion: boolean;
}

export const EmptyState = memo(function EmptyState({
  activeCategory,
  onViewAll,
  prefersReducedMotion,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-20",
        !prefersReducedMotion && "animate-in fade-in-50 duration-500"
      )}
    >
      <div className="glass-effect rounded-2xl p-12 max-w-md text-center border border-white/10">
        <PackageOpen aria-hidden="true" className="w-16 h-16 text-muted/50 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-light mb-3">No Projects Found</h3>
        <p className="text-muted mb-6">
          No projects match the <span className="text-accent font-semibold">{activeCategory}</span>{" "}
          category yet.
        </p>
        <button
          className={cn(
            "inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transform-gpu",
            !prefersReducedMotion &&
              "transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
          )}
          onClick={onViewAll}
          type="button"
        >
          View All Projects
        </button>
      </div>
    </div>
  );
});

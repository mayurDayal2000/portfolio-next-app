import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FadeInOnceProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number | number[];
}

export function FadeInOnce({ children, className, delay = 0, threshold = 0.1 }: FadeInOnceProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-inview", "true");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      className={cn(
        // initial hidden state
        "opacity-0 translate-y-6 will-change-transform transition-all duration-700 ease-out",
        // visible state toggled by data attribute
        "data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0",
        className
      )}
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

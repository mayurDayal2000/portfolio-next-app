export interface Project {
  id: string;
  name: string;
  title: string;
  description: string;
  category: "SaaS" | "AI Tool" | "Dev Tool";
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export type ProjectCategory = "All" | "SaaS" | "AI Tool" | "Dev Tool";

export const categories: readonly ProjectCategory[] = [
  "All",
  "SaaS",
  "AI Tool",
  "Dev Tool",
] as const;

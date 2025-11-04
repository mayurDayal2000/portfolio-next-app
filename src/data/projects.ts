import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    category: "AI Tool",
    description:
      "An AI-powered CLI tool that analyzes code diffs and automatically generates detailed Git commit messages following Conventional Commits specification. Published on PyPI.",
    featured: true,
    githubUrl: "https://github.com/maadhav-codes/diff2commit",
    id: "1",
    liveUrl: "https://pypi.org/project/diff2commit/",
    name: "diff2commit",
    tags: ["Python", "Typer", "Rich", "GitPython", "OpenAI API"],
    title: "AI Commit Message Generator",
  },
  {
    category: "SaaS",
    description:
      "Built SEO-optimized, responsive landing page with server-side rendering for a GitHub App that automates code documentation using LLMs.",
    featured: false,
    id: "2",
    liveUrl: "https://www.penify.dev/",
    name: "Penify Landing Page",
    tags: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "React Flow",
      "AOS",
      "React Hook Form",
      "OpenCage Geocoding API",
    ],
    title: "Marketing Website for AI Documentation Tool",
  },
  {
    category: "SaaS",
    description:
      "Developed responsive admin dashboard for managing automated documentation generation, repository integrations, and monitoring docstring updates across GitHub projects.",
    featured: false,
    id: "3",
    liveUrl: "https://dashboard.penify.dev/",
    name: "Penify Dashboard",
    tags: [
      "React.js",
      "TypeScript",
      "Ant Design",
      "Redux",
      "Axios",
      "Framer Motion",
      "Recharts",
      "Styled Components",
    ],
    title: "Developer Dashboard for AI Documentation Platform",
  },
];

// Helper function to check if GitHub repo is private
export const isPrivateRepo = (githubUrl?: string): boolean => {
  return !githubUrl || githubUrl === "#" || githubUrl.trim() === "";
};

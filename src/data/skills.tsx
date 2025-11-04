import {
  Brain,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Github,
  Globe,
  Lock,
  Palette,
  Rocket,
  Server,
  Settings,
} from "lucide-react";

export interface Skill {
  name: string;
  icon: React.ReactNode;
  subcategory?: string;
}

export interface SkillCategory {
  title: string;
  color: string;
  bgGradient: string;
  borderColor: string;
  icon: React.ReactNode;
  iconBg: string;
  badgeBg: string;
  badgeHover: string;
  skills: Skill[];
  priority: "primary" | "secondary"; // For visual hierarchy
}

export const skillCategories: SkillCategory[] = [
  {
    badgeBg: "bg-blue-500/10",
    badgeHover: "hover:bg-blue-500/20",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/30",
    color: "text-blue-400",
    icon: <Palette className="w-6 h-6" />,
    iconBg: "bg-blue-500/20",
    priority: "primary",
    skills: [
      {
        icon: <Globe className="w-4 h-4" />,
        name: "HTML5/CSS3",
        subcategory: "Languages",
      },
      {
        icon: <Code2 className="w-4 h-4" />,
        name: "JavaScript (ES6+)",
        subcategory: "Languages",
      },
      {
        icon: <Code2 className="w-4 h-4" />,
        name: "TypeScript",
        subcategory: "Languages",
      },
      {
        icon: <FileCode2 className="w-4 h-4" />,
        name: "React.js",
        subcategory: "Frameworks",
      },
      {
        icon: <Rocket className="w-4 h-4" />,
        name: "Next.js",
        subcategory: "Frameworks",
      },
      {
        icon: <FileCode2 className="w-4 h-4" />,
        name: "Redux",
        subcategory: "State Management",
      },
      {
        icon: <FileCode2 className="w-4 h-4" />,
        name: "Zustand",
        subcategory: "State Management",
      },
      {
        icon: <Palette className="w-4 h-4" />,
        name: "TailwindCSS",
        subcategory: "Styling",
      },
      {
        icon: <Palette className="w-4 h-4" />,
        name: "Bootstrap",
        subcategory: "Styling",
      },
      {
        icon: <Palette className="w-4 h-4" />,
        name: "Material UI",
        subcategory: "Styling",
      },
      {
        icon: <Globe className="w-4 h-4" />,
        name: "Responsive Design",
        subcategory: "Design",
      },
      {
        icon: <Globe className="w-4 h-4" />,
        name: "Accessibility (WCAG)",
        subcategory: "Design",
      },
      {
        icon: <Globe className="w-4 h-4" />,
        name: "Progressive Web Apps",
        subcategory: "Design",
      },
    ],
    title: "Frontend",
  },
  {
    badgeBg: "bg-green-500/10",
    badgeHover: "hover:bg-green-500/20",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    borderColor: "border-green-500/30",
    color: "text-green-400",
    icon: <Server className="w-6 h-6" />,
    iconBg: "bg-green-500/20",
    priority: "primary",
    skills: [
      {
        icon: <Code2 className="w-4 h-4" />,
        name: "Node.js",
        subcategory: "Languages",
      },
      {
        icon: <Code2 className="w-4 h-4" />,
        name: "Python",
        subcategory: "Languages",
      },
      {
        icon: <Rocket className="w-4 h-4" />,
        name: "Express.js",
        subcategory: "Frameworks",
      },
      {
        icon: <Rocket className="w-4 h-4" />,
        name: "FastAPI",
        subcategory: "Frameworks",
      },
      {
        icon: <Server className="w-4 h-4" />,
        name: "RESTful APIs",
        subcategory: "Architecture",
      },
      {
        icon: <Server className="w-4 h-4" />,
        name: "Load Balancing",
        subcategory: "Architecture",
      },
      {
        icon: <Database className="w-4 h-4" />,
        name: "PostgreSQL",
        subcategory: "Databases",
      },
      {
        icon: <Database className="w-4 h-4" />,
        name: "MongoDB",
        subcategory: "Databases",
      },
      {
        icon: <Database className="w-4 h-4" />,
        name: "Firebase",
        subcategory: "Databases",
      },
      {
        icon: <Database className="w-4 h-4" />,
        name: "Supabase",
        subcategory: "Databases",
      },
      {
        icon: <Server className="w-4 h-4" />,
        name: "Redis",
        subcategory: "Caching",
      },
      {
        icon: <Lock className="w-4 h-4" />,
        name: "OAuth & JWT",
        subcategory: "Security",
      },
    ],
    title: "Backend",
  },
  {
    badgeBg: "bg-orange-500/10",
    badgeHover: "hover:bg-orange-500/20",
    bgGradient: "from-orange-500/10 to-amber-500/10",
    borderColor: "border-orange-500/30",
    color: "text-orange-400",
    icon: <Settings className="w-6 h-6" />,
    iconBg: "bg-orange-500/20",
    priority: "secondary",
    skills: [
      {
        icon: <Server className="w-4 h-4" />,
        name: "Linux",
        subcategory: "Systems",
      },
      {
        icon: <Server className="w-4 h-4" />,
        name: "GCP",
        subcategory: "Systems",
      },
      {
        icon: <Server className="w-4 h-4" />,
        name: "Microsoft Azure",
        subcategory: "Systems",
      },
      {
        icon: <GitBranch className="w-4 h-4" />,
        name: "Git",
        subcategory: "Version Control",
      },
      {
        icon: <Server className="w-4 h-4" />,
        name: "Docker",
        subcategory: "Containerization",
      },
      {
        icon: <Settings className="w-4 h-4" />,
        name: "Kubernetes",
        subcategory: "Containerization",
      },
      {
        icon: <Settings className="w-4 h-4" />,
        name: "CI/CD",
        subcategory: "Automation",
      },
      {
        icon: <Github className="w-4 h-4" />,
        name: "GitHub Actions",
        subcategory: "Automation",
      },
    ],
    title: "DevOps",
  },
  {
    badgeBg: "bg-purple-500/10",
    badgeHover: "hover:bg-purple-500/20",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-500/30",
    color: "text-purple-400",
    icon: <Brain className="w-6 h-6" />,
    iconBg: "bg-purple-500/20",
    priority: "secondary",
    skills: [
      {
        icon: <Code2 className="w-4 h-4" />,
        name: "Python",
        subcategory: "Languages",
      },
      {
        icon: <Brain className="w-4 h-4" />,
        name: "PyTorch",
        subcategory: "Frameworks",
      },
      {
        icon: <Brain className="w-4 h-4" />,
        name: "Ollama",
        subcategory: "Systems",
      },
      {
        icon: <Brain className="w-4 h-4" />,
        name: "Hugging Face",
        subcategory: "Systems",
      },
      {
        icon: <Brain className="w-4 h-4" />,
        name: "OpenAI API",
        subcategory: "Systems",
      },
    ],
    title: "AI/ML",
  },
];

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
    skills: [
      { icon: <Globe className="w-4 h-4" />, name: "HTML5/CSS3" },
      { icon: <Palette className="w-4 h-4" />, name: "Bootstrap" },
      { icon: <Code2 className="w-4 h-4" />, name: "JavaScript" },
      {
        icon: <Globe className="w-4 h-4" />,
        name: "Responsive and Mobile-First Design",
      },
      { icon: <FileCode2 className="w-4 h-4" />, name: "React.js" },
      { icon: <Code2 className="w-4 h-4" />, name: "TypeScript" },
      { icon: <Palette className="w-4 h-4" />, name: "TailwindCSS" },
      { icon: <FileCode2 className="w-4 h-4" />, name: "Redux" },
      { icon: <FileCode2 className="w-4 h-4" />, name: "Zustand" },
      { icon: <Rocket className="w-4 h-4" />, name: "Next.js" },
      { icon: <Palette className="w-4 h-4" />, name: "Figma" },
      { icon: <Globe className="w-4 h-4" />, name: "Progressive Web Apps" },
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
    skills: [
      { icon: <Code2 className="w-4 h-4" />, name: "Node.js" },
      { icon: <Rocket className="w-4 h-4" />, name: "Express.js" },
      { icon: <Code2 className="w-4 h-4" />, name: "Python" },
      { icon: <Rocket className="w-4 h-4" />, name: "Fastify" },
      {
        icon: <Server className="w-4 h-4" />,
        name: "RESTful API Design and Development",
      },
      { icon: <Database className="w-4 h-4" />, name: "PostgreSQL" },
      { icon: <Database className="w-4 h-4" />, name: "MongoDB" },
      { icon: <Database className="w-4 h-4" />, name: "Firebase" },
      { icon: <Database className="w-4 h-4" />, name: "Supabase" },
      { icon: <Lock className="w-4 h-4" />, name: "OAuth, JWT" },
      { icon: <Server className="w-4 h-4" />, name: "Redis" },
      {
        icon: <Server className="w-4 h-4" />,
        name: "Load Balancing and Scaling",
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
    skills: [
      { icon: <Server className="w-4 h-4" />, name: "Linux" },
      { icon: <GitBranch className="w-4 h-4" />, name: "Git" },
      { icon: <Server className="w-4 h-4" />, name: "Docker" },
      { icon: <Settings className="w-4 h-4" />, name: "CI/CD Pipelines" },
      { icon: <Settings className="w-4 h-4" />, name: "Kubernetes" },
      { icon: <Github className="w-4 h-4" />, name: "GitHub Actions" },
      {
        icon: <Settings className="w-4 h-4" />,
        name: "Monitoring and Logging",
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
    skills: [
      { icon: <Code2 className="w-4 h-4" />, name: "Python" },
      { icon: <Brain className="w-4 h-4" />, name: "PyTorch" },
      {
        icon: <Brain className="w-4 h-4" />,
        name: "Natural Language Processing",
      },
    ],
    title: "AI/ML",
  },
];

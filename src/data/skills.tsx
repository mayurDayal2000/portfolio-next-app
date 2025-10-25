import {
  FaBrain,
  FaCode,
  FaDatabase,
  FaFileCode,
  FaGears,
  FaGitAlt,
  FaGithub,
  FaGlobe,
  FaLock,
  FaPalette,
  FaRocket,
  FaServer,
} from "react-icons/fa6";

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
    icon: <FaPalette className="w-6 h-6" />,
    iconBg: "bg-blue-500/20",
    skills: [
      { icon: <FaGlobe className="w-4 h-4" />, name: "HTML5/CSS3" },
      { icon: <FaPalette className="w-4 h-4" />, name: "Bootstrap" },
      { icon: <FaFileCode className="w-4 h-4" />, name: "JavaScript" },
      {
        icon: <FaGlobe className="w-4 h-4" />,
        name: "Responsive and Mobile-First Design",
      },
      { icon: <FaFileCode className="w-4 h-4" />, name: "React.js" },
      { icon: <FaCode className="w-4 h-4" />, name: "TypeScript" },
      { icon: <FaPalette className="w-4 h-4" />, name: "TailwindCSS" },
      { icon: <FaFileCode className="w-4 h-4" />, name: "Redux" },
      { icon: <FaFileCode className="w-4 h-4" />, name: "Zustand" },
      { icon: <FaRocket className="w-4 h-4" />, name: "Next.js" },
      { icon: <FaPalette className="w-4 h-4" />, name: "Figma" },
      { icon: <FaGlobe className="w-4 h-4" />, name: "Progressive Web Apps" },
    ],
    title: "Frontend",
  },
  {
    badgeBg: "bg-green-500/10",
    badgeHover: "hover:bg-green-500/20",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    borderColor: "border-green-500/30",
    color: "text-green-400",
    icon: <FaServer className="w-6 h-6" />,
    iconBg: "bg-green-500/20",
    skills: [
      { icon: <FaCode className="w-4 h-4" />, name: "Node.js" },
      { icon: <FaRocket className="w-4 h-4" />, name: "Express.js" },
      { icon: <FaCode className="w-4 h-4" />, name: "Python" },
      { icon: <FaRocket className="w-4 h-4" />, name: "Fastify" },
      {
        icon: <FaServer className="w-4 h-4" />,
        name: "RESTful API Design and Development",
      },
      { icon: <FaDatabase className="w-4 h-4" />, name: "PostgreSQL" },
      { icon: <FaDatabase className="w-4 h-4" />, name: "MongoDB" },
      { icon: <FaDatabase className="w-4 h-4" />, name: "Firebase" },
      { icon: <FaDatabase className="w-4 h-4" />, name: "Supabase" },
      { icon: <FaLock className="w-4 h-4" />, name: "OAuth, JWT" },
      { icon: <FaServer className="w-4 h-4" />, name: "Redis" },
      {
        icon: <FaServer className="w-4 h-4" />,
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
    icon: <FaGears className="w-6 h-6" />,
    iconBg: "bg-orange-500/20",
    skills: [
      { icon: <FaServer className="w-4 h-4" />, name: "Linux" },
      { icon: <FaGitAlt className="w-4 h-4" />, name: "Git" },
      { icon: <FaServer className="w-4 h-4" />, name: "Docker" },
      { icon: <FaGears className="w-4 h-4" />, name: "CI/CD Pipelines" },
      { icon: <FaGears className="w-4 h-4" />, name: "Kubernetes" },
      { icon: <FaGithub className="w-4 h-4" />, name: "GitHub Actions" },
      { icon: <FaGears className="w-4 h-4" />, name: "Monitoring and Logging" },
    ],
    title: "DevOps",
  },
  {
    badgeBg: "bg-purple-500/10",
    badgeHover: "hover:bg-purple-500/20",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-500/30",
    color: "text-purple-400",
    icon: <FaBrain className="w-6 h-6" />,
    iconBg: "bg-purple-500/20",
    skills: [
      { icon: <FaCode className="w-4 h-4" />, name: "Python" },
      { icon: <FaBrain className="w-4 h-4" />, name: "PyTorch" },
      {
        icon: <FaBrain className="w-4 h-4" />,
        name: "Natural Language Processing",
      },
    ],
    title: "AI/ML",
  },
];

"use client";

import {
  Blocks,
  Brain,
  Code2,
  Database,
  FileCode,
  GitBranch,
  Github,
  Globe,
  Lightbulb,
  MessageSquare,
  Palette,
  Rocket,
  Server,
  Smartphone,
  Sparkles,
  Target,
  Terminal,
  ToolCase,
  Zap,
} from "lucide-react";

interface SkillCard {
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const frontendSkills: SkillCard[] = [
  {
    color: "text-primary",
    description: "Hooks, state, context, and refactoring legacy class components.",
    icon: <FileCode className="w-5 h-5" />,
    name: "React",
  },
  {
    color: "text-primary",
    description: "SEO-optimized sites, App Router, and server-side rendering.",
    icon: <Rocket className="w-5 h-5" />,
    name: "Next.js",
  },
  {
    color: "text-accent",
    description: "Type-safety for scalable UIs and even VS Code extensions.",
    icon: <Code2 className="w-5 h-5" />,
    name: "TypeScript",
  },
  {
    color: "text-primary",
    description: "Utility-first CSS for rapid, responsive UI development.",
    icon: <Palette className="w-5 h-5" />,
    name: "Tailwind CSS",
  },
  {
    color: "text-accent",
    description: "Global state management for complex developer dashboards.",
    icon: <Blocks className="w-5 h-5" />,
    name: "Redux",
  },
  {
    color: "text-primary",
    description: "Converting designs into pixel-perfect, responsive code.",
    icon: <Palette className="w-5 h-5" />,
    name: "Figma",
  },
  {
    color: "text-accent",
    description: "ES6+, async/await, and modern DOM manipulation.",
    icon: <Code2 className="w-5 h-5" />,
    name: "JavaScript",
  },
  {
    color: "text-primary",
    description: "Semantic markup, advanced CSS, and accessibility.",
    icon: <Globe className="w-5 h-5" />,
    name: "HTML5/CSS3",
  },
];

const backendSkills: SkillCard[] = [
  {
    color: "text-primary",
    description: "Core language for backend, automation, and AI/ML.",
    icon: <Code2 className="w-5 h-5" />,
    name: "Python",
  },
  {
    color: "text-accent",
    description: "Building high-performance, async APIs (my go-to).",
    icon: <Code2 className="w-5 h-5" />,
    name: "FastAPI",
  },
  {
    color: "text-primary",
    description: "Designing, building, and consuming RESTful services.",
    icon: <Server className="w-5 h-5" />,
    name: "REST APIs",
  },
  {
    color: "text-accent",
    description: "Relational DBs, schema design, and SQL queries.",
    icon: <Database className="w-5 h-5" />,
    name: "PostgreSQL",
  },
  {
    color: "text-primary",
    description: "NoSQL document storage and aggregation pipelines.",
    icon: <Database className="w-5 h-5" />,
    name: "MongoDB",
  },
  {
    color: "text-accent",
    description: "Custom themes & plugins (from my freelance days).",
    icon: <Code2 className="w-5 h-5" />,
    name: "PHP",
  },
];

const aiAndMlSkills: SkillCard[] = [
  {
    color: "text-primary",
    description: "Integrating LLMs and other models into web applications.",
    icon: <Brain className="w-5 h-5" />,
    name: "AI/ML Integration",
  },
  {
    color: "text-accent",
    description: "Building my own tools, like AI commit generators.",
    icon: <Sparkles className="w-5 h-5" />,
    name: "AI-Powered Tooling",
  },
  {
    color: "text-primary",
    description: "Using libraries like Pandas, NumPy for data tasks.",
    icon: <Code2 className="w-5 h-5" />,
    name: "Python (AI/ML)",
  },
];

const devopsAndTools: SkillCard[] = [
  {
    color: "text-primary",
    description: "Containerization for consistent dev/prod environments.",
    icon: <Server className="w-5 h-5" />,
    name: "Docker",
  },
  {
    color: "text-accent",
    description: "CI/CD pipelines for automated testing and deployment.",
    icon: <Github className="w-5 h-5" />,
    name: "GitHub Actions",
  },
  {
    color: "text-primary",
    description: "Version control, branching strategies, and team collaboration.",
    icon: <GitBranch className="w-5 h-5" />,
    name: "Git",
  },
  {
    color: "text-accent",
    description: "My primary editor; I even build extensions for it.",
    icon: <Terminal className="w-5 h-5" />,
    name: "VS Code",
  },
];

const softSkills: SkillCard[] = [
  {
    color: "text-primary",
    description: "Agile sprints, stand-ups, and backlog grooming.",
    icon: <ToolCase className="w-5 h-5" />,
    name: "Agile/JIRA",
  },
  {
    color: "text-accent",
    description: "Debugging, learning new tech to get the job done.",
    icon: <Target className="w-5 h-5" />,
    name: "Problem Solving",
  },
  {
    color: "text-primary",
    description: "Working in teams, code reviews, and clear documentation.",
    icon: <MessageSquare className="w-5 h-5" />,
    name: "Team Collaboration",
  },
  {
    color: "text-accent",
    description: "Passionate about learning and applying new technologies.",
    icon: <Lightbulb className="w-5 h-5" />,
    name: "Adaptability",
  },
];

const specializations = [
  {
    description: "Pixel-perfect, accessible layouts for all devices.",
    icon: <Smartphone className="w-6 h-6" />,
    name: "Responsive Design",
  },
  {
    description: "Speed, Core Web Vitals, and smooth user flows.",
    icon: <Zap className="w-6 h-6" />,
    name: "Performance Optimization",
  },
  {
    description: "WCAG and inclusive experiences for everyone.",
    icon: <Globe className="w-6 h-6" />,
    name: "Web Accessibility",
  },
];

export default function Skills() {
  return (
    <section className="relative py-24 lg:py-32 bg-dark-secondary overflow-hidden" id="skills">
      {/* Decorative elements unchanged */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 text-sm font-medium text-accent mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mt-4">
            A versatile toolkit refined over 3+ years. I learn what's needed and I build—from
            pixel-perfect UIs to scalable AI-powered backends.
          </p>
        </div>

        {/* Frontend */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-primary mb-4">Frontend</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {frontendSkills.map((skill) => (
              <div
                className={`glass-effect rounded-2xl p-6 hover:bg-primary/10 transition-all duration-300 group`}
                key={skill.name}
              >
                <div className="flex items-start space-x-4">
                  <div className={`${skill.color}`}>{skill.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-1 text-light">{skill.name}</h4>
                    <p className="text-muted text-sm leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-secondary mb-4">Backend</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {backendSkills.map((skill) => (
              <div
                className={`glass-effect rounded-2xl p-6 hover:bg-secondary/10 transition-all duration-300 group`}
                key={skill.name}
              >
                <div className="flex items-start space-x-4">
                  <div className={`${skill.color}`}>{skill.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-1 text-light">{skill.name}</h4>
                    <p className="text-muted text-sm leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* AI & ML */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-accent mb-4">AI & ML</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiAndMlSkills.map((skill) => (
              <div
                className={`glass-effect rounded-2xl p-6 hover:bg-accent/10 transition-all duration-300 group`}
                key={skill.name}
              >
                <div className="flex items-start space-x-4">
                  <div className={`${skill.color}`}>{skill.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-1 text-light">{skill.name}</h4>
                    <p className="text-muted text-sm leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-primary mb-4">DevOps, Tools & Collaboration</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...devopsAndTools, ...softSkills].map((skill) => (
              <div
                className={`glass-effect rounded-2xl p-6 hover:bg-primary/10 transition-all duration-300 group`}
                key={skill.name}
              >
                <div className="flex items-start space-x-4">
                  <div className={`${skill.color}`}>{skill.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-1 text-light">{skill.name}</h4>
                    <p className="text-muted text-sm leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {specializations.map((spec) => (
            <div
              className="glass-effect rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/5 transition"
              key={spec.name}
            >
              <span className="mb-3 text-primary">{spec.icon}</span>
              <span className="font-semibold text-light mb-1">{spec.name}</span>
              <span className="text-xs text-muted">{spec.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

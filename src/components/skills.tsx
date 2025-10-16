"use client";

import {
  Blocks,
  Brain,
  Code2,
  Database,
  Figma,
  FileCode,
  GitBranch,
  Globe,
  Layers,
  Library,
  MessageSquare,
  Palette,
  Rocket,
  Server,
  Smartphone,
  Sparkles,
  Target,
  Terminal,
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
    description: "SPA, hooks, state management, component patterns",
    icon: <FileCode className="w-5 h-5" />,
    name: "React",
  },
  {
    color: "text-primary",
    description: "Fullstack SSR/ISR, app router, performant sites",
    icon: <Rocket className="w-5 h-5" />,
    name: "Next.js",
  },
  {
    color: "text-accent",
    description: "Type-safety, DX, scalable codebases",
    icon: <Code2 className="w-5 h-5" />,
    name: "TypeScript",
  },
  {
    color: "text-primary",
    description: "Utility-first styling, rapid prototyping, custom themes",
    icon: <Palette className="w-5 h-5" />,
    name: "Tailwind CSS",
  },
  {
    color: "text-accent",
    description: "ES6+, async/await, functional, DOM APIs",
    icon: <Code2 className="w-5 h-5" />,
    name: "JavaScript",
  },
  {
    color: "text-primary",
    description: "Semantic markup, advanced CSS, accessibility",
    icon: <Globe className="w-5 h-5" />,
    name: "HTML5/CSS3",
  },
  {
    color: "text-accent",
    description: "State management, middleware, scalable apps",
    icon: <Blocks className="w-5 h-5" />,
    name: "Redux",
  },
  {
    color: "text-accent",
    description: "Smooth UI animations, gestures, micro-interactions",
    icon: <Layers className="w-5 h-5" />,
    name: "Framer Motion",
  },
];

const backendSkills: SkillCard[] = [
  {
    color: "text-primary",
    description: "Server-side APIs, event-driven architecture",
    icon: <Terminal className="w-5 h-5" />,
    name: "Node.js",
  },
  {
    color: "text-accent",
    description: "Routing, RESTful services, middleware integration",
    icon: <Code2 className="w-5 h-5" />,
    name: "Express.js",
  },
  {
    color: "text-primary",
    description: "Relational DBs, SQL, schema design",
    icon: <Database className="w-5 h-5" />,
    name: "PostgreSQL",
  },
  {
    color: "text-accent",
    description: "NoSQL, document databases, aggregation",
    icon: <Database className="w-5 h-5" />,
    name: "MongoDB",
  },
  {
    color: "text-primary",
    description: "Typed APIs, flexible queries, Apollo/Relay",
    icon: <Zap className="w-5 h-5" />,
    name: "GraphQL",
  },
  {
    color: "text-accent",
    description: "Endpoint design, auth, best practices",
    icon: <Server className="w-5 h-5" />,
    name: "REST APIs",
  },
  {
    color: "text-primary",
    description: "Scripting, automation, data handling",
    icon: <Code2 className="w-5 h-5" />,
    name: "Python",
  },
  {
    color: "text-accent",
    description: "ORM for Node, schema migrations, TS support",
    icon: <Layers className="w-5 h-5" />,
    name: "Prisma",
  },
];

const tools: SkillCard[] = [
  {
    color: "text-primary",
    description: "Version control, collaborative workflows",
    icon: <GitBranch className="w-5 h-5" />,
    name: "Git",
  },
  {
    color: "text-accent",
    description: "Editor customization, code navigation",
    icon: <Terminal className="w-5 h-5" />,
    name: "VS Code",
  },
  {
    color: "text-primary",
    description: "Wireframes, prototyping, design systems",
    icon: <Figma className="w-5 h-5" />,
    name: "Figma",
  },
  {
    color: "text-accent",
    description: "Cloud deployments, serverless functions",
    icon: <Globe className="w-5 h-5" />,
    name: "Vercel",
  },
  {
    color: "text-primary",
    description: "Containerization, local dev, team onboarding",
    icon: <Server className="w-5 h-5" />,
    name: "Docker",
  },
  {
    color: "text-accent",
    description: "Modules, build optimization",
    icon: <Zap className="w-5 h-5" />,
    name: "Webpack",
  },
  {
    color: "text-primary",
    description: "Unit, integration, e2e testing",
    icon: <Library className="w-5 h-5" />,
    name: "Jest",
  },
  {
    color: "text-accent",
    description: "API testing, collections, environments",
    icon: <Smartphone className="w-5 h-5" />,
    name: "Postman",
  },
];

const softSkills: SkillCard[] = [
  {
    color: "text-primary",
    description: "Client-facing, technical documentation",
    icon: <MessageSquare className="w-5 h-5" />,
    name: "Communication",
  },
  {
    color: "text-accent",
    description: "Debugging, creative solutions, strategic thinking",
    icon: <Target className="w-5 h-5" />,
    name: "Problem Solving",
  },
  {
    color: "text-primary",
    description: "Agile practices, peer code reviews",
    icon: <Brain className="w-5 h-5" />,
    name: "Team Collaboration",
  },
  {
    color: "text-accent",
    description: "Sprints, backlog management, ceremonies",
    icon: <Rocket className="w-5 h-5" />,
    name: "Agile/Scrum",
  },
  {
    color: "text-primary",
    description: "Decision-making, actionable feedback",
    icon: <Brain className="w-5 h-5" />,
    name: "Critical Thinking",
  },
  {
    color: "text-accent",
    description: "UI/UX innovation, new solutions",
    icon: <Sparkles className="w-5 h-5" />,
    name: "Creativity",
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
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mt-4">
            A comprehensive toolkit of modern web technologies, frameworks, and workflows— refined
            through 3+ years of hands-on development.
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
        {/* Tools & Soft Skills */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-accent mb-4">Tools & Soft Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...tools, ...softSkills].map((skill) => (
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

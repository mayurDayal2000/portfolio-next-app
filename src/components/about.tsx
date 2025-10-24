"use client";

import {
  Award,
  Briefcase,
  Code2,
  Coffee,
  GraduationCap,
  Heart,
  Lightbulb,
  MapPin,
  Rocket,
  Target,
  Zap,
} from "lucide-react";
import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  bullets: Array<{ id: string; text: string }>;
  icon: ReactNode;
}

const DEFAULT_EASE = "easeOut";
const DEFAULT_INVIEW = { margin: "-80px", once: true } as const;

const containerStagger: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: DEFAULT_EASE,
      staggerChildren: 0.075,
      when: "beforeChildren",
    },
    y: 0,
  },
};

const itemUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    transition: { duration: 0.35, ease: DEFAULT_EASE },
    y: 0,
  },
};

export default function About() {
  const timeline: TimelineItem[] = [
    {
      bullets: [
        {
          id: "penify-1",
          text: "Led frontend (React, TypeScript, Redux) for a high-performance developer dashboard.",
        },
        {
          id: "penify-2",
          text: "Built SEO-optimized landing pages with Next.js and Tailwind CSS, boosting conversions by 15%.",
        },
        {
          id: "penify-3",
          text: "Integrated Stripe & Razorpay payments and contributed to FastAPI back-end & CI/CD (Docker, GitHub Actions).",
        },
      ],
      company: "Penify.ai",
      icon: <Rocket className="w-5 h-5" />,
      title: "Full-Stack Engineer",
      year: "2023-Present",
    },
    {
      bullets: [
        {
          id: "freelance-1",
          text: "Delivered custom WordPress themes and plugins using PHP, JS, and CSS.",
        },
        {
          id: "freelance-2",
          text: "Built responsive UIs and e-commerce workflows for small business clients.",
        },
        {
          id: "freelance-3",
          text: "Used this time to intentionally grow my back-end skills and explore modern tech like TypeScript.",
        },
      ],
      company: "Self-Employed",
      icon: <Briefcase className="w-5 h-5" />,
      title: "Freelance Software Engineer",
      year: "2022-2023",
    },
    {
      bullets: [
        {
          id: "zinedu-1",
          text: "Promoted from Intern to Junior Developer in 2 months after mastering React.",
        },
        {
          id: "zinedu-2",
          text: "Developed responsive student dashboards, reducing load times by 30%.",
        },
        {
          id: "zinedu-3",
          text: "Refactored legacy class components to modern hooks, cutting code complexity by 40%.",
        },
      ],
      company: "ZinEdu Classes",
      icon: <Code2 className="w-5 h-5" />,
      title: "Junior Frontend Developer",
      year: "2021-2022",
    },
  ];

  const values = [
    {
      description:
        "I'm a problem-solver first. I learn the tool needed—whether it's frontend, backend, or DevOps—and I build.",
      icon: <Zap className="w-6 h-6" />,
      title: "Pragmatic & Versatile",
    },
    {
      description:
        "My work starts with the user. I love turning Figma designs into pixel-perfect, intuitive, and engaging experiences.",
      icon: <Heart className="w-6 h-6" />,
      title: "User-Centric UI/UX",
    },
    {
      description:
        "My passion for AI/ML fuels my personal projects. I'm always learning new tech to build better, smarter solutions.",
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Continuous Growth",
    },
    {
      description:
        "I believe AI is the future. I actively integrate AI/ML models and build my own AI-powered tools from scratch.",
      icon: <Code2 className="w-6 h-6" />,
      title: "AI Enthusiast",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-dark overflow-hidden" id="about">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          style={{ willChange: "transform" }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          style={{ willChange: "transform" }}
          transition={{
            delay: 1,
            duration: 7,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial="hidden"
          variants={containerStagger}
          viewport={DEFAULT_INVIEW}
          whileInView="show"
        >
          <motion.div
            className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 text-sm font-medium text-accent mb-6"
            variants={itemUp}
          >
            <Target className="w-4 h-4" />
            <span>Get To Know Me</span>
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light mb-6"
            variants={itemUp}
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.p className="text-lg text-muted max-w-2xl mx-auto" variants={itemUp}>
            I'm a Full-Stack Engineer who loves building. From a pixel-perfect UI to a complex AI
            integration, I thrive on the challenge of learning and delivering.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {/* Left Column - Story */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            variants={containerStagger}
            viewport={DEFAULT_INVIEW}
            whileInView="show"
          >
            {/* Story Card */}
            <motion.div
              className="glass-effect rounded-2xl p-8 hover:bg-white/5 transition-colors"
              variants={itemUp}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div className="p-2 bg-accent/20 rounded-lg" whileHover={{ scale: 1.06 }}>
                  <Coffee className="w-6 h-6 text-accent" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-light">My Story</h3>
              </div>

              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Hi, I'm Mayur. I'm a{" "}
                  <span className="text-light font-semibold">Full-Stack Engineer</span> with 3+
                  years of experience, but my real passion is in the{" "}
                  <span className="text-accent font-semibold">frontend</span>. I've spent my career
                  building everything from responsive dashboards for EdTech to AI-powered tools for
                  developers.
                </p>
                <p>
                  My journey wasn't typical. I was an average student until I found coding in
                  college. That's when it clicked. Now I specialize in{" "}
                  <span className="text-accent font-semibold">React, Next.js, and TypeScript</span>,
                  but I'm just as comfortable setting up a{" "}
                  <span className="text-light font-semibold">Python back-end</span> or a{" "}
                  <span className="text-light font-semibold">CI/CD pipeline</span>. I'm the guy who
                  learns what's needed and gets it built.
                </p>
                <p>
                  When I'm not at my day job, I'm building my own AI projects—like a commit message
                  generator or a 3D AI companion. I'm always looking for the next challenge and a
                  team where I can grow.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-xs text-muted">Seeking</p>
                    <p className="text-sm text-light font-medium">Remote / On-site</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-xs text-muted">Education</p>
                    <p className="text-sm text-light font-medium">
                      B.Tech in Information Technology
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            variants={containerStagger}
            viewport={DEFAULT_INVIEW}
            whileInView="show"
          >
            {/* Experience Timeline */}
            <motion.div
              className="glass-effect rounded-2xl p-8 hover:bg-white/5 transition-colors"
              variants={itemUp}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-light">Experience</h3>
              </div>

              <div className="relative space-y-8">
                {/* Timeline line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-linear-to-b from-primary via-secondary to-accent" />

                {timeline.map((item, idx) => {
                  return (
                    <div className="relative pl-8 group" key={`${item.company}-${item.year}`}>
                      {/* Dot */}
                      <div className="absolute left-0 top-1 w-4 h-4">
                        <motion.span
                          className={`absolute inset-0 rounded-full border-2 ${
                            idx === 0 ? "bg-primary border-primary" : "bg-dark border-muted"
                          }`}
                          style={{
                            willChange: "transform",
                          }}
                          transition={{
                            damping: 22,
                            stiffness: 260,
                            type: "spring",
                          }}
                        />
                      </div>

                      <div className="mb-1 flex items-center gap-2">
                        <span className="text-accent">{item.icon}</span>
                        <span className="font-semibold text-primary">{item.title}</span>
                        <span className="text-sm text-muted font-medium">| {item.company}</span>
                        <span className="ml-auto text-xs text-accent px-2 py-0.5 bg-dark-secondary rounded">
                          {item.year}
                        </span>
                      </div>

                      <div className="mt-2">
                        <motion.ul
                          className="list-disc ml-6 text-sm text-start space-y-2 text-muted"
                          initial="hidden"
                          variants={{
                            hidden: {},
                            show: { transition: { staggerChildren: 0.06 } },
                          }}
                          viewport={DEFAULT_INVIEW}
                          whileInView="show"
                        >
                          {item.bullets.map((bullet) => (
                            <motion.li
                              className="leading-snug opacity-100 px-2 py-1"
                              key={bullet.id}
                              variants={{
                                hidden: { opacity: 0, y: 6 },
                                show: {
                                  opacity: 1,
                                  transition: {
                                    duration: 0.25,
                                    ease: DEFAULT_EASE,
                                  },
                                  y: 0,
                                },
                              }}
                            >
                              {bullet.text}
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
          initial="hidden"
          variants={containerStagger}
          viewport={DEFAULT_INVIEW}
          whileInView="show"
        >
          {values.map((value) => (
            <motion.div
              className="glass-effect rounded-xl p-6 transition-colors hover:bg-white/5 group"
              key={value.title}
              style={{ willChange: "transform" }}
              variants={itemUp}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div className="text-accent mb-3" whileHover={{ scale: 1.08 }}>
                {value.icon}
              </motion.div>
              <h4 className="text-light font-semibold mb-2">{value.title}</h4>
              <p className="text-sm text-muted leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

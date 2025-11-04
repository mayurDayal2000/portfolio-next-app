"use client";

import { motion, type Variants } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface TimelineItem {
  year: string;
  title: string;
  company: string | null;
  bullets: Array<{ id: string; text: string }>;
}

interface ValueItem {
  badge: string;
  description: string;
  title: string;
}

const DEFAULT_EASE = "easeOut";
const DEFAULT_INVIEW = { margin: "-40px", once: true } as const;

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

const bulletVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: DEFAULT_EASE,
    },
    y: 0,
  },
};

const bulletListVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const TIMELINE_DATA: TimelineItem[] = [
  {
    bullets: [
      {
        id: "penify-1",
        text: "Developed a high-performance developer dashboard using React.js, TypeScript, and Redux Toolkit.",
      },
      {
        id: "penify-2",
        text: "Built SEO-optimized, responsive landing pages and marketing websites using Next.js (SSR/SSG), TypeScript, and Tailwind CSS.",
      },
      {
        id: "penify-3",
        text: "Integrated multiple payment gateways (Stripe, Razorpay, PayPal, Cashfree) into React-based frontends.",
      },
    ],
    company: "Penify.ai",
    title: "Software Engineer (SDE-1)",
    year: "2023-2025",
  },
  {
    bullets: [
      {
        id: "freelance-1",
        text: "Delivered custom WordPress solutions with responsive themes and plugins using PHP, HTML5, CSS3, and JavaScript.",
      },
      {
        id: "freelance-2",
        text: "Built interactive, mobile-responsive user interfaces with Vanilla JavaScript, ensuring cross-browser compatibility and smooth user experiences for small business clients.",
      },
    ],
    company: null,
    title: "Freelance Software Engineer",
    year: "2022-2023",
  },
  {
    bullets: [
      {
        id: "zinedu-1",
        text: "Developed a responsive student dashboard using React.js (Hooks, Context API), Bootstrap, and Sass.",
      },
      {
        id: "zinedu-2",
        text: "Refactored legacy React class components into modern functional components with Hooks.",
      },
      {
        id: "zinedu-3",
        text: "Progressed from Frontend Intern to Junior Frontend Developer within two months, recognized for rapid skill development and consistent performance.",
      },
    ],
    company: "ZinEdu Classes",
    title: "Frontend Engineer",
    year: "2021-2022",
  },
];

const VALUES_DATA: ValueItem[] = [
  {
    badge: "⚡",
    description:
      "I'm a problem-solver first. I learn the tool needed—whether it's frontend, backend, or DevOps—and I build.",
    title: "Pragmatic & Versatile",
  },
  {
    badge: "❤️",
    description:
      "My work starts with the user. I love turning Figma designs into pixel-perfect, intuitive, and engaging experiences.",
    title: "User-Centric UI/UX",
  },
  {
    badge: "💡",
    description:
      "My passion for AI/ML fuels my personal projects. I'm always learning new tech to build better, smarter solutions.",
    title: "Continuous Growth",
  },
  {
    badge: "🤖",
    description:
      "I believe AI is the future. I actively integrate AI/ML models and build my own AI-powered tools from scratch.",
    title: "AI Enthusiast",
  },
];

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="About me - My story and experience"
      className="relative py-24 lg:py-32 bg-dark overflow-hidden"
      id="about"
    >
      {/* Background decorative elements - Optimized for performance */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            className="absolute top-20 left-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl"
            transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/8 rounded-full blur-3xl"
            transition={{
              delay: 1,
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </div>
      )}

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
            <span className="text-lg">🎯</span>
            <span>Get To Know Me</span>
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light mb-6"
            variants={itemUp}
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.p className="text-lg text-muted/90 max-w-[730px] mx-auto" variants={itemUp}>
            I'm a full-stack engineer who loves building stuff. Whether it's pixel-perfect UIs or
            complex AI integrations, I enjoy the challenge of learning new tech and shipping quality
            products.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid xl:grid-cols-2 gap-6 lg:gap-8 mb-8">
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
              className="glass-effect rounded-2xl p-8 transition-all duration-300"
              style={{ background: "rgba(20, 30, 50, 0.9)" }}
              variants={itemUp}
              whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span aria-hidden="true" className="text-3xl">
                  ☕
                </span>
                <h3 className="text-2xl font-semibold text-light">My Story</h3>
              </div>

              <div className="space-y-6 text-muted/90 leading-relaxed">
                <p>
                  Hi, I'm Mayur. I'm a{" "}
                  <span className="text-light font-semibold">Full-Stack Engineer</span> with 3+
                  years of experience, but my real passion is{" "}
                  <span className="text-accent font-semibold">frontend</span>. I've spent my career
                  building everything from responsive dashboards for EdTech to AI-powered tools for
                  developers.
                </p>
                <p>
                  My journey wasn't typical. I was an average student until I found coding in
                  college. That's when it clicked. Now I specialize in{" "}
                  <span className="text-accent font-semibold">React, Next.js, and TypeScript</span>,
                  but I'm just as comfortable setting up a{" "}
                  <span className="text-light font-semibold">Python backend</span> or a{" "}
                  <span className="text-light font-semibold">CI/CD pipeline</span>. I learn what's
                  needed and get it built.
                </p>
                <p>
                  When I'm not working, I'm building my own AI projects—like a commit message
                  generator or a 3D AI companion. I'm always looking for the next challenge and a
                  team where I can grow.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 pt-6 border-t border-white/10">
                <div className="flex items-start gap-3 flex-1">
                  <span aria-hidden="true" className="text-2xl">
                    📍
                  </span>
                  <div>
                    <p className="text-xs text-muted/80 uppercase tracking-wide mb-1">Seeking</p>
                    <p className="text-sm text-light font-medium">Remote / On-site</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 flex-1">
                  <span aria-hidden="true" className="text-2xl">
                    🎓
                  </span>
                  <div>
                    <p className="text-xs text-muted/80 uppercase tracking-wide mb-1">Education</p>
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
              className="glass-effect rounded-2xl p-8 transition-all duration-300"
              style={{ background: "rgba(20, 30, 50, 0.9)" }}
              variants={itemUp}
              whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -4 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span aria-hidden="true" className="text-3xl">
                  🏆
                </span>
                <h3 className="text-2xl font-semibold text-light">Experience</h3>
              </div>

              <ol aria-label="Work experience timeline" className="relative space-y-8">
                {/* Timeline line */}
                <div
                  aria-hidden="true"
                  className="absolute left-[6px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary via-secondary to-accent opacity-60"
                />

                {TIMELINE_DATA.map((item, idx) => {
                  return (
                    <li className="relative pl-8 group" key={`${item.company}-${item.year}`}>
                      {/* Dot */}
                      <div aria-hidden="true" className="absolute left-0 top-1 w-4 h-4">
                        <span
                          className={`absolute inset-0 rounded-full border-2 ${
                            idx === 0
                              ? "bg-primary border-primary shadow-lg shadow-primary/50"
                              : "bg-dark border-accent/60"
                          }`}
                        />
                      </div>

                      <div className="mb-2 flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-primary">{item.title}</span>
                          {item.company && (
                            <span className="text-sm text-muted/80 font-medium">
                              | {item.company}
                            </span>
                          )}
                        </div>
                        <span className="inline-block text-xs text-accent px-2 py-0.5 bg-dark-secondary rounded">
                          <time>{item.year}</time>
                        </span>
                      </div>

                      <div className="mt-2">
                        <motion.ul
                          aria-label={`Responsibilities at ${item.company}`}
                          className="space-y-2"
                          initial="hidden"
                          variants={bulletListVariants}
                          viewport={DEFAULT_INVIEW}
                          whileInView="show"
                        >
                          {item.bullets.map((bullet) => (
                            <motion.li
                              className="flex items-start gap-3 text-sm leading-relaxed text-muted/90"
                              key={bullet.id}
                              variants={bulletVariants}
                            >
                              <span aria-hidden="true" className="text-accent flex-shrink-0">
                                ▸
                              </span>
                              <span>{bullet.text}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          aria-label="My core values and principles"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
          initial="hidden"
          variants={containerStagger}
          viewport={DEFAULT_INVIEW}
          whileInView="show"
        >
          {VALUES_DATA.map((value) => (
            <motion.div
              className="glass-effect rounded-xl p-6 transition-all duration-300 group"
              key={value.title}
              style={{ background: "rgba(20, 30, 50, 0.9)" }}
              variants={itemUp}
              whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -4 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              <span aria-hidden="true" className="text-4xl mb-3 block">
                {value.badge}
              </span>
              <h4 className="text-light font-semibold mb-2">{value.title}</h4>
              <p className="text-sm text-muted/90 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

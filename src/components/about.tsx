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
  Users,
  Zap,
} from "lucide-react";
import { type ReactNode, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { FadeInOnce } from "./ui/fadeInOnce";

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  bullets: string[];
  icon: ReactNode;
}

export default function About() {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const timeline: TimelineItem[] = [
    {
      bullets: [
        "Implemented micro-frontend architecture with Next.js",
        "Reduced SaaS platform load times by 60%",
        "Mentored 5+ junior engineers in modern FE best practices",
      ],
      company: "Tech Startup Inc.",
      icon: <Rocket className="w-5 h-5" />,
      title: "Senior Frontend Developer",
      year: "2023-Present",
    },
    {
      bullets: [
        "Delivered 20+ client websites with pixel-perfect UI",
        "Optimized performance/accessibility for all projects",
        "Collaborated directly with clients for requirements and feedback",
      ],
      company: "Digital Agency Co.",
      icon: <Briefcase className="w-5 h-5" />,
      title: "Fullstack Developer",
      year: "2022-2023",
    },
    {
      bullets: [
        "Built and maintained responsive React/Node.js web apps",
        "Worked closely with design teams for tight UX/UI delivery",
        "Automated testing and deployment using CI/CD pipelines",
      ],
      company: "Web Solutions Ltd.",
      icon: <Code2 className="w-5 h-5" />,
      title: "Junior Developer",
      year: "2021-2022",
    },
  ];

  const values = [
    {
      description: "Obsessed with clean code, performance optimization, and modern best practices",
      icon: <Zap className="w-6 h-6" />,
      title: "Quality First",
    },
    {
      description: "Committed to building accessible and inclusive web experiences for all users",
      icon: <Users className="w-6 h-6" />,
      title: "User-Centric",
    },
    {
      description: "Constantly learning and adapting to new technologies and industry trends",
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Continuous Growth",
    },
    {
      description: "Passionate about creating beautiful, intuitive interfaces that users love",
      icon: <Heart className="w-6 h-6" />,
      title: "Design Passion",
    },
  ];

  return (
    <section
      className="relative py-24 lg:py-32 bg-dark overflow-hidden"
      id="about"
      ref={sectionRef}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInOnce className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 text-sm font-medium text-accent mb-6">
            <Target className="w-4 h-4" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A passionate developer crafting exceptional digital experiences with a blend of
            creativity and technical expertise
          </p>
        </FadeInOnce>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {/* Left Column - Story & Values */}
          <div className="space-y-8 observe-fade">
            {/* Story Card */}
            <div className="glass-effect rounded-2xl p-8 hover:bg-white/5 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <Coffee className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-light">My Story</h3>
              </div>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Hi, I'm a{" "}
                  <span className="text-light font-semibold">Fullstack Web Developer</span> with a
                  special love for frontend development. Over the past 3 years, I've transformed
                  ideas into pixel-perfect, performant web applications that users love to interact
                  with.
                </p>
                <p>
                  My journey began with curiosity about how websites work and evolved into a passion
                  for creating seamless digital experiences. I specialize in building{" "}
                  <span className="text-accent font-semibold">scalable</span>,{" "}
                  <span className="text-accent font-semibold">accessible</span>, and{" "}
                  <span className="text-accent font-semibold">beautiful</span> web applications
                  using modern technologies.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest web technologies,
                  contributing to open source, or mentoring aspiring developers in the community.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-xs text-muted">Location</p>
                    <p className="text-sm text-light font-medium">Remote / Hybrid</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-xs text-muted">Education</p>
                    <p className="text-sm text-light font-medium">CS Degree</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="space-y-8 observe-fade">
            {/* Experience Timeline */}
            <div className="glass-effect rounded-2xl p-8 hover:bg-white/5 transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-light">Experience</h3>
              </div>

              <div className="relative space-y-8">
                {/* Timeline line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

                {timeline.map((item, idx) => (
                  <div className="relative pl-8 group" key={item.year}>
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                        activeTimeline === idx
                          ? "bg-primary border-primary scale-125"
                          : "bg-dark border-muted group-hover:border-primary"
                      }`}
                    />

                    <button
                      aria-pressed={activeTimeline === idx}
                      className={`group cursor-pointer w-full text-left transition-all duration-300
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
      focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-md px-1
      ${activeTimeline === idx ? "opacity-100" : "opacity-80 hover:opacity-100"}`}
                      onClick={() => setActiveTimeline(idx)}
                      type="button"
                    >
                      <div className="mb-1 flex items-center gap-2">
                        <span className="font-semibold text-primary">{item.title}</span>
                        <span className="text-sm text-muted font-medium">| {item.company}</span>
                        <span className="ml-auto text-xs text-accent px-2 py-0.5 bg-dark-secondary rounded">
                          {item.year}
                        </span>
                      </div>
                    </button>

                    <div className="mt-2">
                      <ul className="list-disc ml-6 text-sm text-start space-y-2 text-muted">
                        {item.bullets.map((bp) => (
                          <li
                            className={cn(
                              "leading-snug",
                              activeTimeline === idx
                                ? "opacity-100"
                                : "opacity-80 hover:opacity-100"
                            )}
                            key={bp}
                          >
                            {bp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {values.map((value, idx) => (
            <div
              className="glass-effect rounded-xl p-6 hover:bg-white/5 hover:scale-105 transition-all duration-300 cursor-pointer group"
              key={value.title}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-accent mb-3 group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h4 className="text-light font-semibold mb-2">{value.title}</h4>
              <p className="text-sm text-muted leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const experiences = [
  {
    company: "UPLANE",
    role: "Full Stack Engineer",
    period: "Jan 2026 – Present",
    metrics: [
      { value: "60%", label: "Memory Reduced" },
      { value: "40%", label: "ROAS Improved" },
      { value: "10K+", label: "Ads Served" },
    ],
    highlights: [
      "Built full-stack asset management and campaign workflow system using TypeScript, Vue/Nuxt, and Express, reducing campaign setup time for users.",
      "Orchestrated AI-driven ad and landing page generation pipelines powering Uplane's core automation platform, building multi-step LangGraph workflows with Inngest, enabling 30-40% ROAS improvement.",
      "Architected scalable media infrastructure for high-volume creative generation using Cloudflare R2 and CDN-backed delivery, reducing memory overhead by 60%, serving 10K+ generated ads.",
      "Designed cross-workspace campaign portability system reducing manual setup effort by 70% and unblocking multi-tenant scaling.",
    ],
    technologies: ["TypeScript", "Vue/Nuxt", "Express", "LangGraph", "Cloudflare R2", "Inngest"],
    twColor: "from-[#0EA5E9] to-[#38BDF8]",
    colorStart: "#0EA5E9",
    colorEnd: "#38BDF8",
    current: true,
  },
  {
    company: "MINEDCO",
    role: "AI Software Engineer Intern",
    period: "Jun 2025 – Sep 2025",
    metrics: [
      { value: "35%", label: "Login Failures ↓" },
      { value: "400+", label: "Test Sessions" },
      { value: "50%", label: "Deploy Cycles ↓" },
    ],
    highlights: [
      "Owned the design and delivery of the React.js/Next.js frontend for the LiveOn MVP, implementing TailwindCSS to improve responsiveness by 40%.",
      "Integrated secure authentication flows with Google OAuth (JWT), reducing login failures by 35% and streamlining sign-in for 250+ test users.",
      "Partnered with product lead and AI/ML engineers to accelerate MVP launch using OpenAI APIs and LangChain, setting up CI/CD pipelines with GitHub Actions that cut deployment cycles in half.",
      "Mentored 2 junior interns leading to 400+ successful test sessions and zero critical defects at MVP launch.",
    ],
    technologies: ["React", "Next.js", "OpenAI API", "LangChain", "Google OAuth", "GitHub Actions"],
    twColor: "from-[#F0883E] to-[#FFA657]",
    colorStart: "#F0883E",
    colorEnd: "#FFA657",
    current: false,
  },
  {
    company: "BOEING",
    role: "Software Developer",
    period: "Aug 2023 – Aug 2024",
    metrics: [
      { value: "3K+", label: "Daily Users" },
      { value: "25%", label: "Accuracy Boost" },
      { value: "🏆", label: "Top Talent Award" },
    ],
    highlights: [
      "Led full-stack development of the Critical Parts Tracking System (CPTS), architecting Spring Boot microservices and an Angular UI used daily by 3,000+ global operators, boosting reporting accuracy by 25%.",
      "Coordinated a 5-member team through sprints, performed end-to-end testing that cut defects by 30% and shortened reporting cycles by 2 days per week.",
      "Optimized the Wireless Business Management System (WBMS) used by 8,000+ engineers with React-based enhancements, introducing live data synchronization that lowered latency by 15%.",
      "Honored with Boeing's 'Top Talent Award' for Junior Engineers in Q1 2024 among 16 teams in the BDS Sector.",
    ],
    technologies: ["Spring Boot", "Angular", "React", "Microservices", "Agile", "Testing"],
    twColor: "from-[#3FB27F] to-[#77E1B3]",
    colorStart: "#3FB27F",
    colorEnd: "#77E1B3",
    current: false,
  },
  {
    company: "BLOCMATRIX IT SOLUTIONS",
    role: "Software Developer Intern",
    period: "Feb 2023 – Jun 2023",
    metrics: [
      { value: "5K+", label: "Files Stored" },
      { value: "30%", label: "Coverage Raised" },
      { value: "30K+", label: "Users Served" },
    ],
    highlights: [
      "Deployed a distributed storage system using AWS Lambda and DynamoDB, enabling reliable storage and retrieval of over 5,000 files across distributed nodes.",
      "Introduced automated Python testing frameworks with property-based testing, raising code coverage by 30% and mitigating critical edge-case failures.",
      "Owned a core API feature with end-to-end lifecycle for client Tinker Labs (30k+ users), ensuring production-ready storage and retrieval functionality.",
    ],
    technologies: ["AWS Lambda", "DynamoDB", "Python", "RESTful APIs", "Property-based Testing"],
    twColor: "from-[#1F6FEB] to-[#58A6FF]",
    colorStart: "#1F6FEB",
    colorEnd: "#58A6FF",
    current: false,
  },
];

const Experience = () => {
  const [sectionRef, isInView] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1, triggerOnce: false, reappear: true
  });

  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});
  const toggleCard = (idx: number) => setExpandedCards(prev => ({ ...prev, [idx]: !prev[idx] }));

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.6, ease: [0.4, 0.0, 0.2, 1], delay: i * 0.1 }
    })
  };

  return (
    <section id="experience" className="py-20 bg-[#161b22]" ref={sectionRef}>
      <div className="section-container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#30363d] z-0" />

          <motion.div
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-4">
                  <motion.div
                    className={`h-4 w-4 rounded-full bg-gradient-to-r ${exp.twColor} border-4 border-[#161b22] z-10 relative`}
                    animate={{ boxShadow: [`0 0 0 0 ${exp.colorStart}00`, `0 0 0 8px ${exp.colorStart}4D`, `0 0 0 0 ${exp.colorStart}00`] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                </div>

                {/* Period */}
                <div className="md:w-1/2 py-2 px-4 md:px-8 flex items-center">
                  <div className={`bg-[#21262d] text-[#c9d1d9] py-1 px-3 rounded-full text-sm inline-block shadow-lg ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    {exp.period}
                  </div>
                </div>

                {/* Card */}
                <div className="md:w-1/2 py-2 px-4 md:px-8">
                  <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }} className="group">
                    <Card
                      className="repo-card border-l-4 bg-gradient-to-br from-[#161b22] to-[#1c2129] hover:shadow-xl transition-all duration-300"
                      style={{ borderLeftColor: exp.colorStart }}
                    >
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <Briefcase className="h-4 w-4 shrink-0" style={{ color: exp.colorStart }} />
                          <span className="text-[#8b949e] font-semibold">{exp.company}</span>
                          {exp.current && (
                            <span className="ml-auto flex items-center gap-1.5 bg-[#238636]/15 text-[#3fb950] border border-[#238636]/30 text-xs px-2 py-0.5 rounded-full">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#3fb950] animate-pulse inline-block" />
                              Current
                            </span>
                          )}
                        </div>
                        <CardTitle
                          className="text-xl bg-clip-text text-transparent"
                          style={{ backgroundImage: `linear-gradient(to right, ${exp.colorStart}, ${exp.colorEnd})` }}
                        >
                          {exp.role}
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        {/* Key metrics chips */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {exp.metrics.map((m, mi) => (
                            <div
                              key={mi}
                              className="bg-[#21262d] border border-[#30363d] rounded-md px-3 py-1.5 text-center min-w-[64px]"
                            >
                              <div className="text-sm font-bold" style={{ color: exp.colorStart }}>{m.value}</div>
                              <div className="text-[10px] text-[#8b949e] uppercase tracking-wide leading-tight">{m.label}</div>
                            </div>
                          ))}
                        </div>

                        <ul className="list-disc list-inside space-y-2 mb-4 text-[#8b949e]">
                          {(expandedCards[index] ? exp.highlights : exp.highlights.slice(0, 2)).map((highlight, i) => (
                            <motion.li
                              key={i}
                              className="text-sm"
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.08 }}
                            >
                              {highlight}
                            </motion.li>
                          ))}
                        </ul>
                        {exp.highlights.length > 2 && (
                          <button
                            onClick={() => toggleCard(index)}
                            className="text-xs text-[#8b949e] hover:text-[#c9d1d9] transition-colors mb-3 flex items-center gap-1"
                          >
                            {expandedCards[index]
                              ? <><ChevronUp className="h-3 w-3" /> Show less</>
                              : <><ChevronDown className="h-3 w-3" /> Show {exp.highlights.length - 2} more</>
                            }
                          </button>
                        )}

                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.technologies.map((tech, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: false }}
                              transition={{ delay: i * 0.05 }}
                            >
                              <Badge className={`bg-gradient-to-r ${exp.twColor} bg-opacity-10 text-white border border-[#30363d] hover:bg-opacity-30 transition-all duration-300`}>
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

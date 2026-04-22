import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ArrowUpRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const projects = [
  {
    title: "SafarAI – Competitive Intelligence Platform",
    category: "ai",
    private: false,
    image: "https://opengraph.githubassets.com/1/blakestiles/SafarAI",
    description: "Shipped at Y Combinator, San Francisco. Engineered a competitive intelligence pipeline ingesting 50+ sources of tourism, partnerships, funding, and campaigns using web and PDF extraction. Built hash-based change detection and structured LLM classification to auto-generate executive briefings, reducing manual monitoring effort by 80%.",
    tech: ["FastAPI", "MongoDB", "LangChain", "Firecrawl", "Reducto", "Resend"],
    liveDemo: "#",
    github: "https://github.com/blakestiles/SafarAI",
    languageColor: "#E34C26",
    stars: 63,
    yc: true,
    featured: true,
  },
  {
    title: "Synapse AI – AI Knowledge Mesh",
    category: "ai",
    private: false,
    image: "https://opengraph.githubassets.com/1/blakestiles/YC-Vibecon-Synapse",
    description: "Shipped at Y Combinator, San Francisco. Selected from 2,000+ applicants (Top 5%) to build an AI-powered Organizational Intelligence Platform integrating Slack, GitHub, and Notion. Collaborated with mentors from Anthropic & AWS.",
    tech: ["Next.js", "OpenAI Embeddings", "MongoDB", "Vercel", "Slack API", "GitHub API"],
    liveDemo: "#",
    github: "https://github.com/blakestiles/YC-Vibecon-Synapse",
    languageColor: "#A371F7",
    stars: 71,
    yc: true,
    featured: false,
  },
  {
    title: "Cloud Document Summarizer",
    category: "fullstack",
    private: false,
    image: "https://opengraph.githubassets.com/1/blakestiles/StudySphere_v1.0",
    description: "AI summarizer for PDFs, Word docs, and Slides across Google Drive, OneDrive, and AWS S3, condensing 500+ pages with semantic Q&A search. Fault-tolerant SaaS on AWS Lambda + Kubernetes, reducing response delay by 40%.",
    tech: ["React", "Node.js", "AWS Lambda", "GraphQL", "LangChain", "Kubernetes"],
    liveDemo: "#",
    github: "https://github.com/blakestiles/StudySphere_v1.0",
    languageColor: "#f1e05a",
    stars: 38,
    yc: false,
    featured: false,
  },
  {
    title: "Stock Price Prediction using ML",
    category: "research",
    private: false,
    image: undefined,
    description: "LSTM-based model that outperformed ARIMA by 10% accuracy, leveraging 1.2M+ historical market records spanning five years. Integrated economic indicators for improved financial forecasting.",
    tech: ["Python", "LSTM", "TensorFlow", "Pandas", "NumPy", "Matplotlib"],
    liveDemo: "https://ijsrem.com/download/stock-price-prediction-using-machine-learning-an-unprecedented-approach/",
    github: "https://github.com/blakestiles",
    languageColor: "#DA5B0B",
    stars: 56,
    yc: false,
    featured: false,
  },
  {
    title: "G-Notify – Personalized Mass Emailer",
    category: "fullstack",
    private: false,
    image: undefined,
    description: "Automated delivery of 10,000+ personalized emails daily with a 98% success rate using Gmail API and Cron Jobs. Boosted client campaign reach through segmented, template-driven communication.",
    tech: ["Python", "Flask", "Gmail API", "Email Automation", "Cron Jobs"],
    liveDemo: "https://www.irjmets.com/uploadedfiles/paper//issue_6_june_2023/42238/final/fin_irjmets1687027562.pdf",
    github: "https://github.com/blakestiles",
    languageColor: "#2b7489",
    stars: 19,
    yc: false,
    featured: false,
  },
];

const GradientThumbnail = ({ color, title }: { color: string; title: string }) => (
  <div
    className="w-full h-full relative overflow-hidden flex items-end p-4"
    style={{ background: `linear-gradient(135deg, ${color}18 0%, #0d1117 70%)` }}
  >
    {/* Dot-grid texture */}
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: 'radial-gradient(circle, #30363d 1px, transparent 1px)',
        backgroundSize: '16px 16px',
      }}
    />
    {/* Language color accent blobs */}
    <div
      className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-15 blur-xl"
      style={{ background: color }}
    />
    <div
      className="absolute bottom-6 left-6 w-8 h-8 rounded-full opacity-10 blur-lg"
      style={{ background: color }}
    />
    {/* Language dot indicator */}
    <div className="relative z-10 flex items-center gap-2">
      <div className="w-3 h-3 rounded-full opacity-60" style={{ backgroundColor: color }} />
    </div>
  </div>
);

const ProjectThumbnail = ({ image, color, title }: { image?: string; color: string; title: string }) => {
  const [imgError, setImgError] = useState(false);

  if (image && !imgError) {
    return (
      <div className="w-full h-full relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top"
          onError={() => setImgError(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/70 via-transparent to-transparent" />
      </div>
    );
  }

  return <GradientThumbnail color={color} title={title} />;
};

const ProjectCard = ({ project, index, large = false }: { project: typeof projects[0]; index: number; large?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
    className="h-full transform-gpu group"
    whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
  >
    <Card
      className="repo-card h-full flex flex-col overflow-hidden border-b-4 relative"
      style={{ borderBottomColor: project.languageColor }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `linear-gradient(to top right, ${project.languageColor}08, transparent)` }}
      />

      <div className={`overflow-hidden relative ${large ? 'h-56' : 'h-40'}`}>
        <ProjectThumbnail image={project.image} color={project.languageColor} title={project.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/80 to-transparent" />
      </div>

      <CardHeader className="pb-2 relative">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: project.languageColor }} />
            <span className="text-[#8b949e] text-xs">{project.tech[0]}</span>
            {project.yc && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#e8701a]/15 text-[#e8701a] border border-[#e8701a]/25 font-medium">
                🔶 YC
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 text-[#8b949e] text-xs">
            <Star className="h-3 w-3 fill-[#e3b341] text-[#e3b341]" />
            <span>{project.stars}</span>
          </div>
        </div>

        <CardTitle className={`hover:text-[#1f6feb] transition-colors flex items-start gap-1 ${large ? 'text-xl' : 'text-lg'}`}>
          {project.title}
          <ArrowUpRight className="h-4 w-4 mt-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
        </CardTitle>

        <div className="flex flex-wrap gap-1.5 mt-2">
          {project.tech.slice(0, large ? 4 : 3).map((tech, i) => (
            <Badge key={i} variant="outline"
              className="text-xs bg-[#21262d] text-[#c9d1d9] border-[#30363d] hover:bg-[#30363d] transition-colors">
              {tech}
            </Badge>
          ))}
          {project.tech.length > (large ? 4 : 3) && (
            <Badge variant="outline" className="text-xs bg-[#21262d] text-[#8b949e] border-[#30363d]">
              +{project.tech.length - (large ? 4 : 3)}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-[#8b949e] text-sm leading-relaxed">{project.description}</p>
      </CardContent>

      <CardFooter className="pt-0 pb-4 px-6 flex gap-2">
        <Button size="sm" variant="outline" asChild
          className="flex-1 border-[#30363d] text-[#c9d1d9] hover:border-[#1f6feb] hover:text-white hover:bg-[#1f6feb]/10 transition-all">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-1.5 h-3.5 w-3.5" />Code
          </a>
        </Button>
        {project.liveDemo && project.liveDemo !== '#' && (
          <Button size="sm" variant="outline" asChild
            className="flex-1 border-[#30363d] text-[#c9d1d9] hover:border-[#238636] hover:text-white hover:bg-[#238636]/10 transition-all">
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1.5 h-3.5 w-3.5" />Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  </motion.div>
);

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'AI / LLM', value: 'ai' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Research', value: 'research' },
] as const;
type FilterValue = typeof FILTERS[number]['value'];

const Projects = () => {
  const [sectionRef, isInView] = useIntersectionObserver<HTMLElement>({ threshold: 0.05, triggerOnce: false });
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');
  const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-[#0d1117]" ref={sectionRef}>
      <div className="section-container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        {/* Filter tabs */}
        <div className="flex justify-center mb-8">
          <div className="relative flex gap-1 p-1 rounded-full bg-[#161b22] border border-[#30363d]">
            {FILTERS.map(f => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`relative px-4 py-1.5 text-sm rounded-full transition-colors duration-200 z-10 ${
                  activeFilter === f.value ? 'text-white' : 'text-[#8b949e] hover:text-[#c9d1d9]'
                }`}
              >
                {activeFilter === f.value && (
                  <motion.span
                    layoutId="filterActive"
                    className="absolute inset-0 rounded-full bg-[#1f6feb]/20 border border-[#1f6feb]/40"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Project grid — filtered */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className={i === 0 && activeFilter === 'all' ? 'md:col-span-2' : 'md:col-span-1'}
              >
                <ProjectCard project={p} index={i} large={i === 0 && activeFilter === 'all'} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button variant="outline" asChild
            className="border-[#30363d] text-[#c9d1d9] hover:border-[#1f6feb] hover:text-white hover:bg-[#1f6feb]/10 transition-all gap-2">
            <a href="https://github.com/blakestiles" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              View All on GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

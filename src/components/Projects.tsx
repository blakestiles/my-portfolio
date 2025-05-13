
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Link, ArrowUpRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const Projects = () => {
  const [sectionRef, isInView] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
    triggerOnce: false
  });

  const projects = [
    {
      title: "Dynamic Web Application for Inventory Management",
      description: "A full-stack inventory management application using Node.js and React that streamlines inventory tracking processes for small businesses, improving operational efficiency by 25%.",
      tech: ["Node.js", "React", "RESTful API", "Authentication", "CRUD"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      liveDemo: "#",
      github: "#",
      languageColor: "#f1e05a", // JavaScript color
      stars: 24
    },
    {
      title: "Personalized Recommendation Engine for E-Commerce",
      description: "A recommendation engine using Python and collaborative filtering algorithms to deliver personalized user experiences. Enhanced recommendation accuracy by 15% through GenAI models.",
      tech: ["Python", "Deep Learning", "AWS Lambda", "GenAI", "RESTful API"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      liveDemo: "#",
      github: "#",
      languageColor: "#3572A5", // Python color
      stars: 42
    },
    {
      title: "Automated Code Analysis Tool",
      description: "A static code analysis tool using Python and abstract syntax trees, identifying vulnerabilities and ensuring adherence to best coding practices in distributed systems.",
      tech: ["Python", "AST", "D3.js", "Jenkins", "CI/CD"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      liveDemo: "#",
      github: "#",
      languageColor: "#3572A5", // Python color
      stars: 31
    },
    {
      title: "Stock Price Prediction using Machine Learning",
      description: "Applied LSTM and CNN to predict stock price movements, aiming to improve financial decision-making by forecasting stock trends based on historical data.",
      tech: ["Machine Learning", "LSTM", "CNN", "Financial Analysis", "Data Science"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      liveDemo: "#",
      github: "#",
      languageColor: "#DA5B0B", // Jupyter Notebook color
      stars: 56
    },
    {
      title: "G-Notify - A Personalized Mass Emailer",
      description: "A scalable mass mailing system enabling personalized content delivery to large audiences, optimizing email engagement through tailored messaging.",
      tech: ["Email Systems", "Personalization", "Scalable Architecture", "UX/UI"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      liveDemo: "#",
      github: "#",
      languageColor: "#2b7489", // TypeScript color
      stars: 19
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  };

  return (
    <section 
      id="projects" 
      className="py-20 dark:bg-[#0d1117] light:bg-white" 
      ref={sectionRef}
    >
      <div className="section-container">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="h-full transform-gpu"
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Card className="repo-card h-full flex flex-col overflow-hidden border-b-4 relative"
                    style={{ borderBottomColor: project.languageColor }}>
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-tr"
                  style={{ backgroundImage: `linear-gradient(to top right, ${project.languageColor}, transparent)` }}
                />
                
                <div className="h-48 overflow-hidden relative group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"
                  />
                  
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Star indicator */}
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-1 bg-black/50 px-2 py-1 rounded-full backdrop-blur-sm">
                    <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs font-medium text-white">{project.stars}</span>
                  </div>
                </div>
                
                <CardHeader className="pb-2 relative">
                  <div className="flex items-center mb-2">
                    <div 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: project.languageColor }}
                    ></div>
                    <span className="text-[#8b949e] dark:text-[#8b949e] light:text-[#57606a] text-xs">{project.tech[0]}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-[#1f6feb] transition-colors flex items-start gap-1">
                    {project.title}
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.3, type: "spring" }}
                    >
                      <ArrowUpRight className="h-4 w-4 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </CardTitle>
                  
                  <div className="flex flex-wrap gap-2 my-2">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Badge variant="outline" className="text-xs dark:bg-[#21262d] dark:text-[#c9d1d9] dark:border-[#30363d] light:bg-[#f6f8fa] light:text-[#24292f] light:border-[#d0d7de] transition-colors duration-300 hover:bg-[#30363d]">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                    {project.tech.length > 3 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                      >
                        <Badge variant="outline" className="text-xs dark:bg-[#21262d] dark:text-[#c9d1d9] dark:border-[#30363d] light:bg-[#f6f8fa] light:text-[#24292f] light:border-[#d0d7de]">
                          +{project.tech.length - 3}
                        </Badge>
                      </motion.div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="text-[#8b949e] dark:text-[#8b949e] light:text-[#57606a] text-sm line-clamp-3">{project.description}</p>
                </CardContent>
                
                <CardFooter className="flex gap-4">
                  <Button variant="outline" size="sm" asChild className="gh-button flex-1 group">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" /> 
                      Repository
                    </a>
                  </Button>
                  <Button size="sm" asChild className="gh-button-primary flex-1 group relative overflow-hidden">
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <span className="relative z-10 flex items-center">
                        <Link className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                        Live Demo
                      </span>
                      <motion.span 
                        className="absolute inset-0 bg-white/20 -z-0"
                        initial={{ x: "-100%", opacity: 0.5 }}
                        whileHover={{ x: "100%", opacity: 0.2 }}
                        transition={{ duration: 0.6 }}
                      />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

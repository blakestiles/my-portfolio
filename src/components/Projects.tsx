
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Link } from 'lucide-react';
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
      languageColor: "#f1e05a" // JavaScript color
    },
    {
      title: "Personalized Recommendation Engine for E-Commerce",
      description: "A recommendation engine using Python and collaborative filtering algorithms to deliver personalized user experiences. Enhanced recommendation accuracy by 15% through GenAI models.",
      tech: ["Python", "Deep Learning", "AWS Lambda", "GenAI", "RESTful API"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      liveDemo: "#",
      github: "#",
      languageColor: "#3572A5" // Python color
    },
    {
      title: "Automated Code Analysis Tool",
      description: "A static code analysis tool using Python and abstract syntax trees, identifying vulnerabilities and ensuring adherence to best coding practices in distributed systems.",
      tech: ["Python", "AST", "D3.js", "Jenkins", "CI/CD"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      liveDemo: "#",
      github: "#",
      languageColor: "#3572A5" // Python color
    },
    {
      title: "Stock Price Prediction using Machine Learning",
      description: "Applied LSTM and CNN to predict stock price movements, aiming to improve financial decision-making by forecasting stock trends based on historical data.",
      tech: ["Machine Learning", "LSTM", "CNN", "Financial Analysis", "Data Science"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      liveDemo: "#",
      github: "#",
      languageColor: "#DA5B0B" // Jupyter Notebook color
    },
    {
      title: "G-Notify - A Personalized Mass Emailer",
      description: "A scalable mass mailing system enabling personalized content delivery to large audiences, optimizing email engagement through tailored messaging.",
      tech: ["Email Systems", "Personalization", "Scalable Architecture", "UX/UI"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      liveDemo: "#",
      github: "#",
      languageColor: "#2b7489" // TypeScript color
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
      className="py-20" 
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
              className="h-full"
            >
              <Card className="repo-card h-full flex flex-col">
                <div className="h-48 overflow-hidden rounded-t-md">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center mb-2">
                    <div 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: project.languageColor }}
                    ></div>
                    <span className="text-[#8b949e] text-xs">{project.tech[0]}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-[#1f6feb] transition-colors">
                    {project.title}
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
                        <Badge variant="outline" className="text-xs bg-[#21262d] text-[#c9d1d9] border-[#30363d]">
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
                        <Badge variant="outline" className="text-xs bg-[#21262d] text-[#c9d1d9] border-[#30363d]">
                          +{project.tech.length - 3}
                        </Badge>
                      </motion.div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-[#8b949e] text-sm">{project.description}</p>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button variant="outline" size="sm" asChild className="gh-button flex-1 group">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" /> 
                      Repository
                    </a>
                  </Button>
                  <Button size="sm" asChild className="gh-button-primary flex-1 group">
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <Link className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                      Live Demo
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

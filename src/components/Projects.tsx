
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Link } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Dynamic Web Application for Inventory Management",
      description: "A full-stack inventory management application using Node.js and React that streamlines inventory tracking processes for small businesses, improving operational efficiency by 25%.",
      tech: ["Node.js", "React", "RESTful API", "Authentication", "CRUD"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Personalized Recommendation Engine for E-Commerce",
      description: "A recommendation engine using Python and collaborative filtering algorithms to deliver personalized user experiences. Enhanced recommendation accuracy by 15% through GenAI models.",
      tech: ["Python", "Deep Learning", "AWS Lambda", "GenAI", "RESTful API"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Automated Code Analysis Tool",
      description: "A static code analysis tool using Python and abstract syntax trees, identifying vulnerabilities and ensuring adherence to best coding practices in distributed systems.",
      tech: ["Python", "AST", "D3.js", "Jenkins", "CI/CD"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Stock Price Prediction using Machine Learning",
      description: "Applied LSTM and CNN to predict stock price movements, aiming to improve financial decision-making by forecasting stock trends based on historical data.",
      tech: ["Machine Learning", "LSTM", "CNN", "Financial Analysis", "Data Science"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "G-Notify - A Personalized Mass Emailer",
      description: "A scalable mass mailing system enabling personalized content delivery to large audiences, optimizing email engagement through tailored messaging.",
      tech: ["Email Systems", "Personalization", "Scalable Architecture", "UX/UI"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      liveDemo: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-heading">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 my-2">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{tech}</Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="outline" className="text-xs">+{project.tech.length - 3}</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" /> 
                    GitHub
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <Link className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

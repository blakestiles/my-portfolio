
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SkillLogos from './SkillLogos';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C++", "TypeScript", "JavaScript", "HTML5", "CSS3", "C#"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", ".NET", "Node.js", "Express.js", "Spring Boot", "Angular", "Flask"]
    },
    {
      title: "Database Management",
      skills: ["SQL", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Software Development",
      skills: ["RESTful APIs", "OOP", "Data Structures & Algorithms", "Agile/Scrum", "Unit Testing", "TDD", "API Development"]
    },
    {
      title: "Cloud Platforms",
      skills: ["AWS (Lambda, EC2, S3)", "Azure"]
    },
    {
      title: "Tools",
      skills: ["CI/CD", "JIRA", "Microsoft Office", "Jenkins", "Linux/Unix", "Docker", "Kubernetes", "Git"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>
        
        <SkillLogos />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="transition-all hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm bg-card/80 border border-muted/50">
                <CardHeader className="pb-2">
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-sm px-3 py-1 transition-all hover:bg-primary hover:text-primary-foreground">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

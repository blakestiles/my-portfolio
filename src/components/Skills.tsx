
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SkillLogos from './SkillLogos';
import { motion } from 'framer-motion';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const Skills = () => {
  const [sectionRef, isInView] = useIntersectionObserver<HTMLElement>({ 
    threshold: 0.1,
    triggerOnce: false
  });

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
    <section 
      id="skills" 
      className="py-20 bg-[#161b22]"
      ref={sectionRef}
    >
      <div className="section-container">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>
        
        <SkillLogos />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="repo-card h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-white">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        className="bg-[#21262d] text-white hover:bg-[#30363d] border border-[#30363d]"
                      >
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


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
      skills: ["Java", "Python", "C++", "TypeScript", "JavaScript", "HTML5", "CSS3", "C#"],
      icon: "🧠",
      color: "from-[#8957E5] to-[#D2A8FF]", // Purple gradient
      delay: 0
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", ".NET", "Node.js", "Express.js", "Spring Boot", "Angular", "Flask"],
      icon: "🛠️",
      color: "from-[#1F6FEB] to-[#58A6FF]", // Blue gradient
      delay: 0.1
    },
    {
      title: "Database Management",
      skills: ["SQL", "PostgreSQL", "MongoDB"],
      icon: "💾",
      color: "from-[#3FB27F] to-[#77E1B3]", // Green gradient
      delay: 0.2
    },
    {
      title: "Software Development",
      skills: ["RESTful APIs", "OOP", "Data Structures & Algorithms", "Agile/Scrum", "Unit Testing", "TDD", "API Development"],
      icon: "🔄",
      color: "from-[#F85149] to-[#FF7B72]", // Red gradient
      delay: 0.3
    },
    {
      title: "Cloud Platforms",
      skills: ["AWS (Lambda, EC2, S3)", "Azure"],
      icon: "☁️",
      color: "from-[#F97316] to-[#FDBA74]", // Orange gradient
      delay: 0.4
    },
    {
      title: "Tools",
      skills: ["CI/CD", "JIRA", "Microsoft Office", "Jenkins", "Linux/Unix", "Docker", "Kubernetes", "Git"],
      icon: "🔧",
      color: "from-[#6E7681] to-[#AFB8C1]", // Gray gradient
      delay: 0.5
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
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                transition: { type: "spring", stiffness: 400, damping: 10 } 
              }}
              custom={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                transition: { 
                  duration: 0.6, 
                  delay: category.delay,
                  ease: [0.4, 0.0, 0.2, 1] 
                } 
              } : { opacity: 0, y: 50 }}
            >
              <Card className="repo-card h-full overflow-hidden relative group">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r border border-transparent rounded-lg p-[1px] -m-[1px] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                     style={{backgroundImage: `linear-gradient(to right, ${category.color.replace('from-', '').replace('to-', '')})`}}></div>
                
                <CardHeader className="pb-2 relative z-10">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-white group-hover:bg-gradient-to-r group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300" 
                             style={{backgroundImage: `linear-gradient(to right, ${category.color.replace('from-', '').replace('to-', '')})`}}>
                      {category.title}
                    </CardTitle>
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.05
                        }
                      }
                    }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: { opacity: 1, scale: 1 }
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20
                        }}
                        whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 0], transition: { duration: 0.3 } }}
                      >
                        <Badge 
                          className={`bg-[#21262d] text-white hover:bg-gradient-to-r ${category.color} border border-[#30363d] transition-all duration-300`}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>

                {/* Background shine effect */}
                <div className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700"
                     style={{backgroundImage: `linear-gradient(to right, ${category.color.replace('from-', '').replace('to-', '')})`}}></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

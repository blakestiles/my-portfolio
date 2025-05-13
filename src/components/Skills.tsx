
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SkillLogos from './SkillLogos';
import { motion } from 'framer-motion';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const Skills = () => {
  const [sectionRef, isInView] = useIntersectionObserver<HTMLElement>({ 
    threshold: 0.1,
    triggerOnce: false,
    reappear: true
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: "/skills/javascript.svg" },
        { name: "TypeScript", icon: "/skills/typescript.svg" },
        { name: "Python", icon: "/skills/python.svg" },
        { name: "Java", icon: "/skills/java.svg" },
        { name: "C++", icon: "/skills/cpp.svg" },
        { name: "HTML5", icon: "/skills/html.svg" },
        { name: "CSS3", icon: "/skills/css.svg" },
        { name: "C#", icon: "/skills/csharp.svg" }
      ],
      color: "from-[#8957E5] to-[#D2A8FF]", // Purple gradient
      delay: 0
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: "/skills/react.svg" },
        { name: ".NET", icon: "/skills/dotnet.svg" },
        { name: "Node.js", icon: "/skills/nodejs.svg" },
        { name: "Express.js", icon: "/skills/express.svg" },
        { name: "Spring Boot", icon: "/skills/spring.svg" },
        { name: "Angular", icon: "/skills/angular.svg" },
        { name: "Flask", icon: "/skills/flask.svg" }
      ],
      color: "from-[#1F6FEB] to-[#58A6FF]", // Blue gradient
      delay: 0.1
    },
    {
      title: "Database Management",
      skills: [
        { name: "SQL", icon: "/skills/sql.svg" },
        { name: "PostgreSQL", icon: "/skills/postgresql.svg" },
        { name: "MongoDB", icon: "/skills/mongodb.svg" }
      ],
      color: "from-[#3FB27F] to-[#77E1B3]", // Green gradient
      delay: 0.2
    },
    {
      title: "Software Development",
      skills: [
        { name: "RESTful APIs", icon: "/skills/api.svg" },
        { name: "OOP", icon: "/skills/oop.svg" },
        { name: "Data Structures", icon: "/skills/data-structure.svg" },
        { name: "Agile/Scrum", icon: "/skills/agile.svg" },
        { name: "Unit Testing", icon: "/skills/testing.svg" },
        { name: "TDD", icon: "/skills/tdd.svg" },
        { name: "API Development", icon: "/skills/api-dev.svg" }
      ],
      color: "from-[#F85149] to-[#FF7B72]", // Red gradient
      delay: 0.3
    },
    {
      title: "Cloud Platforms",
      skills: [
        { name: "AWS", icon: "/skills/aws.svg" },
        { name: "Azure", icon: "/skills/azure.svg" }
      ],
      color: "from-[#F97316] to-[#FDBA74]", // Orange gradient
      delay: 0.4
    },
    {
      title: "Tools",
      skills: [
        { name: "CI/CD", icon: "/skills/cicd.svg" },
        { name: "JIRA", icon: "/skills/jira.svg" },
        { name: "Office", icon: "/skills/office.svg" },
        { name: "Jenkins", icon: "/skills/jenkins.svg" },
        { name: "Linux", icon: "/skills/linux.svg" },
        { name: "Docker", icon: "/skills/docker.svg" },
        { name: "Kubernetes", icon: "/skills/kubernetes.svg" },
        { name: "Git", icon: "/skills/git.svg" }
      ],
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

  const extractColors = (colorString) => {
    if (!colorString) return { start: '#8957E5', end: '#D2A8FF' };
    
    try {
      const fromMatch = colorString.match(/from-\[(.*?)\]/);
      const toMatch = colorString.match(/to-\[(.*?)\]/);
      
      return {
        start: fromMatch ? fromMatch[1] : '#8957E5',
        end: toMatch ? toMatch[1] : '#D2A8FF'
      };
    } catch (error) {
      console.error("Error extracting colors:", error);
      return { start: '#8957E5', end: '#D2A8FF' };
    }
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
          key={isInView ? "view" : "hidden"} // Key helps force re-animation
        >
          {skillCategories.map((category, index) => {
            const colors = extractColors(category.color);
            
            return (
              <motion.div 
                key={index} 
                whileHover={{ 
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 400, damping: 10 } 
                }}
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
                className="relative"
              >
                <div className="perspective-1000">
                  <Card className="bg-[#0d1117] h-full overflow-hidden relative group transform transition-all duration-500 hover:shadow-2xl backdrop-blur-sm bg-opacity-80 border border-[#30363d] hover:border-opacity-0">
                    {/* Animated gradient border */}
                    <div 
                      className="absolute inset-0 p-[2px] rounded-lg bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-slow z-0"
                      style={{backgroundImage: `linear-gradient(45deg, ${colors.start}, ${colors.end}, ${colors.start})`}}
                    ></div>
                    
                    {/* Animated spotlight effect */}
                    <div 
                      className="absolute -inset-[150px] opacity-0 group-hover:opacity-40 group-hover:blur-xl transition-all duration-700 z-0"
                      style={{
                        background: `radial-gradient(circle, ${colors.start}50 0%, transparent 70%)`,
                        transform: 'translateZ(0)',
                        animation: 'spotlight-effect 4s ease infinite'
                      }}
                    ></div>
                    
                    <CardHeader className="pb-2 relative z-10 bg-[#0d1117]/90">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r transition-all duration-300" 
                                style={{backgroundImage: `linear-gradient(to right, ${colors.start}, ${colors.end})`}}>
                          <motion.span
                            initial={{ backgroundSize: '100% 0%' }}
                            animate={{ backgroundSize: '100% 100%' }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                          >
                            {category.title}
                          </motion.span>
                        </CardTitle>
                        {category.icon && (
                          <motion.span 
                            className="text-3xl"
                            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                          >
                            {category.icon}
                          </motion.span>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="relative z-10 bg-[#0d1117]/90">
                      <motion.div 
                        className="flex flex-wrap gap-3"
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
                            whileHover={{ 
                              scale: 1.1, 
                              rotate: [-1, 1, -1, 0], 
                              transition: { duration: 0.3 } 
                            }}
                          >
                            <Badge 
                              className="bg-[#21262d] text-white border border-[#30363d] transition-all duration-300 group-hover:shadow-md flex items-center gap-1.5 px-3 py-1.5"
                              style={{
                                '--glow-color': colors.start
                              } as React.CSSProperties}
                              onMouseOver={(e) => {
                                e.currentTarget.style.backgroundImage = `linear-gradient(to right, ${colors.start}, ${colors.end})`;
                                e.currentTarget.style.boxShadow = `0 0 10px ${colors.start}`;
                              }}
                              onMouseOut={(e) => {
                                e.currentTarget.style.backgroundImage = '';
                                e.currentTarget.style.boxShadow = '';
                              }}
                            >
                              {/* Icon for the skill */}
                              {skill.icon && (
                                <img 
                                  src={skill.icon} 
                                  alt={skill.name} 
                                  className="w-4 h-4 object-contain"
                                  loading="lazy"
                                />
                              )}
                              {skill.name}
                              {/* Animated shine effect */}
                              <span className="absolute inset-0 w-full h-full shine-effect"></span>
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Interactive particle background */}
                      <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden opacity-30 pointer-events-none z-0">
                        <div className="absolute w-full h-full">
                          {Array.from({length: 5}).map((_, i) => (
                            <div 
                              key={i} 
                              className="absolute rounded-full" 
                              style={{
                                width: `${Math.random() * 8 + 4}px`,
                                height: `${Math.random() * 8 + 4}px`,
                                left: `${Math.random() * 100}%`,
                                bottom: `-20px`,
                                background: `linear-gradient(to top, ${colors.start}, transparent)`,
                                animation: `floatParticle ${Math.random() * 3 + 2}s linear infinite`,
                                animationDelay: `${Math.random() * 2}s`,
                                opacity: Math.random() * 0.5 + 0.3
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

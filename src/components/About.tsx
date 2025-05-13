
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { School, Calendar, BookOpen, Award, Bookmark } from 'lucide-react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const About = () => {
  const [sectionRef, isInView] = useIntersectionObserver<HTMLElement>({
    threshold: 0.2,
    triggerOnce: false,
    reappear: true
  });

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.4, 0.0, 0.2, 1] } 
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1, 
      transition: { duration: 0.7, ease: [0.4, 0.0, 0.2, 1] } 
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: [0.4, 0.0, 0.2, 1],
        delay: custom * 0.2
      } 
    })
  };
  
  const educationVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({ 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        delay: i * 0.2,
        ease: [0.4, 0.0, 0.2, 1] 
      } 
    })
  };

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "California State University, Fullerton",
      period: "Aug 2024 - Aug 2026",
      details: [
        "GPA: 3.9/4.0",
        "Relevant Coursework: Artificial Intelligence, Database Management Systems, Algorithms, Advance Computer Networking."
      ],
      color: "from-[#1f6feb] to-[#58a6ff]" // Blue gradient
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "The National Institute of Engineering, Mysuru",
      period: "Aug 2019 - Aug 2023",
      details: [
        "GPA: 3.5/4.0",
        "Relevant Coursework: Operating Systems, Cloud Computing, Computer Networks, System Design, Software Engineering."
      ],
      color: "from-[#238636] to-[#3fb950]" // Green gradient
    }
  ];

  const extractColors = (colorString) => {
    if (!colorString) return { start: '#1f6feb', end: '#58a6ff' };
    
    try {
      const fromMatch = colorString.match(/from-\[(.*?)\]/);
      const toMatch = colorString.match(/to-\[(.*?)\]/);
      
      return {
        start: fromMatch ? fromMatch[1] : '#1f6feb',
        end: toMatch ? toMatch[1] : '#58a6ff'
      };
    } catch (error) {
      console.error("Error extracting colors:", error);
      return { start: '#1f6feb', end: '#58a6ff' };
    }
  };

  const orbVariants = {
    animate: {
      x: [0, 10, 0, -10, 0],
      y: [0, 10, 0, -10, 0],
      transition: {
        x: { repeat: Infinity, duration: 20, ease: "easeInOut" },
        y: { repeat: Infinity, duration: 20, ease: "easeInOut", delay: 0.5 }
      }
    }
  };

  return (
    <section 
      id="about" 
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
          About <span className="gradient-text">Me</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="perspective-1000"
          >
            <div className="relative transform-3d hover:rotate-y-15 transition-all duration-700">
              <motion.div 
                className="p-1 rounded-lg bg-gradient-to-r from-[#1f6feb] to-[#238636] shadow-xl"
                whileHover={{ 
                  boxShadow: "0 0 25px rgba(31, 111, 235, 0.6), 0 0 25px rgba(35, 134, 54, 0.6)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-square bg-cover bg-center rounded-lg border border-[#30363d] overflow-hidden">
                  <img 
                    src="/lovable-uploads/52b0acc4-5c41-4817-9737-874d9163cf63.png" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              {/* Animated orbs and particles */}
              <motion.div 
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#238636]/10 rounded-full z-0"
                variants={orbVariants}
                animate="animate"
              />
              <motion.div 
                className="absolute -top-4 -left-4 w-12 h-12 bg-[#1f6feb]/10 rounded-full z-0"
                variants={orbVariants}
                animate="animate"
              />
              <motion.div 
                className="absolute top-1/4 right-0 w-3 h-3 bg-[#1f6feb] rounded-full"
                animate={{
                  y: [0, 30, 0],
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute bottom-1/3 left-0 w-2 h-2 bg-[#238636] rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.3, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
          
          <div className="space-y-5">
            <motion.h3 
              className="text-2xl font-bold text-white"
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              A passionate software engineer focused on creating impactful solutions
            </motion.h3>
            
            <motion.p 
              className="text-[#8b949e] leading-relaxed"
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.1 }}
            >
              My passion lies in contributing to large-scale, real-time systems by solving scalability bottlenecks, optimizing services, and deploying impactful features. I thrive in dynamic environments where collaboration and continuous learning are emphasized.
            </motion.p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.div 
                className="w-full sm:w-[calc(50%-0.5rem)]"
                custom={0}
                variants={statsVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <Card className="repo-card hover:border-[#238636]">
                  <CardContent className="p-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-[#238636]">1</span>
                      <span className="text-xl font-bold text-[#238636]">+</span>
                    </div>
                    <div className="font-medium text-white mt-1">Years of Experience</div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div 
                className="w-full sm:w-[calc(50%-0.5rem)]"
                custom={1}
                variants={statsVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <Card className="repo-card hover:border-[#1f6feb]">
                  <CardContent className="p-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-[#1f6feb]">5</span>
                      <span className="text-xl font-bold text-[#1f6feb]">+</span>
                    </div>
                    <div className="font-medium text-white mt-1">Completed Projects</div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Education Section */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h3 
            className="text-2xl font-bold mb-8 text-center text-white"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span className="bg-gradient-to-r from-[#1f6feb] to-[#58a6ff] text-transparent bg-clip-text">Education</span>
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => {
              const colors = extractColors(edu.color);
              
              return (
                <motion.div 
                  key={index}
                  custom={index}
                  variants={educationVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <Card className="repo-card h-full bg-[#0d1117] border-l-4 overflow-hidden relative hover:shadow-xl transition-all duration-500"
                         style={{ borderLeftColor: colors.start }}>
                    {/* Animated spotlight effect */}
                    <div 
                      className="absolute -inset-[150px] opacity-0 group-hover:opacity-40 group-hover:blur-xl transition-all duration-700 z-0"
                      style={{
                        background: `radial-gradient(circle, ${colors.start}50 0%, transparent 70%)`,
                        transform: 'translateZ(0)',
                        animation: 'spotlight-effect 4s ease infinite'
                      }}
                    />
                    
                    {/* Card Content */}
                    <div className="p-6 relative z-10">
                      <div className="flex items-center mb-4">
                        <div className={`h-10 w-10 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center text-white shadow-lg`}>
                          <School className="h-5 w-5" />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r transition-all duration-300"
                              style={{backgroundImage: `linear-gradient(to right, ${colors.start}, ${colors.end})`}}>
                            {edu.degree}
                          </h4>
                          <p className="text-[#8b949e]">{edu.institution}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-3 text-sm text-[#8b949e]">
                        <Calendar className="h-4 w-4 mr-2 inline" />
                        {edu.period}
                      </div>
                      
                      <div className="space-y-2">
                        {edu.details.map((detail, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0, transition: { delay: 0.5 + (index * 0.2) + (i * 0.1) } } : {}}
                            className="flex items-start"
                          >
                            {i === 0 ? (
                              <Award className="h-4 w-4 mr-2 text-[#8b949e] mt-1 shrink-0" />
                            ) : (
                              <BookOpen className="h-4 w-4 mr-2 text-[#8b949e] mt-1 shrink-0" />
                            )}
                            <p className="text-[#8b949e]">{detail}</p>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Achievement Badge */}
                      <motion.div 
                        className="absolute top-4 right-4"
                        whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <Bookmark className="h-6 w-6" style={{color: colors.start}} />
                      </motion.div>
                      
                      {/* Animated border glow on hover */}
                      <motion.div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        animate={{ 
                          boxShadow: [`0 0 0 1px ${colors.start}30`, `0 0 0 2px ${colors.start}40`, `0 0 0 1px ${colors.start}30`]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      />
                      
                      {/* Flying particles animation */}
                      {isInView && [...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 rounded-full"
                          style={{
                            background: i % 2 === 0 ? colors.start : colors.end,
                            left: `${Math.random() * 100}%`,
                            bottom: "10%"
                          }}
                          animate={{
                            y: [0, -40 - (Math.random() * 60)],
                            x: [0, (Math.random() * 40) - 20],
                            opacity: [0.7, 0],
                            scale: [1, 0]
                          }}
                          transition={{
                            duration: 2 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const Experience = () => {
  const [sectionRef, isInView] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
    triggerOnce: false,
    reappear: true
  });

  const experiences = [
    {
      company: "BOEING",
      role: "Software Developer",
      period: "Aug 2023 - Aug 2024",
      highlights: [
        "Led the Critical Parts Tracking System (CPTS) project using SpringBoot for the back-end and Angular for the front-end, improving real-time tracking of critical aerospace parts.",
        "Designed and implemented new features for CPTS, focusing on creating a user-friendly interface that allowed team members to access real-time data.",
        "Conducted end-to-end testing for CPTS, validating the application's robustness and performance, reducing errors by 30%.",
        "Optimized the Wireless Business Management System (WBMS) using React for the front-end, reducing system latency by 15%.",
        "Implemented real-time data synchronization features in WBMS, allowing business teams to monitor wireless systems efficiently.",
        "Actively participated in Agile Scrum ceremonies to ensure continuous delivery of value."
      ],
      technologies: ["SpringBoot", "Angular", "React", "Agile", "Testing"],
      color: "from-[#3FB27F] to-[#77E1B3]" // Green gradient
    },
    {
      company: "BLOCMATRIX IT SOLUTIONS",
      role: "Software Developer Intern",
      period: "Feb 2023 - Jun 2023",
      highlights: [
        "Designed and implemented distributed storage and query systems using AWS Lambda and DynamoDB, ensuring high availability.",
        "Built a scalable data pipeline leveraging Kubernetes, enabling real-time predictions and handling high-volume workloads.",
        "Developed an automated testing framework using Python, increasing code coverage by 30%.",
        "Participated in Agile ceremonies to drive team productivity and deliverables.",
        "Enhanced cross-functional collaboration by designing and implementing RESTful APIs."
      ],
      technologies: ["AWS", "Kubernetes", "Python", "RESTful APIs", "DynamoDB", "Lambda"],
      color: "from-[#1F6FEB] to-[#58A6FF]" // Blue gradient
    },
    {
      company: "NULLCLASS",
      role: "Web Developer Intern",
      period: "Oct 2022 - Dec 2022",
      highlights: [
        "Created a cloud-based travel booking platform using React and Node.js, offering real-time booking capabilities.",
        "Designed and implemented distributed indexing mechanisms, reducing search response times by 35%.",
        "Conducted formal verification of critical modules to ensure operational reliability.",
        "Utilized property-based testing tools such as QuickCheck to identify edge-case failures.",
        "Collaborated with UX teams to refine the user interface, increasing usability scores by 25%."
      ],
      technologies: ["React", "Node.js", "Cloud Services", "UX Design", "Testing"],
      color: "from-[#8957E5] to-[#D2A8FF]" // Purple gradient
    },
    {
      company: "DELOITTE",
      role: "Virtual Experience Intern",
      period: "Aug 2022 - Sep 2022",
      highlights: [
        "Automated data analysis workflows using Python and advanced scripting, achieving a 15% improvement in processing speed.",
        "Designed and deployed a secure, distributed ledger system utilizing blockchain principles to ensure data integrity.",
        "Engaged in theorem proving and symbolic execution methodologies for verifying complex financial models.",
        "Documented intricate processes and developed a comprehensive knowledge base for team-wide use.",
        "Participated in Agile project workflows, contributing to sprint reviews and planning."
      ],
      technologies: ["Python", "Blockchain", "Agile", "Documentation", "Financial Modeling"],
      color: "from-[#F85149] to-[#FF7B72]" // Red gradient
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: (i) => ({
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.4, 0.0, 0.2, 1],
        delay: i * 0.1
      }
    })
  };

  // Improved helper function to extract and format gradient colors safely
  const extractColors = (colorString) => {
    // Default colors if extraction fails
    const defaultColors = { start: '#238636', end: '#238636' };
    
    if (!colorString) return defaultColors;
    
    try {
      const fromMatch = colorString && colorString.match(/from-\[(.*?)\]/);
      const toMatch = colorString && colorString.match(/to-\[(.*?)\]/);
      
      return {
        start: fromMatch && fromMatch[1] ? fromMatch[1] : defaultColors.start,
        end: toMatch && toMatch[1] ? toMatch[1] : defaultColors.end
      };
    } catch (error) {
      console.error("Error extracting colors:", error);
      return defaultColors;
    }
  };

  return (
    <section 
      id="experience" 
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
          Work <span className="gradient-text">Experience</span>
        </motion.h2>
        
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#30363d] z-0"></div>
          
          <motion.div 
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            key={isInView ? "view" : "hidden"}
          >
            {experiences.map((exp, index) => {
              // Safely extract colors with error handling
              const colors = extractColors(exp.color);
              
              return (
                <motion.div 
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Timeline dot with pulse animation */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-4">
                    <motion.div 
                      className={`h-4 w-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-[#0d1117] z-10 relative`}
                      animate={{ 
                        boxShadow: ['0 0 0 0 rgba(35, 134, 54, 0)', '0 0 0 8px rgba(35, 134, 54, 0.3)', '0 0 0 0 rgba(35, 134, 54, 0)']
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    />
                  </div>
                  
                  {/* Date indicator */}
                  <div className="md:w-1/2 py-2 px-4 md:px-8 flex items-center">
                    <motion.div 
                      className={`bg-[#21262d] text-[#c9d1d9] py-1 px-3 rounded-full text-sm inline-block ${index % 2 === 0 ? 'md:ml-auto' : ''} shadow-lg`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {exp.period}
                    </motion.div>
                  </div>
                  
                  {/* Content card */}
                  <div className="md:w-1/2 py-2 px-4 md:px-8">
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="group"
                    >
                      <Card className={`repo-card border-l-4 bg-gradient-to-br from-[#161b22] to-[#1c2129] hover:shadow-xl transition-all duration-300`}
                          style={{ borderLeftColor: colors.start }}
                          onMouseEnter={(e) => e.currentTarget.style.setProperty('--border-color', `linear-gradient(to bottom, ${colors.start}, ${colors.end})`)}
                          onMouseLeave={(e) => e.currentTarget.style.setProperty('--border-color', colors.start)}>
                        
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-1">
                            <Briefcase className="h-4 w-4" style={{color: colors.start}} />
                            <span className="text-[#8b949e] font-semibold">{exp.company}</span>
                          </div>
                          <CardTitle className="text-xl group-hover:bg-clip-text group-hover:text-transparent" 
                                     style={{backgroundImage: `linear-gradient(to right, ${colors.start}, ${colors.end})`}}>
                            {exp.role}
                          </CardTitle>
                        </CardHeader>
                        
                        <CardContent>
                          <ul className="list-disc list-inside space-y-2 mb-4 text-[#8b949e]">
                            {exp.highlights.map((highlight, i) => (
                              <motion.li 
                                key={i} 
                                className="text-sm"
                                initial={{ opacity: 0, x: -5 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                              >
                                {highlight}
                              </motion.li>
                            ))}
                          </ul>
                          
                          <div className="flex flex-wrap gap-2 mt-4">
                            {exp.technologies.map((tech, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                              >
                                <Badge className={`bg-gradient-to-r ${exp.color} bg-opacity-10 text-white border border-[#30363d] hover:bg-opacity-30 transition-all duration-300`}>
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
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

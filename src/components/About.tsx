
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const About = () => {
  const [sectionRef, isInView] = useIntersectionObserver<HTMLElement>({
    threshold: 0.2,
    triggerOnce: false
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
          >
            <div className="relative">
              <div className="p-1 rounded-lg bg-gradient-to-r from-[#1f6feb] to-[#238636] shadow-xl">
                <div className="aspect-square bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')] bg-cover bg-center rounded-lg border border-[#30363d]"></div>
              </div>
              <motion.div 
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#238636]/10 rounded-full z-0"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 0.9, 0.7]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div 
                className="absolute -top-4 -left-4 w-12 h-12 bg-[#1f6feb]/10 rounded-full z-0"
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.6, 0.8, 0.6]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
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
              I am a highly adaptable software engineering student pursuing a Master's degree in Computer Science at California State University, Fullerton, with strong fundamentals in distributed systems, cloud computing, data structures, and algorithms.
            </motion.p>
            
            <motion.p 
              className="text-[#8b949e] leading-relaxed"
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
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
      </div>
    </section>
  );
};

export default About;

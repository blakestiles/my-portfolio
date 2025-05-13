
import React, { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Animate in the content
    setTimeout(() => {
      controls.start("visible");
    }, 100);
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.2
      } 
    }
  };
  
  const sectionVariants = {
    hidden: { 
      opacity: 0,
      y: 20 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <Navbar />
      <motion.div variants={sectionVariants}>
        <Hero />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <About />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Experience />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Projects />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Skills />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Contact />
      </motion.div>
    </motion.div>
  );
};

export default Index;

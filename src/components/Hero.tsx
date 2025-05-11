
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden pb-16 pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,hsl(var(--primary)/0.15)_0%,rgba(255,255,255,0)_100%)] dark:bg-[radial-gradient(45%_25%_at_50%_50%,hsl(var(--primary)/0.15)_0%,rgba(0,0,0,0)_100%)]"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-primary/10 filter blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-accent/10 filter blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="section-container">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          <motion.p 
            className="text-primary font-medium mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Software Developer
          </motion.p>
          <motion.h1 
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Hi, I'm <span className="gradient-text">Sainath Gandhe</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-8 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            A passionate software engineering student with expertise in distributed systems, 
            cloud computing, and full-stack development. I build scalable and efficient 
            solutions to complex problems.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="transition-all duration-300 hover:scale-105"
            >
              <a href="#projects">View My Work</a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <a href="#about" aria-label="Scroll down">
              <ArrowDown className="h-6 w-6 text-primary" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

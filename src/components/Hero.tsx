
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden pb-16 pt-32 bg-github-gradient">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,hsl(222_47%_11%_/_0.2)_0%,rgba(0,0,0,0)_100%)]"></div>
      
      {/* GitHub-style graphics */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#238636]/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#1f6feb]/5 rounded-full filter blur-3xl"></div>
      
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
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="h-32 w-32 rounded-full border-2 border-[#30363d] p-1 bg-[#161b22] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
          
          <motion.p 
            className="inline-block bg-[#1f6feb]/10 text-[#1f6feb] px-3 py-1 rounded-full font-medium text-sm mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Software Developer
          </motion.p>
          
          <motion.h1 
            className="mb-6 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Hi, I'm <span className="gradient-text">Sainath Gandhe</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-[#8b949e]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
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
              className="gh-button-primary transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="gh-button transition-all duration-300 hover:scale-105"
            >
              <a href="#projects">
                <Github className="mr-2 h-4 w-4" />
                View My Work
              </a>
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
            <a href="#about" aria-label="Scroll down" className="block p-2">
              <ArrowDown className="h-6 w-6 text-[#8b949e] hover:text-white transition-colors" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

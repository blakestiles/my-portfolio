import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden pb-16 pt-32 bg-github-gradient">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,hsl(222_47%_11%_/_0.2)_0%,rgba(0,0,0,0)_100%)]"></div>
      
      {/* GitHub-style graphics */}
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 bg-[#238636]/5 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-10 w-64 h-64 bg-[#1f6feb]/5 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
      
      <div className="section-container">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="flex-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="mb-8 flex justify-center lg:justify-start"
              variants={itemVariants}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#238636] to-[#1f6feb] rounded-full blur-md opacity-30 animate-pulse-subtle"></div>
                <div className="h-32 w-32 rounded-full border-2 border-[#30363d] p-1 bg-[#161b22] overflow-hidden relative z-10">
                  <img 
                    src="/lovable-uploads/a03692e5-c82d-4a3d-9867-8ccfcc8d132f.png" 
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                    loading="eager"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="inline-block bg-[#1f6feb]/10 text-[#1f6feb] px-3 py-1 rounded-full font-medium text-sm mb-4 lg:ml-0 mx-auto text-center lg:text-left"
            >
              Software Developer
            </motion.p>
            
            <motion.h1 
              variants={itemVariants}
              className="mb-6 text-white text-center lg:text-left"
            >
              Hi, I'm <span className="gradient-text">Sainath Gandhe</span>
            </motion.h1>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="gh-button-primary transition-all duration-300 hover:scale-105 group"
              >
                <span className="flex items-center">
                  <span>Get In Touch</span>
                  <motion.span 
                    className="ml-1 inline-block"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ repeat: Infinity, repeatDelay: 1.5, duration: 0.5 }}
                  >
                    →
                  </motion.span>
                </span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="gh-button transition-all duration-300 hover:scale-105 group"
              >
                <a href="https://github.com/blakestiles" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  <span>View My Work</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Code Editor Style Profile */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <div className="bg-[#0d1117] rounded-lg border border-[#30363d] shadow-xl overflow-hidden">
              <div className="flex items-center px-4 py-2 bg-[#161b22] border-b border-[#30363d]">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="ml-2 flex items-center space-x-1 text-sm text-[#8b949e]">
                  <Terminal size={14} />
                  <span>developer.js</span>
                </div>
              </div>
              <div className="font-mono text-sm p-5 overflow-hidden">
                <div className="text-[#e34c26] mb-2">
                  <span className="text-[#8b949e]">// Welcome to my portfolio</span>
                </div>
                
                <TypeAnimation
                  sequence={[
                    `const profile = {
  name: 'Sainath Gandhe',
  title: 'Software Developer | Cloud Enthusiast | Problem Solver',
  skills: [
    'Java', 'Python', 'JavaScript', 'TypeScript',
    'React', 'Node.js', 'Spring Boot', 'AWS', 'Azure'
  ],
  attributes: {
    hardworker: true,
    quickLearner: true,
    problemSolver: true,
    yearsOfExperience: 2
  },
  hireable: function() {
    return (
      this.hardworker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`,
                    1000
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={0}
                  style={{ 
                    display: 'block',
                    color: '#c9d1d9',
                    whiteSpace: 'pre-wrap',
                    lineHeight: '1.5' 
                  }}
                  className="language-javascript"
                />
                <div className="mt-4">
                  <span className="text-[#1f6feb]">console</span>
                  <span className="text-white">.</span>
                  <span className="text-[#d2a8ff]">log</span>
                  <span className="text-white">(</span>
                  <span className="text-[#a5d6ff]">'Ready to collaborate?'</span>
                  <span className="text-white">);</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <button 
              onClick={scrollToAbout} 
              aria-label="Scroll down" 
              className="block p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1f6feb] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1117] rounded-full"
            >
              <ArrowDown className="h-6 w-6 text-[#8b949e] hover:text-white transition-colors" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

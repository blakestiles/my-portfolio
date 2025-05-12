
import React from 'react';
import { Github, Linkedin, Mail, Heart, ChevronRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const Footer = () => {
  const [footerRef, isInView] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const currentYear = new Date().getFullYear();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Quick links with fancy hover effects
  const QuickLinks = () => {
    const links = ['about', 'experience', 'projects', 'skills', 'contact'];
    
    return (
      <div className="space-y-3">
        {links.map((section, index) => (
          <motion.div
            key={section}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
            className="transform transition-all duration-300 hover:-translate-y-1"
          >
            <a 
              href={`#${section}`} 
              className="flex items-center text-gray-300 hover:text-white transition-colors relative group"
            >
              <span className="absolute left-0 w-0 h-full border-l-2 border-[#1f6feb] group-hover:h-full duration-200 ease-out opacity-0 group-hover:opacity-100"></span>
              <ChevronRight className="h-4 w-4 mr-2 text-[#1f6feb] transform transition-transform duration-200 group-hover:translate-x-1" />
              <span className="capitalize relative overflow-hidden">
                {section}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#1f6feb] to-[#58a6ff] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
            </a>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <footer 
      className="bg-navy text-white relative overflow-hidden"
      ref={footerRef}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#238636]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#1f6feb]/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Quick Links Section */}
          <motion.div 
            variants={itemVariants}
            className="space-y-6"
          >
            <div className="relative">
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                <span className="bg-gradient-to-r from-[#1f6feb] to-[#58a6ff] text-transparent bg-clip-text">Quick Links</span>
                <motion.div 
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-[#1f6feb] to-[#58a6ff] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </h3>
              
              <div className="ml-4 space-y-6">
                <QuickLinks />
              </div>
            </div>
            
            {/* Footer animations */}
            <motion.div 
              className="absolute bottom-10 right-10 opacity-30 pointer-events-none"
              animate={{ 
                y: [0, -10, 0],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <div className="text-8xl font-bold text-[#1f6feb]/10">&lt;/&gt;</div>
            </motion.div>
          </motion.div>
          
          {/* Social Links Section */}
          <motion.div variants={itemVariants}>
            <div className="relative">
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                <span className="bg-gradient-to-r from-[#238636] to-[#3fb950] text-transparent bg-clip-text">Get Connected</span>
                <motion.div 
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-[#238636] to-[#3fb950] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                />
              </h3>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <motion.a 
                  href="https://github.com/sainath-gandhe" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-[#21262d] rounded-lg hover:bg-[#2d333b] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#8b949e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <Github className="h-6 w-6 text-[#c9d1d9] group-hover:text-white transition-colors" />
                </motion.a>
                
                <motion.a 
                  href="https://linkedin.com/in/sainath-gandhe" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-[#21262d] rounded-lg hover:bg-[#2d333b] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#1f6feb]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <Linkedin className="h-6 w-6 text-[#c9d1d9] group-hover:text-[#1f6feb] transition-colors" />
                </motion.a>
                
                <motion.a 
                  href="mailto:gandhe.sainath@csu.fullerton.edu" 
                  className="p-3 bg-[#21262d] rounded-lg hover:bg-[#2d333b] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#238636]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <Mail className="h-6 w-6 text-[#c9d1d9] group-hover:text-[#238636] transition-colors" />
                </motion.a>
              </div>
              
              {/* Contact Cards */}
              <div className="space-y-4">
                <motion.div 
                  className="rounded-lg bg-[#21262d]/50 p-4 backdrop-blur-sm border border-[#30363d]/50 hover:border-[#8b949e]/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-[#21262d] p-2 rounded-lg">
                      <Mail className="h-5 w-5 text-[#1f6feb]" />
                    </div>
                    <div>
                      <p className="text-[#8b949e] text-xs">Email</p>
                      <p className="text-white text-sm">gandhe.sainath@csu.fullerton.edu</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="rounded-lg bg-[#21262d]/50 p-4 backdrop-blur-sm border border-[#30363d]/50 hover:border-[#8b949e]/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-[#21262d] p-2 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#238636]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                      <p className="text-[#8b949e] text-xs">Location</p>
                      <p className="text-white text-sm">Fullerton, CA</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <Separator className="my-8 bg-gray-700" />
        
        <motion.div 
          className="text-center text-gray-400 text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Sainath Gandhe. All rights reserved. Made with 
            <motion.span
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                repeat: Infinity,
                repeatDelay: 1.5,
                duration: 0.6
              }}
            >
              <Heart className="h-4 w-4 inline-block text-[#f85149]" />
            </motion.span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

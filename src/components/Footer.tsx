
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
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

  return (
    <footer 
      className="bg-navy text-white"
      ref={footerRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Sainath Gandhe</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Software developer specializing in building scalable and efficient solutions to complex problems.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['about', 'experience', 'projects', 'skills', 'contact'].map((section, index) => (
                <motion.li 
                  key={section}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                >
                  <a 
                    href={`#${section}`} 
                    className="text-gray-300 hover:text-white transition-colors relative group"
                  >
                    <span className="capitalize">{section}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1f6feb] group-hover:w-full transition-all duration-300"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="text-gray-300 mb-2">Fullerton, CA</p>
            <p className="text-gray-300 mb-2">gandhe.sainath@csu.fullerton.edu</p>
            <p className="text-gray-300 mb-4">714-519-7072</p>
            
            <div className="flex space-x-4">
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="mailto:gandhe.sainath@csu.fullerton.edu" 
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Mail className="h-5 w-5" />
              </motion.a>
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

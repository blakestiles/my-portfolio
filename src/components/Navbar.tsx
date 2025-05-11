
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, Code } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0d1117]/95 backdrop-blur-md border-b border-[#30363d] shadow-md' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <Code className="h-6 w-6 text-[#238636]" />
              <span className="text-xl font-heading font-bold text-white">Sainath Gandhe</span>
            </Link>
          </motion.div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link, i) => (
              <motion.div 
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Link 
                  to={link.href} 
                  className={`transition-colors relative group text-sm ${
                    activeSection === link.href.substring(1) 
                      ? 'text-white font-medium' 
                      : 'text-[#8b949e] hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1f6feb] group-hover:w-full transition-all duration-300 ${
                    activeSection === link.href.substring(1) ? 'w-full' : 'w-0'
                  }`}></span>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="hidden md:flex items-center space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" 
               className="text-[#8b949e] hover:text-white transition-transform hover:scale-110">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" 
               className="text-[#8b949e] hover:text-white transition-transform hover:scale-110">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:gandhe.sainath@csu.fullerton.edu" aria-label="Email" 
               className="text-[#8b949e] hover:text-white transition-transform hover:scale-110">
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-[#8b949e] hover:text-white transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-[#30363d] bg-[#161b22]">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <Link 
                to={link.href} 
                onClick={() => setIsOpen(false)} 
                className={`block px-3 py-2 rounded-md hover:bg-[#30363d] transition-colors ${
                  activeSection === link.href.substring(1) 
                    ? 'text-white bg-[#21262d]' 
                    : 'text-[#8b949e]'
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center space-x-6 py-4 bg-[#161b22] border-t border-[#30363d]">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" 
             className="text-[#8b949e] hover:text-white transition-transform hover:scale-110">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" 
             className="text-[#8b949e] hover:text-white transition-transform hover:scale-110">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:gandhe.sainath@csu.fullerton.edu" aria-label="Email" 
             className="text-[#8b949e] hover:text-white transition-transform hover:scale-110">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

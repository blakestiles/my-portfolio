
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Check if the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isMobile, mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const openResume = () => {
    // In a real environment, this would point to a PDF file
    window.open('/resume.pdf', '_blank');
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0d1117]/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-white font-bold text-xl relative group">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1f6feb] to-[#58a6ff] py-1">Portfolio</span>
          <motion.span
            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1f6feb] to-[#58a6ff]"
            animate={{ width: ['0%', '100%', '0%'] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <ul className="flex space-x-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="px-3 py-2 text-[#c9d1d9] hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#1f6feb] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              </li>
            ))}
          </ul>

          <Button asChild className="ml-4 gh-button-primary">
            <a href="#contact">Get In Touch</a>
          </Button>
          
          <Button 
            variant="outline" 
            onClick={openResume} 
            className="ml-2 border-[#30363d] hover:bg-[#1f6feb]/10 hover:text-white hover:border-[#1f6feb]"
          >
            <FileText className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="ml-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0d1117] border-t border-[#30363d]"
          >
            <div className="container mx-auto px-6 py-4">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={link.href}
                      className="block py-2 text-[#c9d1d9] hover:text-white transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.5 }}
                >
                  <Button asChild className="w-full gh-button-primary mt-2">
                    <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                      Get In Touch
                    </a>
                  </Button>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.6 }}
                >
                  <Button 
                    variant="outline" 
                    onClick={openResume} 
                    className="w-full mt-2 border-[#30363d] hover:bg-[#1f6feb]/10 hover:text-white hover:border-[#1f6feb]"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Resume
                  </Button>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

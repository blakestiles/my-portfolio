
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/80 dark:bg-navy/80 border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-heading font-bold gradient-text">
              Sainath Gandhe
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/#about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/#experience" className="hover:text-primary transition-colors">Experience</Link>
            <Link to="/#projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link to="/#skills" className="hover:text-primary transition-colors">Skills</Link>
            <Link to="/#contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 hover:text-primary transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
            </a>
            <a href="mailto:gandhe.sainath@csu.fullerton.edu" aria-label="Email">
              <Mail className="h-5 w-5 hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
          <Link to="/#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-primary transition-colors">About</Link>
          <Link to="/#experience" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-primary transition-colors">Experience</Link>
          <Link to="/#projects" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-primary transition-colors">Projects</Link>
          <Link to="/#skills" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-primary transition-colors">Skills</Link>
          <Link to="/#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-primary transition-colors">Contact</Link>
        </div>
        <div className="flex justify-center space-x-4 pb-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5 hover:text-primary transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
          </a>
          <a href="mailto:gandhe.sainath@csu.fullerton.edu" aria-label="Email">
            <Mail className="h-5 w-5 hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sainath Gandhe</h3>
            <p className="text-gray-300 mb-4">
              Software developer specializing in building scalable and efficient solutions to complex problems.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="text-gray-300 mb-2">Fullerton, CA</p>
            <p className="text-gray-300 mb-2">gandhe.sainath@csu.fullerton.edu</p>
            <p className="text-gray-300 mb-4">714-519-7072</p>
            
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:gandhe.sainath@csu.fullerton.edu" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-700" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>© {currentYear} Sainath Gandhe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

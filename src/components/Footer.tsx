import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: Github, href: 'https://github.com/blakestiles', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sainathgandhe/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:gandhe.sainath@csu.fullerton.edu', label: 'Email' },
  ];

  return (
    <footer className="bg-[#0d1117] border-t border-[#30363d] py-10 relative overflow-hidden">
      {/* Dot-grid background matching hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #30363d 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.18,
        }}
      />

      <div className="section-container relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <p className="text-[#8b949e] text-sm">
              © {currentYear}{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1f6feb] to-[#58a6ff]">
                Sainath Gandhe
              </span>
              . All rights reserved.
            </p>
            <p className="text-[#8b949e]/40 text-xs flex items-center flex-wrap gap-x-1">
              Built with{' '}
              {[
                { name: 'React', href: 'https://react.dev' },
                { name: 'Vite', href: 'https://vitejs.dev' },
                { name: 'Tailwind', href: 'https://tailwindcss.com' },
                { name: 'Framer Motion', href: 'https://www.framer.com/motion' },
              ].map((tech, i, arr) => (
                <span key={tech.name}>
                  <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#8b949e] transition-colors duration-200"
                  >
                    {tech.name}
                  </a>
                  {i < arr.length - 1 && <span className="mx-0.5">·</span>}
                </span>
              ))}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[#8b949e] hover:text-white transition-colors"
                whileHover={{ scale: 1.15, y: -2 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

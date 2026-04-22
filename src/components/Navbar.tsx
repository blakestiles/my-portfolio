import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, FileText, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const NAV_LINKS = [
  { name: 'About',      href: '#about',      num: '01' },
  { name: 'Skills',     href: '#skills',     num: '02' },
  { name: 'Experience', href: '#experience', num: '03' },
  { name: 'Projects',   href: '#projects',   num: '04' },
  { name: 'Contact',    href: '#contact',    num: '05' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map(l => l.href.slice(1));
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  useEffect(() => {
    if (!isMobile && mobileMenuOpen) setMobileMenuOpen(false);
  }, [isMobile, mobileMenuOpen]);

  const openResume = () => window.open('/resume.pdf', '_blank');

  return (
    <header className="fixed top-0 w-full z-50">
      <div className={`transition-all duration-500 ${
        isScrolled ? 'mx-auto mt-4 max-w-2xl px-3' : 'mx-0 mt-0 px-0'
      }`}>
        <nav className={`flex justify-between items-center transition-all duration-500 ${
          isScrolled
            ? 'px-5 py-2 rounded-2xl bg-[#0d1117]/80 backdrop-blur-2xl shadow-2xl shadow-black/50'
            : 'px-6 py-5 bg-transparent'
        }`}
          style={isScrolled ? {
            border: '1px solid rgba(48, 54, 61, 0.8)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)',
          } : undefined}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group shrink-0">
            <motion.div
              className="flex items-center justify-center w-7 h-7 rounded-md bg-gradient-to-br from-[#1f6feb] to-[#238636] shadow-lg shadow-[#1f6feb]/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Code2 className="h-3.5 w-3.5 text-white" />
            </motion.div>
            <span className="font-bold text-base bg-clip-text text-transparent bg-gradient-to-r from-white to-[#8b949e] group-hover:to-white transition-all duration-300">
              Sainath G.
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            <ul className="flex items-center">
              {NAV_LINKS.map(link => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`relative flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                        isActive ? 'text-white' : 'text-[#8b949e] hover:text-[#c9d1d9]'
                      }`}
                    >
                      <span className={`font-mono text-[9px] transition-colors duration-200 ${
                        isActive ? 'text-[#1f6feb]' : 'text-[#30363d] group-hover:text-[#8b949e]'
                      }`}>{link.num}</span>
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="activeNav"
                          className="absolute inset-0 rounded-lg bg-[#1f6feb]/10 border border-[#1f6feb]/20"
                          transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="w-px h-4 bg-[#30363d] mx-2" />

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                onClick={openResume}
                className="h-8 px-3 text-sm font-medium border-[#30363d] bg-transparent text-[#c9d1d9] hover:bg-[#1f6feb]/10 hover:text-white hover:border-[#1f6feb]/60 transition-all duration-200 gap-1.5"
              >
                <FileText className="h-3.5 w-3.5" />
                Resume
              </Button>
            </motion.div>
          </div>

          {/* Mobile burger */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-[#8b949e] hover:text-white h-8 w-8 hover:bg-[#21262d]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={mobileMenuOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                >
                  {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden mx-3 mt-1 rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(13,17,23,0.95)',
              border: '1px solid rgba(48,54,61,0.8)',
              backdropFilter: 'blur(24px)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
            }}
          >
            <div className="px-4 py-3 space-y-0.5">
              {NAV_LINKS.map((link, i) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-white bg-[#1f6feb]/10 border border-[#1f6feb]/20'
                          : 'text-[#8b949e] hover:text-white hover:bg-[#21262d]'
                      }`}
                    >
                      <span className={`font-mono text-[9px] w-4 ${isActive ? 'text-[#1f6feb]' : 'text-[#30363d]'}`}>{link.num}</span>
                      {link.name}
                    </a>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.04, duration: 0.2 }}
                className="pt-2 pb-1"
              >
                <Button
                  variant="outline"
                  onClick={openResume}
                  className="w-full border-[#30363d] bg-transparent text-[#c9d1d9] hover:bg-[#1f6feb]/10 hover:text-white hover:border-[#1f6feb]/60 gap-2 transition-all duration-200"
                >
                  <FileText className="h-4 w-4" />
                  Resume
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

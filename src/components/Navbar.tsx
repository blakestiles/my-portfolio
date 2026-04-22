import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const NAV_LINKS = [
  { name: 'About', href: '#about', num: '01' },
  { name: 'Skills', href: '#skills', num: '02' },
  { name: 'Experience', href: '#experience', num: '03' },
  { name: 'Projects', href: '#projects', num: '04' },
  { name: 'Contact', href: '#contact', num: '05' },
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

  // Scroll-spy: track which section is in view
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
    <header className="fixed top-0 w-full z-50 transition-all duration-500">
      {/* Desktop: floating pill on scroll, full-width transparent when at top */}
      <div className={`transition-all duration-500 ${
        isScrolled
          ? 'mx-auto mt-3 max-w-3xl px-2'
          : 'mx-0 mt-0 px-0'
      }`}>
        <nav className={`flex justify-between items-center px-6 transition-all duration-500 ${
          isScrolled
            ? 'py-2.5 bg-[#0d1117]/95 backdrop-blur-xl border border-[#30363d] rounded-full shadow-2xl shadow-black/40'
            : 'py-4 bg-transparent'
        }`}>
          <a href="/" className="text-white font-bold text-xl relative group shrink-0">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1f6feb] to-[#58a6ff]">
              Sainath G.
            </span>
            <motion.span
              className="absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-[#1f6feb] to-[#58a6ff]"
              initial={{ width: '0%' }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            <ul className="flex gap-1">
              {NAV_LINKS.map(link => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`group relative px-3 py-1.5 text-sm rounded-full transition-all duration-200 ${
                        isActive
                          ? 'text-white bg-[#1f6feb]/15'
                          : 'text-[#8b949e] hover:text-white hover:bg-[#21262d]'
                      }`}
                    >
                      <span className="font-mono text-[10px] text-[#30363d] mr-1 group-hover:text-[#8b949e] transition-colors">{link.num}</span>{link.name}
                      {isActive && (
                        <motion.span
                          layoutId="activeNav"
                          className="absolute inset-0 rounded-full bg-[#1f6feb]/15 border border-[#1f6feb]/30"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <Button
              variant="outline"
              onClick={openResume}
              className="ml-2 h-8 text-sm border-[#30363d] text-[#c9d1d9] hover:bg-[#1f6feb]/10 hover:text-white hover:border-[#1f6feb]"
            >
              <FileText className="mr-1.5 h-3.5 w-3.5" />
              Resume
            </Button>
          </div>

          {/* Mobile burger */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white h-8 w-8"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0d1117]/98 backdrop-blur-xl border-t border-[#30363d]"
          >
            <div className="px-6 py-4 space-y-1">
              {NAV_LINKS.map((link, i) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2.5 px-3 rounded-lg text-sm transition-colors ${
                        isActive
                          ? 'text-white bg-[#1f6feb]/15 border border-[#1f6feb]/20'
                          : 'text-[#c9d1d9] hover:text-white hover:bg-[#21262d]'
                      }`}
                    >
                      {link.name}
                    </a>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
                className="pt-2"
              >
                <Button
                  variant="outline"
                  onClick={openResume}
                  className="w-full border-[#30363d] hover:bg-[#1f6feb]/10 hover:text-white hover:border-[#1f6feb]"
                >
                  <FileText className="mr-2 h-4 w-4" />
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

import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, FileText } from 'lucide-react';
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
    <header className="fixed top-0 w-full z-50 pointer-events-none">
      <motion.div
        className="pointer-events-auto"
        initial={false}
        animate={isScrolled
          ? { paddingLeft: 12, paddingRight: 12, paddingTop: 12 }
          : { paddingLeft: 0, paddingRight: 0, paddingTop: 0 }
        }
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.nav
          animate={isScrolled ? {
            maxWidth: 720,
            margin: '0 auto',
            borderRadius: 999,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 8,
            paddingBottom: 8,
          } : {
            maxWidth: '100%',
            margin: '0',
            borderRadius: 0,
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 18,
            paddingBottom: 18,
          }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="flex justify-between items-center relative"
          style={isScrolled ? {
            background: 'rgba(13,17,23,0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(48,54,61,0.7)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.03) inset',
          } : {
            background: 'transparent',
            border: 'none',
            boxShadow: 'none',
          }}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group shrink-0 select-none">
            <span className="font-mono text-[#30363d] text-sm group-hover:text-[#58a6ff] transition-colors duration-300">{'<'}</span>
            <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#e6edf3] to-[#8b949e] group-hover:to-[#e6edf3] transition-all duration-300">
              Sainath G.
            </span>
            <span className="font-mono text-[#30363d] text-sm group-hover:text-[#58a6ff] transition-colors duration-300">{'/>'}</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-5">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map(link => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`relative px-3 py-1.5 text-sm rounded-lg flex items-center gap-1.5 transition-colors duration-200 ${
                        isActive ? 'text-white' : 'text-[#8b949e] hover:text-[#c9d1d9]'
                      }`}
                    >
                      <span className={`font-mono text-[9px] leading-none transition-colors duration-200 ${
                        isActive ? 'text-[#1f6feb]' : 'text-[#30363d]'
                      }`}>{link.num}</span>
                      <span className="font-medium">{link.name}</span>
                      {isActive && (
                        <motion.span
                          layoutId="activeNav"
                          className="absolute inset-0 rounded-lg"
                          style={{ background: 'rgba(31,111,235,0.1)', border: '1px solid rgba(31,111,235,0.2)' }}
                          transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="h-4 w-px bg-[#30363d]" />

            <Button
              variant="outline"
              size="sm"
              onClick={openResume}
              className="border-[#30363d] bg-transparent text-[#c9d1d9] hover:bg-[#1f6feb]/10 hover:text-white hover:border-[#1f6feb]/50 transition-all duration-200 gap-1.5 rounded-lg h-8 text-xs font-medium"
            >
              <FileText className="h-3.5 w-3.5" />
              Resume
            </Button>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg text-[#8b949e] hover:text-white hover:bg-[#21262d] transition-colors duration-200"
            onClick={() => setMobileMenuOpen(v => !v)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={mobileMenuOpen ? 'x' : 'menu'}
                initial={{ opacity: 0, rotate: -60, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 60, scale: 0.7 }}
                transition={{ duration: 0.18 }}
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </motion.nav>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden mx-3 mt-1 rounded-2xl overflow-hidden pointer-events-auto"
            style={{
              background: 'rgba(13,17,23,0.96)',
              border: '1px solid rgba(48,54,61,0.8)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
            }}
          >
            <div className="px-3 py-3 space-y-0.5">
              {NAV_LINKS.map((link, i) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 py-2.5 px-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-white bg-[#1f6feb]/10 border border-[#1f6feb]/20'
                        : 'text-[#8b949e] hover:text-white hover:bg-[#21262d]'
                    }`}
                  >
                    <span className={`font-mono text-[9px] ${isActive ? 'text-[#1f6feb]' : 'text-[#30363d]'}`}>{link.num}</span>
                    {link.name}
                  </motion.a>
                );
              })}

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.04 }}
                className="pt-1.5 pb-0.5"
              >
                <Button
                  variant="outline"
                  onClick={() => { openResume(); setMobileMenuOpen(false); }}
                  className="w-full border-[#30363d] bg-transparent text-[#c9d1d9] hover:bg-[#1f6feb]/10 hover:text-white hover:border-[#1f6feb]/50 gap-2 transition-all duration-200 rounded-xl"
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

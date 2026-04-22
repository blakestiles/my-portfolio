import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Cpu, Briefcase, FolderOpen, Mail, FileText, Home } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const NAV_LINKS = [
  { name: 'About',      href: '#about',      icon: User },
  { name: 'Skills',     href: '#skills',     icon: Cpu },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects',   href: '#projects',   icon: FolderOpen },
  { name: 'Contact',    href: '#contact',    icon: Mail },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const isMobile = useIsMobile();

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 80) { setVisible(true); return; }
      setVisible(currentY < lastScrollY.current);
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-spy
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

  const openResume = () => window.open('/resume.pdf', '_blank');

  const displayLabel = hoveredItem ?? activeSection;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="fixed bottom-6 left-1/2 z-50"
          style={{ translateX: '-50%' }}
        >
          {/* Floating label above active item */}
          <AnimatePresence mode="wait">
            {displayLabel && (
              <motion.div
                key={displayLabel}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.15 }}
                className="flex justify-center mb-2"
              >
                <span className="text-[10px] font-medium text-[#8b949e] bg-[#161b22] border border-[#30363d] px-2 py-0.5 rounded-full tracking-wide">
                  {hoveredItem
                    ? NAV_LINKS.find(l => l.href.slice(1) === hoveredItem)?.name ?? 'Resume'
                    : NAV_LINKS.find(l => l.href.slice(1) === activeSection)?.name ?? ''}
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Nav pill */}
          <div
            className="flex items-center gap-1 px-2 py-2 rounded-2xl"
            style={{
              background: 'rgba(13, 17, 23, 0.85)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(48, 54, 61, 0.9)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
            }}
          >
            {/* Home / Logo button */}
            <motion.a
              href="#hero"
              className="relative flex items-center justify-center w-9 h-9 rounded-xl text-[#8b949e] hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              onHoverStart={() => setHoveredItem('hero')}
              onHoverEnd={() => setHoveredItem(null)}
              aria-label="Home"
            >
              <Home className="h-4 w-4" />
            </motion.a>

            {/* Divider */}
            <div className="w-px h-5 bg-[#30363d]/60 mx-0.5" />

            {/* Nav items */}
            {NAV_LINKS.map(link => {
              const isActive = activeSection === link.href.slice(1);
              const Icon = link.icon;
              const id = link.href.slice(1);
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="relative flex items-center justify-center w-10 h-9 rounded-xl transition-colors duration-200"
                  style={{ color: isActive ? '#fff' : '#8b949e' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                  onHoverStart={() => setHoveredItem(id)}
                  onHoverEnd={() => setHoveredItem(null)}
                  aria-label={link.name}
                >
                  {/* Active background bubble */}
                  {isActive && (
                    <motion.span
                      layoutId="navBubble"
                      className="absolute inset-0 rounded-xl"
                      style={{ background: 'rgba(31, 111, 235, 0.15)', border: '1px solid rgba(31, 111, 235, 0.3)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {/* Hover background */}
                  {!isActive && hoveredItem === id && (
                    <motion.span
                      layoutId="navHover"
                      className="absolute inset-0 rounded-xl bg-[#21262d]"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                  <Icon
                    className="relative z-10 h-4 w-4 transition-colors duration-200"
                    style={{ color: isActive ? '#58a6ff' : hoveredItem === id ? '#c9d1d9' : '#8b949e' }}
                  />
                  {/* Active dot indicator */}
                  {isActive && (
                    <motion.span
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#1f6feb]"
                      layoutId="navDot"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}

            {/* Divider */}
            <div className="w-px h-5 bg-[#30363d]/60 mx-0.5" />

            {/* Resume button */}
            <motion.button
              onClick={openResume}
              className="flex items-center gap-1.5 px-3 h-9 rounded-xl text-xs font-semibold text-white transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #238636, #2ea043)',
                boxShadow: '0 2px 8px rgba(35,134,54,0.3)',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 4px 16px rgba(35,134,54,0.45)',
              }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredItem('resume')}
              onHoverEnd={() => setHoveredItem(null)}
              aria-label="Open Resume"
            >
              <FileText className="h-3.5 w-3.5" />
              {!isMobile && <span>Resume</span>}
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;

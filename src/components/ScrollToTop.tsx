import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const CIRCUMFERENCE = 2 * Math.PI * 15; // r=15

const ScrollToTop = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPercent(total > 0 ? (scrolled / total) * 100 : 0);
      setVisible(scrolled > 300);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          onClick={scrollToTop}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 h-11 w-11 flex items-center justify-center
                     bg-[#161b22] border border-[#30363d] rounded-full
                     hover:border-[#1f6feb] hover:bg-[#1f6feb]/10 transition-colors group"
        >
          {showTooltip && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-[#c9d1d9] bg-[#161b22] border border-[#30363d] px-1.5 py-0.5 rounded whitespace-nowrap pointer-events-none">
              {Math.round(scrollPercent)}%
            </span>
          )}
          {/* Progress ring */}
          <svg
            className="absolute inset-0 -rotate-90"
            viewBox="0 0 36 36"
            width="44"
            height="44"
          >
            <circle cx="18" cy="18" r="15" fill="none" stroke="#30363d" strokeWidth="1.5" />
            <circle
              cx="18" cy="18" r="15"
              fill="none"
              stroke="#1f6feb"
              strokeWidth="1.5"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={CIRCUMFERENCE - (scrollPercent / 100) * CIRCUMFERENCE}
              strokeLinecap="round"
              className="transition-all duration-100"
            />
          </svg>
          <ArrowUp className="h-4 w-4 text-[#8b949e] group-hover:text-[#1f6feb] transition-colors relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;

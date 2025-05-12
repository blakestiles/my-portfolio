
"use client";

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  // Toggle between 'light' and 'dark' theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full relative overflow-hidden"
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{ 
          rotate: theme === "light" ? 0 : 180,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 0.5, 
          type: "spring", 
          stiffness: 200,
          scale: { duration: 0.2 }
        }}
        className="relative z-10"
      >
        {theme === "light" ? (
          <Sun className="h-5 w-5 text-yellow-500" />
        ) : (
          <Moon className="h-5 w-5 text-blue-300" />
        )}
      </motion.div>
      
      {/* Animated ripple effect on click */}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

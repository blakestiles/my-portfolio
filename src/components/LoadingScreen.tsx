
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onFinished: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            
            // Delay before triggering the exit animation
            setTimeout(() => {
              setShowContent(false);
              
              // Delay before calling onFinished to allow exit animation
              setTimeout(onFinished, 800);
            }, 500);
            
            return 100;
          }
          return prevProgress + 2;
        });
      }, 30);
      
      return () => clearInterval(interval);
    }, 500); // Initial delay before starting progress
    
    return () => clearTimeout(timer);
  }, [onFinished]);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };
  
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } }
  };
  
  const codeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };
  
  const letterVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 }
  };
  
  const progressVariants = {
    initial: { width: 0 },
    animate: { width: `${progress}%` }
  };
  
  const text = "Hello World!";

  return (
    <AnimatePresence mode="wait">
      {showContent && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 flex items-center justify-center z-[100] bg-[#0d1117]"
        >
          <div className="w-full max-w-md px-8 py-12">
            <div className="flex flex-col items-center">
              {/* Terminal Window */}
              <div className="w-full bg-[#161b22] rounded-lg overflow-hidden border border-[#30363d] shadow-2xl">
                <div className="flex items-center px-4 py-2 bg-[#161b22] border-b border-[#30363d]">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="ml-4 text-xs text-[#8b949e]">terminal</div>
                </div>
                
                <div className="p-4 font-mono text-sm">
                  <div className="flex items-center mb-3">
                    <span className="text-[#1f6feb]">$</span>
                    <span className="ml-2 text-[#c9d1d9]">node welcome.js</span>
                  </div>
                  
                  <motion.div
                    variants={codeVariants}
                    initial="initial"
                    animate="animate"
                    className="flex items-center text-xl sm:text-2xl text-[#58a6ff] mb-6 mt-4"
                  >
                    <span className="text-[#e34c26]">console.</span>
                    <span className="text-[#d2a8ff]">log</span>
                    <span className="text-white">(</span>
                    <motion.span className="text-[#a5d6ff] flex">
                      <span className="text-[#a5d6ff]">'</span>
                      {text.split('').map((char, index) => (
                        <motion.span
                          key={index}
                          variants={letterVariants}
                          className={`inline-block ${char === ' ' ? 'mx-1' : ''}`}
                        >
                          {char}
                        </motion.span>
                      ))}
                      <span className="text-[#a5d6ff]">'</span>
                    </motion.span>
                    <span className="text-white">);</span>
                  </motion.div>
                  
                  {/* Blinking cursor */}
                  <div className="flex items-center">
                    <span className="text-[#1f6feb]">$</span>
                    <div className="ml-2 h-4 w-2 bg-[#c9d1d9] animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              {/* Progress bar */}
              <div className="w-full h-1 bg-[#30363d] rounded-full mt-8 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#1f6feb] to-[#58a6ff]"
                  variants={progressVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.1 }}
                />
              </div>
              
              <motion.p
                variants={textVariants}
                initial="initial"
                animate="animate"
                className="mt-4 text-[#8b949e] text-sm"
              >
                {progress < 100 ? 'Loading portfolio...' : 'Ready!'}
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;


import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 bg-[#0d1117] border-t border-[#30363d]">
      <div className="section-container">
        <div className="flex flex-col items-center justify-center">
          <motion.p 
            className="text-[#8b949e] text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            © {currentYear} Sainath Gandhe. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

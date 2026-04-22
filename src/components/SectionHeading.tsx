import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label: string;
  accent: string;
  isInView: boolean;
}

const SectionHeading = ({ label, accent, isInView }: SectionHeadingProps) => (
  <motion.h2
    className="section-heading"
    initial={{ opacity: 0, y: -20 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    {label} <span className="gradient-text">{accent}</span>
  </motion.h2>
);

export default SectionHeading;

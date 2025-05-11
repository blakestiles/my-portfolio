
import React from 'react';
import { motion } from 'framer-motion';

interface SkillLogoProps {
  name: string;
  icon: string;
}

const SkillLogo: React.FC<SkillLogoProps> = ({ name, icon }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-3"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <div className="flex items-center justify-center h-16 w-16 mb-2 rounded-lg bg-background/80 backdrop-blur-sm p-3 shadow-md border border-border">
        <img src={icon} alt={name} className="h-10 w-10 object-contain" />
      </div>
      <span className="text-xs text-center font-medium mt-1">{name}</span>
    </motion.div>
  );
};

const SkillLogos = () => {
  const logos = [
    { name: 'JavaScript', icon: '/skills/javascript.svg' },
    { name: 'TypeScript', icon: '/skills/typescript.svg' },
    { name: 'React', icon: '/skills/react.svg' },
    { name: 'Node.js', icon: '/skills/nodejs.svg' },
    { name: 'Python', icon: '/skills/python.svg' },
    { name: 'Java', icon: '/skills/java.svg' },
    { name: 'C++', icon: '/skills/cpp.svg' },
    { name: 'MongoDB', icon: '/skills/mongodb.svg' },
    { name: 'PostgreSQL', icon: '/skills/postgresql.svg' },
    { name: 'AWS', icon: '/skills/aws.svg' },
    { name: 'Docker', icon: '/skills/docker.svg' },
    { name: 'Git', icon: '/skills/git.svg' }
  ];

  return (
    <div className="mt-10">
      <motion.div 
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1, duration: 0.5 }}
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <SkillLogo name={logo.name} icon={logo.icon} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillLogos;

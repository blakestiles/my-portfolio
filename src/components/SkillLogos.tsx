
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

interface SkillLogoProps {
  name: string;
  icon: string;
  description?: string;
}

const SkillLogo: React.FC<SkillLogoProps> = ({ name, icon, description }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <motion.div
          className="flex flex-col items-center justify-center p-3"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <div className="flex items-center justify-center h-16 w-16 mb-2 rounded-lg bg-[#161b22] shadow-md border border-[#30363d] hover:border-[#8b949e] transition-all duration-300">
            <img src={icon} alt={name} className="h-10 w-10 object-contain" loading="lazy" />
          </div>
          <span className="text-xs font-medium mt-1 text-[#c9d1d9]">{name}</span>
        </motion.div>
      </HoverCardTrigger>
      {description && (
        <HoverCardContent className="w-60 bg-[#161b22] border border-[#30363d] text-white">
          <div className="flex justify-between space-x-4">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">{name}</h4>
              <p className="text-xs text-[#8b949e]">{description}</p>
            </div>
          </div>
        </HoverCardContent>
      )}
    </HoverCard>
  );
};

const SkillLogos = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(carouselRef, { once: false, amount: 0.3 });
  
  const skillsData = [
    { name: 'JavaScript', icon: '/skills/javascript.svg', description: 'Modern JavaScript ES6+ for building interactive web applications' },
    { name: 'TypeScript', icon: '/skills/typescript.svg', description: 'Statically typed JavaScript for robust application development' },
    { name: 'React', icon: '/skills/react.svg', description: 'Frontend library for building user interfaces' },
    { name: 'Node.js', icon: '/skills/nodejs.svg', description: 'JavaScript runtime for building server-side applications' },
    { name: 'Python', icon: '/skills/python.svg', description: 'General-purpose programming language with focus on readability' },
    { name: 'Java', icon: '/skills/java.svg', description: 'Object-oriented programming language for enterprise applications' },
    { name: 'C++', icon: '/skills/cpp.svg', description: 'High-performance language for system programming' },
    { name: 'MongoDB', icon: '/skills/mongodb.svg', description: 'NoSQL database for modern applications' },
    { name: 'PostgreSQL', icon: '/skills/postgresql.svg', description: 'Open-source relational database system' },
    { name: 'AWS', icon: '/skills/aws.svg', description: 'Cloud computing services for modern applications' },
    { name: 'Docker', icon: '/skills/docker.svg', description: 'Platform for developing, shipping, and running applications' },
    { name: 'Git', icon: '/skills/git.svg', description: 'Distributed version control system' }
  ];

  // Double the skills array for infinite scrolling effect
  const duplicatedSkills = [...skillsData, ...skillsData];

  // Control animation based on visibility
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Pause animation on hover
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleMouseEnter = () => {
      carousel.style.animationPlayState = 'paused';
    };

    const handleMouseLeave = () => {
      carousel.style.animationPlayState = 'running';
    };

    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const carousel = carouselRef.current;
    
    if (carousel && mediaQuery.matches) {
      carousel.style.animationPlayState = 'paused';
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.05,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="mt-10 overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="relative w-full">
        {/* Gradient overlay left */}
        <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-[#0d1117] to-transparent"></div>
        
        <div 
          ref={carouselRef}
          className="flex animate-marquee py-4"
        >
          {duplicatedSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ 
                duration: 0.3, 
                ease: "easeOut" 
              }}
            >
              <SkillLogo 
                name={skill.name} 
                icon={skill.icon} 
                description={skill.description}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Gradient overlay right */}
        <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-[#0d1117] to-transparent"></div>
      </div>
    </motion.div>
  );
};

export default SkillLogos;

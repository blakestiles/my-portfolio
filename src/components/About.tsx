import React, { useMemo, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { School, Calendar, BookOpen, Award, Bookmark } from 'lucide-react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const useCountUp = (target: number, inView: boolean, duration = 1200) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) { setCount(0); return; }
    let start = 0;
    const steps = 30;
    const step = target / steps;
    const interval = duration / steps;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, interval);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
};

const StatCard = ({ target, suffix, label, color, hoverColor, custom, isInView }:
  { target: number; suffix: string; label: string; color: string; hoverColor: string; custom: number; isInView: boolean }) => {
  const count = useCountUp(target, isInView);
  return (
    <motion.div
      className="w-full sm:w-[calc(50%-0.5rem)]"
      custom={custom}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1], delay: custom * 0.2 } }
      }}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <Card className={`repo-card ${hoverColor}`}>
        <CardContent className="p-6">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold" style={{ color }}>{count}</span>
            <span className="text-xl font-bold" style={{ color }}>{suffix}</span>
          </div>
          <div className="font-medium text-white mt-1">{label}</div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "California State University, Fullerton",
    period: "Aug 2024 - Aug 2026",
    details: [
      "GPA: 3.9/4.0",
      "Relevant Coursework: Artificial Intelligence, Database Management Systems, Algorithms, Advance Computer Networking."
    ],
    twColor: "from-[#1f6feb] to-[#58a6ff]",
    colorStart: "#1f6feb",
    colorEnd: "#58a6ff"
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "The National Institute of Engineering, Mysuru",
    period: "Aug 2019 - Aug 2023",
    details: [
      "GPA: 3.5/4.0",
      "Relevant Coursework: Operating Systems, Cloud Computing, Computer Networks, System Design, Software Engineering."
    ],
    twColor: "from-[#238636] to-[#3fb950]",
    colorStart: "#238636",
    colorEnd: "#3fb950"
  }
];

const About = () => {
  const [sectionRef, isInView] = useIntersectionObserver<HTMLElement>({
    threshold: 0.2, triggerOnce: false, reappear: true
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0.0, 0.2, 1] } }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: [0.4, 0.0, 0.2, 1] } }
  };

  const educationVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1, scale: 1,
      transition: { duration: 0.6, delay: i * 0.2, ease: [0.4, 0.0, 0.2, 1] }
    })
  };

  const particlePositions = useMemo(() =>
    education.map(() =>
      Array.from({ length: 5 }, () => ({
        left: Math.random() * 100,
        yEnd: -40 - Math.random() * 60,
        xEnd: Math.random() * 40 - 20,
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 5,
      }))
    ), []);

  return (
    <section id="about" className="py-20 bg-[#161b22]" ref={sectionRef}>
      <div className="section-container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="perspective-1000"
          >
            <motion.div
              className="relative"
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="aspect-[3/4] rounded-lg border border-[#30363d] overflow-hidden">
                <img
                  src="/images/about-photo.png"
                  alt="Profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>
          </motion.div>

          <div className="space-y-5">
            <motion.h3
              className="text-2xl font-bold text-white"
              variants={textVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              A passionate software engineer focused on creating impactful solutions
            </motion.h3>

            <motion.p
              className="text-[#8b949e] leading-relaxed"
              variants={textVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.1 }}
            >
              My passion lies in contributing to large-scale, real-time systems by solving scalability bottlenecks, optimizing services, and deploying impactful features. I thrive in dynamic environments where collaboration and continuous learning are emphasized.
            </motion.p>

            <div className="flex flex-wrap gap-4 pt-4">
              <StatCard target={2} suffix="+" label="Years of Experience" color="#238636" hoverColor="hover:border-[#238636]" custom={0} isInView={isInView} />
              <StatCard target={5} suffix="+" label="Projects Built" color="#1f6feb" hoverColor="hover:border-[#1f6feb]" custom={1} isInView={isInView} />
              <StatCard target={4} suffix="" label="Companies" color="#8957e5" hoverColor="hover:border-[#8957e5]" custom={2} isInView={isInView} />
              <StatCard target={2} suffix="×" label="YC Projects" color="#e8701a" hoverColor="hover:border-[#e8701a]" custom={3} isInView={isInView} />
            </div>
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h3
            className="text-2xl font-bold mb-8 text-center text-white"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <span className="bg-gradient-to-r from-[#1f6feb] to-[#58a6ff] text-transparent bg-clip-text">Education</span>
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={educationVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <Card className="repo-card h-full bg-[#0d1117] border-l-4 overflow-hidden relative hover:shadow-xl transition-all duration-500"
                  style={{ borderLeftColor: edu.colorStart }}>
                  <div
                    className="absolute -inset-[150px] opacity-0 group-hover:opacity-40 group-hover:blur-xl transition-all duration-700 z-0"
                    style={{ background: `radial-gradient(circle, ${edu.colorStart}50 0%, transparent 70%)`, transform: 'translateZ(0)' }}
                  />

                  <div className="p-6 relative z-10">
                    <div className="flex items-center mb-4">
                      <div className={`h-10 w-10 rounded-full bg-gradient-to-r ${edu.twColor} flex items-center justify-center text-white shadow-lg`}>
                        <School className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-transparent bg-clip-text"
                          style={{ backgroundImage: `linear-gradient(to right, ${edu.colorStart}, ${edu.colorEnd})` }}>
                          {edu.degree}
                        </h4>
                        <p className="text-[#8b949e]">{edu.institution}</p>
                      </div>
                    </div>

                    <div className="flex items-center mb-3 text-sm text-[#8b949e]">
                      <Calendar className="h-4 w-4 mr-2 inline" />
                      {edu.period}
                    </div>

                    <div className="space-y-2">
                      {edu.details.map((detail, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0, transition: { delay: 0.5 + (index * 0.2) + (i * 0.1) } } : {}}
                          className="flex items-start"
                        >
                          {i === 0
                            ? <Award className="h-4 w-4 mr-2 text-[#8b949e] mt-1 shrink-0" />
                            : <BookOpen className="h-4 w-4 mr-2 text-[#8b949e] mt-1 shrink-0" />
                          }
                          <p className="text-[#8b949e]">{detail}</p>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      className="absolute top-4 right-4"
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Bookmark className="h-6 w-6" style={{ color: edu.colorStart }} />
                    </motion.div>

                    {isInView && particlePositions[index].map((p, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full"
                        style={{ background: i % 2 === 0 ? edu.colorStart : edu.colorEnd, left: `${p.left}%`, bottom: '10%' }}
                        animate={{ y: [0, p.yEnd], x: [0, p.xEnd], opacity: [0.7, 0], scale: [1, 0] }}
                        transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeOut' }}
                      />
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Terminal, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const BlurWord = ({ children, delay }: { children: React.ReactNode; delay: number }) => (
  <motion.span
    className="inline-block"
    initial={{ opacity: 0, filter: 'blur(12px)', y: 16 }}
    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
  >
    {children}
  </motion.span>
);

const yearsExp = (Math.floor((Date.now() - new Date('2023-08-01').getTime()) / (1000 * 60 * 60 * 24 * 36.5)) / 10).toFixed(1);

// Syntax-highlighted code lines — no TypeAnimation dependency
const codeLines = [
  [{ t: 'const ', c: '#ff7b72' }, { t: 'profile', c: '#e3b341' }, { t: ' = {', c: '#c9d1d9' }],
  [{ t: "  name", c: '#79c0ff' }, { t: ': ', c: '#c9d1d9' }, { t: "'Sainath Gandhe'", c: '#a5d6ff' }, { t: ',', c: '#c9d1d9' }],
  [{ t: "  title", c: '#79c0ff' }, { t: ': ', c: '#c9d1d9' }, { t: "'Full Stack Engineer'", c: '#a5d6ff' }, { t: ',', c: '#c9d1d9' }],
  [{ t: "  skills", c: '#79c0ff' }, { t: ': [', c: '#c9d1d9' }],
  [{ t: "    ", c: '#c9d1d9' }, { t: "'Java'", c: '#a5d6ff' }, { t: ', ', c: '#c9d1d9' }, { t: "'Python'", c: '#a5d6ff' }, { t: ', ', c: '#c9d1d9' }, { t: "'TypeScript'", c: '#a5d6ff' }, { t: ',', c: '#c9d1d9' }],
  [{ t: "    ", c: '#c9d1d9' }, { t: "'React'", c: '#a5d6ff' }, { t: ', ', c: '#c9d1d9' }, { t: "'Node.js'", c: '#a5d6ff' }, { t: ', ', c: '#c9d1d9' }, { t: "'AWS'", c: '#a5d6ff' }],
  [{ t: "  ]", c: '#c9d1d9' }, { t: ',', c: '#c9d1d9' }],
  [{ t: "  attributes", c: '#79c0ff' }, { t: ': {', c: '#c9d1d9' }],
  [{ t: "    hardworker", c: '#79c0ff' }, { t: ': ', c: '#c9d1d9' }, { t: 'true', c: '#ff7b72' }, { t: ',', c: '#c9d1d9' }],
  [{ t: "    problemSolver", c: '#79c0ff' }, { t: ': ', c: '#c9d1d9' }, { t: 'true', c: '#ff7b72' }, { t: ',', c: '#c9d1d9' }],
  [{ t: "    yearsExp", c: '#79c0ff' }, { t: ': ', c: '#c9d1d9' }, { t: yearsExp, c: '#79c0ff' }],
  [{ t: "  }", c: '#c9d1d9' }],
  [{ t: '};', c: '#c9d1d9' }],
];

const Hero = () => {
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToAbout = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0.0, 0.2, 1] } }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden pb-16 pt-32">
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #30363d 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          opacity: 0.35,
        }}
      />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,hsl(222_47%_11%_/_0.2)_0%,rgba(0,0,0,0)_100%)]" />

      <motion.div className="absolute top-20 right-10 w-64 h-64 bg-[#238636]/5 rounded-full filter blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }} />
      <motion.div className="absolute bottom-20 left-10 w-64 h-64 bg-[#1f6feb]/5 rounded-full filter blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', delay: 1 }} />

      <div className="section-container">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <motion.div className="flex-1" variants={containerVariants} initial="hidden" animate="visible">
            {/* Profile photo — larger with animated rings */}
            <motion.div className="mb-8 flex justify-center lg:justify-start" variants={itemVariants}>
              <div className="relative">
                {/* Rotating dashed outer ring */}
                <div
                  className="absolute inset-[-10px] rounded-full border border-dashed border-[#30363d]"
                  style={{ animation: 'spin 20s linear infinite' }}
                />
                {/* Gradient glow */}
                <div className="absolute inset-[-3px] rounded-full bg-gradient-to-r from-[#238636] to-[#1f6feb] opacity-40 blur-sm" />
                {/* Photo */}
                <div className="h-40 w-40 rounded-full border-2 border-[#30363d] p-1 bg-[#161b22] overflow-hidden relative z-10">
                  <img
                    src="/images/profile-photo.png"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                    loading="eager"
                  />
                </div>
              </div>
            </motion.div>

            <motion.p variants={itemVariants}
              className="inline-block bg-[#1f6feb]/10 text-[#1f6feb] px-3 py-1 rounded-full font-medium text-sm mb-4 lg:ml-0 mx-auto text-center lg:text-left">
              Full Stack Engineer & AI Builder
            </motion.p>

            <h1 className="mb-6 text-white text-center lg:text-left flex flex-wrap gap-x-3 justify-center lg:justify-start">
              <BlurWord delay={0.5}>Hi,</BlurWord>
              <BlurWord delay={0.65}>I'm</BlurWord>
              <BlurWord delay={0.8}><span className="gradient-text">Sainath</span></BlurWord>
              <BlurWord delay={0.95}><span className="gradient-text">Gandhe</span></BlurWord>
            </h1>

            <motion.p
              variants={itemVariants}
              className="text-[#8b949e] text-sm mb-4 text-center lg:text-left leading-relaxed max-w-sm"
            >
              Building scalable AI systems & full-stack products.{' '}
              <span className="text-[#c9d1d9]">Ex-Boeing</span>
              {' · '}
              <span className="text-[#c9d1d9]">YC Alumnus</span>
              {' · '}
              <span className="text-[#c9d1d9]">CS Grad @ CSUF</span>
            </motion.p>

            {/* 2+1 button layout */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3 items-center lg:items-start">
              <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
                <Button size="lg" onClick={scrollToContact}
                  className="gh-button-primary transition-all duration-300 hover:scale-105 group">
                  <span className="flex items-center">
                    <span>Get In Touch</span>
                    <motion.span className="ml-1 inline-block"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ repeat: Infinity, repeatDelay: 1.5, duration: 0.5 }}>→</motion.span>
                  </span>
                </Button>
                <Button size="lg" variant="outline" asChild
                  className="gh-button transition-all duration-300 hover:scale-105 group">
                  <a href="https://github.com/blakestiles" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    View My Work
                  </a>
                </Button>
              </div>
              <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
                <Button size="lg" variant="outline" asChild
                  className="gh-button transition-all duration-300 hover:scale-105 group">
                  <a href="https://linkedin.com/in/sainath-gandhe" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    LinkedIn
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild
                  className="gh-button transition-all duration-300 hover:scale-105 group">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Syntax-highlighted code editor */}
          <motion.div className="flex-1 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}>
            <div className="bg-[#0d1117] rounded-lg border border-[#30363d] shadow-xl overflow-hidden">
              <div className="flex items-center px-4 py-2 bg-[#161b22] border-b border-[#30363d]">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="ml-2 flex items-center space-x-1 text-sm text-[#8b949e]">
                  <Terminal size={14} />
                  <span>developer.js</span>
                </div>
              </div>
              <div className="font-mono text-sm p-5 overflow-hidden">
                <div className="flex">
                  {/* Line numbers gutter */}
                  <div className="select-none pr-4 text-right shrink-0" style={{ minWidth: '2rem' }}>
                    <div className="text-[#8b949e]/30 leading-6 mb-2">0</div>
                    {codeLines.map((_, lineIdx) => (
                      <motion.div
                        key={lineIdx}
                        className="text-[#8b949e]/30 leading-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 + lineIdx * 0.07, duration: 0.25 }}
                      >
                        {lineIdx + 1}
                      </motion.div>
                    ))}
                    <motion.div
                      className="text-[#8b949e]/30 leading-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + codeLines.length * 0.07 + 0.2 }}
                    >
                      {codeLines.length + 1}
                    </motion.div>
                    <motion.div
                      className="text-[#8b949e]/30 leading-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + codeLines.length * 0.07 + 0.5 }}
                    >
                      {codeLines.length + 2}
                    </motion.div>
                  </div>
                  {/* Code content */}
                  <div className="flex-1 overflow-hidden">
                    <div className="mb-2">
                      <span className="text-[#8b949e]">{'// Welcome to my portfolio'}</span>
                    </div>
                    {codeLines.map((line, lineIdx) => (
                      <motion.div
                        key={lineIdx}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + lineIdx * 0.07, duration: 0.25 }}
                        className="leading-6"
                      >
                        {line.map((token, ti) => (
                          <span key={ti} style={{ color: token.c }}>{token.t}</span>
                        ))}
                      </motion.div>
                    ))}
                    <motion.div
                      className="mt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + codeLines.length * 0.07 + 0.2 }}
                    >
                      <span className="text-[#1f6feb]">console</span>
                      <span className="text-white">.</span>
                      <span className="text-[#d2a8ff]">log</span>
                      <span className="text-white">(</span>
                      <span className="text-[#a5d6ff]">'Ready to collaborate?'</span>
                      <span className="text-white">);</span>
                    </motion.div>
                    <motion.div
                      className="mt-1 flex items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + codeLines.length * 0.07 + 0.5 }}
                    >
                      <span className="text-[#c9d1d9] mr-1">{'>'}</span>
                      <span
                        className="inline-block w-2 h-4 bg-[#c9d1d9] align-middle"
                        style={{ animation: 'blink 0.8s step-end infinite' }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}>
            <button onClick={scrollToAbout} aria-label="Scroll down"
              className="block p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1f6feb] rounded-full">
              <ArrowDown className="h-6 w-6 text-[#8b949e] hover:text-white transition-colors" />
            </button>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;

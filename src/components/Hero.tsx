
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden pb-16 pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,hsl(var(--primary)/0.2)_0%,rgba(255,255,255,0)_100%)]"></div>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <p className="text-primary font-medium mb-3">Software Developer</p>
          <h1 className="mb-6">
            Hi, I'm <span className="gradient-text">Sainath Gandhe</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground">
            A passionate software engineering student with expertise in distributed systems, 
            cloud computing, and full-stack development. I build scalable and efficient 
            solutions to complex problems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" onClick={scrollToContact}>
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">View My Work</a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

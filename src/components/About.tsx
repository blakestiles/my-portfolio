
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-heading">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="relative">
              <div className="bg-gradient-to-r from-primary to-accent p-1 rounded-lg shadow-xl">
                <div className="aspect-square bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')] bg-cover bg-center rounded-lg"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
            </div>
          </div>
          
          <div className="space-y-5">
            <h3 className="text-2xl font-bold">
              A passionate software engineer focused on creating impactful solutions
            </h3>
            <p className="text-muted-foreground">
              I am a highly adaptable software engineering student pursuing a Master's degree in Computer Science at California State University, Fullerton, with strong fundamentals in distributed systems, cloud computing, data structures, and algorithms.
            </p>
            <p className="text-muted-foreground">
              My passion lies in contributing to large-scale, real-time systems by solving scalability bottlenecks, optimizing services, and deploying impactful features. I thrive in dynamic environments where collaboration and continuous learning are emphasized.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Card className="w-full sm:w-[calc(50%-0.5rem)]">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">1+</div>
                  <div className="font-medium">Years of Experience</div>
                </CardContent>
              </Card>
              <Card className="w-full sm:w-[calc(50%-0.5rem)]">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="font-medium">Completed Projects</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

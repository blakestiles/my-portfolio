
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#161b22]">
      <div className="section-container">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="p-1 rounded-lg bg-gradient-to-r from-[#1f6feb] to-[#238636] shadow-xl">
                <div className="aspect-square bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')] bg-cover bg-center rounded-lg border border-[#30363d]"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#238636]/10 rounded-full z-0"></div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#1f6feb]/10 rounded-full z-0"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white">
              A passionate software engineer focused on creating impactful solutions
            </h3>
            <p className="text-[#8b949e]">
              I am a highly adaptable software engineering student pursuing a Master's degree in Computer Science at California State University, Fullerton, with strong fundamentals in distributed systems, cloud computing, data structures, and algorithms.
            </p>
            <p className="text-[#8b949e]">
              My passion lies in contributing to large-scale, real-time systems by solving scalability bottlenecks, optimizing services, and deploying impactful features. I thrive in dynamic environments where collaboration and continuous learning are emphasized.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Card className="w-full sm:w-[calc(50%-0.5rem)] repo-card hover:border-[#238636]">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[#238636] mb-2">1+</div>
                  <div className="font-medium text-white">Years of Experience</div>
                </CardContent>
              </Card>
              <Card className="w-full sm:w-[calc(50%-0.5rem)] repo-card hover:border-[#1f6feb]">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[#1f6feb] mb-2">5+</div>
                  <div className="font-medium text-white">Completed Projects</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

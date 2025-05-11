
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: "Boeing",
      role: "Software Developer",
      period: "Aug 2023 - Aug 2024",
      highlights: [
        "Led the Critical Parts Tracking System (CPTS) project using SpringBoot for the back-end and Angular for the front-end, improving real-time tracking of critical aerospace parts.",
        "Designed and implemented new features for CPTS, focusing on creating a user-friendly interface that allowed team members to access real-time data.",
        "Conducted end-to-end testing for CPTS, validating the application's robustness and performance, reducing errors by 30%.",
        "Optimized the Wireless Business Management System (WBMS) using React for the front-end, reducing system latency by 15%.",
        "Implemented real-time data synchronization features in WBMS, allowing business teams to monitor wireless systems efficiently.",
        "Actively participated in Agile Scrum ceremonies to ensure continuous delivery of value."
      ],
      technologies: ["SpringBoot", "Angular", "React", "Agile", "Testing"]
    },
    {
      company: "Blocmatrix IT Solutions",
      role: "Software Developer Intern",
      period: "Feb 2023 - Jun 2023",
      highlights: [
        "Designed and implemented distributed storage and query systems using AWS Lambda and DynamoDB, ensuring high availability.",
        "Built a scalable data pipeline leveraging Kubernetes, enabling real-time predictions and handling high-volume workloads.",
        "Developed an automated testing framework using Python, increasing code coverage by 30%.",
        "Participated in Agile ceremonies to drive team productivity and deliverables.",
        "Enhanced cross-functional collaboration by designing and implementing RESTful APIs."
      ],
      technologies: ["AWS", "Kubernetes", "Python", "RESTful APIs", "DynamoDB", "Lambda"]
    },
    {
      company: "Nullclass",
      role: "Web Developer Intern",
      period: "Oct 2022 - Dec 2022",
      highlights: [
        "Created a cloud-based travel booking platform using React and Node.js, offering real-time booking capabilities.",
        "Designed and implemented distributed indexing mechanisms, reducing search response times by 35%.",
        "Conducted formal verification of critical modules to ensure operational reliability.",
        "Utilized property-based testing tools such as QuickCheck to identify edge-case failures.",
        "Collaborated with UX teams to refine the user interface, increasing usability scores by 25%."
      ],
      technologies: ["React", "Node.js", "Cloud Services", "UX Design", "Testing"]
    },
    {
      company: "Deloitte",
      role: "Virtual Experience Intern",
      period: "Aug 2022 - Sep 2022",
      highlights: [
        "Automated data analysis workflows using Python and advanced scripting, achieving a 15% improvement in processing speed.",
        "Designed and deployed a secure, distributed ledger system utilizing blockchain principles to ensure data integrity.",
        "Engaged in theorem proving and symbolic execution methodologies for verifying complex financial models.",
        "Documented intricate processes and developed a comprehensive knowledge base for team-wide use.",
        "Participated in Agile project workflows, contributing to sprint reviews and planning."
      ],
      technologies: ["Python", "Blockchain", "Agile", "Documentation", "Financial Modeling"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[#161b22]">
      <div className="section-container">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h2>
        
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#30363d] z-0"></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-4 timeline-dot"></div>
                
                {/* Date indicator */}
                <div className="md:w-1/2 py-2 px-4 md:px-8 flex items-center">
                  <div className={`bg-[#21262d] text-[#c9d1d9] py-1 px-3 rounded-full text-sm inline-block ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    {exp.period}
                  </div>
                </div>
                
                {/* Content card */}
                <div className="md:w-1/2 py-2 px-4 md:px-8">
                  <Card className="repo-card border border-l-[#238636] border-l-4">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase className="h-4 w-4 text-[#238636]" />
                        <span className="text-[#8b949e]">{exp.company}</span>
                      </div>
                      <CardTitle className="text-xl">
                        {exp.role}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 mb-4 text-[#8b949e]">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm">{highlight}</li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} className="bg-[#21262d] text-[#c9d1d9] border border-[#30363d]">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

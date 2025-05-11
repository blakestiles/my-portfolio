
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

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
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-heading">
          Work <span className="gradient-text">Experience</span>
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Card key={index} className="relative overflow-hidden border-l-4 border-l-primary">
              <div className="absolute top-0 right-0 h-20 w-20 bg-primary/5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
              
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <CardTitle className="text-xl md:text-2xl">
                  {exp.role} @ <span className="text-primary">{exp.company}</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;


import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C++", "TypeScript", "JavaScript", "HTML5", "CSS3", "C#"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", ".NET", "Node.js", "Express.js", "Spring Boot", "Angular", "Flask"]
    },
    {
      title: "Database Management",
      skills: ["SQL", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Software Development",
      skills: ["RESTful APIs", "OOP", "Data Structures & Algorithms", "Agile/Scrum", "Unit Testing", "TDD", "API Development"]
    },
    {
      title: "Cloud Platforms",
      skills: ["AWS (Lambda, EC2, S3)", "Azure"]
    },
    {
      title: "Tools",
      skills: ["CI/CD", "JIRA", "Microsoft Office", "Jenkins", "Linux/Unix", "Docker", "Kubernetes", "Git"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="section-heading">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-2">
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm px-3 py-1">
                      {skill}
                    </Badge>
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

export default Skills;

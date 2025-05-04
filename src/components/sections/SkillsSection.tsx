
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  FileCode, 
  FileJson, 
  FileCog, 
  Code, 
  Boxes, 
  GitBranch,
  Github, 
  Figma as FigmaIcon
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  percentage: number;
  color: string;
}

const skills: Skill[] = [
  { 
    name: "HTML", 
    icon: <FileCode className="w-8 h-8" />, 
    percentage: 95,
    color: "#E34F26" 
  },
  { 
    name: "CSS", 
    icon: <FileJson className="w-8 h-8" />, 
    percentage: 90,
    color: "#1572B6" 
  },
  { 
    name: "JavaScript", 
    icon: <FileCog className="w-8 h-8" />, 
    percentage: 85,
    color: "#F7DF1E" 
  },
  { 
    name: "React", 
    icon: <Code className="w-8 h-8" />, 
    percentage: 80,
    color: "#61DAFB" 
  },
  { 
    name: "Next.js", 
    icon: 
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM10.607 16.864V7.136L17.793 12L10.607 16.864Z" fill="currentColor"/>
      </svg>, 
    percentage: 70,
    color: "#000000" 
  },
  { 
    name: "Tailwind CSS", 
    icon: 
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.001 4.8C9.601 4.8 8.101 6 7.501 8.4C8.401 7.2 9.501 6.6 10.801 6.6C11.762 6.6 12.409 7.061 13.105 7.571C13.378 7.782 13.661 8 13.996 8.205C14.818 8.718 15.761 9 17.001 9C19.401 9 20.901 7.8 21.501 5.4C20.601 6.6 19.501 7.2 18.201 7.2C17.24 7.2 16.593 6.739 15.896 6.229C15.624 6.018 15.341 5.8 15.005 5.595C14.184 5.082 13.241 4.8 12.001 4.8ZM7.501 9.6C5.101 9.6 3.601 10.8 3.001 13.2C3.901 12 5.001 11.4 6.301 11.4C7.261 11.4 7.909 11.861 8.605 12.371C8.878 12.582 9.161 12.8 9.496 13.005C10.318 13.518 11.261 13.8 12.501 13.8C14.901 13.8 16.401 12.6 17.001 10.2C16.101 11.4 15.001 12 13.701 12C12.741 12 12.093 11.539 11.396 11.029C11.124 10.818 10.841 10.6 10.505 10.395C9.684 9.882 8.741 9.6 7.501 9.6Z" fill="currentColor"/>
      </svg>, 
    percentage: 85,
    color: "#38B2AC" 
  },
  { 
    name: "SQL", 
    icon: 
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.741 2 6 3.033 6 5.5V18.5C6 20.967 8.741 22 12 22C15.259 22 18 20.967 18 18.5V5.5C18 3.033 15.259 2 12 2ZM12 4C15.084 4 16 5.067 16 5.5C16 5.933 15.084 7 12 7C8.916 7 8 5.933 8 5.5C8 5.067 8.916 4 12 4ZM12 20C8.916 20 8 18.933 8 18.5V16.007C9.035 16.648 10.481 17 12 17C13.519 17 14.965 16.648 16 16.007V18.5C16 18.933 15.084 20 12 20ZM12 15C8.916 15 8 13.933 8 13.5V11.007C9.035 11.648 10.481 12 12 12C13.519 12 14.965 11.648 16 11.007V13.5C16 13.933 15.084 15 12 15ZM12 10C8.916 10 8 8.933 8 8.5V6.007C9.035 6.648 10.481 7 12 7C13.519 7 14.965 6.648 16 6.007V8.5C16 8.933 15.084 10 12 10Z" fill="currentColor"/>
      </svg>, 
    percentage: 75,
    color: "#4479A1" 
  },
  { 
    name: "Git", 
    icon: <GitBranch className="w-8 h-8" />, 
    percentage: 85,
    color: "#F05032" 
  },
  { 
    name: "GitHub", 
    icon: <Github className="w-8 h-8" />, 
    percentage: 90,
    color: "#181717" 
  },
  { 
    name: "Figma", 
    icon: <FigmaIcon className="w-8 h-8" />, 
    percentage: 80,
    color: "#F24E1E" 
  },
  { 
    name: "UI/UX Design", 
    icon: 
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor"/>
        <path d="M21.8701 10.5H19.9701C19.7301 8.91 18.9901 7.39 17.9301 6.15L19.2301 4.85C19.4701 4.61 19.4701 4.23 19.2301 3.99L18.0101 2.77C17.7701 2.53 17.3901 2.53 17.1501 2.77L15.8501 4.07C14.6101 3 13.0901 2.26 11.5001 2.03V0.13C11.5001 -0.14 11.2701 -0.37 11.0001 -0.37H9.00012C8.73012 -0.37 8.50012 -0.14 8.50012 0.13V2.03C6.91012 2.27 5.39012 3 4.15012 4.07L2.85012 2.77C2.61012 2.53 2.23012 2.53 1.99012 2.77L0.770117 3.99C0.530117 4.23 0.530117 4.61 0.770117 4.85L2.07012 6.15C1.00012 7.39 0.270117 8.91 0.0301175 10.5H-0.999883C-1.26988 10.5 -1.49988 10.73 -1.49988 11V13C-1.49988 13.27 -1.26988 13.5 -0.999883 13.5H0.0301175C0.270117 15.09 1.00012 16.61 2.07012 17.85L0.770117 19.15C0.530117 19.39 0.530117 19.77 0.770117 20.01L1.99012 21.23C2.23012 21.47 2.61012 21.47 2.85012 21.23L4.15012 19.93C5.39012 21 6.91012 21.74 8.50012 21.97V23.87C8.50012 24.14 8.73012 24.37 9.00012 24.37H11.0001C11.2701 24.37 11.5001 24.14 11.5001 23.87V21.97C13.0901 21.73 14.6101 21 15.8501 19.93L17.1501 21.23C17.3901 21.47 17.7701 21.47 18.0101 21.23L19.2301 20.01C19.4701 19.77 19.4701 19.39 19.2301 19.15L17.9301 17.85C18.9901 16.61 19.7301 15.09 19.9701 13.5H21.8701C22.1401 13.5 22.3701 13.27 22.3701 13V11C22.3701 10.73 22.1401 10.5 21.8701 10.5ZM12 18C8.69012 18 6.00012 15.31 6.00012 12C6.00012 8.69 8.69012 6 12 6C15.3101 6 18.0001 8.69 18.0001 12C18.0001 15.31 15.3101 18 12 18Z" fill="currentColor"/>
      </svg>, 
    percentage: 85,
    color: "#FF61F6" 
  }
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="section-title animate-on-scroll">My Skills</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Here are some of the technologies and tools I've been working with recently.
            Hover over each skill to see my proficiency level.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="animate-on-scroll"
              style={{ 
                transitionDelay: `${index * 50}ms` 
              }}
            >
              <div className="skill-button group">
                <div className="mb-3 text-foreground/80 group-hover:text-primary transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-base font-medium">{skill.name}</h3>
                
                {/* Percentage indicator that appears on hover */}
                <div className="mt-2 w-full bg-muted rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"
                    style={{ 
                      width: `${skill.percentage}%`,
                      backgroundColor: skill.color
                    }}
                  ></div>
                </div>
                
                <span className="absolute top-2 right-2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 px-1.5 py-0.5 rounded-md backdrop-blur-sm">
                  {skill.percentage}%
                </span>
                
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

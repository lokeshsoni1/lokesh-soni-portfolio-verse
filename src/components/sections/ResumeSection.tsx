
import React from 'react';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Education {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

interface Experience {
  position: string;
  company: string;
  duration: string;
  description: string;
}

const educationData: Education[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Dronacharya College of Engineering",
    duration: "2024 - Present",
    description: "Currently pursuing a bachelor's degree in Computer Science and Engineering, focusing on software development and modern web technologies."
  }
];

const experienceData: Experience[] = [
  {
    position: "Freelance Web Developer & UI Designer",
    company: "Self-employed",
    duration: "2023 - Present",
    description: "Designing and developing responsive websites for various clients. Creating user interfaces with Figma and implementing them using modern web technologies."
  },
  {
    position: "Data Entry Specialist",
    company: "Freelance",
    duration: "2022 - Present",
    description: "Providing efficient and accurate data entry services for businesses and individuals, including manual and automated data processing solutions."
  }
];

const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="section-title animate-on-scroll">Resume</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            My academic background and professional experience.
          </p>
        </div>
        
        <div className="flex justify-center mb-10 animate-on-scroll">
          <Button 
            className="flex items-center gap-2 bg-primary hover:bg-primary/90"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education Section */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-primary"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
              </svg>
              <span>Education</span>
            </h3>
            
            <div className="space-y-6">
              {educationData.map((item, index) => (
                <div 
                  key={index} 
                  className="relative pl-6 border-l-2 border-muted animate-on-scroll"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  
                  <div className="mb-1">
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {item.duration}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-semibold mt-2">{item.degree}</h4>
                  <p className="text-muted-foreground">{item.institution}</p>
                  <p className="mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Experience Section */}
          <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-primary"
              >
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
              <span>Experience</span>
            </h3>
            
            <div className="space-y-6">
              {experienceData.map((item, index) => (
                <div 
                  key={index} 
                  className="relative pl-6 border-l-2 border-muted animate-on-scroll"
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  
                  <div className="mb-1">
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {item.duration}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-semibold mt-2">{item.position}</h4>
                  <p className="text-muted-foreground">{item.company}</p>
                  <p className="mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;

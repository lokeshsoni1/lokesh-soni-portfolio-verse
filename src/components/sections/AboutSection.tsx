
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const technologies = [
  "HTML", "CSS", "JavaScript", "React", "Next.js", 
  "Tailwind CSS", "SQL", "Git", "Figma", "UI/UX Design"
];

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-20 md:py-28" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="section-title animate-on-scroll">About Me</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
          {/* Text content */}
          <div className="md:col-span-3 animate-on-scroll">
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg leading-relaxed mb-4">
                Hello! My name is Lokesh Soni, and I love creating things that live on the internet. Fast-forward to today, I'm currently a first-year Computer Science and Engineering student at Dronacharya College.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Along with web development, I specialize in video editing and UI/UX design using Figma. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-medium mb-4">Technologies I've been working with recently:</h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {technologies.map((tech, index) => (
                  <li 
                    key={tech}
                    className={cn(
                      "flex items-center text-muted-foreground",
                      "animate-on-scroll",
                      { "transition-delay-100": index % 3 === 1 },
                      { "transition-delay-200": index % 3 === 2 }
                    )}
                    style={{ 
                      transitionDelay: `${index * 50}ms`
                    }}
                  >
                    <svg 
                      className="w-4 h-4 mr-2 text-primary" 
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Image */}
          <div className="md:col-span-2 animate-on-scroll">
            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-primary/10 rounded-lg transform translate-x-4 translate-y-4"></div>
              <div className="relative z-10 rounded-lg overflow-hidden border border-border">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Coding illustration" 
                  className="w-full h-auto rounded-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-primary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

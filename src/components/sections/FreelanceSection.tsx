
import React from 'react';
import { Database, Figma as FigmaIcon } from 'lucide-react';

interface FreelanceService {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const services: FreelanceService[] = [
  {
    title: "Data Entry",
    description: "Manual and automated entry solutions tailored for various client needs. Efficient, accurate, and timely delivery guaranteed.",
    icon: <Database className="w-10 h-10" />,
    color: "#6366F1"
  },
  {
    title: "Online UI Editing",
    description: "Web interfaces edited and optimized using Figma, Canva, and CSS frameworks. Create visually appealing designs that enhance user experience.",
    icon: <FigmaIcon className="w-10 h-10" />,
    color: "#EC4899"
  }
];

const FreelanceSection: React.FC = () => {
  return (
    <section id="freelance" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="section-title animate-on-scroll">Freelance Services</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            I offer specialized services to help businesses and individuals achieve their digital goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-card rounded-lg p-8 border border-border shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary/30 animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                className="w-16 h-16 flex items-center justify-center rounded-full mb-6 text-white"
                style={{ backgroundColor: service.color }}
              >
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              
              <div className="mt-6">
                <a 
                  href="#contact" 
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  <span>Inquire about this service</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto bg-primary/10 rounded-lg p-6 border border-primary/20 animate-on-scroll">
          <h3 className="text-center text-xl font-medium mb-4">Looking for a custom service?</h3>
          <p className="text-center text-muted-foreground mb-6">
            I'm always open to discussing custom project requirements and new opportunities.
          </p>
          <div className="flex justify-center">
            <a 
              href="#contact" 
              className="primary-link-button"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelanceSection;

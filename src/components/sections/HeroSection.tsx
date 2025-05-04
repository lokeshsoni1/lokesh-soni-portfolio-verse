
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import Typed from 'react-typed';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);
      
      heroElement.style.backgroundPosition = `${x}% ${y}%`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center py-16 overflow-hidden"
      ref={heroRef}
    >
      {/* Background gradient effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-background to-background/80 opacity-90"
        style={{
          backgroundImage: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--primary)/0.15), transparent 40%)',
          backgroundBlendMode: 'lighten',
          backgroundSize: '150% 150%',
          transition: 'background-position 0.2s ease-out',
        }} 
      />

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Text content */}
        <div className="w-full md:w-1/2 text-left space-y-6 animate-fade-in">
          <div className="space-y-2">
            <div className="text-sm md:text-base font-medium text-primary">
              Hi there, I'm
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-foreground">
              Lokesh Soni
            </h1>
            <div className="h-12 mt-2">
              <Typed
                strings={[
                  'Computer Science Student',
                  'Web Developer',
                  'UI/UX Designer',
                  'Video Editor'
                ]}
                typeSpeed={40}
                backSpeed={30}
                loop
                className="text-xl md:text-2xl text-primary/70 font-medium"
              />
            </div>
          </div>
          
          <p className="text-muted-foreground text-base md:text-lg max-w-xl">
            A passionate Computer Science & Engineering student who loves creating beautiful
            and functional digital experiences for the web.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects" 
              className="primary-link-button"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="outline-link-button"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/30 to-secondary/30 blur-2xl rounded-full opacity-30 animate-background-pan"></div>
            
            {/* Profile image */}
            <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-lg animate-blur-in">
              <img 
                src="/lovable-uploads/c59b419f-453c-4d7f-b2bc-534104e6023d.png" 
                alt="Lokesh Soni" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-light">
        <div className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
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
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

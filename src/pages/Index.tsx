
import React, { useEffect } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import FreelanceSection from "@/components/sections/FreelanceSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import { initScrollAnimations } from "@/utils/scrollAnimations";

const Index = () => {
  // Initialize scroll animations when the component mounts
  useEffect(() => {
    initScrollAnimations();
    
    // Handle mousemove for dynamic effects
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX / window.innerWidth * 100}%`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY / window.innerHeight * 100}%`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen relative overflow-hidden">
        <Navbar />
        
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <FreelanceSection />
          <TestimonialsSection />
          <ResumeSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;


import React, { useState, useEffect } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled for navbar styling
      setIsScrolled(window.scrollY > 10);

      // Determine which section is in view
      const sections = document.querySelectorAll('section[id]');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id') || '';
        }
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Me' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#freelance', label: 'Freelance' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#resume', label: 'Resume' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold font-poppins text-primary">
          Lokesh<span className="text-foreground">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <a 
              key={link.href}
              href={link.href}
              className={cn(
                "nav-link", 
                activeSection === link.href.substring(1) && "active"
              )}
            >
              {link.label}
            </a>
          ))}
          <ThemeSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeSwitcher />
          <button
            className="p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span 
                className={cn(
                  "block h-0.5 bg-foreground rounded-full transition-all duration-300",
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                )} 
              />
              <span 
                className={cn(
                  "block h-0.5 bg-foreground rounded-full transition-all duration-300",
                  isMobileMenuOpen ? "opacity-0" : ""
                )} 
              />
              <span 
                className={cn(
                  "block h-0.5 bg-foreground rounded-full transition-all duration-300",
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                )} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={cn(
            "fixed inset-x-0 top-[4.5rem] bg-background/95 backdrop-blur-md shadow-lg border-t border-border transition-all duration-300 ease-in-out md:hidden",
            isMobileMenuOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 -translate-y-8 pointer-events-none"
          )}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map(link => (
              <a 
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg transition-colors",
                  activeSection === link.href.substring(1) 
                    ? "bg-primary/10 text-primary" 
                    : "hover:bg-muted"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

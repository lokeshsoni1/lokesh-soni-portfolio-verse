
import React from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: "Calculator using Python",
    description: "A basic calculator application with graphical user interface built using Python and Tkinter library.",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["Python", "Tkinter", "GUI"],
    github: "https://github.com/lokeshsoni1/python_calculator",
    demo: "https://lokeshsoni1.github.io/python_calculator/"
  },
  {
    title: "Portfolio Website",
    description: "A fully responsive personal portfolio website built with HTML, CSS and JavaScript.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    github: "https://github.com/lokeshsoni1/portfolio",
    demo: "https://lokeshsoni1.github.io/portfolio/"
  },
  {
    title: "Milk Planner",
    description: "A smart planner application for dairy tracking with user-friendly interface and data visualization.",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["React", "CSS", "LocalStorage", "Charts"],
    github: "https://github.com/lokeshsoni1/milk_planner",
    demo: "https://lokeshsoni1.github.io/milk_planner/"
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <div 
      className="project-card animate-on-scroll"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        
        <p className="text-muted-foreground mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-start gap-3">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1 outline-link-button"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1 primary-link-button"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="section-title animate-on-scroll">Projects</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Here are some of the projects I've worked on recently. Want to see more? 
            <a href="mailto:lokeshsoniroyal1@gmail.com" className="text-primary hover:underline ml-1">
              Email me
            </a>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

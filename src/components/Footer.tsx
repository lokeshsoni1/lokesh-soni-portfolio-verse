
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold font-poppins text-primary">
              Lokesh<span className="text-foreground">.dev</span>
            </a>
          </div>
          
          <div className="text-center md:text-left text-muted-foreground">
            <div className="flex items-center justify-center md:justify-start">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500" />
              <span>by Lokesh Soni</span>
            </div>
            <div className="text-sm mt-1">
              © {currentYear} All rights reserved.
            </div>
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://www.linkedin.com/in/lokesh-soni-2b3b7034a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <svg 
                className="w-5 h-5" 
                fill="currentColor"
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            
            <a 
              href="https://github.com/lokeshsoni1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <svg 
                className="w-5 h-5" 
                fill="currentColor"
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            
            <a 
              href="https://www.instagram.com/lokesh.soni194" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <svg 
                className="w-5 h-5" 
                fill="currentColor"
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M12.315 2c1.828 0 2.549.008 3.445.05 1.702.077 2.952 1.297 3.029 2.999.042.895.05 1.615.05 3.443 0 1.827-.008 2.548-.05 3.443-.077 1.702-1.327 2.922-3.028 2.999-.897.042-1.618.05-3.445.05-1.828 0-2.548-.008-3.444-.05-1.702-.077-2.952-1.297-3.029-2.999-.041-.895-.05-1.615-.05-3.442 0-1.828.009-2.549.05-3.444.077-1.702 1.327-2.922 3.029-3 .896-.04 1.616-.048 3.444-.048zM12.312 22c-1.989 0-2.235-.008-3.01-.046-1.146-.053-2.145-.235-2.99-.628a4.44 4.44 0 01-1.65-1.092A4.33 4.33 0 013.62 18.65c-.353-.8-.5-1.7-.526-2.75l-.008-.563c0-.078 0-.178-.004-.301a93.84 93.84 0 01-.012-.956 156.958 156.958 0 010-2.163c.003-.323.007-.632.016-.956l.008-.301.008-.563c.025-1.05.173-1.95.526-2.75a4.338 4.338 0 011.042-1.584A4.33 4.33 0 015.62 5.073c.845-.394 1.844-.575 2.99-.628.775-.038 1.021-.046 3.01-.046s2.236.008 3.01.046c1.146.053 2.145.234 2.99.628a4.442 4.442 0 011.65 1.091c.448.448.803.986 1.042 1.584.353.8.5 1.7.526 2.75l.008.563.009.3c.007.33.01.641.015.957l.004 1.075c0 .361 0 .722-.004 1.087-.004.324-.008.632-.016.957l-.008.3-.008.563c-.025 1.05-.173 1.95-.526 2.75a4.442 4.442 0 01-1.042 1.584 4.44 4.44 0 01-1.65 1.091c-.845.394-1.844.575-2.99.628-.775.038-1.021.047-3.01.047z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M12.312 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.463a3.329 3.329 0 110-6.657 3.329 3.329 0 010 6.657zM18.806 6.625a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeType = 'dark' | 'light' | 'high-contrast' | 'solarized' | 'cyberpunk' | 'minimal' | 'sepia';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('dark');

  // Load theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeType;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Update localStorage and apply theme class when theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    // Remove all theme classes
    document.documentElement.classList.remove(
      'theme-dark', 
      'theme-light', 
      'theme-high-contrast', 
      'theme-solarized', 
      'theme-cyberpunk', 
      'theme-minimal', 
      'theme-sepia'
    );
    
    // Apply dark/light mode
    if (theme === 'dark' || theme === 'high-contrast' || theme === 'solarized' || theme === 'cyberpunk') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Apply specific theme class
    document.documentElement.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

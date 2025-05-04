
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Sun, Moon, Palette } from "lucide-react";
import { useTheme } from '@/contexts/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { value: 'dark', label: 'Dark', icon: <Moon className="h-4 w-4" /> },
    { value: 'light', label: 'Light', icon: <Sun className="h-4 w-4" /> },
    { value: 'high-contrast', label: 'High Contrast', icon: <Palette className="h-4 w-4" /> },
    { value: 'solarized', label: 'Solarized', icon: <Palette className="h-4 w-4" /> },
    { value: 'cyberpunk', label: 'Cyberpunk', icon: <Palette className="h-4 w-4" /> },
    { value: 'minimal', label: 'Minimal', icon: <Palette className="h-4 w-4" /> },
    { value: 'sepia', label: 'Sepia', icon: <Palette className="h-4 w-4" /> },
  ];

  const currentThemeIcon = () => {
    switch (theme) {
      case 'dark':
        return <Moon className="h-4 w-4" />;
      case 'light':
        return <Sun className="h-4 w-4" />;
      default:
        return <Palette className="h-4 w-4" />;
    }
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full w-8 h-8">
          {currentThemeIcon()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-36 animate-fade-in">
        {themes.map((themeOption) => (
          <DropdownMenuItem
            key={themeOption.value}
            onClick={() => setTheme(themeOption.value as any)}
            className={`flex items-center gap-2 cursor-pointer ${theme === themeOption.value ? 'bg-primary/10 text-primary' : ''}`}
          >
            {themeOption.icon}
            <span>{themeOption.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;

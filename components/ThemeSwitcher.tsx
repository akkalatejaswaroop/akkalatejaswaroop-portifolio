import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const themes = [
  { name: 'Cyber Dark', id: 'cyber-dark' },
  { name: 'Solarized Light', id: 'solarized-light' },
  { name: 'Forest Green', id: 'forest-green' },
  { name: 'Rose Pine', id: 'rose-pine' },
  { name: 'Synthwave', id: 'synthwave' },
  { name: 'Dracula', id: 'dracula' },
  { name: 'Nord', id: 'nord' },
  { name: 'Gruvbox', id: 'gruvbox' },
  { name: 'Midnight Dusk', id: 'midnight-dusk' },
  { name: 'Oceanic Breeze', id: 'oceanic-breeze' },
  { name: 'Matrix Green', id: 'matrix-green' },
  { name: 'Toasted Almond', id: 'toasted-almond' },
];

const PaletteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="5" r="3"></circle>
        <circle cx="18" cy="12" r="3"></circle>
        <circle cx="6" cy="12" r="3"></circle>
        <circle cx="12" cy="19" r="3"></circle>
        <path d="m9.17 9.17 5.66 5.66"></path>
        <path d="m14.83 9.17-5.66 5.66"></path>
    </svg>
);

const ThemeSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('cyber-dark');
  const switcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'cyber-dark';
    setSelectedTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleThemeChange = (themeId: string) => {
    setSelectedTheme(themeId);
    localStorage.setItem('portfolio-theme', themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={switcherRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-text-secondary hover:text-accent transition-colors p-2 rounded-full"
        aria-label="Change theme"
      >
        <PaletteIcon className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute right-0 mt-2 w-48 bg-secondary border border-border-color rounded-md shadow-lg z-50 origin-top-right max-h-60 overflow-y-auto"
          >
            <div className="py-1">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => handleThemeChange(theme.id)}
                  className={`w-full text-left px-4 py-2 text-sm ${
                    selectedTheme === theme.id
                      ? 'bg-accent text-primary'
                      : 'text-text-primary hover:bg-border-color'
                  }`}
                >
                  {theme.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
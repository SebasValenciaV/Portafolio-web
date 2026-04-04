import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations, Translation } from '../data/translations';

interface AppSettings {
  themeColor: string;
  textColor: string;
  isDarkMode: boolean;
  visualEffects: boolean;
  musicEnabled: boolean;
  volume: number;
  language: Language;
}

interface AppContextType {
  settings: AppSettings;
  updateSettings: (newSettings: Partial<AppSettings>) => void;
  t: Translation;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AppSettings>(() => {
    const saved = localStorage.getItem('portfolio-settings');
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      themeColor: '#3b82f6', // Default blue
      textColor: '#f8fafc',
      isDarkMode: true,
      visualEffects: true,
      musicEnabled: false,
      volume: 0.5,
      language: 'es',
    };
  });

  useEffect(() => {
    localStorage.setItem('portfolio-settings', JSON.stringify(settings));
    
    // Apply theme classes to document
    if (settings.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Apply theme color as CSS variable
    document.documentElement.style.setProperty('--theme-primary', settings.themeColor);
  }, [settings]);

  const updateSettings = (newSettings: Partial<AppSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const t = translations[settings.language];

  return (
    <AppContext.Provider value={{ settings, updateSettings, t }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

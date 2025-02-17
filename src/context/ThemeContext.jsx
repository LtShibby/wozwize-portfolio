import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const themes = {
  light: {
    primary: 'from-blue-500 to-purple-600',
    background: 'bg-[#f8f9fa]',
    text: 'text-[#2d3436]',
    nav: 'bg-[#ffffff] shadow-md',
    button: 'bg-blue-600 text-white',
  },
  dark: {
    primary: 'from-indigo-900 to-purple-900',
    background: 'bg-[#2d3436]',
    text: 'text-[#00ff00]',
    nav: 'bg-[#1e2122] shadow-md',
    button: 'bg-[#00ff00] text-[#2d3436]',
  },
  forest: {
    primary: 'from-green-600 to-teal-600',
    background: 'bg-[#1b4332]',
    text: 'text-[#95d5b2]',
    nav: 'bg-[#1b4332] shadow-md',
    button: 'bg-[#95d5b2] text-[#1b4332]',
  },
};

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={{ theme: themes[currentTheme], setTheme: setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
} 
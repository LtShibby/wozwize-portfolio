import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const themes = {
  light: {
    primary: 'from-blue-500 via-purple-500 to-pink-500',
    background: 'bg-gradient-to-br from-white via-gray-50 to-gray-100',
    text: 'text-gray-800',
    nav: 'bg-white/80 backdrop-blur-md shadow-lg',
    button: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white',
    accent: 'text-blue-500'
  },
  dark: {
    primary: 'from-green-400 via-emerald-500 to-teal-500',
    background: 'bg-gradient-to-br from-gray-900 via-gray-800 to-black',
    text: 'text-green-400',
    nav: 'bg-black/50 backdrop-blur-md shadow-lg',
    button: 'bg-gradient-to-r from-green-400 to-blue-500 text-black',
    accent: 'text-green-400'
  },
  cyberpunk: {
    primary: 'from-cyan-400 via-fuchsia-500 to-yellow-300',
    background: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
    text: 'text-cyan-300',
    nav: 'bg-black/50 backdrop-blur-md shadow-lg border border-cyan-500/20',
    button: 'bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black',
    accent: 'text-fuchsia-400'
  },
  wozwize: {
    primary: 'from-blue-400 via-cyan-500 to-yellow-300',
    background: 'bg-black',
    text: 'text-blue-100',
    nav: 'bg-black/70 backdrop-blur-md shadow-lg',
    button: 'bg-blue-500 hover:bg-blue-600 text-white',
    buttonAlt: 'bg-yellow-400 hover:bg-yellow-500 text-black', 
    accent: 'text-yellow-400',
    border: 'border-blue-500',
    borderAlt: 'border-yellow-400'
  }
};

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState('wozwize');

  const setTheme = (newTheme) => {
    if (themes[newTheme]) {
      setCurrentTheme(newTheme);
    }
  };

  const value = {
    theme: themes[currentTheme] || themes.dark, // Fallback to dark theme
    setTheme,
    currentTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 
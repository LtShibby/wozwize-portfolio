import { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

function ThemeIcon() {
  const { currentTheme } = useTheme();

  useEffect(() => {
    const favicon = document.getElementById('favicon');
    
    switch(currentTheme) {
      case 'light':
        favicon.href = '/favicon-light.svg';
        break;
      case 'dark':
        favicon.href = '/favicon-dark.svg';
        break;
      case 'cyberpunk':
        favicon.href = '/favicon-cyber.svg';
        break;
      default:
        favicon.href = '/favicon-light.svg';
    }
  }, [currentTheme]);

  return null;
}

export default ThemeIcon; 
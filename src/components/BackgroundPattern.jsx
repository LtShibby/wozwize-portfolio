import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';

function BackgroundPattern() {
  const { theme, currentTheme } = useTheme();
  
  return (
    <div 
      className="fixed inset-0 -z-20 opacity-5"
      style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, ${
          currentTheme === 'light' ? '#2d3436' : '#ffffff'
        } 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }}
    />
  );
}

export default BackgroundPattern; 
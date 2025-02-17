import React, { useTheme } from 'react';
import { motion } from 'framer-motion';

function Card({ children, className = '' }) {
  const { theme } = useTheme();
  
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)"
      }}
      whileTap={{ scale: 0.98 }}
      className={`${theme.nav} p-6 rounded-lg shadow-lg hover:shadow-xl 
        transition-all duration-300 backdrop-blur-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default Card; 
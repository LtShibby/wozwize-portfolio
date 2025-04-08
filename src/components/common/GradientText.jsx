import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

function GradientText({ children, className = '' }) {
  const { theme } = useTheme();
  
  return (
    <motion.h1 
      className={`bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent 
        animate-gradient-x font-bold ${className}`}
    >
      {children}
    </motion.h1>
  );
}

export default GradientText; 
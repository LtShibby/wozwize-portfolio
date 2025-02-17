import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  const location = useLocation();
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className={`${theme.nav} py-4 fixed top-0 left-0 right-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center md:hidden">
          <Link to="/" className={`${theme.text} font-bold`}>WozWize</Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${theme.text} p-2`}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        <ul className={`flex md:justify-center gap-12 items-center ${isMenuOpen ? 'flex-col' : 'hidden md:flex'}`}>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/" className={`${theme.text} hover:opacity-80 transition-colors`}>Home</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/projects" className={`${theme.text} hover:opacity-80 transition-colors`}>Projects</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/about" className={`${theme.text} hover:opacity-80 transition-colors`}>About</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/newsletter" className={`${theme.text} hover:opacity-80 transition-colors`}>Newsletter</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/contact" className={`${theme.text} hover:opacity-80 transition-colors`}>Contact</Link>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

function Navbar() {
  const { theme } = useTheme();

  return (
    <nav className={`${theme.nav} py-4`}>
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex justify-center gap-12 items-center">
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
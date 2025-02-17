import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <nav className={`w-full ${theme.nav} p-4 font-['Fira_Code']`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Hamburger Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden text-2xl ${theme.text} absolute left-4 top-4`}
          >
            ☰
          </button>

          {/* Navigation Links */}
          <ul className={`
            md:flex md:gap-12 md:items-center
            ${isMenuOpen ? 'block' : 'hidden'} 
            md:static absolute top-16 left-0 right-0
            ${theme.nav}
            p-4 md:p-0 
            text-center
            w-full md:w-auto
            z-50
            tracking-wider
          `}>
            <li><Link to="/" className={`block py-2 md:py-0 ${theme.text} hover:opacity-80 transition-colors before:content-['<'] after:content-['>']`}>Home</Link></li>
            <li><Link to="/projects" className={`block py-2 md:py-0 ${theme.text} hover:opacity-80 transition-colors before:content-['<'] after:content-['>']`}>Projects</Link></li>
            <li><Link to="/about" className={`block py-2 md:py-0 ${theme.text} hover:opacity-80 transition-colors before:content-['<'] after:content-['>']`}>About</Link></li>
            <li><Link to="/newsletter" className={`block py-2 md:py-0 ${theme.text} hover:opacity-80 transition-colors before:content-['<'] after:content-['>']`}>Newsletter</Link></li>
            <li><Link to="/contact" className={`block py-2 md:py-0 ${theme.text} hover:opacity-80 transition-colors before:content-['<'] after:content-['>']`}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 
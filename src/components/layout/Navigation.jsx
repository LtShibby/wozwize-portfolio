import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

function Navigation() {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { 
      label: 'Home',
      path: '/',
    },
    { 
      label: 'About',
      path: '/about-us',
    },
    {
      label: 'Services',
      path: '/services',
      submenu: [
        { label: 'AI Development', path: '/services/ai-development' },
        { label: 'Tech Coaching', path: '/services/coaching' },
        { label: 'Software Solutions', path: '/services/software' }
      ]
    },
    { 
      label: 'Blog',
      path: '/blog'
    },
    { 
      label: 'Contact',
      path: '/contact'
    }
  ];

  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleMouseEnter = (index) => {
    if (navItems[index].submenu) {
      setActiveSubmenu(index);
    }
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };

  return (
    <nav className={`${theme.nav} py-4 fixed top-0 left-0 right-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className={`${theme.text} font-bold text-xl`}>
            WozWize
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item.submenu ? (
                  <div className="flex items-center gap-1">
                    <Link 
                      to={item.path}
                      className={`${theme.text} hover:opacity-80 transition-colors`}
                    >
                      {item.label}
                    </Link>
                    <button 
                      className={`${theme.text} hover:opacity-80 transition-colors text-xs`}
                      onMouseEnter={() => handleMouseEnter(index)}
                    >
                      ▼
                    </button>
                  </div>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      to={item.path}
                      className={`${theme.text} hover:opacity-80 transition-colors`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )}

                {/* Submenu */}
                <AnimatePresence>
                  {item.submenu && activeSubmenu === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className={`absolute top-full left-0 mt-2 py-2 ${theme.nav} rounded-lg shadow-lg min-w-[200px]`}
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className={`${theme.text} block px-4 py-2 hover:opacity-80 transition-colors`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${theme.text} md:hidden p-2`}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1, 
                height: 'auto',
                transition: {
                  height: { duration: 0.3 },
                  opacity: { duration: 0.2 }
                }
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                transition: {
                  height: { duration: 0.3 },
                  opacity: { duration: 0.2 }
                }
              }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <motion.div
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                exit={{ x: -20 }}
                className={`${theme.nav} rounded-lg p-4 space-y-4`}
              >
                {navItems.map((item, index) => (
                  <div key={index}>
                    {item.submenu ? (
                      <div className="space-y-2">
                        <div className={`${theme.text} font-bold`}>{item.label}</div>
                        <div className="pl-4 space-y-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className={`${theme.text} block opacity-75 hover:opacity-100`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`${theme.text} block hover:opacity-80 transition-colors`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navigation; 
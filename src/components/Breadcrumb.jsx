import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

function Breadcrumb() {
  const { theme } = useTheme();
  const location = useLocation();
  
  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment !== '');

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return { path, label };
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${theme.nav} py-2 px-4 rounded-lg shadow-sm mb-6`}
    >
      <div className="flex items-center gap-2 text-sm">
        <Link 
          to="/"
          className={`${theme.text} hover:opacity-80 transition-colors`}
        >
          Home
        </Link>
        {breadcrumbItems.map((item, index) => (
          <div key={item.path} className="flex items-center gap-2">
            <span className={`${theme.text} opacity-50`}>/</span>
            {index === breadcrumbItems.length - 1 ? (
              <span className={`${theme.text}`}>{item.label}</span>
            ) : (
              <Link 
                to={item.path}
                className={`${theme.text} hover:opacity-80 transition-colors`}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Breadcrumb; 
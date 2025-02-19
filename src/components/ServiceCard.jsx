import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

function ServiceCard({ service }) {
  const { theme } = useTheme();
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`${theme.nav} p-6 rounded-lg shadow-lg`}
    >
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className={`${theme.text} text-xl font-bold mb-2`}>{service.title}</h3>
      <p className={`${theme.text} opacity-75 mb-4`}>{service.description}</p>
      {service.link && (
        <Link 
          to={service.link}
          className={`${theme.button} px-4 py-2 rounded inline-block hover:opacity-90 transition-all`}
        >
          Learn More
        </Link>
      )}
    </motion.div>
  );
}

export default ServiceCard; 
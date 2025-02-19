import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

function FeaturedProject({ project, index }) {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`${theme.nav} p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6 items-center`}
    >
      <div className="w-full md:w-1/3">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full aspect-video rounded-lg object-cover"
        />
      </div>
      <div className="w-full md:w-2/3">
        <h3 className={`${theme.text} text-2xl font-bold mb-2`}>{project.title}</h3>
        <p className={`${theme.text} opacity-75 mb-4`}>{project.description}</p>
        <div className="flex gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span 
              key={i}
              className={`${theme.text} opacity-75 text-sm px-2 py-1 rounded bg-black bg-opacity-10`}
            >
              {tech}
            </span>
          ))}
        </div>
        <Link 
          to={project.link}
          className={`${theme.button} px-4 py-2 rounded inline-block hover:opacity-90 transition-all`}
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
}

export default FeaturedProject; 
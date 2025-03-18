import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

function FeaturedProject({ project, index }) {
  const { theme } = useTheme();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${theme.nav} shadow-lg p-6 rounded-lg flex flex-col md:flex-row gap-6 items-center transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5`}
    >
      <div className="relative w-full md:w-1/3 overflow-hidden rounded-lg">
        {project.isFeatured && (
          <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full z-10 shadow-md">
            Featured
          </div>
        )}
        <img
          alt={project.title}
          src={project.image}
          className="w-full aspect-video object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="w-full md:w-2/3">
        <div className="flex flex-col">
          <h3 className={`${theme.text} text-2xl font-bold mb-1 relative group`}>
            {project.title}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </h3>
          {project.launchDate && (
            <span className={`text-sm ${theme.text} opacity-75 mb-2`}>
              Launched {new Date(project.launchDate).toLocaleDateString()}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 mb-2">
          {project.status && (
            <span className={`text-xs px-2 py-1 rounded-full ${
              project.status === 'Live' ? 'bg-green-100 text-green-800 hover:animate-pulse' :
              project.status === 'Beta' ? 'bg-yellow-100 text-yellow-800 hover:animate-pulse' :
              project.status === 'Alpha' ? 'bg-blue-100 text-blue-800 hover:animate-pulse' :
              'bg-gray-100 text-gray-800'
            }`}>
              {project.status}
            </span>
          )}
        </div>
        <div className="mb-2">
          {project.category && (
            <span className="text-sm text-blue-600 font-medium transition-colors duration-300 hover:text-purple-600">
              {project.category}
            </span>
          )}
        </div>
        <p className={`${theme.text} opacity-75 mb-4`}>{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className={`${theme.nav} text-sm px-2 py-1 rounded border border-current border-opacity-20 whitespace-nowrap ${theme.text} transition-all duration-300 hover:border-blue-500 hover:border-opacity-100 hover:-translate-y-1`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={project.link}
            className={`${theme.button} px-4 py-2 rounded inline-flex items-center gap-2 hover:gap-3 transition-all`}
          >
            Learn More <span className="transition-transform duration-300">→</span>
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded inline-block hover:bg-blue-500 hover:text-white transition-all"
            >
              View Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default FeaturedProject; 
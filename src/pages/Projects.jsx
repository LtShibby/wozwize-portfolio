import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Projects() {
  const { theme } = useTheme();

  const projects = [
    {
      title: "WordWIZE",
      description: "A Wordle-inspired word guessing game built with React. Features include daily challenges, custom word length options, and a clean, responsive interface.",
      path: "/games/wordle",
      tech: ["React", "JavaScript", "Tailwind CSS"]
    },
    {
      title: "WIZEsnake",
      description: "Classic snake game reimagined with modern features including AI mode, multiple themes, and responsive controls. Built using React and HTML Canvas.",
      path: "/games/snake",
      tech: ["React", "Canvas API", "AI Algorithm"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-5rem)] p-8"
    >
      <h2 className={`${theme.text} text-3xl md:text-4xl font-bold mb-8 text-center font-['Fira_Code']`}>
        &lt;Projects /&gt;
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${theme.nav} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all`}
          >
            <h3 className={`${theme.text} text-2xl font-bold mb-3`}>{project.title}</h3>
            <p className={`${theme.text} opacity-80 mb-4`}>{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className={`${theme.text} text-sm px-2 py-1 rounded-full border border-current opacity-75`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link 
              to={project.path}
              className={`${theme.button} px-6 py-2 rounded inline-block hover:opacity-90 transition-all`}
            >
              View Project
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects; 
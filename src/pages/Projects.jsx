import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Projects() {
  const { theme } = useTheme();

  const projectSections = {
    games: {
      title: "Games",
      items: [
        {
          title: "WordWIZE",
          description: "A Wordle-inspired word guessing game built with React. Features include daily challenges, custom word length options, and a clean, responsive interface.",
          path: "/games/wordwize",
          tech: ["React", "JavaScript", "Tailwind CSS"]
        },
        {
          title: "WIZEsnake",
          description: "Classic snake game reimagined with modern features including AI mode, multiple themes, and responsive controls. Built using React and HTML Canvas.",
          path: "/games/wizesnake",
          tech: ["React", "Canvas API", "AI Algorithm"]
        }
      ]
    },
    aiTools: {
      title: "AI Tools",
      items: [
        {
          title: "GPT RPG",
          description: "A custom GPT designed to create epic, single-session adventures with dynamic story-driven narrations.",
          path: "https://chatgpt.com/g/g-UhJ1QckRy-gpt-rpg",
          tech: ["GPT-4", "Prompt Engineering", "Storytelling"],
          external: true
        },
        {
          title: "SpoilerGuard AI",
          description: "An AI assistant that provides personalized, spoiler-free insights for books, shows, and movies.",
          path: "https://chatgpt.com/g/g-t88VgkKJP-spoilerguard-ai",
          tech: ["GPT-4", "Content Analysis", "User Personalization"],
          external: true
        },
        {
          title: "LitVisualizer",
          description: "An art generation tool that helps visualize story elements when you can't quite picture how things should appear.",
          path: "https://chatgpt.com/g/g-Zvzt34h0c-litvisualizer",
          tech: ["GPT-4", "Image Generation", "Creative AI"],
          external: true
        },
        {
          title: "Success Coach GPT",
          description: "An AI coach that provides direct, actionable advice for self-improvement and relationships.",
          path: "https://chatgpt.com/g/g-67768e91507c819195f12dc7576fb54d-success-coach-gpt",
          tech: ["GPT-4", "Coaching", "Personal Development"],
          external: true
        }
      ]
    },
    // learningTools: {
    //   title: "Learning Tools",
    //   items: [
    //     // Comment out Learning Assistant for now
    //     /*
    //     {
    //       title: "Coding Problem Assistant",
    //       description: "An AI-powered learning tool that helps analyze coding problems, " +
    //                   "provides guided hints, and offers code review feedback. Features include " +
    //                   "pattern recognition, pseudocode generation, and test case analysis.",
    //       path: "/learning-assistant",
    //       tech: ["Python", "OpenAI API", "AST Analysis", "Algorithm Patterns"],
    //       features: [
    //         "Problem analysis and breakdown",
    //         "Pattern recognition",
    //         "Guided hint system",
    //         "Code review and feedback",
    //         "Test case analysis"
    //       ]
    //     },
    //     */
    //   ]
    // },
    // tools: {
    //   title: "Tools",
    //   items: [
    //     // Comment out Learning Assistant for now
    //     /*
    //     {
    //       title: "Learning Assistant",
    //       description: "AI-powered coding problem analyzer and solution generator. Uses Ollama with the Mistral model for local AI processing.",
    //       path: "/learning-assistant",
    //       tech: ["React", "Node.js", "Ollama", "Mistral"]
    //     },
    //     */
    //   ]
    // }
  };

  const ProjectCard = ({ project }) => (
    <motion.div
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      className={`${theme.nav} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all`}
    >
      <h3 className={`${theme.text} text-2xl font-bold mb-3`}>{project.title}</h3>
      <p className={`${theme.text} opacity-80 mb-4`}>{project.description}</p>
      
      {project.features && (
        <ul className="mb-4 space-y-2">
          {project.features.map((feature, index) => (
            <li key={index} className={`${theme.text} opacity-75 flex items-start gap-2`}>
              <span className="mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

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

      {project.external ? (
        <a 
          href={project.path}
          target="_blank"
          rel="noopener noreferrer"
          className={`${theme.button} px-6 py-2 rounded inline-block hover:opacity-90 transition-all`}
        >
          View Project
        </a>
      ) : (
        <Link 
          to={project.path}
          className={`${theme.button} px-6 py-2 rounded inline-block hover:opacity-90 transition-all`}
        >
          View Project
        </Link>
      )}
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-5rem)] p-8"
    >
      <h2 className={`${theme.text} text-3xl md:text-4xl font-bold mb-8 text-center font-['Fira_Code']`}>
        Projects
      </h2>
      
      <div className="max-w-6xl mx-auto space-y-12">
        {Object.entries(projectSections).map(([sectionKey, section]) => (
          <div key={sectionKey}>
            <h3 className={`${theme.text} text-2xl font-bold mb-6 font-['Fira_Code'] flex items-center gap-2`}>
              {section.title}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {section.items.map((project, index) => (
                <ProjectCard 
                  key={index} 
                  project={project}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects; 
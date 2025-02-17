import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  const { theme } = useTheme();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const text = "Matthew J. Wozniak";
  const characters = text.split("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[calc(100vh-5rem)] p-8"
    >
      {/* Hero Section */}
      <motion.div 
        {...fadeIn}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <h1 className={`${theme.text} text-4xl md:text-6xl font-bold mb-6 font-['Fira_Code'] flex justify-center items-center`}>
          <span className="text-blue-500">&lt;</span>
          <div className="px-4">
            {characters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.1,
                  delay: index * 0.1,
                  ease: "easeIn"
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block w-[2px] h-[1em] bg-current ml-1 align-middle"
            />
          </div>
          <span className="text-blue-500">/&gt;</span>
        </h1>
        <p className={`${theme.text} text-xl md:text-2xl mb-8 font-['Fira_Code']`}>
          Solving Complex Problems | Building Scalable Systems | Inspiring Future Leaders
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            to="/projects" 
            className={`${theme.button} px-6 py-3 rounded hover:opacity-90 transition-all`}
          >
            View Projects
          </Link>
          <Link 
            to="/contact"
            className={`${theme.text} border-2 border-current px-6 py-3 rounded hover:opacity-90 transition-all`}
          >
            Get in Touch
          </Link>
        </div>
      </motion.div>

      {/* Mission Statement */}
      <motion.div 
        {...fadeIn} 
        transition={{ delay: 0.2 }}
        className={`${theme.nav} p-8 rounded-lg shadow-lg max-w-4xl mx-auto mb-12`}
      >
        <p className={`${theme.text} text-lg leading-relaxed mb-6`}>
        Dedicated Software Engineer and AI Developer focused on transforming complex challenges into efficient, scalable solutions. 
        Leveraging expertise in LLM implementations, full-stack development (Java, Python, React), and cloud architecture (AWS, GCP) 
        to build next-generation applications. Passionate about leading agile teams and implementing AI-driven systems that deliver 
        measurable business value. Currently exploring innovations in machine learning, prompt engineering, and enterprise software 
        architecture.
        </p>
      </motion.div>

      {/* Key Areas */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        <motion.div 
          {...fadeIn} 
          transition={{ delay: 0.3 }}
          className={`${theme.nav} p-6 rounded-lg shadow-lg`}
        >
          <h3 className={`${theme.text} text-xl font-bold mb-4 font-['Fira_Code']`}>
            🔧 Technical Excellence
          </h3>
          <p className={`${theme.text} opacity-80`}>
            Designed and deployed high-performance software solutions that improved system efficiency, 
            reduced processing times, and elevated user satisfaction.
          </p>
        </motion.div>

        <motion.div 
          {...fadeIn} 
          transition={{ delay: 0.4 }}
          className={`${theme.nav} p-6 rounded-lg shadow-lg`}
        >
          <h3 className={`${theme.text} text-xl font-bold mb-4 font-['Fira_Code']`}>
            👨‍🏫 Developer Mentoring
          </h3>
          <p className={`${theme.text} opacity-80`}>
            My passion for sharing knowledge drives my commitment to mentoring developers, 
            training teams, and hosting technical workshops through WozWize, a platform for tech mentoring and insights.
          </p>
        </motion.div>

        <motion.div 
          {...fadeIn} 
          transition={{ delay: 0.5 }}
          className={`${theme.nav} p-6 rounded-lg shadow-lg`}
        >
          <h3 className={`${theme.text} text-xl font-bold mb-4 font-['Fira_Code']`}>
            🤝 Collaborative Innovation
          </h3>
          <p className={`${theme.text} opacity-80`}>
            I foster inclusive, collaborative environments where innovation thrives. 
            By connecting diverse perspectives, I enable teams to solve complex challenges.
          </p>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div 
        {...fadeIn}
        transition={{ delay: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className={`${theme.text} text-lg mb-6`}>
          Let's connect to discuss how we can build scalable solutions, implement AI innovations, 
          and develop top talent to drive impactful software development together!
        </p>
        <Link 
          to="/contact"
          className={`${theme.button} px-8 py-3 rounded inline-block hover:opacity-90 transition-all`}
        >
          Start a Conversation
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Home; 
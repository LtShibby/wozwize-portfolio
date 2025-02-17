import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

function About() {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-5rem)] p-8"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className={`${theme.text} text-3xl md:text-4xl font-bold mb-8 text-center font-['Fira_Code']`}>
          &lt;About Me /&gt;
        </h2>
        <div className={`${theme.nav} p-8 rounded-lg shadow-lg`}>
          <div className="space-y-6">
            <motion.p 
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              className={`${theme.text} text-lg leading-relaxed`}
            >
              Hello! I'm a passionate web developer with a love for creating beautiful and functional web applications. My journey in web development started with HTML and CSS, and has evolved to include modern frameworks and tools.
            </motion.p>
            
            <motion.div
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className={`${theme.text} text-xl font-bold mb-3`}>Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Git'].map((skill, index) => (
                  <span key={index} className={`${theme.button} px-3 py-1 rounded`}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className={`${theme.text} text-xl font-bold mb-3`}>Experience</h3>
              <ul className={`${theme.text} list-disc list-inside space-y-2`}>
                <li>Full Stack Developer at Tech Corp (2020-Present)</li>
                <li>Frontend Developer at Web Solutions (2018-2020)</li>
                <li>Freelance Web Developer (2016-2018)</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About; 
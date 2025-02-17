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
      className="min-h-[calc(100vh-5rem)] p-4 md:p-8"
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
        delay={0.2}
        className={`${theme.nav} p-8 rounded-lg shadow-lg max-w-4xl mx-auto mb-12`}
      >
        <p className={`${theme.text} text-lg leading-relaxed mb-6`}>
          Senior Software Engineer and AI Solutions Architect specializing in enterprise-scale applications 
          and artificial intelligence integration. Expert in developing LLM-powered applications, cloud-native 
          architectures, and full-stack solutions using Java, Python, and React. Leading development teams 
          in implementing cutting-edge AI technologies, from GPT integrations to custom machine learning models. 
          Proven track record of delivering scalable solutions for Fortune 500 companies while mentoring 
          the next generation of tech leaders.
        </p>
      </motion.div>

      {/* Key Areas */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        <motion.div 
          {...fadeIn}
          delay={0.3}
          className={`${theme.nav} p-6 rounded-lg shadow-lg`}
        >
          <h3 className={`${theme.text} text-xl font-bold mb-4 font-['Fira_Code']`}>
            🔧 Full-Stack Development
          </h3>
          <p className={`${theme.text} opacity-80`}>
            Architecting and deploying high-performance, cloud-native applications using 
            modern tech stacks. Expertise in microservices, RESTful APIs, and distributed 
            systems that scale efficiently in AWS and GCP environments.
          </p>
        </motion.div>

        <motion.div 
          {...fadeIn}
          delay={0.4}
          className={`${theme.nav} p-6 rounded-lg shadow-lg`}
        >
          <h3 className={`${theme.text} text-xl font-bold mb-4 font-['Fira_Code']`}>
            🤖 AI/ML Engineering
          </h3>
          <p className={`${theme.text} opacity-80`}>
            Implementing advanced AI solutions including LLM integrations, RAG systems, 
            and custom machine learning models. Specialized in prompt engineering, vector 
            databases, and AI-powered automation for enterprise applications.
          </p>
        </motion.div>

        <motion.div 
          {...fadeIn}
          delay={0.5}
          className={`${theme.nav} p-6 rounded-lg shadow-lg`}
        >
          <h3 className={`${theme.text} text-xl font-bold mb-4 font-['Fira_Code']`}>
            👨‍🏫 Technical Leadership
          </h3>
          <p className={`${theme.text} opacity-80`}>
            Leading agile development teams and mentoring software engineers through WozWize. 
            Expertise in system architecture, code quality, and implementing best practices 
            for scalable, maintainable software solutions.
          </p>
        </motion.div>
      </div>

      {/* Additional Expertise Areas */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        <motion.div 
          {...fadeIn}
          delay={0.6}
          className={`${theme.nav} p-6 rounded-lg shadow-lg`}
        >
          <h3 className={`${theme.text} text-xl font-bold mb-4 font-['Fira_Code']`}>
            ✍️ Technical Writing
          </h3>
          <p className={`${theme.text} opacity-80`}>
            Author of "Delving into Design Patterns" and the WozWize Newsletter. 
            Creating comprehensive guides on AI development, software architecture, 
            and emerging technologies. Sharing insights that help developers stay 
            ahead in the rapidly evolving tech landscape.
          </p>
        </motion.div>

        <motion.div 
          {...fadeIn}
          delay={0.7}
          className={`${theme.nav} p-6 rounded-lg shadow-lg`}
        >
          <h3 className={`${theme.text} text-xl font-bold mb-4 font-['Fira_Code']`}>
            🎓 Tech Mentorship
          </h3>
          <p className={`${theme.text} opacity-80`}>
            Dedicated to nurturing the next generation of tech leaders through 
            one-on-one mentoring, code reviews, and career guidance. Helping 
            developers master modern technologies and best practices while 
            building their professional portfolio.
          </p>
        </motion.div>

        <motion.div 
          {...fadeIn}
          delay={0.8}
          className={`${theme.nav} p-6 rounded-lg shadow-lg`}
        >
          <h3 className={`${theme.text} text-xl font-bold mb-4 font-['Fira_Code']`}>
            💼 Technical Consulting
          </h3>
          <p className={`${theme.text} opacity-80`}>
            Providing strategic technical guidance to organizations navigating digital 
            transformation. Advising on AI integration, system modernization, and 
            technology stack optimization to achieve business objectives and maintain 
            competitive advantage.
          </p>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div 
        {...fadeIn}
        delay={0.9}
        className="text-center max-w-2xl mx-auto"
      >
        <p className={`${theme.text} text-lg mb-6`}>
          Ready to elevate your software development with AI integration, cloud architecture, 
          or technical mentorship? Let's collaborate on building innovative, scalable solutions 
          that drive real business value.
        </p>
        <Link 
          to="/contact"
          className={`${theme.button} px-8 py-3 rounded inline-block hover:opacity-90 transition-all`}
        >
          Schedule a Consultation
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Home; 
import { useTheme } from '../../context/ThemeContext';
import PageTransition from '../../components/layout/PageTransition.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function FreelanceService() {
  const { theme } = useTheme();

  const services = [
    {
      title: "Project-Based Development",
      description: "Complete end-to-end development of specific features or applications.",
      icon: "💻"
    },
    {
      title: "Technical Architecture",
      description: "Design and implementation of scalable system architectures.",
      icon: "🏗️"
    },
    {
      title: "Code Review & Optimization",
      description: "Review existing codebases and implement performance improvements.",
      icon: "🔍"
    },
    {
      title: "AI/ML Integration",
      description: "Add AI capabilities to existing applications and systems.",
      icon: "🤖"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-5rem)] p-8 pt-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className={`${theme.text} text-3xl md:text-4xl font-bold mb-8 text-center font-['Fira_Code']`}>
              Freelance Engineering
            </h2>
            <div className={`${theme.nav} p-6 rounded-lg shadow-lg`}>
              <p className={`${theme.text} text-lg leading-relaxed mb-4`}>
                Expert software development services for specific project needs, bringing senior-level 
                expertise to help you build robust, scalable solutions.
              </p>
            </div>
          </section>

          <section>
            <h3 className={`${theme.text} text-2xl font-bold mb-6`}>Available Services</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`${theme.nav} p-6 rounded-lg shadow-lg`}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className={`${theme.text} text-xl font-bold mb-2`}>{service.title}</h4>
                  <p className={`${theme.text} opacity-75`}>{service.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <div className={`${theme.nav} p-8 rounded-lg shadow-lg text-center`}>
              <h3 className={`${theme.text} text-2xl font-bold mb-4`}>Have a Project in Mind?</h3>
              <p className={`${theme.text} mb-6`}>
                Let's discuss your project requirements and how I can help bring your ideas to life.
              </p>
              <Link 
                to="/contact"
                className={`${theme.button} px-6 py-3 rounded inline-block hover:opacity-90 transition-all`}
              >
                Discuss Your Project
              </Link>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}

export default FreelanceService; 
import { useTheme } from '../../context/ThemeContext';
import PageTransition from '../../components/layout/PageTransition.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function ConsultingService() {
  const { theme } = useTheme();

  const offerings = [
    {
      title: "Technical Strategy",
      description: "Develop comprehensive technical roadmaps and architecture plans aligned with business goals.",
      icon: "🎯"
    },
    {
      title: "Technology Assessment",
      description: "Evaluate current systems and recommend optimizations for scalability and efficiency.",
      icon: "📊"
    },
    {
      title: "AI Integration Planning",
      description: "Strategic guidance on incorporating AI and ML solutions into existing systems.",
      icon: "🤖"
    },
    {
      title: "Team Development",
      description: "Build and optimize technical teams, improve processes, and enhance productivity.",
      icon: "👥"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-5rem)] p-8 pt-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className={`${theme.text} text-3xl md:text-4xl font-bold mb-8 text-center font-['Fira_Code']`}>
              Enterprise Consulting
            </h2>
            <div className={`${theme.nav} p-6 rounded-lg shadow-lg`}>
              <p className={`${theme.text} text-lg leading-relaxed mb-4`}>
                Strategic technology guidance to help organizations navigate complex technical decisions, 
                optimize their systems, and achieve their business objectives.
              </p>
            </div>
          </section>

          <section>
            <h3 className={`${theme.text} text-2xl font-bold mb-6`}>Our Consulting Services</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {offerings.map((offering, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`${theme.nav} p-6 rounded-lg shadow-lg`}
                >
                  <div className="text-4xl mb-4">{offering.icon}</div>
                  <h4 className={`${theme.text} text-xl font-bold mb-2`}>{offering.title}</h4>
                  <p className={`${theme.text} opacity-75`}>{offering.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <div className={`${theme.nav} p-8 rounded-lg shadow-lg text-center`}>
              <h3 className={`${theme.text} text-2xl font-bold mb-4`}>Ready to Transform Your Technology?</h3>
              <p className={`${theme.text} mb-6`}>
                Let's discuss how our consulting services can help your organization thrive.
              </p>
              <Link 
                to="/contact"
                className={`${theme.button} px-6 py-3 rounded inline-block hover:opacity-90 transition-all`}
              >
                Schedule a Consultation
              </Link>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}

export default ConsultingService; 
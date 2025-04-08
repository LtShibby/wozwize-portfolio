import { useTheme } from '../context/ThemeContext';
import PageTransition from '../components/layout/PageTransition.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function AboutUs() {
  const { theme } = useTheme();

  const coreValues = [
    {
      title: "Innovation",
      description: "Pushing boundaries in AI and software development",
      icon: "🚀"
    },
    {
      title: "Transparency",
      description: "Clear communication and honest solutions",
      icon: "🔍"
    },
    {
      title: "Excellence",
      description: "Delivering high-quality results that exceed expectations",
      icon: "⭐"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-5rem)] p-8 pt-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Company Overview */}
          <section>
            <h2 className={`${theme.text} text-3xl md:text-4xl font-bold mb-8 text-center font-['Fira_Code']`}>
              About WozWize
            </h2>
            <div className={`${theme.nav} p-6 rounded-lg shadow-lg`}>
              <p className={`${theme.text} text-lg leading-relaxed`}>
                WozWize is a leading innovator in AI development, software consulting, and tech coaching. 
                We specialize in creating cutting-edge solutions that bridge the gap between complex 
                technology and practical business needs.
              </p>
            </div>
          </section>

          {/* Core Values */}
          <section>
            <h3 className={`${theme.text} text-2xl font-bold mb-6 font-['Fira_Code']`}>Our Core Values</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`${theme.nav} p-6 rounded-lg shadow-lg`}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className={`${theme.text} text-xl font-bold mb-2`}>{value.title}</h4>
                  <p className={`${theme.text} opacity-75`}>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Vision & Mission */}
          <section>
            <h3 className={`${theme.text} text-2xl font-bold mb-6 font-['Fira_Code']`}>Our Vision</h3>
            <div className={`${theme.nav} p-6 rounded-lg shadow-lg`}>
              <p className={`${theme.text} text-lg leading-relaxed`}>
                We envision a future where technology serves humanity with transparency and purpose. 
                Our mission is to challenge the status quo in software, AI, and digital transparency, 
                creating solutions that make a real difference in how people interact with technology.
              </p>
            </div>
          </section>

          {/* Meet the Founder */}
          <section>
            <h3 className={`${theme.text} text-2xl font-bold mb-6 font-['Fira_Code']`}>Leadership</h3>

            <div className={`${theme.nav} p-6 rounded-lg shadow-lg mb-6`}>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-32 h-32 rounded-full overflow-hidden">
                  <img 
                    src="/images/matt-headshot.jpg" 
                    alt="Matthew Wozniak - Founder of WozWize"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className={`${theme.text} text-xl font-bold mb-2`}>Matthew Wozniak</h4>
                  <p className={`${theme.text} opacity-75 mb-4`}>Director of Digital Solutions at WozWize</p>
                  <p className={`${theme.text} mb-4`}>
                    With over a decade of experience in software development and AI, 
                    Matt leads WozWize's vision of innovative technology solutions.
                  </p>
                  <Link 
                    to="/about-matt" 
                    className={`${theme.button} px-4 py-2 rounded inline-block hover:opacity-90 transition-all`}
                  >
                    Learn More About Matt
                  </Link>
                </div>
              </div>
            </div>

            <div className={`${theme.nav} p-6 rounded-lg shadow-lg`}>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-32 h-32 rounded-full overflow-hidden">
                  <img 
                    src="/images/cory-headshot.jpg" 
                    alt="Cory - Strategic Advisor at WozWize"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className={`${theme.text} text-xl font-bold mb-2`}>Cory Dennington</h4>
                  <p className={`${theme.text} opacity-75 mb-4`}>Customer Success Architect at WozWize</p>
                  <p className={`${theme.text} mb-4`}>
                    Cory brings over a decade of experience in program management and operations, helping clients scale with clarity, precision, and grit.
                  </p>
                  <Link 
                    to="/about-cory" 
                    className={`${theme.button} px-4 py-2 rounded inline-block hover:opacity-90 transition-all`}
                  >
                    Learn More About Cory
                  </Link>
                </div>
              </div>
            </div>

          </section>
        </div>
      </div>
    </PageTransition>
  );
}

export default AboutUs;
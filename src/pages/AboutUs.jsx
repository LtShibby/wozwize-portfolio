import { useTheme } from '../context/ThemeContext';
import PageTransition from '../components/layout/PageTransition.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import React from 'react';

function AboutUs() {
  const { theme } = useTheme();

  const coreValues = [
    {
      title: "Wisdom",
      description: "We apply deep technical and strategic insight to every decision.",
      icon: "🧠",
      letter: "W"
    },
    {
      title: "Impact",
      description: "We build with purpose, prioritizing outcomes that move the needle.",
      icon: "🎯",
      letter: "I"
    },
    {
      title: "Zero Guessing",
      description: "We don’t assume—we measure, validate, and iterate.",
      icon: "🚫",
      letter: "Z"
    },
    {
      title: "Execution",
      description: "We ship. Fast, clean, and aligned with what actually matters.",
      icon: "⚙️",
      letter: "E"
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
            <h3 className={`${theme.text} text-2xl font-bold mb-6 font-['Fira_Code'] text-center`}>Our Core Values</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {coreValues.map((value, index) => {
                const [flipped, setFlipped] = React.useState(false);

                return (
                  <motion.div
                    key={index}
                    whileTap={{ scale: 0.97 }}
                    className="[perspective:1000px] cursor-pointer"
                    onClick={() => setFlipped(!flipped)}
                  >
                    <div
                      className={`relative h-48 w-full [transform-style:preserve-3d] transition-transform duration-500 ${flipped ? '[transform:rotateY(180deg)]' : ''}`}
                    >
                      {/* Front Side */}
                      <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold bg-gray-800 text-white rounded-lg [backface-visibility:hidden]">
                        {value.letter}
                      </div>

                      {/* Back Side */}
                      <div className="absolute inset-0 p-4 bg-white rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] text-center">
                        <div className="text-3xl mb-2">{value.icon}</div>
                        <h4 className="text-xl font-bold mb-1">{value.title}</h4>
                        <p className="text-sm opacity-75">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Vision & Mission */}
          <section>
            <h3 className={`${theme.text} text-2xl font-bold mb-6 font-['Fira_Code'] text-center`}>Our Vision</h3>
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
            <h3 className={`${theme.text} text-2xl font-bold mb-6 font-['Fira_Code'] text-center`}>Leadership</h3>

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

          </section>
        </div>
      </div>
    </PageTransition>
  );
}

export default AboutUs;
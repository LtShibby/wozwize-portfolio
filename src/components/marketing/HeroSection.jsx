import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext.jsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MissionCarousel from './MissionCarousel.jsx';

function HeroSection() {
  const { theme } = useTheme();
  // Get highlight color directly from theme.button
  const getHighlightColor = () => {
    // Extract the color from theme.button and apply higher opacity
    return theme.button.replace('bg-', '') + ' bg-opacity-60';
  };

  // Split motto into parts for selective highlighting
  const mottoParts = [
    { text: "Technology should ", highlight: false },
    { text: "solve real problems", highlight: true },
    { text: " not create new ones.", highlight: false }
  ];

  const [showHowWeWork, setShowHowWeWork] = useState(false);

  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description:
        'A quick consultation to see if we vibe. You tell us what\'s keeping you up at night, we tell you how we\'d solve it.'
    },
    {
      number: '02',
      title: 'Planning',
      description:
        'We scope the project with timelines, cost, and milestones. No mystery meat proposals. Just clean, actionable strategy.'
    },
    {
      number: '03',
      title: 'Development',
      description:
        'We get to work. Weekly updates, tight feedback loops, async-friendly check-ins. We don\'t ghost—we ship.'
    },
    {
      number: '04',
      title: 'Support',
      description:
        'After launch, we don\'t vanish. We offer handoff training, docs, support retainers, or can keep building with you.'
    }
  ];

  return (
    
    <div className="space-y-8">
      <div className="mb-12 text-center">
        <div className="inline-block relative">
          {mottoParts.map((part, partIndex) => (
            <span key={partIndex} className="relative inline-block mx-[0.15em]">
              {part.text.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: (partIndex * part.text.length + charIndex) * 0.05,
                    ease: "easeIn"
                  }}
                  className={`${part.highlight ? 'text-white' : theme.text} text-xl md:text-2xl font-bold relative z-10`}
                >
                  {char}
                </motion.span>
              ))}
              {part.highlight && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 0.5,
                    delay: partIndex * 0.5 + 1,
                    ease: "easeOut"
                  }}
                  className={`absolute inset-0 bg-${getHighlightColor()} -skew-x-6 z-0 
                    transform-gpu`}
                />
              )}
            </span>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        {!showHowWeWork ? (
          <motion.div
            key="mission"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`${theme.nav} ${theme.border} border p-8 md:p-16 rounded-lg`}>
              <MissionCarousel />
              <div className="flex justify-center gap-4 mt-8">
                <Link 
                  to="/contact"
                  className={`${theme.buttonAlt} px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition-all`}
                >
                  Let's Build Something!
                </Link>
                <button
                  onClick={() => setShowHowWeWork(true)}
                  className={`${theme.button} px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-70 transition-all`}
                >
                  How We Work
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="how-we-work"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`${theme.nav} min-h-screen p-8 md:p-16 relative`}>
              <button
                onClick={() => setShowHowWeWork(false)}
                className={`absolute top-4 left-4 ${theme.text} hover:opacity-70 transition-opacity flex items-center gap-2`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span>Back</span>
              </button>

              <header className="text-center mb-16">
                <h1 className={`${theme.text} text-3xl md:text-5xl font-bold mb-4 font-['Fira_Code']`}>How We Work</h1>
                <p className={`${theme.text} text-md md:text-lg opacity-75 max-w-2xl mx-auto`}>
                  We don't overpromise, underdeliver, or disappear. We collaborate, ship fast, and make tech that lasts.
                </p>
              </header>

              <section className="max-w-4xl mx-auto space-y-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`${theme.border} border flex items-start gap-6 p-6 ${theme.nav} rounded-lg shadow-lg`}
                  >
                    <div className={`${theme.accent} text-3xl font-bold font-['Fira_Code'] w-12`}>{step.number}</div>
                    <div>
                      <h2 className={`${theme.text} text-xl md:text-2xl font-bold mb-2`}>{step.title}</h2>
                      <p className={`${theme.text} opacity-75 text-sm md:text-base`}>{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </section>

              <footer className="text-center mt-20">
                <p className={`${theme.text} opacity-75 text-sm`}>Ready to get started?</p>
                <Link
                  to="/contact"
                  className={`${theme.buttonAlt} inline-block mt-4 px-6 py-3 font-semibold rounded-full hover:opacity-90 transition`}
                >
                  Let's Build Something →
                </Link>
              </footer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HeroSection; 
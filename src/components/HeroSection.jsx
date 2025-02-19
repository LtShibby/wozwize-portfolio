import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import MissionCarousel from './MissionCarousel';

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

  return (
    <div className={`${theme.nav} p-8 md:p-16 rounded-lg shadow-lg text-center`}>
      {/* Motto with typing and highlight animation */}
      <div className="mb-12">
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

      {/* Existing Carousel */}
      <MissionCarousel />
      
      {/* Existing CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex gap-4 justify-center"
      >
        <Link 
          to="/services" 
          className={`${theme.button} px-8 py-3 rounded text-lg hover:opacity-90 transition-all`}
        >
          Explore Our Services
        </Link>
        <Link 
          to="/contact" 
          className={`${theme.nav} border border-current px-8 py-3 rounded text-lg hover:opacity-90 transition-all ${theme.text}`}
        >
          Get in Touch
        </Link>
      </motion.div>
    </div>
  );
}

export default HeroSection; 
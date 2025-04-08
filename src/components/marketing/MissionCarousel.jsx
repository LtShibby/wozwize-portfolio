import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext.jsx';

function MissionCarousel() {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const missions = [
      {
        title: "Innovating Software",
        subtitle: "Shaping the Future",
        description: "Building cutting-edge solutions that seamlessly integrate technology and business",
        icon: "🚀"
      },
      {
        title: "AI Development",
        subtitle: "Smart Solutions for Real Problems",
        description: "Developing AI-driven applications that enhance efficiency, automation, and decision-making",
        icon: "🤖"
      },
      {
        title: "Tech Coaching",
        subtitle: "Empowering the Next Generation",
        description: "Providing hands-on mentorship and guidance to help developers and teams master modern technologies",
        icon: "👥"
      },
      {
        title: "Software Solutions",
        subtitle: "Providing Robust Engineering",
        description: "Crafting high-performance, scalable applications that drive real business impact",
        icon: "💻"
      },
      {
        title: "Technical Leadership",
        subtitle: "Driving Innovation & Excellence",
        description: "Providing strategic guidance to help teams architect and implement next-gen technology solutions",
        icon: "🎯"
      },
      {
        title: "AI & Data Science",
        subtitle: "Unlocking Deeper Insights",
        description: "Leveraging machine learning and analytics to transform raw data into actionable intelligence",
        icon: "📈"
      },
      {
        title: "Engineering Scalable Systems",
        subtitle: "Optimized for Growth",
        description: "Designing and optimizing systems to ensure reliability, performance, and future-proof scalability",
        icon: "⚙️"
      }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % missions.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="text-4xl mb-4">{missions[currentIndex].icon}</div>
          <motion.h1 
            className={`${theme.text} text-4xl md:text-6xl font-bold mb-2 font-['Fira_Code']`}
          >
            {missions[currentIndex].title}
          </motion.h1>
          <motion.h2 
            className={`${theme.text} text-2xl md:text-3xl font-semibold mb-6 font-['Fira_Code'] opacity-80`}
          >
            {missions[currentIndex].subtitle}
          </motion.h2>
          <motion.p 
            className={`${theme.text} text-xl md:text-2xl mb-8 opacity-80`}
          >
            {missions[currentIndex].description}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default MissionCarousel; 
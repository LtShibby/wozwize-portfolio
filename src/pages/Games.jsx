import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Games() {
  const { theme } = useTheme();

  const items = [
    {
      title: "WordWIZE",
      description: "A Wordle-inspired word guessing game",
      path: "/games/wordle"
    },
    {
      title: "WIZEsnake",
      description: "Classic snake game with AI mode",
      path: "/games/snake"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-5rem)] p-8"
    >
      <h2 className={`${theme.text} text-3xl md:text-4xl font-bold mb-8 text-center font-['Fira_Code']`}>
        &lt;Games /&gt;
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${theme.nav} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all`}
          >
            <h3 className={`${theme.text} text-2xl font-bold mb-3`}>{item.title}</h3>
            <p className={`${theme.text} opacity-80 mb-4`}>{item.description}</p>
            <Link 
              to={item.path}
              className={`${theme.button} px-6 py-2 rounded inline-block hover:opacity-90 transition-all`}
            >
              Play Now
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Games; 
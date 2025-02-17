import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import SubstackEmbed from '../components/SubstackEmbed';
import SubstackFeed from '../components/SubstackFeed';
import PageTransition from '../components/PageTransition';

export default function Newsletter() {
  const { theme } = useTheme();

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-5rem)] p-8">
        <h2 className={`${theme.text} text-3xl md:text-4xl font-bold mb-8 text-center font-['Fira_Code']`}>
          &lt;Newsletter /&gt;
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Introduction Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${theme.nav} p-6 rounded-lg shadow-lg h-fit md:col-span-2`}
          >
            <h3 className={`${theme.text} text-xl font-bold mb-4 font-['Fira_Code']`}>
              About WozWize
            </h3>
            <p className={`${theme.text} text-lg leading-relaxed`}>
              Welcome to WozWize, where I share insights on AI development, 
              software architecture, and emerging technologies. Subscribe to join 
              a community of developers staying ahead in the rapidly evolving 
              tech landscape.
            </p>
          </motion.div>
          
          {/* Subscription Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2"
          >
            <SubstackEmbed />
          </motion.div>

          {/* Latest Posts Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2"
          >
            <SubstackFeed />
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
} 
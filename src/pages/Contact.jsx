import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

function Contact() {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-5rem)] p-8"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className={`${theme.text} text-3xl md:text-4xl font-bold mb-8 text-center font-['Fira_Code']`}>
          &lt;Contact /&gt;
        </h2>
        <div className={`${theme.nav} p-8 rounded-lg shadow-lg`}>
          <form className="space-y-6">
            <div>
              <label className={`${theme.text} block mb-2`}>Name</label>
              <input
                type="text"
                className={`w-full p-3 rounded bg-opacity-20 ${theme.background} ${theme.text} border border-current`}
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className={`${theme.text} block mb-2`}>Email</label>
              <input
                type="email"
                className={`w-full p-3 rounded bg-opacity-20 ${theme.background} ${theme.text} border border-current`}
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className={`${theme.text} block mb-2`}>Message</label>
              <textarea
                className={`w-full p-3 rounded bg-opacity-20 ${theme.background} ${theme.text} border border-current h-32`}
                placeholder="Your message here..."
              />
            </div>
            <button
              type="submit"
              className={`${theme.button} w-full py-3 rounded hover:opacity-90 transition-all font-['Fira_Code']`}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact; 
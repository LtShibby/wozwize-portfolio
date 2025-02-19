import { useTheme } from '../../context/ThemeContext';
import PageTransition from '../PageTransition';
import Breadcrumb from '../Breadcrumb';
import { motion } from 'framer-motion';

function PageLayout({ children, title, subtitle, showBreadcrumb = true }) {
  const { theme } = useTheme();

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-5rem)] p-8 pt-20">
        <div className="max-w-6xl mx-auto">
          {showBreadcrumb && <Breadcrumb />}
          
          {(title || subtitle) && (
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              {title && (
                <h1 className={`${theme.text} text-3xl md:text-4xl font-bold mb-4 font-['Fira_Code']`}>
                  &lt;{title} /&gt;
                </h1>
              )}
              {subtitle && (
                <p className={`${theme.text} text-xl opacity-75`}>
                  {subtitle}
                </p>
              )}
            </motion.header>
          )}

          {children}
        </div>
      </div>
    </PageTransition>
  );
}

export default PageLayout; 
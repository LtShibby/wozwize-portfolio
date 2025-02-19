import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import { useTheme } from './context/ThemeContext';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import WordWize from './components/games/WordWize';
import WizeSnake from './components/games/WizeSnake';
import PageTransition from './components/PageTransition';
import Newsletter from './pages/Newsletter';
import ThemeIcon from './components/ThemeIcon';
import LearningAssistant from './pages/LearningAssistant';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function AppContent() {
  const { theme } = useTheme();
  const location = useLocation();
  
  return (
    <div className={`min-h-screen w-full ${theme.background} overflow-x-hidden`}>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition variant="scale"><Home /></PageTransition>} />
          <Route path="/projects" element={<PageTransition variant="slide"><Projects /></PageTransition>} />
          <Route path="/about" element={<PageTransition variant="fade"><About /></PageTransition>} />
          <Route path="/contact" element={<PageTransition variant="scale"><Contact /></PageTransition>} />
          <Route path="/newsletter" element={<PageTransition variant="scale"><Newsletter /></PageTransition>} />
          <Route path="/games/wordwize" element={<PageTransition variant="slide"><WordWize /></PageTransition>} />
          <Route path="/games/wizesnake" element={<PageTransition variant="slide"><WizeSnake /></PageTransition>} />
          <Route path="/learning-assistant" element={<PageTransition variant="slide"><LearningAssistant /></PageTransition>} />
          <Route path="/privacy-policy" element={<PageTransition variant="fade"><PrivacyPolicy /></PageTransition>} />
          <Route path="/terms-of-service" element={<PageTransition variant="fade"><TermsOfService /></PageTransition>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
      <ThemeSwitcher />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ThemeIcon />
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
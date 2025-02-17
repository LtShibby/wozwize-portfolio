import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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

function AppContent() {
  const { theme } = useTheme();
  const location = useLocation();
  
  return (
    <div className={`min-h-screen w-full ${theme.background}`}>
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
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
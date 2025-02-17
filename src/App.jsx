import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function AppContent() {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen w-full ${theme.background}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/games/wordwize" element={<WordWize />} />
        <Route path="/games/wizesnake" element={<WizeSnake />} />
      </Routes>
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
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/layout/Navigation';
import { ThemeProvider } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import { useTheme } from './context/ThemeContext';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import WordWize from './components/games/WordWize';
import WizeSnake from './components/games/WizeSnake';
import PageTransition from './components/PageTransition';
import Newsletter from './pages/Newsletter';
import ThemeIcon from './components/ThemeIcon';
import LearningAssistant from './pages/LearningAssistant';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import AboutUs from './pages/AboutUs';
import AboutMatt from './pages/AboutMatt';
import Services from './pages/Services';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';
import ServiceDetail from './pages/ServiceDetail';
import Footer from './components/layout/Footer';
import ConsultingService from './pages/services/ConsultingService';
import FreelanceService from './pages/services/FreelanceService';
import ClientCustomWebsiteQuestionnaire from './pages/ClientCustomWebsiteQuestionnaire';
import MattProfile from './pages/MattProfile';

function AppContent() {
  const { theme } = useTheme();
  const location = useLocation();
  
  return (
    <div className={`min-h-screen w-full ${theme.background} overflow-x-hidden flex flex-col`}>
      <Navigation />
      <main className="flex-grow">
      <AnimatePresence mode="wait">
        <Routes location={location}>
          <Route path="/" element={<PageTransition variant="scale"><Home /></PageTransition>} />
          <Route path="/projects" element={<PageTransition variant="slide"><Projects /></PageTransition>} />
          <Route path="/contact" element={<PageTransition variant="scale"><Contact /></PageTransition>} />
          <Route path="/newsletter" element={<PageTransition variant="scale"><Newsletter /></PageTransition>} />
          <Route path="/games/wordwize" element={<PageTransition variant="slide"><WordWize /></PageTransition>} />
          <Route path="/games/wizesnake" element={<PageTransition variant="slide"><WizeSnake /></PageTransition>} />
          <Route path="/learning-assistant" element={<PageTransition variant="slide"><LearningAssistant /></PageTransition>} />
          <Route path="/privacy-policy" element={<PageTransition variant="fade"><PrivacyPolicy /></PageTransition>} />
          <Route path="/terms-of-service" element={<PageTransition variant="fade"><TermsOfService /></PageTransition>} />
          <Route path="/about-us" element={<PageTransition variant="fade"><AboutUs /></PageTransition>} />
          <Route path="/questionnaire/custom-website" element={<PageTransition variant="fade"><ClientCustomWebsiteQuestionnaire /></PageTransition>} />
          <Route
            path="/about-matt"
            element={
              <AnimatePresence mode="wait">
                <PageTransition variant="fade" key={location.pathname}>
                  <AboutMatt />
                </PageTransition>
              </AnimatePresence>
            }
          />
          <Route path="/services" element={<PageTransition variant="slide"><Services /></PageTransition>} />
          <Route path="/blog" element={<PageTransition variant="slide"><Blog /></PageTransition>} />
          <Route path="/blog/:slug" element={<PageTransition variant="fade"><BlogPostPage /></PageTransition>} />
          <Route path="/services/:serviceId" element={<PageTransition variant="fade"><ServiceDetail /></PageTransition>} />
          <Route path="/services/consulting" element={<PageTransition variant="fade"><ConsultingService /></PageTransition>} />
          <Route path="/services/freelance" element={<PageTransition variant="fade"><FreelanceService /></PageTransition>} />
          <Route path="/mjw" element={<MattProfile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </AnimatePresence>
      </main>
      <Footer />
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
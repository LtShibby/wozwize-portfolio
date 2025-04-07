import { useTheme } from '../context/ThemeContext';
import PageTransition from '../components/PageTransition';
import HeroSection from '../components/HeroSection';
import FeaturedProject from '../components/FeaturedProject';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

function Home() {
  const { theme } = useTheme();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 5000); // Show popup after 5 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);


  const featuredProjects = [
    {
      title: "Media Unmask",
      description: "AI-powered media analysis platform providing transparency and insights into news and social media content.",
      technologies: [
        "AI", 
        "Machine Learning", 
        "Python", 
        "FastAPI", 
        "Next.js", 
        "Vercel", 
        "Hugging Face",
        "NLP"
      ],
      image: "/images/media-unmask.jpg",
      link: "https://mediaunmask.com",
      status: "Beta",
      launchDate: "2024-02-14",
      category: "AI & Machine Learning",
      isFeatured: true
    },
    {
      "title": "ProfessionHall",
      "description": "A resume-free hiring platform connecting professionals with companies through real projects, portfolios, and work samples. Features AI-powered skill mapping and smart matching for better talent discovery.",
      "technologies": [
        "Next.js",
        "TypeScript",
        "FastAPI",
        "PostgreSQL",
        "Supabase",
        "Tailwind CSS",
        "OAuth2"
      ],
      "image": "/images/professionHallBanner.jpg",
      "link": "https://professionhall.com",
      "status": "Alpha",
      "category": "Professional Network"
    },
    {
      "title": "ArchWize",
      "description": "AI-powered SaaS application that generates diagrams and architecture flowcharts from text descriptions using natural language processing and the Mistral-7B model.",
      "technologies": [
        "AI",
        "Machine Learning",
        "Python",
        "FastAPI",
        "Next.js",
        "React",
        "Mermaid.js",
        "Hugging Face",
        "NLP",
        "Vercel"
      ],
      "image": "/images/archwize.jpg",
      "link": "https://archwize.com",
      "status": "Alpha",
      "category": "AI & Development Tools"
    }
  ];

  const highlightedServices = [
    {
      title: "Fractional CTO",
      description: "Tech Strategy without the full-time burn rate.",
      icon: "📈",
      link: "/services/software"
    },
    {
      title: "Software Solutions",
      description: "From MVPs to scale-ready platforms.",
      icon: "🛠️",
      link: "/services/software"
    },
    {
      title: "AI & Automation",
      description: "Build smarter systems, not just fancier interfaces.",
      icon: "🤖",
      link: "/services/ai-development"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-5rem)] p-8 pt-12">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Hero Section or How We Work Section */}
          <HeroSection />

          {/* Core Services */}
          <section>
            <h2 className={`${theme.text} text-3xl font-bold mb-8 text-center font-['Fira_Code']`}>
              What We Do
            </h2>
            <div className={`grid md:grid-cols-3 gap-6`}>
              {highlightedServices.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </section>

          {/* Featured Projects */}
          <section>
            <h2 className={`${theme.text} text-3xl font-bold mb-8 text-center font-['Fira_Code']`}>
              Featured Projects
            </h2>
            <div className="space-y-6">
              {featuredProjects.map((project, index) => (
                <FeaturedProject key={index} project={project} index={index} />
              ))}
            </div>
          </section>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`${theme.nav} ${theme.border} border p-8 md:p-16 rounded-lg text-center`}
          >
            <h2 className={`${theme.text} text-2xl font-bold mb-4`}>Stay Updated</h2>
            <p className={`${theme.text} mb-6`}>
              Subscribe to our newsletter for the latest insights in AI and software development.
            </p>
            <Link 
              to="/newsletter"
              className={`${theme.button} px-6 py-3 rounded inline-block hover:opacity-90 transition-all`}
            >
              Subscribe to Newsletter
            </Link>
          </motion.div>

          {/* Popup Modal */}
          <AnimatePresence>
            {isPopupOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                onClick={() => setIsPopupOpen(false)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className={`${theme.nav}  ${theme.borderAlt} border p-8 rounded-lg shadow-lg text-center max-w-lg w-full relative`}
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    onClick={() => setIsPopupOpen(false)}
                    className="text-white absolute top-4 right-4 text-2xl hover:opacity-70 transition-opacity"
                  >
                    ×
                  </button>
                  <h2 className={`${theme.text} text-2xl font-bold mb-4 font-['Fira_Code']`}>
                    Looking for a Custom Website?
                  </h2>
                  <p className={`${theme.text} mb-6 text-lg`}>
                    Take the first step towards your dream website! Fill out our questionnaire for a <span className="font-semibold">free consultation</span> to get the process started.
                  </p>
                  <Link 
                    to="/questionnaire/custom-website"
                    className={`${theme.buttonAlt} px-8 py-4 rounded-lg inline-block hover:opacity-90 transition-all text-lg font-semibold`}
                  >
                    Start Your Website Journey →
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  );
}

export default Home; 
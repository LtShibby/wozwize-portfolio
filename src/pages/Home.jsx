import { useTheme } from '../context/ThemeContext';
import PageTransition from '../components/PageTransition';
import HeroSection from '../components/HeroSection';
import FeaturedProject from '../components/FeaturedProject';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';

function Home() {
  const { theme } = useTheme();

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
        "AI",
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
      title: "AI Development",
      description: "Custom AI solutions and integrations for your business needs.",
      icon: "🤖",
      link: "/services/ai-development"
    },
    {
      title: "Tech Mentorship",
      description: "Expert guidance for developers and teams.",
      icon: "👥",
      link: "/services/coaching"
    },
    {
      title: "Software Solutions",
      description: "End-to-end development of scalable applications.",
      icon: "💻",
      link: "/services/software"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-5rem)] p-8 pt-12">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Hero Section */}
          <HeroSection />

          {/* Core Services */}
          <section>
            <h2 className={`${theme.text} text-3xl font-bold mb-8 text-center font-['Fira_Code']`}>
              What We Do
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
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

          <section className="relative">
            <div className={`${theme.nav} p-8 rounded-lg shadow-lg text-center transform hover:scale-[1.02] transition-transform duration-300`}>
              <h2 className={`${theme.text} text-2xl font-bold mb-4 font-['Fira_Code']`}>
                Looking for a Custom Website?
              </h2>
              <p className={`${theme.text} mb-6 text-lg`}>
                Take the first step towards your dream website! Fill out our questionnaire for a <span className="font-semibold">free consultation</span> to get the process started.
              </p>
              <Link 
                to="/questionnaire/custom-website"
                className={`${theme.button} px-8 py-4 rounded-lg inline-block hover:opacity-90 transition-all text-lg font-semibold`}
              >
                Start Your Website Journey →
              </Link>
            </div>
          </section>

          {/* Newsletter Section */}
          <section>
            <div className={`${theme.nav} p-8 rounded-lg shadow-lg text-center`}>
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
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}

export default Home; 
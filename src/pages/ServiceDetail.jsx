import { useParams, Navigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';

const serviceDetails = {
  'ai-development': {
    title: "AI Development",
    subtitle: "Custom AI Solutions for Your Business",
    icon: "🤖",
    description: "We develop cutting-edge AI solutions that solve real business problems.",
    features: [
      "Custom LLM Integration",
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "AI-Powered Analytics"
    ],
    process: [
      {
        title: "Discovery",
        description: "Understanding your needs and objectives"
      },
      {
        title: "Design",
        description: "Creating the optimal AI architecture"
      },
      {
        title: "Development",
        description: "Building and training the AI solution"
      },
      {
        title: "Deployment",
        description: "Implementing and monitoring the system"
      }
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "AWS"]
  },
  'coaching': {
    title: "Tech Coaching",
    subtitle: "Expert Guidance for Developers",
    icon: "👥",
    description: "Personalized mentorship to help you master modern technologies.",
    features: [
      "1-on-1 Coaching Sessions",
      "Code Reviews",
      "Architecture Planning",
      "Best Practices Training",
      "Career Development"
    ],
    process: [
      {
        title: "Assessment",
        description: "Evaluating current skills and goals"
      },
      {
        title: "Planning",
        description: "Creating a customized learning path"
      },
      {
        title: "Implementation",
        description: "Regular coaching sessions and exercises"
      },
      {
        title: "Growth",
        description: "Measuring progress and adjusting plans"
      }
    ],
    technologies: ["React", "Node.js", "Python", "AWS", "System Design"]
  },
  'software': {
    title: "Software Solutions",
    subtitle: "Custom Software Development",
    icon: "💻",
    description: "End-to-end development of scalable, modern applications tailored to your business needs.",
    features: [
      "Full-Stack Development",
      "Cloud Architecture",
      "API Development",
      "Database Design",
      "Performance Optimization"
    ],
    process: [
      {
        title: "Requirements",
        description: "Gathering detailed requirements and specifications"
      },
      {
        title: "Architecture",
        description: "Designing scalable system architecture"
      },
      {
        title: "Development",
        description: "Agile development with regular updates"
      },
      {
        title: "Testing & Launch",
        description: "Thorough testing and deployment"
      }
    ],
    technologies: ["React", "Node.js", "AWS", "MongoDB", "Docker"]
  },
  'media-analysis': {
    title: "Media Analysis",
    subtitle: "AI-Powered Content Analysis",
    icon: "📊",
    description: "Advanced media analysis tools using AI to provide deeper insights and transparency.",
    features: [
      "Content Verification",
      "Sentiment Analysis",
      "Trend Detection",
      "Source Credibility",
      "Real-time Monitoring"
    ],
    process: [
      {
        title: "Data Collection",
        description: "Gathering and organizing media content"
      },
      {
        title: "Analysis",
        description: "AI-powered content analysis"
      },
      {
        title: "Insights",
        description: "Generating actionable insights"
      },
      {
        title: "Reporting",
        description: "Detailed reports and recommendations"
      }
    ],
    technologies: ["NLP", "Machine Learning", "Big Data", "Python", "Cloud Computing"]
  },
  'cto': {
    title: "Fractional CTO",
    subtitle: "Executive Technology Leadership on Demand",
    icon: "👨‍💼",
    description: "Access experienced technology leadership without the full-time commitment. Our Fractional CTO service provides strategic guidance, technical oversight, and hands-on expertise to help your business scale effectively.",
    features: [
      "Strategic Technology Planning",
      "Technical Team Leadership",
      "Architecture & Infrastructure Design",
      "Technology Stack Selection",
      "Vendor & Partner Management",
      "Technical Due Diligence",
      "Innovation Roadmap Development",
      "Cost Optimization Strategies"
    ],
    process: [
      {
        title: "Assessment",
        description: "Comprehensive evaluation of your current technology landscape and business goals"
      },
      {
        title: "Strategy Development",
        description: "Creating a tailored technology roadmap aligned with business objectives"
      },
      {
        title: "Implementation",
        description: "Guiding execution while maintaining flexibility for evolving needs"
      },
      {
        title: "Ongoing Support",
        description: "Regular reviews and adjustments to ensure continued alignment with business goals"
      }
    ],
    technologies: ["Strategic Planning", "Team Leadership", "Architecture Design", "Cloud Solutions", "DevOps", "Security", "Scalability"]
  },
  // Add more services...
};

function ServiceDetail() {
  const { theme } = useTheme();
  const { serviceId } = useParams();
  
  const service = serviceDetails[serviceId];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <PageLayout
      title={service.title}
      subtitle={service.subtitle}
    >
      <div className="space-y-12">
        {/* Overview */}
        <section className={`${theme.nav} ${theme.border} border p-8 rounded-lg shadow-lg ${theme.border} text-center`}>
          <h2 className={`${theme.text} text-2xl font-bold mb-4`}>Overview</h2>
          <p className={`${theme.text} text-lg leading-relaxed`}>
            {service.description}
          </p>
        </section>

        {/* Features */}
        <section className={`${theme.nav} ${theme.border} border p-8 rounded-lg shadow-lg ${theme.border} text-center`}>
          <h2 className={`${theme.text} text-2xl font-bold mb-6`}>Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <div 
                key={index}
                className={`${theme.text} flex items-center gap-2`}
              >
                <span className="text-green-500 text-xl">✓</span>
                {feature}
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className={`${theme.nav} ${theme.border} border p-8 rounded-lg shadow-lg border-2`}>
          <h2 className={`${theme.text} text-2xl font-bold mb-6 text-center`}>Our Process</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className={`${theme.nav} ${theme.border} border p-6 rounded-lg shadow-lg border-2`}
              >
                <h3 className={`${theme.text} text-xl font-bold mb-2`}>
                  {index + 1}. {step.title}
                </h3>
                <p className={`${theme.text} opacity-75`}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className={`${theme.nav} ${theme.border} border p-8 rounded-lg shadow-lg border-2 text-center`}>
          <h2 className={`${theme.text} text-2xl font-bold mb-6`}>Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {service.technologies.map((tech, index) => (
              <span
                key={index}
                className={`${theme.text} ${theme.border} border px-4 py-2 rounded-full border-2 text-center`}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Link
            to="/contact"
            className={`${theme.button} px-8 py-3 rounded inline-block hover:opacity-90 transition-all`}
          >
            Get Started
          </Link>
        </section>
      </div>
    </PageLayout>
  );
}

export default ServiceDetail; 
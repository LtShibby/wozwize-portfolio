import { useTheme } from '../context/ThemeContext';
import PageTransition from '../components/PageTransition';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';

function Services() {
  const { theme } = useTheme();

  const services = [
    {
      title: "Fractional CTO",
      description: "Tech Strategy without the full-time burn rate.",
      icon: "📈",
      link: "/services/cto"
    },
    {
      title: "Custom Software Solutions",
      description: "End-to-end development of scalable applications and systems.",
      icon: "💻",
      link: "/services/software"
    },
    {
      title: "AI & Automation",
      description: "Build smarter systems, not just fancier interfaces.",
      icon: "🤖",
      link: "/services/ai-development"
    },
    {
      title: "Tech Coaching & Mentorship",
      description: "Personalized guidance for developers and teams in modern technologies.",
      icon: "👥",
      link: "/services/coaching"
    },
    {
      title: "Enterprise Consulting",
      description: "Strategic technology guidance for businesses and organizations.",
      icon: "🎯",
      link: "/services/consulting"
    },
    {
      title: "Freelance Engineering",
      description: "Expert software development services for specific project needs.",
      icon: "🛠️",
      link: "/services/freelance"
    }
  ];

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in AI/ML, React, Node.js, Python, and cloud platforms including AWS and GCP."
    },
    {
      question: "How do you handle project pricing?",
      answer: "Each project is unique. We provide custom quotes based on scope, complexity, and timeline."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we provide maintenance and support packages tailored to your needs."
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-5rem)] p-8 pt-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Services Header */}
          <section>
            <h2 className={`${theme.text} text-3xl md:text-4xl font-bold mb-8 text-center font-['Fira_Code']`}>
              Our Services
            </h2>
            <div className={`${theme.nav} p-6 rounded-lg shadow-lg text-center mb-12`}>
              <p className={`${theme.text} text-lg leading-relaxed`}>
                Comprehensive technology solutions tailored to your needs. 
                From AI development to technical mentorship, we're here to help you succeed.
              </p>
            </div>
          </section>

          {/* Services Grid */}
          <section>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <h3 className={`${theme.text} text-center text-2xl font-bold mb-6 font-['Fira_Code']`}>
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className={`${theme.nav} ${theme.border} border p-6 rounded-lg shadow-lg`}>
                  <h4 className={`${theme.text} font-bold mb-2`}>{faq.question}</h4>
                  <p className={`${theme.text} opacity-75`}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section>
            <div className={`${theme.nav} ${theme.borderAlt} border p-8 rounded-lg shadow-lg text-center`}>
              <h3 className={`${theme.text} text-2xl font-bold mb-4`}>Ready to Get Started?</h3>
              <p className={`${theme.text} mb-6`}>
                Book a consultation to discuss your project needs and how we can help.
              </p>
              <Link 
                to="/contact"
                className={`${theme.buttonAlt} px-6 py-3 rounded inline-block hover:opacity-90 transition-all`}
              >
                Schedule Consultation
              </Link>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}

export default Services; 
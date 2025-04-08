import { useTheme } from '../context/ThemeContext';
import PageTransition from '../components/layout/PageTransition.jsx';
import ContactForm from '../components/forms/ContactForm.jsx';
import { motion } from 'framer-motion';

function Contact() {
  const { theme } = useTheme();

  const contactMethods = [
    {
      title: "General Inquiries",
      description: "Questions about our services or company",
      icon: "📧",
      action: "Fill out the contact form"
    },
    {
      title: "Consulting",
      description: "Discuss your project needs",
      icon: "💼",
      action: "Schedule a consultation"
    },
    {
      title: "Press & Media",
      description: "Media inquiries and interview requests",
      icon: "📰",
      action: "Get in touch"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-5rem)] p-8 pt-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <section>
            <h2 className={`${theme.text} text-3xl md:text-4xl font-bold mb-8 text-center font-['Fira_Code']`}>
              Contact Us
            </h2>
            <div className={`${theme.nav} p-6 rounded-lg shadow-lg text-center mb-12`}>
              <p className={`${theme.text} text-lg leading-relaxed`}>
                Have a question or project in mind? We'd love to hear from you. 
                Choose the most appropriate contact method below.
              </p>
            </div>
          </section>

          {/* Contact Methods */}
          <section className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className={`${theme.nav} p-6 rounded-lg shadow-lg text-center`}
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className={`${theme.text} text-xl font-bold mb-2`}>{method.title}</h3>
                <p className={`${theme.text} opacity-75 mb-4`}>{method.description}</p>
                <p className={`${theme.text} font-medium`}>{method.action}</p>
              </motion.div>
            ))}
          </section>

          {/* Contact Form */}
          <section className="max-w-2xl mx-auto">
            <div className={`${theme.nav} p-8 rounded-lg shadow-lg`}>
              <h3 className={`${theme.text} text-2xl font-bold mb-6 text-center`}>Get in Touch</h3>
              <ContactForm />
            </div>
          </section>

          {/* Additional Info */}
          <section className="text-center">
            <p className={`${theme.text} opacity-75`}>
              Based in New York, serving clients worldwide.
              <br />
              Response time: Within 24-48 hours
            </p>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}

export default Contact; 
import { useTheme } from '../context/ThemeContext';
import PageTransition from '../components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function AboutMatt() {
  const { theme } = useTheme();
  const [showProjects, setShowProjects] = useState(false);

  // Bio section content from About.jsx
  const bio = {
    summary: `With over a decade in software development and AI, I specialize in building AI-driven solutions, 
    scalable cloud architectures, and LLM-powered applications. I've delivered impactful solutions across both 
    the public and private sectors, driving innovation, efficiency, and value. As the founder of WozWize, 
    I blend technical expertise with a commitment to transparency and ethical AI. My mission is to bridge 
    the gap between cutting-edge technology and real-world business solutions.`
  };

  // Education section content
  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "University at Buffalo",
      location: "NY"
    }
  ];

  const publications = [
    {
      title: "WozWize Newsletter",
      type: "Technical Newsletter (Substack)",
      period: "October 2023 – Present",
      link: "https://wozwize.substack.com",
      description: [
        "Creator of a technical newsletter focusing on AI, software engineering, and emerging technologies.",
        "Published comprehensive guides on GPT-based systems and AI-powered agents."
      ]
    },
    {
      title: "Delving into Design Patterns",
      subtitle: "A Developer's Cheat Sheet to Scalable Software Solutions",
      type: "Book (Publication in process)",
      description: [
        "A practical, hands-on guide to software design patterns with real-world examples for scalable, maintainable systems."
      ]
    }
  ];

  const skillSections = {
    aiMl: {
      title: "AI & Machine Learning",
      items: [
        "Large Language Models (LLMs)",
        "Transformers (HuggingFace)",
        "Prompt Engineering",
        "AI Agents",
        "NLP Libraries (spaCy, NLTK)",
        "TensorFlow",
        "PyTorch",
        "RAG (Retrieval Augmented Generation)",
        "Vector Databases",
        "Fine-tuning LLMs",
        "Embeddings",
        "Computer Vision",
        "MLOps",
        "Model Deployment"
      ]
    },
    systemDesign: {
      title: "System Design",
      items: [
        "Distributed Systems",
        "System Architecture",
        "API Design",
        "Database Design",
        "Scalability Patterns",
        "High Availability",
        "Event-Driven Architecture",
        "Message Queues"
      ]
    },
    dataEngineering: {
      title: "Data Engineering",
      items: [
        "ETL Pipelines",
        "Data Warehousing",
        "Data Lakes",
        "Stream Processing",
        "Data Modeling",
        "Big Data Technologies",
        "Data Quality",
        "Data Governance"
      ]
    },
    languages: {
      title: "Programming Languages",
      items: [
        "Java",
        "Python",
        "TypeScript",
        "C/C++/C#",
        "JavaScript",
        "SQL",
        "Bash",
        "XML",
        "YAML"
      ]
    },
    webFrontend: {
      title: "Web Frontend",
      items: [
        "Angular",
        "React.js",
        "Vue.js",
        "Bootstrap",
        "HTML5",
        "CSS3",
        "SASS",
        "Responsive Design"
      ]
    },
    frameworks: {
      title: "Frameworks",
      items: [
        "Spring",
        "Spring MVC",
        "Apache Struts MVC",
        "Web Services (SOAP/REST)",
        "Ionic",
        "Flask"
      ]
    },
    tools: {
      title: "Development Tools",
      items: [
        "IntelliJ",
        "VS Code",
        "Eclipse",
        "Git/GitHub/GitLab",
        "Jenkins",
        "Maven/Gradle",
        "Docker",
        "Kubernetes",
        "AWS (Lambda, S3, CloudWatch)",
        "GCP",
        "Postman",
        "Splunk"
      ]
    },
    databases: {
      title: "Databases",
      items: [
        "Oracle",
        "MySQL",
        "PostgreSQL",
        "AWS Redshift",
        "BigQuery",
        "DBeaver"
      ]
    },
    projectManagement: {
      title: "Project Management",
      items: [
        "Certified Agile Practitioner",
        "Sprint Planning",
        "Jira/Confluence",
        "Full SDLC Oversight",
        "GitLab Management"
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const FloatingDecoration = ({ size, color, delay, left, top }) => (
    <motion.div
      className={`absolute rounded-full blur-2xl opacity-20 ${size}`}
      style={{ 
        background: color,
        left: left,
        top: top
      }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.2, 0.3, 0.2]
      }}
      transition={{
        duration: 3,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );

  const SkillCard = ({ title, items }) => (
    <motion.div
      whileHover={{ scale: 1.02, translateY: -5 }}
      whileTap={{ scale: 0.98 }}
      className={`${theme.nav} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all relative overflow-hidden`}
    >
      <div className="absolute -right-8 -top-8 w-24 h-24 bg-current opacity-5 rounded-full blur-xl" />
      <h3 className={`${theme.text} text-xl font-bold mb-4 font-['Fira_Code'] flex items-center gap-2`}>
        <span className="text-sm opacity-50">&lt;</span>
        {title}
        <span className="text-sm opacity-50">/&gt;</span>
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`${theme.text} text-sm px-3 py-1.5 rounded-full border border-current 
              opacity-75 hover:opacity-100 transition-all flex items-center gap-2`}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );

  // Update the projects data with the direct link
  const projects = [
    {
      title: "GPT Suite",
      description: "A comprehensive suite of AI-powered tools for developers and businesses, featuring custom LLM integrations and specialized workflows.",
      technologies: ["OpenAI", "React", "Node.js", "MongoDB"],
      image: "/images/gpt-suite.jpg",
      link: "/projects/gpt-suite"
    },
    {
      title: "Media Unmask",
      description: "AI-powered media analysis platform providing transparency and insights into news and social media content.",
      technologies: ["AI", "Python", "React", "AWS"],
      image: "/images/media-unmask.jpg",
      link: "https://mediaunmask.com",  // Updated to direct external link
      external: true  // Add flag to indicate external link
    }
  ];

  return (
    <PageTransition>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-[calc(100vh-5rem)] p-8 relative"
      >
        <FloatingDecoration size="w-64 h-64" color="#3B82F6" delay={0} left="5%" top="10%" />
        <FloatingDecoration size="w-72 h-72" color="#8B5CF6" delay={1} left="60%" top="30%" />
        <FloatingDecoration size="w-56 h-56" color="#EC4899" delay={0.5} left="80%" top="60%" />

        <div className="relative">
          <h2 className={`${theme.text} text-3xl md:text-4xl font-bold mb-8 text-center font-['Fira_Code']`}>
            About Matt 
          </h2>

          <div className="max-w-4xl mx-auto space-y-12">
            <motion.section variants={sectionVariants}>
              <div className={`${theme.nav} p-6 rounded-lg shadow-lg`}>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden">
                    <img 
                      src="/images/matt-headshot.jpg" 
                      alt="Matt Wozniak - Founder of WozWize"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 md:max-w-[75%]">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className={`${theme.text} text-xl font-bold mb-2`}>Matt Wozniak</h4>
                        <p className={`${theme.text} opacity-75 mb-4`}>Founder & Lead Engineer</p>
                      </div>
                      <button
                        onClick={() => setShowProjects(true)}
                        className={`${theme.button} px-4 py-2 rounded hover:opacity-90 transition-all`}
                      >
                        View Projects
                      </button>
                    </div>
                    <p className={`${theme.text} mb-4 pr-4`}>
                      {bio.summary}
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section variants={sectionVariants}>
              <h3 className={`${theme.text} text-2xl font-bold mb-6 font-['Fira_Code'] flex items-center gap-2`}>
                <span className="text-xl opacity-50">&lt;</span>
                Education
                <span className="text-xl opacity-50">/&gt;</span>
              </h3>
              <div className={`${theme.nav} p-6 rounded-lg shadow-lg`}>
                {education.map((edu, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <h4 className={`${theme.text} font-bold text-lg`}>{edu.degree}</h4>
                    <div className={`${theme.text} opacity-75`}>
                      {edu.institution}, {edu.location}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section variants={sectionVariants}>
              <h3 className={`${theme.text} text-2xl font-bold mb-6 font-['Fira_Code'] flex items-center gap-2`}>
                <span className="text-xl opacity-50">&lt;</span>
                Writing and Publications
                <span className="text-xl opacity-50">/&gt;</span>
              </h3>
              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <div key={index} className={`${theme.nav} p-6 rounded-lg shadow-lg`}>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <h4 className={`${theme.text} font-bold text-lg`}>
                          {pub.link ? (
                            <a 
                              href={pub.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:opacity-80 transition-opacity flex items-center gap-2"
                            >
                              {pub.title}
                              <span className="text-sm">↗</span>
                            </a>
                          ) : (
                            <>
                              {pub.title}
                              {pub.subtitle && (
                                <div className={`${theme.text} font-normal text-base mt-1`}>
                                  {pub.subtitle}
                                </div>
                              )}
                            </>
                          )}
                        </h4>
                        {pub.period && (
                          <span className={`${theme.text} opacity-75 text-sm`}>
                            {pub.period}
                          </span>
                        )}
                      </div>
                      {pub.type && (
                        <div className={`${theme.text} opacity-75 italic`}>
                          {pub.type}
                        </div>
                      )}
                      <ul className={`${theme.text} mt-2 space-y-2`}>
                        {pub.description.map((point, i) => (
                          <li key={i} className="flex items-baseline gap-2">
                            <span>•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section variants={sectionVariants}>
              <h3 className={`${theme.text} text-2xl font-bold mb-6 font-['Fira_Code'] flex items-center gap-2`}>
                <span className="text-xl opacity-50">&lt;</span>
                Technical Skills
                <span className="text-xl opacity-50">/&gt;</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skillSections).map(([key, section]) => (
                  <SkillCard
                    key={key}
                    title={section.title}
                    items={section.items}
                  />
                ))}
              </div>
            </motion.section>

            <motion.section variants={sectionVariants}>
              <h3 className={`${theme.text} text-2xl font-bold mb-6 font-['Fira_Code']`}>Philosophy</h3>
              <div className={`${theme.nav} p-6 rounded-lg shadow-lg`}>
                <h4 className={`${theme.text} text-xl font-bold mb-4`}>
                  Technology should solve real problems, not create new ones.
                </h4>
                <p className={`${theme.text} text-lg leading-relaxed mb-4`}>
                  I believe in building solutions that are practical, scalable, and actually make a difference—whether 
                  it's improving business efficiency, enhancing user experiences, or tackling complex technical challenges.
                </p>
                <p className={`${theme.text} text-lg leading-relaxed`}>
                  Through WozWize, I focus on delivering solutions that are not just innovative, but also reliable, 
                  ethical, and impactful. The goal isn't just to build cool tech—it's to create tools that drive 
                  real value, whether in the public or private sector. Good solutions stand the test of time, and 
                  I'm committed to building ones that do.
                </p>
              </div>
            </motion.section>


            <motion.section variants={sectionVariants}>
              <div className={`${theme.nav} p-6 rounded-lg shadow-lg text-center`}>
                <h3 className={`${theme.text} text-2xl font-bold mb-4`}>Work with Matt</h3>
                <p className={`${theme.text} mb-6`}>
                  Interested in consulting, mentorship, or collaboration opportunities?
                </p>
                <Link 
                  to="/contact" 
                  className={`${theme.button} px-6 py-3 rounded inline-block hover:opacity-90 transition-all`}
                >
                  Get in Touch
                </Link>
              </div>
            </motion.section>
          </div>
        </div>

        {/* Add Projects Modal */}
        <AnimatePresence>
          {showProjects && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => setShowProjects(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className={`fixed inset-x-4 top-20 bottom-20 md:inset-x-auto md:left-1/2 md:right-20 
                  ${theme.nav} rounded-lg shadow-xl z-50 overflow-y-auto`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className={`${theme.text} text-2xl font-bold font-['Fira_Code']`}>Featured Projects</h3>
                    <button
                      onClick={() => setShowProjects(false)}
                      className={`${theme.text} text-2xl hover:opacity-70`}
                    >
                      ×
                    </button>
                  </div>
                  <div className="space-y-6">
                    {projects.map((project, index) => (
                      <FeaturedProject key={index} project={project} index={index} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </PageTransition>
  );
}

export default AboutMatt; 
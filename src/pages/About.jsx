import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

function About() {
  const { theme } = useTheme();

  // Bio section content
  const bio = {
    summary: `Senior Software Engineer specializing in AI/ML development, full-stack engineering, 
    and technical leadership. Expert in developing LLM-powered applications, scalable cloud architectures, 
    and AI-driven solutions. Proven track record of leading agile teams, optimizing system performance, 
    and delivering enterprise-grade applications. Passionate about emerging technologies, with expertise 
    in React, Python, Java, and cloud platforms including AWS and GCP.`
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

  // Animation variants
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

  return (
    <PageTransition>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-[calc(100vh-5rem)] p-8 relative"
      >
        {/* Decorative Elements */}
        <FloatingDecoration size="w-64 h-64" color="#3B82F6" delay={0} left="5%" top="10%" />
        <FloatingDecoration size="w-72 h-72" color="#8B5CF6" delay={1} left="60%" top="30%" />
        <FloatingDecoration size="w-56 h-56" color="#EC4899" delay={0.5} left="80%" top="60%" />

        <div className="relative">
          <h2 className={`${theme.text} text-3xl md:text-4xl font-bold mb-8 text-center font-['Fira_Code']`}>
            &lt;About /&gt;
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Bio Section */}
            <motion.div variants={sectionVariants}>
              <h3 className={`${theme.text} text-2xl font-bold mb-6 font-['Fira_Code'] flex items-center gap-2`}>
                <span className="text-xl opacity-50">&lt;</span>
                Bio
                <span className="text-xl opacity-50">/&gt;</span>
              </h3>
              <motion.div 
                variants={sectionVariants}
                className={`${theme.nav} p-6 rounded-lg shadow-lg relative overflow-hidden`}
              >
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-current opacity-5 rounded-full blur-xl" />
                <p className={`${theme.text} leading-relaxed text-lg relative z-10`}>
                  {bio.summary}
                </p>
              </motion.div>
            </motion.div>

            {/* Education Section */}
            <motion.div variants={sectionVariants}>
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
            </motion.div>

            {/* Writing and Publications Section */}
            <motion.div variants={sectionVariants}>
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
            </motion.div>

            {/* Technical Skills Section */}
            <motion.div variants={sectionVariants}>
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
            </motion.div>
          </div>
        </div>
      </motion.div>
    </PageTransition>
  );
}

export default About; 
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

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
        "PyTorch"
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

  const SkillCard = ({ title, items }) => (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`${theme.nav} p-6 rounded-lg shadow-lg`}
    >
      <h3 className={`${theme.text} text-xl font-bold mb-4 font-['Fira_Code'] flex items-center gap-2`}>
        <span className="text-sm opacity-50">&lt;</span>
        {title}
        <span className="text-sm opacity-50">/&gt;</span>
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, index) => (
          <span
            key={index}
            className={`${theme.text} text-sm px-3 py-1.5 rounded-full border border-current 
              opacity-75 hover:opacity-100 transition-all flex items-center gap-2 hover:scale-105`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-5rem)] p-8"
    >
      <h2 className={`${theme.text} text-3xl md:text-4xl font-bold mb-8 text-center font-['Fira_Code']`}>
        &lt;About /&gt;
      </h2>
      
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Bio Section */}
        <div>
          <h3 className={`${theme.text} text-2xl font-bold mb-6 font-['Fira_Code'] flex items-center gap-2`}>
            <span className="text-xl opacity-50">&lt;</span>
            Bio
            <span className="text-xl opacity-50">/&gt;</span>
          </h3>
          <div className={`${theme.nav} p-6 rounded-lg shadow-lg`}>
            <p className={`${theme.text} leading-relaxed text-lg`}>
              {bio.summary}
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div>
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
        </div>

        {/* Writing and Publications Section */}
        <div>
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
        </div>

        {/* Technical Skills Section */}
        <div>
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
        </div>
      </div>
    </motion.div>
  );
}

export default About; 
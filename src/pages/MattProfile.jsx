import { useTheme } from '../context/ThemeContext';
import PageTransition from '../components/PageTransition';
import { FaGithub, FaLinkedin, FaCheckCircle } from 'react-icons/fa';
import InteractiveSkills from '../components/InteractiveSkills';

function MattProfile() {
  const { theme } = useTheme();

  const projects = [
    {
      title: "AI-Powered Census Data Search",
      client: "Confidential Client, Gov Sector",
      details: [
        "Led development of ML-powered search interface processing 10M+ records",
        "Implemented real-time filtering with custom React hooks and context",
        "Reduced query response time by 80% through strategic caching",
        "Deployed via Azure Static Web Apps with CI/CD pipeline"
      ]
    },
    {
      title: "Debt Paydown Simulation Engine",
      client: "Payroll SaaS Platform",
      details: [
        "Architected real-time debt optimization calculator using React/TypeScript",
        "Built RESTful API layer with Node.js/Express handling 100K+ daily requests",
        "Implemented WebSocket updates for live scenario modeling",
        "Reduced processing time from 3s to 200ms through algorithm optimization"
      ]
    },
    {
      title: "AI-Powered Lead Scoring Platform",
      client: "The Pinnacle Creatives",
      details: [
        "Developed ML model integration layer for real-time lead scoring",
        "Created dynamic dashboard with D3.js for score visualization",
        "Implemented A/B testing framework for scoring algorithm refinement",
        "Achieved 40% improvement in lead qualification accuracy"
      ]
    }
  ];

  const skills = [
    { category: "Front-End", technologies: "React, Angular, TypeScript, Tailwind" },
    { category: "Back-End", technologies: "Node.js, Express, Python (Flask/FastAPI)" },
    { category: "DevOps", technologies: "GitHub Actions, Azure DevOps" },
    { category: "Cloud", technologies: "Azure Static Web Apps, AWS Lambda" },
    { category: "AI/ML Integration", technologies: "REST APIs for ML models, NLP dashboards, Real-time data viz" }
  ];

  const strengths = [
    "Comfortable collaborating across DS/DE/PM/Architect roles",
    "Adaptable to Azure & AWS environments",
    "UI/UX-focused — I don't ship ugly",
    "End-to-end delivery — no hand-holding needed",
    "Proactive communicator in client-facing settings"
  ];

  return (
    <PageTransition>
      <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans p-8`}>
        <div className="max-w-6xl mx-auto space-y-20">

          {/* Header Section */}
          <header className="text-center space-y-5 pt-12">
            <h1 className="text-5xl font-bold ${theme.text} tracking-tight">
              Matthew J. Wozniak
            </h1>
            <p className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto leading-relaxed`}>
              Full Stack Developer | Delivering Scalable, AI-Driven Solutions with Clean Architecture and Seamless UX
            </p>
          </header>

          {/* Profile Summary */}
          <section className={`${theme.nav} rounded-2xl p-8 shadow-lg`}>
            <p className={`text-lg leading-relaxed ${theme.text}`}>
              Experienced Full Stack Developer with 8+ years of delivering high-performance, data-driven web applications across healthcare, finance, and e-commerce domains. Proven expertise in building user-facing AI/ML tools, integrating with complex backends, and deploying scalable solutions across cloud platforms. Comfortable leading UI strategy, collaborating across pods, and owning features from concept to deployment.
            </p>
          </section>

          <InteractiveSkills />

          {/* Projects Section */}
          <section className="space-y-6">
            <h2 className={`text-3xl font-bold ${theme.accent}`}>Relevant Project Experience</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`${theme.nav} p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300`}
                >
                  <h3 className={`text-xl font-semibold ${theme.accent} mb-2`}>{project.title}</h3>
                  <p className={`${theme.textSecondary} mb-4 text-sm`}>{project.client}</p>
                  <ul className={`${theme.text} space-y-2 text-sm`}>
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className={theme.accent}>•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Strengths Section */}
          <section className="space-y-6">
            <h2 className={`text-3xl font-bold ${theme.accent}`}>Strengths</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className={theme.accent} />
                  <span className={theme.text}>{strength}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className={`border-t ${theme.border} pt-10 pb-16 space-y-6`}>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/LtShibby"
                className={`${theme.textSecondary} hover:${theme.accent} transition-colors`}
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/matthew-wozniak/"
                className={`${theme.textSecondary} hover:${theme.accent} transition-colors`}
              >
                <FaLinkedin size={24} />
              </a>
            </div>
            <p className={`text-center text-lg font-semibold ${theme.accent}`}>
              Available for AI/ML projects, platform builds, and performance makeovers.
            </p>
          </footer>
        </div>
      </div>
    </PageTransition>
  );
}

export default MattProfile;

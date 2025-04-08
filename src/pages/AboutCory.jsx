import { useTheme } from '../context/ThemeContext';
import PageTransition from '../components/layout/PageTransition.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function AboutCory() {
  const { theme } = useTheme();

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-5rem)] p-8 pt-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero */}
          <section>
            <h2 className={`${theme.text} text-3xl md:text-4xl font-bold mb-8 text-center font-['Fira_Code']`}>
              About Cory Dennington
            </h2>
            <div className={`${theme.nav} p-6 rounded-lg shadow-lg`}>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-32 h-32 rounded-full overflow-hidden">
                  <img 
                    src="/images/cory-headshot.jpg" 
                    alt="Cory - Strategic Advisor at WozWize"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 md:max-w-[75%]">
                  <h4 className={`${theme.text} text-xl font-bold mb-2`}>Cory Dennington</h4>
                  <p className={`${theme.text} opacity-75 mb-4`}>Strategic Advisor at WozWize</p>
                  <p className={`${theme.text} mb-4`}>
                    With 10+ years of experience in program delivery, client success, and PMO leadership, Cory brings operational precision and strategic clarity to every engagement. From leading large-scale digital programs at ManTech to streamlining federal operations at Accenture, he's built a career on bridging chaos with order.
                  </p>
                  <Link 
                    to="/projects" 
                    className={`${theme.button} px-4 py-2 rounded hover:opacity-90 transition-all`}
                  >
                    View Projects
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h3 className={`${theme.text} text-2xl font-bold mb-6 font-['Fira_Code']`}>Experience Highlights</h3>
            <div className="space-y-6">
              <div className={`${theme.nav} p-6 rounded-lg shadow-lg`}>
                <h4 className={`${theme.text} font-bold text-lg`}>PMO Manager – ManTech</h4>
                <p className={`${theme.text} opacity-75`}>Led program management office for a major Department of Defense mission. Oversaw strategic planning, stakeholder engagement, and full lifecycle delivery.</p>
              </div>
              <div className={`${theme.nav} p-6 rounded-lg shadow-lg`}>
                <h4 className={`${theme.text} font-bold text-lg`}>Program Delivery Lead – Accenture Federal Services</h4>
                <p className={`${theme.text} opacity-75`}>Managed federal client portfolios and optimized delivery models for compliance, efficiency, and scale.</p>
              </div>
              <div className={`${theme.nav} p-6 rounded-lg shadow-lg`}>
                <h4 className={`${theme.text} font-bold text-lg`}>Operations Strategy – WozWize</h4>
                <p className={`${theme.text} opacity-75`}>At WozWize, Cory shapes service operations, client onboarding frameworks, and delivery excellence playbooks across engineering and consulting engagements.</p>
              </div>
            </div>
          </section>

          {/* Approach */}
          <section>
            <h3 className={`${theme.text} text-2xl font-bold mb-6 font-['Fira_Code']`}>Philosophy</h3>
            <div className={`${theme.nav} p-6 rounded-lg shadow-lg`}>
              <p className={`${theme.text} text-lg leading-relaxed mb-4`}>
                "You can’t scale what you don’t define." Cory’s approach is rooted in operational clarity, process ownership, and strategic alignment. He believes great ideas die in poorly managed execution—and lives to fix that.
              </p>
              <p className={`${theme.text} text-lg leading-relaxed`}>
                At WozWize, he focuses on building operational muscle behind every initiative—from fractional CTO services to full-cycle delivery pipelines. Whether it's a 3-person startup or a 300-person client, his superpower is making sure the engine runs, and keeps running.
              </p>
            </div>
          </section>

          {/* Contact CTA */}
          <section>
            <div className={`${theme.nav} p-6 rounded-lg shadow-lg text-center`}>
              <h3 className={`${theme.text} text-2xl font-bold mb-4`}>Work with Cory</h3>
              <p className={`${theme.text} mb-6`}>
                Need help structuring delivery, scaling ops, or getting your program unstuck?
              </p>
              <Link 
                to="/contact" 
                className={`${theme.button} px-6 py-3 rounded inline-block hover:opacity-90 transition-all`}
              >
                Get in Touch
              </Link>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}

export default AboutCory;

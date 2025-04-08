import { useTheme } from '../context/ThemeContext';
import PageTransition from '../components/layout/PageTransition.jsx';
import { Link } from 'react-router-dom';

function TermsOfService() {
  const { theme } = useTheme();

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-5rem)] p-8 pt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className={`${theme.text} text-3xl md:text-4xl font-bold mb-8 text-center font-['Fira_Code']`}>
            Terms of Service
          </h2>

          <div className={`${theme.nav} p-6 rounded-lg shadow-lg space-y-8`}>
            <div className={`${theme.text}`}>
              <p className="opacity-75">
                Last Updated: {new Date().toLocaleDateString("en-US")}
              </p>
            </div>

            <section>
              <h2 className={`${theme.text} text-2xl font-semibold mb-2`}>1. Agreement to Terms</h2>
              <p className={`${theme.text} opacity-90`}>
                By accessing or using WozWize, you agree to these Terms of Service. If you do not agree, 
                please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className={`${theme.text} text-2xl font-semibold mb-2`}>2. Use of Our Services</h2>
              <ul className={`${theme.text} opacity-90 list-disc ml-6 space-y-2`}>
                <li>You must be at least 18 years old or have parental permission.</li>
                <li>You agree not to use WozWize for illegal activities.</li>
                <li>We reserve the right to suspend or terminate accounts violating these terms.</li>
              </ul>
            </section>

            <section>
              <h2 className={`${theme.text} text-2xl font-semibold mb-2`}>3. Intellectual Property</h2>
              <p className={`${theme.text} opacity-90`}>
                All content, logos, and trademarks on WozWize are our property or licensed for use. 
                You may not copy, distribute, or modify content without permission.
              </p>
            </section>

            <section>
              <h2 className={`${theme.text} text-2xl font-semibold mb-2`}>4. User-Generated Content</h2>
              <p className={`${theme.text} opacity-90`}>
                You are responsible for any content you post. We reserve the right to remove content 
                that violates our policies or legal regulations.
              </p>
            </section>

            <section>
              <h2 className={`${theme.text} text-2xl font-semibold mb-2`}>5. Disclaimers & Limitation of Liability</h2>
              <p className={`${theme.text} opacity-90`}>
                WozWize provides content "as is" without warranties. We are not liable for any issues 
                resulting from the use of our website or services.
              </p>
            </section>

            <section>
              <h2 className={`${theme.text} text-2xl font-semibold mb-2`}>6. Changes to Terms</h2>
              <p className={`${theme.text} opacity-90`}>
                We may update these Terms of Service. Continued use of WozWize means you accept any updates.
              </p>
            </section>

            <section>
              <h2 className={`${theme.text} text-2xl font-semibold mb-2`}>7. Contact Us</h2>
              <p className={`${theme.text} opacity-90`}>
                If you have questions about these Terms of Service, please visit our{' '}
                <Link 
                  to="/contact" 
                  className={`${theme.accent} hover:opacity-80 transition-opacity`}
                >
                  Contact page
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default TermsOfService; 
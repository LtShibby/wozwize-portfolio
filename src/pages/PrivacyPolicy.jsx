import { useTheme } from '../context/ThemeContext';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  const { theme } = useTheme();

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-5rem)] p-8 pt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className={`${theme.text} text-3xl md:text-4xl font-bold mb-8 text-center font-['Fira_Code']`}>
            &lt;Privacy Policy /&gt;
          </h2>

          <div className={`${theme.nav} p-6 rounded-lg shadow-lg space-y-8`}>
            <div className={`${theme.text}`}>
              <p className="opacity-75">
                Last Updated: {new Date().toLocaleDateString("en-US")}
              </p>
            </div>

            <section>
              <h2 className={`${theme.text} text-2xl font-semibold mb-2`}>1. Introduction</h2>
              <p className={`${theme.text} opacity-90`}>
                Welcome to <strong>WozWize</strong>. Your privacy is important to us. This Privacy Policy explains 
                how we collect, use, and protect your personal information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className={`${theme.text} text-2xl font-semibold mb-2`}>2. Information We Collect</h2>
              <ul className={`${theme.text} opacity-90 list-disc ml-6 space-y-2`}>
                <li><strong>Personal Information:</strong> Name, email, and any details you provide.</li>
                <li><strong>Usage Data:</strong> IP address, browser type, device info, and website interactions.</li>
                <li><strong>Cookies & Tracking:</strong> We use cookies to enhance user experience and analyze site traffic.</li>
              </ul>
            </section>

            <section>
              <h2 className={`${theme.text} text-2xl font-semibold mb-2`}>3. How We Use Your Information</h2>
              <ul className={`${theme.text} opacity-90 list-disc ml-6 space-y-2`}>
                <li>To provide and maintain our services.</li>
                <li>To personalize user experience and improve our website.</li>
                <li>To communicate with you, including newsletters and updates.</li>
                <li>To ensure security and prevent fraud.</li>
              </ul>
            </section>

            <section>
              <h2 className={`${theme.text} text-2xl font-semibold mb-2`}>4. Data Protection & Security</h2>
              <p className={`${theme.text} opacity-90`}>
                We take security seriously and implement measures to protect your data. However, no online 
                system is 100% secure, and we encourage responsible online behavior.
              </p>
            </section>

            <section>
              <h2 className={`${theme.text} text-2xl font-semibold mb-2`}>5. Third-Party Services</h2>
              <p className={`${theme.text} opacity-90`}>
                We may use third-party services (such as analytics and payment processors) that collect 
                and process data independently. Their policies apply to your interactions with them.
              </p>
            </section>

            <section>
              <h2 className={`${theme.text} text-2xl font-semibold mb-2`}>6. Your Rights</h2>
              <p className={`${theme.text} opacity-90`}>
                You have the right to access, modify, or delete your personal data. Visit our{' '}
                <Link 
                  to="/contact" 
                  className={`${theme.accent} hover:opacity-80 transition-opacity`}
                >
                  Contact page
                </Link>
                {' '}to make a request.
              </p>
            </section>

            <section>
              <h2 className={`${theme.text} text-2xl font-semibold mb-2`}>7. Changes to This Policy</h2>
              <p className={`${theme.text} opacity-90`}>
                We may update this Privacy Policy as needed. Any changes will be posted on this page 
                with an updated date.
              </p>
            </section>

            <section>
              <h2 className={`${theme.text} text-2xl font-semibold mb-2`}>8. Contact Us</h2>
              <p className={`${theme.text} opacity-90`}>
                If you have any questions about this Privacy Policy, please visit our{' '}
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

export default PrivacyPolicy; 
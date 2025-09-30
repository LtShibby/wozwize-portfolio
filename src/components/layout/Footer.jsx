import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

function Footer() {
  const { theme } = useTheme();

  const linkBase =
    "text-sm opacity-80 hover:opacity-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm";
  const linkTone = "hover:text-[rgb(var(--brand-primary))]";

  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className={`relative w-full ${theme.nav} ${theme.text} border-t ${theme.border}`}
    >
      {/* top accent line */}
      <div className={`h-1 bg-gradient-to-r ${theme.primary}`} />

      {/* soft backdrop */}
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_top,transparent,black_20%,black_80%,transparent)] bg-[radial-gradient(40rem_20rem_at_100%_-4rem,rgba(99,102,241,0.08),transparent),radial-gradient(32rem_18rem_at_0%_100%,rgba(168,85,247,0.08),transparent)]" />

      <div className="relative container mx-auto px-4 py-6 sm:py-8 lg:py-10">
        {/* Mobile-optimized grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {/* Brand block */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/images/wozwize-logo-3.jpg"
                alt="WozWize Logo"
                className="h-20 w-auto drop-shadow-md"
              />
              <span className="text-lg sm:text-xl font-bold tracking-tight">
                <span className="text-[#00AEEF]">Woz</span>
                <span className="text-[#FFD700]">Wize</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm opacity-80 leading-relaxed max-w-xs mx-auto sm:mx-0">
              Building pragmatic products for real people. From quick MVPs to
              resilient platforms—craft, clarity, and speed.
            </p>

            {/* socials - horizontal on mobile */}
            <div className="flex items-center justify-center sm:justify-start gap-3 pt-2">
              <a
                href="https://twitter.com/WozWize"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="group inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  className="opacity-90 group-hover:opacity-100 sm:w-[18px] sm:h-[18px]"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M18.244 2H21l-6.28 7.17L22.5 22h-6.35l-4.97-6.49L5.3 22H3l7.13-8.17L1.5 2h6.4l4.47 6.1L18.24 2Z"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/matthew-wozniak/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  className="opacity-90 group-hover:opacity-100 sm:w-[18px] sm:h-[18px]"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5 2.5 2.5 0 0 1 4.98 3.5zM.24 8.01h4.99V24H.24V8zm7.26 0h4.78v2.18h.07c.66-1.25 2.28-2.57 4.69-2.57 5 0 5.92 3.29 5.92 7.58V24h-4.99v-6.67c0-1.59-.03-3.63-2.22-3.63-2.22 0-2.56 1.73-2.56 3.52V24H7.5V8.01z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Links groups - stacked on mobile, side by side on larger screens */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:col-span-2 lg:col-span-1 lg:max-w-md text-center">
            <div>
              <h3 className="text-xs sm:text-sm font-semibold tracking-wide uppercase opacity-70 mb-2 sm:mb-3">
                Explore
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li>
                  <Link to="/" className={`${linkBase} ${linkTone} text-xs sm:text-sm`}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className={`${linkBase} ${linkTone} text-xs sm:text-sm`}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/services" className={`${linkBase} ${linkTone} text-xs sm:text-sm`}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className={`${linkBase} ${linkTone} text-xs sm:text-sm`}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className={`${linkBase} ${linkTone} text-xs sm:text-sm`}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={`${linkBase} ${linkTone} text-xs sm:text-sm`}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Links group B */}
            <div>
              <h3 className="text-xs sm:text-sm font-semibold tracking-wide uppercase opacity-70 mb-2 sm:mb-3">
                Legal & Docs
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li>
                  <Link
                    to="/privacy-policy"
                    className={`${linkBase} ${linkTone} underline underline-offset-4 text-xs sm:text-sm`}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-of-service"
                    className={`${linkBase} ${linkTone} underline underline-offset-4 text-xs sm:text-sm`}
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact & Newsletter - full width on mobile */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <h3 className="text-xs sm:text-sm font-semibold tracking-wide uppercase opacity-70 mb-2 sm:mb-3">
              Get in Touch
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-xs sm:text-sm opacity-80">
                Ready to build something amazing?
              </p>
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 text-xs sm:text-sm ${theme.button} px-3 py-2 sm:px-4 rounded-lg hover:opacity-90 transition-opacity`}
              >
                Start a Project
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="sm:w-4 sm:h-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>

              <div className="pt-1 sm:pt-2 space-y-1.5 sm:space-y-2">
                <p className="text-xs opacity-70 uppercase tracking-wide font-semibold">
                  Stay Updated
                </p>
                <Link
                  to="/newsletter"
                  className="block text-xs sm:text-sm opacity-80 hover:opacity-100 transition-colors"
                >
                  Join our newsletter →
                </Link>
                <Link
                  to="/blog"
                  className="block text-xs sm:text-sm opacity-80 hover:opacity-100 transition-colors"
                >
                  Latest insights →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* separator */}
        <div className="my-4 sm:my-6 lg:my-8 h-px w-full bg-current/10" />

        {/* bottom bar - stacked on mobile */}
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between sm:gap-3 text-center sm:text-left">
          <p className="text-xs sm:text-sm opacity-70">
            © {new Date().getFullYear()} WozWize. All rights reserved.
          </p>
          <p className="text-xs opacity-60">
            Built with care — ship fast, stay simple.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

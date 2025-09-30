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

      <div className="relative container mx-auto px-4 py-10 sm:py-14">
        {/* top row: brand + link groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand block */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 group"
              aria-label="WozWize home"
            >
              <div className="h-12 w-12 rounded-xl bg-white/5 ring-1 ring-white/10 grid place-items-center group-hover:scale-105 transition-transform">
                {/* WozWize logo */}
                <img
                  src="/images/wozwize-logo-3.jpg"
                  alt="WozWize Logo"
                  width="100"
                  height="100"
                  className="opacity-90"
                />
              </div>
              <span className={`text-xl font-bold tracking-tight ${theme.accent}`}>
                WozWize
              </span>
            </Link>

            <p className="text-sm opacity-80 leading-relaxed">
              Building pragmatic products for real people. From quick MVPs to
              resilient platforms—craft, clarity, and speed.
            </p>

            {/* socials */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://twitter.com/WozWize"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  className="opacity-90 group-hover:opacity-100"
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
                className="group inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  className="opacity-90 group-hover:opacity-100"
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

          {/* Links group A */}
          <div className="grid grid-cols-2 gap-6 max-w-md">
            <div>
              <h3 className="text-sm font-semibold tracking-wide uppercase opacity-70 mb-3">
                Explore
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className={`${linkBase} ${linkTone}`}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className={`${linkBase} ${linkTone}`}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/services" className={`${linkBase} ${linkTone}`}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className={`${linkBase} ${linkTone}`}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className={`${linkBase} ${linkTone}`}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={`${linkBase} ${linkTone}`}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Links group B */}
            <div>
              <h3 className="text-sm font-semibold tracking-wide uppercase opacity-70 mb-3">
                Legal & Docs
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/privacy-policy"
                    className={`${linkBase} ${linkTone} underline underline-offset-4`}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-of-service"
                    className={`${linkBase} ${linkTone} underline underline-offset-4`}
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wide uppercase opacity-70 mb-3">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <p className="text-sm opacity-80">
                Ready to build something amazing?
              </p>
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 text-sm ${theme.button} px-4 py-2 rounded-lg hover:opacity-90 transition-opacity`}
              >
                Start a Project
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>

              <div className="pt-2 space-y-2">
                <p className="text-xs opacity-70 uppercase tracking-wide font-semibold">
                  Stay Updated
                </p>
                <Link
                  to="/newsletter"
                  className="block text-sm opacity-80 hover:opacity-100 transition-colors"
                >
                  Join our newsletter →
                </Link>
                <Link
                  to="/blog"
                  className="block text-sm opacity-80 hover:opacity-100 transition-colors"
                >
                  Latest insights →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* separator */}
        <div className="my-8 h-px w-full bg-current/10" />

        {/* bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm opacity-70">
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

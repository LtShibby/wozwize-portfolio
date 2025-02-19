import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

function Footer() {
  const { theme } = useTheme();
  
  return (
    <footer className={`w-full ${theme.nav} ${theme.text} py-6 text-center text-sm mt-auto`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="mb-2 md:mb-0">
          © {new Date().getFullYear()}{" "}
          <Link 
            to="/"
            className={`${theme.button} px-2 py-1 rounded hover:opacity-90 transition`}
          >
            WozWize
          </Link>
          . All Rights Reserved.
        </p>
        
        <div className="flex space-x-4">
          <Link 
            to="/privacy-policy"
            className="hover:opacity-80 transition"
          >
            Privacy Policy
          </Link>
          <Link 
            to="/terms-of-service"
            className="hover:opacity-80 transition"
          >
            Terms of Service
          </Link>
          <Link 
            to="/about-us"
            className="hover:opacity-80 transition"
          >
            About Us
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 
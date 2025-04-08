import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll instantly to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Change to 'smooth' if you prefer
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;

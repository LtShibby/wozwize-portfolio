import { useTheme } from '../context/ThemeContext';

function Hero() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-[90vh] flex items-center justify-center bg-gradient-to-r ${theme.primary}`}>
      <div className="text-center text-white p-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm [Your Name]
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Full Stack Developer | Designer | Creator
        </p>
        <button className={`px-8 py-3 rounded-full hover:bg-opacity-90 transition-all ${theme.button}`}>
          View My Work
        </button>
      </div>
    </div>
  );
}

export default Hero; 
import { useTheme } from '../../context/ThemeContext.jsx';

function ThemeSwitcher() {
  const { theme, setTheme, currentTheme } = useTheme();

  const handleThemeChange = () => {
    const themeOrder = ['light', 'dark', 'cyberpunk'];
    const currentIndex = themeOrder.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    setTheme(themeOrder[nextIndex]);
  };

  return (
    <button
      onClick={handleThemeChange}
      className={`${theme.button} fixed bottom-4 right-4 p-2 rounded-full shadow-lg`}
    >
      {currentTheme === 'light' ? '🌙' : currentTheme === 'dark' ? '🎮' : currentTheme === 'cyberpunk' ? '🌞' : '🌙'}
    </button>
  );
}

export default ThemeSwitcher;
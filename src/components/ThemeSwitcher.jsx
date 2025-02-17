import { useTheme } from '../context/ThemeContext';

function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 flex gap-2">
      <button
        onClick={() => setTheme('light')}
        className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
      />
      <button
        onClick={() => setTheme('dark')}
        className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-900 to-purple-900"
      />
      <button
        onClick={() => setTheme('forest')}
        className="w-8 h-8 rounded-full bg-gradient-to-r from-green-600 to-teal-600"
      />
    </div>
  );
}

export default ThemeSwitcher; 
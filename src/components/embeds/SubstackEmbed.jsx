import { useTheme } from '../../context/ThemeContext.jsx';

function SubstackEmbed() {
  const { theme } = useTheme();
  
  return (
    <div className={`${theme.nav} p-6 rounded-lg shadow-lg`}>
      <h3 className={`${theme.text} text-xl font-bold mb-4 font-['Fira_Code']`}>
        WozWize Newsletter
      </h3>
      <iframe
        src="https://wozwize.substack.com/embed"
        width="100%"
        height="320"
        style={{ border: '1px solid #EEE', background: 'white' }}
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
}

export default SubstackEmbed; 
/*
HOW TO RUN THE LEARNING ASSISTANT:

1. Terminal 1: Start the frontend
   npm run dev

2. Terminal 2: Start the Express server
   node server/server.js

3. Terminal 3: Start Ollama with Mistral model
   ollama run mistral

Note: Make sure you have Ollama installed from ollama.com
      and have pulled the Mistral model using: ollama pull mistral
*/

import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

function LearningAssistant() {
  const { theme } = useTheme();
  const [problemText, setProblemText] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [generatedCode, setGeneratedCode] = useState({});
  const [generatingCode, setGeneratingCode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  const supportedLanguages = [
    { id: 'javascript', name: 'JavaScript' },
    { id: 'python', name: 'Python' },
    { id: 'java', name: 'Java' },
    { id: 'cpp', name: 'C++' },
    { id: 'typescript', name: 'TypeScript' }
  ];

  const handleAnalyze = async () => {
    if (!problemText.trim()) {
      setError('Please enter a problem statement');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log('Sending analysis request with text:', problemText);
      const response = await fetch('http://localhost:3001/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ problemText })
      });
      
      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);
      
      if (!response.ok) {
        throw new Error(data.error || data.details || 'Analysis failed');
      }
      
      setAnalysis({
        metadata: {
          title: data.title || 'Analysis Result',
          difficulty: data.difficulty || 'Unknown',
          constraints: data.constraints || [],
          input_format: data.input_format || "See constraints",
          output_format: data.output_format || "See constraints"
        },
        patterns: data.patterns || [],
        approaches: data.approaches || [],
        resources: data.resources || []
      });
    } catch (err) {
      console.error('Analysis error:', err);
      setError(err.message || 'Failed to analyze problem. Make sure the server is running and Ollama is installed.');
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateCode = async (approach, index) => {
    setGeneratingCode(true);
    try {
      const response = await fetch('http://localhost:3001/api/generate-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          approach,
          problemText,
          language: selectedLanguage
        })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || data.details || 'Code generation failed');
      }
      
      setGeneratedCode(prev => ({
        ...prev,
        [index]: data.code
      }));
    } catch (err) {
      console.error('Code generation error:', err);
      setError(err.message);
    } finally {
      setGeneratingCode(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] p-8 pt-20">
      <h2 className={`${theme.text} text-3xl md:text-4xl font-bold mb-8 text-center font-['Fira_Code']`}>
        Learning Assistant
      </h2>

      <div className="max-w-4xl mx-auto">
        {/* Problem Input */}
        <div className={`${theme.nav} p-6 rounded-lg shadow-lg mb-8`}>
          <h3 className={`${theme.text} text-xl font-bold mb-4`}>Problem Statement</h3>
          <textarea
            value={problemText}
            onChange={(e) => setProblemText(e.target.value)}
            placeholder="Paste your coding problem here..."
            className={`w-full h-48 p-4 rounded ${theme.text} bg-opacity-20 ${theme.background}`}
          />
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className={`${theme.button} px-6 py-2 rounded mt-4 hover:opacity-90 transition-all 
              ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Analyzing...' : 'Analyze Problem'}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-red-500 text-white p-4 rounded mb-8"
          >
            {error}
          </motion.div>
        )}

        {/* Analysis Results */}
        {analysis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Problem Metadata */}
            <div className={`${theme.nav} p-6 rounded-lg shadow-lg`}>
              <h3 className={`${theme.text} text-xl font-bold mb-4`}>Problem Analysis</h3>
              <div className="space-y-4">
                <div>
                  <h4 className={`${theme.text} font-bold`}>Title:</h4>
                  <p className={`${theme.text}`}>{analysis.metadata.title}</p>
                </div>
                <div>
                  <h4 className={`${theme.text} font-bold`}>Difficulty:</h4>
                  <p className={`${theme.text}`}>{analysis.metadata.difficulty}</p>
                </div>
                <div>
                  <h4 className={`${theme.text} font-bold`}>Constraints:</h4>
                  <ul className={`${theme.text} list-disc pl-5`}>
                    {analysis.metadata.constraints.map((constraint, i) => (
                      <li key={i}>{constraint}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Patterns and Approaches */}
            <div className={`${theme.nav} p-6 rounded-lg shadow-lg`}>
              <h3 className={`${theme.text} text-xl font-bold mb-4`}>Solution Patterns</h3>
              <div className="space-y-4">
                {analysis.patterns.map((pattern, i) => (
                  <div key={i} className="border-b border-current pb-4 last:border-0">
                    <h4 className={`${theme.text} font-bold mb-2`}>{pattern}</h4>
                    <p className={`${theme.text}`}>{analysis.approaches[i]}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className={`${theme.nav} p-6 rounded-lg shadow-lg`}>
              <h3 className={`${theme.text} text-xl font-bold mb-4`}>Learning Resources</h3>
              <ul className={`${theme.text} list-disc pl-5`}>
                {analysis.resources.map((resource, i) => (
                  <li key={i}>{resource}</li>
                ))}
              </ul>
            </div>

            {/* Implementation */}
            <div className={`${theme.nav} p-6 rounded-lg shadow-lg`}>
              <div className="flex justify-between items-center mb-6">
                <h3 className={`${theme.text} text-xl font-bold`}>Implementation</h3>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className={`${theme.nav} ${theme.text} px-3 py-1 rounded border border-current border-opacity-20`}
                >
                  {supportedLanguages.map(lang => (
                    <option key={lang.id} value={lang.id}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-4">
                {analysis.approaches.map((approach, i) => (
                  <div key={i} className="border-b border-current pb-4 last:border-0">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className={`${theme.text} font-bold`}>Approach {i + 1}</h4>
                      <button
                        onClick={() => handleGenerateCode(approach, i)}
                        disabled={generatingCode}
                        className={`${theme.button} px-4 py-1 rounded text-sm hover:opacity-90 transition-all
                          ${generatingCode ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {generatingCode ? 'Generating...' : `Generate ${supportedLanguages.find(l => l.id === selectedLanguage)?.name} Code`}
                      </button>
                    </div>
                    {generatedCode[i] && (
                      <div className="mt-4">
                        <pre className={`${theme.text} bg-black bg-opacity-10 p-4 rounded overflow-x-auto`}>
                          <code>{generatedCode[i]}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default LearningAssistant;
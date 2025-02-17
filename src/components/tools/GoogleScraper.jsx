import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

function GoogleScraper() {
  const { theme } = useTheme();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);
  const [filters, setFilters] = useState({
    region: 'global',
    language: 'any',
    dateFilter: 'any',
    page: 1
  });

  // Fetch available options when component mounts
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/options');
        if (!response.ok) throw new Error('Failed to fetch options');
        const data = await response.json();
        setOptions(data);
      } catch (err) {
        console.warn('Failed to fetch options:', err);
        // Provide default options if fetch fails
        setOptions({
          regions: {
            'global': '',
            'us': '&gl=us',
            'uk': '&gl=uk',
            'sg': '&gl=sg',
            'au': '&gl=au'
          },
          languages: {
            'any': '',
            'english': '&lr=lang_en',
            'chinese': '&lr=lang_zh-CN',
            'malay': '&lr=lang_ms',
            'tamil': '&lr=lang_ta'
          },
          dateFilters: [
            { value: 'any', label: 'Any time' },
            { value: 'year', label: 'Past year' },
            { value: 'month', label: 'Past month' },
            { value: 'week', label: 'Past week' }
          ]
        });
      }
    };

    fetchOptions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    console.log('Submitting search:', {
      query,
      filters,
      numResults: 10
    });

    try {
      const response = await fetch('http://localhost:3001/api/scrape', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          ...filters,
          numResults: 10
        }),
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        throw new Error(errorData.details || 'Failed to fetch results');
      }
      
      const data = await response.json();
      console.log('Search results:', {
        resultCount: data.results.length,
        pagination: data.pagination
      });
      
      setResults(data.results);
    } catch (err) {
      console.error('Search error:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] p-4 md:p-8">
      <div className={`${theme.nav} p-8 rounded-lg shadow-lg max-w-4xl mx-auto`}>
        <h2 className={`${theme.text} text-3xl font-bold mb-6 text-center font-['Fira_Code']`}>
          WIZEscraper
        </h2>
        
        {/* Search Form */}
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter search query..."
                className={`flex-1 p-3 rounded bg-opacity-20 ${theme.background} ${theme.text} border border-current`}
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`${theme.button} px-6 py-3 rounded hover:opacity-90 transition-all ${isLoading ? 'opacity-50' : ''}`}
              >
                {isLoading ? 'Searching...' : 'Search'}
              </button>
            </div>

            {/* Filters */}
            {options && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <select
                  value={filters.region}
                  onChange={(e) => setFilters(prev => ({ ...prev, region: e.target.value }))}
                  className={`p-2 rounded ${theme.background} ${theme.text} border border-current`}
                >
                  <option value="global">Global</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="sg">Singapore</option>
                  <option value="au">Australia</option>
                </select>

                <select
                  value={filters.language}
                  onChange={(e) => setFilters(prev => ({ ...prev, language: e.target.value }))}
                  className={`p-2 rounded ${theme.background} ${theme.text} border border-current`}
                >
                  <option value="any">Any Language</option>
                  <option value="english">English</option>
                  <option value="chinese">Chinese</option>
                  <option value="malay">Malay</option>
                  <option value="tamil">Tamil</option>
                </select>

                <select
                  value={filters.dateFilter}
                  onChange={(e) => setFilters(prev => ({ ...prev, dateFilter: e.target.value }))}
                  className={`p-2 rounded ${theme.background} ${theme.text} border border-current`}
                >
                  <option value="any">Any Time</option>
                  <option value="year">Past Year</option>
                  <option value="month">Past Month</option>
                  <option value="week">Past Week</option>
                </select>
              </div>
            )}
          </div>
        </form>

        {/* Error Message */}
        {error && (
          <div className="text-red-500 mb-4 text-center">
            {error}
          </div>
        )}

        {/* Results */}
        {results.length > 0 && (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className={`${theme.text} text-xl font-bold`}>
                Results ({results.length})
              </h3>
            </div>
            
            {/* Table View */}
            <div className="overflow-x-auto">
              <table className={`w-full border-collapse ${theme.text}`}>
                <thead>
                  <tr className={`${theme.nav} border-b border-current border-opacity-20`}>
                    <th className="p-3 text-left">Title</th>
                    <th className="p-3 text-left">URL</th>
                    <th className="p-3 text-left hidden md:table-cell">Description</th>
                    <th className="p-3 text-left hidden md:table-cell">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`border-b border-current border-opacity-10 hover:bg-current hover:bg-opacity-5`}
                    >
                      <td className="p-3">
                        <span className="font-bold">{result.title}</span>
                      </td>
                      <td className="p-3">
                        <a
                          href={result.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline break-all text-sm"
                        >
                          {result.url}
                        </a>
                      </td>
                      <td className="p-3 hidden md:table-cell">
                        <span className="text-sm opacity-80">
                          {result.snippet || 'No description available'}
                        </span>
                      </td>
                      <td className="p-3 hidden md:table-cell">
                        <span className="text-sm opacity-60">
                          {result.date || 'No date'}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View (only shows when screen is small) */}
            <div className="md:hidden space-y-4">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${theme.nav} p-4 rounded border border-opacity-10 border-current`}
                >
                  <h4 className={`${theme.text} font-bold mb-2`}>{result.title}</h4>
                  <a
                    href={result.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline break-all text-sm mb-2 block"
                  >
                    {result.url}
                  </a>
                  {result.snippet && (
                    <p className={`${theme.text} opacity-80 text-sm mt-2`}>
                      {result.snippet}
                    </p>
                  )}
                  {result.date && (
                    <p className={`${theme.text} opacity-60 text-xs mt-2`}>
                      {result.date}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GoogleScraper; 
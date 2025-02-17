import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(cors());
app.use(express.json());

// Get these from Google Search API Console
const GOOGLE_API_KEY = 'YOUR_API_KEY';
const SEARCH_ENGINE_ID = 'YOUR_SEARCH_ENGINE_ID';

app.post('/api/scrape', async (req, res) => {
  try {
    const { 
      query, 
      numResults = 10,
      page = 1,
      language = 'lang_en'
    } = req.body;

    const start = (page - 1) * numResults + 1;
    
    const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
      params: {
        key: GOOGLE_API_KEY,
        cx: SEARCH_ENGINE_ID,
        q: query,
        num: numResults,
        start,
        lr: language,
        safe: 'active'
      }
    });

    const results = response.data.items.map(item => ({
      title: item.title,
      url: item.link,
      snippet: item.snippet,
      date: item.pagemap?.metatags?.[0]?.['article:published_time'] || ''
    }));

    res.json({
      results,
      pagination: {
        currentPage: page,
        totalResults: response.data.searchInformation.totalResults,
        hasMore: start + numResults < response.data.searchInformation.totalResults
      }
    });
  } catch (error) {
    console.error('Search error:', error.response?.data || error);
    res.status(500).json({ 
      error: 'Failed to fetch results',
      details: error.message
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 
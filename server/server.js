import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const OLLAMA_URL = 'http://localhost:11434/api/generate';

app.post('/api/analyze', async (req, res) => {
  try {
    const { problemText } = req.body;
    
    if (!problemText) {
      return res.status(400).json({ error: 'Problem text is required' });
    }

    console.log('Received request to analyze:', problemText);
    
    try {
      console.log('Sending request to Ollama...');
      const ollamaResponse = await fetch(OLLAMA_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'mistral',
          prompt: `You are a coding problem analyzer. Analyze this problem and provide a response in valid JSON format:

          ${problemText}
          
          Response must be valid JSON in this exact format:
          {
            "title": "Short descriptive title",
            "difficulty": "Easy/Medium/Hard",
            "constraints": ["constraint 1", "constraint 2"],
            "patterns": ["pattern 1", "pattern 2"],
            "approaches": ["approach 1", "approach 2"],
            "resources": ["resource 1", "resource 2"]
          }`,
          stream: false
        })
      });

      console.log('Ollama status:', ollamaResponse.status);
      
      if (!ollamaResponse.ok) {
        throw new Error(`Ollama responded with status: ${ollamaResponse.status}`);
      }

      const data = await ollamaResponse.json();
      console.log('Raw Ollama response:', data);

      try {
        const parsedResponse = JSON.parse(data.response);
        console.log('Parsed response:', parsedResponse);
        res.json(parsedResponse);
      } catch (parseError) {
        console.error('Parse error:', parseError);
        console.log('Failed to parse response:', data.response);
        res.json({
          title: "Analysis Result",
          difficulty: "Unknown",
          constraints: [data.response],
          patterns: [],
          approaches: [],
          resources: []
        });
      }
    } catch (ollamaError) {
      console.error('Ollama error:', ollamaError);
      res.status(500).json({ 
        error: 'Failed to connect to Ollama',
        details: ollamaError.message
      });
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      error: 'Server error',
      details: error.message
    });
  }
});

app.post('/api/generate-code', async (req, res) => {
  try {
    const { approach, problemText, language } = req.body;
    
    if (!approach || !problemText) {
      return res.status(400).json({ error: 'Approach and problem text are required' });
    }

    console.log(`Generating ${language} code for approach:`, approach);
    
    try {
      const ollamaResponse = await fetch(OLLAMA_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'mistral',
          prompt: `You are a coding expert. Generate ${language} code for this problem:
          
          Problem: ${problemText}
          
          Using this approach: ${approach}
          
          Provide a complete solution in ${language} with:
          1. Function implementation with detailed comments
          2. Example usage with test cases
          3. Time and space complexity analysis
          
          Return only the code and comments in ${language} syntax, no additional text.`,
          stream: false
        })
      });

      if (!ollamaResponse.ok) {
        throw new Error(`Ollama responded with status: ${ollamaResponse.status}`);
      }

      const data = await ollamaResponse.json();
      console.log('Raw code response:', data);
      
      res.json({ code: data.response });
    } catch (ollamaError) {
      console.error('Ollama error:', ollamaError);
      res.status(500).json({ 
        error: 'Failed to generate code',
        details: ollamaError.message
      });
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      error: 'Server error',
      details: error.message
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Make sure Ollama is running on ${OLLAMA_URL}`);
}); 
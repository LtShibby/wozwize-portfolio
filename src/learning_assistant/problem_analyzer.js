import OpenAI from 'openai';

export class ProblemAnalyzer {
  constructor(apiKey) {
    this.client = new OpenAI({ 
      apiKey,
      dangerouslyAllowBrowser: true
    });
  }

  async extract_metadata(problemText) {
    const prompt = this._build_extraction_prompt(problemText);
    const response = await this._get_completion(prompt);
    return this._parse_metadata(response);
  }

  async analyze_patterns(metadata) {
    const prompt = this._build_analysis_prompt(metadata);
    const response = await this._get_completion(prompt);
    return this._parse_analysis(response);
  }

  async _get_completion(prompt) {
    const response = await this.client.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }]
    });
    return response.choices[0].message.content;
  }

  _build_extraction_prompt(text) {
    return `
      Analyze this coding problem and extract key information:
      
      ${text}
      
      Extract and format as JSON:
      {
        "title": "",
        "difficulty": "",
        "constraints": [],
        "examples": [],
        "input_format": "",
        "output_format": ""
      }
    `;
  }

  _parse_metadata(response) {
    return JSON.parse(response);
  }
} 
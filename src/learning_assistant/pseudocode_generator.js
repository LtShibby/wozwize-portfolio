import OpenAI from 'openai';

export class PseudocodeGenerator {
  constructor(apiKey) {
    this.client = new OpenAI({ 
      apiKey,
      dangerouslyAllowBrowser: true
    });
  }

  async generate_approach(pattern, metadata) {
    const prompt = this._build_pseudocode_prompt(pattern, metadata);
    const response = await this._get_completion(prompt);
    return this._format_pseudocode(response);
  }

  async _get_completion(prompt) {
    const response = await this.client.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }]
    });
    return response.choices[0].message.content;
  }

  _build_pseudocode_prompt(pattern, metadata) {
    return `
      Create high-level pseudocode for solving this problem using ${pattern} approach.
      Do not provide actual code implementation.
      Focus on key steps and logic flow.
      Include complexity analysis.
      
      Problem constraints:
      ${metadata.constraints.join('\n')}
    `;
  }

  _format_pseudocode(response) {
    return response.trim();
  }
} 
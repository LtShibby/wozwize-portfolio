class PseudocodeGenerator:
    def __init__(self, api_key: str):
        self.client = openai.Client(api_key=api_key)
        
    def generate_approach(self, pattern: str, metadata: ProblemMetadata) -> str:
        """Generate high-level pseudocode for an approach"""
        prompt = self._build_pseudocode_prompt(pattern, metadata)
        response = self._get_completion(prompt)
        return self._format_pseudocode(response)

    def _build_pseudocode_prompt(self, pattern: str, metadata: ProblemMetadata) -> str:
        return f"""
        Create high-level pseudocode for solving this problem using {pattern} approach.
        Do not provide actual code implementation.
        Focus on key steps and logic flow.
        Include complexity analysis.
        
        Problem constraints:
        {metadata.constraints}
        """

    def _get_completion(self, prompt: str) -> str:
        response = self.client.chat.completions.create(
            model="gpt-4",
            messages=[{"role": "user", "content": prompt}]
        )
        return response.choices[0].message.content

    def _format_pseudocode(self, pseudocode: str) -> str:
        # This method should be implemented to format the pseudocode
        # For now, we'll just return the pseudocode as is
        return pseudocode

    def _format_problem_metadata(self, metadata: ProblemMetadata) -> str:
        # This method should be implemented to format the problem metadata
        # For now, we'll just return the constraints
        return "\n".join(metadata.constraints) 
class TestAnalyzer:
    def analyze_failure(self, test_case: Dict, output: str, expected: str) -> str:
        """Analyze why a test case failed and provide learning insights"""
        prompt = self._build_analysis_prompt(test_case, output, expected)
        response = self._get_completion(prompt)
        return self._format_explanation(response)
        
    def suggest_additional_tests(self, metadata: ProblemMetadata) -> List[Dict]:
        """Suggest additional test cases to consider"""
        # Implementation details...
        pass 
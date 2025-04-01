import { useState, useMemo, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';
import Fuse from 'fuse.js';
import { ChevronDown, ChevronRight, Search } from 'lucide-react';
import debounce from 'lodash/debounce';
import React from 'react';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    skills: [
      'Large Language Models (LLMs)', 'Transformers (HuggingFace)', 'Prompt Engineering',
      'AI Agents', 'NLP Libraries (spaCy, NLTK)', 'TensorFlow', 'PyTorch',
      'RAG (Retrieval Augmented Generation)', 'Vector Databases', 'Fine-tuning LLMs',
      'Embeddings', 'Computer Vision', 'MLOps', 'Model Deployment',
    ],
  },
  {
    title: 'System Design',
    skills: [
      'Distributed Systems', 'System Architecture', 'API Design', 'Database Design',
      'Scalability Patterns', 'High Availability', 'Event-Driven Architecture', 'Message Queues',
    ],
  },
  {
    title: 'Data Engineering',
    skills: [
      'ETL Pipelines', 'Data Warehousing', 'Data Lakes', 'Stream Processing',
      'Data Modeling', 'Big Data Technologies', 'Data Quality', 'Data Governance',
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      'Java', 'Python', 'TypeScript', 'C/C++/C#', 'JavaScript', 'SQL', 'Bash', 'XML', 'YAML',
    ],
  },
  {
    title: 'Web Frontend',
    skills: [
      'Angular', 'React.js', 'Vue.js', 'Bootstrap', 'HTML5', 'CSS3', 'SASS', 'Responsive Design',
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      'Spring', 'Spring MVC', 'Apache Struts MVC', 'Web Services (SOAP/REST)',
      'Ionic', 'Flask',
    ],
  },
  {
    title: 'Development Tools',
    skills: [
      'IntelliJ', 'VS Code', 'Eclipse', 'Git/GitHub/GitLab', 'Jenkins', 'Maven/Gradle',
      'Docker', 'Kubernetes', 'AWS (Lambda, S3, CloudWatch)', 'GCP', 'Postman', 'Splunk',
    ],
  },
  {
    title: 'Databases',
    skills: [
      'Oracle', 'MySQL', 'PostgreSQL', 'AWS Redshift', 'BigQuery', 'DBeaver',
    ],
  },
  {
    title: 'Project Management',
    skills: [
      'Certified Agile Practitioner', 'Sprint Planning', 'Jira/Confluence',
      'Full SDLC Oversight', 'GitLab Management',
    ],
  },
];

export default function InteractiveSkills() {
  const [search, setSearch] = useState('');
  const [openCategories, setOpenCategories] = useState(new Set());
  const { theme } = useTheme();

  const fuse = useMemo(() => {
    const flatSkills = skillCategories.flatMap(category =>
      category.skills.map(skill => ({
        category: category.title,
        skill,
      }))
    );
    return new Fuse(flatSkills, {
      keys: ['skill'],
      threshold: 0.3,
      ignoreLocation: true,
    });
  }, []);

  const filtered = useMemo(() => {
    if (!search.trim()) return skillCategories;
    const results = fuse.search(search.trim());

    const grouped = {};
    results.forEach(({ item }) => {
      if (!grouped[item.category]) grouped[item.category] = [];
      grouped[item.category].push(item.skill);
    });

    return Object.entries(grouped).map(([title, skills]) => ({ title, skills }));
  }, [search, fuse]);

  const toggle = (title) => {
    setOpenCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(title)) newSet.delete(title);
      else newSet.add(title);
      return newSet;
    });
  };

  const handleSearch = useCallback(debounce((value) => setSearch(value), 300), []);

  return (
    <section className="space-y-6">
      <h2 className={`text-2xl sm:text-3xl font-bold ${theme.accent}`}>
        Core Technical Skills
      </h2>

      <div className="relative max-w-md">
        <input
          type="text"
          placeholder="Search skills…"
          onChange={(e) => handleSearch(e.target.value)}
          className={`w-full ${theme.nav} ${theme.text} placeholder-gray-500 border ${theme.border} rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-emerald-500`}
          aria-label="Search technical skills"
        />
        <Search className="absolute right-10 top-3 text-gray-500 pointer-events-none" size={20} />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-3 top-3 text-gray-500 hover:text-gray-300"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      <div className={`divide-y ${theme.border} rounded-xl border ${theme.border} overflow-hidden shadow-lg`}> 
        {filtered.map((cat, idx) => (
          <div key={idx} className="transition-all duration-300">
            <button
              onClick={() => toggle(cat.title)}
              className={`w-full text-left px-6 py-4 ${theme.nav} hover:bg-opacity-80 transition flex items-center justify-between rounded-t-xl`}
              aria-expanded={openCategories.has(cat.title)}
              aria-controls={`skills-${idx}`}
            >
              <span className={`text-lg font-semibold ${theme.accent}`}>{cat.title}</span>
              {openCategories.has(cat.title) ? (
                <ChevronDown className={`${theme.accent}`} />
              ) : (
                <ChevronRight className={`${theme.accent}`} />
              )}
            </button>
            {openCategories.has(cat.title) && (
              <div
                id={`skills-${idx}`}
                className={`px-6 py-4 ${theme.bg} ${theme.text} grid sm:grid-cols-2 md:grid-cols-3 gap-3`}
              >
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${theme.border} ${theme.text} bg-opacity-80 hover:${theme.accent} hover:text-black transition duration-200 ease-in-out whitespace-nowrap cursor-pointer`}
                    title={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
        {filtered.length === 0 && (
          <div className={`${theme.nav} p-6 text-center ${theme.textSecondary}`}>
            No skills found. Try a different keyword or{' '}
            <button
              onClick={() => setSearch('')}
              className={`underline ${theme.accent} hover:text-emerald-400`}
            >
              reset the search
            </button>.
          </div>
        )}
      </div>
    </section>
  );
}
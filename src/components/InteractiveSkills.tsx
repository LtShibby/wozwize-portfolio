import { useState, useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import Fuse from 'fuse.js';
import { ChevronDown, ChevronRight, Search } from 'lucide-react';
import React from 'react';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    skills: [
      'Large Language Models (LLMs)', 'Transformers (HuggingFace)', 'Prompt Engineering',
      'AI Agents', 'NLP Libraries (spaCy, NLTK)', 'TensorFlow', 'PyTorch',
      'RAG (Retrieval Augmented Generation)', 'Vector Databases', 'Fine-tuning LLMs',
      'Embeddings', 'Computer Vision', 'MLOps', 'Model Deployment'
    ],
  },
  {
    title: 'System Design',
    skills: [
      'Distributed Systems', 'System Architecture', 'API Design', 'Database Design',
      'Scalability Patterns', 'High Availability', 'Event-Driven Architecture', 'Message Queues'
    ],
  },
  {
    title: 'Data Engineering',
    skills: [
      'ETL Pipelines', 'Data Warehousing', 'Data Lakes', 'Stream Processing',
      'Data Modeling', 'Big Data Technologies', 'Data Quality', 'Data Governance'
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      'Java', 'Python', 'TypeScript', 'C/C++/C#', 'JavaScript', 'SQL', 'Bash', 'XML', 'YAML'
    ],
  },
  {
    title: 'Web Frontend',
    skills: [
      'Angular', 'React.js', 'Vue.js', 'Bootstrap', 'HTML5', 'CSS3', 'SASS', 'Responsive Design'
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      'Spring', 'Spring MVC', 'Apache Struts MVC', 'Web Services (SOAP/REST)',
      'Ionic', 'Flask'
    ],
  },
  {
    title: 'Development Tools',
    skills: [
      'IntelliJ', 'VS Code', 'Eclipse', 'Git/GitHub/GitLab', 'Jenkins', 'Maven/Gradle',
      'Docker', 'Kubernetes', 'AWS (Lambda, S3, CloudWatch)', 'GCP', 'Postman', 'Splunk'
    ],
  },
  {
    title: 'Databases',
    skills: [
      'Oracle', 'MySQL', 'PostgreSQL', 'AWS Redshift', 'BigQuery', 'DBeaver'
    ],
  },
  {
    title: 'Project Management',
    skills: [
      'Certified Agile Practitioner', 'Sprint Planning', 'Jira/Confluence',
      'Full SDLC Oversight', 'GitLab Management'
    ],
  }
];

export default function InteractiveSkills() {
  const [search, setSearch] = useState('');
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const { theme } = useTheme();

  const fuse = useMemo(() => {
    const flatSkills = skillCategories.flatMap(category =>
      category.skills.map(skill => ({
        category: category.title,
        skill
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

    const grouped: Record<string, string[]> = {};
    results.forEach(({ item }) => {
      if (!grouped[item.category]) grouped[item.category] = [];
      grouped[item.category].push(item.skill);
    });

    return Object.entries(grouped).map(([title, skills]) => ({ title, skills }));
  }, [search, fuse]);

  const toggle = (title: string) => {
    setOpenCategory(openCategory === title ? null : title);
  };

  return (
    <section className="space-y-6">
      <h2 className={`text-3xl font-bold ${theme.accent}`}>Core Technical Skills</h2>

      {/* Search Input */}
      <div className="relative max-w-md">
        <input
          type="text"
          placeholder="Search skills…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className={`w-full ${theme.nav} ${theme.text} placeholder-gray-500 border ${theme.border} rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-emerald-500`}
        />
        <Search className="absolute right-3 top-3 text-gray-500 pointer-events-none" size={20} />
      </div>

      {/* Skills Table */}
      <div className={`divide-y ${theme.border} rounded-xl border ${theme.border} overflow-hidden`}>
        {filtered.map((cat, idx) => (
          <div key={idx}>
            <button
              onClick={() => toggle(cat.title)}
              className={`w-full text-left px-6 py-4 ${theme.nav} hover:bg-gray-700 transition flex items-center justify-between`}
            >
              <span className={`text-lg font-medium ${theme.accent}`}>{cat.title}</span>
              {openCategory === cat.title ? (
                <ChevronDown className={`${theme.accent}`} />
              ) : (
                <ChevronRight className={`${theme.accent}`} />
              )}
            </button>
            {openCategory === cat.title && (
              <div className={`px-6 py-4 ${theme.bg} ${theme.text} grid sm:grid-cols-2 md:grid-cols-3 gap-3`}>
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`bg-gray-700/60 px-3 py-1 rounded-full text-sm hover:bg-emerald-600 hover:text-white transition whitespace-nowrap`}
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
            No skills found. Try a different keyword.
          </div>
        )}
      </div>
    </section>
  );
}

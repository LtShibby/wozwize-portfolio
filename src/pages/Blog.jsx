import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import PageTransition from '../components/PageTransition';
import BlogCard from '../components/BlogCard';

function Blog() {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'software', name: 'Software Dev' },
    { id: 'leadership', name: 'Tech Leadership' },
    { id: 'tutorials', name: 'Tutorials' }
  ];

  const posts = [
    {
      title: "Building Scalable AI Solutions with RAG",
      excerpt: "Learn how to implement Retrieval Augmented Generation for enterprise applications.",
      date: "2024-03-15",
      category: "ai",
      slug: "building-scalable-ai-solutions",
      image: "/blog/rag-systems.jpg"
    },
    {
      title: "Modern Software Architecture Patterns",
      excerpt: "Exploring effective patterns for building maintainable applications.",
      date: "2024-03-10",
      category: "software",
      slug: "software-architecture-patterns",
      image: "/blog/architecture.jpg"
    },
    {
      title: "Leading Technical Teams Effectively",
      excerpt: "Strategies for managing and growing high-performing development teams.",
      date: "2024-03-05",
      category: "leadership",
      slug: "leading-technical-teams",
      image: "/blog/leadership.jpg"
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-5rem)] p-8 pt-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Blog Header */}
          <section>
            <h2 className={`${theme.text} text-3xl md:text-4xl font-bold mb-8 text-center font-['Fira_Code']`}>
              Tech Insights 
            </h2>
            <div className={`${theme.nav} p-6 rounded-lg shadow-lg text-center mb-8`}>
              <p className={`${theme.text} text-lg leading-relaxed`}>
                Exploring AI, software development, and technical leadership. 
                Stay updated with the latest insights and best practices.
              </p>
            </div>
          </section>

          {/* Category Filter */}
          <section className="flex justify-center gap-4 flex-wrap">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`${theme.text} px-4 py-2 rounded transition-all
                  ${selectedCategory === category.id 
                    ? theme.button 
                    : `${theme.nav} hover:opacity-80`
                  }`}
              >
                {category.name}
              </button>
            ))}
          </section>

          {/* Blog Posts Grid */}
          <section>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          </section>

          {/* Newsletter CTA */}
          <section>
            <div className={`${theme.nav} p-8 rounded-lg shadow-lg text-center`}>
              <h3 className={`${theme.text} text-2xl font-bold mb-4`}>Never Miss an Update</h3>
              <p className={`${theme.text} mb-6`}>
                Subscribe to our newsletter for weekly insights and tutorials.
              </p>
              <a 
                href="https://wozwize.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${theme.button} px-6 py-3 rounded inline-block hover:opacity-90 transition-all`}
              >
                Subscribe to Newsletter
              </a>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}

export default Blog; 
import { useParams, Navigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import PageTransition from '../components/PageTransition';
import BlogPost from '../components/BlogPost';

// This would typically come from an API or CMS
const blogPosts = {
  'building-scalable-ai-solutions': {
    title: "Building Scalable AI Solutions with RAG",
    subtitle: "A comprehensive guide to implementing Retrieval Augmented Generation",
    excerpt: "Learn how to implement Retrieval Augmented Generation for enterprise applications.",
    date: "2024-03-15",
    category: "ai",
    tags: ["AI", "RAG", "LLMs", "Enterprise"],
    image: "/blog/rag-systems.jpg",
    content: (
      <>
        <p>
          Retrieval Augmented Generation (RAG) is revolutionizing how we build AI applications. 
          In this comprehensive guide, we'll explore how to implement RAG systems that scale.
        </p>
        <h2>Understanding RAG Architecture</h2>
        <p>
          RAG combines the power of large language models with custom knowledge bases, 
          enabling more accurate and contextual responses.
        </p>
        {/* Add more content sections */}
      </>
    )
  },
  // Add more blog posts...
};

function BlogPostPage() {
  const { theme } = useTheme();
  const { slug } = useParams();
  
  const post = blogPosts[slug];

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-5rem)] p-8 pt-20">
        <div className="max-w-4xl mx-auto">
          <BlogPost post={post} />
        </div>
      </div>
    </PageTransition>
  );
}

export default BlogPostPage; 
import { useParams, Navigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import PageTransition from '../components/PageTransition';
import BlogPost from '../components/BlogPost';
import { useBlog } from '../components/BlogProvider';
import { useEffect } from 'react';

function BlogPostPage() {
  const { theme } = useTheme();
  const { slug } = useParams();
  const { posts } = useBlog();

  const post = posts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

import { useTheme } from '../../context/ThemeContext.jsx';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function BlogPost({ post }) {
  const { theme } = useTheme();

  return (
    <article className="space-y-8">
      {/* Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          {post.category && (
            <span className={`${theme.text} text-sm px-2 py-1 rounded bg-black bg-opacity-10`}>
              {post.category}
            </span>
          )}
          <span className={`${theme.text} text-sm opacity-75`}>
            {new Date(post.date).toLocaleDateString()}
          </span>
        </div>
        <h1 className={`${theme.text} text-3xl md:text-4xl font-bold`}>
          {post.title}
        </h1>
        {post.subtitle && (
          <p className={`${theme.text} text-xl opacity-75`}>
            {post.subtitle}
          </p>
        )}
      </header>

      {/* Featured Image */}
      {post.image && (
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>
      )}

      {/* Content */}
      <div
         className="prose prose-invert prose-lg max-w-none text-white"
      >
        {post.content}
      </div>


      {/* Tags */}
      {post.tags && (
        <div className="flex gap-2 flex-wrap">
          {post.tags.map((tag, index) => (
            <span 
              key={index}
              className={`${theme.text} text-sm px-2 py-1 rounded bg-black bg-opacity-10`}
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Author Info */}
      <div className={`${theme.nav} p-6 rounded-lg shadow-lg`}>
        <div className="flex items-center gap-4">
        <div
          className="w-16 h-16 rounded-full bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/matt-headshot.jpg)' }}
        />
          <div>
            <h3 className={`${theme.text} font-bold`}>Matthew Wozniak</h3>
            <p className={`${theme.text} opacity-75`}>
              Director of Digital Solutions at WozWize, AI Developer & Tech Consultant
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex justify-between items-center pt-8 border-t border-current border-opacity-10">
        <Link 
          to="/blog"
          className={`${theme.button} px-4 py-2 rounded hover:opacity-90 transition-all`}
        >
          ← Back to Blog
        </Link>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://wozwize.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${theme.nav} border border-current px-4 py-2 rounded ${theme.text} hover:opacity-90 transition-all`}
        >
          Subscribe to Newsletter
        </motion.a>
      </nav>
    </article>
  );
}

export default BlogPost; 
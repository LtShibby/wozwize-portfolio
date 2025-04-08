import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext.jsx';
import { Link } from 'react-router-dom';

function BlogCard({ post, index }) {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`${theme.nav} p-6 rounded-lg shadow-lg`}
    >
      {post.image && (
        <div className="mb-4 w-full h-48 rounded-lg overflow-hidden relative">
          <img 
            src={post.image} 
            alt={post.title}
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>
      )}
      <div className="space-y-2">
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
        <h3 className={`${theme.text} text-xl font-bold`}>{post.title}</h3>
        <p className={`${theme.text} opacity-75 line-clamp-2`}>{post.excerpt}</p>
        <Link 
          to={`/blog/${post.slug}`}
          className={`${theme.button} mt-4 px-4 py-2 rounded inline-block hover:opacity-90 transition-all`}
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
}

export default BlogCard; 
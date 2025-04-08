import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext.jsx';

export default function SubstackFeed() {
  const { theme } = useTheme();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Use RSS2JSON API as a CORS proxy
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://wozwize.substack.com/feed`
        );
        const data = await response.json();
        
        if (data.status === 'ok') {
          setPosts(data.items.map(item => ({
            title: item.title,
            link: item.link,
            pubDate: new Date(item.pubDate),
            description: item.description
          })));
        }
      } catch (error) {
        console.error('Error fetching Substack posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className={`${theme.nav} p-6 rounded-lg shadow-lg`}>
      <h3 className={`${theme.text} text-xl font-bold mb-4 font-['Fira_Code']`}>
        Latest from WozWize
      </h3>
      
      {loading ? (
        <div className="animate-pulse space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-24 bg-gray-200 rounded" />
          ))}
        </div>
      ) : (
        <div className="divide-y divide-current divide-opacity-20">
          {posts.slice(0, 3).map((post, index) => (
            <motion.article
              key={post.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`py-6 ${index === 0 ? 'pt-0' : ''} ${index === posts.length - 1 ? 'pb-0' : ''}`}
            >
              <div className="space-y-2">
                <h4 className={`${theme.text} font-bold`}>
                  <a 
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    {post.title}
                  </a>
                </h4>
                <p className={`${theme.text} opacity-75 text-sm`}>
                  {new Date(post.pubDate).toLocaleDateString()}
                </p>
                <p className={`${theme.text} opacity-90 line-clamp-2`}>
                  {post.description.replace(/<[^>]*>/g, '')}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      )}
      
      <a
        href="https://wozwize.substack.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`${theme.button} mt-6 px-4 py-2 rounded inline-block hover:opacity-90 transition-all`}
      >
        Subscribe to WozWize
      </a>
    </div>
  );
} 
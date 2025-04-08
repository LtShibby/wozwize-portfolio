import { createContext, useContext, useState } from 'react';
import blogPosts from '../data/blogPosts';

const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts
    .filter(post => selectedCategory === 'all' || post.category === selectedCategory)
    .filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <BlogContext.Provider
      value={{
        posts: blogPosts,
        filteredPosts,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
      }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  return useContext(BlogContext);
}
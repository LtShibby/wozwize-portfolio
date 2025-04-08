import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../../content/blogPosts';

const RelatedPosts = ({ slug }) => {
  const currentPost = blogPosts.find((post) => post.slug === slug);

  if (!currentPost) return null;

  const related = blogPosts
    .filter(
      (post) =>
        post.slug !== slug &&
        post.tags.some((tag) => currentPost.tags.includes(tag))
    )
    .slice(0, 9);

  if (related.length === 0) return null;

  return (
    <div className="mt-16 border-t pt-8">
      <h3 className="text-xl font-bold mb-4">Related Posts</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {related.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`}>
            <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-contain"
              />
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-2">{post.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
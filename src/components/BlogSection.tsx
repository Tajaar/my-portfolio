import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import { BlogPost } from '../types';
import { Newspaper, Loader } from 'lucide-react';
import AnimateOnScroll from '../utils/AnimateOnScroll';
import Button from './Button';

const BlogSection: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMediumPosts = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const rssUrl = 'https://medium.com/feed/@tajaar07';
      const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
      const data = await res.json();

      if (!data.items) throw new Error('No posts found');

      const posts: BlogPost[] = data.items.slice(0, 6).map((item: any) => {
        // Fallback: extract image from HTML content
        let imageMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
        let imageUrl = imageMatch ? imageMatch[1] : 'https://via.placeholder.com/800x400?text=No+Image';

        return {
          id: item.guid,
          title: item.title,
          excerpt: item.description.replace(/<[^>]+>/g, '').substring(0, 160) + '...',
          publishDate: new Date(item.pubDate),
          url: item.link,
          coverImage: item.thumbnail || imageUrl,
        };
      });

      setPosts(posts);
    } catch (err) {
      console.error('Error fetching blog posts:', err);
      setError('Failed to load blog posts. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMediumPosts();
  }, []);

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-dark-100 to-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="animate-fade-in" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="bg-gradient-to-r from-neon-gold to-neon-purple bg-clip-text text-transparent">
              Blog
            </span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-neon-gold to-neon-purple mx-auto"></div>
          <p className="mt-4 text-xl text-gray-300">
            Thoughts, insights, and tutorials from my experiences
          </p>
        </AnimateOnScroll>

        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <Loader className="h-10 w-10 text-neon-gold animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-400 mb-4">{error}</p>
            <Button
              onClick={fetchMediumPosts}
              variant="primary"
              className="bg-neon-gold hover:bg-neon-gold-dark text-dark hover:shadow-neon-gold"
            >
              Try Again
            </Button>
          </div>
        )}

        {!isLoading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
            
            <AnimateOnScroll animation="animate-fade-in" className="text-center mt-12">
              <a
                href="https://medium.com/@tajaar07"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-neon-gold text-neon-gold font-medium rounded-lg hover:bg-neon-gold/10 hover:shadow-neon-gold transition-all duration-300 group"
              >
                <Newspaper className="mr-2 h-5 w-5 group-hover:animate-bounce-small" />
                View All Articles
              </a>
            </AnimateOnScroll>
          </>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { BlogPost } from '../types';
import Card from './Card';
import AnimateOnScroll from '../utils/AnimateOnScroll';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(post.publishDate);

  return (
    <AnimateOnScroll animation="animate-fade-in" delay={index * 100} className="h-full">
      <Card className="flex flex-col h-full border-2 border-transparent hover:border-neon-gold/50 group transition-all duration-300">
        {/* Image */}
        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
          <img
            src={post.coverImage}
            alt={`${post.title} cover`}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-300/90 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 w-full p-4">
            <span className="inline-block text-sm font-medium text-neon-gold bg-dark-300/80 rounded-full px-3 py-1 backdrop-blur-sm">
              {formattedDate}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6 bg-dark-300/60 backdrop-blur-sm">
          {/* Title (fixed height) */}
          <h3 className="text-xl font-bold text-white group-hover:text-neon-gold transition-colors duration-300 mb-3 h-[3.5rem] line-clamp-2">
            {post.title}
          </h3>

          {/* Description (fixed height) */}
          <p className="text-gray-300 mb-4 h-[4.5rem] line-clamp-3 group-hover:text-white transition-colors">
            {post.excerpt}
          </p>

          {/* Link (sticks to bottom) */}
          <div className="mt-auto">
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-neon-gold transition-all duration-300 group"
            >
              Read Article
              <ExternalLink className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </Card>
    </AnimateOnScroll>
  );
};

export default BlogCard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard';

// Extract first image from the blog HTML
const extractImageFromContent = (htmlContent) => {
  const match = htmlContent.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : null;
};

// Extract only the first <p><em>...</em></p> as subtitle
const extractSubtitle = (htmlContent) => {
  // Try to find <p><em>...</em></p> first
  const emMatch = htmlContent.match(/<p><em>(.*?)<\/em><\/p>/);
  if (emMatch) {
    return emMatch[1].trim();
  }

  // If not found, try to find first normal <p>...</p>
  const pMatch = htmlContent.match(/<p>(.*?)<\/p>/);
  if (pMatch) {
    // Remove any inner HTML tags (if present)
    const textOnly = pMatch[1].replace(/<[^>]+>/g, '');
    return textOnly.trim();
  }

  // If nothing found, return empty string
  return '';
};


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const mediumRssUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tajaar07';
        const response = await axios.get(mediumRssUrl);
        const blogItems = response.data.items;

        const enrichedBlogs = blogItems.map((blog) => ({
          title: blog.title,
          date: blog.pubDate,
          image: blog.thumbnail || extractImageFromContent(blog.content),
          subtitle: extractSubtitle(blog.content),
          url: blog.link,
        }));

        setBlogs(enrichedBlogs);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch Medium blogs');
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">
        My Medium Blog Posts
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {loading ? (
          <p className="text-center text-lg text-gray-600">Loading blogs...</p>
        ) : error ? (
          <p className="text-center text-lg text-red-600">{error}</p>
        ) : (
          blogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              subtitle={blog.subtitle}
              date={blog.date}
              image={blog.image}
              url={blog.url}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Blogs;

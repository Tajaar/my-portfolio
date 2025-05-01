// src/pages/Blogs.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../components/BackgroundAnimation';

const extractImageFromContent = (htmlContent) => {
  const match = htmlContent.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : null;
};

const extractSubtitle = (htmlContent) => {
  const emMatch = htmlContent.match(/<p><em>(.*?)<\/em><\/p>/);
  if (emMatch) return emMatch[1].trim();
  const pMatch = htmlContent.match(/<p>(.*?)<\/p>/);
  return pMatch ? pMatch[1].replace(/<[^>]+>/g, '').trim() : '';
};

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const rssURL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tajaar07';
        const response = await axios.get(rssURL);
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
      } catch {
        setError('Failed to fetch Medium blogs');
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative z-0">
      <Background />
      <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mb-12 drop-shadow-md">
          My Blogs
        </h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
      <Footer />
    </>
  );
};

export default Blogs;

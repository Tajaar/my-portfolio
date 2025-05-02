import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../components/BackgroundAnimation';
import Loader from '../components/Loader'; // Import the Loader component

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
          
          {/* Title & Description */}
          <div className="text-center px-4 pt-8 pb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-purple-400 drop-shadow-[0_0_8px_#9D00FF]">
              My Blogs
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Some of the wisdom that I share through blogs.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <Loader /> // Display the custom loader here
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

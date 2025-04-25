import React from 'react';

const BlogCard = ({ title, subtitle, date, image, url }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4 flex flex-col justify-between h-[240px]">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
        <div className="mt-auto flex justify-between items-center text-sm text-gray-500">
          <span>{new Date(date).toLocaleDateString()}</span>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline ml-2"
          >
            Read on Medium
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ name, readme, url }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 overflow-hidden h-full flex flex-col">
      <h2 className="text-xl font-bold mb-2 text-purple-700">{name}</h2>
      <div
        className="text-sm text-gray-600 mb-4 overflow-hidden"
        dangerouslySetInnerHTML={{ __html: readme.slice(0, 400) + '...' }} // Shortened
      />
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline mt-auto"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;

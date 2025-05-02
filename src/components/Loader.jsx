import React from 'react';
import '../styles/Loader.css';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="relative">
        <div className="spinner"></div>
        <div className="spinner1 absolute top-0 left-0 flex items-center justify-center text-white font-semibold text-sm">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loader;

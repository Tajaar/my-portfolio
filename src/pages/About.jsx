import React from 'react';

function About() {
  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="flex flex-col sm:flex-row">
        <img
          src="/path/to/your/photo.jpg"
          alt="Your Name"
          className="w-32 h-32 rounded-full mr-6 mb-4 sm:mb-0"
        />
        <div>
          <p className="text-lg mb-4">
            Hi, I'm [Your Name], a passionate [Your Profession] based in [Location]. I specialize in [Your Skills]. 
            I love building [type of work you do] and solving challenging problems with modern technologies.
          </p>
          <p className="text-lg mb-4">
            I'm always eager to learn new things and collaborate with people on innovative projects. Feel free to check out my 
            <a href="/path/to/your/cv.pdf" className="text-blue-600 hover:underline"> CV</a> for more details!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

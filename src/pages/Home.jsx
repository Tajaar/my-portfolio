import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFolderOpen, FaBlog, FaUserAlt, FaEnvelopeOpen } from 'react-icons/fa';
import Button from '../components/Button';
import '../styles/Home.css'; // Make sure this matches your path

const Home = () => {
  const navigate = useNavigate();

  const buttons = [
    {
      label: 'Projects',
      to: '/projects',
      icon: <FaFolderOpen />,
      positionClass: 'button-projects',
    },
    {
      label: 'Blogs',
      to: '/blog',
      icon: <FaBlog />,
      positionClass: 'button-blogs',
    },
    {
      label: 'About',
      to: '/about',
      icon: <FaUserAlt />,
      positionClass: 'button-about',
    },
    {
      label: 'Contact',
      to: '/contact',
      icon: <FaEnvelopeOpen />,
      positionClass: 'button-contact',
    },
  ];

  return (
    <div className="home-container">
      {/* Left Side - Logo and Name */}
      <div className="left-side">
        <div className="logo-placeholder">
          {/* Placeholder for Logo */}
          <div className="logo">Logo</div>
        </div>
        <div className="name-container">
          <h1 className="name">Your Name</h1>
        </div>
      </div>

      {/* Right Side - About Me Section */}
      <div className="right-side">
        <div className="about-container">
          <div className="about-card">
            <h2>About Me</h2>
            <p><strong>Languages Known:</strong> Python, Java, SQL</p>
            <p><strong>Education:</strong> Bachelor's in Computer Science</p>
            <p><strong>Certifications:</strong> Data Science, AI/ML, etc.</p>
            <p><strong>Skills:</strong> AI, Machine Learning, Data Analysis</p>
          </div>
        </div>

        {/* Floating Buttons */}
        <div className="floating-buttons">
          {buttons.map((btn, index) => (
            <div key={index} className={`floating-button ${btn.positionClass}`}>
              <Button
                label={btn.label}
                onClick={() => navigate(btn.to)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

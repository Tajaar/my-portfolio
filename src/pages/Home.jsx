import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFolderOpen, FaBlog, FaUserAlt, FaEnvelopeOpen } from 'react-icons/fa';
import Button from '../components/Button';
import Background from '../components/BackgroundAnimation';  // Import Background component
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const buttons = [
    { label: 'Projects', to: '/projects', icon: <FaFolderOpen />, positionClass: 'button-projects' },
    { label: 'Blogs', to: '/blog', icon: <FaBlog />, positionClass: 'button-blogs' },
    { label: 'About', to: '/about', icon: <FaUserAlt />, positionClass: 'button-about' },
    { label: 'Contact', to: '/contact', icon: <FaEnvelopeOpen />, positionClass: 'button-contact' },
  ];

  const name = 'TARUN';  // Replace with your name

  return (
    <>
      <Background />
      <div className="home-container relative z-10">
        <div className="left-side">
          <div className="name-container">
            <h1 className="name">
              {name.split('').map((letter, index) => (
                <span key={index} className={`letter`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {letter}
                </span>
              ))}
            </h1>
          </div>
        </div>

        <div className="right-side">
          <div className="about-card">
            <h2>About Me</h2>
            <p><strong>Languages Known:</strong> Python, Java, SQL</p>
            <p><strong>Education:</strong> Bachelor's in Computer Science</p>
            <p><strong>Certifications:</strong> Data Science, AI/ML, etc.</p>
            <p><strong>Skills:</strong> AI, Machine Learning, Data Analysis</p>
          </div>

          <div className="floating-buttons">
            {buttons.map((btn, index) => (
              <div key={index} className={`floating-button ${btn.positionClass}`}>
                <Button label={btn.label} onClick={() => navigate(btn.to)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

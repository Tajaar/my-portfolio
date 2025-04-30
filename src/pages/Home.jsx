import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFolderOpen, FaBlog, FaUserAlt } from 'react-icons/fa';
import Button from '../components/Button';
import Background from '../components/BackgroundAnimation';
import '../styles/Home.css';
import '../styles/HeroName.css'; // Import the animation styles

const Home = () => {
  const navigate = useNavigate();

  const buttons = [
    { label: 'Projects', to: '/projects', icon: <FaFolderOpen />, positionClass: 'button-projects' },
    { label: 'Blogs', to: '/blog', icon: <FaBlog />, positionClass: 'button-blogs' },
    { label: 'About', to: '/about', icon: <FaUserAlt />, positionClass: 'button-about' },
  ];

  return (
    <>
      <Background />
      <div className="home-container">
        <div className="left-side">
          <div className="name-container">
            <span className="key">T</span>
            <span className="key">A</span>
            <span className="key">R</span>
            <span className="key">U</span>
            <span className="key">N</span>
          </div>
        </div>

        <div className="right-side">
          <div class="intro-paragraph">
              <p>Welcome to my portfolio! I'm Tarun, a passionate Data Scientist and AI enthusiast. Explore my work and projects, and feel free to get in touch.</p>
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

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFolderOpen, FaBlog, FaUserAlt } from 'react-icons/fa';
import Button from '../components/Button';
import Background from '../components/BackgroundAnimation';
import Footer from '../components/Footer';
import '../styles/Home.css';
import '../styles/HeroName.css';

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
          <div className="button-row">
            {buttons.map((btn, index) => (
              <Button key={index} label={btn.label} onClick={() => navigate(btn.to)} />
            ))}
          </div>
        </div>

        <div className="low-container">
          <div className="scroll-indicator">
            <div className="scroll-arrow-text">
              <div className="scroll-arrow">
                <svg
                  className="arrow-icon"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 16L6 10H18L12 16Z" fill="currentColor" />
                </svg>
              </div>
              <span className="scroll-text">Scroll To Contact ME!</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

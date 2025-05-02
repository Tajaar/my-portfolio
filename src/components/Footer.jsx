// src/components/Footer.jsx
import React from 'react';
import ContactForm from './ContactForm';
import '../styles/Footer.css';

function Footer() {
  return (
    <div style={{ backgroundColor: '#0D0B1F', position: 'relative', zIndex: 10 }}>
      <footer className="footer-section py-10 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* 3D Social Buttons */}
          <div className="flex justify-center">
            <div className="container-footer">
              <a href="https://github.com/tajaar" target="_blank" rel="noopener noreferrer" className="btn btn--1">
                <div className="content">
                  <div className="front">
                    <div className="border"></div>
                    <i className="fab fa-github"></i>
                  </div>
                  <div className="back">
                    <div className="border"></div>
                    <p>you know GitHub. Right?</p>
                  </div>
                </div>
              </a>
              <a href="https://linkedin.com/in/Tajaar" target="_blank" rel="noopener noreferrer" className="btn btn--2">
                <div className="content">
                  <div className="front">
                    <div className="border"></div>
                    <i className="fab fa-linkedin"></i>
                  </div>
                  <div className="back">
                    <div className="border"></div>
                    <p>LinkedIn. duh....</p>
                  </div>
                </div>
              </a>
              <a href="https://medium.com/@tajaar07" target="_blank" rel="noopener noreferrer" className="btn btn--4">
                <div className="content">
                  <div className="front">
                    <div className="border"></div>
                    <i className="fab fa-medium"></i>
                  </div>
                  <div className="back">
                    <div className="border"></div>
                    <p>Medium</p>
                  </div>
                </div>
              </a>
              <a href="https://instagram.com/_tarun_a" target="_blank" rel="noopener noreferrer" className="btn btn--5">
                <div className="content">
                  <div className="front">
                    <div className="border"></div>
                    <i className="fab fa-instagram"></i>
                  </div>
                  <div className="back">
                    <div className="border"></div>
                    <p>I don't use this much</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          &copy; 2025 Tarun's Portfolio. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;

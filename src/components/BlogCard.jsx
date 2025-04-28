// src/components/BlogCard.jsx
import React from 'react';
import styled from 'styled-components';

const BlogCard = ({ title, subtitle, date, image, url }) => {
  return (
    <StyledWrapper>
      <a href={url} target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="card-wrapper">
          <div className="glow"></div>
          <div className="card">
            {image && (
              <div className="image-wrapper">
                <img
                  src={image}
                  alt={title}
                  className="blog-image"
                />
              </div>
            )}
            <div className="card-content">
              <h2 className="title">{title}</h2>
              {subtitle && <p className="subtitle">{subtitle}</p>}
              <div className="footer">
                <span>{new Date(date).toLocaleDateString()}</span>
                <button className="visit-button">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card-link {
    text-decoration: none;
    color: inherit;
  }

  .card-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    height: 430px;
    margin: 1rem;
  }

  .glow {
    position: absolute;
    width: 360px;
    height: 470px;
    border-radius: 20px;
    z-index: 0;
    opacity: 0;
    background: linear-gradient(45deg, #e81cff 0%, #40c9ff 100%);
    transition: all 0.4s ease;
    pointer-events: none;
  }

  .card-wrapper:hover .glow {
    opacity: 0.7;
    animation: rotateGlow 4s linear infinite;
    filter: blur(30px);
  }

  @keyframes rotateGlow {
    0% {
      transform: rotate(0deg) scale(1.2);
    }
    100% {
      transform: rotate(360deg) scale(1.2);
    }
  }

  .card {
    position: relative;
    background-color: #ffffff;
    border-radius: 16px;
    overflow: hidden;
    width: 320px;
    height: 430px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    z-index: 1;
    transition: transform 0.3s ease;
    cursor: pointer;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .image-wrapper {
    width: 100%;
    height: 48%;
    overflow: hidden;
  }

  .blog-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .card:hover .blog-image {
    transform: scale(1.1);
  }

  .card-content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
  }

  .title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #333;
  }

  .subtitle {
    font-size: 0.9rem;
    color: #666;
    margin-top: 8px;
  }

  .footer {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    color: #777;
  }

  .visit-button {
    background: linear-gradient(45deg, #6a11cb 0%, #2575fc 100%);
    border: none;
    border-radius: 9999px;
    color: white;
    padding: 8px 16px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease;
  }

  .visit-button:hover {
    background: linear-gradient(45deg, #2575fc 0%, #6a11cb 100%);
    transform: scale(1.1);
  }
`;

export default BlogCard;

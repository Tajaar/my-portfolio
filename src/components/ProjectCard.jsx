// src/components/ProjectCard.jsx
import React from 'react';
import styled from 'styled-components';

const ProjectCard = ({ name, readme, url }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <h2>{name}</h2>
        <div
          className="readme-content"
          dangerouslySetInnerHTML={{ __html: readme.slice(0, 400) + '...' }}
        />
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          View on GitHub
        </a>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 300px;
    height: 400px;
    background: #07182E;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 20px;
    overflow: hidden;
    border-radius: 20px;
    box-sizing: border-box;
    text-align: center;
    color: white;
  }

  .card h2 {
    z-index: 1;
    color: white;
    font-size: 1.8em;
    margin-bottom: 10px;
  }

  .readme-content {
    z-index: 1;
    font-size: 0.9em;
    color: #cfcfcf;
    margin-bottom: auto;
    overflow-y: auto;
    max-height: 180px;
    padding: 5px;
  }

  .github-link {
    z-index: 1;
    margin-top: 10px;
    color: #00bfff;
    text-decoration: underline;
    font-weight: bold;
  }

  .card::before {
    content: '';
    position: absolute;
    width: 100px;
    background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
    height: 130%;
    animation: rotBGimg 3s linear infinite;
    transition: all 0.2s linear;
  }

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .card::after {
    content: '';
    position: absolute;
    background: #07182E;
    inset: 5px;
    border-radius: 15px;
  }  
`;

export default ProjectCard;


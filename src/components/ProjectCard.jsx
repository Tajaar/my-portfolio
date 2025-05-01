import React from 'react';
import styled from 'styled-components';

const ProjectCard = ({ title, description, domains, imageUrl, githubUrl }) => {
  return (
    <Card>
      <ImageWrapper>
        <Image src={imageUrl} alt={title} />
        <ImageFade />
      </ImageWrapper>
      <Content>
        <Title>{title}</Title>
        <Tags>
          {domains.map((domain, i) => (
            <Tag key={i}>{domain}</Tag>
          ))}
        </Tags>
        <Description>{description}</Description>
        <Button href={githubUrl} target="_blank" rel="noopener noreferrer">
          View Project
        </Button>
      </Content>
    </Card>
  );
};

const Card = styled.div`
  width: 360px;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  background: #0e1320;
  box-shadow: 0 0 0 transparent;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 0 16px rgba(142, 45, 226, 0.6);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageFade = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background: linear-gradient(to bottom, transparent, #0e1320);
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 8px;
  line-height: 1.3;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
`;

const Tag = styled.span`
  background: #8e2de2;
  color: #fff;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 0.75rem;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #cfcfcf;
  flex: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

const Button = styled.a`
  margin-top: 12px;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  background: linear-gradient(to right, #8e2de2, #4a00e0);
  color: white;
  box-shadow: 0 0 10px rgba(142, 45, 226, 0.4);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #a045ff, #5f00ff);
    box-shadow: 0 0 16px rgba(142, 45, 226, 0.8);
  }
`;

export default ProjectCard;

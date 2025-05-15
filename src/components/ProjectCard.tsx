import React, { useRef, useState } from 'react';
import { ExternalLink, Github as GitHub } from 'lucide-react';
import { Project } from '../types';
import Card from './Card';
import AnimateOnScroll from '../utils/AnimateOnScroll';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const angleX = (mouseY - centerY) / 25;
    const angleY = (centerX - mouseX) / 25;
    setTransform(`perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  };

  return (
    <AnimateOnScroll animation="animate-fade-in" delay={index * 100} className="h-full">
      <div
        ref={cardRef}
        className="h-full transform transition-transform duration-200 ease-out"
        style={{ transform }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Card className="flex flex-col h-full border-2 border-transparent hover:border-neon-purple/50 group transition-all duration-300">
          {/* Cover Image */}
          <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
            <img
              src={project.coverImage}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-6 bg-dark-300/60 backdrop-blur-sm relative z-10">
            {/* Title */}
            <h3 className="text-xl font-bold text-white group-hover:text-neon-gold transition-colors duration-300 mb-2 h-[3.5rem] line-clamp-2">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 mb-4 h-[4.5rem] line-clamp-3 group-hover:text-white transition-colors">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.domains.map((domain, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium bg-neon-purple text-white rounded-full transition-all duration-300 group-hover:bg-neon-purple-light group-hover:shadow-neon-sm"
                >
                  {domain}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-auto flex gap-4">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-neon-gold transition-all duration-300 group"
              >
                <GitHub className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                View Code
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-neon-gold transition-all duration-300 group"
                >
                  <ExternalLink className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </Card>
      </div>
    </AnimateOnScroll>
  );
};

export default ProjectCard;

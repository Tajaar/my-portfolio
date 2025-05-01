// src/pages/Projects.jsx
import React, { useEffect, useState } from 'react';
import { fetchProjectDataFromGitHub } from '../utils/FetchProjects';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import Background from '../components/BackgroundAnimation';
import pkg from '../../package.json'; // importing customProjects list
import Navbar from '../components/Navbar';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const dashboardUrl = "https://github.com/Tajaar";

  useEffect(() => {
    const loadProjects = async () => {
      const projectList = pkg.projects;
      const data = await fetchProjectDataFromGitHub(dashboardUrl, projectList);
      setProjects(data);
    };
    loadProjects();
  }, []);

  return (
  <>
    <div className="min-h-screen flex flex-col relative z-0">
      <Background />
      <Navbar />
      <main className="flex-grow">
        <div className="flex flex-wrap justify-center gap-8 px-4 py-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              domains={project.domains}
              imageUrl={project.coverImage}
              githubUrl={project.githubLink}
            />
          ))}
        </div>
      </main>
      
    </div>
    <Footer />
  </>
  );
};
export default Projects;

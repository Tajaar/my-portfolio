import React, { useEffect, useState } from 'react';
import { fetchProjectDataFromGitHub } from '../utils/FetchProjects';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import Background from '../components/BackgroundAnimation';
import pkg from '../../package.json'; // importing customProjects list
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';

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
        
        {/* Loader will appear as a full-screen overlay while projects are being loaded */}
        {projects.length === 0 && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0e1320]">
            <Loader />
          </div>
        )}

        <main className="flex-grow">
          {/* Title and Description */}
          <div className="text-center px-4 pt-16 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-400 drop-shadow-[0_0_8px_#9D00FF]">
              My Projects
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Here lies my work, which is pretty self-explanatory.
            </p>
          </div>

          {/* Project Cards */}
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

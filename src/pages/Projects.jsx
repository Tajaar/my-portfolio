import React, { useEffect, useState } from 'react';
import { fetchCustomProjects } from '../api/github';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await fetchCustomProjects();
      setProjects(data);
    };
    loadProjects();
  }, []);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 py-8">
      {projects.map((project) => (
        <ProjectCard
          key={project.name}
          name={project.name}
          readme={project.readme}
          url={project.url}
        />
      ))}
    </div>
  );
};

export default Projects;

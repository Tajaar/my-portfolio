import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../types';
import { Github as GitHub, Loader } from 'lucide-react';
import AnimateOnScroll from '../utils/AnimateOnScroll';
import Button from './Button';

const GITHUB_USERNAME = 'Tajaar';
const REPO_NAMES = ['EDA_GPT', 'Rag-Chat', 'Lung_Nodule_Detection_FRCNN_FPR'];

const parsePortfoTxt = (text: string) => {
  const title = text.match(/Project Title:\s*"([^"]+)"/)?.[1] || 'Untitled Project';
  const link = text.match(/Project Link:\s*"([^"]+)"/)?.[1] || '#';
  const description = text.match(/Description:\s*"([^"]+)"/)?.[1] || '';
  const domainsRaw = text.match(/Domains:\s*\[([^\]]+)\]/)?.[1] || '';
  const domains = domainsRaw.split(',').map((d) => d.trim().replace(/["']/g, ''));

  return { title, link, description, domains };
};

const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCoverImageUrl = async (basePath: string): Promise<string | null> => {
    const extensions = ['png', 'jpg', 'jpeg'];

    for (const ext of extensions) {
      const url = `${basePath}/cover.${ext}`;
      const res = await fetch(url, { method: 'HEAD' });
      if (res.ok) return url;
    }

    return null;
  };

  const fetchProjects = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const projectsData = await Promise.all(
        REPO_NAMES.map(async (repoName) => {
          const basePath = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repoName}/main/portfo`;

          const portfoTxtUrl = `${basePath}/portfo.txt`;
          const coverImageUrl = await fetchCoverImageUrl(basePath);

          const response = await fetch(portfoTxtUrl);
          if (!response.ok) throw new Error(`Failed to fetch portfo.txt for ${repoName}`);

          const txt = await response.text();
          const meta = parsePortfoTxt(txt);

          return {
            id: repoName,
            title: meta.title,
            description: meta.description,
            repoUrl: meta.link,
            domains: meta.domains,
            coverImage: coverImageUrl || 'https://via.placeholder.com/800x400?text=No+Image',
          };
        })
      );

      setProjects(projectsData);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError('Failed to load projects. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-dark to-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="animate-fade-in" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="bg-gradient-to-r from-neon-purple to-neon-gold bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-gold mx-auto"></div>
          <p className="mt-4 text-xl text-gray-300">
            Check out some of my recent work
          </p>
        </AnimateOnScroll>

        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <Loader className="h-10 w-10 text-neon-purple animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-400 mb-4">{error}</p>
            <Button
              onClick={fetchProjects}
              variant="primary"
              className="mt-4"
            >
              Try Again
            </Button>
          </div>
        )}

        {!isLoading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            <AnimateOnScroll animation="animate-fade-in" className="text-center mt-12">
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-neon-purple text-neon-purple font-medium rounded-lg hover:bg-neon-purple/10 hover:shadow-neon-purple transition-all duration-300 group"
              >
                <GitHub className="mr-2 h-5 w-5 group-hover:animate-bounce-small" />
                View All Projects
              </a>
            </AnimateOnScroll>
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
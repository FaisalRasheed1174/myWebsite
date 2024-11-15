import React from 'react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';

interface ProjectsGridProps {
  onGetCode: (projectId: string) => void;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ onGetCode }) => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Featured Projects</h2>
          <p className="mt-4 text-xl text-gray-600">
            Explore some of my recent work and innovations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onGetCode={onGetCode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Star, GitFork, Code2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onGetCode: (projectId: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onGetCode }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="aspect-video mb-4 overflow-hidden rounded-md">
        <img
          src={project.gifUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4 h-12 line-clamp-2">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-gray-600">
            <Star size={16} className="mr-1" />
            <span>{project.stars}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <GitFork size={16} className="mr-1" />
            <span>{project.forks}</span>
          </div>
        </div>
        <button
          onClick={() => onGetCode(project.id)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <Code2 size={16} className="mr-2" />
          Get Code
        </button>
      </div>
    </div>
  );
};
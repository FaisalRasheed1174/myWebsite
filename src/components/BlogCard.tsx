import React from 'react';
import { Clock, ArrowUpRight } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
        <div className="aspect-video relative">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all" />
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              <Clock size={14} className="mr-1" />
              {post.readTime}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center">
            {post.title}
            <ArrowUpRight size={18} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
        </div>
      </div>
    </a>
  );
};
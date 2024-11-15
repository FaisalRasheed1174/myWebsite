import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { blogs } from '../data/blogs';
import { BlogCard } from './BlogCard';

export const BlogSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 3;
  const maxIndex = Math.max(0, blogs.length - slidesToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">Latest Articles</h2>
            <p className="mt-4 text-xl text-gray-600">
              Thoughts, learnings, and insights from my journey
            </p>
          </div>
          
          <a
            href="https://blog.faisal.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            View all articles
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              }}
            >
              {blogs.map((post) => (
                <div
                  key={post.id}
                  className="w-full md:w-1/3 flex-shrink-0 px-4"
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          </div>

          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {currentIndex < maxIndex && (
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a
            href="https://blog.faisal.dev"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            View all articles
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};
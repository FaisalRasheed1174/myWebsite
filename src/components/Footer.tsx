import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Github size={24} />, url: 'https://github.com/faisal', label: 'GitHub', hoverColor: 'hover:text-[#333333]' },
    { icon: <Linkedin size={24} />, url: 'https://linkedin.com/in/faisal', label: 'LinkedIn', hoverColor: 'hover:text-[#0077b5]' },
    { icon: <Twitter size={24} />, url: 'https://twitter.com/faisal', label: 'Twitter', hoverColor: 'hover:text-[#1da1f2]' },
    { icon: <Mail size={24} />, url: 'mailto:faisal@example.com', label: 'Email', hoverColor: 'hover:text-[#ea4335]' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className={`transform hover:scale-110 transition-all ${link.hoverColor}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p>© {new Date().getFullYear()} Faisal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
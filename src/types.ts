export interface Project {
  id: string;
  title: string;
  description: string;
  gifUrl: string;
  tags: string[];
  stars: number;
  forks: number;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  url: string;
}
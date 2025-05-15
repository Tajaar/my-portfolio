export interface Project {
  id: string;
  title: string;
  description: string;
  repoUrl: string;
  liveUrl?: string;
  domains: string[];
  coverImage: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishDate: Date;
  url: string;
  coverImage: string;
}
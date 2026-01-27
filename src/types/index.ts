export interface Project {
  id: string;
  title: string;
  shortName: string;
  description: string;
  tech: string;
  tags: string[];
  categories: string[];
  githubUrl: string;
  demoUrl: string;
  demoLabel?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  title: string;
  period: string;
  description: string;
}

export interface Publication {
  type: string;
  title: string;
  description: string;
  draftUrl?: string;
  repoUrl?: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  url: string;
}

export interface Stat {
  value: number;
  label: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

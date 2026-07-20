export interface BaseContent {
  slug: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface Project extends BaseContent {
  category: string;
  technologies: string[];
}

export interface Article extends BaseContent {
  category: string;
  publishedAt: string;
}

export interface Course extends BaseContent {
  category: string;
  level: string;
  duration: string;
}

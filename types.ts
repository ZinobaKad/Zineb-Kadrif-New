
export interface Project {
  id: string;
  title: string;
  role: string;
  date: string;
  description: string;
  fullDescription?: string;
  reportTitle?: string;
  tags: string[];
  imageUrl: string;
  videoUrl?: string;
  demoUrl?: string;
  layout?: 'slider' | 'report';
  sliderSlides?: {
    imageUrl?: string;
    videoUrl?: string;
    description: string;
    imageSize?: 'small' | 'full';
  }[];
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  category: 'photography' | 'visual-design' | 'visual-narrative';
  description?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  date: string;
  description: string[];
  relatedLinks?: {
    groupName: string;
    links: {
      platform: string;
      url: string;
    }[];
  }[];
  images?: {
    url: string;
    link?: string;
    alt?: string;
  }[];
}

export interface Education {
  institution: string;
  degree: string;
  concentration?: string;
  minor?: string;
  date: string;
  thesis?: {
    title: string;
    description: string;
    link: string;
    date: string;
  };
  capstone?: {
    title: string;
    description: string;
    slides: {
      description: string;
      image?: string;
      video?: string;
      colors?: {
        name: string;
        hex: string;
      }[];
    }[];
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  imageUrl?: string;
}

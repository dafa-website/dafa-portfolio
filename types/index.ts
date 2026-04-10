

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface SocialLink {
  _key?: string;
  platform: string;
  url: string;
}

export interface AboutPreviewCopy {
  headingLineOne?: string;
  headingLineTwo?: string;
  subtitle?: string;
  intro?: string;
  body?: string;
  cta?: string;
}

export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  description: string;
  tags?: string[];
  coverImage?: SanityImage;
  coverImageUrl?: string; 
  images?: SanityImage[];
  imageUrls?: string[];
  videoUrl?: string;
  client?: string;
  year?: string;
  featured: boolean;
}

export interface JobExperience {
  _key?: string;
  role: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
}

export interface About {
  _id: string;
  name: string;
  tagline: string;
  preview?: AboutPreviewCopy;
  bio: string;
  profileImage?: SanityImage;
  profileImageUrl?: string;
  heroVideoUrl?: string;
  socialLinks: SocialLink[];
  experience?: string;
  location?: string;
  jobs?: JobExperience[];
}

export interface SiteSettings {
  _id: string;
  title: string;
  description: string;
  heroVideoUrl?: string;
  heroTagline?: string;
  overviewTitle?: string;
  overviewDescription?: string;
  overviewVideoUrl?: string;
}



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

export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  description: string;
  coverImage?: SanityImage;
  coverImageUrl?: string; 
  images?: SanityImage[];
  imageUrls?: string[];
  videoUrl?: string;
  client?: string;
  year?: string;
  featured: boolean;
}

export interface About {
  _id: string;
  name: string;
  tagline: string;
  bio: string;
  profileImage?: SanityImage;
  profileImageUrl?: string;
  heroVideoUrl?: string;
  socialLinks: SocialLink[];
  experience?: string;
  location?: string;
}

export interface SiteSettings {
  _id: string;
  title: string;
  description: string;
  heroVideoUrl?: string;
  heroTagline?: string;
}

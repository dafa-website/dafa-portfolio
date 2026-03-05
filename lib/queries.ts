
export const projectsQuery = `
  *[_type == "project"] | order(featured desc, year desc) {
    _id,
    title,
    slug,
    category,
    description,
    coverImage,
    videoUrl,
    client,
    year,
    featured
  }
`;

export const featuredProjectsQuery = `
  *[_type == "project" && featured == true] | order(year desc) {
    _id,
    title,
    slug,
    category,
    description,
    coverImage,
    videoUrl,
    client,
    year,
    featured
  }
`;

export const projectBySlugQuery = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    description,
    coverImage,
    images,
    videoUrl,
    client,
    year,
    featured
  }
`;

export const aboutQuery = `
  *[_type == "about"][0] {
    _id,
    name,
    tagline,
    bio,
    profileImage,
    heroVideoUrl,
    socialLinks,
    experience,
    location
  }
`;

export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    _id,
    title,
    description,
    heroVideoUrl,
    heroTagline
  }
`;

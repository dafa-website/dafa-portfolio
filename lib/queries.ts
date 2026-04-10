
export const projectsQuery = `
  *[_type == "project"] | order(featured desc, year desc) {
    _id,
    title,
    slug,
    category,
    description,
    tags,
    coverImage,
    images,
    videoUrl,
    client,
    year,
    featured
  }
`;

export const videoEditingProjectsQuery = `
  *[_type == "project" && category == $category] | order(year desc) [$start...$end] {
    _id,
    title,
    slug,
    category,
    description,
    tags,
    coverImage,
    videoUrl,
    client,
    year,
    featured
  }
`;

export const videoEditingProjectsCountQuery = `
  count(*[_type == "project" && category == $category])
`;

export const featuredProjectsQuery = `
  *[_type == "project" && featured == true] | order(year desc)[0...3] {
    _id,
    title,
    slug,
    category,
    description,
    tags,
    coverImage,
    images,
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
    tags,
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
    preview {
      headingLineOne,
      headingLineTwo,
      subtitle,
      intro,
      body,
      cta
    },
    bio,
    profileImage,
    heroVideoUrl,
    socialLinks,
    experience,
    location,
    jobs
  }
`;

export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    _id,
    title,
    description,
    heroVideoUrl,
    heroTagline,
    overviewTitle,
    overviewDescription,
    overviewVideoUrl
  }
`;

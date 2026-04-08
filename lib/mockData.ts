import type { Project, About } from "@/types";

export const mockProjects: Project[] = [
    {
        _id: "1",
        title: "Katalis Digital Campaign",
        slug: { current: "katalis-digital-campaign" },
        category: "Social Media",
        description:
            "Produced 10–20 weekly multimedia assets (TikTok, Reels, Ads, Carousels) for Katalis Digital Agency. Formulated hook strategies generating 2,000,000+ reach within 2 days.",
        coverImageUrl:
            "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=800&fit=crop&q=80",
        imageUrls: [
            "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&h=800&fit=crop&q=80",
        ],
        client: "Katalis Digital Agency",
        year: "2023",
        featured: true,
    },
    {
        _id: "ai-product-1",
        title: "Katalis Brand AI",
        slug: { current: "katalis-brand-ai" },
        category: "AI Product Photography",
        description:
            "Creating stunning product visuals without a physical photo shoot. We utilized advanced Generative AI to map out the ideal studio environment, lighting, and textures to bring out the product's natural appeal.",
        coverImageUrl:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
        imageUrls: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&h=800&fit=crop",
        ],
        client: "Katalis Brand",
        year: "2024",
        featured: true,
    },
    {
        _id: "2",
        title: "Taulany TV — Viral Promos",
        slug: { current: "taulany-tv-promos" },
        category: "Video Editing",
        tags: ["YouTube", "TikTok"],
        description:
            "Produced viral short-form content for Instagram & TikTok, accumulating over 5M+ views within 3 days. Enhanced top-tier programs with comedic graphic effects.",
        coverImageUrl:
            "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=800&fit=crop&q=80",
        imageUrls: [
            "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=800&fit=crop&q=80",
        ],
        client: "Taulany TV",
        year: "2023",
        featured: true,
    },
    {
        _id: "3",
        title: "NRB TV Broadcast Design",
        slug: { current: "nrb-tv-broadcast" },
        category: "Motion Graphics",
        description:
            "Conceptualized and designed comprehensive broadcast assets including opening bumpers, showreels, and lower-thirds, enhancing overall production value.",
        coverImageUrl:
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=800&fit=crop&q=80",
        imageUrls: [
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop&q=80",
        ],
        client: "NRB TV",
        year: "2022",
        featured: true,
    },
    {
        _id: "4",
        title: "Photo2Post Retouching",
        slug: { current: "photo2post-retouching" },
        category: "Photo Retouching",
        description:
            "Professional photo retouching and advanced digital imaging, including color grading and sky replacements. Successfully acquired 50+ clients within a single month.",
        coverImageUrl:
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=800&fit=crop&q=80",
        imageUrls: [
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop&q=80",
        ],
        client: "Photo2Post (Italy)",
        year: "2023",
        featured: true,
    },
    {
        _id: "5",
        title: "Toyota TMMIN Campaign",
        slug: { current: "toyota-tmmin" },
        category: "Graphic Design",
        description:
            "Designed 10 impactful internal campaign posters and developed motion graphics for corporate communication at Toyota Motor Manufacturing Indonesia Head Office.",
        coverImageUrl:
            "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=800&fit=crop&q=80",
        imageUrls: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop&q=80",
        ],
        client: "PT. Toyota Motor Manufacturing Indonesia",
        year: "2020",
        featured: true,
    },
    {
        _id: "6",
        title: "Locita & Homuni Branding",
        slug: { current: "locita-homuni" },
        category: "Content Creation",
        description:
            "End-to-end content creation spanning design, photography, and video editing. Designed engaging Instagram feeds, stories, and marketplace assets.",
        coverImageUrl:
            "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=800&fit=crop&q=80",
        imageUrls: [
            "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&h=800&fit=crop&q=80",
        ],
        client: "Locita Decoration & Homuni",
        year: "2021",
        featured: true,
    },
];

export const mockAbout: About = {
    _id: "about-1",
    name: "Dafa Rizqullah",
    tagline: "Multimedia Designer & Visual Creator",
    bio: "I'm Achmad Dafa Rizqullah — a multimedia designer based in Depok, Indonesia with a passion for visual storytelling across digital platforms. From crafting viral TikTok content reaching 2M+ audiences to editing nationally trending YouTube videos at Taulany TV, I transform ideas into compelling visual experiences. My expertise spans video editing, motion graphics, graphic design, and photo retouching — delivering high-impact creative content for brands, broadcast networks, and international clients.",
    profileImageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&q=80",
    heroVideoUrl: "",
    experience: "5+",
    location: "Depok, ID",
    socialLinks: [
        { platform: "Instagram", url: "https://instagram.com/dafarizqullah" },
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/dafarizqullah" },
        { platform: "Behance", url: "https://behance.net/dafarizqullah" },
    ],
    jobs: [
        {
            _id: "job-1",
            role: "Video Editor & Social Media",
            company: "Taulany TV & Katalis Digital",
            location: "Jakarta, ID",
            startDate: "Jan 2023",
            endDate: "Present",
            description: "Produced viral short-form content for Instagram & TikTok (accruing 5M+ views). Also developed hook strategies and produced 10-20 weekly multimedia assets for Katalis Digital Agency.",
            skills: ["Premiere Pro", "After Effects", "Social Media Strategy", "TikTok"],
        },
        {
            _id: "job-2",
            role: "Photo Retoucher",
            company: "Photo2Post",
            location: "Italy (Remote)",
            startDate: "Jan 2023",
            endDate: "Dec 2023",
            description: "Provided professional photo retouching and advanced digital imaging, including color grading and element replacement. Served 50+ clients globally.",
            skills: ["Photoshop", "Lightroom", "Color Grading", "Retouching"],
        },
        {
            _id: "job-3",
            role: "Motion Graphic Designer",
            company: "NRB TV",
            location: "Depok, ID",
            startDate: "Jan 2022",
            endDate: "Dec 2022",
            description: "Conceptualized and designed comprehensive broadcast assets including opening bumpers, showreels, and lower-thirds, significantly enhancing overall production value.",
            skills: ["After Effects", "Illustrator", "Motion Graphics", "Broadcast Design"],
        },
        {
            _id: "job-4",
            role: "Content Creator",
            company: "Locita Decoration & Homuni",
            location: "Jakarta, ID",
            startDate: "Jan 2021",
            endDate: "Dec 2021",
            description: "Managed end-to-end content creation spanning graphic design, photography, and video editing for Instagram feeds, stories, and e-commerce marketplace assets.",
            skills: ["Content Creation", "Graphic Design", "Photography", "Video Editing"],
        },
        {
            _id: "job-5",
            role: "Graphic Design Intern",
            company: "PT. Toyota Motor Manufacturing Indonesia",
            location: "Jakarta, ID",
            startDate: "Jan 2020",
            endDate: "Dec 2020",
            description: "Designed impactful internal campaign posters and developed motion graphics for corporate communication within the Head Office.",
            skills: ["Graphic Design", "Corporate Branding", "Illustrator", "Premiere Pro"],
        }
    ]
};

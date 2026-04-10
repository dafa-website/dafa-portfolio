import { defineField, defineType } from "sanity";

export default defineType({
    name: "siteSettings",
    title: "Site Settings",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Site Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Site Description",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "heroVideoUrl",
            title: "Hero Video URL (Cloudinary)",
            type: "url",
            description: "Autoplay background video for the hero section",
        }),
        defineField({
            name: "heroTagline",
            title: "Hero Tagline",
            type: "string",
            description: "Text shown below the photographer name in the hero",
        }),
        defineField({
            name: "overviewTitle",
            title: "Overview Title",
            type: "string",
        }),
        defineField({
            name: "overviewDescription",
            title: "Overview Description",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "overviewVideoUrl",
            title: "Overview Video URL (Cloudinary)",
            type: "url",
            description: "Video for the portfolio overview section",
        }),
    ],
    preview: {
        select: { title: "title" },
    },
});

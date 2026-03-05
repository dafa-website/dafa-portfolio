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
    ],
    preview: {
        select: { title: "title" },
    },
});

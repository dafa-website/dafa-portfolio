import { defineField, defineType } from "sanity";

export default defineType({
    name: "about",
    title: "About",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Photographer Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "tagline",
            title: "Tagline",
            type: "string",
            description: "Short subtitle, e.g. 'Visual Storyteller & Photographer'",
        }),
        defineField({
            name: "bio",
            title: "Bio",
            type: "text",
            rows: 6,
        }),
        defineField({
            name: "profileImage",
            title: "Profile Image",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "heroVideoUrl",
            title: "Hero Background Video URL",
            type: "url",
            description: "Cloudinary video URL for the hero section background",
        }),
        defineField({
            name: "experience",
            title: "Years of Experience",
            type: "string",
        }),
        defineField({
            name: "location",
            title: "Location",
            type: "string",
        }),
        defineField({
            name: "socialLinks",
            title: "Social Links",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({
                            name: "platform",
                            title: "Platform",
                            type: "string",
                            options: {
                                list: [
                                    { title: "Instagram", value: "Instagram" },
                                    { title: "Twitter", value: "Twitter" },
                                    { title: "Behance", value: "Behance" },
                                    { title: "LinkedIn", value: "LinkedIn" },
                                    { title: "YouTube", value: "YouTube" },
                                    { title: "Vimeo", value: "Vimeo" },
                                ],
                            },
                        }),
                        defineField({
                            name: "url",
                            title: "URL",
                            type: "url",
                        }),
                    ],
                    preview: {
                        select: { title: "platform", subtitle: "url" },
                    },
                },
            ],
        }),
        defineField({
            name: "jobs",
            title: "Work Experience / Jobs",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "role", title: "Role", type: "string", validation: (Rule) => Rule.required() }),
                        defineField({ name: "company", title: "Company", type: "string", validation: (Rule) => Rule.required() }),
                        defineField({ name: "location", title: "Location", type: "string" }),
                        defineField({ name: "startDate", title: "Start Date", type: "string" }),
                        defineField({ name: "endDate", title: "End Date", type: "string" }),
                        defineField({ name: "description", title: "Description", type: "text" }),
                        defineField({ name: "skills", title: "Skills", type: "array", of: [{ type: "string" }] }),
                    ],
                    preview: {
                        select: { title: "role", subtitle: "company" },
                    },
                },
            ],
        }),
    ],
    preview: {
        select: { title: "name", subtitle: "tagline" },
    },
});

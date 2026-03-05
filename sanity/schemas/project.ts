import { defineField, defineType } from "sanity";

export default defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title", maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "string",
            options: {
                list: [
                    { title: "Portrait", value: "Portrait" },
                    { title: "Fashion", value: "Fashion" },
                    { title: "Landscape", value: "Landscape" },
                    { title: "Street", value: "Street" },
                    { title: "Documentary", value: "Documentary" },
                    { title: "Product", value: "Product" },
                    { title: "Wedding", value: "Wedding" },
                    { title: "Editorial", value: "Editorial" },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            rows: 4,
        }),
        defineField({
            name: "coverImage",
            title: "Cover Image",
            type: "image",
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "images",
            title: "Gallery Images",
            type: "array",
            of: [{ type: "image", options: { hotspot: true } }],
        }),
        defineField({
            name: "videoUrl",
            title: "Video URL (Cloudinary)",
            type: "url",
            description: "Cloudinary video URL for this project",
        }),
        defineField({
            name: "client",
            title: "Client",
            type: "string",
        }),
        defineField({
            name: "year",
            title: "Year",
            type: "string",
        }),
        defineField({
            name: "featured",
            title: "Featured",
            type: "boolean",
            initialValue: false,
        }),
    ],
    orderings: [
        {
            title: "Year (newest first)",
            name: "yearDesc",
            by: [{ field: "year", direction: "desc" }],
        },
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "category",
            media: "coverImage",
        },
    },
});

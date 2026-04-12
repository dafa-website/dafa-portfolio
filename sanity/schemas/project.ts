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
                    { title: "Video Editing", value: "Video Editing" },
                    { title: "Graphic Design", value: "Graphic Design" },
                    { title: "AI Product Photography", value: "AI Product Photography" },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
            options: { layout: "tags" },
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
            title: "Project Video",
            type: "cloudinaryVideoUrl",
            description: "Upload a video and store the Cloudinary URL.",
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

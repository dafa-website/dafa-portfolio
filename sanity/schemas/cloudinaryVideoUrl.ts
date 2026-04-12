import { defineType } from "sanity";
import CloudinaryVideoInput from "../components/CloudinaryVideoInput";

export default defineType({
    name: "cloudinaryVideoUrl",
    title: "Cloudinary Video",
    type: "url",
    components: {
        input: CloudinaryVideoInput,
    },
    validation: (Rule) =>
        Rule.uri({
            scheme: ["http", "https"],
        }),
});

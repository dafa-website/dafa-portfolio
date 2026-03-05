import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImage } from "@/types";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const isSanityConfigured = Boolean(projectId && projectId !== "your_project_id");

export const sanityConfig = {
    projectId: projectId || "placeholder",
    dataset,
    apiVersion,
    useCdn: process.env.NODE_ENV === "production",
};

export const client = createClient(sanityConfig);


const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImage) {
    return builder.image(source);
}



export async function safeFetch<T>(
    query: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params?: Record<string, any>
): Promise<T | null> {
    if (!isSanityConfigured) return null;

    try {
        const result = await client.fetch(query, params ?? {});
        return result as T;
    } catch {
        return null;
    }
}

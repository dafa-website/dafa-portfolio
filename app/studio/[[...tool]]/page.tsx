"use client";

/**
 * Sanity Studio route — accessible at /studio
 * Requires NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET
 * environment variables to be configured.
 */

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function StudioPage() {
    return <NextStudio config={config} />;
}

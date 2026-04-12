"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { StringInputProps } from "sanity";
import { set, unset } from "sanity";
import { Button, Card, Flex, Stack, Text, TextInput } from "@sanity/ui";

const WIDGET_SCRIPT_SRC = "https://widget.cloudinary.com/v2.0/global/all.js";
const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "";
const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "";

type CloudinaryWidgetResult = {
    event?: string;
    info?: {
        secure_url?: string;
    };
};

type CloudinaryWidgetInstance = {
    open: () => void;
};

declare global {
    interface Window {
        cloudinary?: {
            createUploadWidget: (
                options: Record<string, unknown>,
                callback: (error: unknown, result: CloudinaryWidgetResult) => void,
            ) => CloudinaryWidgetInstance;
        };
    }
}

export default function CloudinaryVideoInput(props: StringInputProps) {
    const { value, onChange, elementProps, readOnly } = props;
    const [isReady, setIsReady] = useState(false);
    const widgetRef = useRef<CloudinaryWidgetInstance | null>(null);
    const isConfigured = Boolean(cloudName && uploadPreset);

    useEffect(() => {
        if (typeof window === "undefined") return;
        if (window.cloudinary) {
            setIsReady(true);
            return;
        }

        const existingScript = document.querySelector(
            `script[src="${WIDGET_SCRIPT_SRC}"]`,
        );

        if (existingScript) {
            existingScript.addEventListener("load", () => setIsReady(true), {
                once: true,
            });
            return;
        }

        const script = document.createElement("script");
        script.src = WIDGET_SCRIPT_SRC;
        script.async = true;
        script.onload = () => setIsReady(true);
        document.body.appendChild(script);
    }, []);

    const openWidget = useCallback(() => {
        if (readOnly || !isConfigured || !isReady || !window.cloudinary) return;

        if (!widgetRef.current) {
            widgetRef.current = window.cloudinary.createUploadWidget(
                {
                    cloudName,
                    uploadPreset,
                    sources: ["local"],
                    resourceType: "video",
                    multiple: false,
                    folder: "portfolio/videos",
                    clientAllowedFormats: ["mp4", "mov", "webm", "m4v"],
                },
                (error, result) => {
                    if (error) return;
                    if (result?.event === "success" && result.info?.secure_url) {
                        onChange(set(result.info.secure_url));
                    }
                },
            );
        }

        widgetRef.current.open();
    }, [isConfigured, isReady, onChange, readOnly]);

    const handleClear = useCallback(() => {
        if (readOnly) return;
        onChange(unset());
    }, [onChange, readOnly]);

    return (
        <Stack space={3}>
            <TextInput
                {...elementProps}
                value={value ?? ""}
                readOnly={readOnly}
                placeholder="Upload video to Cloudinary"
            />
            <Flex gap={3} align="center">
                <Button
                    text="Upload video"
                    tone="primary"
                    onClick={openWidget}
                    disabled={readOnly || !isConfigured || !isReady}
                />
                {value ? (
                    <Button
                        text="Clear"
                        tone="critical"
                        mode="ghost"
                        onClick={handleClear}
                        disabled={readOnly}
                    />
                ) : null}
            </Flex>
            {!isConfigured ? (
                <Card padding={3} radius={2} tone="caution" border>
                    <Text size={1}>
                        Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and
                        NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET in .env.local.
                    </Text>
                </Card>
            ) : null}
            {value ? (
                <Card padding={3} radius={2} shadow={1}>
                    <Stack space={2}>
                        <Text size={1}>Preview</Text>
                        <video src={value} controls playsInline style={{ width: "100%" }} />
                    </Stack>
                </Card>
            ) : null}
        </Stack>
    );
}

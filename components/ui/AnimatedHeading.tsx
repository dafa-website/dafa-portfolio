"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";


interface AnimatedHeadingProps {
    text: string;
    className?: string;
    as?: "h1" | "h2" | "h3";
    delay?: number;
}

export default function AnimatedHeading({
    text,
    className = "",
    as: Tag = "h1",
    delay = 0,
}: AnimatedHeadingProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: false, margin: "-10px" });

    const letters = text.split("");

    return (
        <div ref={ref} className={className}>
            <Tag className="flex flex-wrap justify-center">
                {letters.map((letter, i) => (
                    <motion.span
                        key={`${letter}-${i}`}
                        initial={{ opacity: 0, y: 60, rotateX: -90 }}
                        animate={
                            isInView
                                ? { opacity: 1, y: 0, rotateX: 0 }
                                : { opacity: 0, y: 60, rotateX: -90 }
                        }
                        transition={{
                            duration: 0.6,
                            delay: delay + i * 0.04,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="inline-block"
                        style={{
                            display: "inline-block",
                            whiteSpace: letter === " " ? "pre" : "normal",
                        }}
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
            </Tag>
        </div>
    );
}

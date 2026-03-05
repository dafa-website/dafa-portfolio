import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Achmad Dafa Rizqullah — Multimedia Designer & Visual Creator",
  description:
    "Multimedia designer portfolio showcasing video editing, motion graphics, social media campaigns, and broadcast design. Available for creative collaborations.",
  keywords: [
    "multimedia designer",
    "video editor",
    "motion graphics",
    "social media",
    "content creator",
    "visual creator",
  ],
  openGraph: {
    title: "Achmad Dafa Rizqullah — Multimedia Designer & Visual Creator",
    description:
      "Multimedia designer portfolio showcasing video editing, motion graphics, social media campaigns, and broadcast design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}

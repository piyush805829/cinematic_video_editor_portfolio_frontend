import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CINEMATIC.EDITS | Professional Video Editor Portfolio",
  description:
    "High-end post-production for brands who demand cinematic excellence and narrative depth in every frame. YouTube edits, reels, ads, and more.",
  keywords: [
    "video editor",
    "cinematic",
    "portfolio",
    "post-production",
    "YouTube",
    "reels",
    "filmmaker",
  ],
  openGraph: {
    title: "CINEMATIC.EDITS | Professional Video Editor Portfolio",
    description:
      "High-end post-production for brands who demand cinematic excellence.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CINEMATIC.EDITS | Professional Video Editor Portfolio",
    description:
      "High-end post-production for brands who demand cinematic excellence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#0e0e0e" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-background text-on-background font-body antialiased">
        {children}
      </body>
    </html>
  );
}

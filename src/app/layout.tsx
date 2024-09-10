import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteDetails } from "./site-details";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteDetails.siteName,
  description: siteDetails.siteDescription,
  alternates: {
    types: {
      "application/rss+xml": `${siteDetails.siteUrl}/feed.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

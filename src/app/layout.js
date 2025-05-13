import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "./GoogleAnalytics";
import Script from "next/script";
import Providers from "@/components/Providers";

// Get current date in ISO format for SEO
const currentDate = new Date().toISOString().split("T")[0];

export const metadata = {
  title: "Download YouTube Thumbnails | Free Tool",
  description:
    "Download YouTube thumbnails in high quality. Free tool to download YouTube video thumbnails in multiple sizes. No registration required.",
  keywords:
    "download youtube thumbnails, youtube thumbnail download, youtube thumbnail downloader, download youtube video thumbnail, youtube thumbnail grabber",
  metadataBase: new URL("https://youtubedownloadthumbnails.com"),
  openGraph: {
    title: "Download YouTube Thumbnails | Free Tool",
    description:
      "Download YouTube thumbnails in high quality. Free tool to download YouTube video thumbnails in multiple sizes. No registration required.",
    url: "https://youtubedownloadthumbnails.com",
    siteName: "YouTube Thumbnail Downloader",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Download YouTube Thumbnails",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download YouTube Thumbnails | Free Tool",
    description:
      "Download YouTube thumbnails in high quality. Free tool to download YouTube video thumbnails in multiple sizes. No registration required.",
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://youtubedownloadthumbnails.com",
  },
};

export default function RootLayout({ children }) {
  // Generate the structured data with the current date
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "YouTube Thumbnail Downloader",
    description: "Free tool to download YouTube thumbnails in HD quality",
    url: "https://youtubedownloadthumbnails.com",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    dateModified: currentDate,
  };

  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
        {/* Ahrefs Analytics */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="3y1dapbvyN9uOeJGhQ78oA"
          async
        />
        {/* Auto-updating SEO date structured data */}
        <Script
          id="structured-date-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

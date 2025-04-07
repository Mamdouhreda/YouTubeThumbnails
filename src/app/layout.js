import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "./GoogleAnalytics";
import Script from "next/script";

// Get current date in ISO format for SEO
const currentDate = new Date().toISOString().split("T")[0];

export const metadata = {
  title: "Download YouTube Thumbnail | Free YouTube Thumbnail Downloader",
  description:
    "Download YouTube thumbnails in HD (1280x720) & multiple sizes with our free downloader tool. Instantly save high-quality YouTube video thumbnails with no registration. Perfect for content creators, marketers & social media.",
  keywords:
    "download youtube thumbnail, youtube thumbnail download, save youtube thumbnail, youtube thumbnail grabber, download youtube video thumbnail, youtube thumbnail extractor",
  metadataBase: new URL("https://youtubedownloadthumbnails.com"),
  openGraph: {
    title: "Download YouTube Thumbnail - Get HD Thumbnails Free",
    description:
      "Download YouTube thumbnails in HD (1280x720) & multiple sizes instantly. Our free downloader saves high-quality thumbnails from any video with no registration required. Ideal for creators & social media.",
    url: "https://youtubedownloadthumbnails.com",
    siteName: "Download YouTube Thumbnail",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download YouTube Thumbnail - HD Quality Thumbnail Downloader",
    description:
      "Save YouTube thumbnails in HD quality instantly. Our free downloader tool provides multiple sizes (1280x720, 480x360) with no signup. Perfect for content creators & marketers.",
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
          data-key="Io6uTCdbv+LziOX9EGujMA"
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
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

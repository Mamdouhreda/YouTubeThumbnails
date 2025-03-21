import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "./GoogleAnalytics";

export const metadata = {
  title: "Download YouTube Thumbnail | Free YouTube Thumbnail Downloader",
  description:
    "Download YouTube thumbnail images in HD quality (1280x720). Easy to use - just paste the video URL to download YouTube thumbnails in multiple sizes. 100% Free!",
  keywords:
    "download youtube thumbnail, youtube thumbnail download, save youtube thumbnail, youtube thumbnail grabber, download youtube video thumbnail, youtube thumbnail extractor",
  metadataBase: new URL("https://youtubedownloadthumbnails.com"),
  openGraph: {
    title: "Download YouTube Thumbnail - Get HD Thumbnails Free",
    description:
      "Download any YouTube video thumbnail in HD quality. Get YouTube thumbnails in multiple sizes (1280x720, 480x360). No signup, instant download.",
    url: "https://youtubedownloadthumbnails.com",
    siteName: "Download YouTube Thumbnail",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download YouTube Thumbnail - HD Quality Thumbnail Downloader",
    description:
      "Download YouTube thumbnails instantly. Get high-quality video thumbnails from any YouTube video URL. Free tool, no registration needed.",
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
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
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

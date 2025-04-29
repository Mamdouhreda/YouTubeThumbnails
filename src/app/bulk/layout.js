export const metadata = {
  title: "Bulk Download YouTube Thumbnails | Free Tool",
  description:
    "Download multiple YouTube thumbnails at once. Free tool to download YouTube video thumbnails in bulk. No registration required.",
  alternates: {
    canonical: "https://youtubedownloadthumbnails.com/bulk",
  },
  openGraph: {
    title: "Bulk Download YouTube Thumbnails | Free Tool",
    description:
      "Download multiple YouTube thumbnails at once. Free tool to download YouTube video thumbnails in bulk. No registration required.",
    url: "https://youtubedownloadthumbnails.com/bulk",
    siteName: "YouTube Thumbnail Downloader",
    images: [
      {
        url: "/api/og/bulk",
        width: 1200,
        height: 630,
        alt: "Bulk Download YouTube Thumbnails",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulk Download YouTube Thumbnails | Free Tool",
    description:
      "Download multiple YouTube thumbnails at once. Free tool to download YouTube video thumbnails in bulk. No registration required.",
    images: ["/api/og/bulk"],
  },
};

export default function BulkLayout({ children }) {
  return children;
}

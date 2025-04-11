export default function sitemap() {
  const baseUrl = "https://youtubedownloadthumbnails.com";
  const currentDate = new Date();

  // Define URLs
  const urls = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/bulk`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Add other important URLs from your site here
  ];

  return urls;
}

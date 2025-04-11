export default function sitemap() {
  const baseUrl = "https://youtubedownloadthumbnails.com";
  const currentDate = new Date().toISOString();

  // Define URLs
  const urls = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/bulk`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  return urls;
}

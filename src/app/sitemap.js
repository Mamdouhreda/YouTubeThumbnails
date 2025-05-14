export default async function sitemap() {
  const baseUrl = "https://youtubedownloadthumbnails.com";
  const currentDate = new Date().toISOString();

  // Define static URLs with proper canonical paths
  const staticUrls = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/bulk`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  // Fetch posts from WordPress
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/graphql`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
          query GetAllPosts {
            posts(first: 100) {
              nodes {
                slug
                modified
              }
            }
          }
        `,
        }),
      }
    );

    const { data } = await response.json();

    // Add individual post URLs to sitemap
    const postUrls = data.posts.nodes.map((post) => ({
      url: `${baseUrl}/posts/${post.slug}`,
      lastModified: post.modified || currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    }));

    return [...staticUrls, ...postUrls];
  } catch (error) {
    console.error("Error fetching posts for sitemap:", error);
    return staticUrls;
  }
}

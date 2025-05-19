/** @type {import('next').NextConfig} */
const { withFaust } = require("@faustwp/core");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["img.youtube.com", "youtubethumbn2.wpenginepowered.com"],
    formats: ["image/webp"],
    minimumCacheTTL: 86400, // 24 hours
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.youtubedownloadthumbnails.com",
          },
        ],
        destination: "https://youtubedownloadthumbnails.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = withFaust(nextConfig);

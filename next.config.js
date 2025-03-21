/** @type {import('next').NextConfig} */
const { withFaust } = require("@faustwp/core");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["img.youtube.com", "youtubethumbn2.wpenginepowered.com"],
  },
};

module.exports = withFaust(nextConfig);

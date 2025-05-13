/**
 * @type {import('@faustwp/core').FaustConfig}
 */

// Validate environment variables
if (!process.env.NEXT_PUBLIC_WORDPRESS_URL) {
  throw new Error(
    "NEXT_PUBLIC_WORDPRESS_URL is not defined in environment variables"
  );
}

if (!process.env.FAUST_SECRET_KEY) {
  throw new Error("FAUST_SECRET_KEY is not defined in environment variables");
}

export default {
  wpUrl: process.env.NEXT_PUBLIC_WORDPRESS_URL,
  apiClientSecret: process.env.FAUST_SECRET_KEY,
};

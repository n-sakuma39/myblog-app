/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    SLACK_WEBHOOK_URL: process.env.SLACK_WEBHOOK_URL,
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
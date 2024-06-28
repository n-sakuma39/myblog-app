/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.microcms-assets.io", "myblog-app-two.vercel.app"],
  },
  env: {
    SLACK_WEBHOOK_URL: process.env.SLACK_WEBHOOK_URL,
  },
};

export default nextConfig;

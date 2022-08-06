/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["books.google.com", "jackmoreno.files.wordpress.com"],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.github.com",
      },
    ];
  },
  images: {
    domains: [
      "https://avatars.githubusercontent.com",
      "avatars.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;

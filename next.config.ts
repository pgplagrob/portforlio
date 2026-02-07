/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portforlio",
  assetPrefix: "/portforlio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

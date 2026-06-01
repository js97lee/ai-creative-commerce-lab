/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isGithubPages && {
    basePath: "/ai-creative-commerce-lab",
    assetPrefix: "/ai-creative-commerce-lab/",
  }),
};

export default nextConfig;

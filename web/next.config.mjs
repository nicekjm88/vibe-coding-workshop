/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["antd", "@ant-design/icons"],
  },
};

export default nextConfig;

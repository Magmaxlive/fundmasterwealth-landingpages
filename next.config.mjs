/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/one-bank",
        destination: "https://fmw-landing.vercel.app/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

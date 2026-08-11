import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/boss-up",
        destination: "https://boss-up-bootcamp.vercel.app/",
      },
      {
        source: "/boss-up/:path*",
        destination: "https://boss-up-bootcamp.vercel.app/:path*",
      },
      {
        source: "/api/create-checkout-session",
        destination:
          "https://boss-up-bootcamp.vercel.app/api/create-checkout-session",
      },
    ];
  },
};

export default nextConfig;

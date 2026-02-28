import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  cacheStartUrl: true,
  scope: "/",
});

const nextConfig: NextConfig = {
  turbopack: {},
};

export default withPWA(nextConfig);

import runtimeCaching from "next-pwa/cache";
import withPWA from "next-pwa";
const withPWAHOC = withPWA({
  disable: process.env.NODE_ENV === "development",
  dest: "public",
  register: true,
  skipWaiting: false,
  runtimeCaching,
});
const nextConfig = withPWAHOC({
  experimental: {
    appDir: true,
  },
});

export default nextConfig;

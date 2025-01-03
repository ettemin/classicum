const nextConfig = {
  basePath: "/classicum",
  output: "export",
  // Disable image optimization since it's not supported in static exports
  images: {
    unoptimized: true,
  },
  assetPrefix: "/classicum",
};

export default nextConfig;

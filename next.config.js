// next.config.js
module.exports = {
    reactStrictMode: true,
    output: 'export',
    trailingSlash: true,
    images: {
      domains: ['sentinelops.com'],
      unoptimized: true,
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      return config;
    },
  };
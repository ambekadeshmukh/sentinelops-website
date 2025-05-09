// next.config.js
module.exports = {
    reactStrictMode: true,
    images: {
      domains: ['sentinelops.com'],
    },
    i18n: {
      locales: ['en'],
      defaultLocale: 'en',
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      return config;
    },
  };
  
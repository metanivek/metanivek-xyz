module.exports = {
  generateBuildId: () => "metanivek-xyz",
  reactStrictMode: true,
  webpack: (config) => {
    // https://github.com/wojtekmaj/react-pdf/issues/799
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
};

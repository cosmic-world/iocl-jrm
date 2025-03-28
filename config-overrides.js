module.exports = function override(config, env) {
  if (env === 'development') {
    config.devtool = false; // Disable source maps in development
  }
  return config;
};

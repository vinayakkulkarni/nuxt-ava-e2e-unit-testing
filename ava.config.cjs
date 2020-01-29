module.exports = () => {
  return {
    require: ['./test/_setup.js'],
    ignoredByWatcher: ['!**/*.{js,vue}'],
    tap: true,
    verbose: true,
    color: true,
    babel: true,
  };
};

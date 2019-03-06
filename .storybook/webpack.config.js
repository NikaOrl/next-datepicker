module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  defaultConfig.output.publicPath = configType === 'PRODUCTION' ? '/next-checkbox/' : '/';
  return defaultConfig;
};

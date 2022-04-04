const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.plugins.push(new VanillaExtractPlugin());
    return config;
  },
  features: {
    interactionsDebugger: true,
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
};

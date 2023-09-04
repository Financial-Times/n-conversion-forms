module.exports = {
  'stories': [
    '../components/*.stories.js',
  ],
  'addons': [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y'
  ],

  webpackFinal: async (config) => {
    return config;
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: true
  }
};

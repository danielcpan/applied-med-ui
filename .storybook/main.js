const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.(ts|tsx|js|jsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true
      }
    }
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader')
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader')
        }
      ]
    });

    config.resolve.extensions.push('.ts', '.tsx');

    config.resolve.modules = [path.resolve(__dirname, '..', 'src'), 'node_modules'];

    return config;
  }
};

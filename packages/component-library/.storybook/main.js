module.exports = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    'storybook-addon-performance/dist/cjs/register',
    'storybook-mobile',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          // Require your Sass preprocessor here
          implementation: require('sass'),
        },
      },
    },
  ],
  core: {
    builder: 'webpack5',
  },
  previewHead: (head) => `
    ${head}
  `,
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  typescript: {
    reactDocgen: 'react-docgen-typescript-plugin',
  },
  reactOptions: {
    strictMode: process.env.REACT_STRICT_MODE === '1',
  },
  staticDirs: [{ from: '../storybook-static', to: 'assets/' }],
  /* Needed workaround */
  managerWebpack: (config, options) => {
    options.cache.set = () => Promise.resolve()
    return config
  },
}

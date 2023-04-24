import { addons } from '@storybook/addons'
import { create } from '@storybook/theming/create'

const theme = create({
  base: 'light',

  // Base colors
  colorSecondary: '#CC0000', // British Library red

  // UI
  appBg: '#F6F9FC',
  appContentBg: '#FFFFFF',
  appBorderColor: 'rgba(0,0,0,.1)',
  appBorderRadius: 8,

  // Typography
  fontBase: 'Helvetica, sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#333333',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#666666',

  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: '#CC0000',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: 'rgba(0,0,0,.3)',
  inputTextColor: '#333333',
  inputBorderRadius: 4,

  // Brand assets
  brandTitle: 'The British Library',
  brandUrl: 'https://github.com/britishlibrary/BL-design-system/',
  brandImage: './assets/british-library-storybook.png',
})

addons.setConfig({
  theme,
  showPanel: true, // show addons panel by default
  sidebar: { showRoots: false }, // hide root sidebar items by default
})

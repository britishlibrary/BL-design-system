import { addParameters } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { globalDecorators } from './decorators'

import isChromatic from 'chromatic'
// import '@britishlibrary/fonts'

import 'url-search-params-polyfill'

import { lightTheme, darkTheme, selectors } from '@britishlibrary/design-tokens'

const { breakpoints, color } = selectors

// Create custom viewports using widths defined in design tokens
const breakpointViewports = Object.keys(breakpoints).reduce((acc, key) => {
  acc[`breakpoint${key}`] = {
    name: `Breakpoint - ${key}`,
    styles: {
      width: `${breakpoints[key as keyof typeof breakpoints]}px`,
      height: 'calc(100% - 20px)',
    },
    type: 'other',
  }
  return acc
}, {} as typeof INITIAL_VIEWPORTS)

addParameters({
  viewMode: 'docs',
})

export const parameters = {
  viewport: {
    viewports: {
      ...breakpointViewports,
      ...INITIAL_VIEWPORTS,
    },
  },
  options: {
    storySort: {
      order: [
        'Getting started',
        ['Intro'],
        'Documentation',
        // 'Templates',
        // 'Components',
      ],
    },
  },
  themes: {
    default: 'light',
    list: [
      {
        name: 'dark',
        class: 'theme-dark',
        color: color('neutral', '100', darkTheme),
      },
      {
        name: 'light',
        class: 'theme-light',
        color: color('neutral', '800', lightTheme),
      },
    ],
  },
}

// Preload the body font on Chromatic to avoid problem with
// inconsistent floating box positioning
const fontLoader = async () => ({
  fonts: await Promise.all([
    document.fonts.load('400 1em Lato'),
    document.fonts.load('700 1em Lato'),
  ]),
})

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
    },
  },
}

export const loaders = isChromatic() && document.fonts ? [fontLoader] : []

export const decorators = globalDecorators

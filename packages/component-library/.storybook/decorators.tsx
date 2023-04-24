import React from 'react'
import { ThemeProvider } from 'styled-components'

import { DecoratorFn } from '@storybook/react'
import { withPerformance } from 'storybook-addon-performance/dist/cjs'

import { lightTheme, darkTheme } from '@britishlibrary/design-tokens'

export const withTheme: DecoratorFn = (
  StoryFn,
  { globals: { theme = 'light' } }
) => {
  const appTheme = theme === 'light' ? lightTheme : darkTheme

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <StoryFn />
      </ThemeProvider>
    </>
  )
}

export const globalDecorators = [withTheme, withPerformance]

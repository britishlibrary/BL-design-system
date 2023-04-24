import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Box, BoxProps } from './index'
import { BOX_VARIANT, BOX_PADDING } from './constants'

export default {
  argTypes: {
    variant: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
    padding: {
      options: ['large', 'small'],
      control: { type: 'radio' },
    },
  },
  component: Box,
  title: 'Box',
} as ComponentMeta<typeof Box>

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />

export const Default = Template.bind({})
Default.args = {
  variant: BOX_VARIANT.LIGHT,
  padding: BOX_PADDING.SMALL,
}

export const DarkBox = Template.bind({})
DarkBox.storyName = 'Dark'
DarkBox.args = {
  variant: BOX_VARIANT.DARK,
}

export const Light = Template.bind({})
Light.storyName = 'Light'
Light.args = {
  variant: BOX_VARIANT.LIGHT,
}

// New story to demonstrate the onClick event handler
export const Clickable = Template.bind({})
Clickable.storyName = 'Clickable'
Clickable.args = {
  variant: BOX_VARIANT.LIGHT,
  padding: BOX_PADDING.LARGE,
  onClick: action('Box clicked'),
}

DarkBox.decorators = [
  () => {
    return (
      <>
        <Box {...(Default.args as BoxProps)} variant="dark" padding="large">
          <h2>This is a large dark-theme box</h2>
        </Box>
        <Box {...(Default.args as BoxProps)} variant="dark" padding="small">
          <h2>This is a small dark-theme box</h2>
        </Box>
      </>
    )
  },
]

Light.decorators = [
  () => {
    return (
      <>
        <Box {...(Default.args as BoxProps)} variant="light" padding="large">
          <h2>This is a large light-theme box</h2>
        </Box>
        <Box {...(Default.args as BoxProps)} variant="light" padding="small">
          <h2>This is a small light-theme box</h2>
        </Box>
      </>
    )
  },
]

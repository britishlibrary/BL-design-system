import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box, BoxProps } from './index'
import { BOX_VARIANT, BOX_SIZE } from './constants'

export default {
  argTypes: {
    variant: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
    size: {
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
  size: BOX_SIZE.SMALL,
}

export const DarkBox = Template.bind({})
DarkBox.storyName = 'Dark'
DarkBox.args = {
  variant: BOX_VARIANT.DARK,
}

DarkBox.decorators = [
  () => {
    return (
      <>
        <Box {...(Default.args as BoxProps)} variant="dark" size="large" />
        <Box {...(Default.args as BoxProps)} variant="dark" size="small" />
      </>
    )
  },
]

export const Light = Template.bind({})
Light.storyName = 'Light'
Light.args = {
  variant: BOX_VARIANT.LIGHT,
}

Light.decorators = [
  () => {
    return (
      <>
        <Box {...(Default.args as BoxProps)} variant="light" size="large" />
        <Box {...(Default.args as BoxProps)} variant="light" size="small" />
      </>
    )
  },
]

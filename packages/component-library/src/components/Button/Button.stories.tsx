import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './index'
import { COMPONENT_SIZE, BUTTON_VARIANT } from './constants'

export default {
  argTypes: {
    icon: {
      control: false,
    },
  },
  component: Button,
  title: 'Button',
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Default',
}

export const Primary = Template.bind({})
Primary.args = {
  variant: BUTTON_VARIANT.PRIMARY,
  children: 'Primary',
}

export const PrimaryDisabled = Template.bind({})
PrimaryDisabled.storyName = 'Primary, disabled'
PrimaryDisabled.args = {
  variant: BUTTON_VARIANT.PRIMARY,
  isDisabled: true,
  children: 'Primary, disabled',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: BUTTON_VARIANT.SECONDARY,
  children: 'Secondary',
}

export const SecondaryDisabled = Template.bind({})
SecondaryDisabled.storyName = 'Secondary, disabled'
SecondaryDisabled.args = {
  variant: BUTTON_VARIANT.SECONDARY,
  isDisabled: true,
  children: 'Secondary, disabled',
}

export const Danger = Template.bind({})
Danger.args = {
  variant: BUTTON_VARIANT.DANGER,
  children: 'Danger',
}

export const DangerDisabled = Template.bind({})
DangerDisabled.storyName = 'Danger, disabled'
DangerDisabled.args = {
  variant: BUTTON_VARIANT.DANGER,
  isDisabled: true,
  children: 'Danger, disabled',
}

export const Small = Template.bind({})
Small.args = {
  variant: BUTTON_VARIANT.PRIMARY,
  size: COMPONENT_SIZE.SMALL,
  children: 'Small',
}
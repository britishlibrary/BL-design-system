import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './index'
import { BUTTON_VARIANT, COMPONENT_SIZE } from './constants'

export default {
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

export const PrimaryLoading = Template.bind({})
PrimaryLoading.storyName = 'Primary, loading'
PrimaryLoading.args = {
  variant: BUTTON_VARIANT.PRIMARY,
  isLoading: true,
  children: 'Primary, loading',
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

export const SecondaryLoading = Template.bind({})
SecondaryLoading.storyName = 'Secondary, loading'
SecondaryLoading.args = {
  variant: BUTTON_VARIANT.SECONDARY,
  isLoading: true,
  children: 'Secondary, loading',
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

export const DangerLoading = Template.bind({})
DangerLoading.storyName = 'Danger, loading'
DangerLoading.args = {
  variant: BUTTON_VARIANT.DANGER,
  isLoading: true,
  children: 'Danger, loading',
}

export const Small = Template.bind({})
Small.args = {
  variant: BUTTON_VARIANT.PRIMARY,
  size: COMPONENT_SIZE.SMALL,
  children: 'Small',
}

export const SmallLoading = Template.bind({})
SmallLoading.storyName = 'Small, loading'
SmallLoading.args = {
  variant: BUTTON_VARIANT.PRIMARY,
  size: COMPONENT_SIZE.SMALL,
  children: 'Small, loading',
  isLoading: true,
}

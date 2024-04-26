import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { IconBrightnessLow } from '@britishlibrary/icon-library'
import { Button } from './index'
import {
  COMPONENT_SIZE,
  BUTTON_VARIANT,
  BUTTON_ICON_POSITION,
} from './constants'

export default {
  argTypes: {
    icon: {
      control: false,
    },
  },
  component: Button,
  title: 'Button',
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />

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

export const PrimaryLeftIcon = Template.bind({})
PrimaryLeftIcon.storyName = 'Primary, with left icon'
PrimaryLeftIcon.args = {
  children: 'Primary',
  icon: <IconBrightnessLow />,
  iconPosition: BUTTON_ICON_POSITION.LEFT,
}

export const PrimaryRightIcon = Template.bind({})
PrimaryRightIcon.storyName = 'Primary, with right icon'
PrimaryRightIcon.args = {
  children: 'Primary',
  icon: <IconBrightnessLow />,
  iconPosition: BUTTON_ICON_POSITION.RIGHT,
}

export const IconNoText = Template.bind({})
IconNoText.storyName = 'Primary with icon, no text'
IconNoText.args = {
  variant: BUTTON_VARIANT.PRIMARY,
  children: undefined,
  icon: <IconBrightnessLow />,
  title: 'Reduce brightness',
}

export const Outline = Template.bind({})
Outline.args = {
  variant: BUTTON_VARIANT.OUTLINE,
  children: 'Outline',
}

export const OutlineLeftIcon = Template.bind({})
OutlineLeftIcon.storyName = 'Outline, with left icon'
OutlineLeftIcon.args = {
  variant: BUTTON_VARIANT.OUTLINE,
  children: 'Outline',
  icon: <IconBrightnessLow />,
  iconPosition: BUTTON_ICON_POSITION.LEFT,
}

export const OutlineDisabled = Template.bind({})
OutlineDisabled.storyName = 'Outline, disabled'
OutlineDisabled.args = {
  variant: BUTTON_VARIANT.OUTLINE,
  isDisabled: true,
  children: 'Outline, disabled',
}

export const OutlineLoading = Template.bind({})
OutlineLoading.storyName = 'Outline, loading'
OutlineLoading.args = {
  variant: BUTTON_VARIANT.OUTLINE,
  isLoading: true,
  children: 'Outline, loading',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: BUTTON_VARIANT.SECONDARY,
  children: 'Secondary',
}

export const SecondaryLeftIcon = Template.bind({})
SecondaryLeftIcon.storyName = 'Secondary, with left icon'
SecondaryLeftIcon.args = {
  variant: BUTTON_VARIANT.SECONDARY,
  children: 'Secondary',
  icon: <IconBrightnessLow />,
  iconPosition: BUTTON_ICON_POSITION.LEFT,
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

export const SmallIconNoText = Template.bind({})
SmallIconNoText.storyName = 'Primary, small, with icon, no text'
SmallIconNoText.args = {
  variant: BUTTON_VARIANT.PRIMARY,
  size: COMPONENT_SIZE.SMALL,
  icon: <IconBrightnessLow />,
  title: 'Reduce brightness',
}

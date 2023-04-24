import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FAQ } from './FAQ'

export default {
  argTypes: {
    item: {},
  },
  component: FAQ,
  title: 'FAQ',
} as ComponentMeta<typeof FAQ>

const Template: ComponentStory<typeof FAQ> = (args) => <FAQ {...args} />

export const Default = Template.bind({})
Default.args = {
  items: [
    {
      id: '1',
      question: 'What is the meaning of life?',
      answer: '42.',
    },
    {
      id: '2',
      question: 'How do I create a new component?',
      answer: 'Use React to define a functional component and export it.',
    },
  ],
}

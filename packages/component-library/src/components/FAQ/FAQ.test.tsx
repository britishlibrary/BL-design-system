import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult, fireEvent } from '@testing-library/react'

import { FAQ, FAQProps } from './FAQ'

describe('FAQ', () => {
  let wrapper: RenderResult
  const testItems: FAQProps['items'] = [
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
  ]

  beforeEach(() => {
    wrapper = render(<FAQ items={testItems} />)
  })

  it('should render the correct number of items', () => {
    const items = wrapper.getAllByRole('listitem')
    expect(items).toHaveLength(testItems.length)
  })

  it('should render the questions', () => {
    testItems.forEach(({ question }) => {
      expect(wrapper.getByText(question)).toBeInTheDocument()
    })
  })

  it('should initially hide the answers', () => {
    testItems.forEach(({ answer }) => {
      expect(wrapper.queryByText(answer)).not.toBeInTheDocument()
    })
  })

  describe('when an item is clicked', () => {
    let itemToClick: HTMLElement

    beforeEach(() => {
      itemToClick = wrapper.getByText(testItems[0].question)
      fireEvent.click(itemToClick)
    })

    it('should display the answer for the clicked item', () => {
      expect(wrapper.getByText(testItems[0].answer)).toBeInTheDocument()
    })

    it('should keep other answers hidden', () => {
      expect(wrapper.queryByText(testItems[1].answer)).not.toBeInTheDocument()
    })
  })
})

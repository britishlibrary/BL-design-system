import React, { FormEvent } from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult, fireEvent } from '@testing-library/react'

import { Button } from './index'

describe('Button', () => {
  let wrapper: RenderResult
  let onClickSpy: (event: FormEvent<HTMLButtonElement>) => void
  let button: HTMLElement

  beforeEach(() => {
    onClickSpy = jest.fn()
  })

  describe('default props', () => {
    beforeEach(() => {
      wrapper = render(<Button onClick={onClickSpy}>Click me</Button>)
      button = wrapper.getByLabelText('Click me')
    })

    it('should default the type to "button"', () => {
      expect(button).toHaveAttribute('type', 'button')
    })

    it('should not render an icon', () => {
      expect(wrapper.queryByTestId('button-icon')).toBeNull()
    })

    describe('when the button is clicked', () => {
      beforeEach(() => {
        fireEvent.click(button)
      })

      it('should handle the click event', () => {
        expect(onClickSpy).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('when the onClick callback has not been specified', () => {
    beforeEach(() => {
      wrapper = render(<Button>Click me</Button>)
      button = wrapper.getByLabelText('Click me')
    })

    it('does not throw an error when the button is clicked', () => {
      expect(() => fireEvent.click(button)).not.toThrow()
    })
  })

  describe('when the type is specified', () => {
    it.each`
      type        | expected
      ${'button'} | ${'button'}
      ${'submit'} | ${'submit'}
    `('should set the type attribute to $type', ({ type, expected }) => {
      wrapper = render(
        <Button onClick={onClickSpy} type={type}>
          Click me
        </Button>
      )
      button = wrapper.getByLabelText('Click me')

      expect(button).toHaveAttribute('type', expected)
    })
  })
})

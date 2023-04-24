import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { selectors } from '@britishlibrary/design-tokens'

const { spacing, fontSize } = selectors

export function getBoxStyles() {
  return css`
    display: flex;
    flex-direction: column;
    padding: ${spacing('6')};
  `
}

const StyledBox = styled.div`
  ${getBoxStyles};
  cursor: pointer;
  h3 {
    margin: 0;
    font-size: ${fontSize('l')};
    font-weight: 600;
  }
  p {
    margin: ${spacing('2')} 0 0 0;
    font-size: ${fontSize('base')};
  }
`

export interface FAQItemProps {
  id: string
  question: string
  answer: string
}

export const FAQItem: React.FC<FAQItemProps> = ({ id, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <StyledBox onClick={handleClick}>
      <h3>
        {id}. {question}
      </h3>
      {isOpen && <p>{answer}</p>}
    </StyledBox>
  )
}

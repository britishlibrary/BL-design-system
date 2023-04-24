import React from 'react'
import styled from 'styled-components'
import { FAQItem, FAQItemProps } from './partials/FAQItem'

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`

export interface FAQProps {
  items: FAQItemProps[]
}

export const FAQ: React.FC<FAQProps> = ({ items }) => {
  return (
    <FAQContainer>
      {items.map((item) => (
        <FAQItem key={item.id} {...item} />
      ))}
    </FAQContainer>
  )
}

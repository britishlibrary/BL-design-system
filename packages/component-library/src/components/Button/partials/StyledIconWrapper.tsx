import styled, { css } from 'styled-components'
import { selectors } from '@britishlibrary/design-tokens'

import {
  BUTTON_ICON_POSITION,
  ComponentSizeType,
  COMPONENT_SIZE,
} from '../constants'
import { ButtonIconPositionType } from '../Button'

const { spacing } = selectors

interface StyledIconWrapperProps {
  $buttonHasText: boolean
  $buttonSize: ComponentSizeType
  $isLoading: boolean
  $iconPosition: ButtonIconPositionType
}

export const StyledIconWrapper = styled.span<StyledIconWrapperProps>`
  display: inline-flex;
  align-items: center;
  visibility: ${({ $isLoading }) => ($isLoading ? 'hidden' : 'initial')};

  ${({ $buttonSize, $buttonHasText }) =>
    $buttonSize === COMPONENT_SIZE.DEFAULT &&
    !$buttonHasText &&
    css`
      padding: 0 ${spacing('4')};
    `}

  ${({ $buttonHasText, $iconPosition }) =>
    $buttonHasText &&
    css`
      margin-left: ${$iconPosition === BUTTON_ICON_POSITION.RIGHT
        ? spacing('5')
        : '0'};
      margin-right: ${$iconPosition === BUTTON_ICON_POSITION.LEFT
        ? spacing('5')
        : '0'};
    `}
`

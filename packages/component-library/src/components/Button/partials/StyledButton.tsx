import styled, { css } from 'styled-components'
import { selectors } from '@britishlibrary/design-tokens'

import {
  BUTTON_ICON_POSITION,
  BUTTON_VARIANT,
  ComponentSizeType,
  COMPONENT_SIZE,
} from '../constants'
import { ButtonIconPositionType, ButtonVariantType } from '../Button'

const { color, spacing, fontSize } = selectors

const COLOR_MAP = {
  [BUTTON_VARIANT.PRIMARY]: {
    color: color('common', 'white'),
    backgroundColor: color('blue', '800'),
    borderColor: color('blue', '800'),
    borderWidth: '2px',
    hoverColor: color('blue', '800'),
    hoverBackgroundColor: color('common', 'white'),
    activeColor: color('blue', '800'),
    activeBackgroundColor: color('common', 'white'),
  },
  [BUTTON_VARIANT.SECONDARY]: {
    color: color('blue', '800'),
    backgroundColor: color('common', 'white'),
    borderColor: color('blue', '800'),
    borderWidth: '2px',
    hoverColor: color('common', 'white'),
    hoverBackgroundColor: color('blue', '800'),
    activeColor: color('common', 'white'),
    activeBackgroundColor: color('blue', '800'),
  },
  [BUTTON_VARIANT.TERTIARY]: {
    color: color('blue', '500'),
    backgroundColor: color('common', 'white'),
    borderColor: color('blue', '500'),
    borderWidth: '2px',
    hoverColor: color('common', 'white'),
    hoverBackgroundColor: color('blue', '500'),
    activeColor: color('common', 'white'),
    activeBackgroundColor: color('blue', '500'),
  },
  [BUTTON_VARIANT.ICON]: {
    color: color('common', 'white'),
    backgroundColor: color('neutral', '400'),
    borderColor: color('neutral', '400'),
    borderWidth: '2px',
    hoverColor: color('neutral', '400'),
    hoverBackgroundColor: color('common', 'white'),
    activeColor: color('neutral', '400'),
    activeBackgroundColor: color('common', 'white'),
  },
  [BUTTON_VARIANT.DANGER]: {
    color: color('common', 'white'),
    backgroundColor: color('danger', '900'),
    borderColor: color('danger', '900'),
    borderWidth: '2px',
    hoverColor: color('common', 'white'),
    hoverBackgroundColor: color('common', 'white'),
    activeColor: color('common', 'white'),
    activeBackgroundColor: color('common', 'white'),
  },
}

const SIZE_MAP = {
  [COMPONENT_SIZE.DEFAULT]: {
    height: '44px',
    fontSize: fontSize('m'),
  },
  [COMPONENT_SIZE.SMALL]: {
    height: '33px',
    fontSize: fontSize('base'),
  },
}

interface StyledButtonProps {
  $variant: ButtonVariantType
  $size: ComponentSizeType
  $iconPosition?: ButtonIconPositionType
}

export function getButtonStyles({
  $size,
  $variant,
  $iconPosition = BUTTON_ICON_POSITION.RIGHT,
}: StyledButtonProps) {
  return css`
    height: ${SIZE_MAP[$size].height};
    display: inline-flex;
    flex-direction: ${$iconPosition === BUTTON_ICON_POSITION.LEFT
      ? 'row-reverse'
      : 'row'};
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    outline: 0;
    padding: 0 ${spacing('8')};
    font-size: ${SIZE_MAP[$size].fontSize};
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    transition: all 75ms cubic-bezier(0, 1.19, 0.82, 0.9);
    white-space: nowrap;

    &:hover {
      text-decoration: none;
    }

    &:active {
    }

    ${css`
      color: ${COLOR_MAP[$variant].color};
      background-color: ${COLOR_MAP[$variant].backgroundColor};
      border: ${COLOR_MAP[$variant].borderWidth} solid
        ${COLOR_MAP[$variant].borderColor};

      &:focus,
      &:hover {
        background-color: ${COLOR_MAP[$variant].hoverBackgroundColor};
        color: ${COLOR_MAP[$variant].hoverColor};
      }

      &:active {
        background-color: ${COLOR_MAP[$variant].activeBackgroundColor};
        color: ${COLOR_MAP[$variant].activeColor};
      }
    `}

    &:disabled {
      &,
      &:hover,
      &:active,
      &:focus {
        color: ${color('neutral', '400')};
        background-color: ${color('neutral', '000')};
        border: ${COLOR_MAP[$variant].borderWidth} solid
          ${color('neutral', '200')};
        box-shadow: none;
        cursor: not-allowed;
      }
    }
  `
}

export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  ${getButtonStyles};
`

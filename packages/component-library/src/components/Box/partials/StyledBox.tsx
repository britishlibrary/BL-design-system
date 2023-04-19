import styled, { css } from 'styled-components'
import { selectors } from '@britishlibrary/design-tokens'
import { rgba } from 'polished'

import { BoxSizeType, BOX_SIZE, BOX_VARIANT } from '../constants'
import { BoxVarientType } from '../Box'

const { color, spacing, fontSize, shadow } = selectors

const DROP_SHADOW = `0 2px 6px ${rgba(0, 0, 0, 0.3)}`
const TRANSPARENT_SHADOW = shadow('0')

const COLOR_MAP = {
  [BOX_VARIANT.LIGHT]: {
    backgroundColor: color('action', '100'),
  },
  [BOX_VARIANT.DARK]: {
    backgroundColor: color('action', '600'),
  },
}

const SIZE_MAP = {
  [BOX_SIZE.LARGE]: {
    size: '250px',
    fontSize: fontSize('m'),
    borderRadius: '15px',
  },
  [BOX_SIZE.SMALL]: {
    size: '150px',
    fontSize: fontSize('base'),
    borderRadius: '10px',
  },
}

interface StyledBoxProps {
  $variant: BoxVarientType
  $size: BoxSizeType
}

export function getBoxStyles({ $size, $variant }: StyledBoxProps) {
  return css`
    height: ${SIZE_MAP[$size].size};
    width: ${SIZE_MAP[$size].size};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${SIZE_MAP[$size].borderRadius};
    box-shadow: ${TRANSPARENT_SHADOW}, ${DROP_SHADOW};
    outline: 0;
    padding: 0 ${spacing('6')};

    ${css`
      background-color: ${COLOR_MAP[$variant].backgroundColor};
    `}
  `
}

export const StyledBox = styled.div<StyledBoxProps>`
  postion: absolute;
  margin: auto;
  top: 0; bottom: 0;
  right: 0; left;
  ${getBoxStyles};
`

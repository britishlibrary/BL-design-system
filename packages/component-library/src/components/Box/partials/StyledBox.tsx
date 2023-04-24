import styled, { css } from 'styled-components'
import { lightTheme, darkTheme, selectors } from '@britishlibrary/design-tokens'

import { BoxPaddingType, BOX_PADDING, BOX_VARIANT } from '../constants'
import { BoxVarientType } from '../Box'

const { color, spacing, fontSize } = selectors

const COLOR_MAP = {
  [BOX_VARIANT.LIGHT]: {
    backgroundColor: color('neutral', '100', lightTheme),
  },
  [BOX_VARIANT.DARK]: {
    backgroundColor: color('neutral', '800', darkTheme),
  },
}

const PADDING_MAP = {
  [BOX_PADDING.LARGE]: {
    padding: spacing('6'),
    fontSize: fontSize('m'),
    color: color('neutral', 'black'),
  },
  [BOX_PADDING.SMALL]: {
    padding: spacing('2'),
    fontSize: fontSize('base'),
    color: color('neutral', 'white'),
  },
}

interface StyledBoxProps {
  $variant: BoxVarientType
  $padding: BoxPaddingType
}

export function getBoxStyles({ $padding, $variant }: StyledBoxProps) {
  return css`
    padding: ${PADDING_MAP[$padding].padding};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    borderRadius: '4px',
    outline: 0;
    color: #fff;

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

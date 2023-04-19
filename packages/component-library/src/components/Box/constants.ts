import { ValueOf } from '../../helpers'

const BOX_VARIANT = {
  LIGHT: 'light',
  DARK: 'dark',
} as const

export const BOX_SIZE = {
  LARGE: 'large',
  SMALL: 'small',
} as const

export type BoxSizeType = ValueOf<typeof BOX_SIZE>

export { BOX_VARIANT }

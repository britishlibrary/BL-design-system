import { ValueOf } from '../../helpers'

const BOX_VARIANT = {
  LIGHT: 'light',
  DARK: 'dark',
} as const

export const BOX_PADDING = {
  LARGE: 'large',
  SMALL: 'small',
} as const

export type BoxPaddingType = ValueOf<typeof BOX_PADDING>

export { BOX_VARIANT }

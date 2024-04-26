import { ValueOf } from '../../helpers'

const BUTTON_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  OUTLINE: 'outline',
  DANGER: 'danger',
} as const

const BUTTON_ICON_POSITION = {
  LEFT: 'left',
  RIGHT: 'right',
} as const

const COMPONENT_SIZE = {
  SMALL: 'small',
  DEFAULT: 'default',
} as const

export type ComponentSizeType = ValueOf<typeof COMPONENT_SIZE>

export { BUTTON_VARIANT, BUTTON_ICON_POSITION, COMPONENT_SIZE }

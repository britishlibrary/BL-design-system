import { ValueOf } from '../../helpers'

const BUTTON_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DANGER: 'danger',
} as const

export const COMPONENT_SIZE = {
  FORMS: 'forms',
  SMALL: 'small',
} as const

export type ComponentSizeType = ValueOf<typeof COMPONENT_SIZE>

export { BUTTON_VARIANT }
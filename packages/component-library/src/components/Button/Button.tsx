import React, { FormEvent } from 'react'

import { BUTTON_VARIANT } from './constants'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledButton } from './partials/StyledButton'
import { StyledText } from './partials/StyledText'
import { ComponentSizeType, COMPONENT_SIZE } from './constants'
import { ValueOf } from '../../helpers'

export type ButtonVariantType = ValueOf<typeof BUTTON_VARIANT>

interface ButtonBaseProps extends Omit<ComponentWithClass, 'children'> {
  /**
   * Toggles whether the component is disabled or not (preventing user
   * interaction).
   */
  isDisabled?: boolean
  /**
   * Optional handler called when the component is clicked.
   */
  onClick?: (event: FormEvent<HTMLButtonElement>) => void
  /**
   * Size of the component.
   */
  size?: ComponentSizeType
  /**
   * HTML type of the component (forms should use the `submit` type).
   */
  type?: 'button' | 'submit'
  /**
   * Type of component to display (style varies accordingly).
   */
  variant?: ButtonVariantType
}

export interface ButtonWithTextProps extends ButtonBaseProps {
  /**
   * Text to display within the component.
   */
  children: string
  /**
   * Value for the HTML title attribute. Should be set for
   * icon-only buttons to make them accessible.
   */
  title?: string
}

export interface ButtonWithIconOnlyProps extends ButtonBaseProps {
  children?: never
  title: string
}

export type ButtonProps = ButtonWithTextProps | ButtonWithIconOnlyProps

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  isDisabled,
  isLoading = false,
  onClick,
  size = COMPONENT_SIZE.FORMS,
  title,
  type = 'button',
  variant = BUTTON_VARIANT.PRIMARY,
  ...rest
}) => {
  return (
    <StyledButton
      className={className}
      $variant={variant}
      $size={size}
      data-testid="button"
      disabled={isDisabled || isLoading}
      type={type}
      aria-label={children}
      title={title}
      onClick={onClick}
      {...rest}
    >
      <StyledText $isLoading={isLoading}>{children}</StyledText>
    </StyledButton>
  )
}

Button.displayName = 'Button'
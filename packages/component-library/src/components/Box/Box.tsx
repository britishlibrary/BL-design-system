import React from 'react'

import { BoxPaddingType, BOX_PADDING, BOX_VARIANT } from './constants'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledBox } from './partials/StyledBox'
import { ValueOf } from '../../helpers'

export type BoxVarientType = ValueOf<typeof BOX_VARIANT>

interface BoxBaseProps extends Omit<ComponentWithClass, 'children'> {
  /**
   * Size of the component.
   */
  padding?: BoxPaddingType
  /**
   * Type of component to display (style varies accordingly).
   */
  variant?: BoxVarientType
}

export interface BoxProps extends BoxBaseProps {
  /**
   * Component to display within the component
   */
  children: React.ReactNode | React.ReactNode[]
  /**
   * Optional click event handler for the component
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export const Box: React.FC<BoxProps> = ({
  className,
  padding = BOX_PADDING.LARGE,
  variant = BOX_VARIANT.LIGHT,
  onClick,
  ...rest
}) => {
  return (
    <StyledBox
      className={className}
      $variant={variant}
      $padding={padding}
      onClick={onClick}
      {...rest}
      style={{ margin: '20px' }}
    />
  )
}

Box.displayName = 'Box'

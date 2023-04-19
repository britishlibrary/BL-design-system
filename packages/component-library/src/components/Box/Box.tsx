import React from 'react'

import { BoxSizeType, BOX_SIZE, BOX_VARIANT } from './constants'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledBox } from './partials/StyledBox'
import { ValueOf } from '../../helpers'

export type BoxVarientType = ValueOf<typeof BOX_VARIANT>

interface BoxBaseProps extends Omit<ComponentWithClass, 'children'> {
  /**
   * Size of the component.
   */
  size?: BoxSizeType
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
}

export const Box: React.FC<BoxProps> = ({
  className,
  size = BOX_SIZE.LARGE,
  variant = BOX_VARIANT.LIGHT,
  ...rest
}) => {
  return (
    <StyledBox
      className={className}
      $variant={variant}
      $size={size}
      {...rest}
      style={{ margin: '20px' }}
    />
  )
}

Box.displayName = 'Box'

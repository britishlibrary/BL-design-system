import {
  getBreakpoint,
  getMediaQuery,
  getAnimation,
  getColor,
  getTypography,
  getShadow,
  getSpacing,
  getZIndex,
} from './getters'

export default {
  mq: getMediaQuery,
  mediaQuery: getMediaQuery,
  breakpoint: getBreakpoint,
  animation: getAnimation,
  color: getColor,
  fontSize: getTypography,
  shadow: getShadow,
  spacing: getSpacing,
  zIndex: getZIndex,
}

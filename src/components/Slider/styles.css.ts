import { theme } from '@/styles/theme.css'
import { createVar, style } from '@vanilla-extract/css'

export const sliderLevelVar = createVar()

export const sliderWrapper = style({
  position: 'relative',
  width: '100%',
  zIndex: 1,
  background: theme.colors.primary_bg
})

export const sliderLevel = style({
  width: sliderLevelVar,
  content: '""',
  height: '1.4rem',
  position: 'absolute',
  margin: 0,
  top: 0,
  zIndex: -1,
  background: theme.colors.primary
})

export const sliderStyle = style({
  WebkitAppearance: 'none',
  appearance: 'none',
  height: '1.4rem',
  cursor: 'pointer',
  width: '100%',

  '::-webkit-slider-thumb': {
    background: theme.colors.primary,
    WebkitAppearance: 'none',
    height: '2rem',
    width: '1rem'
  }
})

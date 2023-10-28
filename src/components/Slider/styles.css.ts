import { createVar, style } from '@vanilla-extract/css'

export const sliderLevelVar = createVar()

export const sliderWrapper = style({
  position: 'relative',
  width: 'fit-content'
})

export const sliderLevel = style({
  width: sliderLevelVar,
  content: '""',
  height: '1.4rem',
  position: 'absolute',
  margin: 0,
  top: 0,
  zIndex: -1,
  background: '#e45'
  // background: `linear-gradient(
  //   to bottom right,
  //   transparent 50%,
  //   #e45 0%
  // )`
})

export const sliderStyle = style({
  WebkitAppearance: 'none',
  appearance: 'none',
  height: '1.4rem',
  cursor: 'pointer',

  '::-webkit-slider-thumb': {
    background: '#e34',
    WebkitAppearance: 'none',
    height: '2rem',
    width: '1rem'
  }
})

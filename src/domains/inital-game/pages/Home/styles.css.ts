import { style } from '@vanilla-extract/css'

export const logoImg = style({
  maxWidth: 200,
  maxHeight: 200,
  width: '100%',
  pointerEvents: 'none'
})

export const optionsPlayContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 32,
  zIndex: 1
})

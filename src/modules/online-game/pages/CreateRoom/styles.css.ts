import { style } from '@vanilla-extract/css'

export const createRoomContainer = style({
  maxWidth: 480,
  width: '100%',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  alignItems: 'center'
})

export const revealWapper = style({
  width: '100%'
})

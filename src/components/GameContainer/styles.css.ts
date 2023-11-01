import { createVar, style } from '@vanilla-extract/css'

export const gameGap = createVar()

export const gameContainer = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: gameGap,
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'url("../bg.webp") rgba(1, 11, 51, 0.539)',
  backgroundBlendMode: 'overlay',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  padding: 16
})

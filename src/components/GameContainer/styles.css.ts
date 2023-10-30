import { createVar, style } from '@vanilla-extract/css'

export const gameGap = createVar()

export const gameContainer = style({
  height: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  gap: gameGap,
  alignItems: 'center',
  justifyContent: 'center',
  background: 'url("../bg.webp") rgba(1, 11, 51, 0.539)',
  backgroundBlendMode: 'overlay',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  padding: 16
})

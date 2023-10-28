import { style } from '@vanilla-extract/css'

export const gameContainer = style({
  height: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'url(bg.webp) rgba(1, 11, 51, 0.539)',
  backgroundBlendMode: 'overlay',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
})

export const gameBoard = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
  width: 320,
  height: 320,
  background: 'rgba(46, 1, 51, 0.104)',
  overflow: 'hidden',
  gap: 0,
  padding: 2,
  margin: '16px 0',
  gridAutoRows: 'minmax(140px , auto)',

  '@media': {
    'screen and (min-width: 600px)': {
      width: 400,
      height: 400
    },

    'screen and (min-width: 768px)': {
      width: 480,
      height: 480
    }
  }
})

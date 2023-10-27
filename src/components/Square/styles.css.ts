import { style } from '@vanilla-extract/css'

export const squareContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  position: 'relative',
  selectors: {
    '&:not(:nth-child(-n + 3))': {
      borderTop: '1vh solid #9245e4'
    },
    '&:nth-child(n+2):nth-child(-n+3), &:nth-child(n+5):nth-child(-n+6), &:nth-child(n+8):nth-child(-n+9) ':
      {
        borderLeft: '1vh solid #9245e4'
      }
  }
})

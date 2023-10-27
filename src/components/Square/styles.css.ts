import { style } from '@vanilla-extract/css'

export const squareContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  position: 'relative',
  zIndex: 0,
  selectors: {
    '&:not(:nth-child(-n + 3))': {
      borderTopColor: '#9245e4',
      borderTopWidth: '0.5vh',
      borderTopStyle: 'solid',

      '@media': {
        'screen and (min-width: 768px)': {
          borderTopWidth: '1vh'
        }
      }
    },
    '&:nth-child(n+2):nth-child(-n+3), &:nth-child(n+5):nth-child(-n+6), &:nth-child(n+8):nth-child(-n+9) ':
      {
        borderLeftColor: '#9245e4',
        borderLeftWidth: '0.5vh',
        borderLeftStyle: 'solid',

        '@media': {
          'screen and (min-width: 768px)': {
            borderLeftWidth: '1vh'
          }
        }
      }
  }
})

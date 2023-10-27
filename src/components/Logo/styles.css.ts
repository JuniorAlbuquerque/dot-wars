import { style } from '@vanilla-extract/css'

export const logoStyle = style({
  fontSize: '32px',
  display: 'flex',
  overflow: 'hidden',
  color: '#fff',
  textShadow: `
    2px 0 #98135e, -2px 0 #98135e, 0 2px #98135e, 0 -2px #98135e,
    1px 1px #f4d0b5, -1px -1px #f4d0b5, 1px -1px #f4d0b5, -1px 1px #f4d0b5
  `,

  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '48px'
    }
  }
})

import { style } from '@vanilla-extract/css'

export const inputWrapper = style({
  color: '#fff',
  minWidth: 280,
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  position: 'relative',
  zIndex: 2,
  width: '100%',

  '::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: 'calc(100% - 32px)',
    border: '8px solid #ff0088',
    zIndex: -1,
    bottom: -5,
    right: -5
  }
})

export const inputStyle = style({
  border: '8px solid #ffab1a',
  padding: '16px 20px',
  width: '100%'
})

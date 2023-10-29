import { style, styleVariants } from '@vanilla-extract/css'

export const buttonStyleBase = style({
  width: 'fit-content',
  background: '#f16b28',
  padding: 24,
  minWidth: 200,
  fontSize: 24,
  color: 'white',
  cursor: 'pointer',
  height: 'fit-content',
  textAlign: 'center',
  transition: 'transform',
  position: 'relative',
  selectors: {
    '&:active': {
      top: 8,
      boxShadow: `
        -4px 2px 1px 1px #f16b28,
        -4px -2px 1px 1px #f16b28,
        4px 0px 1px 1px #f16b28 
      `
    }
  },
  ':after': {
    content: '""',
    background: '#ffba1a',
    position: 'absolute',
    left: '-1%',
    top: 0,
    width: '102%',
    height: '100%',
    zIndex: -1
  },
  ':before': {
    content: '""',
    background: '#ffba1a',
    position: 'absolute',
    left: 0,
    top: '-4%',
    width: '100%',
    height: '113%',
    zIndex: -1
  }
})

export const buttonStyle = styleVariants({
  fullWidth: [
    buttonStyleBase,
    {
      width: '100%',
      fontSize: 20
    }
  ],
  base: [buttonStyleBase]
})

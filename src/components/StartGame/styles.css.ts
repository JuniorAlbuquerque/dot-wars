import { style, styleVariants } from '@vanilla-extract/css'

export const startGameOverlay = style({
  background: '#4e074fb7',
  position: 'absolute',
  overflow: 'hidden',
  top: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  zIndex: 10,
  width: '100%'
})

export const flexCenterBase = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

export const flexWrapper = styleVariants({
  mdGap: [
    flexCenterBase,
    {
      gap: 36
    }
  ],
  base: [
    flexCenterBase,
    {
      gap: 12
    }
  ]
})

export const playButtonStyle = style({
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
    left: '-2.5%',
    top: 0,
    width: '105%',
    height: '100%',
    zIndex: -1
  },
  ':before': {
    content: '""',
    background: '#ffba1a',
    position: 'absolute',
    left: 0,
    top: '-5%',
    width: '100%',
    height: '113%',
    zIndex: -1
  }
})

import { css } from '@styled/css'

export const style = css({
  width: 'fit-content',
  bg: '#f16b28',
  p: 4,
  minW: 200,
  fontSize: '2xl',
  color: 'white',
  cursor: 'pointer',
  h: 'fit',
  transition: 'transform',
  position: 'relative',
  _active: {
    top: 2,
    boxShadow: `
      -4px 2px 1px 1px #f16b28,
      -4px -2px 1px 1px #f16b28,
      4px 0px 1px 1px #f16b28 
    `
  },
  _after: {
    content: '""',
    background: '#ffba1a',
    position: 'absolute',
    left: '-2.5%',
    top: 0,
    width: '105%',
    height: '100%',
    zIndex: -1
  },
  _before: {
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

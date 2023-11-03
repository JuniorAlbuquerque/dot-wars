import { style } from '@vanilla-extract/css'

export const modalOverlay = style({
  background: '#4e074fb7',
  position: 'fixed',
  overflow: 'hidden',
  top: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  zIndex: 10,
  width: '100%',
  padding: 8
})

import { theme } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const settingsContainer = style({
  position: 'absolute',
  bottom: 20,
  right: 20,
  zIndex: 1
})

export const settingsButton = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  cursor: 'pointer',
  width: 40,
  height: 40,

  selectors: {
    '&:active': {
      top: 2
    }
  },

  '::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: theme.colors.secondary,
    zIndex: -1,
    bottom: -3,
    right: -3
  }
})

export const logoImg = style({
  width: 100,
  height: 100
})

export const settingsModalContainer = style({
  background: '#110E37',
  width: '100%',
  maxWidth: 480,
  borderRadius: 8,
  padding: 16,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 16,
  position: 'relative',
  border: `4px solid ${theme.colors.primary}`
})

export const menuTitle = style({
  fontSize: 20,
  color: theme.colors.primary_bg,
  marginBottom: 16,
  width: '100%',
  background: 'rgba(250, 209, 180, 0.23)',
  textAlign: 'center',
  padding: 16,
  borderRadius: 8
})

export const controlsContainer = style({
  color: theme.colors.primary_bg,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  zIndex: 1
})

export const sliderWrapper = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8
})

export const buttonSettings = style({
  padding: 16,
  textAlign: 'center',
  background: '#f16b28',
  border: `4px solid ${theme.colors.primary}`,
  cursor: 'pointer',
  position: 'relative',

  selectors: {
    '&:active': {
      top: 2
    }
  }
})

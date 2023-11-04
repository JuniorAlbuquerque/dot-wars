import { theme } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const notFoundContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: 32,
  gap: 24,
  color: theme.colors.primary,
  textAlign: 'center',

  zIndex: 1
})

import { theme } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const errorContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: 32,
  gap: 16,
  color: theme.colors.primary,
  textAlign: 'center',

  zIndex: 1
})

export const puppetsWrapper = style({
  display: 'flex',
  gap: 24,
  marginBottom: 16
})

import { theme } from '@/styles/theme.css'
import { keyframes, style } from '@vanilla-extract/css'

const ballX = keyframes({
  '0%, 25%, 75%, 100%': {
    backgroundPosition: '25% 0,75% 0'
  },
  '40%': {
    backgroundPosition: '25% 0,85% 0'
  },
  '90%': {
    backgroundPosition: '15% 0,75% 0'
  }
})

const moveX = keyframes({
  '100%': { transform: 'translate(0.15px)' }
})

export const loadingRoomContainer = style({
  color: theme.colors.primary,
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  alignItems: 'center',
  fontSize: 28
})

export const loader = style({
  width: '108px',
  height: '16px',
  background: `
    radial-gradient(circle 9px at 8px center, ${theme.colors.secondary} 100%, transparent 0),
    radial-gradient(circle 9px at 8px center, ${theme.colors.secondary} 100%, transparent 0)`,
  backgroundSize: '16px 16px',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  animation: `${ballX} 1s linear infinite`,

  ':after': {
    content: '""',
    position: 'absolute',
    width: '16px',
    height: '16px',
    borderRadius: '20%',
    background: theme.colors.primary,
    inset: 0,
    margin: 'auto',
    animation: `${moveX} 1s cubic-bezier(0.5,300,0.5,-300) infinite`
  }
})

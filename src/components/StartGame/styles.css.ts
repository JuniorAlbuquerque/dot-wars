import { theme } from '@/styles/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

export const modalWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  alignItems: 'center'
})

export const flexCenterBase = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: '100%',
  maxWidth: 480,
  borderRadius: 8,
  zIndex: 1
})

export const flexWrapper = styleVariants({
  mdGap: [
    flexCenterBase,
    {
      gap: 36,
      background: 'rgba(17, 14, 55, 0.72)',
      padding: 24
    }
  ],
  base: [
    flexCenterBase,
    {
      gap: 12
    }
  ]
})

export const playerNameBase = style({
  fontSize: 24,
  color: '#fff'
})

export const playerNameStyle = styleVariants({
  player_one: [playerNameBase, { color: theme.colors.primary }],
  player_two: [playerNameBase, { color: theme.colors.secondary }]
})

export const drawWrapper = style({
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  alignItems: 'center',

  fontSize: 24
})

export const puppetsWrapper = style({
  display: 'flex',
  gap: 24
})

export type PlayerStyle = keyof typeof playerNameStyle

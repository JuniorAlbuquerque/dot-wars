import { style, styleVariants } from '@vanilla-extract/css'

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
